import { IMG, STRING } from "../../Components/Modal/InputTypes";

export const SliderTamplate = {
  text: "Slider",
  path: "/admin/slider",
  icon: "PartnerIcon",
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
          name: "img",
          type: IMG,
          placeholder: "Rasm",
          gridColumn: "1 / 5",
        },
        {
          name: "link",
          type: STRING,
          placeholder: "Link",
          gridColumn: "5 / 8",
        },
      ],
    },
  ],
  columns: [
    {
      text: "№",
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
