const Encode = {
    process: (edition, text) => {
        if(edition === 1) {
            Encode.editionOne(text);
        } else {
            console.log(`Sorry, but edition ${edition} does not support encoding`);
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

        decoded.forEach((char, index) => {
            map[char] = encoded[index];
        });

        let encodedMessage = [];

        for(let idx = 0; idx < text.length; idx++) {
            if(text[idx] === ' ') {
                encodedMessage.push(' ');
            } else {
                encodedMessage.push(map[text[idx]] || '?');
            }
        }

        console.log(`Original: ${text}`);
        console.log(`Encoded: ${encodedMessage.join('')}`);
    }
}

module.exports = Encode;