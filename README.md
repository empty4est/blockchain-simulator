# Blockchain Simulator

An offline blockchain that simulates the Bitcoin protocol with signed wallet transactions. The blockchain can be modified to increase the difficulty of the proof-of-work algorithm and mining rewards.


---

## Technologies

- JavaScript
- Node.js

---

## How to Get Started


- [Install Dependencies](#install-dependencies)
- [Run Application](#run-application)
- [Creating Wallet](#creating-wallet)
- [Interacting with the Blockchain](#interacting-with-the-blockchain)
- [Modifying the Blockchain](#modifying-the-blockchain)


---

### Install Dependencies

```
npm install --save crypto.js
npm install elliptic
```
### Run Application

```
node main.js
```
---

## Creating Wallet
Generate a Private and Public Key pair:
```
node keygenerator.js
```
*(A set of public/private key pairs can be found in walletAddresses.txt)*

Define new private key and wallet address:
```javascript
const newPrivateKey = ec.keyFromPrivate('generatedPrivateKey');
const newWalletAddress = newPrivateKey.getPublic('hex');
```
*(Provide the generated private key from previous step)*

---

## Interacting with the Blockchain
The blockchain can be interacted with **main.js**.

### Initialize Blockchain
```javascript
let emptyCoin = new Blockchain();
```
### Creating Transaction
Must include sender and recipient wallet address, and the amount that is being sent.
```javascript
const tx1 = new Transaction(senderWalletAddress, recipientWalletAddress, amountToBeSent);
```
To sign the created transaction, the private key of the sender must be provided.
```javascript
tx1.signTransaction(senderPrivateKey);
```
### Adding Transaction to Blockchain
Once, a transaction has been signed, it can be added to the list of pending transactions to be mined on the Blockchain.
```javascript
emptyCoin.addTransaction(tx1);
```
### Mine Pending Transactions
To mine a pending transaction, a wallet address must be provided, so the mining reward may be sent to that address.
```javascript
emptyCoin.minePendingTransactions(recipientOfMiningRewardWalletAddress);
```
---
## Modifying the Blockchain
All code related to the blockchain is under **blockchain.js**.
### Proof-of-Work
To change the difficulty of the proof-of-work-algorithm, modify the difficulty variable inside the Blockchain class. This will change the amount of leading zero's required to recieve a reward.
```javascript
class Blockchain{
    constructor(){

        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2; // <-- Edit this Variable
        this.pendingTransactions = [];
        this.miningReward = 100;

    }
    ...
```
### Mining Reward
To change the mining reward, modify the miningReward variable inside the Blockchain class.
```javascript
class Blockchain{
    constructor(){

        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2;
        this.pendingTransactions = [];
        this.miningReward = 100; // <-- Edit this Variable

    }
    ...
```

---

## References

[This project was built following a great tutorial provided by Simply Explained.](https://www.youtube.com/playlist?list=PLzvRQMJ9HDiTqZmbtFisdXFxul5k0F-Q4)

---
[Back To The Top](#blockchain-simulator)
