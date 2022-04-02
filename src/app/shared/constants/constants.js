import axios from 'axios';
const jwtPrivateKey = "Hierdie is die key wat ons moet vervang met certificates";
const applicationName = "Application";

export default {
  CancelToken: axios.CancelToken.source(),
  jwtPrivateKey: jwtPrivateKey,
  applicationName: applicationName,
}; 
 
