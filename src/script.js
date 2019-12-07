
const listEl=document.querySelector("#lista")
const inputEl=document.querySelector("input[name=username]")
const botao=document.querySelector("#botao")

var repos=[]

botao.onclick=clicar


function clicar(){
    
    setSpan('carregando...')
    adicionar()
        .then(()=>{
            setSpan()
            renderRepos()
        })
        .catch(erro=>{
            setSpan(erro)
            console.log(erro)})
}


function adicionar(){

    let user=inputEl.value
    let URL=`https://api.github.com/users/${user}`
    console.log(URL)
    return new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest()

        xhr.open("GET",URL)
        xhr.send(null)

        xhr.onreadystatechange=function(){
            if(xhr.readyState===4){
                if(xhr.status===200){
                    repos.push(JSON.parse(xhr.responseText))
                    resolve()
                }else{
                    reject("O repositório não existe")
                }
            }
        }
    })
}


function renderRepos(){
    listEl.innerHTML=""
    inputEl.value=""
    for(let i=0;i<repos.length;i++){
        var listItem=createListItem(repos[i])
        listEl.appendChild(listItem)
    }
}

function createListItem(repo){
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
}

function setSpan(message=""){
    let span=document.querySelector(".temp_span")
    span.innerText=message
}



