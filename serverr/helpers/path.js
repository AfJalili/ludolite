const yellowtoBlue = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
];
const bluetoRed = [
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21
];

const redtoGreen = [
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32
];

const greenToYellow = [
    33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43
];

const yellowPath = [
    ...yellowtoBlue,
    ...bluetoRed,
    ...redtoGreen,
    ...greenToYellow,
    44, 45, 46, 47
];

const bluePath = [
    ...bluetoRed,
    ...redtoGreen,
    ...greenToYellow,
    ...yellowtoBlue,
    52,53,54,55
];

const redPath = [
    ...redtoGreen,
    ...greenToYellow,
    ...yellowtoBlue,
    ...bluetoRed,
    56, 57, 58, 59
];

const greenPath = [
    ...greenToYellow,
    ...yellowtoBlue,
    ...bluetoRed,
    ...redtoGreen,
    48, 49, 50, 51
];

function getPath(tokenIndex) {
    const color = tokenIndex.substring(0, tokenIndex.indexOf('-'));
    switch (color) {
        case 'yellow': return yellowPath;
        case 'blue': return bluePath;
        case 'red': return redPath;
        case 'green': return greenPath;
    }
}

module.exports = {
    getPath
};