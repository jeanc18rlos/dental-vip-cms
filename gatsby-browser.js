require("./src/styles/vendors/animate.css");
require("bootstrap/dist/css/bootstrap.min.css");
require("./src/styles/_index.scss");
require("./src/styles/fonts/Bebas/style.css");
require("./src/styles/fonts/icons/style.css");

exports.onClientEntry = () => {
  window.onload = () => {
    document.getElementById("preloader").style.display = "none";
  };
};
