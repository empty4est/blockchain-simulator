const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const senderPrivateKey = ec.keyFromPrivate('da6a00198b55880a39cae6eef0b852085ea23f44fb116dbcbf4a2debbf9d60a8');
const senderWalletAddress = senderPrivateKey.getPublic('hex');

const recipientKey = ec.keyFromPrivate('c608da91ad3e40af7b16ae16a9c23e2d6f03ae307fee547ea035821f351102ee');
const recipientWalletAddress = recipientKey.getPublic('hex');


let emptyCoin = new Blockchain();

const tx1 = new Transaction(senderWalletAddress, recipientWalletAddress, 10);
tx1.signTransaction(senderPrivateKey);
emptyCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
emptyCoin.minePendingTransactions(senderWalletAddress);

console.log('\nSender balance is', emptyCoin.getBalanceOfAddress(senderWalletAddress));
console.log('\nRecipient balance is', emptyCoin.getBalanceOfAddress(recipientWalletAddress));
