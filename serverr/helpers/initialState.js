
function initYellowTokensState() {
    return [
    {
        positionId: 64,
        description: 'out',
        index: 'yellow-0'
    },
    {
        positionId: 65,
        description: 'out',
        index: 'yellow-1'
    },
    {
        positionId: 66,
        description: 'out',
        index: 'yellow-2'
    },
    {
        positionId: 67,
        description: 'out',
        index: 'yellow-3'
    }
];
} 

function initBlueTokensState() {
    return [
        {
            positionId: 72,
            description: 'out',
            index: 'blue-0'
        },
        {
            positionId: 73,
            description: 'out',
            index: 'blue-1'
        },
        {
            positionId: 74,
            description: 'out',
            index: 'blue-2'
        },
        {
            positionId: 75,
            description: 'out',
            index: 'blue-3'
        }
    ];
} 

function initRedTokensState() {
    return [
        {
            positionId: 68,
            description: 'out',
            index: 'red-0'
        },
        {
            positionId: 69,
            description: 'out',
            index: 'red-1'
        },
        {
            positionId: 70,
            description: 'out',
            index: 'red-2'
        },
        {
            positionId: 71,
            description: 'out',
            index: 'red-3'
        }
    ];
} 

function initGreenTokensState() {
    return [
        {
            positionId: 60,
            description: 'out',
            index: 'green-0'
        },
        {
            positionId: 61,
            description: 'out',
            index: 'green-1'
        },
        {
            positionId: 62,
            description: 'out',
            index: 'green-2'
        },
        {
            positionId: 63,
            description: 'out',
            index: 'green-3'
        }
    ];
} 

function initTokensState(playersCount) {
    switch (playersCount) {
        case 3:
            return [
                ...initYellowTokensState,
                ...initBlueTokensState,
                ...initRedTokensState,
            ];
        case 2:
            return [
                ...initYellowTokensState,
                ...initBlueTokensState,
            ];
        default: // 4
            return [
                ...initYellowTokensState,
                ...initBlueTokensState,
                ...initRedTokensState,
                ...initGreenTokensState
            ];        
    }
}

module.exports = {
    initTokensState
};