// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
// 
//= require rails-ujs
//= require activestorage    
//= require jquery
//= require jquery_ujs
//= require turbolinks 
//= require_tree .



$(document).on('turbolinks:load', function() {

    // SHOW EACH IMAGE PROJECT/SHOW
    $('div.each-project-image-small').on("click", "div.slide", function(){  
        $(this).parents('div.apt-show-left').find('div.project-image-large').html($(this).context.innerHTML) 

        // var divNum = $(this).context.id 
        // console.log(divNum)
        // console.log($(this).context.innerHTML)
        // var large = $(this).parents('div.project-top').find('div.project-image-large').html();
        // console.log(large)
        // $(this).parentsUntil('div.project-top').find('div.project-image-large').css({"color": "red", "border": "2px solid red"});
    });

 
    // MAIN MIN NAV
    // $('div.min-nav-log').css({"color": "red", "border": "2px solid red"}); 
    $('div.topnav-right').on("click", "i.fa.fa-bars", function(){  
        $("div#mySidenav").css("height", "100%");  
    });  

    $('div.min-nav').on("click", "a.closebtn", function(){  
        $("div#mySidenav").css("height", "0%");  
    });

      // ACCOUNT_SHOW SHOW DEFAULT MENU
    $('div.account-show-tab').find("button#defaultOpen").css({"background-color": "#40089a", "color": "#fff"});  
    $('div.account-show-min-tab').find("button#defaultOpen").css({"background-color": "#40089a", "color": "#fff"}); 
    // $('div#accountShowMenu').on("click", "i.fa.fa-bars", function(){   
    //     $('div.account-show-min-tab').toggle(); 
    //     // $(this).css({"color": "red", "border": "2px solid red"}); 
    // }); 
    $('div#accountShowMenu').on("click", "i.fa.fa-bars", function(){   
        $('div#accountShowMySidenav').css("min-width", "60%");  
    });  

    $('div#accountShowMySidenav').on("click", "a.closebtn", function(){    
        $('div#accountShowMySidenav').css("width", "0");  
    });

    $('div.account-show').on("click", "div#accountShowMenu", function(){    
        $('div#accountShowMySidenav').css("min-width", "60%");   
    });



    // // SHOW MIN NAV
    // $('div.topnav-right').on("click", "i.fa.fa-bars", function(){ 
    //     $("mySidenav").style.height = "100%";
    //     // $(this).css({"color": "red", "border": "2px solid red"}); 
    // });



    
    
    // $("div.main-right-div").on("click", "span.reply_comment_link", function(){   
    //     var addDivNum = $(this).context.id
    //     var newDivName = ("comment-reply-form-div_"+ addDivNum)
    //     $('div.comment_reply_div').hide(); 
    //     $('div.comment-reply-form-div').hide();
    //     $('#comment-reply-main-comments-div'+ addDivNum).toggle();
    // })


    // $('div.na-min-logo').css({"color": "red", "border": "2px solid red"}); 
    // $('div.na-min-logo').on("click", "i.fa.fa-bars", function(){   
    //     // $('nav.nav-min').toggle();
    //     $(this).css({"color": "red", "border": "2px solid red"}); 
    // });


     // $('div.account-show-tab').find("button#defaultOpen").trigger('click')
    // $('div.accountShowMenu').css({"color": "red", "border": "2px solid red"});

    // Get the element with id="defaultOpen" and click on it 
    // document.getElementById("defaultOpen").click();
    // $('div.account-show-min-tab').find('button#defaultOpen.tablinks').css({"color": "red", "border": "2px solid red"});  
    // $('div.account-show-min-tabh').find('button#defaultOpen.tablinks').trigger('click');
    // $('div.account-show-right').find('button#defaultOpen.tablinks').show();

});
 
