import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserListComponent from "./components/users-list/user-list.component";
import {STATUSES} from "./utils/constants";
import {Spinner} from "native-base";
import {NavigationContainer} from "@react-navigation/native";
import BottomNavigationComponent from "./components/bottom-navigation/bottom-navigation.component";

export default function App() {
	const [status, setStatus] = useState(STATUSES.IS_LOADING);
	const Stack = createStackNavigator();

	useEffect(() => {
		setTimeout(() => {
			setStatus(STATUSES.LOGGED_IN)
		}, 3000);
	}, []);

	const StackHistoryUsersListData = () => {
		return (
			<Stack.Navigator>
				<Stack.Screen
					name="usersList"
					component={UserListComponent}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="bottomNavigationContainer"
					component={BottomNavigationComponent}
					options={{
						headerShown: true,
						headerTitle: "User Details"
					}}
				/>
			</Stack.Navigator>
		);
	};

	return (
		<>
			{status === STATUSES.IS_LOADING ?
				<Spinner color="blue"/> :
				<NavigationContainer>
					<StackHistoryUsersListData/>
				</NavigationContainer>
			}
		</>
	);
};
