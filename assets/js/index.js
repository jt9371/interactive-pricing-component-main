var slider = document.getElementById("slideRange");
var rangeDisplay = document.getElementById("salida");
var switcher = document.getElementById("switch");
var pageviews = document.getElementById("pageviews");

//initial variables 
var valPageviews=["10K","50K","100K","500K","1M"];
var valPrice=["8.00","12.00","16.00","24.00","36.00"];
var monthly_bool = true;
var current_position = 2;
pageviews.innerText= '$'  + valPageviews[current_position];
rangeDisplay.innerText= '$'  + valPrice[current_position];

// .chrome styling Vanilla JS
// Update the current range-slider value (each time you drag the slider handle)
slider.oninput = function() {
    //take current position
    current_position = this.value;
    setValue();
    //styling background line of range-slider
    //position in percents
    var position = (this.value-this.min)/(this.max-this.min)*100;
    this.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ' + position + '%, hsl(224, 65%, 95%) ' + position + '%, hsl(224, 65%, 95%) 100%)'
}


switcher.onclick = function(){
    //yearly
    if(monthly_bool){
        //style the round slide of switcher
        this.classList.add('action');
        monthly_bool=false;
    }else{
        //monthly
        this.classList.remove('action');
        monthly_bool=true;
    }
    setValue();
}

const setValue = () => {
    if(monthly_bool){
        rangeDisplay.innerText = '$'  + valPrice[current_position];
    }else{
        //yearly
        rangeDisplay.innerText = '$'  + (valPrice[current_position]*3/4).toFixed(2);
    }
    pageviews.innerText=valPageviews[current_position];
}


