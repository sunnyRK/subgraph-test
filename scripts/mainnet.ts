import hre from "hardhat";
import { dai } from '@studydefi/money-legos/erc20';

async function main() {
  const ethers = hre.ethers
  let accounts = await ethers.getSigners();
  const { provider, getContractAt } = ethers;

  let signer = await ethers.provider.getSigner(accounts[0].address)
  let daiContract = await getContractAt(dai.abi, dai.address, signer);

  const filters = daiContract.filters.Transfer()
  console.log(filters)

  const events = await provider.getLogs(filters)
  console.log('events: ', events)
}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});
