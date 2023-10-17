// Scrolling sticky header

window.onload = ()=>{

    const navbar = document.querySelector('nav#navbar')
    
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    
    let lastScroll = 0;
    
    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY
        if (currentScroll <= 0) {
            navbar.classList.remove(scrollUp);
            return;
        }
    
        if (currentScroll > lastScroll && !navbar.classList.contains(scrollDown)) {
            //down
            navbar.classList.remove(scrollUp);
            navbar.classList.add(scrollDown);
        } else if (
            currentScroll < lastScroll && navbar.classList.contains(scrollDown)) {
            navbar.classList.remove(scrollDown);
            navbar.classList.add(scrollUp);
        }
        lastScroll = currentScroll;
    })    
}
