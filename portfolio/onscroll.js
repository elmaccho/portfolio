const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if(entry.isIntersecting){



          document.querySelector("#lang_aboutme_title").classList.add("fadeIn")
          document.querySelector(".me").classList.add("fadeIn")
          document.querySelector(".skills").classList.add("fadeIn")
          document.querySelector("#lang_projects_title").classList.add("fadeIn")
          document.querySelector("#lang_contact_title").classList.add("fadeIn")
          document.querySelector(".form").classList.add("fadeIn")
      }
  })
})

observer.observe(document.querySelector("#lang_aboutme_title"))
observer.observe(document.querySelector(".me"))
observer.observe(document.querySelector(".skills"))
observer.observe(document.querySelector(".projects"))
observer.observe(document.querySelector(".contact"))