let tabFunc = (evt, tab) =>{
  let tabContent = document.getElementsByClassName("card-container");
  let tabLinks = document.getElementsByClassName("tab_link");

  for(let i = 0; i < tabContent.length; i++){
    tabContent[i].style.display = "none";
  }

  for (let j = 0; j < tabLinks.length; j++) {
    tabLinks[j].className = tabLinks[j].className.replace(" active", "");
  }

  document.getElementById(tab).style.display = "flex";
  evt.currentTarget.className += " active";
}

let submitBtn = document.getElementById('submit-button');
let checkbox = document.getElementById('checkbox');

checkbox.onchange = function(){
  submitBtn.disabled = !this.checked;
}

let sandwichAlert = ()=>{
  window.alert('🥪🥪🥪🥪');
}
