import React from "react";
import "./SelectionMenu.css";
import CategoryButton from "../../components/CategoryButton/CategoryButton";
import  { getData } from "../../api/functions"

// selected category keys to query from yelp API: https://www.yelp.ca/developers/documentation/v3/all_category_list
const buttonKeys = ['burgers', 'noodles', 'pizza', 'sandwiches'];
class SelectionMenu extends React.Component {
	// todo: when you select category, make API call to search for Yelp recos in toronto based on that category key
	selectCategory = (category) => {
		getData(category)
			.then((response) => {
				// store the results to the state
				this.props.setResults(response.search.business);
			})
			.catch((error) => {
				console.log("error: ", error)
			});
	}

	render() {
		return (
			<nav className="selection-menu">
				<div className="inner-content">
					<p className="instruction-copy">Select the carbs you're craving below!</p>

					<div className="buttons-container">
						{
							buttonKeys.map((key) => (
								<CategoryButton buttonLabel={key} key={key} onClick={() => this.selectCategory(key)}/>
							))
						}
					</div>
				</div>
			</nav>
		)
	}
}

export default SelectionMenu;