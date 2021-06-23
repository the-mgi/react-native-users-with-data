import * as React from 'react';
import {BottomNavigation} from 'react-native-paper';
import UserDetailsComponent from "./user-details/user.details.component";
import AlbumsComponent from "./albums/albums.component";
import PostsComponent from "./posts/posts.component";
import TodosComponent from "./todos/todos.component";

const BottomNavigationComponent = ({navigation, route}) => {
	const [index, setIndex] = React.useState(0);

	const routes = [
		{key: 'userDetails', title: 'User Details', icon: 'card-account-details-outline'},
		{key: 'albums', title: 'Albums', icon: 'album'},
		{key: 'posts', title: 'Posts', icon: 'post-outline'},
		{key: 'todos', title: 'Todos', icon: 'pencil'},
	];

	const renderScene = BottomNavigation.SceneMap({
		userDetails: () => UserDetailsComponent({record: route.params.record}),
		albums: () => AlbumsComponent({record: route.params.record}),
		posts: PostsComponent,
		todos: TodosComponent,
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
