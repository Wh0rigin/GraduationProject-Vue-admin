export default{
    namespaced:true,
    state:{
        name:"employee",
    },
    mutations:{
        // common
        getName(state){
            console.log(state.name);
        }
    },
    actions:{
        // aync
    }
}