const object={

  listEl:document.querySelector("#lista"),
  inputEl:document.querySelector("input[name=username]"),
  botao:document.querySelector("#botao"),
  repos:[],
  alredyAdd:[],

async adicionar(){
  this.setSpan("Carregando...");

  let userName=this.inputEl.value;
  let URL=`https://api.github.com/users/${userName}`;
  const response = await fetch(URL);
  const resposta = await response.json();

  if(response.status!==200){
    this.setSpan("O repositório não existe");
    return;
  }

  const is=this.verify(resposta.login,this.alredyAdd);

  if(is===true) {
    this.setSpan("Repositório já adicionado");
  }else{
    this.repos.push(resposta);
    this.alredyAdd.push(resposta.login);
    this.setSpan();
    this.renderRepos();
  }
},

renderRepos(){
  this.listEl.innerHTML="";
  this.inputEl.value="";
  for(let i=0;i<this.repos.length;i++){
    var listItem=this.createListItem(this.repos[i]);
    this.listEl.appendChild(listItem);
  }
},

createListItem(repo){
  let li=document.createElement("li");
  let link=document.createElement("a");
  let strong=document.createElement("strong");
  let img=document.createElement("img");

  let linkContent=document.createTextNode("Acesse");
  let strongContent=document.createTextNode(repo.login);

  img.setAttribute("src",repo.avatar_url);
  strong.appendChild(strongContent);
  link.setAttribute("href",repo.html_url);
  link.setAttribute("target","_blank");
  link.appendChild(linkContent);

  li.appendChild(img);
  li.appendChild(strong);
  li.appendChild(link);

  return li;
},

setSpan(message=""){
  let span=document.querySelector(".temp_span");
  span.innerText=message;
},


verify(username,list){  
  let alredy=list.find(item=>item===username);
  return alredy?true:false; 
},

}//end object


object.botao.onclick=object.adicionar.bind(object);
