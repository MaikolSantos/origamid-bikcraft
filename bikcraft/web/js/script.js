if (window.SimpleSlide) {
    new SimpleSlide({
        slide: 'quote', 
        time: 5000
    });

    new SimpleSlide({
        slide: 'portfolio', 
        nav: true, 
        auto: true, 
        time: 5000, 
        pauseOnHover: true
    });
}

if (window.SimpleAnime) {
    new SimpleAnime();
}
