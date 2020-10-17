// Import
const { ApiPromise, WsProvider } = require('@polkadot/api');

function main() {
  // Construct
  const wsProvider = new WsProvider('wss://rpc.polkadot.io');
  return ApiPromise.create({ provider: wsProvider })
    .then(api => Promise.all([
        api.rpc.system.chain(), // Retrieve the chain name
        api.rpc.chain.getHeader(), // Retrieve the latest header
      ]))
    .then(([chain, lastHeader]) => {
      console.log(`${chain}: last block \nhash: ${lastHeader.hash}\ninfo: ${JSON.stringify(lastHeader, null, 2)}`);
    });

}

main().catch(err => console.log(err)).finally(() => process.exit(0));