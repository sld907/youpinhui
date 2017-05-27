$(function(){


	$(".pro_img").mouseover(function(e){
		$(".site_out").show();
		$(".big_img").show();
		});


	$(".pro_img").mousemove(function(e){
		//console.log($(".product_info .container .pro_left .pro_img").offset().top);
	
		$(this).offset().left;
		var disX = e.clientX - $(this).offset().left-$(".site_out").width()/2;
		var disY = e.clientY - $(this).offset().top - $(".site_out").height()/2;
		$(".site_out").css({left: disX,top:disY});
		$(".big_img img").css({right: disX,bottom:disY})
			console.log(disY);
		// $(document).mousemove(function(e){
		// 		// .css({left:e.clientX - $(".pro_img").offset().left - disX,top:e.clientY - $(".pro_img").offset().top-disY});

		// });

			//console.log($(".site_out").offset().left,$(".site_out").offset().top);

	$(".pro_img").mouseleave(function(e){
		$(".site_out").hide();
		$(".big_img").hide();

	});


});

$(function(){
	var i = 1;
	var html = "";
	var current = 0;
	var iscal =false;
	$("#lessBtn").click(function(){
		i--;
		if(i < 2){
			i = 1;
		}
		$(".l").val(i);
		html = "<i>&yen;</i>"+ 12800*i +"";
		$("#price").html(html);
		iscal =false
	});
	$("#addBtn").click(function(){
		i++;
		$(".l").val(i);
		html = "<i>&yen;</i>"+ 12800*i +"";
		$("#price").html(html);
		iscal =false
	});

	$(".add_cart").click(function(){
		if(iscal){
			current++;		
		}
		
		var $img = $("#c_img");
			$img.clone()
				.appendTo("body").css({width:330,height:300,position:"absolute",left:$img.offset().
					left+300,top:$img.offset().top+300,opacity:0.7})
				.animate({left:$img.offset().left+400,top:$img.offset().top+400},400)
				.delay(500)
				.animate({left:1000,top:$("h1").offset().top,widht:0,height:0,
					opacity:0});
		current += i;
		$("#cart_num").html(current);
		i = 0;
		iscal =true;
	});










});














// $(function(){
// 	var imgname;
// 	$(".smallpic>a>img").each(function(i,obj){
// 		$(this).mouseover(function(){
// 			$(".smallpic>a>img").parent().css({border:"1px solid #ccc"})
// 			$(this).parent().css({border:"1px solid red"})
// 			$(".wrap>a>img").hide();
// 			$(".wrap>a>img:eq("+i+")").show();
// 			$(".mousetrap").show();
// 			imgname = $(".wrap>a>img:eq("+i+")").attr("src");
// 			$(".zoom-big>img").each(function(j,obj){
// 				if($(".zoom-big>img:eq("+j+")").attr("src") == imgname){
// 					$(".zoom-big>img").hide();
// 					$(".zoom-big>img:eq("+j+")").show();
// 				}
// 			})
// 		})
// 	})
// 	$(".mousetrap").mousedown(function(e){
// 		$(this).offset().left
// 		var disX = e.clientX - $(this).offset().left;
// 		var disY = e.clientY - $(this).offset().top;
		
// 		$(document).mousemove(function(e){
// 			$(".zoom-big").show();
			
// 			$(".mousetrap").css({left:e.clientX-$(".wrap").offset().left-disX,top:e.clientY-$(".wrap").offset().top-disY})
// 			if($(".mousetrap").position().left <= 0){
// 				$(".mousetrap").css({left:0});
// 			}
// 			if($(".mousetrap").position().left >= $(".wrap").width()-$(".mousetrap").width()){
// 				$(".mousetrap").css({left:$(".wrap").width()-$(".mousetrap").width()});
// 			}
// 			if($(".mousetrap").position().top <= 0){
// 				$(".mousetrap").css({top:0});
// 			}
// 			if($(".mousetrap").position().top >=$(".wrap").height()-$(".mousetrap").height()){
// 				$(".mousetrap").css({top:$(".wrap").height()-$(".mousetrap").height()});
// 			}
			
// 			var index = $(".wrap").width()/$(".mousetrap").width();
			
// 		$(".zoom-big>img").css({left:$(".mousetrap").position().left*index*(-1),top:$(".mousetrap").position().top*index*(-1)})
// 		})
// 		$(document).mouseup(function(e){

// 		$(document).off("mousemove")
// 		$(".zoom-big").hide();
// 		})
// 	})
	
// })

























});