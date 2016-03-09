    // vars
    var $container = $('.container');
    var $slider = $('.slider');
    var $imgUl = $('.imgUl');
    var $li = $imgUl.find('li');
    var $nav_left = $('.arrowleft');
    var $nav_right = $('.arrowright');
    var $dots = $('.dots');
    var active = 0;
    var zIndex = 100;
    var direction = 'right-to-left';
    var mouseIn = "";

    // action
    animate();
    setInterval(animate, 2000);
    $slider.mouseover(pauseAnimation);
    $slider.mouseleave(resumeAnimation);
    $nav_left.click(function(){
        direction = 'left-to-right';
        animate(true);
    });
    $nav_right.click(function(){
        direction = 'right-to-left';
        animate(true);
    });


    // functions
    function pauseAnimation() {
        mouseIn = true;
    }
    function resumeAnimation() {
        mouseIn = false;
    }
    function animate(force) {
console.log(force);
        if ( ! force ) if ( mouseIn ) return;

        var w = $slider.width();
        if ( direction == 'right-to-left' ) {
            increaseActiveNo();
            var left = w;
            console.log(left);
        }
        else {
            decreaseActiveNo();
            var left = -w;
            console.log(left);
        }
        $li.eq(getActiveNo())
            .css({
                'display' : 'block'
                , 'z-index': getNextIndex()
                , 'left' : left
                , 'width' : w
            
            } )
            .animate({left:0}, 500, function(){
            	$li.css('display', 'none');
                $li.eq(getActiveNo()).css('display', 'block');
            });

    }

    function getActiveNo() {
        if ( active >= $li.length ) active = 0;
        else if ( active < 0 ) active = $li.length - 1;
        console.log(active);
        return active;
    }
    function increaseActiveNo() {
        ++active;
        console.log(active);
    }
    function decreaseActiveNo() {
        --active;
        console.log(active);
    }
    function getNextIndex() {
        return ++zIndex;
        console.log(zIndex);

    }


