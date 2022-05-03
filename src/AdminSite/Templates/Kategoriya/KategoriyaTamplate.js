import { SELECT, STRING } from "../../Components/Modal/InputTypes";

export const KategoriyaTamplate = {
  text: "Kategoriyalar",
  path: "/admin/category",
  icon: "ListIcon",
  isOpenModal: false,
  modal: {
    width: 500,
  },
  form: [
    {
      grid: {
        columns: "repeat(4, 1fr)",
        rows: ".2fr .2fr",
      },
      inputs: [
        {
          name: "name",
          type: STRING,
          placeholder: "Name",
          gridColumn: "1 / 4",
        },
        {
          name: "select",
          type: SELECT,
          placeholder: "Kategoriya",
        },
      ],
    },
  ],
  columns: [
    {
      text: "№",
    },
    {
      text: "Nomi",
    },
    {
      text: "Kategoriya",
    },

    {
      text: "Action",
    },
  ],
};
