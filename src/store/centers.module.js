import { centerService } from '../services';
// import { notify } from "@kyvg/vue3-notification";
export const centers = {
    namespaced: true,
    state: () => ({
        centers: [],
        message:'',
    }),
    actions:{
        async initCenters({commit}){
            const centers =await centerService.getAllCenters()
            commit("setCenters",centers)
        }
    },
    mutations: {
        setCenters(state,centers){
            state.centers = centers
        },
        test(state,message){
            state.message = message
            alert(message)
        }
    }
}
