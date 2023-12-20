type Colors = 'Black'|'White'
type Files = 'A'|"B"|"C"|"D"|"E"|"F"|"G"|"H"
type Ranks = 1|2|3|4|5|6|7|8


// 체스 게임
class Games {}

// 체스 말
class Piece{
  protected position : Position;
  constructor(
    private readonly color : Colors,
    files: Files,
    ranks: Ranks
  ){
    this.position = new Position(files, ranks)
  }
}

// 체스 말의 좌표
class Position{ 
  constructor(
    private files : Files,
    private ranks : Ranks
  ){}
}
  

class king extends Piece{}
class Queen extends Piece{}
class Bishop extends Piece{}
class Knight extends Piece{}
class Rook extends Piece{}
class Pawn extends Piece{}

