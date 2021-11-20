import { useState, useEffect } from "react";

const useScroolUp = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
    let prevScrollpos = window.pageYOffset + 5;

    const hendlerScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        if (!show) {
          setShow(true);
        }
      } else if (show) {
        setShow(false);
      }
      prevScrollpos = currentScrollPos;
    };

    window.addEventListener("scroll", hendlerScroll);

    return () => {
      window.removeEventListener("scroll", hendlerScroll);
    };
  }, [show]);

  return show;
};

export default useScroolUp;
