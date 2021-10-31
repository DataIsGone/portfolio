const sizeTest = window.matchMedia('(max-width: 600px)');

window.onload=function() { 
  if ((sizeTest.matches) && (window.location.href.indexOf("about") > -1)) {
    // --- BIOGRAPHY
    document.getElementById("bio-box").innerHTML = document.getElementById("bio-text").innerHTML;

    // --- SOCIAL MEDIA
    setupSocialMedia();

    // --- FEATURES
    setupFeatures();

    // --- SKILLS
    setupSkills();

    // --- CONTACT BUTTONS
    editContactButtons();
  }
  else if ((sizeTest.matches) && (window.location.href.indexOf("now") > -1)) {
    console.log("now");
    setupNow();
  }
};

// ------------------------------ NOW PAGE
function setupNow() {
  let box = document.getElementById("now-box");
  remakeList("now-box", "now-list");
  box.appendChild(document.createElement("br"));
  remakeList("now-box", "forever-list");
}



// ------------------------------ ABOUT PAGE
// --------------- SECTION: FEATURES
function setupFeatures() {
  formatTitles("feature-box", "Getting Featured");
  remakeList("feature-box", "feature-list");
}


// --------------- SECTION: SKILLS
function setupSkills() {
  formatTitles("skill-box", "The Skillsets");
  remakeList("skill-box", "skill-list");
}


// --------------- SECTION: SOCIAL MEDIA
function setupSocialMedia() {
  let social = document.createElement("div");
  social.className = "pixel-div";
  social.id = "social-box";
  let contact = document.getElementById("contact-box");
  contact.before(social);
  social.before(document.createElement("br"));

  formatTitles("social-box", "Find Me Here");

  // Fill with icons
  let cardParent = document.createElement("div");
  cardParent.className = "m-cards";
  let iconList = Array.from(document.getElementsByClassName("social-media-item"));
  for (const div of iconList) {
    let card = document.createElement("div");
    card.className = "m-card";
    thisIcon = div.getElementsByTagName("a")[0];
    card.appendChild(thisIcon);
    cardParent.appendChild(card);
  }
  social.appendChild(cardParent);
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

function remakeList(parentBoxId, origListId) {
  let thisBox = document.getElementById(parentBoxId);
  let thisList = Array.from(document.getElementById(origListId).getElementsByTagName("li"));

  let newUL = document.createElement("ul");
  for (const li of thisList) {
    newUL.appendChild(li);
  }

  thisBox.innerHTML = "";
  thisBox.appendChild(newUL);
}