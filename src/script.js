const object={

listEl:document.querySelector("#lista"),
inputEl:document.querySelector("input[name=username]"),
botao:document.querySelector("#botao"),
repos:[],




clicar(){
    
    this.setSpan('carregando...')
    this.adicionar()
        .then(()=>{
            this.setSpan()
            this.renderRepos()
        })
        .catch(erro=>{
            this.setSpan(erro)
            console.log(erro)})
},


adicionar(){

    let user=this.inputEl.value
    let URL=`https://api.github.com/users/${user}`
    console.log(URL)
    return new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest()

        xhr.open("GET",URL)
        xhr.send(null)

        xhr.onreadystatechange=function(){
            if(xhr.readyState===4){
                if(xhr.status===200){
                    this.repos.push(JSON.parse(xhr.responseText))
                    resolve()
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

}//end object

object.botao.onclick=object.clicar
