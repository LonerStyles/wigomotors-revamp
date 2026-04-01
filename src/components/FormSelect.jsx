import "../styles/FormSelect.css";

export default function FormSelect({ name, options = [], value, onChange }) {
  return (
    <div className="form-select-container">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="real-select"        
      >
        {options.map((option, index) => (
          <option key={index} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="select-arrow-css"></div>
    </div>
  );
}
