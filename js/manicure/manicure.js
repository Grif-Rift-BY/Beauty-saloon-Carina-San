$( document ).ready(function() {
    $( '#slider' ).owlCarousel( {
        dots: true,
        center: false,
        loop: true,
        margin: 5,
        nav: true,
        smartSpeed: 3000,
        autoplay: true,
        navText: [
            '<svg class="strelka-left" width="35" height="35" viewBox="0 0 5 9"><path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" ></path></svg>',
            '<svg width="35" height="35" viewBox="0 0 5 9"><path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" ></path></svg>'
        ],
        responsive:{
            0:{
                items:1
            }
        }
    } );
} );

let fps = 200;
let index = 1;
let size = 1;
let timer = setTimeout;

function moveParallax() {

    timer( function() {
        requestAnimationFrame( moveParallax );
        size = size + 0.00045;
        PARALLAX_LAYER_1.style.transform = `scale( ${size} )`;
        if ( size >= 1.2 ) {
            size = 1;
            timer = clearTimeout;
            
            moveInfoBlock();
            index++;
            if ( index > 5 ) {
                index = 1;
            }
            changeOpacity();
            
            timer = setTimeout;
        }
    }, 1000 / fps );
}

async function moveInfoBlock() {
    $( '#INFOBLOCK_ITEM_1' ).css( { 'top': '0', 'opacity': '1' } );
    $( '#INFOBLOCK_ITEM_1' ).animate( { 'top': '-6%', 'opacity': '0' }, 300 );
    $( '#INFOBLOCK_ITEM_2' ).css( { 'top': '-3%', 'opacity': '0' } );
    $( '#INFOBLOCK_ITEM_2' ).animate( { 'top': '0', 'opacity': '1' }, 600 );
    $( '#PARALLAX_LAYER_2' ).css( { 'opacity': '1' } ); 
    $( '#PARALLAX_LAYER_2' ).css( { 'background-image': `url(../images/manicure/animation/${index}.webp)` } );
}

async function changeOpacity() {
    $( '#PARALLAX_LAYER_1' ).css( { 'opacity': '0'} );
    $( '#PARALLAX_LAYER_1' ).css( { 'background-image': `url(../images/manicure/animation/${index}.webp)` } );
    $( '#PARALLAX_LAYER_1' ).animate( { 'opacity': '1' }, 500 );
}

moveParallax();