import axios from "axios";
import Vue from 'vue';
import { EventBus } from '../../providers/EventBus';
Vue.prototype.$eventBus = EventBus;
var ignoreHttpErrorUrl = ['test'];
var ignoreLoaderUrl = ['test'];
var apiRequestCount = {};
var numberOfAjaxCAllPending = 0;
var interceptorInitialized = false;
var showLoader = false;

const httpInterceptor = {
    initialize() {
        if (interceptorInitialized) {
            return;
        }
        interceptorInitialized = true
        axios.interceptors.request.use(
            configAPI => {
                numberOfAjaxCAllPending++;
                let sessionHeaders = true;
                if (configAPI.params) {
                    sessionHeaders = configAPI.params.sessionHeaders;
                    if (configAPI.params.showLoader) {
                        showLoader = configAPI.params.showLoader
                    }else{
                        showLoader = false;
                    }
                }
                const configUrl = configAPI.url;
                const urls = configUrl.split("/");
                var intersections = urls.filter(e => ignoreLoaderUrl.indexOf(e) !== -1);

                if (intersections.length > 0 && showLoader == false) {
                    EventBus.$emit('httpRequestActive', false);
                } else {
                    EventBus.$emit('httpRequestActive', true);
                }
                if (sessionHeaders != false) {
                    // Write Logic for Passing Token
                }
                return configAPI;
            },

            error => {
                numberOfAjaxCAllPending--;
                EventBus.$emit('onError', error);
                EventBus.$emit('httpRequestActive', false);
                return Promise.reject(error);
            }
        );

        axios.interceptors.response.use(
            response => {
                if(response.headers['x-token']){
                    localStorage.setItem('x-token', response.headers['x-token']);
                }
                numberOfAjaxCAllPending--;
                if (numberOfAjaxCAllPending == 0) {
                    EventBus.$emit('httpRequestActive', false);
                }
                apiRequestCount[response.config.url] = 0;
                return response.data;
            },
            function (error) {
                if (error && error.response && error.response.status === 401) {
                    // Log user out and redirect to login screen if authorization expired
                    localStorage.clear();
                    location.href = "/auth/login";
                    return;
                }
                if (error && error.response && error.response.status === 403) {
                    // Log user out and redirect to login screen if authorization expired
                    localStorage.clear();
                    location.href = "/auth/login";
                    return;
                }

                numberOfAjaxCAllPending--;
                const configUrl = error && error.config ? error.config.url : "";
                let apiCount = apiRequestCount[configUrl] || 0;
                const params = error.config ? error.config.params : {};
                if (error.config && error.response && error.response.status === 429 && apiCount < 3) {
                    apiCount += 1;
                    apiRequestCount[error.response.config.url] = apiCount;
                    // Common.wait(5000);
                    return axios.request(error.config);
                }
                EventBus.$emit('httpRequestActive', false);
                const urls = configUrl.split("/");
                const urlWithParams = urls[urls.length - 1];
                const url = urlWithParams.split("?")[0];
                let showDefaultError = true;
                if (params && (params.showDefaultError == false || params.showDefaultError == 'false')) {
                    showDefaultError = false;
                }
                if (url && ignoreHttpErrorUrl.includes(urls) && showDefaultError == true) {
                    EventBus.$emit('onError', error);
                }
                return Promise.reject(error);
            }
        );

    }
}

export { httpInterceptor };
