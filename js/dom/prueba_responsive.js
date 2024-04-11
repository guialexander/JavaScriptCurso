const d= document;

export default function responsiveTester(form){
    const $form = d.getElementById(form);
    let tester;
    
    d.addEventListener("submit", (e)=>{
      
        if(e.target === $form){
            e.preventDefault();
            //console.log($form.url.value)// formulario.name del input, lo que hay dentro 
            tester = window.open($form.url.value, "tester", `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`);
        }
    });

    d.addEventListener("click",(e)=>{
        if(e.target === $form.cerrar) tester.close(); // cerrar la ventana que tenemos en tester.

    });

}