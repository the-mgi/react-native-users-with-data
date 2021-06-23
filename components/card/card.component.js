import React from 'react';
import {Text, View} from "native-base";
import {StyleSheet, TouchableOpacity, useWindowDimensions} from "react-native";
import {AntDesign, FontAwesome} from "@expo/vector-icons";

const CardComponent = ({title, id, borderColor = "royalblue", onPress, body, completed}) => {
	const {width} = useWindowDimensions();

	return (
		<TouchableOpacity activeOpacity={1} onPress={onPress}>
			<View key={id} style={{...styles.card, borderColor: borderColor}}>
				<View style={{width: width - 100, ...styles.innerContainer}}>
					<Text numberOfLines={1} ellipsizeMode="tail"
								style={{...styles.text}}>{title[0].toUpperCase() + title.substring(1)}</Text>
					{body && <Text numberOfLines={2} ellipsizeMode="tail"
												 style={styles.bodyText}>{body[0].toUpperCase() + body.substr(1)}</Text>}

				</View>
				{completed !== undefined &&
				<View>{completed ? <FontAwesome name="check" size={24} color="green"/> :
					<AntDesign name="closesquareo" size={24} color="red"/>}</View>}
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	card: {
		paddingVertical: 20,
		paddingLeft: 30,
		paddingRight: 20,
		borderRadius: 10,
		borderWidth: 1,
		backgroundColor: "#f5f5f5",
		marginVertical: 10,
		marginHorizontal: 10,
		borderColor: "royalblue",


		flexDirection: "row",
		justifyContent: "space-between"
	},
	text: {
		fontSize: 18,
		fontWeight: "bold",
		fontFamily: "Roboto"
	},
	bodyText: {
		fontSize: 16,
	},
	innerContainer: {
		paddingRight: 10
	},
});

export default CardComponent;
