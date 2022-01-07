export default function Select({handleChange}) {
  return (
    <>
      <select onChange={handleChange}>
        <option disabled selected>
          Escolha o tipo do Produto
        </option>

        <option value="Camisa">Camisa</option>
        <option value="Blusa">Blusa</option>
        <option value="Moletom">Moletom</option>
        <option value="chapeu">chapeu</option>
      </select>
    </>
  );
}
