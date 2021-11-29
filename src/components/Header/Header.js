import React from "react";
import "./Header.css";
class Header extends React.Component {
	render() {
		return (
			<header className="app-header">
				<div className="inner-content">
					<div className="title-banner">
						<h1 className="title-text">let's get this bread! </h1>
						<h3 className="subtitle-text">Hungry for carbs? Grab some hot + fresh suggestions here!</h3>
					</div>
				</div>
			</header>
		)
	}
}

export default Header;