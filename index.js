let initialNavStyle = document.querySelector("nav").style.cssText

window.addEventListener("scroll", (e) => {
    if (window.scrollY > 50) {
        document.querySelector("nav").style.cssText = initialNavStyle + "position: fixed"
    }else{
        document.querySelector("nav").style.cssText = initialNavStyle + "position: block"
    }
})

