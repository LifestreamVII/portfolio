$('.illuspic').click(function() {
    let picSrc = $(this).attr("src");
    $(".shw1 img").attr("src", picSrc);
    let picDesc = $(this).attr("alt");
    $(".shw1 p").text(picDesc);
    $(".shw1").css({
        'display':'block',
        'transition' : 'all 0.8s ease'
});
$(".boxpic").css({
    'display':'block',
    'transition' : 'all 0.8s ease'
});

$('.bgcontainer').css({
    'opacity' : '0.1',
    'transition' : 'all 0.8s ease'
})

})

$('.boxpic').click(function() {
    $(".shw1").css({
        'display':'none',
        'transition' : 'all 0.8s ease'
    });
    $(".boxpic").css({
    'display':'none',
    'transition' : 'all 0.8s ease'
    });
    $('.bgcontainer').css({
    'opacity' : '1',
    'transition' : 'all 0.8s ease'
    })
    })