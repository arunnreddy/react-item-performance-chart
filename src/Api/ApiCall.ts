import axios, { AxiosResponse } from 'axios';
import { ApiUrl } from "./Url";
interface PostData {
}

const instance = axios.create({
	baseURL: ApiUrl,
});

class TutorialDataService {
    getAll() {
      return axios.get(ApiUrl);
    }
  }
  
  export default new TutorialDataService();