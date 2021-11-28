import React from "react";
import "./SelectionMenu.css";
import CategoryButton from "../../components/CategoryButton/CategoryButton";

const buttonKeys = ['key1', 'key2', 'key3', 'key4'];
const buttons = 	buttonKeys.map((key) => {
	return (
		<CategoryButton buttonLabel={key}/>
	);
});
class SelectionMenu extends React.Component {
	render() {
		return (
			<nav className="selection-menu">
				<div className="inner-content">
					<p className="instruction-copy">Select the carbs you're craving below!</p>

					<div className="buttons-container">
						{buttons}
					</div>
				</div>
			</nav>
		)
	}
}

export default SelectionMenu;