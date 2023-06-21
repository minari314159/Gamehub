import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '6b3841bbb3e443489de29c336ec1884f'
    }
})