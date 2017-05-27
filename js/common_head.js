
// ---------------------------------------------------
$(function(){
	//--------nav-list--------------
	$(".nav-list li").hover(
			function(){
				$(this).children().css({"text-decoration":"underline"});
			},
			function(){
				$(this).children().css({"text-decoration":"none"});
			}
		);
	// ------------所有商品盒子---------------
	$(".all-list").hover(
			function(){
				console.log("ok");
				$(".list_box").show();
			},
			function(){
				console.log("os");
				$(".list_box").hide();
			}
		)
	//-------------------------------
	$(".list_con dl dt a").hover(
			function(){
				var $clr = $(this).attr("data-clr");
				 $(this).css({"color":""+$clr+""});

			},
			function(){
				 $(this).css({"color":"#222222"})
			}
		)
	//----------搜索框------------------
	$("#search_text").focus(function(){
		$value = $(this).val();
		$(".search .form-search span").css({"display":"block"});
		if($value == "" || $value == "寻找的商品"){
			$(this).val("");
		}
	});
	$("#search_text").blur(function(){
		$(".search .form-search span").css({"display":"none"});
		if(!$(this).val()){
			$(this).val("寻找的商品");
		}
	});
	$(".search .form-search span").click(function(){
		$("#search_text").val("寻找的商品");
	});
	//-------------------------------



	//-------------------------------
	$(".mycart").mouseenter(function(){
		$(".cart_box").show();
		$(".cart-bag .cart-list .ijt").css({"background-position":"100% -60px"});
	});
	$(".mycart").mouseleave(function(){
		$(".cart_box").hide();
		$(".cart-bag .cart-list .ijt").css({"background-position":"100% 0px"});
	});



	$(".shopcart1").mouseenter(function(){
		console.log("ok");


	});
	$(".shopcart1").mouseleave(function(){
		console.log("离开啥")
	});




	$(".top").click(function(){
		$(document).animate({ scrollTop:0 });
		$("body,html").animate({ scrollTop:0 });

	});
});













