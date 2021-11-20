import React, { useState, useEffect } from "react";
import { FaClock } from "react-icons/fa";
const DeadLine = ({ deadline = "" }) => {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 });

  useEffect(() => {
    const timeArray = deadline.split(":");
    setTime({
      h: parseInt(timeArray[0]),
      m: parseInt(timeArray[1]),
      s: parseInt(timeArray[2]),
    });
  }, [deadline]);

  useEffect(() => {
    const myinterval = setInterval(() => {
      if (time.h === 0 && time.m === 0 && time.s === 0) {
        clearInterval(myinterval);
      } else {
        if (time.s - 1 < 0) {
          if (time.m - 1 < 0) {
            setTime({ h: time.h - 1, m: 59, s: 59 });
          } else {
            setTime({ ...time, m: time.m - 1, s: 59 });
          }
        } else {
          setTime({ ...time, s: time.s - 1 });
        }
      }
    }, 1000);
    return () => {
      clearInterval(myinterval);
    };
  }, [time]);

  return (
    <div className="text-disabletext flex gap-1">
      <FaClock className="text-lg" />
      <span className="text-sm">
        {time.h.toString().padStart(2, 0)}:{time.m.toString().padStart(2, 0)}:
        {time.s.toString().padStart(2, 0)}
      </span>
    </div>
  );
};

export default DeadLine;
