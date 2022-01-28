require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remember hole guess nasty flower seat'; 
let testAccounts = [
"0xac669b37f09840a57621794a0f6871bc4701f51dc749a10a4f763b863790a730",
"0x69a2394673e33aac7165c3ddb23a55f195684148f4d04aeee02df1ebbb9b6f75",
"0xcc0f8f8817928a7f9f64d53f7f680d025e200c30af77d954a3300c4092528029",
"0xd8cc8d4d3503ddaff28e335cdc30882f3ce1369e1a23fda71517f8f1125ed031",
"0x33fc6d78ccbcc08e16fa165196b0064960581d370581bb40e008d93db3ea6ef1",
"0x94c0af7450853b834f6dd447b15582a5866dba60ebf7e5e4c99280b95c0ac976",
"0x11313b09abf8baca1beb2bbb9fcc170d5d9596eebd97fc84c65415b0a22bb675",
"0x773d457757457a2914322c4ec7587401e4a446f76a1d2beb600448d09bd2f1a6",
"0xa31eead3603af0f8eeda1d08b75f95a712dcbdb97b4de78d05dec0e31f65822e",
"0x8d7e4636410248ab3b8cb0fc9378c67fccb41ee8925100c1131c54e652fa3442"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

