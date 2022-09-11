import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import claim from './claim';

export const reducers = combineReducers({ posts, auth, claim });