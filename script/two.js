$(document).ready(function(){
    $(".txttoleft").hide();
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 10);

    let txtindex = 0;

    function textRep(){
        if (txtindex==1){
            $("#p3").removeClass("hidden");
            $("#p1").addClass("hidden");
            $("#p2").addClass("hidden");
        }
        else{
            $("#p1").removeClass("hidden");
            $("#p2").removeClass("hidden");
            $("#p3").addClass("hidden");
        }
    }

    function textChange(){
    if (txtindex==1){
    $(".txttoleft").show();
    $(".txttoright").hide();
    $(".txtpres").css({"transform":"translateX(-150%)"});
    setTimeout(() => {
        $(".txtpres").css({"opacity":"0"});
        $(".txtpres").css({"transform":"translateX(150%)"});
        textRep();
    }, 500);
    setTimeout(() => {
        $(".txtpres").css({"opacity":"1"});
        $(".txtpres").css({"transform":"translateX(0%)"});
    }, 800);
}

    else{

    $(".txttoleft").hide();
    $(".txttoright").show();
    $(".txtpres").css({"transform":"translateX(150%)"})
    setTimeout(() => {
        $(".txtpres").css({"opacity":"0"});
        $(".txtpres").css({"transform":"translateX(-150%)"});
        textRep();
    }, 500);
    setTimeout(() => {
        $(".txtpres").css({"opacity":"1"});
        $(".txtpres").css({"transform":"translateX(0%)"});
    }, 800);
}
}

$('.txttoleft, .txttoright').click(()=>{
    if (txtindex == 0){
        txtindex = 1;
    textChange();
}
    else{
        txtindex = 0;
        textChange();
    }
})

})