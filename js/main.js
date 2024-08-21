/*  ---------------------------------------------------
    Theme Name: Anime
    Description: Anime video tamplate
    Author: Colorib
    Author URI: https://colorib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            FIlter
        --------------------*/
        $('.filter__controls li').on('click', function () {
            $('.filter__controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.filter__gallery').length > 0) {
            var containerEl = document.querySelector('.filter__gallery');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    // Search model
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });

    /*------------------
        Navigation
    --------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Hero Slider
    --------------------*/
    var hero_s = $(".hero__slider");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        nav: true,
        navText: ["<span class='arrow_carrot-left'></span>", "<span class='arrow_carrot-right'></span>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        mouseDrag: false
    });

    /*------------------
        Video Player
    --------------------*/
    const player = new Plyr('#player', {
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'captions', 'settings', 'fullscreen'],
        seekTime: 25
    });

    /*------------------
        Niceselect
    --------------------*/
    $('select').niceSelect();

    /*------------------
        Scroll To Top
    --------------------*/
    $("#scrollToTopButton").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

})(jQuery);


//Load Data in index

const animeContainer = document.querySelector('#animeContainer');
anime_episode.slice(0, 9).forEach(data => {
    const animeItem = `
    <div class="col-lg-4 col-md-6 col-sm-12 custom-width">
        <a href="./anime-details.html?id=${data.id}" class="product__item-link">
            <div class="product__item">
                <div class="product__item__pic set-bg" style="background-image: url(${data.img});">
                    <div class="ep">${data.id} / 25</div>
                    <div class="comment"><i class="fa fa-comments"></i> 11</div>
                    <div class="view"><i class="fa fa-eye"></i> 9141</div>
                </div>
                <div class="product__item__text">
                    <ul>
                        <li>Active</li>
                        <li>Movie</li>
                    </ul>
                    <h5 class="title" style="color: white;">${data.title}</h5>
                </div>
            </div>
        </a>
    </div>
    `;
    animeContainer.innerHTML += animeItem;
});




const animeMovies = document.querySelector('#animeMovies');
anime_movies.slice(0, 9).forEach(movies => {
    const moviesItem = `
    <div class="col-lg-4 col-md-6 col-sm-6">
    <a href="./anime-details.html?moviesId=${movies.id}">
        <div class="product__item">
            <div class="product__item__pic set-bg" style="background-image: url(${movies.img});">
                <div class="ep">${movies.id} / 39</div> <!-- You can customize this part -->
                <div class="comment"><i class="fa fa-comments"></i> 11</div>
                <div class="view"><i class="fa fa-eye"></i> 9141</div>
            </div>
            <div class="product__item__text">
                <ul>
                    <li>Active</li>
                    <li>Movie</li>
                </ul>
                <h5 class="title" style="color: white;">${movies.title} </h5>
            </div>
        </div>
     </a>
    </div>
    `;
    animeMovies.innerHTML += moviesItem;
});



const tomCartoon = document.querySelector('#tomShows');
tom_cartoon.slice(0, 9).forEach(tom => {
    const tomItem = `
    <div class="col-lg-4 col-md-6 col-sm-6">
    <a href="./anime-details.html?cartoonId=${tom.id}">
        <div class="product__item">
            <div class="product__item__pic set-bg" style="background-image: url(${tom.img});">
                <div class="ep">${tom.id} / 140</div> <!-- You can customize this part -->
                <div class="comment"><i class="fa fa-comments"></i> 11</div>
                <div class="view"><i class="fa fa-eye"></i> 9141</div>
            </div>
            <div class="product__item__text">
                <ul>
                    <li>Active</li>
                    <li>Movie</li>
                </ul>
                <h5 class="title" style="color: white;">${tom.title} </h5>
            </div>
        </div>
        </a>
    </div>
    `;
    tomCartoon.innerHTML += tomItem;
});


const benCartoon = document.querySelector('#benShows');
ben_cartoon.slice(0, 9).forEach(ben => {
    const benItem = `
    <div class="col-lg-4 col-md-6 col-sm-6">
    <a href="./anime-details.html?benId=${ben.id}">
        <div class="product__item">
            <div class="product__item__pic set-bg" style="background-image: url(${ben.img});">
                <div class="ep">${ben.id} / 153</div> <!-- You can customize this part -->
                <div class="comment"><i class="fa fa-comments"></i> 11</div>
                <div class="view"><i class="fa fa-eye"></i> 9141</div>
            </div>
            <div class="product__item__text">
                <ul>
                    <li>Active</li>
                    <li>Movie</li>
                </ul>
                <h5 class="title" style="color: white;">${ben.title} </h5>
            </div>
        </div>
        </a>
    </div>
    `;
    benCartoon.innerHTML += benItem;
});

const benCartoon2 = document.querySelector('#benShows2');
ben_cartoon2.slice(0, 9).forEach(ben => {
    const benItem = `
    <div class="col-lg-4 col-md-6 col-sm-6">
    <a href="./anime-details.html?benId2=${ben.id}">
        <div class="product__item">
            <div class="product__item__pic set-bg" style="background-image: url(${ben.img});">
                <div class="ep">${ben.id} / 166</div> <!-- You can customize this part -->
                <div class="comment"><i class="fa fa-comments"></i> 11</div>
                <div class="view"><i class="fa fa-eye"></i> 9141</div>
            </div>
            <div class="product__item__text">
                <ul>
                    <li>Active</li>
                    <li>Movie</li>
                </ul>
                <h5 class="title" style="color: white;">${ben.title} </h5>
            </div>
        </div>
        </a>
    </div>
    `;
    benCartoon2.innerHTML += benItem;
});



const motuCartoon = document.querySelector('#motuShow');
motu_data.slice(0, 9).forEach(motu => {
    const motuItem = `
    <div class="col-lg-4 col-md-6 col-sm-6">
    <a href="./anime-details.html?motuId=${motu.id}">
        <div class="product__item">
            <div class="product__item__pic set-bg" style="background-image: url(${motu.img});">
                <div class="ep">${motu.id} / 90</div> <!-- You can customize this part -->
                <div class="comment"><i class="fa fa-comments"></i> 11</div>
                <div class="view"><i class="fa fa-eye"></i> 9141</div>
            </div>
            <div class="product__item__text">
                <ul>
                    <li>Active</li>
                    <li>Movie</li>
                </ul>
                <h5 class="title" style="color: white;">${motu.title} </h5>
            </div>
        </div>
        </a>
    </div>
    `;
    motuCartoon.innerHTML += motuItem;
});




