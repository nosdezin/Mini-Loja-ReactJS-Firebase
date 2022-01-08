import { useEffect, useState } from "react";
import AdminCard from "./AdminCard.js";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../database/firebase-config.js";

export default function Admin() {
  const [itens, setItens] = useState([]);
  const usersColletionRef = collection(db, "produtos");
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [newType, setNewType] = useState();

  const deleteProd = async (id) => {
    const itemDoc = doc(db, "produtos", id);
    console.log(itemDoc);
    await deleteDoc(itemDoc);
  };

  const updateProd = async (id, preço) => {
    const prodDoc = doc(db, "produtos", id);
    const newFields = { nome: newName, preço: newPrice, tipo: newType };
    await updateDoc(prodDoc, newFields);
  };

  useEffect(() => {
    const getItens = async () => {
      const data = await getDocs(usersColletionRef);
      setItens(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      //   console.log(data);
    };

    getItens();
  }, []);

  return (
    <div>
      <div>
        {itens.map((val) => (
          <AdminCard
            texto={val.nome}
            preço={val.preço}
            tipo={val.tipo}
            key={val.id}
            handleChangeName={(e) => {
              const item = e.target.value;
              setNewName(item);
            }}
            handleChangePreço={(e) => {
              const item = e.target.value;
              setNewPrice(item);
            }}
            handleChangeSelect={(e) => {
              const item = e.target.value;
              setNewType(item);
            }}
            funcCick={() => {
              deleteProd(val.id);
            }}
            funcEdit={() => {
              updateProd(val.id, val.preço);
            }}
          />
        ))}
      </div>
    </div>
  );
}
