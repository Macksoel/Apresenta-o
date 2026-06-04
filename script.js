function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    
    //Pegor a img
    const img = document.querySelector("#profile img")

    // Subsituir a img
    if(html.classList.contains('light')) {
        // Se tiver light mod, adicione a img light
        img.setAttribute("src", "./assets/avatar.png")
    }  else {
        // Se tiver som light mode, manter a img normal 
        img.setAttribute("src","../assets/avatar-light@2x.png")
     }
            
}