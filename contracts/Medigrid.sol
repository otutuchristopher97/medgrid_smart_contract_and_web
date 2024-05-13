// SPDX-License-Identifier: UNLICENSED
// pragma solidity ^0.8.24;

// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract MediGrid is Ownable(msg.sender) {
   
    // IERC20 private _token;
    // Matic Token contract address on Amoy Testnet
    //address constant _tokenAddress = 0x0000000000000000000000000000000000001010;

    using SafeERC20 for ERC20;
    address constant ETHER = address(0);

    bytes32 public constant NAME = "MediGrid";

    // uint256
    uint256 private userCount = 0;

     // uint256
    uint256 private drugCount = 0;

    uint256 private manMemFee = 2000;

    uint256 private distMemFee = 1000;

    // Address
    address public admin;
    address[] private addresses;

    // Enums
    enum UserStatus { UNVERIFIED, VERIFIED}
    
    enum UserType { ADMIN, MANUFACTURER, DISTRIBUTOR}

    // events
    event UserCreated(
        address indexed userAddress, 
        UserType userType,
        UserStatus userStatus
    );

    event UserDocsUpdated(
        address indexed userAddress, 
        string indexed userId
    );

    event UpdatedMembershipFee(uint256 _manMemFee, uint256 _disMemFee);

    event UpdatedAccountDocument(address indexed initiator, string data);

    event VerifiedUserAccount(address indexed userAddress, bool docStatus, bool isVerifed);

    event PaidMembershipFee(address indexed initiator, uint256 amount, bool hasPaid);

    event DrugAdded(address indexed creator, uint256 drugId, string data);

    event DrugUpdated(address creator, uint256 drugId, string data);

    event LogWithdraw(
        address indexed _from,
        address indexed _assetAddress,
        uint amount
    );
     // modifier
    modifier OnlyManufacturer {
        require(existingUsers[msg.sender], 'oops...user is not register on protocol');
        
        User memory user = users[msg.sender];

        require(user.isVerified, 'oops...user profile is not verified');
            
        require(user.userType == UserType.MANUFACTURER, 'oops...only Manufacturers on protocol are allowed');
        _;
    }

    // Structs
    struct User {
        address userAddress;
        string data;
        UserType userType;
        UserStatus status;
        uint256 dateCreated;
        uint256 dateUpdated;
        bool hasPaidFee;
        bool hasVerifiedDoc;
        bool hasDoc;
        bool isVerified;
        uint256 _id;
    }

    struct UserMembershipFee {
        uint256 manMemFee;
        uint256 distMemFee;
    }

    struct Drug{
        uint256 id;
        uint256 dateCreated;
        uint256 dateUpdated;
        address addedBy;
        string data;
    }

    Drug[] drugList;

    // Mapping
    mapping(address => User) private users;
    mapping(address => bool) private existingUsers;
    mapping(address => Drug []) public drugs;



    constructor()  {
        // _token =  IERC20(tokenAddress);
        admin = msg.sender;
    }

    function createUser(string memory _data, UserType _userType) private {
        User memory user = User(msg.sender, _data, _userType, 
        UserStatus.UNVERIFIED,
        block.timestamp,
        0,
        false, //hasPaidFee
        false, //hasVerifiedDoc
        false, //hasDoc
        false, //isVerified
        0
        );
        user._id = userCount + 1;
        
        users[msg.sender] = user;

        existingUsers[msg.sender] = true;

        addresses.push(msg.sender);

        userCount++;

        emit UserCreated(user.userAddress, user.userType, user.status);

    }

    function updateUserDoc(string memory _data) external {

        require(existingUsers[msg.sender], 'oops...User does not exists');
        
        User storage user = users[msg.sender];

        require(user.status == UserStatus.UNVERIFIED, "Ooops!!! User acccount already verified");
        
        require(!user.hasVerifiedDoc, "Ooops!!! User account documents already verified");

        user.data = _data;

        user.dateUpdated = block.timestamp;
        
        user.hasDoc = true;

        emit UpdatedAccountDocument(msg.sender, _data);
    }


    function verifyUserAccount(address userAddress, bool _docVerifyStatus) external onlyOwner {
        require(existingUsers[userAddress], 'oops...User does not exists');

        User storage user = users[userAddress];

        require(!user.isVerified, "Ooops!!! User acccount document already verified");
        
        user.hasVerifiedDoc = _docVerifyStatus;

        if(user.hasPaidFee && user.hasVerifiedDoc){
            user.isVerified = true;
            user.status = UserStatus.VERIFIED;
        }

        user.dateUpdated = block.timestamp;
        
        emit VerifiedUserAccount(msg.sender, user.hasVerifiedDoc, user.isVerified);
    }


    function getMemberShipFee() view external returns(UserMembershipFee memory){
        UserMembershipFee memory fee = UserMembershipFee(manMemFee, distMemFee);
        return fee;
    }

    function updateUserFee(uint256 _manMemFee, uint256 _distMemFee) external onlyOwner {
        manMemFee = _manMemFee;
        distMemFee = _distMemFee;
        emit UpdatedMembershipFee(_manMemFee, _manMemFee);
        
    } 

    function payMembershipFee() external payable  {

        address from = payable(msg.sender);

        require(existingUsers[from], 'oops...User does not exists');
        
        User storage user = users[from];

        require(!user.hasPaidFee, "Ooops!!! User has already paid memebership fee");

        require(!user.isVerified, "Ooops!!! User acccount already verified");

        uint256 amount;

        if (user.userType == UserType.MANUFACTURER){
            amount = manMemFee;
        }else{
            amount = distMemFee;
        }

        // bool status = ERC20(_tokenAddress).transfer(address(this), amount);

        user.hasPaidFee = true;

        user.dateUpdated = block.timestamp;

        emit PaidMembershipFee(from, amount, user.hasPaidFee);

    }

    function createManufacturer(string memory _data) external {
        require(!existingUsers[msg.sender], 'oops...already exists');
        createUser(_data, UserType.MANUFACTURER);
    }

    function createDistributor(string memory _data) external {
        require(!existingUsers[msg.sender], 'oops...already exists');
        createUser(_data, UserType.DISTRIBUTOR);
    }
    
    function getUsers() external view returns (User[] memory) {
        User[] memory fetchedUsers = new User[](userCount);

        for(uint i = 0; i < userCount; i++) {
            fetchedUsers[i] = users[addresses[i]];
        }
        return fetchedUsers;
    }


    function getUserCount() external view returns(uint256){
        return userCount;
    }

    function getUser(address userAddress) view public returns (User memory) {
        // verify category Id
        require(existingUsers[userAddress], 'oops...User does not exists');

        return (users[userAddress]);
    }

    // Drugs
    function addDrug(string memory _data) external OnlyManufacturer {

        Drug memory drug = Drug(
            drugCount + 1, 
            block.timestamp, 
            0, 
            msg.sender, 
            _data
        );
                
        drugs[msg.sender].push(drug);

        drugCount++;

        drugList.push(drug);

        emit DrugAdded(msg.sender, drug.id, _data);

    }

    function updateDrug(uint256 _id, string memory _data) external OnlyManufacturer {

        require(_id > 0, "oops...Invalid Id");

        require(drugCount >= _id, "oops...Invalid Id");


        Drug storage drug = drugs[msg.sender][_id - 1];
        
        Drug storage drugInList =  drugList[_id - 1];

        require(drug.dateCreated > 0, "invalid drug Id");

        drug.data = _data;

        drug.dateUpdated = block.timestamp;

        drugInList.data = _data;

        drugInList.dateUpdated = block.timestamp;

        emit DrugUpdated(msg.sender, drug.id, _data);

    }


    function getDrug (uint256 _id)  view external returns(Drug memory){
        require(_id > 0, "oops...Invalid Id");
        require(drugCount >= _id, "oops...Invalid Id");
        
        return drugList[_id - 1];
     }

    
    function getManufacturerDrugs (address _manufacturerAddress)  view external returns(Drug[] memory){
        require(existingUsers[_manufacturerAddress], 'oops...User does not exists');
        return drugs[_manufacturerAddress];

    }

    function getAllDrugs () view external returns(Drug[] memory){
        return drugList;
    }

     /**
     * @dev Get Total Drug cound.
     */

    function getTotalDrugCount () view external returns(uint256){
        return drugCount;
    }

    /**
     * @dev Withdraw asset.
     * @param amount to  Asset to be withdrawn.
     */
    // function withdraw(uint256 amount) public onlyOwner {
    //     // address _assetAddress (this will help to implement this for other assets)
    //     // uint256 assetBalance;
    //     // if (_tokenAddress == ETHER) {
    //     //     address self = address(this); // workaround for a possible solidity bug
    //     //     assetBalance = self.balance;
    //     //     msg.sender.transfer(assetBalance);
    //     // } else {
            
    //     // }
    // //    uint256 assetBalance = ERC20(_tokenAddress).balanceOf(address(this));
            
    //     require(amount <= assetBalance, "Insufficient balance");

    //     // ERC20(_tokenAddress).safeTransfer(msg.sender, amount);
    //     // ERC20(_tokenAddress).transfer(msg.sender, amount);

    //     emit LogWithdraw(msg.sender, _tokenAddress, amount);
    // }

    // function getProtocolBalance() view external returns(uint256){
    //     return address(this).balance;
    // }
        
    
}
