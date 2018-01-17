var characterPositions = function checkCharacterPositionsAndReturnAObject(str) {
  var arrayChar = str.split('');
  var charPositionsObj = {};

  for (var i = 0; i < arrayChar.length; i++) {
    if (!charPositionsObj[arrayChar[i]]) {
      charPositionsObj[arrayChar[i]] = [];
    }
    charPositionsObj[arrayChar[i]].push(i);
  }

  return charPositionsObj;
};

console.log(characterPositions("lighthouse in the house"));