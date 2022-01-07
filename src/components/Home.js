import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import ProdutoCard from "./ProdutoCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../database/firebase-config.js";

export default function Home() {
  const [itens, setItens] = useState([]);
  const usersColletionRef = collection(db, "produtos");

  useEffect(() => {
    const getItens = async () => {
      const data = await getDocs(usersColletionRef);
      setItens(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getItens();
  }, []);

  return (
    <div className={styles.Home_container}>
      <h1>Sejá bem-vindo</h1>

      <main>
        <div>
          {itens.map((val) => (
            <ProdutoCard
              nome={val.nome}
              valor={val.preço}
              img={val.img}
              key={val.id}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
