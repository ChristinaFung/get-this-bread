import React from "react";
import "./CategoryButton.css";

class CategoryButton extends React.Component {
	static defaultProps = {
		buttonLabel: 'Category Button'
	}

	render() {
		const buttonLabel = this.props.buttonLabel;

		return (
			<button className="category-button">{buttonLabel}</button>
		)
	}
}

export default CategoryButton;