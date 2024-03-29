// Récupération des paramètres dans l'URL
const urlString = window.location.search;
console.log(urlString);

// Triage des paramètres
const urlParams = new URLSearchParams(urlString);

// Langue du site
lang = getCookie("lang");
console.log(lang);
if(lang != "FR" && lang != "EN"){ lang = "FR"; setCookie("lang", "FR", 366);}


// Page demandée
const loadedPage = urlParams.get('page');