yu = document.querySelector("section.intro");

menu = document.querySelector("#navigation")
icons = document.querySelector("#icons")

function getOrientation() {
  // 0 == izquierda
  if (getComputedStyle(yu).letterSpacing == '0.65px') {
    return 0
  } else {
    return 1
  }
}

Orientation = getOrientation()

if (Orientation === 0 ) {
    icons.style.justifyContent = 'flex-end'
    menu.classList.add('izquierda-sticky')
    //console.log('flex end')

} else if (Orientation === 1 ) {
    icons.style.justifyContent = 'flex-start'
    //console.log('flex start')

}

addEventListener("resize", (event) => {});
onresize = (event) => {


  Orientation = getOrientation()


  if (Orientation === 0 ) {
      icons.style.justifyContent = 'flex-end'
      menu.classList.add('izquierda-sticky')
      //console.log('flex end')

  } else if (Orientation === 1 ) {
      icons.style.justifyContent = 'flex-start'
      menu.classList.remove('izquierda-sticky')
      //console.log('flex start')

  }

};