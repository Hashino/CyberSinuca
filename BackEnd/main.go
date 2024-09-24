package main

import (
	"net/http"

	"github.com/gin-gonic/gin"

	"cybersinuca/api/docs"
	"cybersinuca/api/src/match"
	"cybersinuca/api/src/player"

	"github.com/swaggo/files"
	"github.com/swaggo/gin-swagger"
)


var matches = []match.Match{
	{ ID: 1,  Player1: 1, Player2: 1, Winner: true },
	{ ID: 3,  Player1: 2, Player2: 2, Winner: true },
	{ ID: 4,  Player1: 1, Player2: 3, Winner: false },
	{ ID: 5,  Player1: 2, Player2: 1, Winner: true },
	{ ID: 6,  Player1: 3, Player2: 2, Winner: false },
}

// getGeneralHistory get the history of all players
//
//	@Summary		Get all players history
//	@Description	get all players history
//	@Accept			json
//	@Produce		json
//	@Success		200		{array}		match.Match[]
//	@Router			/api/history [get]
func getGeneralHistory(context *gin.Context) {
	context.IndentedJSON(http.StatusOK, matches)
}

// getAllPlayersInfo get the information of all players
//
//	@Summary		List players
//	@Description	get players
//	@Accept			json
//	@Produce		json
//	@Success		200	{array}	player.Player
//	@Router			/api/player [get]
func getAllPlayersInfo(context *gin.Context) {
	context.IndentedJSON(http.StatusOK, player.Players)
}

// getPlayerInfo get the information of specificed player
//
//	@Summary		Get player information by name
//	@Description	get specified player info
//	@Accept			json
//	@Produce		json
//	@Param			name	path		string	true	"Player Name"
//	@Success		200		{array}		player.Player
//	@Failure		400		{object}	string
//	@Router			/api/player/{username} [get]
func getPlayerInfo(context *gin.Context) {
	var name = context.Param("username")

	for _, p := range player.Players {
		if p.DisplayName == name {
			context.IndentedJSON(http.StatusOK, p)
			return
		}
	}

	context.IndentedJSON(400, gin.H{"message": "player not found"})
}

// getPlayerHistory get the history of specificed player
//
//	@Summary		Get player history by name
//	@Description	get specified player history
//	@Accept			json
//	@Produce		json
//	@Param			name	path		string	true	"Player Name"
//	@Success		200		{array}		match.Match[]
//	@Failure		400		{object}	string
//	@Router			/api/history/{name} [get]
func getPlayerHistory(context *gin.Context) {
	var player, res = player.GetPlayerByUsername(context.Param("name"))

	if res == nil {
		var playerMatches []match.Match

		for _, m := range matches {
			if m.Player1 == player.ID || m.Player2 == player.ID {
				playerMatches = append(playerMatches, m)
			}
		}
		if len(playerMatches) > 0 {
			context.IndentedJSON(http.StatusOK, playerMatches)
		}

	} else {
		context.IndentedJSON(400, gin.H{"message": "player not found"})
	}
}

//	@title		CyberSinuca API
//	@version	0.0.1

//	@host	localhost:6969

//	@securityDefinitions.basic	BasicAuth

// @externalDocs.description	OpenAPI
// @externalDocs.url			https://swagger.io/resources/open-api/
func main() {

	// programmatically set swagger info
	docs.SwaggerInfo.Title = "CyberSinuca API"
	docs.SwaggerInfo.Version = "0.0.1"
	docs.SwaggerInfo.Schemes = []string{"http", "https"}

	router := gin.Default()

	router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))

	router.GET("/api/history", getGeneralHistory)
	router.GET("/api/history/:username", getPlayerHistory)
	router.GET("/api/player", getAllPlayersInfo)
	router.GET("/api/player/:username", getPlayerInfo)

	router.Run("localhost:6969")
}
