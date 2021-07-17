import Song, { SongWrapper } from "../Models/Song";
import axios, { AxiosResponse, CancelTokenSource } from "axios";
import configData from "../Config/Config.json"

const generateGraphQL = (sort: string, direction: "asc" | "desc"): string => {
    return `{songs ( sort : "${sort}" direction: "${direction}" ) {song artist songReleaseDate playCount metricA metricB metricC metricD metricE metricF metricG metricH metricI metricJ metricK metricL metricM metricN metricO metricP}}`
}

export interface ISongService {
    getSongs: (sort: string, direction: "asc" | "desc") => Promise<Song[]>
}

let source: CancelTokenSource;

const SongService: ISongService = {
    getSongs: async (sort: string, direction: "asc" | "desc") => {
        if (source !== undefined) {
            source.cancel("Operation canceled due to new request.")// cancel previous request if it receives a new one
        }
        source = axios.CancelToken.source();
        let response : AxiosResponse<SongWrapper>;
        try {

            response = await axios(configData.GRAPHQL_API_URL,
                {
                    cancelToken: source.token,
                    params: {
                        q: generateGraphQL(sort, direction)
                    }
                });
            if (response.data.errors) {
                throw response.data.errors
            }
            return response.data.songs.data.songs;
        } catch (error) {
            if (axios.isCancel(error)){
                console.log()
                return [];
            }
            throw error;
        }
    }
}

export default SongService;