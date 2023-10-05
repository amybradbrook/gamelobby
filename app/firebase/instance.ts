import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-gamelobby-a14cf.cloudfunctions.net/color'
})

export default instance