import React, {Component} from 'react';


class SortBy extends Component {
	
	constructor(props){
		super(props);
		this.onChange=this.onChange.bind(this);
	}
	onChange (event) {
		this.props.onSort(event.target.value);
	}
	render (){

		return (
				<div>
					<span>Sort By: </span>
					<span >
						<select className="selectbox" onChange={this.onChange}>
						  <option value="" disabled selected>Select your option</option>
						  <option value="content_rating">Popularity Rating</option>
						  <option value="title_year">Title Year</option>
						</select>
					</span>
				</div>
			);
	}
}
export default SortBy;