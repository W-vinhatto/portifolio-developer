
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