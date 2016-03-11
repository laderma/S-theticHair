        $(document).ready(function () {
            var iw = $(window).width();
            $('#slides').css({
                width: iw
            });

            var options = {
       
                $PauseOnHover: true,
            };
            var jssor_slider1 = new $JssorSlider$('slider1_container', options);

            //responsive code begin
            //you can remove responsive code if you don't want the slider scales
            //while window resizes
            function ScaleSlider() {
                    var parentWidth = $('#slider1_container').parent().width();
                    if (parentWidth) {
                        jssor_slider1.$ScaleWidth(parentWidth);
                    } else
                        window.setTimeout(ScaleSlider, 30);
                }
                //Scale slider after document ready
            ScaleSlider();

            //Scale slider while window load/resize/orientationchange.
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
            //responsive code end


            $('#slide1').vegas({
                cover: true,
                align: 'top',
                slides: [{
                    src: '/static/img/slider/3.jpg'
                    }]
            });            
        })