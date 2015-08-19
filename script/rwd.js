$(document).ready(function(){
	$("#sidebar li a").click(function(){
		$("#sidebar li").removeClass("active");
		$(this).parent().addClass("active");
	});
});