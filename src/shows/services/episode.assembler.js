import {Episode} from "../model/episode.entity.js";

export class EpisodeAssembler {
    static toEntitiesFromResponse(response){
        return response.map((episode) => {
            return this.toEntityFromResource(episode);
        });
    }

    static toEntityFromResource(resource){
        return new Episode({
            id: resource.id,
            name: resource.name,
            season: resource.season,
            number: resource.num,
            summary: resource.summary,
            url: resource.url,
            rating: resource.rating.average,
            image: resource.image.medium
        });
    }

}