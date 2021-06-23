import React from 'react';
import {Container, Content} from "native-base";
import {List} from 'react-native-paper';
import {Text, View} from "react-native";
import {ACCORDIONS, ICONS} from "../../../utils/constants";

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
					<List.Section title="User Information">
						<List.Accordion
							title="Personal Information"
							left={(props) => <List.Icon {...props} icon={ICONS["personalInformation"]}/>}
							expanded={expanded[ACCORDIONS.personalInformation]}
							onPress={() => {
								handlePress(ACCORDIONS.personalInformation)
							}}
						>
							{Object.keys(record).map((key, index) => {
								return (
									(key !== "company" && key !== "address") && <>
										<List.Item key={index} title={
											<>
												<Text style={{marginRight: 10}}>{key[0].toUpperCase() + key.substr(1)}</Text>
												<Text style={{marginLeft: 10}}>{record[key]}</Text>
											</>
										}
										/>
									</>
								);
							})}
						</List.Accordion>
						{Object.keys(record).map((key, index) => {
							return (
								(key === "company" || key === "address") && <>
									<List.Accordion
										key={index}
										title={key[0].toUpperCase() + key.substring(1)}
										left={(props) => <List.Icon {...props} icon={ICONS[key]}/>}
										expanded={expanded[ACCORDIONS[key]]}
										onPress={() => {
											handlePress(ACCORDIONS[key])
										}}
									>
										{Object.keys(record[key]).map((subKey, subIndex) => {
											return (
												subKey !== 'geo' && <List.Item key={subIndex} title={
													<>
														<View style={{margin: 10}}>
															<Text style={{
																fontWeight: "bold",
																color: "black"
															}}>{subKey[0].toUpperCase() + subKey.substr(1)}</Text>
														</View>
														<View style={{margin: 10}}>
															<Text style={{color: "black"}}>{record[key][subKey]}</Text>
														</View>
													</>
												}/>
											);
										})}
									</List.Accordion>
								</>
							);
						})}
					</List.Section>
				</Content>
			</Container>
		</>
	);
};

export default UserDetailsComponent;
