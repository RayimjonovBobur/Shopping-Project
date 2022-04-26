import { useState, useEffect } from "react";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";

const dontFilterTamlateDataIndex = [
  "developer_photo",
  "passport",
  "family",
  "number",
  "file_1",
  "loc",
  "img",
];
// created_at
const { Search } = Input;

const SearchInput = () => {
  const [value, setValue] = useState("");
  //   const { currentPage } = useSelector((state) => state?.tabs_reducer);
  //   const { mainData } = useSelector((state) => state?.unsaved_reducer);
  const [keys, setKeys] = useState([]);
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     setKeys(Object.keys(mainData[0] ? mainData[0] : []));
  //   }, [mainData]);

  //   useEffect(() => {
  //     let filter = mainData.filter((item) => {
  //       for (let i = 0; i < keys.length; i++) {
  //         if (typeof item[keys[i]] === "string") {
  //           if (
  //             item[keys[i]]
  //               .toString()
  //               .toLowerCase()
  //               .includes(value.toLocaleLowerCase())
  //           ) {
  //             return item;
  //           }
  //         }
  //       }
  //     });

  //     let newColumn = currentPage?.columns?.map((item) => {
  //       if (!dontFilterTamlateDataIndex.includes(item?.dataIndex)) {
  //         return {
  //           ...item,
  //           render: (text) => {
  //             let content = (
  //               <div style={{ width: "400px" }}>
  //                 <PaintBackground text={`${text}`} value={`${value}`} />
  //               </div>
  //             );
  //             if (`${text}`.length > 59) {
  //               return (
  //                 <Popover placement="leftTop" content={content}>
  //                   <div className="hodim-template">
  //                     <div className={"box-shadow"}></div>
  //                     <PaintBackground text={`${text}`} value={`${value}`} />
  //                   </div>
  //                 </Popover>
  //               );
  //             } else {
  //               return (
  //                 <div className="hodim-template">
  //                   <PaintBackground
  //                     text={`${
  //                       item?.dataIndex === "created_at"
  //                         ? moment(text).format("DD-MM-YYYY")
  //                         : text
  //                     }`}
  //                     // text={`${text}`}
  //                     value={`${value}`}
  //                   />
  //                 </div>
  //               );
  //             }
  //           },
  //         };
  //       } else {
  //         return item;
  //       }
  //     });
  //   }, [value, mainData]);

  return (
    <Search
      placeholder="Search..."
      value={value}
      allowClear
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;
