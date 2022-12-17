// var check = function() {
//     const imienazw = document.getElementById('imienazw')
//     const email = document.getElementById('email')
//     const temat = document.getElementById('temat')
//     const wiadomosc = document.getElementById('wiadomosc')


//     if(imienazw.value.length<1){
//         document.getElementById('imienazw').style.backgroundColor = "red"
//     }
// }

function checkform()
{
    var f = document.forms["contact"].elements;
    var cansubmit = true;

    for (var i = 0; i < f.length; i++) {
        document.getElementById('submitbutton').disabled = !cansubmit;
    }
}

// function validate()
// {
//     var inputs = document.getElementsByClassName('valid'); 
//     for(var i=0; i < inputs.length; i++) {
//         if(inputs[i].value === '')
//         {
//             alert("Nie wszystkie pola zostały wypełnione!");
//             i = inputs.length + 1;
//         }
//     }
// }