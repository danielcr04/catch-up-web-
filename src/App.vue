<script>
import EpisodeItem from './shows/components/episode-item.component.vue'
import EpisodeList from './shows/components/episode-list.component.vue'
import {EpisodeAssembler} from "./shows/services/episode.assembler.js";
import LanguageSwitcher from "./public/language-switcher.component.vue";
import FooterContent from "./public/footer-content.component.vue";
import {TvmazeApiService} from "./shows/services/tvmaze-api.service.js";



export default {
  name: 'App',
  components: {EpisodeList, FooterContent, LanguageSwitcher},
  data() {
    return {
      episodes:[],
      errors: [],
      tvmazeApi: new TvmazeApiService()
    }
  },
  created(){
    this.getEpisodes()
  },
  methods:{
    getEpisodes() {
      this.tvmazeApi.getEpisodes()
          .then(response => {
            console.log(response)
            this.episodes = EpisodeAssembler.toEntitiesFromResponse(response);
          })
          .catch(e => { this.errors.push(e); this.episodes=[];})
    }
  }
}
</script>

<template>
  <div>
    <div>
      <pv-menubar>
        <template #start>
          <pv-button icon="pi pi-bars" label="CatchUp"/>
        </template>
        <template #end>
          <language-switcher></language-switcher>
        </template>
      </pv-menubar>
    </div>
  </div>
  <div>
    <episode-list v-if="errors" :episodes="episodes"></episode-list>
  </div>
  <footer-content></footer-content>
</template>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
