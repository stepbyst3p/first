import React from 'react'


export default class AddingPlayerForm extends React.Component {
        
	constructor(props) {
		super(props);
	 	this.handleInputChange = this.handleInputChange.bind(this);
	 	this.handleSubmit = this.handleSubmit.bind(this);			   
	   	this.state = {players: [], name: ''};
	}

	handleSubmit(e) {			
    	e.preventDefault();    	    	    	    	    	
    	
        let newPlayer = {
            name: this.state.name,   
            id: Date.now()
        }
        
        this.setState((prevState) => ({
            players: prevState.players.concat(newPlayer),
            name: ''
        }));        
            	
	}

	handleInputChange(e) {		
		this.setState({ name: e.target.value }) 		
	}

    render() {    	    	
        return (
        	<div>
        		<h2>Adding Players</h2>
        		<form onSubmit={this.handleSubmit}>
        			<input onChange={this.handleInputChange} type="text" value={this.state.name} />
        			<button type="submit">Add Player</button>
        		</form>   

        		<h2>Players:</h2>
        		<ul id="players-list">    
        			{this.state.players.map(player => (
          			<li key={player.id}>{player.name}</li>
        			))}

     			  		
        		</ul>        		
        	</div>
        );
    }    

}


