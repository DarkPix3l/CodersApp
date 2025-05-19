const DropDown = ({ label, options, value, onChange }) => {
  return (
    <label style={{ marginRight: 15 }}>
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        
        style={{ backgroundColor: "green", padding:"0.5rem", borderRadius:"8px", border:"none" }}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default DropDown;
