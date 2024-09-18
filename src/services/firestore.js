import { db } from '../firebase';
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  Timestamp,
  setDoc,
  query,
  where,
} from 'firebase/firestore';

// Add a new user
export const addUser = async (user) => {
  try {
    const usersRef = collection(db, 'users');
    await addDoc(usersRef, user);
  } catch (error) {
    console.error("Error adding user: ", error);
  }
};

// Create a new learning path
export const createLearningPath = async (learningPath) => {
  try {
    const learningPathsRef = collection(db, 'learningPaths');
    await addDoc(learningPathsRef, {
      ...learningPath,
      createdAt: Timestamp.now(),
    });
  } catch (error) {
    console.error("Error creating learning path: ", error);
  }
};

// Fetch all learning paths
// export const fetchLearningPaths = async () => {
//   try {
//     const learningPathsRef = collection(db, 'learningPaths');
//     const snapshot = await getDocs(learningPathsRef);
//     const paths = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     return paths;
//   } catch (error) {
//     console.error("Error fetching learning paths: ", error);
//   }
// };

// firestore.js

// Create or update progress document
export const addProgress = async (userId, learningPathId) => {
  try {
    const progressRef = doc(db, 'progress', `${userId}_${learningPathId}`);
    await setDoc(progressRef, {
      userId,
      learningPathId,
      completedResources: [],
      progressPercentage: 0,
      updatedAt: Timestamp.now(),
    });
  } catch (error) {
    console.error("Error adding progress document: ", error);
  }
};

export const fetchEnrolledPaths = async (userId) => {
  try {
    // Query to get progress documents for the given user
    const progressQuery = query(collection(db, 'progress'), where('userId', '==', userId));
    const progressSnapshot = await getDocs(progressQuery);

    // Get the learning path IDs from the progress documents
    const learningPathIds = progressSnapshot.docs.map(doc => doc.data().learningPathId);

    // Query to get learning paths based on the IDs
    const pathsQuery = query(collection(db, 'learningPaths'), where('id', 'in', learningPathIds));
    const pathsSnapshot = await getDocs(pathsQuery);

    // Map the learning paths
    return pathsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching enrolled paths:', error);
    throw error;
  }
};


export const fetchLearningPaths = async () => {
  try {
    const learningPathsRef = collection(db, 'learningPaths');
    const snapshot = await getDocs(learningPathsRef);
    const paths = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return paths;
  } catch (error) {
    console.error("Error fetching learning paths: ", error);
    return []; // Return an empty array on error
  }
};

// Update progress
export const updateProgress = async (progressId, updateData) => {
  try {
    const progressRef = doc(db, 'progress', progressId);
    await updateDoc(progressRef, updateData);
  } catch (error) {
    console.error("Error updating progress: ", error);
  }
};

// Add a completed resource
export const addCompletedResource = async (progressId, resourceId) => {
  try {
    const progressRef = doc(db, 'progress', progressId);
    
    // Fetch current progress document to get total resources
    const progressDoc = await getDoc(progressRef);
    if (!progressDoc.exists()) {
      throw new Error("Progress document does not exist!");
    }
    
    const progressData = progressDoc.data();
    const totalResources = progressData.totalResources || 0;
    const completedResources = progressData.completedResources || [];

    // Calculate new progress percentage
    const newPercentage = calculateProgressPercentage(completedResources.length + 1, totalResources);
    
    await updateDoc(progressRef, {
      completedResources: arrayUnion(resourceId),
      progressPercentage: newPercentage,
      updatedAt: Timestamp.now(),
    });
  } catch (error) {
    console.error("Error adding completed resource: ", error);
  }
};

// Fetch all learning paths


// Calculate progress percentage
const calculateProgressPercentage = (completedCount, totalCount) => {
  if (totalCount === 0) return 0; // Avoid division by zero
  const percentage = (completedCount / totalCount) * 100;
  return Math.round(percentage * 100) / 100; // Round to two decimal places
};
