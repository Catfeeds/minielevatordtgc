
  $(function(){
           $(":input").blur(function(){
               if(this.value==""){
                   $(this).next("h4").text("6-18位，字母、数字、符号");
               } 
              
               //用户名 验证   8-12位字母
               if($(this).is(".Y1")){
                   var $Y1=$(this).val();
                  // var parr=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
				       var reg=/^[0-9a-zA-Z_]+$/;
				       var parrtest=/^[^ ]$/;
                  // if(!parr.test($Y1)){
				       if(!reg.test($Y1)||$Y1.length<6||$Y1.length>18||parrtest.test($Y1)){
                   $(this).addClass("hehe").next("h4").text("6-18位，字母、数字、下划线")
                   }else{ 
                         $(this).addClass("haha")
                         .next("h4").text("")
                      }
               }
               
                 //密码 验证  8-12位字母及数字
               if($(this).is(".Y2")){
                   var $Y2=$(this).val();
                   var reg=/^[A-Za-z0-9\S]+$/;
                   var parrtest=/^[^ ]$/;
				           if(!reg.test($Y2)||$Y2.length<6||$Y2.length>18||parrtest.test($Y2)){
				           	/*console.log('11111');*/
                  $(this).addClass("hehe").next("h4").text("6-18位、字母、数字、符号");
                   }else{
                   	/*console.log('2222');*/
                        $(this).addClass("haha")
                        .next("h4").text("")
                      }
               }
               
               
                //确认密码 验证
                if($(this).is(".Y3")){
                  var self = $(this).val();
                   if (self!= $(".Y2").val()) {
                   $(this).addClass("hehe").next("h4").text("两次密码不一致！")
                   }else{ 
                         $(this).addClass("haha")
                         .next("h4").text("")
                      }
               }

               
               
               //昵称 验证   汉字
               if($(this).is(".Y4")){
                   var $Y4=$(this).val();
                   var parr=/^[0-9a-zA-Z|\u4e00-\u9fa5]+$/;
                   
                    if(!parr.test($Y4)||$Y4.length<2||$Y4.length>18){
                    $(this).addClass("hehe").next("h4").text("2-18位，字母、数字、汉字")
                  
                   }else{ 
                         $(this).addClass("haha")
                         .next("h4").text("")
                      }
               }
               
               //手机号  验证   11位数字
               if($(this).is(".Y5")){
                   var $Y5=$(this).val();
                   var parr=/(13[012356789][0-9]{8}|17[012356789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/;
                   if(!parr.test($Y5)){
                   $("#five").find("input").addClass("hehe")
                   $("#five").find("em").hide()
                   $("#five").find("h4").text("手机号码不正确！")
                   }else{ 
                         $("#five").find("input").addClass("haha")
                         $("#five").find("h4").text("")
                      }
               }
               
            
           })
           //如果用户直接点击提交按钮
           $("form").submit(function(){
			     $(":input").blur();
               if($("h4:empty").length==4){	
               	return true;
			      }else{				   
               alert("发送失败");
				       return false; 
				    }
           })
            
       })
       
       
       
       
       
       
       
       
       
