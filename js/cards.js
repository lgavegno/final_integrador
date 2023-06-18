
// BOTON DARK MODE 
let darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', function () {
 
document.body.classList.toggle('dark-mode');
let textColor = document.getElementById("totalTag");
textColor.style.color = "white";
});

  //-------------Eventos del mouse en Cards---------------

  function eventsBlock(bloque) {
    bloque.addEventListener('mouseover', () => {
      bloque.style.backgroundColor = 'yellow';
    });
  
    bloque.addEventListener('mouseout', () => {
      bloque.style.backgroundColor = '';
    });
  }

  const bloque1 = document.querySelector('.bloque1');
  const bloque2 = document.querySelector('.bloque2');
  const bloque3 = document.querySelector('.bloque3');
  
  eventsBlock(bloque1);
  eventsBlock(bloque2);
  eventsBlock(bloque3);
  

  //FUNC QUE MUESTRA LA CATEGORIA AL HACER CLICK EN LOS CARD
  function showOption(ent) {
    let selectElement = document.getElementById('category');
    selectElement.value = ent;
  }
   
  
 


 