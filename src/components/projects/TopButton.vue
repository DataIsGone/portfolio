<script setup>
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
</script>

<template>
    <button class ="desktop-visibility" @click="scrollToTop" id="backToTopBtn">
        <h3 class="style-pixel">^</h3>
    </button>
</template>

<style scoped>
    #backToTopBtn {
        position: fixed;
        bottom: 75px;
        right: 20px;       
        z-index: 99;
        border: none;
        outline: none;
        background-color: black;
        color: white;
        cursor: pointer;
        padding: 15px;
        border-radius: 10px;
        font-size: 18px;
    }

    #backToTopBtn:hover {
        background-color: #555;
    }

@media screen and (max-width: 575px) { 
    .desktop-visibility {
        display: none;        
    }
}
</style>