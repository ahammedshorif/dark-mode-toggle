const inputEl = document.querySelector('.input');
const bodyEl = document.querySelector('body');

// inputEl.checked= false;
// updateBody();

function updateBody(){
    if(inputEl.checked==true){
        bodyEl.style.backgroundColor ="black";                
    }
    else{
        bodyEl.style.backgroundColor ="white";
    }
}

inputEl.addEventListener("input", ()=>{
    updateBody();
})