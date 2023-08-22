import { db } from "./firebaseConfig";
import {
  collection,
  getDocs,
  query,
  where,
  getDoc,
  doc,
  addDoc,
} from "firebase/firestore";

export async function getProducts() {
  const productsCollection = collection(db, "products");
  const res = await getDocs(productsCollection);
  const products = res.docs.map((doc) => {
    const product = doc.data();
    product.id = doc.id;
    return product;
  });
  return products;
}

export async function getProductsByCategory(category) {
  const productsCollection = collection(db, "products");

  const getwithFilter = query(
    productsCollection,
    where("category", "==", category)
  );
  const res = await getDocs(getwithFilter);
  const products = res.docs.map((doc) => {
    const product = doc.data();
    product.id = doc.id;
    return product;
  });

  return products;
}

export async function getProductById(id) {
  const productsCollection = collection(db, "products");
  const productDoc = doc(productsCollection, id);
  const res = await getDoc(productDoc);
  const product = res.data();
  product.id = res.id;
  return product;
}

export async function saveOrder(data) {
  const ordersCollection = collection(db, "orders");
  const res = await addDoc(ordersCollection, data);
  return res;
}
