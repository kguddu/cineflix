import axios from 'axios';

const omdb=axios.create({
    baseURL:"http://www.omdbapi.com/",
    timeout:15000,
    params:{
        apikey:"d906b2fd"
    }

});
export {omdb};