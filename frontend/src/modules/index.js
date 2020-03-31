import { combineReducers } from 'redux';
import gameList from './gameList.js';

// 리듀서 함수를 하나로 묶어서 store를 생성해주어야 함
const rootReducer = combineReducers({
    gameList,
})
// index.js로 설정해주면 디렉토리 이름만 사용해여 import 할 수 있다. ex) import rootReducer from './modules.js';
export default rootReducer;