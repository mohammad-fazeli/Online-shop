import { useEffect, useState } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
const useClickOutside = (ref, callback) => {
  const [click, setClick] = useState(false);
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setClick(true);
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback, click, ref]);
};

export default useClickOutside;
