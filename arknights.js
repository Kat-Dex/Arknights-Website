var x = false;

function searchOperator() {
	
	if(x == true) {
		var delul = document.getElementById("ul");
		delul.parentNode.removeChild(delul);
		var delimg = document.getElementById("img");
		delimg.parentNode.removeChild(delimg);
		x = false;
	}
	
	var searchBox = document.getElementById("name-operator");
	
	var counter = 1;
	for (var i in arknightsDB) {
		counter++;
		if(arknightsDB[i].name == searchBox.value) {
			x = true;
			
			document.theForm.submit();
			
			var ul = document.createElement("ul");
			ul.setAttribute("id", "ul");
			document.getElementById("search").appendChild(ul);
			
			var li = document.createElement("li");
			li.setAttribute("class", "li");
			ul.appendChild(li);
			li.innerHTML = "Name : " + arknightsDB[i].name;
			
			var li = document.createElement("li");
			li.setAttribute("class", "li");
			ul.appendChild(li);
			li.innerHTML = "Class : " + arknightsDB[i].type;
			
			var li = document.createElement("li");
			li.setAttribute("class", "li");
			ul.appendChild(li);
			li.innerHTML = "Damage : " + arknightsDB[i].damage;
			
			var li = document.createElement("li");
			li.setAttribute("class", "li");
			ul.appendChild(li);
			li.innerHTML = "Tags : " + arknightsDB[i].tags;
			
			const col = document.getElementsByClassName("li");
			
			for (var j in col) {
				if(j<4) {
					col[j].style.marginTop = "20px";
					col[j].style.padding = "20px";
					col[j].style.display = "table";
				}
			}
			
			var ul = document.getElementById("ul");
			ul.style.position = "relative";
			ul.style.top = "60px";
			ul.style.left = "30%";
			
			var img = document.createElement("img");
			img.setAttribute("id", "img");
			img.src = arknightsDB[i].pic;
			document.getElementById("search").appendChild(img);
			var img = document.getElementById("img");
			img.style.position = "relative";
			img.style.height = "450px";
			img.style.textAlign = "center";
			img.style.left = "10%";
			img.style.bottom = "360px";
			break;
		}
		else if(counter > 18) {
			alert("This operator does not exist.");
		}
	}
}

function removeSelectedTerra() {
	var infected = document.getElementById("infected");
	var reunion = document.getElementById("reunion");
	var originiums = document.getElementById("originiums");
	var originium_arts = document.getElementById("originium_arts");
	var nomadic_city = document.getElementById("nomadic_city");
	var rhodes_island = document.getElementById("rhodes_island");
	infected.style.boxShadow = null;
	reunion.style.boxShadow = null;
	originiums.style.boxShadow = null;
	originium_arts.style.boxShadow = null;
	nomadic_city.style.boxShadow = null;
	rhodes_island.style.boxShadow = null;
	infected.style.backgroundColor = null;
	reunion.style.backgroundColor = null;
	originiums.style.backgroundColor = null;
	originium_arts.style.backgroundColor = null;
	nomadic_city.style.backgroundColor = null;
	rhodes_island.style.backgroundColor = null;
}

function effectTerra(box) {
	box.style.boxShadow = "0 0 20px 20px white";
	box.style.backgroundColor = "rgba(0, 0, 0, 50%)";
}

function infected() {
	removeSelectedTerra();
	var header = document.getElementById("h-terra");
	var text = document.getElementById("p-terra");
	var item = document.getElementById("infected");
	header.innerHTML = "Infected"; 
	text.innerHTML = "Those infected by Originium Ore. The fatality rate of Oripathy is theoretically 100%. The threat of contagion remains upon the carrier’s death. Combined with the threat of dangerous, unknown powers, most countries have chosen to expel the Infected. Left stateless, the Infected had no clear path to life. But recently, the Infected have begun to gather around the radical resistance movement known as 'Reunion.'";
	effectTerra(item);
}

function reunion() {
	removeSelectedTerra();
	var header = document.getElementById("h-terra");
	var text = document.getElementById("p-terra");
	var item = document.getElementById("reunion");
	header.innerHTML = "Reunion"; 
	text.innerHTML = "A radical Infected organization, Reunion rallies around the cause of Infected nationalism, rejecting racial and national identities. They aggressively push for acquisition and exploitation of Infected power. Reunion uses violence in their push for justice, having gone so far as to destroy an entire city. This led to the intervention of a pharmaceutical company called 'Rhodes Island', the outcome of which is not yet clear.";
	effectTerra(item);
}

function originiums() {
	removeSelectedTerra();
	var header = document.getElementById("h-terra");
	var text = document.getElementById("p-terra");
	var item = document.getElementById("originiums");
	header.innerHTML = "Originiums"; 
	text.innerHTML = "As the world was torn apart by Catastrophes of unknown origin, Originium ore began to appear. With advances in technology, the power of the ore was harnessed to push civilization forward. But Originium ore also gave birth to the Infected...";
	effectTerra(item);
}

function originium_arts() {
	removeSelectedTerra();
	var header = document.getElementById("h-terra");
	var text = document.getElementById("p-terra");
	var item = document.getElementById("originium_arts");
	header.innerHTML = "Originium Arts"; 
	text.innerHTML = "After the discovery of Originium ore, people mastered a technique for the manipulation and transformation of matter using the power of the ore. The technique came to be called Originium Arts, and often simply 'Arts.' Whether a person can use Arts, and what forms those Arts may take is determined by both physiology and study in the field of Originium Arts.";
	effectTerra(item);
}

function nomadic_city() {
	removeSelectedTerra();
	var header = document.getElementById("h-terra");
	var text = document.getElementById("p-terra");
	var item = document.getElementById("nomadic_city");
	header.innerHTML = "Nomadic City";
	text.innerHTML = "These cities are built on special structures and can be moved. The threat of Catastrophe meant that every nation would need to be constantly on the move to avoid disaster, giving rise to this technology. The structures continued to expand as engineers developed new ways to add buildings and facilities to them, eventually becoming sprawling, mobile cities.";
	effectTerra(item);
}

function rhodes_island() {
	removeSelectedTerra();
	var header = document.getElementById("h-terra");
	var text = document.getElementById("p-terra");
	var item = document.getElementById("rhodes_island");
	header.innerHTML = "Rhodes Island";
	text.innerHTML = "The most advanced Infected research institution in the world, Rhodes Island is not afraid to employ the Infected. They are known to go deep into hazardous areas to take care of issues related to the Infected. They are currently working with many governments, corporations, and NGOs to uncover the causes of an Infected riot on an unprecedented scale. Your decisions will have a significant impact on how Rhodes Island will proceed.";
	effectTerra(item);
}

function effectOperators(x) {
	x.style.borderBottom  = "5px solid white";
	x.style.filter = "brightness(1.25)";
}

function removeSelectedOperators() {
	var amiya = document.getElementById("amiya");
	var kaltsit = document.getElementById("kaltsit");
	var chen = document.getElementById("chen");
	var dobermann = document.getElementById("dobermann");
	var blaze = document.getElementById("blaze");
	amiya.style.borderBottom  = null;
	kaltsit.style.borderBottom  = null;
	chen.style.borderBottom  = null;
	dobermann.style.borderBottom  = null;
	blaze.style.borderBottom  = null;
	amiya.style.filter = null;
	kaltsit.style.filter = null;
	chen.style.filter = null;
	dobermann.style.filter = null;
	blaze.style.filter = null;
}

function amiya() {
	removeSelectedOperators();
	var header = document.getElementById("h-operators");
	var text = document.getElementById("p-operators");
	var item = document.getElementById("amiya");
	header.innerHTML = "Amiya";
	text.innerHTML = "Amiya is the official leader of Rhodes Island.";
	effectOperators(item);
}

function kaltsit() {
	removeSelectedOperators();
	var header = document.getElementById("h-operators");
	var text = document.getElementById("p-operators");
	var item = document.getElementById("kaltsit");
	header.innerHTML = "Kal'tsit";
	text.innerHTML = "Rhodes Island Medical Department Officer-in-Charge, Kal'tsit.";
	effectOperators(item);
}

function chen() {
	removeSelectedOperators();
	var header = document.getElementById("h-operators");
	var text = document.getElementById("p-operators");
	var item = document.getElementById("chen");
	header.innerHTML = "Ch'en";
	text.innerHTML = "Ch'en, Special Inspection Unit Chief, L.G.D., is cooperating with Rhodes Island to fulfill the obligations outlined in her contract.";
	effectOperators(item);
}

function dobermann() {
	removeSelectedOperators();
	var header = document.getElementById("h-operators");
	var text = document.getElementById("p-operators");
	var item = document.getElementById("dobermann");
	header.innerHTML = "Dobermann";
	text.innerHTML = "Dobermann, Starter instructor of Rhodes Island, is always ready to offer advice on the battlefield.";
	effectOperators(item);
}

function blaze() {
	removeSelectedOperators();
	var header = document.getElementById("h-operators");
	var text = document.getElementById("p-operators");
	var item = document.getElementById("blaze");
	header.innerHTML = "Blaze";
	text.innerHTML = "Blaze, Rhodes Island's most fired-up Operator, will spread her enthusiasm like a wildfire.";
	effectOperators(item);
}