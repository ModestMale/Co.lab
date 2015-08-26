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
           
var dictionary = [
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


$("#textmaterial").autocomplete({
    source: dictionary,
    appendTo: "#searchform",
    select: function (event, ui) {
    }

});
});

