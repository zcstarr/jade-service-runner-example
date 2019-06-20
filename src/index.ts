import { ServiceRunner } from "@etclabscore/jade-service-runner-client";
import { EthereumJSONRPC } from "@etclabscore/ethereum-json-rpc";
const unit = require("ethjs-unit");

const address = process.argv[2];

const serviceRunner = new ServiceRunner({
  transport: {
    host: "localhost",
    port: 8002,
    type: "http",
  },
});

const showBalance = (balance: string) => {
  // tslint:disable-next-line:no-console
  console.log(unit.fromWei(balance, "ether").toString(10));
};

const start = async () => {
  const services = await serviceRunner.listRunningServices();
  // tslint:disable-next-line:no-console
  console.log(services);
  await serviceRunner.installService("multi-geth", "1.9.0");
  const multiGethConfig = await serviceRunner.startService("multi-geth", "1.9.0", "dev");
  const port =  parseInt(multiGethConfig.rpcPort, 10);
  // tslint:disable-next-line:no-console
  console.log(multiGethConfig);
  const ethClient = new EthereumJSONRPC({
    transport: {
      host: "localhost",
      type: "http",
      port,
    }});
  setTimeout(async () => {
    const balance = await ethClient.eth_getBalance(address, "0x0") as string;
    showBalance(balance);
  }, 10000);
};

start();
