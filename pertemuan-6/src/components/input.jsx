export default function Input({name, label, type = "text", onChange, value, placeholder }) {
  
    return (
    <div>
      {label && <div>{label}</div>}
      <input
        type={type} //nilai awalnya typenya text
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}
