const { VUE_APP_API_BASE_URL, NODE_ENV } = process.env;
import axios from 'axios';
const environment = NODE_ENV.toLowerCase();
const apiBaseUrl = VUE_APP_API_BASE_URL;
const CancelToken = axios.CancelToken.source();

export {
    environment, apiBaseUrl, CancelToken
};
