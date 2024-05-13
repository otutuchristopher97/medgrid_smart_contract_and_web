// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.9;

// contract Tracking {
//     enum ShipmentStatus { PENDING, IN_TRANSIT, DELIVERED}

//     struct Shipment {
//         address sender;
//         address receiver;
//         uint256 pickupTime;
//         uint256 deliveryTime;
//         uint256 distance;
//         uint256 price;
//         ShipmentStatus status;
//         bool isPaid;

//     }

//     struct TypeShipment {
//         address sender;
//         address receiver;
//         uint256 pickupTime;
//         uint256 deliveryTime;
//         uint256 distance;
//         uint256 price;
//         ShipmentStatus status;
//         bool isPaid;

//     }
    

//     TypeShipment[] typeShipments;
//     mapping(address => Shipment []) public shipments;
    
//     uint256 public shipmentCount;


//     event ShipmentCreated(address indexed sender, 
//         address indexed receiver, 
//         uint256 pickupTime, 
//         uint256 distance,
//         uint256 price
//     );

//     event ShipmentInTransist(
//         address indexed sender, 
//         address indexed receiver, 
//         uint256 pickupTime 
//     );

//     event ShipmentDelivered(
//         address indexed sender, 
//         address indexed receiver, 
//         uint256 deliveryTime
//     );


//     event ShipmentPaid(address indexed sender, 
//         address indexed receiver, 
//         uint256 price
//     );

//     constructor(){
//         shipmentCount = 0;
//     }


//     function createShipment(address _sender, 
//         address _receiver, 
//         uint256 _pickupTime, 
//         uint256 _distance,
//         uint256 _price
        
//         ) external payable {
//             require(msg.value == _price, "Payment amount must match price ");
            
//             Shipment memory shipment = Shipment(
//                 msg.sender, 
//                 _receiver, 
//                 _pickupTime, 
//                 0, 
//                 _distance,
//                 _price, 
//                 ShipmentStatus.PENDING,
//                 false
//             );

            
//             shipments[msg.sender].push(shipment);

//             shipmentCount++;


//             typeShipments.push(
//               TypeShipment(
//                 msg.sender, 
//                 _receiver, 
//                 _pickupTime, 
//                 0, 
//                 _distance,
//                 _price, 
//                 ShipmentStatus.PENDING,
//                 false
//               )  

//             );

//             emit ShipmentCreated(msg.sender, _receiver, _pickupTime, _distance, _price);

//         }


//     function startShipment (address _sender, address _receiver, uint256 _index) external {
//         Shipment storage shipment = shipments[_sender][_index];
//         TypeShipment storage typeShipment = typeShipments[_index];
//         require(shipment.receiver == _receiver, "Invalid receiver");
//         require(shipment.status == ShipmentStatus.PENDING, "Shipment already in transit");

//         shipment.status = ShipmentStatus.IN_TRANSIT;
//         typeShipment.status = ShipmentStatus.IN_TRANSIT;

//         emit ShipmentInTransist(_sender, _receiver, shipment.pickupTime);
//     }


//     function completeShipment (address _sender, address _receiver, uint256 _index) external {
//         Shipment storage shipment = shipments[_sender][_index];
//         TypeShipment storage typeShipment =  typeShipments[_index];

//         require(shipment.receiver == _receiver, "Invalid Reciever");
//         require(shipment.status == ShipmentStatus.IN_TRANSIT, "Shipent status not in transist");

//         require(!shipment.isPaid, "Shipment is already paid");
//         shipment.status = ShipmentStatus.DELIVERED;
//         typeShipment.status = ShipmentStatus.DELIVERED;
//         typeShipment.deliveryTime = block.timestamp;
//         shipment.deliveryTime = block.timestamp;

//         uint256 amount = shipment.price;

//         payable(shipment.sender).transfer(amount);

//         shipment.isPaid = true;
//         typeShipment.isPaid = true;


//         emit ShipmentDelivered(_sender, _receiver, shipment.deliveryTime);
//         emit ShipmentDelivered(_sender, _receiver, amount);

//     }

//     function getShipment (address _sender, uint256 _index)  view external returns
//     (address, address, uint256, uint256, uint256, uint256, ShipmentStatus, bool){

//         Shipment memory shipment = shipments[_sender][_index];
        
//         return (shipment.sender, shipment.receiver, 
//         shipment.pickupTime, shipment.deliveryTime,
//          shipment.distance, shipment.price, 
//          shipment.status,shipment.isPaid
//         );

//     }


//     function getShipments(address _sender) external view returns (uint256){
//         return shipments[_sender].length;
//     } 

//     function getAllTransctions() external view returns (TypeShipment [] memory){
//         return typeShipments;
//     }






// }