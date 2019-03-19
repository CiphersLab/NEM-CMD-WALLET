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
const downloadWallet = (wallet) => {
    console.log('\nDownloading wallet for your convenince. \n' +
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
});
main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2FsbGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxnQ0FBeUQ7QUFDekQsNkNBQXFEO0FBRXJELE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFekIsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25DLE1BQU0sU0FBUyxHQUFHLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLGlCQUFXLGNBQWMsQ0FBQztBQUMvRCxNQUFNLFdBQVcsR0FBRyxHQUFHLFNBQVMsSUFBSSxpQkFBVyxhQUFhLENBQUM7QUFHN0QsTUFBTSxjQUFjLEdBQUcsQ0FBQyxNQUFvQixFQUFFLEVBQUU7SUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4Q0FBOEM7UUFDMUQsK0VBQStFO1FBQy9FLDZKQUE2SixDQUFDLENBQUM7SUFHL0osSUFBRyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUM7UUFDekIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUMzQjtJQUNELElBQUksUUFBUSxHQUFHLFdBQVcsQ0FBQztJQUMzQixJQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUM7UUFDdkIsTUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QyxRQUFRLEdBQUcsR0FBRyxTQUFTLElBQUksS0FBSyxJQUFJLGlCQUFXLGFBQWEsQ0FBQztLQUNoRTtJQUNELEVBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDcEQsQ0FBQyxDQUFDO0FBRUYsTUFBTSxZQUFZLEdBQUcsR0FBRyxFQUFFO0lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMERBQTBEO1FBQ3RFLCtGQUErRjtRQUMvRix1R0FBdUcsQ0FBQyxDQUFDO0lBQ3pHLE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxpQkFBVyxTQUFTLENBQUM7SUFDekMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNULFVBQVUsRUFBRztZQUNQLFFBQVEsRUFBRTtnQkFDTixXQUFXLEVBQUUsVUFBVTtnQkFDdkIsTUFBTSxFQUFFLElBQUk7YUFDZjtZQUNELFdBQVcsRUFBRTtnQkFDVCxXQUFXLEVBQUUsbUJBQW1CO2dCQUNoQyxNQUFNLEVBQUUsSUFBSTthQUNmO1NBQ0o7S0FDSixFQUFFLENBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ1osSUFBRyxNQUFNLENBQUMsUUFBUSxLQUFLLE1BQU0sQ0FBQyxXQUFXLEVBQUM7WUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQzVDLFlBQVksRUFBRSxDQUFDO1NBQ2xCO2FBQUk7WUFDRCxNQUFNLE1BQU0sR0FBRyx3QkFBa0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFbkQsTUFBTSxJQUFJLEdBQUcsSUFBSSxzQkFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGlCQUFXLGdDQUFnQyxDQUFDLENBQUM7WUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsaUJBQVcsSUFBSSxDQUFDLENBQUM7WUFDeEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUMxQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDMUI7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQztBQUVGLE1BQU0sSUFBSSxHQUFHLEdBQVMsRUFBRTtJQUNwQixJQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUM7UUFDcEIsSUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFDO1lBQ3BCLFlBQVksRUFBRSxDQUFDO1NBQ2xCO0tBQ0o7QUFDTCxDQUFDLENBQUEsQ0FBQztBQUVGLElBQUksRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTU9TQUlDX05BTUUsIGNyZWF0ZVNpbXBsZVdhbGxldCB9IGZyb20gXCIuLi9zcmNcIjtcbmltcG9ydCB7IFBhc3N3b3JkLCBTaW1wbGVXYWxsZXQgfSBmcm9tICduZW0tbGlicmFyeSc7XG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IG9zID0gcmVxdWlyZSgnb3MnKTtcblxuY29uc3QgcHJvbXB0ID0gcmVxdWlyZSgncHJvbXB0Jyk7XG5jb25zdCBhcmdzID0gcHJvY2Vzcy5hcmd2LnNsaWNlKDIpO1xuY29uc3QgUEFUSF9IT01FID0gYCR7b3MuaG9tZWRpcigpfS8ke01PU0FJQ19OQU1FfS13YWxsZXRzLWRldmA7XG5jb25zdCBQQVRIX1dBTExFVCA9IGAke1BBVEhfSE9NRX0vJHtNT1NBSUNfTkFNRX0td2FsbGV0LndsdGA7XG5cblxuY29uc3QgZG93bmxvYWRXYWxsZXQgPSAod2FsbGV0OiBTaW1wbGVXYWxsZXQpID0+IHtcbiAgICBjb25zb2xlLmxvZygnXFxuRG93bmxvYWRpbmcgd2FsbGV0IGZvciB5b3VyIGNvbnZlbmluY2UuIFxcbicgKyBcbiAgICAnUGxlYXNlIHN0b3JlIHNvbWVwbGFjZSBzYWZlLiBUaGUgcHJpdmF0ZSBrZXkgaXMgZW5jcnlwdGVkIGJ5IHlvdXIgcGFzc3dvcmQuXFxuJytcbiAgICAnVG8gbG9hZCB0aGlzIHdhbGxldCBvbiBhIG5ldyBjb21wdXRlciB5b3Ugd291bGQgc2ltcGx5IGltcG9ydCB0aGUgLndsdCBmaWxlIGludG8gdGhpcyBhcHAgYW5kIGVudGVyIHlvdXIgcGFzc3dvcmQgYW5kIHlvdSB3aWxsIGJlIGFibGUgdG8gc2lnbiB0cmFuc2FjdGlvbnMnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhQQVRIX0hPTUUpO1xuICAgIC8vIGNvbnNvbGUubG9nKFBBVEhfV0FMTEVUKTtcbiAgICBpZighZnMuZXhpc3RzU3luYyhQQVRIX0hPTUUpKXtcbiAgICAgICAgZnMubWtkaXJTeW5jKFBBVEhfSE9NRSk7XG4gICAgfVxuICAgIGxldCBmdWxsUGF0aCA9IFBBVEhfV0FMTEVUO1xuICAgIGlmKGZzLmV4aXN0c1N5bmMoZnVsbFBhdGgpKXtcbiAgICAgICAgY29uc3Qgc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIGZ1bGxQYXRoID0gYCR7UEFUSF9IT01FfS8ke3N0YW1wfS0ke01PU0FJQ19OQU1FfS13YWxsZXQud2x0YDsgICAgXG4gICAgfVxuICAgIGZzLndyaXRlRmlsZVN5bmMoZnVsbFBhdGgsIHdhbGxldC53cml0ZVdMVEZpbGUoKSk7XG4gICAgY29uc29sZS5sb2coYERvd25sb2FkZWQgd2FsbGV0IHRvICR7ZnVsbFBhdGh9YCk7XG59O1xuXG5jb25zdCBjcmVhdGVXYWxsZXQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1BsZWFzZSBFbnRlciBhIHVuaXF1ZSBQYXNzd29yZCAoOCBDaGFyYWN0ZXIgbWluaW11bSApLlxcbicrXG4gICAgJ1RoaXMgcGFzc3dvcmQgd2lsbCBiZSB1c2VkIHRvIGVuY3J5cHQgeW91ciBwcml2YXRlIGtleSBhbmQgbWFrZSB3b3JraW5nIHdpdGggd2FsbGV0IGVhc2llci5cXG4nK1xuICAgICdTdG9yZSB0aGlzIHBhc3N3b3JkIHNvbWV3aGVyZSBzYWZlLiBJZiB5b3UgbG9zZSBvciBmb3JnZXQgaXQgeW91IHdpbGwgbmV2ZXIgYmUgYWJsZSB0byB0cmFuc2ZlciBmdW5kcycpO1xuICAgIHByb21wdC5tZXNzYWdlID0gYCR7TU9TQUlDX05BTUV9IHdhbGxldGA7XG4gICAgcHJvbXB0LnN0YXJ0KCk7XG4gICAgcHJvbXB0LmdldCh7XG4gICAgICBwcm9wZXJ0aWVzOiAge1xuICAgICAgICAgICAgcGFzc3dvcmQ6IHtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICBoaWRkZW46IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb25maXJtUGFzczoge1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUmUtZW50ZXIgcGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgIGhpZGRlbjogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgKF8scmVzdWx0KSA9PiB7XG4gICAgICAgIGlmKHJlc3VsdC5wYXNzd29yZCAhPT0gcmVzdWx0LmNvbmZpcm1QYXNzKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdcXG5QYXNzd29yZHMgZG8gbm90IG1hdGNoXFxuXFxuJyk7XG4gICAgICAgICAgICBjcmVhdGVXYWxsZXQoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25zdCB3YWxsZXQgPSBjcmVhdGVTaW1wbGVXYWxsZXQocmVzdWx0LnBhc3N3b3JkKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cod2FsbGV0KTtcbiAgICAgICAgICAgIGNvbnN0IHBhc3MgPSBuZXcgUGFzc3dvcmQocmVzdWx0LnBhc3N3b3JkKTtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnQgPSB3YWxsZXQub3BlbihwYXNzKTtcbiAgICAgICAgICAgIGNvbnN0IGFkZHJlc3MgPSBhY2NvdW50LmFkZHJlc3MucHJldHR5KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtNT1NBSUNfTkFNRX0gd2FsbGV0IHN1Y2Nlc3NmdWxseSBjcmVhdGVkXFxuYCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgWW91IGNhbiBub3cgc3RhcnQgc2VuZGluZyBhbmQgcmVjZWl2aW5nICR7TU9TQUlDX05BTUV9XFxuYCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUHVibGljIEFkZHJlc3M6ICR7YWRkcmVzc31gKTtcbiAgICAgICAgICAgIGRvd25sb2FkV2FsbGV0KHdhbGxldCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmNvbnN0IG1haW4gPSBhc3luYyAoKSA9PiB7XG4gICAgaWYoYXJnc1swXSA9PT0gJ3dhbGxldCcpe1xuICAgICAgICBpZihhcmdzWzFdID09PSAnY3JlYXRlJyl7XG4gICAgICAgICAgICBjcmVhdGVXYWxsZXQoKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbm1haW4oKTsiXX0=