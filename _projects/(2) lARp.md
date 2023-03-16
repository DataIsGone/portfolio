---
name: lARp
tools: [Photoshop, Maya, Unity, Hackathon]
image: /assets/img/projcards/lARp_card.png
description: Exercise and treat your body with mush respect.
---

{:.project-title .cyber .liner-title}
# LARP

<div class="flex-container">
    <div class="flex-child vertical-center m-iframe-container">
        <iframe width="854" height="480" class="pixel-div-enclose" src="https://www.youtube.com/embed/wR7rJfNN0Ow" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>

<br><br>

{:.cyber .subtitle .liner}
## Project Info
<div class="pixel-div pixel-div-exp">
    <h4 class="cyber info-subtitle">Event Info</h4>
    <ul>
        <li><strong>Hackathon</strong>: University of Virginia's <a href="https://hoohacks21.devpost.com">HooHacks (2021)</a> (24 Hours)</li>
        <li><strong>Awards</strong>: Best Art & Gaming Hack - 1st Place</li>
    </ul>
    <br>
    <h4 class="cyber info-subtitle">My Contributions</h4>
    <ul>
        <li><strong>Roles</strong>: Character generation development, character pixel art</li>
        <li><strong>Tools</strong>: Unity3D, Adobe Photoshop</li>
        <li><strong>Languages</strong>: C#</li>
    </ul>
    <hr class="inner-hr">
    <h5 class="cyber info-subtitle">What is lARp exactly?</h5>
    <p>
    <em>lARp</em> is an augmented reality roleplaying game encouraging exercise via running. Players become a questing fungi looking to better the lives of their shroomy homeland by running (literally running) errands for its denizens.
    </p>
    <p>
    Under the guise of these quests, this game tracks the time exercised and steps taken using a pedometer. Along the way, questers can run into friendly and deadly mushrooms. Using GPT-3, players can converse back and forth with unique characters before deciding their fate and defeating them in minigame battles between quests.
    </p>
    <hr class="inner-hr">
    <h5 class="cyber info-subtitle">Interested in trying lARp?</h5>
</div>

<br><br>

{:.cyber .subtitle}
### Work Samples
<div class="pixel-div">
<p class="instruct">
<span class="divider line razor">Click a preview to view the full asset</span>
</p>
<div class="pixel-div-gallery" markdown="1">
[<img src="/assets/img/projects/lARp/crop/piecewise_c.png">](/assets/img/projects/lARp/piecewise.png)
[<img src="/assets/img/projects/lARp/crop/randomize_c.gif">](/assets/img/projects/lARp/randomize.gif)
<!-- [<img src="/assets/img/projects/lARp/crop/island_c.gif">](/assets/img/projects/lARp/island.gif) -->
</div>
</div>

<br>

<!-- <div class="flex-container">
    <div class="flex-child vertical-center">
        <a class="no-underline" href="https://devpost.com/software/test-yotepg">
            <button class="btn m-btn">
            <span class="btn__content">Devpost</span>
            <span class="btn__glitch"></span>
            </button>
        </a>
    </div>
    <div class="flex-child vertical-center">
        <a class="no-underline" href="https://docs.google.com/presentation/d/1YYduuRyl2G3aSf83MsG60qYuUdKM0eRYCTBcEizqL-Q/edit?usp=sharing">
            <button class="btn m-btn">
            <span class="btn__content">Presentation</span>
            <span class="btn__glitch"></span>
            </button>
        </a>
    </div>
</div> -->

<!-- <br><br>

{:.cyber .subtitle .liner}
### Let Me Tell You More
<div class="pixel-div pixel-div-exp">
<h5 class="cyber info-subtitle">What is lARp exactly?</h5>
    <p>
    <em>lARp</em> is an augmented reality roleplaying game encouraging exercise via running. Players become a questing fungi looking to better the lives of their shroomy homeland by running (literally running) errands for its denizens.
    </p>
    <p>
    Under the guise of these quests, this game tracks the time exercised and steps taken using a pedometer. Along the way, questers can run into friendly and deadly mushrooms. Using GPT-3, players can converse back and forth with unique characters before deciding their fate and defeating them in minigame battles between quests.
    </p>
    <br>
    <h5 class="cyber info-subtitle">The Experience, My Thoughts</h5>
    <p>
    For this project, I contributed to development of both the backend and the visual assets. I really enjoy doing both art and computer science, so work-wise this was one of my favorite projects of 2021. Even better yet, my drawing and programming skills were utilized for the same feature: the generation of the mushroom characters.
    </p>
    <p>
    The mushroom characters are our MVP’s draw to replayability. Thanks to GPT-3 and the character design Nancy and I collaborated on, <em>lARp</em> can generate 9,000+ unique mushrooms. A mushroom can have a huge cap, a small body, and an angry personality, or they can have a small head, a round body, and be happy-go-lucky. My approach to this was to create a piecewise system where a mushroom cap, stem, and face were randomly selected from their respective sets and mashed together. Later, a GPT-3-generated personality would be added at random to bring the character to life. For the purposes of my portfolio, I’ll be discussing the character generation process without GPT-3.
    </p>
    <p>
    While Nancy sketched mushroom caps, faces, and stems, I quickly coded out a simple generation system that layered Unity2D sprites on top of each other:
    <ul>
        <li>rand() would select three numbers out of an inclusive range</li>
        <li>Each of these numbers would be matched with a key for a specific dictionary (head, face, stem)</li>
        <li>That dictionary key would hold a string value corresponding to a file name</li>
        <li>This string value would be passed into a function that pulled .png sprites with alpha (transparency)</li>
        <li>Each sprite would be stacked on top of each other at different y-axis translations</li>
        <li>Each stack of sprites would be nested under a game object for our backend developer to use</li>
    </ul>
    Very simple and could be streamlined, but it worked for the scope of our project and our time limit.
    </p>
    <p>
    At this point, Nancy had finished sketching mushroom parts. I then went in and made pixel art of each part, first only outlining them in black to test my generation system. From there, I spent the majority of my time quickly rendering each piece in Photoshop. Since Nancy and I are usually in charge of project aesthetics, we agreed that we would mix our styles together. This allowed me to work very quickly.
    </p>
    <p>
    Once all of this was done, I ended up doing some extra bits of work like making a simple floating island (mushrooms need to sit somewhere…) and some rotoscoping for our logo.
    </p>
    <p>
    Overall, I’m happy with how our MVP came out, even more so that it won a prize!
    </p>
</div> -->

<br>