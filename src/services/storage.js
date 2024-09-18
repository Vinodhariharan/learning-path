// src/services/storage.js
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Upload a file and get its download URL
export const uploadFile = async (file) => {
  try {
    const storageRef = ref(storage, `resources/${file.name}_${Date.now()}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading file: ", error);
    throw error;
  }
};
