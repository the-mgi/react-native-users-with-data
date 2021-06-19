import React from 'react';
import {Container, Content} from "native-base";
import {List} from 'react-native-paper';

const UserDetailsComponent = ({record}) => {
	const [expanded, setExpanded] = React.useState({
		personalInformation: false,
		company: false,
		address: false
	});

	const handlePress = (id) => {
		setExpanded({...expanded, [id]: !expanded[id]})
	};

	return (
		<>
			<Container>
				<Content>
					<List.Section title="Accordions">
						<List.Accordion
							title="Personal Information"
							left={(props) => <List.Icon {...props} icon="card-account-details-outline"/>}
							expanded={expanded["personalInformation"]}
							onPress={() => {
								handlePress("personalInformation")
							}}
						>
							{Object.keys(record).filter(key => key !== "company" && key !== "address").map(key => {
								return (
									<>
										<List.Item title="fuck you">

										</List.Item>
									</>
								);
							})}
						</List.Accordion>
					</List.Section>
				</Content>
			</Container>
		</>
	);
};

export default UserDetailsComponent;
