

export default function imageReducer(state,action){
    switch(action.type){
        case  'PHOTOS_REQUEST':
            return {...state,loading:true,error:''};
        case 'PHOTOS_SUCCESS':
            return {...state,loading:false,photos:action.payload};
        case 'PHOTOS_ERROR':
            return {...state,loading:false,error:action.payload};
        default :
            return state;
    }
}