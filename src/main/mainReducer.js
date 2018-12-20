import {teamScore} from './scoreBoard/TeamScoreReducer';
import {combineReducers} from 'redux';

export const mainReducer = combineReducers({
    teamScore
});