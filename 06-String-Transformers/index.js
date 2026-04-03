const input = document.querySelector('.input-field');

const lowerCaseOutput = document.querySelector('#lower-case .transform-output');
const upperCaseOutput = document.querySelector('#upper-case .transform-output');
const camelCaseOuput = document.querySelector('#camel-case .transform-output');
const pascalCaseOutput = document.querySelector('#pascal-case .transform-output');
const snakeCaseOutput = document.querySelector('#snake-case .transform-output');
const kebabCaseOutput = document.querySelector('#kebab-case .transform-output');
const trimCaseOutput = document.querySelector('#trim .transform-output');

function capitalizeString(str){
    if(!str) return str;
    return str[0].toUpperCase() + str.slice(1, str.length);
}

function camelCase(str){
      const lowerCaseString = str.toLowerCase();
      const wordArray = lowerCaseString.split(' ');
      const finalArray = wordArray.map((word,i) =>{
        if(i === 0) return word;
        return capitalizeString(word);
      })
      return finalArray.join('');
}
function pascalCase(str){
      const lowerCaseString = str.toLowerCase();
      const wordArray = lowerCaseString.split(' ');
      const finalArray = wordArray.map((word) =>{
        return capitalizeString(word);
      })
      return finalArray.join('');
}
function snakeCase(str){
    return str.replaceAll(' ', '_');
}
function kebabCase(str){
    return str.replaceAll(' ', '-');
}
function trimCase(str){
    return str.replaceAll(' ', '');
}

input.addEventListener('input', () => {
  const value = input.value;

  lowerCaseOutput.innerText = value.toLowerCase();
  upperCaseOutput.innerText = value.toUpperCase();
  camelCaseOuput.innerText = camelCase(value.trim());
  pascalCaseOutput.innerText = pascalCase(value.trim());
  snakeCaseOutput.innerText = snakeCase(value.trim());
  kebabCaseOutput.innerText = kebabCase(value.trim());
  trimCaseOutput.innerText = trimCase(value.trim());
});