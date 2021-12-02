import React, { useState, useEffect } from "react";
import Checkbox from "../../../../components/Checkbox/Checkbox";

const ProductFilterBoolContainer = ({ text, type, dispatch }) => {
  const [select, setSelect] = useState(false);
  useEffect(() => {
    dispatch({ type: type, data: select });
  }, [dispatch, select, type]);
  return (
    <div className="w-72 border bg-white rounded-lg px-2 h-11 flex justify-end gap-3 items-center">
      <span>{text}</span>
      <Checkbox select={select} setSelect={setSelect} />
    </div>
  );
};

export default ProductFilterBoolContainer;
