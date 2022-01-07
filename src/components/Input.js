export default function Input({ type, placeholder, handleChange }) {
  return (
    <>
      <input type={type} placeholder={placeholder} onChange={handleChange}/>
    </>
  );
}
