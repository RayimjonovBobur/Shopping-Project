import { IMG, NUMBER, SELECT, STRING, TEXTAREA } from "./InputTypes";
import "./modal.scss";

const ModalInputs = (props) => {
  const { placeholder, name, gridRow, gridColumn, type, haldleChange } = props;

  const hanldeChageImg = (e) => {
    console.log(e.value);
  };

  let input = null;
  switch (type) {
    case STRING:
      input = (
        <div style={{ gridColumn: gridColumn, gridRow: gridRow }}>
          <label htmlFor="input">{placeholder}</label>
          <input
            name={name}
            className="form-control"
            placeholder={placeholder}
            type="text"
            onChange={(e) =>
              haldleChange({
                [e.target.name]: e.target.value,
              })
            }
            id="input"
          />
        </div>
      );
      break;
    case SELECT:
      input = (
        <div style={{ gridColumn: gridColumn, gridRow: gridRow }}>
          <label>{placeholder}</label>
          <select
            name={name}
            class="form-select"
            onChange={(e) =>
              haldleChange({
                [e.target.name]: e.target.value,
              })
            }
          >
            <option selected>Open this select menu</option>
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
          </select>
        </div>
      );
      break;
    case TEXTAREA:
      input = <textarea name="" id="" cols="30" rows="10"></textarea>;
    case NUMBER:
      input = <input type="number" />;
      break;
    case IMG:
      input = (
        <div style={{ gridColumn: gridColumn, gridRow: gridRow }}>
          <label>{placeholder}</label>
          <label htmlFor="id" className="inputt">
            {placeholder}
          </label>
          <input
            type="file"
            id="id"
            style={{ display: "none", visibility: "hidden" }}
            onChange={hanldeChageImg}
          />
        </div>
      );
      break;
    case TEXTAREA:
      input = (
        <div
          style={{ gridColumn: gridColumn, gridRow: gridRow, height: "60px" }}
        >
          <label>{placeholder}</label>
          <textarea
            className="form-control "
            placeholder="Leave a comment here"
            id="floatingTextarea"
          />
        </div>
      );
    default:
      break;
  }
  return input;
};

export default ModalInputs;
