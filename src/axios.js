import axios from "axios";

const instance = axios.create({
    // baseURL: 'https://us-central1-clone-1ac21.cloudfunctions.net/api'
    // baseURL: 'http://localhost:5001/clone-1ac21/us-central1/api'
    baseURL: 'https://amazonbackendapi.herokuapp.com/'
});

export default instance;