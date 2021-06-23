import React, {useEffect, useState} from 'react';
import {Spinner, Text, View} from "native-base";
import {FlatList, StyleSheet, useWindowDimensions} from "react-native";

const ALBUMS_BASE_URL = 'https://jsonplaceholder.typicode.com/users/';
const AlbumsComponent = ({record}) => {
	const [albumsList, setAlbumsList] = useState([]);
	const {height} = useWindowDimensions();

	useEffect(() => {
		(async () => {
			console.log('base url', `${ALBUMS_BASE_URL}${record.id}/albums`);
			fetch(`${ALBUMS_BASE_URL}${record.id}/albums`)
				.then(response => {
					return response.json();
				})
				.then(data => {
					setAlbumsList(data);
				})
				.catch(error => {
					console.log('Error', error);
				});
		})();
	}, []);

	const Card = ({title, id}) => {
		return (
			<View style={styles.card} key={id}>
				<Text style={styles.text}>{title[0].toUpperCase() + title.substring(1)}</Text>
			</View>
		);
	};

	return (
		<>
			<View style={{...styles.mainContainer, height: height}}>
				{albumsList.length > 0 ?
					<FlatList keyExtractor={item => item.id} data={albumsList}
										renderItem={({item}) => <Card title={item.title} id={item.id}/>}/> :
					<Spinner color="blue"/>}
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: "#fff"
	},
	card: {
		paddingLeft: 30,
		paddingVertical: 30,
		borderRadius: 10,
		borderWidth: 1,
		backgroundColor: "#f5f5f5",
		marginVertical: 10,
		marginHorizontal: 15,
		borderColor: "royalblue"
	},
	text: {
		fontSize: 16,
		fontFamily: "Roboto"
	}
});

export default AlbumsComponent;
