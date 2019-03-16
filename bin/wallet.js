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
const prompt = require('prompt');
const args = process.argv.slice(2);
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
            console.log(wallet);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2FsbGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxnQ0FBeUQ7QUFFekQsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRW5DLE1BQU0sWUFBWSxHQUFHLEdBQUcsRUFBRTtJQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLDBEQUEwRDtRQUN0RSwrRkFBK0Y7UUFDL0YsdUdBQXVHLENBQUMsQ0FBQztJQUN6RyxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsaUJBQVcsU0FBUyxDQUFDO0lBQ3pDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDVCxVQUFVLEVBQUc7WUFDUCxRQUFRLEVBQUU7Z0JBQ04sV0FBVyxFQUFFLFVBQVU7Z0JBQ3ZCLE1BQU0sRUFBRSxJQUFJO2FBQ2Y7WUFDRCxXQUFXLEVBQUU7Z0JBQ1QsV0FBVyxFQUFFLG1CQUFtQjtnQkFDaEMsTUFBTSxFQUFFLElBQUk7YUFDZjtTQUNKO0tBQ0osRUFBRSxDQUFDLENBQUMsRUFBQyxNQUFNLEVBQUUsRUFBRTtRQUNaLElBQUcsTUFBTSxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUMsV0FBVyxFQUFDO1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztZQUM1QyxZQUFZLEVBQUUsQ0FBQztTQUNsQjthQUFJO1lBQ0QsTUFBTSxNQUFNLEdBQUcsd0JBQWtCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdkI7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQztBQUVGLE1BQU0sSUFBSSxHQUFHLEdBQVMsRUFBRTtJQUNwQixJQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUM7UUFDcEIsSUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFDO1lBQ3BCLFlBQVksRUFBRSxDQUFDO1NBQ2xCO0tBQ0o7QUFDTCxDQUFDLENBQUEsQ0FBQztBQUVGLElBQUksRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTU9TQUlDX05BTUUsIGNyZWF0ZVNpbXBsZVdhbGxldCB9IGZyb20gXCIuLi9zcmNcIjtcblxuY29uc3QgcHJvbXB0ID0gcmVxdWlyZSgncHJvbXB0Jyk7XG5jb25zdCBhcmdzID0gcHJvY2Vzcy5hcmd2LnNsaWNlKDIpO1xuXG5jb25zdCBjcmVhdGVXYWxsZXQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1BsZWFzZSBFbnRlciBhIHVuaXF1ZSBQYXNzd29yZCAoOCBDaGFyYWN0ZXIgbWluaW11bSApLlxcbicrXG4gICAgJ1RoaXMgcGFzc3dvcmQgd2lsbCBiZSB1c2VkIHRvIGVuY3J5cHQgeW91ciBwcml2YXRlIGtleSBhbmQgbWFrZSB3b3JraW5nIHdpdGggd2FsbGV0IGVhc2llci5cXG4nK1xuICAgICdTdG9yZSB0aGlzIHBhc3N3b3JkIHNvbWV3aGVyZSBzYWZlLiBJZiB5b3UgbG9zZSBvciBmb3JnZXQgaXQgeW91IHdpbGwgbmV2ZXIgYmUgYWJsZSB0byB0cmFuc2ZlciBmdW5kcycpO1xuICAgIHByb21wdC5tZXNzYWdlID0gYCR7TU9TQUlDX05BTUV9IHdhbGxldGA7XG4gICAgcHJvbXB0LnN0YXJ0KCk7XG4gICAgcHJvbXB0LmdldCh7XG4gICAgICBwcm9wZXJ0aWVzOiAge1xuICAgICAgICAgICAgcGFzc3dvcmQ6IHtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Bhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICBoaWRkZW46IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb25maXJtUGFzczoge1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUmUtZW50ZXIgcGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgIGhpZGRlbjogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgKF8scmVzdWx0KSA9PiB7XG4gICAgICAgIGlmKHJlc3VsdC5wYXNzd29yZCAhPT0gcmVzdWx0LmNvbmZpcm1QYXNzKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdcXG5QYXNzd29yZHMgZG8gbm90IG1hdGNoXFxuXFxuJyk7XG4gICAgICAgICAgICBjcmVhdGVXYWxsZXQoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25zdCB3YWxsZXQgPSBjcmVhdGVTaW1wbGVXYWxsZXQocmVzdWx0LnBhc3N3b3JkKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHdhbGxldCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmNvbnN0IG1haW4gPSBhc3luYyAoKSA9PiB7XG4gICAgaWYoYXJnc1swXSA9PT0gJ3dhbGxldCcpe1xuICAgICAgICBpZihhcmdzWzFdID09PSAnY3JlYXRlJyl7XG4gICAgICAgICAgICBjcmVhdGVXYWxsZXQoKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbm1haW4oKTsiXX0=