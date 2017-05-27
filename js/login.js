$(function(){
	$("#logn").click(function(){
		$("#tanchuang").hide();
	});
});


$(function(){
			var isCal = true;
			$(".handler").mousedown(function(e){
				if(isCal){
					isCal= false;
					var x = e.pageX - $("#drag").offset().left;
					var $maxWidth = $("#drag").width() - $(".handler").width();
				
					$(document).mousemove(function(e){
						var $moveX = Math.max(Math.min(e.pageX - $("#drag").offset().left-x,$maxWidth),0);
						$(".handler").css({left:$moveX});
						$(".drag_bg").width($moveX);
						//console.log($("#drag").offset().width);
						if( $moveX == $maxWidth){
							$(document).off("mousemove");
							$(document).off("mouseup");
							$(".drag_text").text("验证通过").css({color:"#fff"});
							$(".handler").removeClass("handler_bg").addClass("handler_ok_bg");

						}
					});

					$(document).mouseup(function(e){
						$(document).off("mousemove");
						$(document).off("mouseup");
						if(e.pageX - $("#drag").offset().left -x < $maxWidth){
							$(".handler").css({left:0});
							$(".drag_bg").width(0);
							isCal = true;

						}
						else{
							$(document).off("mousemove");
							$(document).off("mouseup");

							// $(".drag_text").text("验证通过").css({color:"#fff"});
							// $(".handler").removeClass("handler_bg").addClass("handler_ok_bg");
						}
					});
					}
					
			});						

});