export default class LocalPlayerRepository {
	getAllPlayers()	{
		return JSON.parse(localStorage.players);
	}

	savePlayer(player) {
		let players = this.getAllPlayers();
		players.push(player);


		const playersJSON = JSON.stringify(players)
        localStorage.players = playersJSON;
	}
}