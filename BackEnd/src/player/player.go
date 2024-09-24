package player

import (
	"cybersinuca/api/src/match"
	"errors"
)

type Player struct {
	ID          int    `json:"id"`
	Username    string `json:"username"`
	DisplayName string `json:"display_name"`
	Elo         int    `json:"elo"`
	CreatedAt   int    `json:"created_at"`
	History     []match.Match
}

var Players = []Player{
	{ID: 1, DisplayName: "Iam", Elo: 940, History: []match.Match{}},
	{ID: 2, DisplayName: "Natan", Elo: 950, History: []match.Match{}},
	{ID: 3, DisplayName: "Samuel", Elo: 960, History: []match.Match{}},
}

// utility function
func GetPlayerByUsername(username string) (Player, error) {
	// TODO: get from database instead
	for _, p := range Players {
		if p.DisplayName == username {
			return p, nil
		}
	}
	return *new(Player), errors.New("not found")
}
