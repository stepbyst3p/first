import Axios from 'axios';

export default class RemotePlayerRepository {
	getAllPlayers()	{
		return new Promise((resolve, reject) => {
			Axios
				.get('https://vanya-test.herokuapp.com/api/players')
				.then(resp => {
					 resolve(resp.data)
				})	
		});	
	}

	savePlayer(player) {
		Axios
			.post('https://vanya-test.herokuapp.com/api/players', player)				
	}
}  