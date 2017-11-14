pragma solidity ^0.4.0;

import "./Origin.sol";
import "./OriginalCoin.sol";




contract OriginFactory is Ownable {

  
  address[] activeOrigins;
  
  OriginalCoin public token;
  
  address tokenAdress = 0x0;
  
  function OriginFactory(address _tokenAdress) {
      
     tokenAdress= _tokenAdress;
      token = OriginalCoin(tokenAdress);
      
  }

  function mintTokens(uint _amount){
      
      token.mint(this,_amount);
  }
  
  
  function createOrigin(uint _amount, address _issuer, bytes32 _long, bytes32 _lat, bytes32 _method, uint _timestamp) returns (address){
    //200,"0x3Dd90D5eb224C4637f885b7476eCCBA6b3Aa45C5",33,33,3,33
    address newOrigin = new Origin(_amount,_issuer,_long,_lat,_method,_timestamp,tokenAdress);
    activeOrigins.push(newOrigin);
    return (newOrigin);
    
  }
}
