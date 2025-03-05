var map = L.map("map6").setView([40, 0], 2);

//initialize function called when the script loads

{
function initialize(){
	loadData();
	debugAjax();
};

function loadData(){
	var cities;

	fetch("data/map6.geojson")
		.then(function(response){
			return response.json();
		})
		.then(function(response) {
			cities = response;
			console.log(cities);
		})
}

function debugCallback(myData){
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend',"GeoJSON data: map6" + JSON.stringify(myData));
};

function debugAjax(){
	fetch("data/map6.geojson")
		.then(function(response){
			return response.json();
		})
		.then(debugCallback)
};
}