
import {AES,enc} from "crypto-js";
import secureLocalStorage from "react-secure-storage";

const ENCRYPTION_KEY = import.meta.env.VITE_ENCRYPTION_KEY;

//set up encrypt with crypto-js to encrypt the accesstoken

export const encryptedToken = (encrypted) =>{
    if(encrypted){
    const dataEncrypted = AES.encrypt(encrypted,ENCRYPTION_KEY).toString();
    console.log("===>dataEncrypted",dataEncrypted);
    return dataEncrypted;
    }
    return null;
}

//store access token
export const storeAccessToken =(accessToken)=> {
    console.log("======>Access Token:<===== ",accessToken)
    const dataEncrypted = encryptedToken(accessToken);
    console.log("======>",dataEncrypted);
    secureLocalStorage.setItem(ENCRYPTION_KEY, dataEncrypted);

}

//descrypted accessToken
export const descryptedAccessToken = (encryptedToken)=>{
    if(encryptedToken){
        const descryptedAcessToken = AES.decrypt(encryptedToken, ENCRYPTION_KEY);
        return descryptedAcessToken.toString(enc.utf8);
    }
}
//getDecryptAccessToken
export const getDecryptedAccessToken = ()=>{
    const encryptedToken = secureLocalStorage.getItem(ENCRYPTION_KEY);
    console.log("The encryptedToken: ", encryptedToken);
    if(encryptedToken){
        return descryptedAccessToken(encryptedToken);
    }
    return null;

}