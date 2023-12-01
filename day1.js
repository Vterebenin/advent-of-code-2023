"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Example input for Day 1
const fs_1 = __importDefault(require("fs"));
const readline_1 = __importDefault(require("readline"));
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
    const fileStream = fs_1.default.createReadStream('./inputs/day1.txt');
    const rl = readline_1.default.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    const lines = [];
    for await (const line of rl) {
        let parsedLine = line;
        for (const [numberName, numberValue] of Object.entries(mapper)) {
            parsedLine = parsedLine.replace(new RegExp(numberName, 'gi'), numberValue);
        }
        const preparedNumbers = parsedLine.split('').filter((char) => !isNaN(Number(char)));
        const number = Number(`${preparedNumbers[0]}${preparedNumbers[preparedNumbers.length - 1]}`);
        lines.push(number);
        console.log(number, preparedNumbers, parsedLine, line);
        // console.log(`Line from file: ${parsedLine}`);
    }
    const sum = lines.reduce((acc, item) => {
        acc += item;
        return acc;
    }, 0);
    console.log(sum);
}
processLineByLine();
