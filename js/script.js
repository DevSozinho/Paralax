// JavaScript Document

//------------------------------- FIXA MENU -------------------------------
var tela=jQuery(window).height();//Pega a altura do dispositivo (monitor, tela) em pixels
jQuery(window).scroll(function(){
	if(jQuery(this).scrollTop() > tela-60){
		jQuery("nav").addClass("fixamenu")
	}else{
		jQuery("nav").removeClass("fixamenu")
	}
	if(jQuery(this).scrollTop() > 2*tela){
		jQuery(".html").addClass("animahtml")
		jQuery(".css").addClass("animacss")
		jQuery(".jquery").addClass("animajquery")
		jQuery(".front").addClass("animafront")
		jQuery(".photo").addClass("animaphoto")
		jQuery(".illustrator").addClass("animaillustrator")
	}else{
		jQuery(".html").removeClass("animahtml")
		jQuery(".css").removeClass("animacss")
		jQuery(".jquery").removeClass("animajquery")
		jQuery(".front").removeClass("animafront")
		jQuery(".photo").removeClass("animaphoto")
		jQuery(".illustrator").removeClass("animaillustrator")
	}
})

//------------------------------- EFEITO PARALLAX -------------------------------
jQuery(function(){
	jQuery("#home").click(function(){
		jQuery("html").animate({scrollTop:0}, 1000)
	})
	jQuery("#pag1").click(function(){
		jQuery("html").animate({scrollTop:jQuery("#sobre").offset().top}, 1000)
	})
	jQuery("#pag2").click(function(){
		jQuery("html").animate({scrollTop:jQuery("#habilidades").offset().top}, 1000)
	})
	jQuery("#pag3").click(function(){
		jQuery("html").animate({scrollTop:jQuery("#portfolio").offset().top}, 1000)
	})
	jQuery("#pag4").click(function(){
		jQuery("html").animate({scrollTop:jQuery("#contato").offset().top}, 1000)
	})
})

//------------------------------- GALERIA -------------------------------
jQuery(function(){
	jQuery(".galeria").slick({
		slidesToShow:3,
		autoplay:true,
		dots:true
	})
})







