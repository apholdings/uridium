pragma solidity ^0.8.10;

import './URI.sol';
import './Tether.sol';

contract DecentralBank {

    string public name = 'Uridium Finance';
    address public owner;
    Tether public tether;
    URI public uri;

    address[] public stakers;

    mapping(address => uint) public stakingBalance;
    mapping(address => bool) public hasStaked;
    mapping(address => bool) public isStaking;

    constructor(URI _uri, Tether _tether) {
        uri = _uri;
        tether = _tether;
        owner = msg.sender;
    }

    // Funcion de Staking
    function depositTokens(uint _amount) public {
        // Requerir cantidad de staking debe ser mayor que 0
        require(_amount > 0, 'amount cannot be 0');

        // Transferir tether tokens al contrato para staking
        tether.transferFrom(msg.sender, address(this), _amount);

        // Actualizar balance de staking
        stakingBalance[msg.sender] = stakingBalance[msg.sender] + _amount;

        if(!hasStaked[msg.sender]) {
            stakers.push(msg.sender);
        }

        // Actualizar balance de staking
        isStaking[msg.sender] = true;
        hasStaked[msg.sender] = true;
    }

    // Funcion de UnStaking
    function unstakeTokens() public {
        uint balance = stakingBalance[msg.sender];

        // Requerir que la cantidad sea mayor que cero
        require(balance > 0, 'Staking balance must be above 0');

        // Transferir tokens a la persona
        tether.transfer(msg.sender, balance);

        // Resetear balance de staking
        stakingBalance[msg.sender] = 0;

        // Actualizar estado isStaking
        isStaking[msg.sender] = false;
    }

    // Funcion de Recompensas
    function issueTokens() public {
        // Solo el dueno debe poder enviar tokens
        require(msg.sender == owner, 'Only the ownerr can make that call');

        // Recompensar al cliente por hacer staking
        for (uint i=0; i<stakers.length; i++) {
              address recipient = stakers[i]; 
              uint balance = stakingBalance[recipient] / 9;
              if(balance > 0) {
              uri.transfer(recipient, balance);
          }
        }
    }

}