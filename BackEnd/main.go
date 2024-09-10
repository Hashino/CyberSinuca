package main

import (
	"errors"
	"net/http"

	"github.com/gin-gonic/gin"
)

type match struct {
	WinnerID int `json:"winnerId"`
	LoserID  int `json:"loserId"`
}

type player struct {
	ID      int     `json:"id"`
	Name    string  `json:"name"`
	Elo     int     `json:"elo"`
	History []match `json:"matches"`
}

var players = []player{
	{ID: 1, Name: "Iam", Elo: 940, History: []match{}},
	{ID: 2, Name: "Natan", Elo: 950, History: []match{}},
	{ID: 3, Name: "Samuel", Elo: 960, History: []match{}},
}

var matches = []match{
	{WinnerID: 1, LoserID: 2},
	{WinnerID: 2, LoserID: 3},
	{WinnerID: 3, LoserID: 1},
}

func getPlayerByName(name string) (player, error) {
	for _, p := range players {
		if p.Name == name {
			return p, nil
		}
	}
	return *new(player), errors.New("not found")
}

func getGeneralHistory(context *gin.Context) {
	context.IndentedJSON(http.StatusOK, matches)
}

func getAllUserInfo(context *gin.Context) {
	context.IndentedJSON(http.StatusOK, players)
}

func getUserInfo(context *gin.Context) {
	var name = context.Param("name")

	for _, p := range players {
		if p.Name == name {
			context.IndentedJSON(http.StatusOK, p)
			return
		}
	}

	context.IndentedJSON(http.StatusNotFound, gin.H{"message": "player not found"})
}

func getUserHistory(context *gin.Context) {
	var player, res = getPlayerByName(context.Param("name"))

	if res == nil {
    var playerMatches []match

    for _, m := range matches {
      if m.LoserID == player.ID || m.WinnerID == player.ID {
        playerMatches = append(playerMatches, m)
      }
    }

    context.IndentedJSON(http.StatusOK, playerMatches)

	} else {
		context.Error(res)
	}
}

func main() {
	router := gin.Default()
	router.GET("/history", getGeneralHistory)
	router.GET("/history/:name", getUserHistory)
	router.GET("/user", getAllUserInfo)
	router.GET("/user/:name", getUserInfo)

	router.Run("localhost:8080")
}
