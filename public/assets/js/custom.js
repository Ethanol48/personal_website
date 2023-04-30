document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los elementos con la clase "navi"
    var links = document.querySelectorAll('.navi');
    
    // Itera a través de cada enlace y agrega el evento de clic
    links.forEach(function(link) {

      

      link.addEventListener('click', function(event) {

        if (this.getAttribute('href') !== '/content.html' ) {

          // Previene el comportamiento predeterminado del enlace
          event.preventDefault();
    
          // Obtiene el elemento objetivo del desplazamiento
          var target = document.querySelector(this.getAttribute('href'));
          
          // Calcula la posición de desplazamiento del elemento objetivo
          var targetPosition = target.getBoundingClientRect().top + window.scrollY;
          
          // Realiza el desplazamiento suave con una duración de 2 segundos
          var duration = 1700; // 
          var start = window.pageYOffset;
          var startTime = null;
    
          function animateScroll(currentTime) {
            if (startTime === null) {
              startTime = currentTime;
            }
            var timeElapsed = currentTime - startTime;
            var scrollY = easeInOutQuad(timeElapsed, start, targetPosition - start, duration);
            window.scrollTo(0, scrollY);
            if (timeElapsed < duration) {
              requestAnimationFrame(animateScroll);
            }
          }
    
          function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
          }
    
          requestAnimationFrame(animateScroll);
        }
      });
    });
  });
  