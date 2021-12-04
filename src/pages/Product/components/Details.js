import React, { useState } from "react";
import Comments from "./Comments";
import Description from "./Description";
import Specifications from "./Specifications";

const Details = ({ description, specifications, comments }) => {
  const [state, setState] = useState("Description");
  return (
    <div dir="rtl" className="mt-5 sm:mt-10">
      <div className="flex gap-3 border-b border-border text-lg sm:text-xl">
        <span
          onClick={() => setState("Description")}
          className={`border-Backgroundsecondary cursor-pointer ${
            state === "Description" && "text-Backgroundsecondary border-b"
          }`}
        >
          توضیحات
        </span>
        <span
          onClick={() => setState("specifications")}
          className={`border-Backgroundsecondary cursor-pointer ${
            state === "specifications" && "text-Backgroundsecondary border-b"
          }`}
        >
          مشخصات
        </span>
        <span
          onClick={() => setState("comments")}
          className={`border-Backgroundsecondary cursor-pointer ${
            state === "comments" && "text-Backgroundsecondary border-b"
          }`}
        >
          نظرات
        </span>
      </div>
      {state === "Description" && <Description text={description} />}
      {state === "specifications" && (
        <Specifications specifications={specifications} />
      )}
      {state === "comments" && <Comments comments={comments} />}
    </div>
  );
};

export default Details;
