function ColorScore(score){
    if(score >= 8){
      return 'high-score text-[#46923c]';
    } else if(score >= 6){
      return 'good-score text-[yellow]';
    } else if(score >= 4){
      return 'average-score text-[orange]';
    }else if(score < 4){
      return 'bad-score text-[red]';
    }
}

export default ColorScore;