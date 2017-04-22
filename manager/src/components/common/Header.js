//Import libraries for making a component - This is a child file to the root file

import React from 'react';
import { Text, View } from 'react-native'; //Text ist wrapped with View (like a section within a section)

//Make a component

const Header = (props) => {  //Wir benutzen props... props nimmt sich Infos aus der Root Datei, bringt sier hier rein (doch sie müssen so XY benannt sein wie unten angegeben props.XY und dann wird es wieder zurückggegeben)
	const { textStyle, viewStyle } = styles; // 2 Hier wird eine lokale Funktion mit den unten defineierten "styles" verlinkt und unter 3 text bzw. view aufgerufen unten dann aufgerufen
	
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View> 
	); 
};


const styles = { // 1 Hier wird styles definiert
	viewStyle: { // Container
		backgroundColor: '#F8F8F8',
		justifyContent: 'center', //Vertikal 'flex-end' und default
		alignItems: 'center', //Horizontal 'flex-end' für am Ende, default also ohne Eingabe für am Anfang
		height: 60, 
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},

	textStyle: { // Text
		fontSize: 20
	}
};

//Make the component available to other parts of the app
export { Header };