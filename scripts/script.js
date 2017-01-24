$(document).ready(function(){

var $contact = $(".cont");


function change(){
	$("main").addClass("mainonclick")
	$(".backImg").css("transform","scale(1.1)");
	$(".backImg").css("filter","blur(3px)");
}
$contact.click(function(){
	change();
	$(".contact").css("transform","scale(5)");
	$(".contact").fadeIn(500);
	$(".contact").css("transform","scale(1)");
	});


$(".cross").click(function(){
	$("main").removeClass("mainonclick");
	$(".contact,.about,.interests,.work").css("transform","scale(5)");
	$(".contact,.about,.interests,.work").fadeOut(500);
	$(".backImg").css("transform","scale(2)");
	$(".backImg").css("filter","blur(0px)");
	});

$(".abt").click(function(){
	change();
	$(".about").css("transform","scale(5)");
	$(".about").fadeIn(500);
	$(".about").css("transform","scale(1)");
});
$(".inte").click(function(){
	change();
	$(".interests").css("transform","scale(5)");
	$(".interests").fadeIn(500);
	$(".interests").css("transform","scale(1)");
});

$(".wor").click(function(){
	change();
	$(".work").css("transform","scale(5)");
	$(".work").fadeIn(500);
	$(".work").css("transform","scale(1)");
});

setTimeout(function(){
	$(".mpart").css("opacity","1");
	$(".mpart>h1").css("opacity","1");
	setTimeout(function(){
		$(".mpart>h4").css("opacity","1");
		setTimeout(function(){
			$(".mpart>p").css("opacity","1");
			setTimeout(function(){
				$(".mpart>hr").css("opacity","1");
				$("main").addClass("mainback");
				setTimeout(function(){
					$(".mpart>small").css("opacity","1");
					$("nav").css("opacity","1");
					$("footer").css("opacity","1");
				},1000)
			},2000)
		},1000)
	},1500);
},1000);








});