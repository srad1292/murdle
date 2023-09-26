const Decode = {
    process: (edition, text) => {
        if(edition === 1) {
            Decode.editionOne(text);
        } else {
            console.log(`Sorry, but edition ${edition} does not support decoding`);
        }
    },
    editionOne: (text) => {
        text = text.toLocaleUpperCase();
        let map = {};
        let encoded = [];
        let decoded = [];
        let aIdx = 'A'.charCodeAt(0);
        let zIdx = 'Z'.charCodeAt(0);
        for(aIdx; aIdx <= zIdx; aIdx++) {
            decoded.push(String.fromCharCode(aIdx));
            encoded.unshift(String.fromCharCode(aIdx));
        }

        encoded.forEach((char, index) => {
            map[char] = decoded[index];
        });

        let decodedMessage = [];

        for(let idx = 0; idx < text.length; idx++) {
            if(text[idx] === ' ') {
                decodedMessage.push(' ');
            } else {
                decodedMessage.push(map[text[idx]] || '?');
            }
        }

        console.log(`Original: ${text}`);
        console.log(`Decoded: ${decodedMessage.join('')}`);
    }
}

module.exports = Decode;