function toggleMenu(element){
	
	val = getCookie("menu-"+lang+element);
	if(val == "true"){
		setCookie("menu-"+lang+element, false, 366);
	}
	else if(val == "" || val == "false"){
		setCookie("menu-"+lang+element, true, 366);
	}
	showMenu(element);
	
}

function showMenu(element){
	lang = getCookie("lang");
	val = getCookie("menu-"+lang+element);
	
	if(val == "true"){
		if(lang == "FR"){
			
			switch(element){
				case "portfolio":
				document.getElementById("menu-"+lang+element).innerHTML= "<div class='w3-animate-left w3-theme-d4'><!-- <a href='./?page=software/index'>X- Présentation Globale</a> -->"+
				"<a href='./?page=knowledge/Unity'>- UNITY</a>"+
				"<a href='./?page=knowledge/web'>- WEB</a>"+
				"<a href='./?page=knowledge/dotNet'>- .NET</a>";
				break;
				case "softwares":
				document.getElementById("menu-"+lang+element).innerHTML= "<div class='w3-animate-left w3-theme-d4'><!-- <a href='./?page=software/index'>X- Présentation Globale</a> -->"+
				"<a href='./?page=software/megamixeditor'>- Editeur de musiques (Project Diva)</a>"+
				"<a href='./?page=software/GrooveCoasterConverter'>- Convertisseur de format (Groove Coaster)</a>"+
				"<a href='./?page=software/ppdToBeatSaber'>X- Convertisseur de niveaux (Beat Saber / PPD)</a>"+
				"<a href='./?page=software/SonicRandomizer'>- Sonic \"Randomizer\"</a></div>";
				break;
				case "games":
				document.getElementById("menu-"+lang+element).innerHTML= "<div class='w3-animate-left w3-theme-d4'><!-- <a href='./?page=game/index'>X- Présentation Globale</a> -->"+
				"<a href='./?page=game/Platform'>- Plateformes Procédurales</a>"+
				"<a href='./?page=game/Center'>- Center of the World (Prototype jeu de plateforme)</a>"+
				"<a href='./?page=game/JoysRythm'>- Joys Rythm (Prototype jeu de rythme)</a>";
				break;
				case "vrar":
				document.getElementById("menu-"+lang+element).innerHTML= "<div class='w3-animate-left w3-theme-d4'><!-- <a href='./?page=vrar/index'>X- Présentation Globale</a> -->"+
				"<a href='./?page=VR/hologram'>- Hologram VR Show</a>"+
				"<a href='./?page=VR/handtracking'>X- Prototypes HandTracking</a>"+
				"<a href='./?page=VR/CircuitVR'>- Circuit VR<br>(Coop à un casque)</a></div>";
				break;
				case "hardware":
				document.getElementById("menu-"+lang+element).innerHTML= "<div class='w3-animate-left w3-theme-d4'>"+
				"<a href='./?page=hardware/projectdiva_controller'>- Controlleur Arcade ARDUINO</a></div>";
				break;
			}
		}
		else if(lang == "EN"){
			
			switch(element){
				case "softwares":
					document.getElementById("menu-"+lang+element).innerHTML= "<div class='w3-animate-left w3-theme-d4'><!-- <a href='./?page=software/index'>X- Global Presentation</a> -->"+
					"<a href='./?page=software/megamixeditor'>- Song's charts editor (Project Diva)</a>"+
					"<a href='./?page=software/GrooveCoasterConverter'>- Data converter (Groove Coaster)</a>"+
					"<a href='./?page=software/ppdToBeatSaber'>X- Stage converter (Beat Saber / PPD)</a>"+
					"<a href='./?page=software/SonicRandomizer'>- Sonic \"Randomizer\"</a></div>";
				break;
				case "games":
					document.getElementById("menu-"+lang+element).innerHTML= "<div class='w3-animate-left w3-theme-d4'><!-- <a href='./?page=game/index'>X- Global Presentation</a> -->"+
					"<a href='./?page=game/Platform'>- Procedural platformer</a>"+
					"<a href='./?page=game/Center'>- Center of the World (Platformer prototype)</a>"+
					"<a href='./?page=game/JoysRythm'>- Joys Rythm (Rhythm game prototype)</a>";
				break;
				case "vrar":
					document.getElementById("menu-"+lang+element).innerHTML= "<div class='w3-animate-left w3-theme-d4'><!-- <a href='./?page=vrar/index'>X- Global Presentation</a> -->"+
					"<a href='./?page=VR/hologram'>- Hologram VR Show</a>"+
					"<a href='./?page=VR/handtracking'>X- Prototypes HandTracking</a>"+
					"<a href='./?page=VR/CircuitVR'>- Circuit VR<br>(Coop game with one headset)</a></div>";
				break;
				case "hardware":
					document.getElementById("menu-"+lang+element).innerHTML= "<div class='w3-animate-left w3-theme-d4'><a href='./?page=hardware/projectdiva_controller'>- Arcade Controller ARDUINO</a></div>";
				break;
			}
		}
	}
	else if(val == "" || val == "false" || val == null)
			document.getElementById("menu-"+lang+element).innerHTML="";

	
}

function createLang(){
	lang = getCookie("lang");
	if(lang != "FR" && lang != "EN")	setCookie("lang", "FR", 366);
}

function updateLang(lang){
	setCookie("lang", lang, 366);
	location.reload();
}

function showLang(){
	lang = getCookie("lang");
	if(lang == "EN")
	document.getElementById("menuFR").innerHTML="";
else
	document.getElementById("menuEN").innerHTML="";
}