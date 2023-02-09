// SDK significa Software Development Kit
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,doc,getDoc,getDocs, collection, query,where, addDoc, writeBatch, } from "firebase/firestore";
// 1. Inicializar Firebase
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "reactcoderhouse-3971e.firebaseapp.com",
    projectId: "reactcoderhouse-3971e",
    storageBucket: "reactcoderhouse-3971e.appspot.com",
    messagingSenderId: process.env.REACT_APP_SENDERID,
    appId: "1:783143375959:web:bdc28a7d1d3113b3b4bf12",
    measurementId: "G-335ZKTJPKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


//1. Obtener un documento
export async function getSingleItem(itemid){
    // doc() es una función de firebase que recibe dos parámetros: la referencia a la colección y el id del documento
    const docRef= doc(db, "items", itemid);
    // snapshot es una especie de promesa que se resuelve cuando se obtiene el documento
    const snapshot = await getDoc(docRef);

// export function getSingleItem(id) {
//     const docRef= doc(db, "items", "1ZLatmmUVuX0doGnYZn8");
//     getDoc(docRef).then(snapshot => {
//         console.log(snapshot.data() );
//     })
    // snapshot.data() devuelve los datos del documento
    const docData = snapshot.data();
    // Agregamos el id al objeto
    docData.id = snapshot.id;
    return docData;
}

//1.1 Obtener OrderDetails
export async function getOrderDetails(orderid){
    const docRef= doc(db, "orders", orderid);
    const snapshot = await getDoc(docRef);
    const docData = snapshot.data();
    docData.id = snapshot.id;
    return docData;
}


//2. Obtener todos los documentos
export async function getItems(){
    // collection es una función de firebase que recibe como parámetro la referencia a la colección, items en este caso
    const productCollection= collection(db, "items");
    // getDocs es una función de firebase que recibe como parámetro la referencia a la colección y devuelve una promesa que se resuelve cuando se obtienen los documentos
    const querySnapshot = await getDocs(productCollection);
    // querySnapshot.docs devuelve un array de documentos
    const dataDocs = querySnapshot.docs.map((doc)=>({
        ...doc.data(),
        // Agregamos el id al objeto de cada documento para poder usarlo en el componente ItemDetailContainer
        id: doc.id
    }))
    return dataDocs;
}

//3. Obtener documentos por categoría
export async function getItemsByCategoryid(category){
    const productCollection= collection(db, "items");
    // where es una función de firebase que recibe como parámetros la referencia a la colección, el campo por el que se quiere filtrar y el valor por el que se quiere filtrar
    const q = query(productCollection, where("category", "==", category));
    const querySnapshot = await getDocs(q);

    const dataDocs = querySnapshot.docs.map((doc)=>({
        ...doc.data(),
        id: doc.id
    }))
    // Filtramos los documentos por categoría y devolvemos el array filtrado 
    return dataDocs.filter((item)=>item.category === category);
}

//4. Crear orden de pedido 
export async function createBuyOrder(order){
    const productCollection= collection(db,"orders");
    // addDoc es una función de firebase que recibe como parámetros la referencia a la colección y el objeto que se quiere agregar a la colección y devuelve una promesa que se resuelve cuando se agrega el documento
    const orderDoc = await addDoc(productCollection, order)
    console.log(orderDoc);
    // Devolvemos el id del documento creado para poder usarlo en el componente Order 
    return(orderDoc.id)
    // El return en una función asincrónica es una especie de promesa que se resuelve cuando se ejecuta el return
}

//Mandar bd a firebase
export async function exportDataWithBatch(){
    const productCollection= collection(db, "items");

    // writeBatch es una función de firebase que recibe como parámetro la referencia a la base de datos y devuelve un objeto batch que permite hacer operaciones en lote en la base de datos 
    const batch = writeBatch(db);
    // Creamos un array con los objetos que queremos agregar a la colección items de la base de datos
    const products = [
        {
            id:1,
            productImg:'../../assets/img/pantalones1.webp',
            cardTitle:'Pantalon',
            price:5000,
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            textButton:'Compra',
            category:'adultos',
            stock: 5,
            discount:50,
        },
        {
            id:2,
            productImg:'../../assets/img/Polos1.webp',
            cardTitle:'Polo',
            price:2000,
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            textButton:'Compra',
            category:'adultos',
            stock: 20
        },
        {
            id:3,
            productImg:'../../assets/img/camisa1.webp',
            cardTitle:'Camisa',
            price:3000,
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            textButton:'Compra',
            category:'adultos',
            stock: 10,
            discount:40,
        },
        {
            id:4,
            productImg:'../../assets/img/baby3.webp',
            cardTitle:'Buzo',
            price:2000,
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            textButton:'Compra',
            category:'niños',
            stock: 15
        },
        {
            id:5,
            productImg:'../../assets/img/Baby2.webp',
            cardTitle:'Buzo',
            price:1000,
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            textButton:'Compra',
            category:'niños',
            stock: 20
        },
        {
            id:6,
            productImg:'../../assets/img/baby3.webp',
            cardTitle:'Bebes',
            price:8000,
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            textButton:'Compra',
            category:'bebes',
            stock: 10
        },
    ];

    // Recorremos el array y agregamos cada objeto a la colección items de la base de datos con un id auto generado por firestore 
    for (let item of products) {
        // agregamos el id como index para poder usarlo en el front
        // item.index = item.id;
        // delete sirve para eliminar una propiedad de un objeto
        // delete (item.id);
        // agregamos el objeto a la base de datos

        const newDoc = doc(productCollection);
        // batch.set sirve para agregar varios objetos a la base de datos en una sola transacción , si uno falla no se agregan ninguno 
        batch.set(newDoc, item);
    }
        const commitDone = await batch.commit();
        console.log("------>",commitDone);
        

}