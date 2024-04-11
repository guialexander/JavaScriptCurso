const d = document;

export default function searchFilters(input,selector){
    d.addEventListener("keyup",(e)=>{
        if(e.target.matches(input)){
            //console.log(e.key)            
            const { name, value } = e.target; // handchange para guardar los valores del input
            //console.log(value.toLowerCase());// convierte en minusculas pero toca en el forEach
            if(e.key === "Escape"){
                value="";
            
            }
            d.querySelectorAll(selector).forEach(el =>el.textContent.toLowerCase().includes(value.toLowerCase())
            ?el.classList.remove("filter"):
            el.classList.add("filter"))
        }
    })

}
