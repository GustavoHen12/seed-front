import { http } from './config'

export default {
    getProducts: (id) => {
        return http.get(`kit-products/?kit=${id}`)
    }
}