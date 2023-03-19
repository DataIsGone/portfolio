const sizeTest = window.matchMedia('(max-width: 600px)');

window.onload=function() { 
  if ((sizeTest.matches) && (window.location.href.indexOf("about") > -1)) {
    // --- BIOGRAPHY
    document.getElementById("bio-box").innerHTML = document.getElementById("bio-text").innerHTML;

    // --- SOCIAL MEDIA
    // reconstructContact();
    setupSocialMedia();

    // --- FEATURES
    setupFeatures();

    // --- SKILLS
    setupSkills();

  }
  else if ((sizeTest.matches) && (window.location.href.indexOf("now") > -1)) {
    setupNow();
  }
  // --- FIX BUTTONS ON PIXEL GALLERY
  else if ((sizeTest.matches) && (window.location.href.indexOf("pixelart") > -1)) {
    setupPixelBtns();
  }
};

// ------------------------------ NOW PAGE
function setupNow() {
  let box = document.getElementById("now-box");
  remakeList("now-box", "now-list");
  box.appendChild(document.createElement("br"));
  remakeList("now-box", "forever-list");
}

// ------------------------------ PIXEL GALLERY PAGE
function setupPixelBtns() {
  let box = document.getElementById("pixel-btn-box");
  box.appendChild(document.createElement("div"));
  box.className = "pixel-btn-parent";
}

// ------------------------------ ABOUT PAGE
// --------------- SECTION: FEATURES
function setupFeatures() {
  formatTitles("feature-box", "Features & Rewards");
  remakeList("feature-box", "feature-list");
}


// --------------- SECTION: SKILLS
function setupSkills() {
  formatTitles("skill-box", "Skillset");
  remakeList("skill-box", "skill-list");
}

// --------------- SECTION: CONTACT
// function reconstructContact() {
//   let box = document.getElementById("contact-box");
//   let info = document.getElementById("contact-info");

//   while (box.firstChild) {
//     box.remove(box.firstChild);
//   }
// }

// --------------- SECTION: SOCIAL MEDIA
function setupSocialMedia() {
  let social = document.createElement("div");
  social.className = "pixel-div";
  social.id = "social-box";
  let contact = document.getElementById("contact-box");
  contact.before(social);
  social.after(document.createElement("br"));

  // Remove extrenuous Social Media title
  let extraTitle = document.getElementById("desktop-sm");
  extraTitle.remove();
  formatInfoSubtitles(social.id, "Social Media");

  // Fill with icons
  let cardParent = document.createElement("div");
  cardParent.className = "m-cards vertical-center";
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
function formatTitles(boxId, titleText) {
  let box = document.getElementById(boxId);
  let title = document.createElement("h3");
  
  title.innerHTML = titleText;
  title.className = "pixel-font subtitle";
  
  box.before(title);
}

function formatInfoSubtitles(boxId, titleText, parentId) {
  let box = document.getElementById(boxId);
  let title = document.createElement("h5");
  
  title.innerHTML = titleText;
  title.className = "pixel-font info-subtitle";
  
  box.appendChild(title);
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