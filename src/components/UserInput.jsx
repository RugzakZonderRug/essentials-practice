export default function InputGroup({
  label,
  inputID,
  inputValue,
  inputChange,
}) {
  return (
    <div className="inputGroup">
      <label>{label}</label>
      <input
        type="number"
        required
        key={inputID}
        value={inputValue}
        onChange={() => inputChange(event, inputID)}
      />
    </div>
  );
}
