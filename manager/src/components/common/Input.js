import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {

	const {inputStyle, labelStyle, containerStyle } = styles;

	return (
		<View style = {containerStyle}>
			<Text style = {labelStyle} > {label} </Text>
			<TextInput
				secureTextEntry = {secureTextEntry} //boolean - true or false -
				placeholder = {placeholder}
				autoCorrect = {false}
				style = {inputStyle}
				value = {value}
				onChangeText = {onChangeText}
			/>
		</View>
	);

};

const styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2
	},

	/* since inputStyle and labelStyle are children of the same view tag the flex
	property in each styling defines how much % of space they receive - 2/3 of the
	area will be allocated to the inputStyle */

	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},

	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
};

export { Input };