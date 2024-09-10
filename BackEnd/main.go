package main

import (
	"net/http"

	"github.com/gin-gonic/gin"

	"cybersinuca/api/docs"
	"cybersinuca/api/model/match"
	"cybersinuca/api/model/player"

	"github.com/swaggo/files"
	"github.com/swaggo/gin-swagger"
)


var matches = []match.Match{
	{WinnerID: 1, LoserID: 2},
	{WinnerID: 2, LoserID: 3},
	{WinnerID: 3, LoserID: 1},
}

// getAllPlayersHistory get the history of all players
//
//	@Summary		Get all players history
//	@Description	get all players history
//	@Accept			json
//	@Produce		json
//	@Success		200		{array}		match.Match[]
//	@Router			/history [get]
func getAllPlayersHistory(context *gin.Context) {
	context.IndentedJSON(http.StatusOK, matches)
}

// getAllPlayersInfo get the information of all players
//
//	@Summary		List players
//	@Description	get players
//	@Accept			json
//	@Produce		json
//	@Success		200	{array}	player.Player
//	@Router			/player [get]
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
//	@Router			/player/{name} [get]
func getPlayerInfo(context *gin.Context) {
	var name = context.Param("name")

	for _, p := range player.Players {
		if p.Name == name {
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
//	@Router			/history/{name} [get]
func getPlayerHistory(context *gin.Context) {
	var player, res = player.GetPlayerByName(context.Param("name"))

	if res == nil {
		var playerMatches []match.Match

		for _, m := range matches {
			if m.LoserID == player.ID || m.WinnerID == player.ID {
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

	router.GET("/history", getAllPlayersHistory)
	router.GET("/history/:name", getPlayerHistory)
	router.GET("/player", getAllPlayersInfo)
	router.GET("/player/:name", getPlayerInfo)

	router.Run("localhost:6969")
}
