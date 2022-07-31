const { formattingLine } = require('./formattingLine')

const formattingFile = (file, fileName) => {
  let lines = []
  const header = ['file', 'text', 'number', 'hex'] // if in the future changes the amount of headers we add to that array

  const linesArr = file.split('\n') // make an array with every single line

  if (linesArr[0] === header.join(',')) {
    for (let i = 1; i < linesArr.length; i++) {
      const objectValid = (formattingLine(linesArr[i], fileName, header));
      (objectValid) && (lines = [...lines, objectValid])
    }
  } else {
    return null
  }

  return lines
}

module.exports = {
  formattingFile
}
