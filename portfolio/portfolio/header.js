window.addEventListener("scroll", function(){
    var header = document.querySelector('.nav-bar')
    header.classList.toggle("sticky", window.scrollY > 0)
})

const closeBtn = document.getElementById("closeBtn")
const openBtn = document.getElementById("openBtn")
const navBar = document.getElementById("navBar")


closeBtn.addEventListener("click", function(){
    console.log("close")
    
    navBar.classList.remove("navOpen")
    navBar.classList.add("navClose")
})

openBtn.addEventListener("click", function(){
    console.log("open")

    navBar.classList.remove("navClose")
    navBar.classList.add("navOpen")
})

document.addEventListener('click', function handleClickOutsideBox(event) {
 
    if (!document.querySelector('.nav-bar').contains(event.target) && !openBtn.contains(event.target)) {
        navBar.classList.add("navClose")
        console.log("also close")
    }
  });


