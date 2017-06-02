function main() {
          var figures = document.getElementsByTagName("figure");
          var teller = 0;
          while (teller < figures.length) {
            figures[teller].innerHTML = "<span class='upper'>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</span>" + "<span class='left'>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</span>" +  figures[teller].innerHTML + "<span class='bottom'>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</span><span class='right'>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</span>";
            teller++;
          }
}

window.onload = function() {
       main();
}


<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
<script src="http://static.tumblr.com/hpghjri/co2nfnr1j/infinitescroll.min.js"></script>
<script>

var $body = $("body"),
    app = {
        init: function() {
            this.stopAnimationLogo();
            this.centerPhotoset();
        },
        stopAnimationLogo: function() {
            $("svg.logo").attr("class", "hidden"),
            $("#wrapper").addClass('fade-in'),
            $(".load-wrapper").attr("class", "hidden load-wrapper")
        },
        centerPhotoset: function() {
            $("iframe.photoset").contents().find(".photoset_row").css({
                "margin-left": "auto",
                "margin-right": "auto"
            })
        }
    };

$(function(){
    var t=$("#content");

    t.infinitescroll({
        nextSelector:"#pagination .next",
        navSelector:"#pagination",
        itemSelector:"article",
        appendCallback:!0,
        bufferPx:500,
        {block:IfShowTrigger}
        behavior:"twitter",
        {/block:IfShowTrigger}
        loading:{
            finishedMsg:" ",
            img:"data:image/gif;base64,R0lGODlhAQABAHAAACH5BAUAAAAALAAAAAABAAEAAAICRAEAOw==",
            msg:null,
            msgText:" ",
            selector:null,
            finished:function(){
                $("#pagination .next").html("{lang:Load more posts}")
            }
        }
    },
    function(t){
        var n=$(t),
        i=n.map(function(){
            return this.id
        }).get();

        Tumblr.LikeButton.get_status_by_post_ids(i)
    });

    app.init();

    if($('body').hasClass('page-permalink')) {
        $("#notes-link").click(function(s) {
            return s.preventDefault(),
            $(this).toggleClass("active"),
            $(this).hasClass("active") ? $body.removeClass("webkit-flex") : $(this).hasClass("active") || $body.addClass("webkit-flex"),
            $(".notes").toggle(), !1
        });

        (0 != $(".page-permalink").find(".video").length || 0 != $(".page-permalink").find(".audio").length) && ($(".page-permalink").find("#content").addClass("block"),
        $(".page-permalink").find(".wrapper").addClass("margin")), 0 != $(".page-permalink").find(".photoset").length && $(".page-permalink").addClass("page-photoset");
    }

    var $hamburger = $('.page-index .hamburger'),
        $nav = $('.page-index .nav'),
        resizeTimer;

    $hamburger.on('mouseenter', function() {
       $nav.addClass('show');
       $hamburger.addClass('hide');
    });

    $nav.on('mouseleave', function() {
        $nav.removeClass('show');
        $hamburger.removeClass('hide');
    });

    $(window).on('resize', function() {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(function() {
            $(".page-permalink #content").height() + 200 > $body.height() ? $body.removeClass("center-vert webkit-flex") : $body.addClass("center-vert webkit-flex")

            $nav.removeClass('show');
            $hamburger.removeClass('hide');
        }, 250);
    });

    {block:IfHideSource}$("p").remove(":contains('Source:'),:contains('via ')");{/block:IfHideSource}
});
</script>
