<script setup>
  import Card from '../Card.vue';
  import TopButton from '../projects/TopButton.vue';
  import { ref, onMounted, computed } from 'vue';

  // FILTER
  const currentFilter = ref('');
  const filterTag = ref(null);
  const items = ref([]);

  const fetchData = async() => {
    try {
      const response = await fetch('/src/assets/projectcards.json');  // Ensure the correct path
      items.value = await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  onMounted(fetchData);                                               // Trying to avoid uncaught error in promise

  const uniqueTags = computed(() => {
    const allTags = [].concat(...Object.values(items.value).map(item => item.tags));
    return [...new Set(allTags)].sort();
  });

  const filteredItems = computed(() => {
    if (!filterTag.value) {
      return items.value;
    }
    return items.value.filter(item => item.tags.includes(filterTag.value));
  });

  const filterByTag = tag => {
    filterTag.value = tag;
    currentFilter.value = tag;
  };

  const resetFilter = () => {
    filterTag.value = null;
    currentFilter.value = null;
  };

  const headerTitle = computed(() => {
    if (currentFilter.value) {
      return `Projects: ${currentFilter.value}`;
    } 
    else {
      return 'Projects';
    }
  });

</script>

<template>
  <div class="container-fluid">
    <div class="align">
      <h1 class="style-pixel-bold">{{ headerTitle }}</h1>
      <hr>
      <nav class="navbar-filter">
        <div class="wrap">
          <span class="style-pixel-bold">Filter by Tag: </span>
          <a @click="resetFilter" class="link-style style-pixel">All</a>
          <span class="style-pixel">&nbsp;|&nbsp;</span>
        </div>
        <div v-for="(tag, index) in uniqueTags" :key="tag" class="wrap">
          <a @click="filterByTag(tag)">
            <span class="link-style style-pixel">{{ tag }}</span>
            <span v-if="index != uniqueTags.length - 1" @click.stop class="style-pixel">&nbsp;|&nbsp;</span>
          </a>
        </div>
      </nav>
    </div>
  </div>
  <div class="container center">
      <div class="row">
          <Card v-for="(item, index) in filteredItems"
            :key="index"
            :cardTitle="item.name"
            :cardDesc="item.desc"
            :cardImg="item.preview"
            :cardRole="item.role"
            :cardProjId="item.id"/>
      </div>
  </div>
  <div class="spacer"></div>
  <TopButton></TopButton>
</template>

<style scoped>
.navbar-filter {
    padding: 20px 20px;
    text-align: left;
}

.spacer {
  height: 5em;
}

.wrap {
  display: inline-block;
}

.center {
  margin: 0 auto;
}

h1 {
  text-align: left;
  padding: 1em 0 0 10px;
}

hr {
  padding: 0 10px;
}

.align {
  margin: 0 5em;
}

.link-style {
    background: linear-gradient(to left, rgba(255,255,255,0) 50%, #ffb100 50%) 100% 98% / 220% 100% no-repeat;
    color: #333;
    cursor: pointer !important;
    cursor: pointer;
    padding: 2px 5px;
    text-decoration: none !important;
    transition: all .35s ease-in-out;
}

.link-style:hover {
    background-position: 0 98%;
    color: #000;
    outline: none;
    transition: all .5s ease-in-out;
}
</style>