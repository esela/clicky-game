import axios from "axios";
const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "2773155dc8d74104b585bac0e616ff5a";
let INPUT = 'rick';

export default {
    search: (props) => {
        return axios.get(BASEURL + INPUT + '&apikey=' + APIKEY + '&limit=10&rating=R&lang=en');
    }
};