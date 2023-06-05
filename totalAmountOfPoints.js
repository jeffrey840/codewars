function points(matches) {
    let totalPoints = 0;
  
    for (let match of matches) {
      const [x, y] = match.split(':');
      const teamScore = parseInt(x);
      const opponentScore = parseInt(y);
  
      if (teamScore > opponentScore) {
        totalPoints += 3; // Win
      } else if (teamScore === opponentScore) {
        totalPoints += 1; // Tie
      }
      // Loss: No points awarded
    }
  
    return totalPoints;
  }
  