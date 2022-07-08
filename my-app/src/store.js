import { createStore } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import rootreducer from './reducers/index'


const initialstate = {}

const store = createStore( rootreducer , initialstate , composeWithDevTools() )


export default store