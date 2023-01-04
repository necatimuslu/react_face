export function postReducer(state,action){
    switch(action.type){
       case 'FETCH_POSTS':
          return {...state,loading:true,error:''}
       case  'GET_ALL_POSTS' :
          return {
             ...state,
             loading:false,
             posts:action.payload,
             error:''
          }
       case 'ERROR_POSTS':
          return {...state,loading:false,error:action.payload}
       default :
          return state;
    }
 }