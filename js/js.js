$(document).ready(function($){

var win_w=$(window).width();//текущая ширина экрана
   var center_mod_okna=(win_w-300)/2;

$(".for_click>img").click(function(event){ // открытие модального окна
	var count_img=$(".for_click>img").index(this);
	var zx=$(".for_click>img:eq("+count_img+")").attr("src");
	 $("#mod_okno").append("<img src='"+zx+"'>");
	
	
	$("#mod_okno").css("left", center_mod_okna);
	$("#fon_mod_okno").fadeIn();
	$("#mod_okno").fadeIn() ;
	
	
});

$("#closeX").click(function(){ // закрытие модального окна
	$("#fon_mod_okno").fadeOut();
	$("#mod_okno").fadeOut(500,function(){
		$("#mod_okno>img").remove();
	});
	
});
});// последняя скобка ready 