$(document).ready(function(){

var $contact = $(".cont");


$contact.click(function(){

	$("main").hide();
	$(".contact").fadeIn(500);
	//$(".contact").fadeIn(500);
	$(".backImg").css("transform","scale(1.1)");
	$(".backImg").css("filter","blur(20px)");
	});
});