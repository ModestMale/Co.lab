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
	console.log("hey")
	$(this).toggleClass("highlight");
})