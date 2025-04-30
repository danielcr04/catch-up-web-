<script>
import {Episode} from "../model/episode.entity.js";

export default {
  name: "episode-item",
  emits: [],
  props: {
    episodes: { type: Episode, required: true }
  },
  methods: {}
}
</script>

<template>
  <pv-card class="m-2">
    <template #header>
      <img :alt="episode.name" :src="episode.image" class="image-fit"/>
    </template>
    <template #title>
      <p>{{ episode.name }}</p>
    </template>
    <template #subtitle>
      <p class="flex align-content-start flex-wrap">

        <span class="flex align-items-center justify-content-center">
          {{ episode.id }}
        </span>

      </p>
    </template>
    <template #content>
      <p class="flex align-content-start flex-wrap mt-4">
        {{ episode.description }}
        {{ episode.rating }}
        {{ episode.season }}
        {{ episode.number }}
        {{ episode.summary }}
      </p>
    </template>
    <template #footer>
      <div class="flex justify-content -webkit-box-sizing: border-box; justify-content: space-between;">
        <a :href="episode.url" target="_blank">{{ $t('read-more') }}</a>
        <span class="p-spacer"></span>
        <p> @Econocable Tv Maze, inc{{'footer.coyright'}} </p>
        <p>{{footer.developed}} Daniel Crispin Ramos, u20221g120</p>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.p-button-sm {
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
}
.p-spacer {
  flex: 1 1 auto;
}

.image-fit {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>