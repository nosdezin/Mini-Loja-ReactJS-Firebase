import styles from "./ProdutoCard.module.css";

export default function ProdutoCard({ img, nome, valor }) {
  return (
    <div className={styles.card_container}>
      <div className={styles.itens}>
        <img src={img} alt="foto" />
        <p>
          nome: <span>{nome}</span>
        </p>
        <p>
          preço: <span>{valor}</span>
        </p>
      </div>
    </div>
  );
}
