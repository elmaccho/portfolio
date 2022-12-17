const english = document.getElementById("en")
const polish = document.getElementById("pl")

const navHome = document.getElementById("lang_home")
const navAboutme = document.getElementById("lang_aboutme")
const navProjects = document.getElementById("lang_projects")
const navContact = document.getElementById("lang_contact")

const description = document.getElementById("lang_description")



english.addEventListener("click", function(){

    english.classList.add("active")
    polish.classList.remove("active")

    console.log("eng")

    navHome.innerHTML = "home"
    navAboutme.innerHTML = "about me"
    navProjects.innerHTML = "projects"
    navContact.innerHTML = "contact"

    description.innerHTML= `For a year and a half I have been learning how to create websites from Front-End and Back-end websites.
    Although I have no experience in science, I am constantly expanding my knowledge of new technologies.
    When some problem at work, I try to go by myself,
    and learn from your mistakes at the same time.`

    document.getElementById("lang_aboutme_title").innerHTML = "About me"
    document.getElementById("lang_skills_title").innerHTML = "Skills"
    document.getElementById("lang_projects_title").innerHTML = "Projects"
    document.getElementById("lang_contact_title").innerHTML = "Contact"

document.getElementsByName('imienazw')[0].placeholder='Full name';
document.getElementsByName('email')[0].placeholder='Email';
document.getElementsByName('temat')[0].placeholder='Subject';
document.getElementsByName('wiadomosc')[0].placeholder='Message'
document.getElementById("contactme").value="send"
})

polish.addEventListener("click", function(){
    
    polish.classList.add("active")
    english.classList.remove("active")
    
    console.log("pl")

    navHome.innerHTML = "start"
    navAboutme.innerHTML = "o mnie"
    navProjects.innerHTML = "projekty"
    navContact.innerHTML = "kontakt"

    description.innerHTML= `Od półtora roku uczę się tworzenia stron internetowych ze strony Front-Endu jak i Back-endu. 
    Choć nie posiadam doświadczenia zawodowego, ciągle poszerzam swoją wiedzę o nowe technologie. 
    Kiedy napotykam jakiś problem podczas pracy, staram się go samodzielnie rozwiązać, 
    a przy okazji wyciągać wnioski ze swoich błędów.`

    document.getElementById("lang_aboutme_title").innerHTML = "O mnie"
    document.getElementById("lang_skills_title").innerHTML = "Umiejetnosci"
    document.getElementById("lang_projects_title").innerHTML = "Projekty"
    document.getElementById("lang_contact_title").innerHTML = "Kontakt"

    document.getElementsByName('imienazw')[0].placeholder='Imię i nazwisko';
    document.getElementsByName('email')[0].placeholder='Email';
    document.getElementsByName('temat')[0].placeholder='Temat';
    document.getElementsByName('wiadomosc')[0].placeholder='Wiadomość'
    document.getElementById("contactme").value="Prześlij"
})