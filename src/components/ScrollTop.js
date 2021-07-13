import React from "react";
import { useLocation } from "react-router-dom";
function ScrollTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return <div></div>;
}

export default ScrollTop;
