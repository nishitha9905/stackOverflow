
import * as API from '../api/index'

export const signup = (authData,navigate)=> async(dispatch) =>{
    try{
        const { data } = await API.signUp(authData)
        dispatch({  type:'AUTH',data})
        navigate('/')
    }
    catch (error){
        console.log(error)
    }
}
export const login = (authData,navigate)=> async(dispatch) =>{
    try{
        const {data} = await API.logIn(authData)
        dispatch({  type:'AUTH',data})
        navigate('/')
    }
    catch (error){
        console.log(error)
    }
}