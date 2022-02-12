import Axios from "axios";

const axios = Axios.create({
    //process.evn로 앞의 localhost부분을 더이상 적어주지 않아도된다.
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default axios;