// import ServiceRunner from "../build/generated-client/typescript";
// import EthClient from "../build/example-client/build";

import ServiceRunner from "@etclabscore/jade-service-runner-client";
import { EthereumJSONRPC } from "@etclabscore/ethereum-json-rpc"; // <-- which one is it?


const client = new ServiceRunner({
  transport: {
    type: "http",
    port: 8002,
    host: "localhost",
  },
});

const erpcKotti = new EthereumJSONRPC({
  transport: {
    host: "localhost",
    port: 8002,
    type: "http",
    path: "multi-geth/kotti/1.9.2",
  },
});

const erpcGoerli = new EthereumJSONRPC({
  transport: {
    host: "localhost",
    port: 8002,
    type: "http",
    path: "multi-geth/goerli/1.9.2",
  },
  
})

const clients = {
 "goerli" : erpcGoerli,
  "kotti" : erpcKotti,
}


const setupClients = async (environments: string[]) {
  const result = await client.installService("multi-geth", "1.9.2");
  console.log("result"); //tslint:disable-line
  environments.forEach(async (env)=>{
      await client.startService("multi-geth", "1.9.2", env); 
  });
  
}

const txHashKotti = "something";

async exec () {
 await setupClients(Object.keys(clients));
 const balance = await client.kotti.eth_getBalance("0xc1912fee45d61c87cc5ea59dae31190fffff232d", "0x0");
 // use BigNumber.js I think to pull this back ~ npm install  @types/bignumber.js 
 const txReciept = await clients.goerli.eth_sendRawTransaction(txHashKotti);
}

exec();
