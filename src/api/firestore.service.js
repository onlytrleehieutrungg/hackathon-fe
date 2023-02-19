import {
  addDoc,
  collection,
  getDoc,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../configuration/firebase/firebase.config";
export const addDataService = async (props) => {
  const { schema, data } = props;
  try {
    const docRef = await addDoc(collection(db, schema), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
export const getAllDocumentByCollectionNameService = async (collectionName) => {
  return await getDocs(collection(db, collectionName));
};

export const deleteDataService = async (props) => {
  const { schema, data } = props;
  await deleteDoc(doc(db, schema, data));
};
export const updateDataService = async (props) => {
  const { schema, updateData, condition } = props;
  const currentData = db.collection(schema).doc(condition);
  return await currentData.update(updateData);
};
