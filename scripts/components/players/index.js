import React from 'react'
import PlayersForm from './form'
import List from './list'
import PlayerRepository from './repository/remotePlayerRepository'

const loadingStates = {
    loading:'loading',
    ready:'ready'
}

export default class Players extends React.Component {
    
	constructor() {
		super();	 
	   	
        this.handleNewPlayer = this.handleNewPlayer.bind(this);                      
        this.playerRepository = new PlayerRepository();        
        this.state = {
            players:[],
            loadingState: loadingStates.loading
        }

    }
	
    componentDidMount() {
        this.playerRepository.getAllPlayers()
            .then(downloadedPlayers => {
                this.setState({
                    players:downloadedPlayers,
                    loadingState:loadingStates.ready
                })
            })
    }

    handleNewPlayer(player) {     
        this.playerRepository.savePlayer(player);
        this.setState((prevState) => {            
            return { players: prevState.players.concat(player) }
        })                
    }
    
    render() {   
        let playerList;
        if (this.state.loadingState === loadingStates.ready) {
            playerList = <List players={this.state.players}/>                               
        } else {
            playerList = <div>loading...</div>
        }        
        return (
        	<div>
        		<h2>Adding Players</h2>        	
                <PlayersForm whenPlayerAdded={this.handleNewPlayer} />
        		<h2>Players:</h2>                
                {playerList}
        	</div>
        );
    }    

}


