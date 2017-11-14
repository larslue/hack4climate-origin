pragma solidity ^0.4.16;
import "./OriginalCoin.sol";


contract Origin {
  uint public amount;
  uint public stake;
  address public issuer;
  address public fraudClaimer;
  bytes32 public long;
  bytes32 public lat;
  bytes32 public method;
  uint public timestamp;
  bool public fraud;
  uint public creationTime;
  address[] public authorities;
  uint public selectedAuthority;
  uint public fraudStake;
  OriginalCoin public token;
  
  modifier ownlyIssuer() {
    require (msg.sender == issuer);
    _;
  }

  modifier noFraud() {
    require (fraud == false);
    _;
  }

  modifier fraudClaimed() {
    require (fraud == true);
    _;
  }

  modifier periodPassed() {
    require (now >= creationTime + 21 days);
    _;
  }

  modifier periodNotPassed() {
    require (now < creationTime + 21 days);
    _;
  }

  modifier enoughStakePaid() {
    require (msg.value == (amount/10));
    _;
  }

  modifier  isFraudClaimer() {
    require (msg.sender == fraudClaimer);
    _;
  }

  modifier isSelectedAuthority() {
    require (msg.sender == authorities[selectedAuthority]);
    _;
  }

  function Origin(uint _amount, address _issuer, bytes32 _long, bytes32 _lat, bytes32 _method, uint _timestamp,address tokenAdress) payable {
    amount = _amount;
    stake = msg.value;
    issuer = _issuer;
    long = _long;
    lat = _lat;
    method = _method;
    timestamp = _timestamp;
    fraud = false;
    creationTime = now;
    token = OriginalCoin(tokenAdress);
  }

  function claimOrigin() ownlyIssuer() noFraud() periodPassed(){
      //something like that
      issuer.transfer(stake);
      token.mint(issuer,amount);
      
  }

  function fraudDetected() noFraud() periodNotPassed() {
    fraud = true;
    fraudClaimer = msg.sender;
  }

  function payFraudStake() fraudClaimed() isFraudClaimer() payable {
    fraudStake += msg.value;
    selectAuthority();
  }

  function selectAuthority() private {
    selectedAuthority = uint(block.blockhash(block.number - 1)) % authorities.length;
  }

  function fraudDecision(bool _decision) fraudClaimed() isSelectedAuthority() {
    if(_decision) {

    } else {

    }
  }

}
