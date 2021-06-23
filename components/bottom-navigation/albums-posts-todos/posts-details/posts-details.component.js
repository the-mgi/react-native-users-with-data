import React, {useEffect, useLayoutEffect, useState} from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from "react-native";

const POSTS_BASE_URL = "https://jsonplaceholder.typicode.com/users/"
const PostsDetailsComponent = ({navigation, route}) => {
	const {dataObject} = route.params;
	const {height} = useWindowDimensions();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: () => <Text style={{fontSize: 20}}>Posts</Text>,
		})
	}, []);

	return (
		<>
			<View style={{...styles.mainContainer, height: height}}>
				<View style={{marginHorizontal: 25}}>
					<Text style={{marginBottom: 20}}>
						<Text style={{fontSize: 25, color: "black"}}>Title: </Text>
						<Text style={styles.titleText}>{dataObject.title[0].toUpperCase() + dataObject.title.substring(1)}</Text>
					</Text>
					<Text>
						<Text style={{fontSize: 25, color: "black"}}>Body: </Text>
						<Text style={styles.bodyText}>{dataObject.body}</Text>
					</Text>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: "#fff",
		alignItems: "center"
	},
	titleText: {
		fontSize: 20,
		fontWeight: "bold",
	},
	bodyText: {
		fontSize: 20,
	}
});

export default PostsDetailsComponent;
