const d =document;
// https://youtu.be/O-G0Zcy43nc?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA
export default function scrollSpy(){
    const $sections = d.querySelectorAll("section[data-scroll-spy]");
    const cb = (entries)=>{
        //console.log("entries", entries);
        entries.forEach(entry=>{
            //console.log("entry", entry)
            const id = entry.target.getAttribute("id") ;
            //console.log("id", id);
            if(entry.isIntersecting){
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).
                classList.add("active")

            }else{

                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).
                classList.remove("active")
            }
        })

    }
    const observer = new IntersectionObserver(cb, {
        //root
        //rootMargin:"-250px" // se pone 250px para mover la intersección y simular que solo hay una
        threshold:[0.5,0.75] //limites de 0 a 1  con [ coloca el rango donde nos activa la intersección]
    });

    $sections.forEach(el => observer.observe(el))
}