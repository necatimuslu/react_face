export default function profileReducer(state,action){
    switch(action.type){
        case 'PROFILE_REQUEST':
            return {...state,loading:true,error:''}
        case 'PROFILE_SUCCESS':
            return {...state,loading:false,error:'',profile:action.payload}
        case 'PROFILE_ERROR':
            return {...state,loading:false,error:action.payload}
        default :
            return state
    }
}