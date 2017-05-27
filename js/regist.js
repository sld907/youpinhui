$(function(){
	var timer;
 	$(".regist .container form>div .sms .sms_img").click(function(){
 		$(this).val("重新发送验证码(6) ");
 		$(this).attr("disabled","disabled");
 		var i = 6;
 		timer = setInterval(function(){
 			i--;
 			$(".sms_img").val("重新发送验证码("+ i +") ");
 			if(i == -1){
 				$(".sms_img").val("发送验证码");
 				$(".sms_img").attr("disabled",false);
 				s = 6;
 				clearInterval(timer);
 			}
 		},1000);
 	});
});

$(function(){
	var index = /^1[3|4|5|7|8]\d{9}$/;
	$(".text1").focus(function(){
		if($(".text1").val() == "请输入手机号"){
			$(".text1").val("");
		}
		$(".tel .hint1").html("请输入常用手机号，避免忘记").show()
			.css({border:"1px solid #a2a2a2",background:"#f2f2f2"});	
		if(index.test($(".text1").val())){	
			$(".tel .hint1").show().html("正确")
		}
		else{

		}
	});
	$(".text1").blur(function(){
		var $vau = $(".text1").val();	
		if(index.test($(".text1").val())){	
			$(".tel .hint1").show().html("正确");
		}
		else{
			$(".tel .hint1").show().html("格式不对").css({border:"1px solid #ff504a",background:"#f0dbda"});
		}
		if($vau == "" ){
			$(".text1").val("请输入手机号");
		}

});

});

$(function(){
	var index = /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,20}$/;
	$(".text3").focus(function(){
		$(".pwd .hint1").show().html("6-20位字符，可使用字母、数字或符号的组合");
		console.log("ok")
		if(index.test($(".text3").val())){
			$(".pwd .hint1").show().html("正确");
		}
	});
	$(".text3").blur(function(){
		if( $(".text3").val() != "" ){
			if(index.test($(".text3").val())){
			$(".pwd .hint1").show().html("正确");
			}
			else{
				$(".pwd .hint1").show().html("密码格式不对");
			}

		}
		else{
			$(".pwd .hint1").show().html("密码不能为空");
		}
		
	});
	$(".text4").focus(function(){
		if($(".text4").val() != ""){
			var $pwd = $(".text3").val();
			$(".pwd_qr .hint1").show().html("请再次输入密码");
			if($pwd == $(".text4").val()){
				$(".pwd_qr .hint1").show().html("正确");
			}
		}
		else{
			$(".pwd_qr .hint1").show().html("请再次输入密码");
		}
	})
	$(".text4").blur(function(){
		if($(".text4").val() != ""){
			var $pwd = $(".text3").val();
			if($pwd == $(".text4").val()){
				$(".pwd_qr .hint1").show().html("正确");
			}
			else{
				$(".pwd_qr .hint1").show().html("密码不一致");
			}
		}
		else{
			$(".pwd_qr .hint1").show().html("密码不能为空");
		}

	});




});













