

function saveSignIn(){
  window.localStorage.setItem("names", JSON.stringify(names))
}

function loadSignIn(){
  let namesData = JSON.parse(window.localStorage.getItem("names"))
  if(namesData){
      names = namesData
  }
}