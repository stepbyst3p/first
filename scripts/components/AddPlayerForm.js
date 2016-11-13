import React from 'react'


export default class AddingPlayerForm extends React.Component {
    
    

	constructor() {
		super();

	 	this.handleInputChange = this.handleInputChange.bind(this);
	 	this.handleSubmit = this.handleSubmit.bind(this);			   
	   	this.state = {name: ''};
	 }

	handleSubmit(e) {			
    	e.preventDefault();
    	alert('We are gonna add Player with name ' + this.state.name)
	}

	handleInputChange(e) {		
		this.setState({ name: e.target.value }) 		
	}

    render() {    	    	
        return (
        	<div>
        		<h2>Adding Players</h2>
        		<form onSubmit={this.handleSubmit}>
        			<input onChange={this.handleInputChange} type="text" />
        			<button type="submit">Add Player</button>
        		</form>
        	</div>
        );
    }
}
