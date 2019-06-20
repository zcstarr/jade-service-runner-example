const unit = require("ethjs-unit");

const address = process.argv[2];
const showBalance = (balance: string) => {
  // tslint:disable-next-line:no-console
  console.log(unit.fromWei(balance, "ether").toString(10));
};

const start = async () => { };

start();
