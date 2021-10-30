const sizeTest = window.matchMedia('(max-width: 600px)');

window.onload=function() { 
  if ((sizeTest.matches) && (window.location.href.indexOf("about") > -1)) {
    document.getElementById("bio-box").innerHTML = "changed bio-box on mobile"

    document.getElementById("feature-box").innerHTML = "changed feature-box on mobile"
    
    document.getElementById("skill-box").innerHTML = "changed skill-box on mobile";
  }
};