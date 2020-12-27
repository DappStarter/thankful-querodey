require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drink fortune strategy guard render remind concert grace nature suit slab'; 
let testAccounts = [
"0x4db6f3f3f9dcda1b3b3bd9fd288b130840ffd003933fd595c4010d5f979a06a7",
"0x72cc2ad308b3e0dd508f93017f82ae71ce745cf11d0ae63c8eda2c14c85502f1",
"0xb2143da5f58c479259b9715261694b90a57081c2388aab608d1d85a293f6daea",
"0x84fd48d9545f4f8cfb19aab7e20bb66c602e55460d06cab0f9855e73ba77a841",
"0x4250706bde0b3c51243e73971c4a4ab32b68932d0ed2c1d286e89175e5a36c48",
"0xb8a1ff55ae385c8866681674eef75e59659b7aa8ff807cee3a61c50d29927423",
"0xabbb7336fc16c2d474db99753379aab0828d9ee83a6b4398bb17ba68f77a1a31",
"0xa580f8588ac802f8d39845abb785074158c0f4208adc467324683ac4f9519fa6",
"0xbbd7a2aa6d2aff4a9ca05d40d243fb1c08534701e5ddc26bee672071791c57e5",
"0xc5666570f0f0b7648ba33b0998612a7f84ce7a0cf338c3094f4069c6578563d1"
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
            version: '^0.5.11'
        }
    }
};
