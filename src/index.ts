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

const erpc = new EthereumJSONRPC({
  transport: {
    host: "localhost",
    port: 8002,
    type: "http",
    path: "multi-geth/mainnet/1.9.2",
  },
});

console.log("starting client");
client.installService("multi-geth", "1.9.0")
  .then(() => client.listInstalledServices())
  .then(() => client.listRunningServices())
  .then(console.log) //tslint:disable-line
  .then(() => client.startService("multi-geth", "1.9.0", "mainnet"))
  .then(console.log)//tslint:disable-line
  .then(() => client.listRunningServices())
  .then(console.log)//tslint:disable-line
 client.startService("multi-geth", "1.9.0", "mainnet")
  .then(() => erpc.eth_getBalance("0xc1912fee45d61c87cc5ea59dae31190fffff232d", "0x0"))
  .then(console.log)
  .catch((e) => {
    console.log(e);//tslint:disable-line
    throw e;
  });


/*
import ServiceRunner from "@etclabscore/jade-service-runner-client";

// import { EthereumJSONRPC } from "@etclabscore/ethereum-json-rpc"; // <-- which one is it?
import ERPC from "@etclabscore/ethereum-json-rpc";


async() => {
  console.log("i exist");

  const serviceRunner = new ServiceRunner({
    transport: {
      type: "http",
      port: 8002,
      host: "localhost",
    },
  });
  
  await serviceRunner.installer.install("simple-math", "1.0.0");
  await serviceRunner.serviceManager.startService("simple-math", "1.0.0", "http");

  const ethClient = new EthClient({
  transport: {
    host: "localhost",
    port: 8002,
    type: "http",
    path: "multi-geth/mainnet/1.9.0",
  },
});

  
}
*/

// let mypath = new URL("multi-geth/kotti/1.9.2");
// let rpc = new ERPC({
//   transport: {
//     host: "localhost",
//     port: 8002,
//     type: "http",
//     // path: mypath.pathname, // <--- not allowed
//   },
// });


// serviceRunner.installService("multi-geth", "1.9.2")
//   .then(() => serviceRunner.startService("multi-geth", "1.9.2", "kotti"))
//   .then(() => serviceRunner.listRunningServices())
//   .then(console.log) //tslint:disable-line
//   .then(() => serviceRunner.rpc.request("eth_getBalance", ["0x000d836201318ec6899a67540690382780743280", "0x0"]))
//   .then(console.log) //tslint:disable-line
//   ;

// ================================================================

  /*
const unit = require("ethjs-unit");
import { ServiceRunner } from "@etclabscore/jade-service-runner-client";
import { EthereumJSONRPC } from "@etclabscore/ethereum-json-rpc";

const address = process.argv[2];
const showBalance = (balance: string) => {
  // tslint:disable-next-line:no-console
  console.log(unit.fromWei(balance, "ether").toString(10));
};

const start = async () => { };

start();
*/

// const ethClient = new EthClient({
//   transport: {
//     host: "localhost",
//     port: 8002,
//     type: "http",
//     path: "multi-geth/mainnet/1.9.0",
//   },
// });


  // var erpc; erpc = new EthereumJSONRPC(serviceConfig); 
// const erpc = new EthereumJSONRPC({
//   transport: {
//     host: "localhost",
//     port: 8002,
//     type: "http",
//     path: "multi-geth/kotti/1.9.2",
//   },
// });
  
  // .then(function() {
  //   console.log("doing it");
  //   var v = 
  //   // .then((val) => console.log(val))
  //   // console.log("bal", bal);
  //   .then(console.log) //tslint:disable-line
  // })
  // .then(console.log) //tslint:disable-line
  // ;
// const serviceConfig = await serviceRunner.startService("multi-geth", "1.9.2", "kotti");

// erpc.getBalance("0x0DEADBEEF");

// const successful = await serviceRunner.installService(serviceName, "1.9.2");
// const successful = await serviceRunner.installService(serviceName, "1.9.2");
// if (successful === false) throw new Error('Service not installed')


// console.log("starting serviceRunner");
// serviceRunner.installService("multi-geth", "1.9.2")
//   .then(() => serviceRunner.listInstalledServices())
//   .then(() => serviceRunner.listRunningServices())
//   .then(console.log) //tslint:disable-line
//   .then(() => serviceRunner.startService("multi-geth", "1.9.0", "mainnet"))
//   .then(console.log)//tslint:disable-line
//   .then(() => serviceRunner.listRunningServices())
//   .then(console.log)//tslint:disable-line
//  serviceRunner.startService("multi-geth", "1.9.0", "mainnet")
//   .then(() => ethClient.eth_getBalance("0xc1912fee45d61c87cc5ea59dae31190fffff232d", "0x0"))
//   .then(console.log)
//   .catch((e) => {
//     console.log(e);//tslint:disable-line
//     throw e;
//   });