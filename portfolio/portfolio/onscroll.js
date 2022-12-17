const observer0 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.querySelector("#lang_aboutme_title").classList.add("fadeIn")
    }
  })
}) 

    const observer1 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if(entry.isIntersecting){
            document.querySelector(".me").classList.add("fadeIn")
          }
        })
      })


      const observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
              document.querySelector(".skills").classList.add("fadeIn")
            }
          })
        })

        const observer3 = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if(entry.isIntersecting){
                document.querySelector(".projects").classList.add("fadeIn")
              }
            })
          })

          const observer4 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                  document.querySelector(".contact").classList.add("fadeIn")
                }
              })
            })
      
    // if(entry.isIntersecting){
      //   document.querySelector(".me").classList.add("fadeIn")
      // }

      // if(entry.isIntersecting){
      //   document.querySelector(".skills").classList.add("fadeIn")
      // }

      // if(entry.isIntersecting){
      //   document.querySelector("#lang_projects_title").classList.add("fadeIn")
        
      // }

      // if(entry.isIntersecting){
      //   document.querySelector("#lang_contact_title").classList.add("fadeIn")
        
      // }

      // if(entry.isIntersecting){
      //   document.querySelector(".form").classList.add("fadeIn")
        
      // }


observer0.observe(document.querySelector("#lang_aboutme_title"))
observer1.observe(document.querySelector(".me"))
observer2.observe(document.querySelector(".skills"))
observer3.observe(document.querySelector(".projects"))
observer4.observe(document.querySelector(".contact"))