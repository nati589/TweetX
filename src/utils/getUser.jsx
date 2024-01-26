import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const getUserData = async (uid) => {
    try {
      const docRef = doc(db, "user", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
        return []
      }
    } catch (err) {
      console.log(err.message);
      return []
    }
  };