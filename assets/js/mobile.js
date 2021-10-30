const sizeTest = window.matchMedia('(max-width: 600px)');

window.onload=function() { 
  if ((sizeTest.matches) && (window.location.href.indexOf("about") > -1)) {
    // --- BIOGRAPHY
    document.getElementById("bio-box").innerHTML = document.getElementById("bio-text").textContent;
    

    // --- FEATURES
    setupFeatures();

    // --- SKILLS
    setupSkills();
    document.getElementById("skill-box").innerHTML = "changed skill-box on mobile";

    // --- SOCIAL MEDIA
    setupSocialMedia();

    // --- CONTACT BUTTONS
    editContactButtons();
  }
};


// --------------- SECTION: FEATURES
function setupFeatures() {
  formatTitles("feature-box", "Getting Featured");

  let feature = document.getElementById("feature-box");
  let featureList = Array.from(document.getElementById("feature-list").getElementsByTagName("li"));

  let newUL = document.createElement("ul");
  for (const li of featureList) {
    newUL.appendChild(li);
  }

  feature.innerHTML = "";
  feature.appendChild(newUL);
}


// --------------- SECTION: SKILLS
function setupSkills() {
  formatTitles("skill-box", "The Skillsets");
}


// --------------- SECTION: SOCIAL MEDIA
function setupSocialMedia() {
  let social = document.createElement("div");
  social.className = "pixel-div";
  social.innerHTML = "social test";
  social.id = "social-box";
  let contact = document.getElementById("contact-box");
  contact.before(social);
  social.before(document.createElement("br"));

  formatTitles("social-box", "Find Me Here");
}



// --------------- UTILITY
function editContactButtons() {
  let resume = document.getElementById("resume-content");
  resume.innerHTML = "Resume";

  let contact = document.getElementById("contact-content");
  contact.innerHTML = "Contact";
}

function formatTitles(boxId, titleText) {
  let box = document.getElementById(boxId);
  let title = document.createElement("h3");
  
  title.innerHTML = titleText;
  title.className = "cyber subtitle";
  
  box.before(title);

}