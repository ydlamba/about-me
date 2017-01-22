$(document).ready(function(){

var $contact = $(".cont");


function change(){
	$("main").hide();
	$(".backImg").css("transform","scale(1.1)");
	$(".backImg").css("filter","blur(10px)");
}
$contact.click(function(){
	change();
	$(".contact").fadeIn(500);
	});


$(".cross").click(function(){

	$("main").fadeIn(500)
	$(".contact,.about,.interests,.work").hide();
	$(".backImg").css("transform","scale(1.3)");
	$(".backImg").css("filter","blur(0px)");
	});

$(".abt").click(function(){
	change();
	$(".about").fadeIn(500);
});
$(".inte").click(function(){
	change();
	$(".interests").fadeIn(500);
});

$(".wor").click(function(){
	change();
	$(".work").fadeIn(500);
});










});