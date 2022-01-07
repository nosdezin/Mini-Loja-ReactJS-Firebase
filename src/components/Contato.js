import styles from "./Contato.module.css";

export default function Contato() {
  return (
    <div className={styles.contato_container}>
      <h1>Contato</h1>
      <p>
        e-mail de supporte: <span>support@loja.com</span>
      </p>

      <h2>Redes Sociais</h2>
      <p>
        Twitter: <span>@Loja-virtual</span>
      </p>
      <p>
        Facebook: <span>Loja-Virtual</span>
      </p>
      <p>
        Github: <span>Nosdezin</span>
      </p>
    </div>
  );
}
