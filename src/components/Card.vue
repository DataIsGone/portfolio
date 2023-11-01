<script>
    import { useRouter } from 'vue-router';

    export default {
        name: 'Card',
        props: {
            cardTitle: String,
            cardDesc: String,
            cardProjId: Number,
            cardImg: String,
            cardRole: String
        },
        setup(props) {
            const router = useRouter()
            const goToPage = (pageId) => {
                router.push({
                    path: `/project/`,
                    query: {projId: pageId}
                })
            }
            return { goToPage }
        }
    };
</script>

<template>
    <div class="card mb-3">
        <a href="#" @click.prevent="goToPage(cardProjId)">
            <img class="card-img-top mobile card-thumb" :src="cardImg" :alt="cardTitle">
        </a>
        <div class="card-body">
            <h5 class="card-title style-pixel-bold">{{ cardTitle }}</h5>
            <p class="card-text">{{ cardDesc }}</p>
            <p class="card-text" v-html="cardRole"></p>
            <p>
                <a class="link-style style-pixel" href="#" @click.prevent="goToPage(cardProjId)">
                    (learn more)
                </a>
            </p>
        </div>
    </div>
</template>
  
<style scoped>
    .card {
        margin: 1em;
        padding: 0;
        width: 30%;
        height: 50%; 
    }

    .card-thumb {
        cursor: pointer;
        max-height: 270px;
        max-width: 480px;
    }

@media screen and (max-width: 575px) { 
    .card {
        width: 90%;
        height: 100%;
        margin: 0 auto;
    }    
}
</style>