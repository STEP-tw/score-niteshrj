const Score = function(currentScore,valueToIncreaseScore){
  this.currentScore = currentScore;
  this.valueToIncreaseScore = valueToIncreaseScore;
}

Score.prototype.getUpdatedScore = function(){
  let updatedScore = this.currentScore + this.valueToIncreaseScore;
  this.currentScore = updatedScore;
  return updatedScore;
}
