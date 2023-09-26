var fs = require('fs');
const Encode = require("./tools/encode");
const Decode = require("./tools/decode");

const actions = [
    'encode',
    'decode'
]

const editions = [
    1
]

let edition;
let action;
let text;
let errors = [];

function main() {
    processInput();
    if(errors.length > 0) {
        showErrors();
        return;
    }

    //console.log({action, edition, text});
    if(action === 'encode') {
        Encode.process(edition, text);
    } else if(action === 'decode') {
        Decode.process(edition, text);
    }
}

main();

function processInput() {
    const argCount = 5;
    if(process.argv.length === 3) {
        let val = process.argv[2];
        if((val === 'h' || val === 'help' || val === '--h' || val === '--help')) {
            showHelp();
        } else {
            console.log(`Invalid number of arguments.  Expected ${argCount} but received 3`);
            console.log("To show help run: node tool [h,help,--h,--help]");
        }
    } else if(process.argv.length !== 5) {
        console.log(`Invalid number of arguments.  Expected ${argCount} but received ${process.argv.length}`);
        console.log("To show help run: node tool [h,help,--h,--help]");
    } else {
        process.argv.forEach((val, index, array) => {
            if(index === 2 && actions.findIndex(action => action === val.toLocaleLowerCase()) >= 0) {
                action = val.toLocaleLowerCase();
            } else if(index === 2) {
                errors.push("First input param should be one of the possible actions");
            }
        
            if(index === 3 && editions.findIndex(edition => edition === parseInt(val)) >= 0) {
                edition = parseInt(val);
            } else if(index === 3) {        
                errors.push("Second input param should be one of the supported editions");
            }
        
            if(index === 4) {
                text = val;
            }
        });
    }
    
}

function showHelp() {
    console.log("To encode a message for murdle use the following format: node tool action edition message");
    console.log("Example: node tool encode 1 'meet at club'");
    console.log(`Actions: ${actions.join(", ")}`);
    console.log(`Editions: ${editions.join(", ")}`);
}

function showErrors() {
    errors.forEach(error => console.log(error));
    console.log("To show help run: node tool [h,help,--h,--help]");
}




