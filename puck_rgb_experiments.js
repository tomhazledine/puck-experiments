var  on = false;

//*
var target = 1;

setWatch(function() {
    console.log("Pressed");
    on = !on;

    //var level = Math.random() * (1 - 0.1) + 1;
    if (on) {
        switch (target) {
            case 1:
                //analogWrite(LED1,1);
                set_rgb_led( [ 0, 255, 255 ] );
                break;
            case 2:
                //analogWrite(LED2,1);
                set_rgb_led( [ 0, 255, 0 ] );
                break;
            case 3:
                //analogWrite(LED3,1);
                set_rgb_led( [ 0, 0, 255 ] );
                break;
        }
    } else {
        set_rgb_led( [ 0, 0, 0 ] );
        //analogWrite(LED1,0);
        //analogWrite(LED2,0);
        //analogWrite(LED3,0);
    }
    target++;
    if (target >= 4) {
        target = 1;
    }
}, BTN, {edge:"rising", debounce:50, repeat:true});
//*/

var LED = [ LED1, LED2, LED3 ];

function map_rgb( rgb_array ) {
  decimal_array = rgb_array.map( function( x ) {
    return x / 255;
  });
  return decimal_array;
}

function set_rgb_led( rgb_array ) {
  parsed_rgb_values = map_rgb( rgb_array );
  for (i = 0; i < parsed_rgb_values.length; i++) {
    analogWrite( LED[i], parsed_rgb_values[i] );
  }
}