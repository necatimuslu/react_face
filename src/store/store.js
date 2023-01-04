import { combineReducers,applyMiddleware,createStore  } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { userReducer } from './reducers/userReducer';

const reducers = combineReducers({
    user:userReducer
})

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
