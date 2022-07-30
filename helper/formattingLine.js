const { isDecimal, isHexadecimal } = require("./validNumber");

const formattingLine = (line, fileName, headers) => {

    const hash = {};  
    
    const lineValuesArr = line.split(',');

    if(lineValuesArr.length === headers.length ){

            // Validate if the first column fits with the filename
            if(lineValuesArr[0] !== fileName) return null;
    
            // validate if the second column is an valid string
            if(typeof lineValuesArr[1] === 'string') hash[headers[1]] = lineValuesArr[1];
            else return null;

            // validate if the thirth column is a valid decimal number
            if(isDecimal(lineValuesArr[2])) hash[headers[2]] = Number(lineValuesArr[2]);
            else return null;
            
            // validate if the fouth column is a valid hex
            if(isHexadecimal(lineValuesArr[3])) hash[headers[3]] = lineValuesArr[3];
            else return null;

            /*
                ADD MORE VALIDATIONS IF HEADER COLUMS INCREMENT IN THE FUTURE
            */
           
    } else  return null;
       
    return hash;
}


module.exports = {
    formattingLine
}