import React, {useEffect, useLayoutEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, Text, useWindowDimensions} from "react-native";
import {Spinner, View} from "native-base";

const ALBUMS_IMAGES_BASE_URL = "https://jsonplaceholder.typicode.com/albums/"
const AlbumsDetailsComponent = ({navigation, route}) => {
	const {id} = route.params;
	const {height, width} = useWindowDimensions();

	const [imagesList, setImagesList] = useState([]);

	useEffect(() => {
		(async () => {
			fetch(`${ALBUMS_IMAGES_BASE_URL}${id}/photos`)
				.then(response => {
					return response.json();
				})
				.then(data => {
					setImagesList(data);
				})
				.catch(() => {
				});
		})();
	}, [id]);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: () => <Text style={{fontSize: 20}}>Albums</Text>,
		})
	}, []);

	const ImageCard = ({uri, id, title}) => {
		return (
			<>
				<View key={id} style={{...styles.cardContainer, width: width - 20}}>
					<View style={styles.imageContainer}>
						<Image style={styles.image} source={{
							uri: uri.toString(),
						}}/>
					</View>
					<View style={{...styles.textContainer, width: width - 20}}>
						<Text numberOfLines={2} ellipsizeMode="tail"
									style={styles.title}>{title[0].toUpperCase() + title.substring(1, 30)}{title.length > 15 ? "..." : ""}</Text>
						<Text numberOfLines={2} ellipsizeMode="tail" style={styles.uri}>{uri}</Text>
					</View>
				</View>
			</>
		);
	};

	return (
		<>
			<View style={{...styles.mainContainer, height: height}}>
				{imagesList.length > 0 ? <FlatList
					data={imagesList}
					keyExtractor={item => item.id}
					renderItem={({item}) => (<ImageCard title={item.title} id={item.id} uri={item.thumbnailUrl}/>)}
				/> : <Spinner color="blue"/>}
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: "#fff"
	},
	cardContainer: {
		borderWidth: 1,
		borderRadius: 10,
		borderColor: "#efeded",
		marginVertical: 10,
		marginHorizontal: 10,

		flexDirection: "row",
		alignItems: "center"
	},
	imageContainer: {
		marginRight: 10
	},
	image: {
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,

		height: 100,
		width: 100,
	},
	textContainer: {
		flexDirection: "column",
		paddingRight: 10
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		color: "black"
	},
	uri: {
		fontSize: 16,
		color: "black"
	}
});

export default AlbumsDetailsComponent;
