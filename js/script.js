const symbolCatalog = [
    'W',
    'Ω',
    '維',
    'উ',
    'ウィ',
    'И',
    'ው',
    '위',
    'ವಿ',
    'ཝི',
    'វិ',
    'ვ'
]

let index = 0;

const rotateSymbol = (htmlElementID, interval ) => {
    if (index >= symbolCatalog.length-1)
        index = -1;
    $(htmlElementID).fadeOut( interval, () => {
        index = index + 1;
        $(htmlElementID).text(symbolCatalog[index]);
    }).fadeIn(interval);
}

setInterval( () =>{ rotateSymbol("#displaySymbol",600)}, 4200);
