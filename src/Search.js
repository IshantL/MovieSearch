import React, { Component } from 'react';

class Search extends Component {
constructor(props){
	super(props);
	this.onChangeText=this.onChangeText.bind(this);
}

onChangeText(event){
	this.props.onInput(event.target.value);
}

render(){
	return(
			<div className="search">
				<div className="title">Movies</div>
			    <input type="search" onChange={this.onChangeText} placeholder={this.props.placeholder} />
			</div>
		)
}
}
export default Search;