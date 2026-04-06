"use strict;"

function ChangerLangue(){

    if(currentLangue == 1){
        currentLangue = 2;
        buttonLangue.value = "English";

        legend.innerHTML = "Connection";
        username.innerHTML = "Nom d'usager: ";
        password.innerHTML = "Mot de passe: ";
        submit.value = "Envoyer";
        reset.value = "Reinitialiser";

    }
    else{
        currentLangue = 1;
        buttonLangue.value = "Francais";

        legend.innerHTML = "Login";
        username.innerHTML = "Username: ";
        password.innerHTML = "Password: ";
        submit.value = "Submit";
        reset.value = "Reset";

    }

}

function envoyerDonne(){
console.log(usernameVal.value);
console.log(passwordVal.value);
    if(usernameVal.value == userA && passwordVal.value == passA){

        window.location.replace("accueil.html");
    }
    else{
        if(currentLangue == 1){
            divErreur.innerHTML = "Error username or password incorrect. Try again";
        }
        else{

            divErreur.innerHTML = "Erreur nom d'usager ou mot de passe incorrect. Reessayer";
        }
    }

}

let userA = "Antho304";
let passA = "Nelly1013$";


let currentLangue = 1;
let buttonLangue = document.getElementById("langue");
buttonLangue.addEventListener("click", ChangerLangue);

let legend = document.querySelector("legend");
let username = document.getElementById("userText");
let password = document.getElementById("passText");
let submit = document.getElementById("submit");
let reset = document.getElementById("reset");
let divErreur = document.getElementById("erreur");

let usernameVal = document.getElementById("user");
let passwordVal = document.getElementById("pass");



submit.addEventListener("click", envoyerDonne);
