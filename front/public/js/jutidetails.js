
		$(function(){
			 //	         调用插件实现放大镜效果
			    $('#etalage').etalage({  
			        thumb_image_width: 420,//缩略图的宽度  
			        thumb_image_height: 420,//缩略图的高度       
			    });  
			   $.get('basef.html',function(data){
			   $('.foot').html(data);
			   });
			});
//			数量的增加和减少
			var app=angular.module('num',[]);
        app.controller('shuliang',function($scope){
        	$scope.shu=1;
        	$scope.dec=function(){
        		if(this.shu>1)
        		this.shu-=1;
        	}
        	$scope.add=function(){
        		this.shu+=1;
        	}
        });
//        选择尺寸和颜色
       function showsy(obj){
       	obj.click(function(){
       	$(this).find('i').fadeIn();
       	$(this).siblings('span').find('i').fadeOut();
       })
       }
       showsy($('.size span'));
       showsy($('.yanse span'));
//     点击商品和评论进行切换
    $('.showdetails ul li').click(function(){
    	$(this).addClass('lishow').siblings('li').removeClass('lishow');
    	var index=$(this).index();
    	if(index==0){
    		$('.shangpinds').addClass('showsp');
    		$('.pinlunds').removeClass('showsp');
    	}else if(index==1){
    		$('.pinlunds').addClass('showsp');
    		$('.shangpinds').removeClass('showsp');
    	}
    })