
const InputGroup = ({ name, changeID, total }) => {
  return (
    <div className="input-group mb-3">
      <select
        onChange={(e) => changeID(e.target.value)}
        className="form-select"
        id={name}
      >
        <option value="1">Choose...</option>
        {[...Array(total).keys()].map((epiNum, index) => {
          return (
            <option key={epiNum} value={epiNum + 1}>
              {name} - {epiNum + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;