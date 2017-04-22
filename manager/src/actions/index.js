import firebase from 'firebase';
import { 
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER
} from './types';

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED ,
		payload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const loginUser = ({ email, password })  => {
	return(dispatch) => {
		dispatch({ type: LOGIN_USER});
		
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(user => loginUserSuccess(dispatch, user))
			.catch((error) => {
				console.log(error);
				// error is thrown back from authreducer in case something is wrong
				// this is the only way to display that error in the console
				firebase.auth().createUserWithEmailAndPassword(email,password)
					.then(user => loginUserSuccess ( dispatch, user ))
					.catch (() => loginUserFail(dispatch));
			});
	};
};

// With the helper methods loginUserFail and loginUserSuccess we are making loginUser
// easier understandable and reducing complexity of the code within

const loginUserFail = (dispatch, user ) => {
	dispatch ({ 
		type: LOGIN_USER_FAIL 
	});
};

const loginUserSuccess = (dispatch, user) => {
	dispatch ({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});
}