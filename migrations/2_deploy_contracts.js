const Tether = artifacts.require('Tether')
const URI = artifacts.require('URI')
const DecentralBank = artifacts.require('DecentralBank')

module.exports = async function(deployer, network, accounts) {
    // Despliega contrato tether
    await deployer.deploy(Tether)
    const tether = await Tether.deployed()

    await deployer.deploy(URI)
    const uri = await URI.deployed()

    await deployer.deploy(DecentralBank, uri.address, tether.address)
    const decentralBank = await DecentralBank.deployed()
    
    // transferir 1 millon de URI al banco
    await uri.transfer(decentralBank.address, '1000000000000000000000000')

    // transferir 100 tether al inversionista
    await tether.transfer(accounts[1], '100000000000000000000')
}