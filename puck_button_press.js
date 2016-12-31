setWatch(function() {
    console.log("Pressed");
}, BTN, {edge:"rising", debounce:50, repeat:true});