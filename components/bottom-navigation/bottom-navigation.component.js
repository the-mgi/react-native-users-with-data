import * as React from 'react';
import {BottomNavigation} from 'react-native-paper';
import UserDetailsComponent from "./user-details/user.details.component";
import AlbumsPostsTodosComponent from "./albums-posts-todos/albums-posts-todos.component";
import {TYPES, URLS_DATA} from "../../utils/constants";

const BottomNavigationComponent = ({navigation, route}) => {
	const [index, setIndex] = React.useState(0);
	const {record} = route.params;

	const routes = [
		{key: 'userDetails', title: 'User Details', icon: 'card-account-details-outline'},
		{key: 'albums', title: 'Albums', icon: 'album'},
		{key: 'posts', title: 'Posts', icon: 'post-outline'},
		{key: 'todos', title: 'Todos', icon: 'pencil'},
	];

	const renderScene = BottomNavigation.SceneMap({
		userDetails: () => UserDetailsComponent({record}),
		albums: () => AlbumsPostsTodosComponent({
			record,
			baseUrl: URLS_DATA.BASE_URL,
			subPart: URLS_DATA[TYPES.ALBUMS].subPart,
			type: TYPES.ALBUMS,
			navigation,
		}),
		posts: () => AlbumsPostsTodosComponent({
			record,
			baseUrl: URLS_DATA.BASE_URL,
			subPart: URLS_DATA[TYPES.POSTS].subPart,
			type: TYPES.POSTS,
			navigation,
		}),
		todos: () => AlbumsPostsTodosComponent({
			record,
			baseUrl: URLS_DATA.BASE_URL,
			subPart: URLS_DATA[TYPES.TODOS].subPart,
			type: TYPES.TODOS,
		}),
	});

	return (
		<BottomNavigation
			navigationState={{index, routes}}
			onIndexChange={setIndex}
			renderScene={renderScene}
			barStyle={{backgroundColor: "royalblue"}}
		/>
	);
};

export default BottomNavigationComponent;
