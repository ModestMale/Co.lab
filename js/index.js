$( document ).ready(function() {

$(".plusminus").click(function(){
	$(this).parent().toggleClass("open");

})

$(".plusminus2").click(function(){
	$(this).parent().toggleClass("open");

})

$(".headericon").click(function(){
	$(this).parent().toggleClass("showsearch");
})

$("#profilemenu1").click(function(){
	$(this).parent().toggleClass("open");

})

$("#profilemenu2").click(function(){
	$(this).parent().toggleClass("open");
})

$(".collaboxlogo").click(function(){
	$(this).parent().toggleClass("menuopen");
})

$(".imgorange").click(function(){
	$(this).toggleClass("highlight");
})
           
var textmaterial = [
		"Aluminium",
		"Polystyrene",
		"Poplpropylene",
		"Steel",
		"Timber",
		"Polycarbonate",
		"Acrylonitrile butadiene styrene",
		"Styrene",
		"Oak",
		"Nylon",
		"Steel coil",
		"Lead",
		"Graphene",
		"Zinc",
		"Iron",
		"Stainless steel",
		"Copper",
		"Nickel",
		"Polyethelyne",

            ];

var textindustries = [
		
"Airline operations",
"Aluminium industry",
"Arts administration",
"Cement and concrete products",
"Cemetery operations",
"Coal treatment industry",
"Defence support",
"Educational services",
"Electrical power industry",
"Entertainment and broadcasting industry",
"Food, beverages and tobacco industry",
"Grocery products manufacture",
"Journalism",
"Liquor and accommodation industry",
"Maritime industry",
"Meat industry",
"Oil and gas industry",
"Paper products industry",
"Pet food manufacturing",
"Pharmaceutical industry",
"Photographic industry",
"Port and harbour services",
"Postal services",
"Private transport industry",
"Publishing industry",
"Public transport industry",
"Scientific services",
"Storage services",
"Sugar industry",
"Technical services",
"Timber industry",
"Tourism industry",
"Travel industry",
"Uranium mining",
"Vehicle industry",
"Wholesale and retail trade"


            ];


var textlocations = [

"Sydney",
"Melbourne",
"Perth",
"Brisbane",
"Hobart",
"Darwin",
"Alice Springs",
"Cairns",
"Geelong",
"Newcastle",
"Adelaide"

];


$("#textmaterial").autocomplete({
    source: textmaterial,
    appendTo: "#searchform",
    select: function (event, ui) {
    }

});

$("#textindustries").autocomplete({
    source: textindustries,
    appendTo: "#searchform",
    select: function (event, ui) {
    }

});

$("#textlocations").autocomplete({
    source: textlocations,
    appendTo: "#searchform",
    select: function (event, ui) {
    }

});

});

