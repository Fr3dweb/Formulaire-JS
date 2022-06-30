const inputName =document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form =document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e)=>{
    pseudo = e.target.value;
})

select.addEventListener('input', (e) => {
     language = e.target.value;
})

form.addEventListener("submit", (e) =>{
     e.preventDefault(); // empeche le changment de page avec les formulaires
        
    if (cgv.checked) {
        document.querySelector("form > div").innerHTML =  //form>div veut dire aller chercher l'enfant div de form
        `<h3>Pseudo : ${pseudo}<h3>
        <h4>Langage préféré : ${language}<h4>`;
 }  else {
    alert ("Veuillez accepter les CGV");
 }
});
