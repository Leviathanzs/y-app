// userService.js
import { collection, addDoc, getDocs, query, where, orderBy, limit } from "firebase/firestore";
import bcrypt from 'bcrypt';
import { db } from './firebaseConfig';

// Function to add a user with auto-incremented id and hashed password
const addUser = async (displayName, email, profilePictureUrl, username, password) => {
  try {
    const usersCollection = collection(db, "users");

    // Step 1: Retrieve the latest id
    const q = query(usersCollection, orderBy("id", "desc"), limit(1));
    const querySnapshot = await getDocs(q);

    let newId = 1;
    if (!querySnapshot.empty) {
      const lastDoc = querySnapshot.docs[0];
      const lastId = lastDoc.data().id;
      newId = lastId + 1;
    }

    // Step 2: Hash the password
    const saltRounds = 10; // Adjust as necessary for security/performance balance
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Step 3: Add the new user document
    const newUser = {
      id: newId,
      displayName: displayName,
      email: email,
      profilePictureUrl: profilePictureUrl,
      username: username,
      password: hashedPassword
    };

    const docRef = await addDoc(usersCollection, newUser);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// Function to log in a user by verifying username and password
const loginUser = async (username, password) => {
  try {
    const usersCollection = collection(db, "users");

    // Query the Firestore collection for a user with the specified username
    const q = query(usersCollection, where("username", "==", username));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.error("No such user found!");
      return false;
    }

    // Assuming usernames are unique, there should be exactly one document in the query result
    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();

    // Compare the provided password with the hashed password stored in Firestore
    const passwordMatch = await bcrypt.compare(password, userData.password);

    if (passwordMatch) {
      console.log("Login successful!");
      return true;
    } else {
      console.error("Incorrect password!");
      return false;
    }
  } catch (e) {
    console.error("Error logging in: ", e);
    return false;
  }
};

export { addUser, loginUser };