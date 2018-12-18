import {playerReducer} from './cricketGame/PlayerReducer';
import {teamScore} from './scoreBoard/TeamScoreReducer';
import {combineReducers} from 'redux';

export const mainReducer = combineReducers({
    playerReducer,
    teamScore
});