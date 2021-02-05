import { http } from './config'

export default {
    getKits: () => {
        return http.get('kit/')
    }
}
// export default {
//     get: () => {
//         return [
//             {
//                 img: 'https://images.unsplash.com/photo-1608835149345-b4d77bc490ae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
//                 name: 'Cestas básicas',
//                 description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus a dolor non dictum.',
//             },
//             {
//                 img: 'https://images.unsplash.com/photo-1606559512256-8c528e646804?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
//                 name: 'Cestas limpeza',
//                 description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus a dolor non dictum.',
//             },
//             {
//                 img: 'https://images.unsplash.com/photo-1585351738039-cffb0be1d43d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80',
//                 name: 'Cestas roupas',
//                 description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus a dolor non dictum.',
//             },
//             {
//                 img: 'https://images.unsplash.com/photo-1609619742069-f5e18afeef17?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
//                 name: 'Cestas básicas',
//                 description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus a dolor non dictum.',
//             },
//         ]
//     }
// }