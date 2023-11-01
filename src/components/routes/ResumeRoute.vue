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
                <Button label="Download Full Resume" href="https://drive.google.com/file/d/1FpV8qwiLEPiT_TmzfR_P0cYVqy_FjdZz/view?usp=sharing"/>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-sm">
                <h2>Hard Skills</h2>
            </div>
            <div class="col-sm">
                <h5>Languages</h5>
                <br>
                <span v-for="(lang, index) in languages" :key="index">{{ lang }}
                    <span v-if="index !=languages.length - 1">, </span>
                </span>
                <br><br>
                <h5>Tools</h5>
                <br>
                <span v-for="(tool, index) in tools" :key="index">
                    {{ tool }}
                    <span v-if="index !=tools.length - 1">, </span>
                </span>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-sm">
                <h2>Experience</h2>
            </div>
            <div class="col-sm">
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
    </div>
</template>
  
<script setup>
    import Button from '../Button.vue'
    import { onMounted, ref } from 'vue';
    
    // Personal Information
    const name = ref('Ryan Davis');
    const jobTitle = ref('Technical Artist');
    
    // Languages, Tools
    const languages = ref(['Python', 'C#', 'C++', 'OpenGL', 'HTML5', 'CSS3', 'JavaScript', 'MySQL']);
    const tools = ref(['Autodesk Maya', 'Unity3D', 'Adobe Photoshop', 'Adobe Illustrator']);
    
    //Experience
    const experience = ref([
        {
            "company": "No Data Studios",
            "title": "Freelance Pixel Artist",
            "duration": "2021 - Present",
            "desc": [
                "Manages contracts, marketing, and sales of and for self-made custom visual media in various retro pixelated styles",
                "Creates illustrations and animations for commercial use by content creators and organizations, including Black Girl Gamers",
                "Collaborates within teams of artists for crowdsourced charity projects, resulting in donations of over $2000 USD per project"
            ] 
        },
        {
            "company": "Intel",
            "title": "Undergraduate Tehcnical Intern",
            "duration": "Feb. 2021 - Aug. 2021",
            "desc": [
                "Designed initial user interfaces and user experiences for extended reality products, allowing for first major playtests",
                "Established visual direction for future iterations of user interfaces using Adobe Photoshop",
                "Developed user interface features using C# in Unity3D",
                "Researched, analyzed, and demoed competitor products to help pivot the development team"
            ] 
        },
        {
            "company": "Microsoft",
            "title": "Senior Hologram Processing Technician (Contract)",
            "duration": "Aug. 2017 - Feb. 2019",
            "desc": [
                "Produced, troubleshot, and finalized holographic content, including point clouds, meshes, and textures",
                "Adjusted and enhanced holograms using Adobe Photoshop, Autodesk Maya, and Unity3D",
                "Tested and discussed proprietary software improvements with engineers"
            ] 
        },
        {
            "company": "Pixar Animation Studios",
            "title": "Pixar University Assistant (Temp)",
            "duration": "Dec. 2016 - May 2017",
            "desc": [
                "Assisted Art & Film Manager in maintaining professional film equipment and art studio",
                "Produced visual advertisements for studio-wide internal events"
            ] 
        }
    ]);
    
    // Education
    const educations = ref([
        {
            school: 'Oregon State University',
            degree: 'Bachelor of Science in Computer Science',
            duration: '2019 - 2022',
        },
        {
            school: 'UC Berkeley',
            degree: 'Bachelor of Arts in Art Practice',
            duration: '2011 - 2015',
        },
    ]);
</script>
  
  <style scoped>
    .resume {
        width: 80%;
        margin: 0 auto;
        font-family: Arial, sans-serif;
    }

    ul {
        display: table;
        margin: 0 auto;
        text-align: left;
        padding: 0 0 5px 0;
    }

    h1 {
        padding: 1em 0;
    }

    h5 {
        margin: 0 auto;
    }
  </style>