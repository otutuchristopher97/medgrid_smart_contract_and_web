import Swal from "sweetalert2";
import { ethers } from "ethers";
export const daysLeft = (deadline) => {
  const difference = new Date(deadline).getTime() - Date.now();
  const remainingDays = difference / (1000 * 3600 * 24);

  return remainingDays.toFixed(0);
};

export const formattedUsers = (users) => {
  return users.map((user) => {
    return formattedUser(user);
  });
};

// export const fetcthAuthUser ()

export const getRandomNumber = (size) => {
  // Generate a random number between 0 (inclusive) and 2 (inclusive)
  const randomNumber = Math.floor(Math.random() * size);
  return randomNumber;
};

export const icons = [
  "/png/pop-social.png",
  "/png/cyber-arena.png",
  "/png/virtual-version.png",
];

export const formattedUser = (user) => {
  return {
    id: Number(user._id),
    status: Number(user.status),
    userType: Number(user.userType),
    hasDoc: user.hasDoc,
    isVerified: user.isVerified,
    hasPaidFee: user.hasPaidFee,
    hasVerifiedDoc: user.hasVerifiedDoc,
    dateCreated: user.dateCreated,
    dateUpdated: user.dateUpdated,
  };
};

export const UserStatus = {
  UNVERIFIED: 0,
  VERIFIED: 1,
};

export const UserType = {
  ADMIN: 0,
  MANUFACTURER: 1,
  DISTRIBUTOR: 2,
};

export const calculateBarPercentage = (goal, raisedAmount) => {
  const percentage = Math.round((raisedAmount * 100) / goal);

  return percentage;
};

export const checkIfImage = (url, callback) => {
  const img = new Image();
  img.src = url;

  if (img.complete) callback(true);

  img.onload = () => callback(true);
  img.onerror = () => callback(false);
};

export const alertSuccess = (message) => {
  return Swal.fire({
    icon: "success",
    title: "Sucesss!!",
    text: `${message}`,
  });
};

export const alertError = (message) => {
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    text: `${message}`,
  });
};

// export const shortenText = (text, requiredLen) => {
//   if (!text) return "";

//   const requiredWordLen = 20;

//   const words = text.split(" ");

//   if (words.length <= requiredWordLen) return text;

//   return `${words.slice(0, requiredWordLen + 1).join(" ")}...`;
// };

export const shortenText = (text) => {
  if (text.length < 20) {
    return text; // Return the original text if it's shorter than 20 characters
  }
  const prefix = text.substring(0, 9); // Get the first 9 characters
  const suffix = text.substring(23); // Get the characters after the 19th position
  const maskedText = prefix + "*********" + suffix; // Replace characters between 9th and 19th positions with asterisks
  return maskedText;
};
