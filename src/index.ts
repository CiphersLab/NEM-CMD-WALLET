import { NEMLibrary, NetworkTypes, Password, SimpleWallet, Account, AccountHttp, Asset } from 'nem-library';


NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

export const MOSAIC_NAME = 'khanani';

export const createSimpleWallet = (password: string): SimpleWallet =>{
    const pass = new Password(password);
    return SimpleWallet.create(`${MOSAIC_NAME}-wallet`,pass);
};

export const getAccountBalances =  (account: Account): Promise<Array<Asset>> =>{
    return new Promise<Array<Asset>>((resolve,reject) => {    
        const accountHttp = new AccountHttp();
        accountHttp.getAssetsOwnedByAddress(account.address).subscribe(mosaics =>{
            resolve(mosaics); 
        }, err => {
            reject(err);
        });
    });
};

export const mosaicBalance = (balances: Array<Asset>): number => {
    const found = balances.find(mosaic => {
        return mosaic.assetId.name === MOSAIC_NAME;
    });
    if(!found) return 0;
    return found.quantity;
};

export const xemBalance = (balances: Array<Asset>): number => {
    const xemMosaic = balances.find(mosaic => {
        return mosaic.assetId.name === 'xem';
    });
    if(!xemMosaic) return 0;
    return xemMosaic.quantity;
}