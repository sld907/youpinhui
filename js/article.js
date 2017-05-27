

$(function(){
	var imgname;
	$(".smallpic>a>img").each(function(i,obj){
		$(this).mouseover(function(){
			$(".smallpic>a>img").parent().css({border:"1px solid #ccc"})
			$(this).parent().css({border:"1px solid red"})
			$(".wrap>a>img").hide();
			$(".wrap>a>img:eq("+i+")").show();
			$(".mousetrap").show();
			imgname = $(".wrap>a>img:eq("+i+")").attr("src");
			$(".zoom-big>img").each(function(j,obj){
				if($(".zoom-big>img:eq("+j+")").attr("src") == imgname){
					$(".zoom-big>img").hide();
					$(".zoom-big>img:eq("+j+")").show();
				}
			})
		})
	})
	$(".mousetrap").mousedown(function(e){
		$(this).offset().left
		var disX = e.clientX - $(this).offset().left;
		var disY = e.clientY - $(this).offset().top;
		
		$(document).mousemove(function(e){
			$(".zoom-big").show();
			
			$(".mousetrap").css({left:e.clientX-$(".wrap").offset().left-disX,top:e.clientY-$(".wrap").offset().top-disY})
			if($(".mousetrap").position().left <= 0){
				$(".mousetrap").css({left:0});
			}
			if($(".mousetrap").position().left >= $(".wrap").width()-$(".mousetrap").width()){
				$(".mousetrap").css({left:$(".wrap").width()-$(".mousetrap").width()});
			}
			if($(".mousetrap").position().top <= 0){
				$(".mousetrap").css({top:0});
			}
			if($(".mousetrap").position().top >=$(".wrap").height()-$(".mousetrap").height()){
				$(".mousetrap").css({top:$(".wrap").height()-$(".mousetrap").height()});
			}
			
			var index = $(".wrap").width()/$(".mousetrap").width();
			
		$(".zoom-big>img").css({left:$(".mousetrap").position().left*index*(-1),top:$(".mousetrap").position().top*index*(-1)})
		})
		$(document).mouseup(function(e){

		$(document).off("mousemove")
		$(".zoom-big").hide();
		})
	})
	
})
