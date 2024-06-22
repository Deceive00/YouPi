import { User } from "@lib/types/user-types";
import { doc, getDoc, increment, updateDoc } from "firebase/firestore";
import { auth, db } from "src/firebase/firebase-config";

export const fetchUserByID = async (userId: string): Promise<User | undefined> => {
  if (!userId) {
    throw new Error("No user ID provided");
  }

  try {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as User;
    }else {
      throw new Error(`No user found with ID: ${userId}`);
    }
  } catch (err) {
    console.log(err);
  }
};

export const addSenderReviewByID = async (userId : string, stars: number ) => {
  // Using UpdateDoc, add to Database ReviewSender from stars
  try{
    const userDocRef = doc(db, "users", userId);
    await updateDoc(userDocRef, {
      reviewSender: increment(stars),
      reviewCount : increment(1)
    });

    console.log("Review Added Successfully [!]");
    
  }catch(err){
    console.log("Error to add Sender Review : " + err);
  }
}



export const updateUser = async (data : User) => {
  if(auth.currentUser){
    const docRef = doc(db, "users", auth.currentUser?.uid || '');
    console.log(auth.currentUser.uid);
    await updateDoc(docRef, 
      {
        ...data
      }
    );
  }else{
    throw new Error("No user found!");
  }
}