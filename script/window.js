$(document).ready(function(){

    let winActive = false;
    let winProj;
    let imgUrl;
    function setupBlocker(){
        if (winActive)
        $(".blocker").css({"display":"flex"});
        else
        $(".blocker").css({"display":"none"});
    }

    $(".imgproj").click(function(){
        if (winActive){}
        else
        {
        let winProjDiv = "<div class='window'></div>";
        winProj = $(".window");
        imgUrl = $(this).attr("name")+".html";
        winActive = true;
        setupBlocker();
        $("body").append(winProjDiv);
        $(".window").css({"opacity":"0"});
        setTimeout(() => {
            $(".window").css({"opacity":"1"});
        }, 100);
        
        $.ajax({url: imgUrl, success: function(result){
            $(".window").html(result);}})
        }
        
    })

    $("body").on('click','.clsbtn',function(){
        console.log("close");
        winActive = false;
        setupBlocker();
        $(".window").css({"opacity":"1"});
        setTimeout(() => {
            $(".window").css({"opacity":"0"});
        }, 100);
        setTimeout(() => {
            $(".window").remove();
        }, 800);
    })
})