const sizeTest = window.matchMedia('(max-width: 600px)');

window.onload=function() { 
  if ((sizeTest.matches) && (window.location.href.indexOf("about") > -1)) {
    // --- BIOGRAPHY
    document.getElementById("bio-box").innerHTML = document.getElementById("bio-text").textContent;

    // --- FEATURES
    document.getElementById("feature-box").innerHTML = "changed feature-box on mobile"

    // --- SKILLS
    document.getElementById("skill-box").innerHTML = "changed skill-box on mobile";

    // --- SOCIAL MEDIA
    let social = document.createElement("div");
    social.className = "pixel-div";
    social.innerHTML = "social test";
    let contact = document.getElementById("contact-box");
    contact.before(social);
    social.before(document.createElement("br"));
  }
};
