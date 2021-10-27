import hre from "hardhat";
import USDLemma from "../abis/USDLemma.json";
import xUSDL from "../abis/xUSDL.json";
import arbAddresses from "../config/arb-rinkeby.json";

async function main() {
  const ethers = hre.ethers
  let accounts = await ethers.getSigners();
  const { provider, getContractAt } = ethers;

  let signer = await ethers.provider.getSigner(accounts[0].address)
  let USDLemmaContract = await getContractAt(USDLemma, arbAddresses.USDLemma, signer);
  let xUSDLContract = await getContractAt(xUSDL, arbAddresses.XUSDL, signer);

  const balance = await USDLemmaContract.balanceOf('0x1eed19957e0a81aed9a80f09a3ccead83ea6d86b')
  console.log('random arbitrum rinkeby balance: ', balance.toString())

  // Rebalnce event 
  const filters = USDLemmaContract.filters.Rebalance()
  console.log('filters: ', filters)

  const events = await provider.getLogs(filters)
  console.log('events: ', events)

  // const filters2 = daiContract.filters.Transfer()
  // const events2 = await provider.getLogs(filters2)
  // console.log('events2: ', events2)

  // const event = 'Rebalance(uint256 indexed dexIndex, address indexed collateral, int256 amount)'
  // const event = USDLemmaContract.interface.events.Transfer

  // const events = await provider.getLogs({
  //   fromBlock: 5781797,
  //   toBlock: 'latest',
  //   address: arbAddresses.USDLemma,
  //   topic: event,
  // })

}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});
