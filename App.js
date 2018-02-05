import React from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
		};
	}

	componentDidMount() {
		return fetch('https://randomuser.me/api/')
			.then(response => response.json())
			.then(responseJson => {
				this.setState(
					{
						isLoading: false,
						data: response.results,
					},
					function() {
						// do something with new state
					}
				);
			})
			.catch(error => {
				console.error(error);
			});
	}

	render() {
		if (this.state.isLoading) {
			return (
				<View style={{ flex: 1, paddingTop: 20 }}>
					<ActivityIndicator />
				</View>
			);
		}

		return (
			<List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
				<FlatList
					data={this.state.data}
					renderItem={({ item }) => (
						<ListItem
							roundAvatar
							title={`${item.name.first} ${item.name.last}`}
							subtitle={item.email}
							avatar={{ uri: item.picture.thumbnail }}
							containerStyle={{ borderBottomWidth: 0 }}
						/>
					)}
				/>
			</List>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
