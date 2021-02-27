import axios from 'axios';
import authHeader from '@/auth_services/auth-header';

const API_URL = 'http://127.0.0.1:8000/kits/';
const API_URL_PRODUCTS = 'http://127.0.0.1:8000/products/';

class Services {
    getProducts(id){
        return axios.get(API_URL + `kit-products/?kit=${id}`)
    }
    getBag(){
        const header = authHeader();
        return axios.get(API_URL_PRODUCTS + `bag/`, { headers: header })
    }
    addBag(body){
        const header = authHeader();
        return axios({
            method: 'post',
            url: API_URL_PRODUCTS + `bag/`,
            headers: header,
            data: {
                kit: body.kit,
                product: body.product,
                quantity: body.quantity
            }
        });
    }
    deleteBag(body){
        const header = authHeader();
        return axios({
            method: 'delete',
            url: API_URL_PRODUCTS + `bag/`,
            headers: header,
            data: {
                kit: body.kit,
                product: body.product,
                quantity: body.quantity
            }
        });
    }
    getKits(){
        return axios.get(API_URL + 'kit/')
    }
    getKitInfo(id){
        return axios.get(API_URL + `kit/${id}`)
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
    getTutorialInfo(){
        return {
            characters: [
                {
                    title: "Projeto",
                    description: "Cada projeto representa uma igreja, projeto social ou ONG",
                    img: "project1.svg",
                },
                {
                    title: "Cesta",
                    description: "Cada projeto possui as cestas, que são kits com os produtos a serem doados",
                    img: "kit1.svg",
                },
                {
                    title: "Usuário",
                    description: "Os usuários são aqueles que podem acessar as cestas e realizar as doações",
                    img: "user1.svg",
                },
            ],
            advantages: {
                project: [
                    {
                        title: "Visibiliade",
                        description: "De mais visibilade para sua campanha de doação sendo online",
                    },
                    {
                        title: "Mais por menos",
                        description: "Possibilidade de negociar diretamente com o fornecedor",
                    },
                    {
                        title: "Controle",
                        description: "Tenha fácil acesso a quantidade de itens doados",
                    }
                ],
                users: [
                    {
                        title: "Informações",
                        description: "Tenha total acesso as informações sobre os fornecedores",
                    },
                    {
                        title: "Saiba o que doar",
                        description: "Doe aquilo que a campanha realmente precisa",
                    },
                    {
                        title: "Flexibilidade",
                        description: "Doe em qualquer lugar, a qualquer hora e qualquer quatidade",
                    }
                ]
            }
        }
    }
}

export default new Services();
