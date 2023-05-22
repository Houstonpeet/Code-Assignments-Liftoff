function LongestWord(sen) {
    // Remove punctuation from the string
    const cleanedSen = sen.replace(/[^\w\s]/g, '');
    // Split the string into words
    const words = cleanedSen.split(' ');
  
    let longestWord = '';
    let longestLength = 0;
  
    words.forEach((word) => {
      // Remove any digits from the word
      const cleanedWord = word.replace(/\d/g, '');
  
      // Check if the current word is longer than the previous longest word
      if (cleanedWord.length > longestLength) {
        longestWord = cleanedWord;
        longestLength = cleanedWord.length;
      }
    });
  
    return longestWord;
  }
  
  const sentence = 'Hello world123 567';
  const result = LongestWord(sentence);
  console.log(result); // Output: "Hello"
  