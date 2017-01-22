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
	$(".contact,.skills,.interests,.education").hide();
	$(".backImg").css("transform","scale(1.3)");
	$(".backImg").css("filter","blur(0px)");
	});

$(".ski").click(function(){
	change();
	$(".skills").fadeIn(500);
});
$(".inte").click(function(){
	change();
	$(".interests").fadeIn(500);
});

$(".edu").click(function(){
	change();
	$(".education").fadeIn(500);
});










});