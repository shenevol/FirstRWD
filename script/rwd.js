$(document).ready(function(){
	$("#sidebar li a").click(function(){
		$("#sidebar li").removeClass("active");
		$(this).parent().addClass("active");
	});

	$("#dropdownlist span").click(function(){
		$("#dropdownlist").toggleClass("active");
	});

	$("#pagepiling").pagepiling({
		afterRender:function(){
			$("video").get(0).play();
		}

	});

	$(".carousel").carousel({
		interval:2000
	});
});