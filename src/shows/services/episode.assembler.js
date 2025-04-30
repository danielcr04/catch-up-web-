import {Episode} from "../model/episode.entity.js";

export class EpisodeAssembler {
    static episode=null;

    static withEpisode(episode){
        this.episode = episode;
        return this;
    }

    static toEntitiesFromResponse(response){
        const episodesResponse = response.data;
        return episodesResponse.map((episode) => {
            return this.toEntityFromResource(episode);
        });
    }

    static toEntityFromResource(resource){
        return new Episode({
            id: resource.id,
            name: resource.name,
            season: resource.season,
            number: resource.number,
            summary: resource.summary,
            url: resource.url,
            rating: resource.rating.average,
            image: resource.image.medium
        });
    }

}