const addSwiper = (swiperContainerSelector, swiperSettings) => {
    const breakpoint = window.matchMedia( '(min-width:768px)' );
    let mySwiper;

    breakpoint.addListener(breakpointChecker);
    breakpointChecker();

    function breakpointChecker() {
        if ( breakpoint.matches === true ) {

            if ( mySwiper !== undefined ) {

                mySwiper.destroy( true, true );
                return;
            }
        } else if ( breakpoint.matches === false ) {

            return enableSwiper();
        }
    };

    function enableSwiper() {
        mySwiper = new Swiper (swiperContainerSelector, swiperSettings);
    };
}
