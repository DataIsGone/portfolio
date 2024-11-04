<template>
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <h1 class="style-pixel-bold">{{ name }}</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <h2>{{ jobTitle }}</h2>
            </div>
            <div class="col-sm">
                <Button label="Download Full Resume" href="https://drive.google.com/file/d/1lclcjs21SOup6I9ZDUrnp7g44y6QxiZP/view?usp=sharing"/>
            </div>
        </div>
        <br>
        <hr>
        <div class="row">
            <div class="col-sm">
                <h2>Experience</h2>
            </div>
            <div class="col-sm-6">
                <div v-for="(job, index) in experience" :key="job.company">
                    <h4>{{ job.company }}</h4>
                    <i>{{ job.title }}</i>
                    <br>
                    {{ job.duration }}
                    <br><br>
                    <ul class="mini">
                        <li v-for="(description, descIndex) in job.desc" :key="descIndex">
                            {{ description }}
                        </li>
                    </ul>
                    <hr class="mini" v-if="index !=experience.length - 1">
                    <br v-if="index == experience.length - 1">
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <!-- PROJECTS -->
            <div class="col-sm">
                <h2>Projects</h2>
            </div>
            <div class="col-sm-6">
                <div v-for="(project, index) in projects" :key="project.title">
                    <h4>{{ project.title }}</h4>
                    <i>{{ project.type }}</i>
                    <br>
                    {{ project.duration }}
                    <br><br>
                    <ul class="mini">
                        <li v-for="(description, descIndex) in project.desc" :key="descIndex">
                            {{ description }}
                        </li>
                    </ul>
                    <hr class="mini" v-if="index !=projects.length - 1">
                    <br v-if="index == projects.length - 1">
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-sm">
                <h2>Education</h2>
            </div>
            <div class="col-sm">
                <div v-for="(education, index) in educations" :key="education.school">
                    <h4>{{ education.school }}</h4>
                    {{ education.degree }}
                    <p>{{ education.duration }}</p>
                    <br v-if="index !== educations.length - 1">
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-sm">
                <h2>Skills</h2>
            </div>
            <div class="col-sm">
                <h5>Languages</h5>
                <span v-for="(lang, index) in languages" :key="index">{{ lang }}<span v-if="index !=languages.length - 1">, </span><span v-else></span>
                </span>
                <br><br>
                <h5>Tools</h5>
                <span v-for="(tool, index) in tools" :key="index">{{ tool }}<span v-if="index !=tools.length - 1">, </span><span v-else></span>
                </span>
            </div>
        </div>
        <br><br>
    </div>
</template>
  
<script setup>
    import Button from '../Button.vue'
    import { ref } from 'vue';
    
    // Personal Information
    const name = ref('Ryan Davis');
    const jobTitle = ref('Technical Artist');
    
    // Experience
    const experience = ref([
        {
            "company": "Distance Over Time Studio",
            "title": "Technical Artist, Pixel Artist, Founding Member",
            "duration": "Oct. 2023 - Present",
            "desc": [
                "Develops game mechanics and tools focused on blind accessibility",
                "Establishes pipelines and best practices for team-based projects",
                "Scripts and maintains studio website"
            ] 
        },
        {
            "company": "Intel",
            "title": "Undergraduate Technical Intern",
            "duration": "Feb. 2021 - Aug. 2021",
            "desc": [
                "Established initial UI and UX for extended reality tools (NDA) using Adobe Photoshop",
                "Developed frontend features using C# in Unity3D for internal demos",
                "Researched, analyzed, and demoed competitor products to help pivot the development team"
            ] 
        },
        {
            "company": "Microsoft",
            "title": "Senior Hologram Processing Technician (Contract)",
            "duration": "Aug. 2017 - Feb. 2019",
            "desc": [
                "Produced and troubleshot, holographic content for clients, including point clouds, meshes, and textures",
                "Adjusted holograms using Adobe Photoshop, Autodesk Maya, and Unity3D to client satisfaction",
                "Tested and evaluated improvements with engineers on proprietary and client-facing software"
            ] 
        }
    ]);

    // Projects
    const projects = ref([
        {
            "title": "Guiding Light",
            "duration": "2023",
            "type": "Blind-accessible visual novel adventure game",
            "desc": [
                "Developed dialogue interface with text-to-speech features in Unreal Engine 5 Blueprints",
                "Redesigned and built blind-accessible navigational features",
                "Created original pixel artwork for game assets to help fill gaps in pipeline"
            ] 
        },
        {
            "title": "Hablo Gato",
            "duration": "2022",
            "type": "Immersive Spanish language-learning VR game",
            "desc": [
                "Scripted NPC spawner, path finding, and 2.5D stylization using C# in Unity3D",
                "Produced UI and UX designs, characters, and level concept art"
            ] 
        }
    ]);
    
    // Education
    const educations = ref([
        {
            school: 'Oregon State University',
            degree: 'Bachelor of Science, Computer Science',
            duration: '2019 - 2022',
        },
        {
            school: 'UC Berkeley',
            degree: 'Bachelor of Arts, Art Practice',
            duration: '2011 - 2015',
        }
    ]);

    // Languages, Tools
    const languages = ref(['Python', 'C#', 'C++', 'HTML5', 'CSS3', 'JavaScript']);
    const tools = ref(['Autodesk Maya', 'Unreal Engine 5', 'Unity3D', 'Adobe Photoshop', 'Affinity Designer']);
</script>
  
  <style scoped>
    .resume {
        width: 80%;
        margin: 0 auto;
        font-family: Arial, sans-serif;
    }

    ul {
        display: table;
        margin-left: 2.5vh;
        text-align: left;
        padding: 0 0 5px 0;
    }

    h1 {
        padding: 1em 0;
    }

    /* h5 {
        margin: 0 auto;
    } */

    .row {
        padding-top: 1vh;
    }
  </style>