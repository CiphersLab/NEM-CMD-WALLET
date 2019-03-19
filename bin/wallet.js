"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
const nem_library_1 = require("nem-library");
const fs = require('fs');
const os = require('os');
const prompt = require('prompt');
const args = process.argv.slice(2);
const PATH_HOME = `${os.homedir()}/${src_1.MOSAIC_NAME}-wallets-dev`;
const PATH_WALLET = `${PATH_HOME}/${src_1.MOSAIC_NAME}-wallet.wlt`;
const openWallet = (wallet) => {
    return new Promise((resolve, reject) => {
        prompt.message = 'wallet login';
        prompt.start();
        prompt.get({
            properties: {
                password: {
                    description: 'Password',
                    hidden: true
                }
            }
        }, (_, result) => {
            const pass = new nem_library_1.Password(result.password);
            try {
                resolve(wallet.open(pass));
            }
            catch (err) {
                console.log(`${err}`);
                console.log('Please try again');
                reject();
            }
        });
    });
};
const loadWallet = () => {
    const contents = fs.readFileSync(PATH_WALLET);
    return nem_library_1.SimpleWallet.readFromWLT(contents);
};
const downloadWallet = (wallet) => {
    console.log('\nDownloading wallet for your convenience. \n' +
        'Please store someplace safe. The private key is encrypted by your password.\n' +
        'To load this wallet on a new computer you would simply import the .wlt file into this app and enter your password and you will be able to sign transactions');
    if (!fs.existsSync(PATH_HOME)) {
        fs.mkdirSync(PATH_HOME);
    }
    let fullPath = PATH_WALLET;
    if (fs.existsSync(fullPath)) {
        const stamp = new Date().toISOString();
        fullPath = `${PATH_HOME}/${stamp}-${src_1.MOSAIC_NAME}-wallet.wlt`;
    }
    fs.writeFileSync(fullPath, wallet.writeWLTFile());
    console.log(`Downloaded wallet to ${fullPath}`);
};
const createWallet = () => {
    console.log('Please Enter a unique Password (8 Character minimum ).\n' +
        'This password will be used to encrypt your private key and make working with wallet easier.\n' +
        'Store this password somewhere safe. If you lose or forget it you will never be able to transfer funds');
    prompt.message = `${src_1.MOSAIC_NAME} wallet`;
    prompt.start();
    prompt.get({
        properties: {
            password: {
                description: 'Password',
                hidden: true
            },
            confirmPass: {
                description: 'Re-enter password',
                hidden: true
            }
        }
    }, (_, result) => {
        if (result.password !== result.confirmPass) {
            console.log('\nPasswords do not match\n\n');
            createWallet();
        }
        else {
            const wallet = src_1.createSimpleWallet(result.password);
            const pass = new nem_library_1.Password(result.password);
            const account = wallet.open(pass);
            const address = account.address.pretty();
            console.log(`${src_1.MOSAIC_NAME} wallet successfully created\n`);
            console.log(`You can now start sending and receiving ${src_1.MOSAIC_NAME}\n`);
            console.log(`Public Address: ${address}`);
            downloadWallet(wallet);
        }
    });
};
const main = () => __awaiter(this, void 0, void 0, function* () {
    if (args[0] === 'wallet') {
        if (args[1] === 'create') {
            createWallet();
        }
    }
    const wallet = loadWallet();
    const account = yield openWallet(wallet);
    console.log(account);
});
main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2FsbGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxnQ0FBeUQ7QUFDekQsNkNBQThEO0FBRTlELE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFekIsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25DLE1BQU0sU0FBUyxHQUFHLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLGlCQUFXLGNBQWMsQ0FBQztBQUMvRCxNQUFNLFdBQVcsR0FBRyxHQUFHLFNBQVMsSUFBSSxpQkFBVyxhQUFhLENBQUM7QUFFN0QsTUFBTSxVQUFVLEdBQUcsQ0FBQyxNQUFvQixFQUFvQixFQUFFO0lBQzFELE9BQU8sSUFBSSxPQUFPLENBQVUsQ0FBQyxPQUFPLEVBQUMsTUFBTSxFQUFFLEVBQUU7UUFDM0MsTUFBTSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7UUFDaEMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNQLFVBQVUsRUFBQztnQkFDUCxRQUFRLEVBQUM7b0JBQ0wsV0FBVyxFQUFFLFVBQVU7b0JBQ3ZCLE1BQU0sRUFBRSxJQUFJO2lCQUNmO2FBQ0o7U0FDSixFQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ1osTUFBTSxJQUFJLEdBQUcsSUFBSSxzQkFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQyxJQUFHO2dCQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFD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Y0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzFCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFFRixNQUFNLElBQUksR0FBRyxHQUFTLEVBQUU7SUFDcEIsSUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFDO1FBQ3BCLElBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBQztZQUNwQixZQUFZLEVBQUUsQ0FBQztTQUNsQjtLQUNKO0lBRUQsTUFBTSxNQUFNLEdBQUcsVUFBVSxFQUFFLENBQUM7SUFDNUIsTUFBTSxPQUFPLEdBQUcsTUFBTSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN6QixDQUFDLENBQUEsQ0FBQztBQUVGLElBQUksRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTU9TQUlDX05BTUUsIGNyZWF0ZVNpbXBsZVdhbGxldCB9IGZyb20gXCIuLi9zcmNcIjtcbmltcG9ydCB7IFBhc3N3b3JkLCBTaW1wbGVXYWxsZXQsIEFjY291bnQgfSBmcm9tICduZW0tbGlicmFyeSc7XG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IG9zID0gcmVxdWlyZSgnb3MnKTtcblxuY29uc3QgcHJvbXB0ID0gcmVxdWlyZSgncHJvbXB0Jyk7XG5jb25zdCBhcmdzID0gcHJvY2Vzcy5hcmd2LnNsaWNlKDIpO1xuY29uc3QgUEFUSF9IT01FID0gYCR7b3MuaG9tZWRpcigpfS8ke01PU0FJQ19OQU1FfS13YWxsZXRzLWRldmA7XG5jb25zdCBQQVRIX1dBTExFVCA9IGAke1BBVEhfSE9NRX0vJHtNT1NBSUNfTkFNRX0td2FsbGV0LndsdGA7XG5cbmNvbnN0IG9wZW5XYWxsZXQgPSAod2FsbGV0OiBTaW1wbGVXYWxsZXQpOiBQcm9taXNlPEFjY291bnQ+ID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8QWNjb3VudD4oKHJlc29sdmUscmVqZWN0KSA9PiB7XG4gICAgICAgIHByb21wdC5tZXNzYWdlID0gJ3dhbGxldCBsb2dpbic7XG4gICAgICAgIHByb21wdC5zdGFydCgpO1xuICAgICAgICBwcm9tcHQuZ2V0KHtcbiAgICAgICAgICAgIHByb3BlcnRpZXM6e1xuICAgICAgICAgICAgICAgIHBhc3N3b3JkOntcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQYXNzd29yZCcsXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbjogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwoXywgcmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXNzID0gbmV3IFBhc3N3b3JkKHJlc3VsdC5wYXNzd29yZCk7XG4gICAgICAgICAgICB0cnl7IFxuICAgICAgICAgICAgICAgIHJlc29sdmUod2FsbGV0Lm9wZW4ocGFzcykpO1xuICAgICAgICAgICAgfSBjYXRjaChlcnIpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2Vycn1gKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUGxlYXNlIHRyeSBhZ2FpbicpO1xuICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICB9KTtcbiAgICBcbn1cblxuY29uc3QgbG9hZFdhbGxldCA9ICgpIDogU2ltcGxlV2FsbGV0ID0+IHtcbiAgICBjb25zdCBjb250ZW50cyA9IGZzLnJlYWRGaWxlU3luYyhQQVRIX1dBTExFVCk7XG4gICAgcmV0dXJuIFNpbXBsZVdhbGxldC5yZWFkRnJvbVdMVChjb250ZW50cyk7XG59O1xuXG5jb25zdCBkb3dubG9hZFdhbGxldCA9ICh3YWxsZXQ6IFNpbXBsZVdhbGxldCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdcXG5Eb3dubG9hZGluZyB3YWxsZXQgZm9yIHlvdXIgY29udmVuaWVuY2UuIFxcbicgKyBcbiAgICAnUGxlYXNlIHN0b3JlIHNvbWVwbGFjZSBzYWZlLiBUaGUgcHJpdmF0ZSBrZXkgaXMgZW5jcnlwdGVkIGJ5IHlvdXIgcGFzc3dvcmQuXFxuJytcbiAgICAnVG8gbG9hZCB0aGlzIHdhbGxldCBvbiBhIG5ldyBjb21wdXRlciB5b3Ugd291bGQgc2ltcGx5IGltcG9ydCB0aGUgLndsdCBmaWxlIGludG8gdGhpcyBhcHAgYW5kIGVudGVyIHlvdXIgcGFzc3dvcmQgYW5kIHlvdSB3aWxsIGJlIGFibGUgdG8gc2lnbiB0cmFuc2FjdGlvbnMnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhQQVRIX0hPTUUpO1xuICAgIC8vIGNvbnNvbGUubG9nKFBBVEhfV0FMTEVUKTtcbiAgICBpZighZnMuZXhpc3RzU3luYyhQQVRIX0hPTUUpKXtcbiAgICAgICAgZnMubWtkaXJTeW5jKFBBVEhfSE9NRSk7XG4gICAgfVxuICAgIGxldCBmdWxsUGF0aCA9IFBBVEhfV0FMTEVUO1xuICAgIGlmKGZzLmV4aXN0c1N5bmMoZnVsbFBhdGgpKXtcbiAgICAgICAgY29uc3Qgc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7IFxuICAgICAgICBmdWxsUGF0aCA9IGAke1BBVEhfSE9NRX0vJHtzdGFtcH0tJHtNT1NBSUNfTkFNRX0td2FsbGV0LndsdGA7ICAgIFxuICAgIH1cbiAgICBmcy53cml0ZUZpbGVTeW5jKGZ1bGxQYXRoLCB3YWxsZXQud3JpdGVXTFRGaWxlKCkpO1xuICAgIGNvbnNvbGUubG9nKGBEb3dubG9hZGVkIHdhbGxldCB0byAke2Z1bGxQYXRofWApO1xufTtcblxuY29uc3QgY3JlYXRlV2FsbGV0ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdQbGVhc2UgRW50ZXIgYSB1bmlxdWUgUGFzc3dvcmQgKDggQ2hhcmFjdGVyIG1pbmltdW0gKS5cXG4nK1xuICAgICdUaGlzIHBhc3N3b3JkIHdpbGwgYmUgdXNlZCB0byBlbmNyeXB0IHlvdXIgcHJpdmF0ZSBrZXkgYW5kIG1ha2Ugd29ya2luZyB3aXRoIHdhbGxldCBlYXNpZXIuXFxuJytcbiAgICAnU3RvcmUgdGhpcyBwYXNzd29yZCBzb21ld2hlcmUgc2FmZS4gSWYgeW91IGxvc2Ugb3IgZm9yZ2V0IGl0IHlvdSB3aWxsIG5ldmVyIGJlIGFibGUgdG8gdHJhbnNmZXIgZnVuZHMnKTtcbiAgICBwcm9tcHQubWVzc2FnZSA9IGAke01PU0FJQ19OQU1FfSB3YWxsZXRgO1xuICAgIHByb21wdC5zdGFydCgpO1xuICAgIHByb21wdC5nZXQoe1xuICAgICAgcHJvcGVydGllczogIHtcbiAgICAgICAgICAgIHBhc3N3b3JkOiB7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQYXNzd29yZCcsXG4gICAgICAgICAgICAgICAgaGlkZGVuOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlybVBhc3M6IHtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1JlLWVudGVyIHBhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICBoaWRkZW46IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIChfLHJlc3VsdCkgPT4ge1xuICAgICAgICBpZihyZXN1bHQucGFzc3dvcmQgIT09IHJlc3VsdC5jb25maXJtUGFzcyl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnXFxuUGFzc3dvcmRzIGRvIG5vdCBtYXRjaFxcblxcbicpO1xuICAgICAgICAgICAgY3JlYXRlV2FsbGV0KCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29uc3Qgd2FsbGV0ID0gY3JlYXRlU2ltcGxlV2FsbGV0KHJlc3VsdC5wYXNzd29yZCk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHdhbGxldCk7XG4gICAgICAgICAgICBjb25zdCBwYXNzID0gbmV3IFBhc3N3b3JkKHJlc3VsdC5wYXNzd29yZCk7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50ID0gd2FsbGV0Lm9wZW4ocGFzcyk7XG4gICAgICAgICAgICBjb25zdCBhZGRyZXNzID0gYWNjb3VudC5hZGRyZXNzLnByZXR0eSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7TU9TQUlDX05BTUV9IHdhbGxldCBzdWNjZXNzZnVsbHkgY3JlYXRlZFxcbmApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFlvdSBjYW4gbm93IHN0YXJ0IHNlbmRpbmcgYW5kIHJlY2VpdmluZyAke01PU0FJQ19OQU1FfVxcbmApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFB1YmxpYyBBZGRyZXNzOiAke2FkZHJlc3N9YCk7XG4gICAgICAgICAgICBkb3dubG9hZFdhbGxldCh3YWxsZXQpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5jb25zdCBtYWluID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmKGFyZ3NbMF0gPT09ICd3YWxsZXQnKXtcbiAgICAgICAgaWYoYXJnc1sxXSA9PT0gJ2NyZWF0ZScpe1xuICAgICAgICAgICAgY3JlYXRlV2FsbGV0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB3YWxsZXQgPSBsb2FkV2FsbGV0KCk7XG4gICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IG9wZW5XYWxsZXQod2FsbGV0KTtcbiAgICBjb25zb2xlLmxvZyhhY2NvdW50KTtcbn07XG5cbm1haW4oKTsiXX0=