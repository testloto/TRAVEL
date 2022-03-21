
//Navbar Sticky

//When the user scrolls the page, execute myFunction

window.onscroll = function(){
    myFunction()
};

//Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

//Add the sticky class to the navbar when u reach its scroll position.
// Remove "sticky" when u leave the scroll position
function myFunction() {
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky")
    }else{
        navbar.classList.remove("sticky");
    }
}

// Navbar end

// Smooth Scrolling Start
$(document).ready(function(){

    //Add smooth scrolling to all links
    $("a").on('click', function(event){

        //Makin sure this.hash has a value before overriding behaviour
        if(this.hash !==""){

            //Prevent default anchor click behaviour
            event.preventDefault();

            //Store hash
            var hash = this.hash;

            //Using jQuery animate()method to add smooth page scroll
            // This optional number(800) specifies the number of milliseconds it takes ro scroll to the specified area.
            $('html,body').animate({

                scrollTop: $(hash).offset().top } , 800, function (){
                    
                    //add hash(#) to URL when done scrolling(default click behaviour)
                    window.location.hash = hash;
                
            });

        }



    });


});