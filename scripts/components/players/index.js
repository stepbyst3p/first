import React from 'react'
import PlayersForm from './form'

export default class Players extends React.Component {
        
	constructor() {
		super();	 
	   	this.state = {players: []};
        this.handleNewPlayer = this.handleNewPlayer.bind(this);              
	}
	
    handleNewPlayer(player) {     
        this.setState((prevState) => {
            return {
                players: prevState.players.concat(player)
            }
        })
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


