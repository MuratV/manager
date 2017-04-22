// this reducer is called Auth, 
// because it handles everything connected to Authentication

import { 
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = { 
	email: '', 
	password: '',
	user: null,
	error: '',
	loading: false
};

export default (state = INITIAL_STATE, action) => {
	console.log(action);

	switch (action.type) {
		case EMAIL_CHANGED: 
			return { ...state, email: action.payload };
		// New Object is returned and ...state makes sure that Redux understands
		// That we produced a brand new object, otherwise Redux would think it is
		// the same object and it won't do anything
		
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };

		case LOGIN_USER:
			return { ...state, loading: true, error: '' };

		case LOGIN_USER_SUCCESS:
			return { ...state, user: action.payload, error: '', loading: false, email: '', password: ''};

			/* we can also program it like this:
			return { ...state, ...INITIAL_STATE, user: action.payload };

			we are basically taking in the initial state but passing over the payload to the LoginForm
			*/

		case LOGIN_USER_FAIL:
			return { ...state, error: 'Authentication Failed.', password: '', loading: false};

			// In case of error, error is given back and password string is emptied

		default:
			return state;
	}
};