const _ = {
  clamp(number, lower, upper){
    const lowerClamedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClamedValue, upper);
    return clampedValue;
  },
  
  inRange(number, start, end){
    if(end == undefined){
      end = start;
      start = 0;
    }
    
 if(start > end){
      const temp = end;
      end = start;
      start = temp;
    }
  const isInRange = number >= start && number < end
  return isInRange;

  },
  
  words(str){
   return srt.spilt(' ');
  },
  pad(str, len){
    if(len < str){
      return str;
    }
   const startPaddingLength = Math.floor((len -str.length/2));
    const endPaddingLength = (len - str.length - startPaddingLength);
    const space = ' ';
const paddedString = space.repeat(startPaddingLength) + str + space.repeat(endPaddingLength);
    return paddedString;
  }
};



// Do not write or modify code below this line.
module.exports = _;

