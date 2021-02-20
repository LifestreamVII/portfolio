$(document).ready(function(){
$(".main").addClass("animationmain");
$('.cons').hide();
$(".mdpinput").focus(()=>{
    $('.cons').show(200);
    $(".main").removeClass("animationmain");
})
$(".mdpinput").focusout(()=>{
    $('.cons').hide(200);
})

function getTime(){
        let timeH =  new Date().toLocaleTimeString('en', {hour: "numeric", minute: "numeric"});
$("#hour").text(timeH.slice(0, -3));
$("#amorpm").text(timeH.slice(-2));

}
getTime();

setInterval(() => {
    getTime();
}, 1000);

$("input[type=submit]").click((event)=>{

    event.preventDefault();

    if($("input").val() < 1)
    $('.cons').text("veuillez entrer un mot de passe !");
    else{
    $(".main").addClass("animationmainrev");
    $(".portfolio").hide(400);
    $('.cons').hide(200);
    $(".main").animate({opacity:0}, 500);
    setTimeout(() => {
            $(".main").hide(500);
            // window.location = "pagetwo.html";
    }, 800);
}
})

})