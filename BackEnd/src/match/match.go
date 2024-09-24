package match

type Match struct {
	ID      int  `json:"id"`
	Player1 int  `json:"player1_id"`
	Player2 int  `json:"player2_id"`
	Winner  bool `json:"bool"`
}
