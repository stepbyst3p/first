import React from 'react'
import PlayersForm from './form'

export default class AddingPlayerForm extends React.Component {
        
	constructor() {
		super();	 
	   	this.state = {players: [], name: ''};
	}
	
    handleNewPlayer(player) {
        
    }

    render() {    	    	
        return (
        	<div>
        		<h2>Adding Players</h2>        	
                <PlayersForm whenPlayerAdded={this.handleNewPlayer} />
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


