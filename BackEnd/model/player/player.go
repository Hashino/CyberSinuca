package player

import (
	"cybersinuca/api/model/match"
	"errors"
)

type Player struct {
	ID      int     `json:"id"`
	Name    string  `json:"name"`
	Elo     int     `json:"elo"`
	History []match.Match `json:"matches"`
}

var Players = []Player{
	{ID: 1, Name: "Iam", Elo: 940, History: []match.Match{}},
	{ID: 2, Name: "Natan", Elo: 950, History: []match.Match{}},
	{ID: 3, Name: "Samuel", Elo: 960, History: []match.Match{}},
}

// utility function
func GetPlayerByName(name string) (Player, error) {
	for _, p := range Players {
		if p.Name == name {
			return p, nil
		}
	}
	return *new(Player), errors.New("not found")
}
