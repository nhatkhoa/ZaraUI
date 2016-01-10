class LevelBarController {
  constructor() {
    this.name = 'levelBar';
  }
  
  getPercent(pokemon){
    let percent = pokemon.currentScore/(pokemon.nextScore - pokemon.previousScore)*100;
    percent = parseInt((percent + 5 ) / 5) * 5;
    return percent;
  }
}

export default LevelBarController;
