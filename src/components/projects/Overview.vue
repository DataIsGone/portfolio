<script setup>
    import { defineProps } from 'vue';
    const { content } = defineProps(['content']);
</script>

<template>
    <ul>
        <li v-for="(item, index) in content.projOverview" :key="index">
            <span v-if="index == content.length - 1">
                <strong>{{ item[0] }}</strong>:
                <br>{{ item[1] }}
            </span>
            <span v-else><strong>{{ item[0] }}</strong>: {{ item[1] }}</span>

        </li>        
    </ul>
    <div v-if="content.extraOverview" class="extra-overview">
        <br>
        <span>{{ content.extraOverview[0] }}</span>
        <ul>
            <li v-for="(item) in content.extraOverview[1]" :key="item">
                {{ item }}
            </li>
        </ul>
    </div>    
</template>

<style scoped>
    ul {
        display: table;
        margin: 0 5em;
        text-align: left;
    }

    .extra-overview {
        text-align: left;
        margin: 0 5em;
    }

@media screen and (max-width: 575px) {
    .extra-overview {
        margin: 0;
        text-align: center;
    }
}
</style>