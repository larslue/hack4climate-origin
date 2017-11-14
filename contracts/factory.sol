pragma solidity ^0.4.0;

import "./Origin.sol";
import "./OriginalCoin.sol";




contract OriginFactory is Ownable {

  
  address[] activeOrigins;
  address[] authorities; 
  OriginalCoin public token;
  
  
  
  function OriginFactory(address tokenAdress) {
      
     
      token = OriginalCoin(tokenAdress);
      token.mint(this,1000);
  }


  function createOrigin(uint _amount, address _issuer, bytes32 _long, bytes32 _lat, bytes32 _method, uint _timestamp) returns (address){
    address newOrigin = new Origin(_amount,_issuer,_long,_lat,_method,_timestamp);
    activeOrigins.push(newOrigin);
    return (newOrigin);
    
  }
}
