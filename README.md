# Subgraph-test

1). Make `.env` file on root folder and add below variable with your config,  

    MNEMONIC=''
    INFURA_API_KEY=
    ALCHEMY_API_KEY=5
    FORK_ENABLED="false"

## Install and compile

    yarn
    npx hardhat compile

## How to Test?

### Test on Arbitrum rinkeby for Rebalance event

    yarn arb-rinkeby-fork

### Test on Mainnet for Dai Transfer event

    yarn mainnet-fork
