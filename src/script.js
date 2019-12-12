const object={

    listEl:document.querySelector("#lista"),
    inputEl:document.querySelector("input[name=username]"),
    botao:document.querySelector("#botao"),
    repos:[],
    alredyAdd:[],

    clicar(){
        this.setSpan("Carregando...")
        this.adicionar()
            .then((message)=>{
                this.setSpan(message)
                this.renderRepos()
            })
            .catch(erro=>{  
                this.setSpan(erro)
            })
    },

    

    adicionar(){
        let user=this.inputEl.value
        let URL=`https://api.github.com/users/${user}`

        return new Promise((resolve,reject)=>{
            const xhr=new XMLHttpRequest()

            xhr.open("GET",URL)
            xhr.send(null)
            self=this
            xhr.onreadystatechange=function(){

                if(xhr.readyState===4){
                    if(xhr.status===200){
                       
                        var resposta=(JSON.parse(xhr.responseText))
                        
                        const is=self.verify(resposta.login,self.alredyAdd)
                       

                        if(is===true) {
                            resolve("repositório ja adicionado")
                            return

                        }else{
                        self.repos.push(resposta)
                        self.alredyAdd.push(resposta.login)
                        resolve()
                        }
                    }else{
                        reject("O repositório não existe")
                    }
                }
            }
        })
    },


    renderRepos(){
        this.listEl.innerHTML=""
        this.inputEl.value=""
        for(let i=0;i<this.repos.length;i++){
            var listItem=this.createListItem(this.repos[i])
            this.listEl.appendChild(listItem)
        }
    },

    createListItem(repo){
        let li=document.createElement("li")
        let link=document.createElement("a")
        let strong=document.createElement("strong")
        let img=document.createElement("img")

        let linkContent=document.createTextNode("Acesse")
        let strongContent=document.createTextNode(repo.login)

        img.setAttribute("src",repo.avatar_url)
        strong.appendChild(strongContent)
        link.setAttribute("href",repo.html_url)
        link.setAttribute("target","_blank")
        link.appendChild(linkContent)

        li.appendChild(img)
        li.appendChild(strong)
        li.appendChild(link)

        return li
    },

    setSpan(message=""){
        let span=document.querySelector(".temp_span")
        span.innerText=message
    },


    verify(username,list){  
        let alredy=list.find(item=>item===username)
        return alredy?true:false 
    },


}//end object


object.botao.onclick=object.clicar.bind(object)
