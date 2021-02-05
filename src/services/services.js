import axios from 'axios';
// import authHeader from '@/auth_services/auth-header';

const API_URL = 'http://127.0.0.1:8000/kits/';

class Services {
    getProducts(id){
        return axios.get(API_URL + `kit-products/?kit=${id}`)
    }
    getKits(){
        return axios.get(API_URL + 'kit/')
    }
    getHomeInfo(){
        return {
            ourMission: {
                title: "Nossa missão: Transformar",
                content:"Transformar o mundo, uma cesta por vez. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus lacus quis vestibulum blandit. Nullam ac cursus lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus."
            },
            kits: {
                title: "Algumas cestas",
                content:""
            },
            projects: {
                title: "Projetos",
                content:"Descubra projetos e causas sociais incríveis, e doando em um de suas cestas, você estará ajudando muitas pessoas."
            }
        }
    }
}

export default new Services();
