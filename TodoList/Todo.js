let inputs = document.getElementById("input-box");
let text = document.querySelector(".text")

function Add(){
    if(inputs.value == ""){
            alert("Please Enter Task")
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value} <i class="fa fa-trash"></i>` ;
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("i").addEventListener("click", remove);
        function remove() {
           newEle.remove();
         }
      }
}