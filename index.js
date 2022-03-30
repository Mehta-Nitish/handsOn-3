var li_links = document.querySelectorAll(".links ul li");
var wraps = document.querySelectorAll(".wrap");
var list_view = document.querySelector(".list-view");
var grid_view = document.querySelector(".grid-view");

li_links.forEach(function(link){
	link.addEventListener("click", function(){
		li_links.forEach(function(link){
			link.classList.remove("active");
		})

		link.classList.add("active");

		var li_view = link.getAttribute("data-view");

		wraps.forEach(function(wrap){
			wrap.style.display = "none";
		})

		if(li_view == "list-view"){
			list_view.style.display = "block";
		}
		else{
			grid_view.style.display = "block";
		}
	})
	
})



function deleteRow(r) {
	var i = r.parentNode.parentNode.rowIndex;
	document.getElementById("myTable").deleteRow(i);
	document.getElementById("table").deleteRow(i);
  }


  function getdata(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if(xhttp.readyState ==4 && xhttp.status==200)
      {
        var Javaobj= JSON.parse(xhttp.response);
        document.getElementById('div1').innerHTML = Javaobj.E1;
		document.getElementById('div1').innerHTML = Javaobj.E2;
		document.getElementById('div1').innerHTML = Javaobj.E3;
		document.getElementById('div1').innerHTML = Javaobj.E4;
		document.getElementById('div1').innerHTML = Javaobj.E5;
		document.getElementById('div1').innerHTML = Javaobj.E6;
		document.getElementById('div1').innerHTML = Javaobj.E7;
		document.getElementById('div1').innerHTML = Javaobj.E8;
		document.getElementById('div1').innerHTML = Javaobj.E9;
		document.getElementById('div1').innerHTML = Javaobj.E10;
      }
    }
    xhttp.open("GET", "index.json");
    xhttp.send();
  }


  