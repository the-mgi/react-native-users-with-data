import React, {useEffect, useState} from 'react';
import {Spinner, View} from "native-base";
import {FlatList, StyleSheet, useWindowDimensions} from "react-native";
import CardComponent from "../../card/card.component";

const AlbumsPostsTodosComponent = ({record, baseUrl, subPart, type, navigation}) => {
	const [list, setList] = useState([]);
	const {height} = useWindowDimensions();

	useEffect(() => {
		(async () => {
			fetch(`${baseUrl}${record.id}/${subPart}`)
				.then(response => {
					return response.json();
				})
				.then(data => {
					setList(data);
				})
				.catch(error => {
					console.log('Error', error);
				});
		})();
	}, [record]);

	const navigate = (id, dataObject) => {
		if (navigation) {
			navigation.navigate(type, {id: id, dataObject});
		}
	};

	return (
		<>
			<View style={{...styles.mainContainer, height: height}}>
				{list.length > 0 ?
					<FlatList
						keyExtractor={item => item.id} data={list}
						renderItem={({item}) => (
							<CardComponent
								onPress={() => navigate(item.id, item)}
								borderColor={item?.completed ? (item?.completed === true ? "green" : "red") : "royalblue"}
								title={item.title}
								id={item.id}
								body={item?.body}
								completed={item?.completed}
							/>
						)}/> :
					<Spinner color="blue"/>}
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: "#fff"
	}
});

export default AlbumsPostsTodosComponent;
