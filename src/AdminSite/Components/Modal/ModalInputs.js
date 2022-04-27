import { NUMBER, STRING } from "./InputTypes";

const ModalInputs = ({ type }) => {
  let input = null;
  switch (type) {
    case STRING:
      input = <input type="text" />;
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
