<template>
  <Title></Title>
  <!-- MOBILE FILTER FORMAT -->
  <div class="container-fluid" v-if="isMobile">
    Test
  </div>

  <!-- DESKTOP FILTER FORMAT -->
  <div class="container-fluid" v-else>
    <div class="align row">
      <div class="col-6">
        <h1 class="style-pixel-bold">Projects</h1>
        <div class="row">
          <div class="col" style="text-align:left;">
            <span class="style-pixel-bold">{{ filterTitle }}</span>
          </div>
        </div>
      </div>
      <div class="col-6 center-filter">
        <div class="btn-group dropright">
          <Button label="Filter Projects by Tag" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
          <div class="dropdown-menu">
              <button v-for="(tag) in uniqueTags" :key="tag" class="dropdown-item sub-button" type="button" @click="filterByTag(tag)">{{ tag }}</button>
              <div class="dropdown-divider"></div>
              <button class="dropdown-item sub-button" @click="resetFilter">Show All</button>
          </div>
        </div>
      </div>
      <hr>
    </div>
  </div>

  <!-- PROJECTS -->
  <div class="container center">
      <div class="row">
          <Card v-for="(item, index) in filteredItems"
            :key="index"
            :cardTitle="item.name"
            :cardDesc="item.desc"
            :cardImg="cardArr[item.id]"
            :cardRole="item.role"
            :cardProjId="item.id"/>
      </div>
  </div>
  <div class="spacer"></div>
  <TopButton></TopButton>
</template>

<script setup>
  import { ref, onMounted, onUnmounted, computed } from 'vue';

  import Button from '../Button.vue';
  import Card from '../Card.vue';
  import Title from '../../components/Title.vue';
  import TopButton from '../projects/TopButton.vue';

  // ----- PROJECT CARDS
  import { CatiatorCard,
           HabloGatoCard,
           GLCard,
           MicrosoftCard,
           StarmetryCard } from '/src/importCardImages.js';

  const cardArr = [
    HabloGatoCard,    // 0
    StarmetryCard,    // 1
    CatiatorCard,     // 3
    GLCard,           // 4
    MicrosoftCard,    // 5
  ];

  // FILTER
  const currentFilter = ref('');
  const filterTag = ref(null);
  const items = ref([]);

  const fetchData = async() => {
    try {
      const response = await fetch('/projectcards.json');
      items.value = await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  onMounted(fetchData);                                   // Trying to avoid uncaught error in promise

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

  const filterTitle = computed(() => {
    if (currentFilter.value) {
      return `Viewing: ${currentFilter.value}`;
    } 
    else {
      return 'Viewing: All';
    }
  });

  // DOM CHANGES BASED ON MEDIA QUERY
  const isMobile = ref(false);
  
  const updateIsMobile = () => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    isMobile.value = mediaQuery.matches;
  }

  onMounted(() => {
    updateIsMobile();
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    mediaQuery.removeEventListener('change', updateIsMobile);
  });

  onUnmounted (() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    mediaQuery.removeEventListener('change', updateIsMobile);
  });

</script>

<style scoped>
  h1, span {
    text-align: left;
    padding: 1em 0 0 10px;
  }

  hr {
    padding: 0 10px;
  }

  button {
    font-family: 'Dogica Bold';
    text-transform: uppercase;
  }

  button.sub-button {
    font-family: 'Dogica';
  }

  button:hover {
    background-color: #ffb100;
  }

  .dropdown-menu {
    border: 2px solid !important;
    border-radius: 0 !important;
    box-shadow: 1px 1px 0px 0px, 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px;
  }

  /* .dropdown-divider {
    border: 1px!important;
  } */

  /* .navbar-filter {
      padding: 20px 20px;
      text-align: left;
  } */

  .spacer {
    height: 5em;
  }

  .wrap {
    display: inline-block;
  }

  .center {
    margin: 0 auto;
  }

  .center-filter {
    display: flex;
    align-items: center;
    height: 105px;
  }

  .align {
    margin: 0 5em;
  }

  /* .link-style {
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
  } */
</style>