let counter = true;
let text = 'ЯНДЕКС-КАРТЫ';
let visibility = 'hidden';
$( '#MAP__SWITCH-BUTTON' ).on( 'click', switchMap );
function switchMap() {

    if ( counter ) {
        $( '#MAP__SWITCH-BUTTON' ).attr( 'value', 'Google-карты' );
        $( '.map__item' ).eq( 0 ).stop();
        $( '.map__item' ).eq( 0 ).animate( { 'opacity': '0' }, 1000, () => {
            $( '.map__item' ).eq( 0 ).css( { 'visibility': 'hidden' } );
        } );
        
    } else {
        $( '.map__item' ).eq( 0 ).stop();
        $( '#MAP__SWITCH-BUTTON' ).attr( 'value', 'Яндекс-карты' );
        $( '.map__item' ).eq( 0 ).animate( { 'opacity': '1' }, 1000 );
        $( '.map__item' ).eq( 0 ).css( { 'visibility': 'visible' } );
    }
    counter = counter ? false: true;
    // console.log( counter );

}