module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let bracketsPair = {};
  let openBrackets = [];

  bracketsConfig.forEach((element) => {
    openBrackets.push(element[0]);
    bracketsPair[element[1]] = element[0];
  });

  for(let i = 0; i < str.length; i++){
    let currentSymbol = str[i];
    
    if((openBrackets.includes(currentSymbol) && bracketsPair[currentSymbol] !== currentSymbol) ||
     (bracketsPair[currentSymbol] === currentSymbol && stack[stack.length - 1] !== currentSymbol)){
      stack.push(currentSymbol);
    } else {
      if(stack.length === 0){
        return false;
      }

      let lastSymbol = stack[stack.length - 1];

      if(bracketsPair[currentSymbol] === lastSymbol){
        stack.pop();
      } else {
        return false;
      }
    }
  }

  if(stack.length === 0){
    return true;
  } else {
    return false;
  }
}
