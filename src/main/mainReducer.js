import {playerReducer} from './cricketGame/PlayerReducer';
import {combineReducers} from 'redux';

export const mainReducer = combineReducers({
    playerReducer
});