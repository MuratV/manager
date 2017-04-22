import React from 'react';
import { View, ActivityIndicator} from 'react-native';

const Spinner = ({ size }) => {
	return (
		<View style = {styles.spinnerStyle}>
			<ActivityIndicator size = {size || 'large'} />
		</View> // || stands for "or"... so in case we do not pass a property do this component that defines the size it is large by default
	);
};

const styles = {
	spinnerStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
}

export { Spinner };