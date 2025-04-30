<script>
import {TvmazeApiService} from "../services/tvmaze-api.service.js";
import EpisodeItem from "./episode-item.component.vue";
import {Episode} from "../model/episode.entity.js"

export default {
  name: "episode-list",
  components: {EpisodeItem},
  props: {
    episodes: {
      type: Array,
      required: true
    },
  }
}
</script>

<template>
  <div v-for="episode in episodes">
    <episode-item :episode="episode"/>
  </div>
</template>

<style scoped>

</style>