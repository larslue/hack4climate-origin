pragma solidity ^0.4.0;

import "./Origin.sol";

contract Ownable {

  address public owner;

  function Ownable() {
    owner = msg.sender;
  }

  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

  function transferOwnership(address newOwner) onlyOwner {
    require(newOwner != address(0));
    owner = newOwner;
  }
}


contract OriginFactory {

  
  address[] activeOrigins;
  address[] authorities; 
  
  
  
  function OriginFactory() {
      
      authorities.push(msg.sender);
      
  }

  function addAutority(address authority) onlyOwner{
      
      authorities.push(authority);
      
  }

  function createOrigin(uint amount, address issuer,bytes32 long, bytes32 lat, bytes32 method,uint timestamp) returns (address){
    address newOrigin = new Origin(amount,issuer,long,lat,method,timestamp,authorities);
    activeOrigins.push();
    return (newOrigin);
    
  }
}
