import fs from 'fs'
import readline from 'readline'
const mapper = {
    'one': 'o1e',
    'two': 't2o',
    'three': 't3e',
    'four': 'f4r',
    'five': 'f5e',
    'six': 's6x',
    'seven': 's7n',
    'eight': 'e8t',
    'nine': 'n9e',
};

async function processLineByLine() {
    const fileStream = fs.createReadStream('./inputs/day1.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    const lines = [];
    for await (const line of rl) {
        let parsedLine = line;
        for (const [numberName, numberValue] of Object.entries(mapper)) {
            parsedLine = parsedLine.replace(new RegExp(numberName, 'gi'), numberValue);
        }
        const preparedNumbers = parsedLine.split('').filter((char) => !isNaN(Number(char)))
        const number = Number(`${preparedNumbers[0]}${preparedNumbers[preparedNumbers.length - 1]}`)
        lines.push(number);
    }
    return lines.reduce((acc, item) => {
        acc += item;
        return acc;
    }, 0)
}

processLineByLine();
