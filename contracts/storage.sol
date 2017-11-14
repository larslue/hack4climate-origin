pragma solidity ^0.4.0;

contract Ownable {

  address public owner;

  /**
   * @dev The Ownable constructor sets the original `owner` of the contract to the sender
   * account.
   */
  function Ownable() {
    owner = msg.sender;
  }

  /**
   * @dev Throws if called by any account other than the owner.
   */
  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

  /**
   * @dev Allows the current owner to transfer control of the contract to a newOwner.
   * @param newOwner The address to transfer ownership to.
   */
  function transferOwnership(address newOwner) onlyOwner {
    require(newOwner != address(0));
    owner = newOwner;
  }

}


contract Storage is Ownable  {
    
    address[] authorities;
    
    modifier isAuthority () {
        require(msg.sender == owner);
        _;
    }
    function Storage () {
        
        authorities.push(msg.sender);
        
    }
    
    function addAutority(address authority) onlyOwner() isAuthority () {
      
      authorities.push(authority);
      
    } 
    
}
