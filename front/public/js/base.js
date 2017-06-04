$(function(){      //	控制导航显示的
   $(".one").on("mouseenter","li",function(){
	$(this).find('div').addClass('two').show();
	$(this).siblings('li').find('div').hide();
	});
	$(".one").on("mouseleave","li",function(){
	$(this).find('div').hide();	
	});
//	以上可能是公共部分
//控制轮播图
//	 定义一个变量控制播放的张数
	 var n=0;
////	1. 点击向下的按钮发生的事件
   $(".next").click(function(){
		next();
   });
////	 2.点击向上的按钮发生的事件
      $(".prev").click(function(){
      	n--;
      	if(n<0){
      		n=$(".lunbo ul li").length-1;
      	}
//    	alert(n);
      	$(".lunbo ul li").eq(n).fadeIn().siblings('li').fadeOut();
      	$("ol li").eq(n).addClass('selected').siblings('li').removeClass('selected');
      });
////    3.点击下面的控制按钮发生的事件
        $("ol li").on("click",function(){
        	$this=$(this);
        	var index=$this.index();
//      	alert(index);
        	$(".lunbo ul li").eq(index).fadeIn().siblings('li').fadeOut();
        	$("ol li").eq(index).addClass('selected').siblings('li').removeClass('selected');
        	n=index;
        });
//      4.自动播放事件
        var timer;
        timer=setInterval(next,2000);
        function next(){
        	   	 n++;
//		   	alert(n);
			    if(n>=$(".lunbo ul li").length)
			   {
			   	n=0;
			   }
		     $(".lunbo ul li").eq(n).fadeIn().siblings('li').fadeOut();
		     $("ol li").eq(n).addClass('selected').siblings('li').removeClass('selected');
        }
//      5.当放上去的时候清除定时器
          $(".lunbo").mouseenter(function(){
          	clearInterval(timer);
          });
//      6.当移走的时候再次开启定时器
          $(".lunbo").mouseleave(function(){
          	timer=setInterval(next,4000);
          });
        
    function shows(obj){
	  	 obj.mouseenter(function(){
	   $(this).find('.mark').show().siblings('li').hide();
	   $(this).find('h3').fadeIn().siblings('li').fadeOut();
	   });
	  };
	  function hides(obj){
	   obj.mouseleave(function(){
	   	$(this).find('.mark').hide();
	   	$(this).find('h3').fadeOut();
	   });
	  };
   })