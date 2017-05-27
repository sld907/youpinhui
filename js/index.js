
// $(function(){
// 	$(".serve").click(function(){

// 		console.log("ok");
// 	})


// })




$(function(){
	// 	$("#ban_lun>li:eq(0)").clone(true).appendTo("#ban_lun");
	// $("#ban_lun").css({width:$("#ban_lun>li").length*1920,position:"absolute",left:-460,top:0});
});
//--------------------------banner--------------------------------
$(function(){
	

	$(".scroll-num span").click(function(){
		var $currentIndex = $(this).index();
		console.log($currentIndex)
		$(".scroll-num span").removeClass("on");
		$(this).addClass("on");
		$("#ban_lun").stop().animate({left:-460+1920*$currentIndex*-1,top:0},600);
	});
	// var i = 0;
	// var timer = setInterval(function(){
		
	// 	if(i == 3){
	// 		i = 0;
	// 		$("#ban_lun").css({left:-460,top:0},600);
	// 	}
	// 	i++;
	// 	$("#ban_lun").stop().animate({left:-460+1920*i*-1,top:0},600);
	// },3000);


});





//-----------------------------------select-left----------------------
$(function(){
	$.getJSON("json/selectleft.json",function(data){
		var html="";
		var html_1="";
		$.each(data,function(i,element){
			html +="<li>"
					+"<a href=\""+ element.href +"\">"
					+"<div class=\"img_box\">"
					+"<img src=\"pictures/new_leftlun/"+ element.img +"\" alt=\"优品惠"+ element.h2 +"\">"
					+"</div>"
					+"<div class=\"text_box\">"
					+"<p class=\"tp\"></p>"
					+"<h2>"+ element.h2 +"</h2>"
					+"<p class=\"txt\">"
					+""+ element.p +""
					+"</p>"
					+"<div class=\"good-yen\">"
					+"<span class=\"new_price\">"
					+"<i>&yen;</i>"+ element.new_price +""
					+"</span>"
					+"<span class=\"old_price\">"
					+"<p>"
					+"<em class=\"baoyou\" style=\""+ element.baoyou +"\">包邮</em>"
					+"<em class=\"zhijiang\" style=\""+ element.zhijiang +"\">直降</em>"
					+"</p>"
					+"<i>&yen;</i>"+ element.old_price +""
					+"</span>	"							
					+"	</div>"									
					+"</div>"
					+"</a>"
					+"</li>";

				html_1 +="<li>"
						+"<i class=\"\"></i>"
						+"<a href=\""+ element.href +"\">"
						+"<img src=\"pictures/new_leftlun/"+ element.img +"\" alt=\"优品惠"+ element.h2 +"\">"
						+"</a>"
						+"</li>";
		});
		$(".new-select .container .select-left .left-choice-imgs ul:eq(0)").html(html);
		$(".new-select .container .select-left .left-choice-list ul:eq(0)").html(html_1);
	// 轮播图----------------
	// -----------------
	//-------------
		$(".left-choice-imgs ul>li:eq(0)").clone(true).appendTo(".left-choice-imgs ul");
		$(".left-choice-imgs ul")
			.css({width:$(".left-choice-imgs ul>li").length*698,position:"absolute",left:0,top:0})
		// -------左右键---------
		var currentIndex = 0;
		$(".new-select .container .select-left .left-choice-list ul li i")
			.removeClass("on").eq(currentIndex).addClass("on");
		//-------计时器-----------
		var timer = setInterval(function(){
			$(".left-choice-imgs .next").click();
		},3000);

		$(".select-left").hover(
				function(){
					clearInterval(timer);
				},
				function(){
					timer = setInterval(function(){
						$(".left-choice-imgs .next").click();
					},3000);
				}
			);
		//-----------------------
		$(".left-choice-imgs .prev").click(function(){		
			if(currentIndex == 0){
				currentIndex = $(".left-choice-imgs ul>li").length - 1;
				$(".left-choice-imgs ul").css({left:currentIndex * 698 * -1});
			}
			currentIndex--;
			$(".left-choice-imgs ul").stop().animate({left:currentIndex * 698 * -1},400);
			$(".new-select .container .select-left .left-choice-list ul li i")
				.removeClass("on").eq(currentIndex).addClass("on");
		});
		$(".left-choice-imgs .next").click(function(){
			if(currentIndex == $(".left-choice-imgs ul>li").length-1){
				currentIndex = 0;
				$(".left-choice-imgs ul").css({left:0});
			}
			currentIndex++;
			$(".left-choice-imgs ul").stop().animate({left:currentIndex * 698 * -1},400);
			$(".new-select .container .select-left .left-choice-list ul li i")
				.removeClass("on").eq(currentIndex == 8 ? 0 : currentIndex).addClass("on");
		});
		$(".left-choice-list ul>li").hover(
				function(){
					currentIndex = $(this).index();
					$(".new-select .container .select-left .left-choice-list ul li i")
						.removeClass("on").eq($(this).index()).addClass("on");
					$(".left-choice-imgs ul").stop().animate({left:currentIndex * 698 * -1},400);
					// console.log("鼠标进入");
				},
				function(){
					// console.log("鼠标离开");
				}
		);

	});
});
// --------------------------------------------------------------------

$(function(){
	$("#logn").click(function(){
		$("#tanchuang").hide();
	});
});
$(function(){

	$(document).scroll(function(){
		// $desc.css({top:$($desc).offset().top + $("body").scrollTop()});
		if($("body").scrollTop() >= $(window).height()){
			$("#header_logo").slideDown(200);

		}
		else{
			$("#header_logo").slideUp(200);
		}
	});
});
//-----------------------------------select-right----------------------

//------------------------------small_chioc------------------
$(function(){
	$.getJSON("json/tv_show.json",function(data){
		var html = "";
		$.each(data,function(i,element){
			html +="<li>"
					+"	<a href=\""+ element.herf_1 +"\">"
					+"	<i>"+ element.timer_1 +"</i>"
					+"	<img src=\"pictures/xiaolunbo/"+ element.img_1 +"\" alt=\""+ element.alt_1 +"\">"
					+"	</a>"
					+"	<a href=\""+ element.herf_2 +"\">"
					+"	<i>"+ element.timer_2 +"</i>"
					+"	<img src=\"pictures/xiaolunbo/"+ element.img_2 +"\" alt=\""+ element.alt_2 +"\">"
					+"	</a>"
					+"	<a href=\""+ element.herf_3 +"\">"
					+"	<i>"+ element.timer_3 +"</i>"
					+"	<img src=\"pictures/xiaolunbo/"+ element.img_3 +"\" alt=\""+ element.alt_3 +"\">"
					+"	</a>"
					+"	</li>"
		})
		$(".new-select .container .select-right .tv_show .small_chioc ul:eq(0)").html(html);
		$(".tv_show .small_chioc ul li:eq(0)").clone(true).appendTo(".tv_show .small_chioc ul");
		$(".tv_show .small_chioc ul")
			.css({width:$(".tv_show .small_chioc ul li").length*267,left:0,top:0});

		var currentIndex = 0;

		$(".select-right .tv_show .next_1").click(function(){		
			if( currentIndex == $(".tv_show .small_chioc ul li").length -1){
				currentIndex = 0;
				$(".tv_show .small_chioc ul").css({left:0});
			}
			currentIndex++;
			$(".tv_show .small_chioc ul").stop().animate({left:currentIndex * 267*-1},400);

		});
		$(".select-right .tv_show .prev_1").click(function(){
			if(currentIndex == 0){
				// currentIndex = 4;
				currentIndex = $(".tv_show .small_chioc ul li").length -1;
				$(".tv_show .small_chioc ul").css({left:currentIndex * 267*-1});
			}
			currentIndex--;
			$(".tv_show .small_chioc ul").stop().animate({left:currentIndex * 267*-1},400);

		});




	});

});

//------------------------------tv_one------------------
$(function(){
	$.getJSON("json/new_right_dt_img.json",function(data){
		var html = "";
		$.each(data,function(i,element){
			html = "<a href=\""+ element.href +"\">"
					+"	<dt>"
					+"	<i></i>"
					+"	<img src=\"pictures/new_right_dt_img/"+ element.img +"\" alt=\""+ element.h2 +"\">"
					+"	</dt>"
					+"	<dd>"
					+"	<h2>"
					+"	"+ element.h2 +""
					+"	</h2>"
					+"	<div class=\"li-yen\">"
					+"	<span class=\"img-price\">"
					+"	<i>&yen;</i>"+ element.img_price +""
					+"	</span>"
					+"	<span class=\"old-price\">"
					+"	<i>&yen;</i>"+ element.old_price +""
					+"	</span>"								
					+"	</div>"
					+"	<div class=\"tv_timer\">"
					+"	    "
					+"	</div>"
					+"	<p class=\"tv_btn\">立即抢购&ensp;&gt;</p>"	
					+"	</dd>"
					+"	</a>"
		});
		$(".new-select .container .select-right .tv_one dl:eq(0)").html(html);
	});
});






















//-----------------------------------home-four-----------------------
$(function(){
	$.getJSON("json/homefour.json",function(data){
		var html = "";
		$.each(data,function(i,element){
				html += "<li>"
					 + "<a href=\""+element.href+"\">"
					 + "<img title=\""+element.title+"\" src=\"pictures/home-four/"+element.img+"\" alt=\""+element.alt+"\">"
					 + "</a>"
					 + "</li>"
		});
		$(".home-four .container>ul:eq(0)").html(html);
	});
});

//-----------------------------------home-five-----------------------
$(function(){
	$.getJSON("json/homefive.json",function(data){
		var html = "";
		$.each(data,function(i,element){
			html +="<li>"
					+"<div class=\"li-box\">"
					+"<a href=\"article.html\">"
					+"<div class=\"img-box\">"
					+"<i class=\""+ element.tv +"\"></i>"
					+"<img src=\"pictures/home-five/"+ element.img +"\" alt=\"\">"
					+"<span></span>"
					+"</div>"							
					+"<h2>"
					+"<em>"+ element.h2 +"</em>"
					+"</h2>"
					+"<p>"+ element.p +"</p>"
					+"<div class=\"li-yen\">"
					+"<span class=\"img-price\">"
					+"<i>&yen;</i>"+ element.img_price +""
					+"</span>"
					+"<span class=\"old-price\">"
					+"<p>"
						+"<em class=\"baoyou\" style=\""+ element.baoyou +"\">包邮</em>"
						+"<em class=\"zhijiang\"  style=\""+ element.zhijiang +"\">直降</em>"
					+"</p>"

					+"<i>&yen;</i>"+ element.old_price +""
					+"</span>"								
					+"<span class=\"purchased\">"
					+"<i>"+ element.purchased +"</i>已购买"
					+"</span>"
					+"</div>"		
					+"</a>"
					+"</div>"
					+"<div class=\"con-box\">"
					+"<p>"+ element.con_box_p +"</p>"
					+"<span>"+ element.jishi +"</span>"
					+"</div>"
					+"</li>"				
		});
		$(".home-five .container>ul:eq(0)").html(html);	




	});
});