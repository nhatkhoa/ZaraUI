class LevelBarController {
  constructor() {
    this.name = 'levelBar';
  }
  
  getPercent(){
    const percent = (this.pokemon.currentScore - this.pokemon.previousScore)/(this.pokemon.nextScore - this.pokemon.previousScore)*100;
    return percent;
  }
}

export default LevelBarController;
