import React from "react";
import { ErrorMessage, useField } from "formik";

const TextField = ({ type, ...props }) => {
  const [field] = useField(props);
  return (
    <div>
      <input type={type} autoComplete="off" {...field} {...props} />
      <ErrorMessage
        component="div"
        name={field.name}
        className="text-Backgroundsecondary absolute right-0"
      />
    </div>
  );
};

export default TextField;
