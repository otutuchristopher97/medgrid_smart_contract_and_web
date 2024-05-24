import Swal from "sweetalert2";
import { ethers } from "ethers";
import axios from "axios";

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

export const submitMedicationToCMS = async (data) => {
  // Send request to CMS
  await axios({
    method: "post",
    url: "https://tremendous-ants-f528377d1e.strapiapp.com/api/drugs",
    data: {
      data,
    },
    headers: {
      Authorization: `Bearer b3ac305db4fbf7fd261aae75cd5f6478398dd1ffaf412116b570370d81e8eac0913af2737532e5c3ab67256086f066de410b2aa5fdd753ee607a51bcf1af4b47b35cb5b372b764cf36c077009b5aef8a7c4e1d537506f1642418df2a342471b091759aa270f250247d0b43f9f9097e0624dcdd7f0a534cee37f34a499567a892`,
    },
  });
};

export const shortenText = (text) => {
  if (text.length < 20) {
    return text; // Return the original text if it's shorter than 20 characters
  }
  const prefix = text.substring(0, 9); // Get the first 9 characters
  const suffix = text.substring(23); // Get the characters after the 19th position
  const maskedText = prefix + "*********" + suffix; // Replace characters between 9th and 19th positions with asterisks
  return maskedText;
};

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
