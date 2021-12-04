import React, { useState } from "react";

const Specifications = ({ specifications = [] }) => {
  const [state, setState] = useState(10);
  specifications.slice(0, 10);
  return (
    <div className="flex gap-6 border-b mt-3 sm:text-lg ">
      <span>مشخصات</span>
      <table className="table-fixed ">
        <tbody>
          <tr>
            <th className="w-40 pl-5 sm:w-52"></th>
            <th className="w-40"></th>
          </tr>
          {specifications.slice(0, state).map(({ key, value }, index) => (
            <tr key={index} className="border-b ">
              <td className="pl-5 pt-3">{key}</td>
              <td className="pt-3">{value}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr
            className={`cursor-pointer text-blue ${
              state >= specifications.length && "hidden"
            }`}
            onClick={() => {
              setState(specifications.length);
            }}
          >
            <td>ادامه مطلب...</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Specifications;
