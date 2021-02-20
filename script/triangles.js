$(document).ready(function(){
    let triangles = [];
    function makeTriangles(){
        for(let i = 0; i < 11; i++){
            let svgTri = "<svg xmlns='http://www.w3.org/2000/svg' width='999.217' height='1046.601' viewBox='0 0 642.5 672.969'> <defs> <linearGradient id='header-shape-gradient' x2='0.35' y2='1'> <stop offset='0%' stop-color='var(--color-1)'/> <stop offset='50%' stop-color='var(--color-2)'/> <stop offset='100%' stop-color='var(--color-3)'/> </linearGradient> </defs> <path id='Forme_1_copie_7' data-name='Forme 1 copie 7' class='cls-1' d='M117.73,0.664L0.062,673.627,642.548,437.415,117.73,0.664' transform='translate(-0.063 -0.656)'/> </svg>"
            $('#triangles').append(`<div id=tri-${i}>${svgTri}</div>`);    
            triangles[i] = $("#tri-"+i);
        }
    }

    makeTriangles();


    triangles.forEach(function(triangle){
        var opacityTri = Math.random() * (0.07 - 0.02) + 0.02;
        var leftTri = Math.random() * (100 - 0) + 0;
        var topTri = Math.random() * (100 - 0) + 0;
        var rotTri = Math.random() * (360 - 0) + 0;
        triangle.css({'opacity':opacityTri});
        triangle.find($("svg")).css({'left':leftTri+'%'});
        triangle.find($("svg")).css({'top':topTri+'%'});
        triangle.find($("svg")).css({'transform': `rotateZ(${rotTri}deg)`});
        rotate(rotTri, triangle);
    })

    function rotate(degree, obj) {
            obj.find($("svg")).css({ WebkitTransform: 'rotate(' + degree + 'deg)'});  
            obj.find($("svg")).css({ '-moz-transform': 'rotate(' + degree + 'deg)'});                      
            var timer = setTimeout(function() {
                ++degree; rotate(degree, obj);
            },50);
        }
        
    });