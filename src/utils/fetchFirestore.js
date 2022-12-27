import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const fetchFirestore = async(whatToQuery, data) => {

  if(whatToQuery === 'category'){
    let q
    data ? q = query(collection(db, "products"), where('category', '==', data)) : q = query(collection(db, "products"))
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(item => ({
    id: item.id,
    ...item.data()
    }))
    return dataFromFirestore
  }
  
  if(whatToQuery === 'itemWithThisID'){
    const docRef = doc(db, "products", data);
    const docSnap = await getDoc(docRef);
      return {
        id: data,
        ...docSnap.data()
      }
  }
}

export default fetchFirestore