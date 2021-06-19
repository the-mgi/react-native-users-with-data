import React, {useEffect, useState} from 'react';
import {Body, Card, CardItem, Container, Content, Header, Icon, Left, Right, Spinner, Text, Title} from "native-base";
import * as Font from "expo-font";
import {Ionicons} from "@expo/vector-icons";
import {TouchableOpacity, View} from 'react-native';

const UserListComponent = ({navigation, route}) => {
	const [usersData, setUsersData] = useState([]);

	useEffect(() => {
		(async () => {
			await Font.loadAsync({
				Roboto: require('native-base/Fonts/Roboto.ttf'),
				Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
				...Ionicons.font,
			});
		})()

		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => {
				return response.json();
			})
			.then(jsonObject => {
				setUsersData(jsonObject);
			})
			.catch(error => {
				console.log(error);
			});

	}, []);

	const reactNavigate = (userData) => {
		navigation.navigate("bottomNavigationContainer", {record: userData});
	};

	return (
		<Container>
			<Header>
				<Left/>
				<Body>
					<Title>Users Data</Title>
				</Body>
				<Right />
			</Header>
			<Content style={{marginHorizontal: 10}}>
				{usersData.length > 0 ? (
					usersData.map((user, index) => {
						return (
							<TouchableOpacity key={index} activeOpacity={1} onPress={() => {reactNavigate(user)}}>
								<Card>
									<CardItem>
										<Icon name="ios-person-circle-outline"/>
										<Text>{user.name}</Text>
									</CardItem>
								</Card>
							</TouchableOpacity>
						);
					})
				) : <Spinner color="blue"/>}
			</Content>
		</Container>
	);
};

export default UserListComponent;
