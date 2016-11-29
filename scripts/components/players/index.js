import React from 'react'
import PlayersForm from './form'
import List from './list'
import PlayerRepository from './repository/localstorage'

export default class Players extends React.Component {
        
	constructor() {
		super();	 
	   	
        this.handleNewPlayer = this.handleNewPlayer.bind(this);                      
        this.playerRepository = new PlayerRepository();

        if (localStorage.players) {
            const players = this.playerRepository.getAllPlayers();
            this.state = {players:players}
        } else {
            this.state = {players: []};
        }        
	}
	
    handleNewPlayer(player) {     
        this.playerRepository.savePlayer(player);
        this.setState((prevState) => {            
            return { players: prevState.players.concat(player) }
        })                
    }
    
    render() {    	    	
        return (
        	<div>
        		<h2>Adding Players</h2>        	
                <PlayersForm whenPlayerAdded={this.handleNewPlayer} />
        		<h2>Players:</h2>
                <List players={this.state.players}/>        		                
        	</div>
        );
    }    

}


