import { IMG, NUMBER, STRING } from "./InputTypes";

const ModalInputs = (props) => {
  const { placeholder, name, gridRow, gridColumn, type, haldleChange } = props;

  let input = null;
  switch (type) {
    case STRING:
      input = (
        <input
          name={name}
          className="form-control"
          placeholder={placeholder}
          style={{ gridColumn: gridColumn, gridRow: gridRow }}
          type="text"
          onChange={(e) =>
            haldleChange({
              [e.target.name]: e.target.value,
            })
          }
        />
      );
      break;
    case NUMBER:
      input = <input type="number" />;
      break;
    case IMG:
      input = <input type="file" />;
      break;
    default:
      break;
  }
  return input;
};

export default ModalInputs;
