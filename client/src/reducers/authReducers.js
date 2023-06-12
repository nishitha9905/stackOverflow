

const authReducers = (state={data:null},Actions) => {
    console.log(Actions.type,Actions)
   switch (Actions.type){
    case 'AUTH':
        console.log("------------------",JSON.stringify({...Actions?.data}))
        localStorage.setItem("PROFILE",JSON.stringify({...Actions?.data}))
        return {...state,data:Actions?.authData}
    default:
        console.log("------------------",state)
        return state;
        
   }
}
export default authReducers