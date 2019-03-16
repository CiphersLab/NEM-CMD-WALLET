import { MOSAIC_NAME, createSimpleWallet } from "../src";

const prompt = require('prompt');
const args = process.argv.slice(2);

const createWallet = () => {
    console.log('Please Enter a unique Password (8 Character minimum ).\n'+
    'This password will be used to encrypt your private key and make working with wallet easier.\n'+
    'Store this password somewhere safe. If you lose or forget it you will never be able to transfer funds');
    prompt.message = `${MOSAIC_NAME} wallet`;
    prompt.start();
    prompt.get({
      properties:  {
            password: {
                description: 'Password',
                hidden: true
            },
            confirmPass: {
                description: 'Re-enter password',
                hidden: true
            }
        }
    }, (_,result) => {
        if(result.password !== result.confirmPass){
            console.log('\nPasswords do not match\n\n');
            createWallet();
        }else{
            const wallet = createSimpleWallet(result.password);
            console.log(wallet);
        }
    });
};

const main = async () => {
    if(args[0] === 'wallet'){
        if(args[1] === 'create'){
            createWallet();
        }
    }
};

main();