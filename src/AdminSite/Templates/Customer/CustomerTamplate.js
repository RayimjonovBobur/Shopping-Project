import { IMG, STRING } from "../../Components/Modal/InputTypes";

export const CustomerTamplate = {
  text: "Mijozlarimiz",
  path: "/admin/customer",
  icon: "UserIcon",
  isOpenModal: false,
  modal: {
    width: 600,
  },
  form: [
    {
      grid: {
        columns: "repeat(4, 1fr)",
        rows: ".2fr .2fr",
      },
      inputs: [
        {
          name: "brend",
          type: STRING,
          placeholder: "Brend",
          gridColumn: "1 / 3",
        },
        {
          name: "img",
          type: IMG,
          placeholder: "Rasm",
          gridColumn: "3 / 5",
        },
        {
          name: "link",
          type: STRING,
          placeholder: "Link",
          gridColumn: "1 / 5",
          gridRow: "2 / 2",
        },
      ],
    },
  ],
  columns: [
    {
      text: "№",
    },
    {
      text: "Brend",
    },
    {
      text: "Rasm",
    },
    {
      text: "Link",
    },
    {
      text: "Action",
    },
  ],
};
