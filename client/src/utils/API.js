import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="
const APIKEY = "&printType=Books&key=AIzaSyAyDlaO7C_SzhK0X2jzjMCT-10ZIQ_sA00"

export default {
    search: function(query){
        return axios.get(BASEURL + query + APIKEY);
    }
}