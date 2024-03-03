const form = document.querySelector(".formulario_name")

function contato() {
    form.style.right = "50%";
    form.style.transform = "translateX(50%)"
}

function escForm() {
    form.style.right = "-294px";
    form.style.transform = "translateX(0)"
}



const Myobserver = new IntersectionObserver( (entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting === true) {
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    })
})


const elements = document.querySelectorAll(".hiden")

elements.forEach((element)=> Myobserver.observe(element))

Myobserver.observe(elements)