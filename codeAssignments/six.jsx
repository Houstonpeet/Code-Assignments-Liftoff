function detectWord(crowd) {
    let word = '';
  
    for (let i = 0; i < crowd.length; i++) {
      if (crowd[i] === crowd[i].toLowerCase()) {
        word += crowd[i];
      }
    }
  
    return word;
  }

console.log(detectWord('KSHIhSEOJeDKSFIlLSHGlLSEFJoEHF'))