// JavaScript Document

new WOW().init();

$(window).scroll(function(){
    var windowTop=$(window).scrollTop();
    if(windowTop>40){
        $('nav').addClass('cc');
    }else{
        $('nav').removeClass('cc');
    };
});

$('.carousel').carousel({
    pause:'false',
});

// <!--------------------------------------------------------scroll-------------------------------------------------------->

$('.nav-link,a').click(function(){
    var t=$(this).attr('href');
    var st=$(t).offset().top-50;
    $('html,body').animate({
        scrollTop:st
    },500);
});

// <!--------------------------------------------------------robot-------------------------------------------------------->

$('.r_body').delay(5000).fadeOut('slow');
$('#robot').click(function(){
    ($(this).html());
    sleep();
});

var r=true;

function sleep(){
    $('.r_body').toggle(function(){
        $('.r_body').css({opacity:1,height:350});
        if(r){
            $('#robot').addClass('animate__animated animate__rubberBand').bind('animationend',function(){
                $(this).removeClass('animate__animated animate__rubberBand');
            });
            $('#robot').removeClass('robot_pic').addClass('glyphicon glyphicon-remove');
            r=!r;
        }else{
            $('#robot').addClass('animate__animated animate__rubberBand').bind('animationend',function(){
                $(this).removeClass('animate__animated animate__rubberBand');
            });
            $('#robot').removeClass('glyphicon glyphicon-remove').addClass('robot_pic');
            r=!r;
        };
    });
};

function getDate(){
    var today=new Date();
    if(today.getHours()<13){
        return '上午'+today.getHours()+':'+today.getMinutes();
    }else{
        return '下午'+today.getHours()+':'+today.getMinutes();
    };
};

function keyin(event){
    if(event.which==13){
        $('#rsay_to').append('<div class="row rr_div"><div class="talk">'+$('#r_say').val()+'<br>'+getDate()+'</div><div class="r_p r_pic"><span class="glyphicon glyphicon-user"></span></div>');
        $('#r_say').val("");
        answer(3);
    };
};

$('.btn-send').each(function(s){
    $(this).click(function(){
        if(s==0){
            $('#rsay_to').append('<div class="row rr_div"><div class="talk">點餐<br>'+getDate()+'</div><div class="r_p r_pic"><span class="glyphicon glyphicon-user"></span></div>');
        };
        if(s==1){
            $('#rsay_to').append('<div class="row rr_div"><div class="talk">分店<br>'+getDate()+'</div><div class="r_p r_pic"><span class="glyphicon glyphicon-user"></span></div>');
        };
        if(s==2){
            $('#rsay_to').append('<div class="row rr_div"><div class="talk">聯絡<br>'+getDate()+'</div><div class="r_p r_pic"><span class="glyphicon glyphicon-user"></span></div>');
        };
        answer(s);
    });
});

function answer(s){
    setTimeout(function(){
        if(s==3){
            $('#rsay_to').append(QA());
        };
        if(s==0){
            $('#rsay_to').append('<div class="row r_div"><img src="images/robot.png" class="r_pic"><div class="r_hi">前往線上菜單查看，選擇您所喜愛的餐點！<br>'+getDate()+'</div></div>');
            var t=$('#order').offset().top-50;
            $('html,body').animate({
                scrollTop:t
            },500);
        };
        if(s==1){
            $('#rsay_to').append('<div class="row r_div"><img src="images/robot.png" class="r_pic"><div class="r_hi">資訊都幫您整理好啦！未來有可能再開分店，大家就敬請期待啦～<br>'+getDate()+'</div></div>');
            var t=$('#report').offset().top-50;
            $('html,body').animate({
                scrollTop:t
            },500);
        };
        if(s==2){
            $('#rsay_to').append('<div class="row r_div"><img src="images/robot.png" class="r_pic"><div class="r_hi">若有問題可以透過IG查看最新動態，追蹤起來不漏掉任何資訊！<br>'+getDate()+'</div></div>');
            var t=$('#board').offset().top-50;
            $('html,body').animate({
                scrollTop:t
            },500);
        };
        var e=document.getElementById('rsay_to');
        e.scrollTop=e.scrollHeight;
        e.scrollLeft=e.scrollLeft;
    },500);
};

function QA(){
    return '<div class="row r_div"><img src="images/robot.png" class="r_pic"><div class="r_hi">感謝您提供建議與問題，稍後將有專人為您服務！<br>'+getDate()+'</div></div>';
};

// <!--------------------------------------------------------ilike-------------------------------------------------------->

var h=true;

function ilike(t){
    $(this).click(function(){
        if(h){
            $('#uplike'+t).removeClass('glyphicon glyphicon-heart-empty orange fw').addClass('glyphicon glyphicon-heart orange fw').addClass('animate__animated animate__rubberBand').bind('animationend',function(){
                $(this).removeClass('animate__animated animate__rubberBand');
            });
            num=parseInt($('#i-like'+t).text());
            num=num+1;
            $('#i-like'+t).html(num);
            h=!h;
        }else{
            $('#uplike'+t).removeClass('glyphicon glyphicon-heart orange fw').addClass('glyphicon glyphicon-heart-empty orange fw');
            num=parseInt($('#i-like'+t).text());
            num=num-1;
            $('#i-like'+t).html(num);
            h=!h;
        };
    });
};

// <!--------------------------------------------------------animate-------------------------------------------------------->

$('.o_img').hover(function(){
    $(this).addClass('animate__animated animate__flip');
}).bind('animationend',function(){
    $(this).removeClass('animate__animated animate__flip');
});

$('.nav-link,.gly-link,a,.shop_add,.shop_min').click(function(){
    $(this).addClass('animate__animated animate__rubberBand');
}).bind('animationend',function(){
    $(this).removeClass('animate__animated animate__rubberBand');
});