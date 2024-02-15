import { combineReducers } from '@reduxjs/toolkit';

import contactsReducer from './contacts/contacts-slice';
import filterReducer from './filter/filter-slice';
import authReducer from './auth/auth-slice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: authReducer,
});

export default rootReducer;
