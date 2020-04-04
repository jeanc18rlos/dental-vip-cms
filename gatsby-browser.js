import "typeface-roboto"
import "./src/css/fonts/Bebas/style.css"
import "flag-icon-css/css/flag-icon.min.css"

const onClientEntry = () => {
  window.onload = () => {
    document.getElementById("preloader").style.display = "none"
  }
}

export {
    onClientEntry
}