import { ServiceRunner } from "@etclabscore/jade-service-runner-client";
import  SimpleMath  from "./client";

const unit = require("ethjs-unit");

const address = process.argv[2];

const serviceRunner = new ServiceRunner({
  transport: {
    host: "localhost",
    port: 8002,
    type: "http",
  },
});

const start = async () => {
  const services = await serviceRunner.listRunningServices();
  // tslint:disable-next-line:no-console
  console.log(services);
  await serviceRunner.installService("simple-math", "1.0.0");
  const simpleMathConfig = await serviceRunner.startService("simple-math", "1.0.0", "dev");
  const port =  parseInt(simpleMathConfig.rpcPort, 10);
  // tslint:disable-next-line:no-console
  console.log(simpleMathConfig);
  const mathClient = new SimpleMath({
    transport: {
      host: "localhost",
      type: "http",
      port,
    }});
  setTimeout(async () => {
    const nine = await mathClient.addition(2, 2);
    console.log(nine);
  }, 1000);
};

start();
