window.onload = function() {
    var image = document.getElementById('fullScreenImage');
    
    //var screenWidth = window.innerWidth;
    //var screenWidth = document.body.scrollWidth;
    var screenHeight = window.innerHeight;
    
    // Establecer el ancho y alto de la imagen según las dimensiones de la pantalla
    //image.style.width = screenWidth + 'px';
    image.style.height = screenHeight + 'px';
  }

  function modoOscuro() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 function redirectModernas()
    {
   
    window.location.href="https://programminghead.com/submit-button-redirect-to-another-page-in-html/";
    }