/*百度首页交互JS*/
var baiDu = {
    init: function () {
        this.baiduSetting();
    },

    /*设置下拉菜单和侧边栏的显示与隐藏*/
    baiduSetting: function () {
        $('#navMore,#moreProduct').mouseover(function () {
            $("#moreProduct").show();
        }).mouseout(function () {
            $("#moreProduct").hide();
        })
    }
}

/*加载执行*/
$(function () {
    baiDu.init();
})
/*tab切换功能*/
$(document).ready(function () {
    $('#s-menu-wrapper li').each(function (index) {
        var liNode = $(this);
        $(this).click(function () {
            $('div.current').removeClass("current");
            $('#s-menu-wrapper li.current-tab').removeClass('current-tab');
            $('.tab-content').eq(index).addClass("current");
            liNode.addClass('current-tab');
        }).mouseout(function () {
            // clearTimeout(timeoutid);
        });
    });
});
/*换肤功能*/
$(document).ready(function () {
    var cur_skin = parseInt(localStorage.skin);
    if(!cur_skin){
        // $("#background").removeClass().addClass("background_"+0);
        $("#background").addClass("background_"+0);
    }else{
        $(".background").removeClass("background_"+cur_skin).addClass("background_"+cur_skin);

        // $("#background").removeClass().addClass("background_"+cur_skin);
    }
    $("#skin-change").click(function (e) {
        e.preventDefault();//preventDefault():取消对象的默认行为
        $('.skin-panel').slideDown();
        $(document).click(function (e) {
           $('.skin-panel').slideUp();
        });
        e.stopPropagation();//不加这句，事件会冒泡到document，从而触发slideUp事件
    });
    $('.skin-panel').click(function (e) {
        e.stopPropagation();
    });

    /*问题。。。。*/
    $(".skin-panel li").each(function (index) {
       $(this).click(function () {
            $(".background").removeClass("background_"+localStorage.skin).addClass("background_"+(index));//这里必须得用localStorage.skin，否则可能获取到的不是最新的值
           // $("#background").removeClass().addClass("background_"+(index));
           localStorage.skin = index;
       });
    });
});

/*浮动搜索框*/
$(document).ready(function () {
   var showHeight =  300;
    // $ (window).bind ('scroll',unableScroll());
    $(document).scroll(function () {
       if ($(window).scrollTop() > showHeight){
            $('.float-search').slideDown();
        }
        else if($(window).scrollTop() < showHeight){
           $('.float-search').hide();
       }
    });
});

/*侧边栏的弹出框*/
$(document).ready(function () {
   $('.more-product').hover(function () {
       $(window).scroll(function(){
           $ (window).bind ('scroll',unableScroll());
       });
   },function () {
       // $('body').css({'overflow':'scroll'});
       $ (window).unbind ('scroll', unableScroll());
   });
});
function unableScroll() {
    $(window).scrollTop(0);
}

// $('body').css({'overflow':'hidden'});//这种方式会导致页面抖动，因为右侧下拉条会消失