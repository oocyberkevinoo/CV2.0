$(function(){ $("#header").load("./header.html");}); // Header
	  $(function(){ $("#menu").load("./menu.html");}); // Menu
	  
	  // Page
	  $(function(){ $("#page").load("./pages/"+lang+"/"+loadedPage+".html", function (responseTxt, statusTxt, xhr) {
                if (statusTxt == "error") {
					if(loadedPage == null)
						$(function(){ $("#page").load("./pages/"+lang+"/index.html");}); // Index
					else
						$(function(){ $("#page").load("./pages/"+lang+"/404.html");}); // Not Found Page

				}
					});});

	  
	  $(function(){ $("#footer").load("./footer.html");}); // Footer