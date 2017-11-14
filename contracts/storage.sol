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

    function Storage () {
        authorities.push(msg.sender);
    }

    function addAuthority(address _authority) onlyOwner() {
      authorities.push(_authority);
    }

    function deleteAuthority(address _authority) onlyOwner() {
      for(uint i = 0; i < authorities.length; i++ ) {
        if (authorities[i] == _authority) {
          authorities = remove(authorities, i);
        }
      }
    }

    function remove(address[] array, uint index) internal returns(address[] value) {
        if (index >= array.length) return;

        address[] memory arrayNew = new address[](array.length-1);
        for (uint i = 0; i<arrayNew.length; i++){
            if(i != index && i<index){
                arrayNew[i] = array[i];
            } else {
                arrayNew[i] = array[i+1];
            }
        }
        return arrayNew;
    }


}
