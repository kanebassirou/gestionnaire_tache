/**
 * @param {object} props
 * @param {string} props.placeholder
 * @param {string} props.value
 * @param {(s: string) => void} props.onChange
 */
export function Input({ placeholder, value, onChange }) {
    return (
      <div>
        <input
          type="text"
          className="form-control"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)} // Utilisez value au lieu de Value
        />
      </div>
    );
  }
  