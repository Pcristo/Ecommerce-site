
//CSS



//SMOOTH SCROOL

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

  
//PARALLAX

$(window).scroll(function(){
    parallax();
    })
    function parallax(){
    
    var wScroll = $(window).scrollTop();
    
    
    $(".parallax").css("top",
    "center "+(wScroll*0.90)+"px")
    
    $(".parallax-box").css("top",
    -50+(wScroll*0.18)+"px")
    
    }

  // Change The Picture and Associated Element Color when Color Options Are Clicked.
  $(".product-colors span").click(function() {
    $(".product-colors span").removeClass("active");
    $(this).addClass("active");
    $(".active").css("border-color", $(this).attr("data-color-sec"))
    $(".container-card .imgBx").css("background", $(this).attr("data-color-primary"));
    $(".container-card h2").css("color", $(this).attr("data-color-sec"));
    $(".container-card h3").css("color", $(this).attr("data-color-sec"));
    $(".container .imgBx").css("background", $(this).attr("data-color-sec"));
    $(".container .details button").css("background", $(this).attr("data-color-sec"));
    $(".imgBx img").attr('src', $(this).attr("data-pic"));
});

//Back to Top

$(document).ready(function(){
  $(window).scroll(function() {
   if ($(document).scrollTop() >200) { 
        $(".back_to_top").css("margin-right", "-15px");
        $(".back_to_top").css("transition", "3s");
    } else {
      $(".back_to_top").css("margin-right", "-100px");
      $(".back_to_top").css("transition", "2s");
    }
  });
});

//Cookies Alert Box
function cookies(functions) {
  const container = document.querySelector('.cookies-container');
  const save = document.querySelector('.cookies-save');
  if (!container || !save) return null;

  const localPref = JSON.parse(window.localStorage.getItem('cookies-pref'));
  if (localPref) activateFunctions(localPref);

  function getFormPref() {
    return [...document.querySelectorAll('[data-function]')]
      .filter((el) => el.checked)
      .map((el) => el.getAttribute('data-function'));
  }

  function activateFunctions(pref) {
    pref.forEach((f) => functions[f]());
    container.style.display = 'none';
    window.localStorage.setItem('cookies-pref', JSON.stringify(pref));
  }

  function handleSave() {
    const pref = getFormPref();
    activateFunctions(pref);
  }

  save.addEventListener('click', handleSave);
}

function marketing() {
  console.log('Função de marketing');
}

function analytics() {
  console.log('Função de analytics');
}

cookies({
  marketing,
  analytics,
});

