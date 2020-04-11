import "typeface-roboto"
import "typeface-ranga"
import "./src/css/fonts/Bebas/style.css"
import "flag-icon-css/css/flag-icon.min.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./src/css/icons/style.css";
import "./src/css/icons/burger/burger.css";
const onClientEntry = () => {
  window.onload = () => {
    document.getElementById("preloader").style.display = "none"
  }
}

export {
    onClientEntry
}