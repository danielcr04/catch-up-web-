import axios from "axios";

const tvmazeApi = import.meta.env.VITE_TVMAZE_API_URL;
const episodesEndpoint = import.meta.env.VITE_EPISODES_ENDPOINT_PATH;

const http = axios.create({
    baseURL: tvmazeApi
})

export class TvmazeApiService {

    getEpisodes() {
        return http.get(`${episodesEndpoint}`);
    }

}
