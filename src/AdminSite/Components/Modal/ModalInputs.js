import { IMG, NUMBER, SELECT, STRING } from "./InputTypes";
import "./modal.scss";

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
    case SELECT:
      input = (
        <select
          class="form-select"
          style={{ gridColumn: gridColumn, gridRow: gridRow }}
        >
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      );
      break;
    case NUMBER:
      input = <input type="number" />;
      break;
    case IMG:
      input = (
        <input
          type="file"
          style={{ gridColumn: gridColumn, gridRow: gridRow }}
        />
      );
      break;
    default:
      break;
  }
  return input;
};

export default ModalInputs;
