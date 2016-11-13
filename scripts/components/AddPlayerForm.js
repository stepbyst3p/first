import React from 'react'


export default class AddingPlayerForm extends React.Component {
    
    handleSubmit(e) {
    	e.preventDefault();		
	}

    render() {    	
        return (
        	<div>
        		<h2>Adding Players</h2>
        		<form onSubmit={this.handleSubmit}>
        			<input type="text" />
        			<button type="submit">Add Player</button>
        		</form>
        	</div>
        );
    }
}
