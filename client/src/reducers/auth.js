const authReducers = (state={ data:null },action) => {
    console.log(action.type,action)
   switch (action.type){
    case 'AUTH':
        console.log("------------------",JSON.stringify({...action?.data}))
        localStorage.setItem("PROFILE",JSON.stringify({...action?.data}))
        return {...state,data:action?.authData}
    case 'LOGOUT':
        localStorage.clear();
        return {...state , data:null}
    default:
        console.log("------------------",state)
        return state;
        
   }
}
export default authReducers