const NovaToken = artifacts.require('NovaToken')
const SNovaToken = artifacts.require('SNovaToken')
const FeeManager = artifacts.require('FeeManager')
const FeeManagerDecentralized = artifacts.require('DecentralizedFeeManager')
const NebulaBonusAggregator = artifacts.require('NebulaBonusAggregator')
const NebulaMoneyPot = artifacts.require('NebulaMoneyPot')
const MasterNebula = artifacts.require('MasterNebula')

const swapPenaltyMaxPeriod = 84600;
const swapPenaltyMaxPerSNova = 30;
const owner = '0x729F3cA74A55F2aB7B584340DDefC29813fb21dF';
const _teamAddr = '0x641bE13ce540384E14586906900518204090D0da';
const _moneyPotShare = 7500;
const _devaddr =  '0x729F3cA74A55F2aB7B584340DDefC29813fb21dF';
const _NovaPerBlock = '1000000000000000000';
const _startBlock = 10387726;
const _initialUpdateMoneyPotPeriodNbBlocks = 28880;
const _Nova = '0x56E344bE9A7a7A1d27C854628483Efd67c11214F';
const _snova = '0x0c0bf2bD544566A11f59dC70a8F43659ac2FE7c2';

module.exports = async function(deployer, network, accounts) {
   
    // await deployer.deploy(NovaToken)
    // const _Nova = await NovaToken.deployed()

    // await deployer.deploy(SNovaToken, swapPenaltyMaxPeriod, swapPenaltyMaxPerSNova)
    // const _sNova = await SNovaToken.deployed()

    // await deployer.deploy(NebulaBonusAggregator)
    // const _bonusAggregator = await NebulaBonusAggregator.deployed()

    await deployer.deploy(FeeManagerDecentralized, _teamAddr, _moneyPotShare, _snova)
    // const _feeAddress = await FeeManager.deployed()
    // const _feeManager = await FeeManager.deployed()

    // await deployer.deploy(MasterNebula, 
    //     _Nova.address,
    //     _sNova.address,
    //     _bonusAggregator.address,
    //     _devaddr,
    //     _feeAddress.address,
    //     _NovaPerBlock,
    //     _startBlock
    //     )
    // const _masterNebula = await MasterNebula.deployed()

    // await deployer.deploy(NebulaMoneyPot, 
    //     _sNova.address, 
    //     _feeManager.address, 
    //     _masterNebula.address, 
    //     _startBlock, 
    //     _initialUpdateMoneyPotPeriodNbBlocks
    //     )

    // await _Nova.mint(accounts[0], '1000000000000000000000')
}