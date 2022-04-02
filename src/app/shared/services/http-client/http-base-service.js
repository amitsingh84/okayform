import axios from "axios";
// import { apiBaseUrl, CancelToken } from "@/environment/environment";

const HttpBaseService = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH",
  OPTIONS: "OPTIONS",
  HEAD: "HEAD",
  processRequest(
    url,
    method = null,
    params = null,
    headers = null,
    data = null,
    responseType = null
  ) {
    if (!url.includes("localhost")) {
     url = "https://localhost:7031" + url;
      // url = apiBaseUrl + url;
      console.log("url",url)
      
    }
    const requestData = {
      url: url,
      // cancelToken: CancelToken.token,
      
     
    };
    if (method) {
      requestData.method = method;
    }
    
    if (headers) {
      requestData.headers = this.getBaseHeaders();
      console.log(headers);
      // if (localStorage.getItem("jwtToken")) {
      //   requestData.headers["jwtToken"] = localStorage.getItem("jwtToken");
      // }
    }
    if (params) {
      requestData.params = params;
      console.log(params);
    }
    if (responseType) {
      requestData.responseType = responseType;
    }
    requestData.data = data;

    return axios(requestData);
  },
  // getBaseHeaders(userId = null) {
  //   return {
  //     "Authorization": "Bearer " + localStorage.getItem("jwtToken"),
  //     //"x-user": localStorage.getItem("userId")
  //   };
  // },
  getBaseHeaders() {
    console.log("hi");
      // return {
      //   "Authorization": "Bearer " + localStorage.getItem("jwtToken"),
      //   //"x-user": localStorage.getItem("userId")
      // };
    },
  getProfileImageHeaders() {
    return {
      "Content-Type": "multipart/form-data",
      "x-token": localStorage.getItem("x-token"),
      "x-user":  localStorage.getItem("userId")
    };
  },
};

export { HttpBaseService };
