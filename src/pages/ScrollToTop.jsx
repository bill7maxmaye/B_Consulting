import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component doesn't return anything explicitly,
  // but it still needs to return something for it to be a valid React component.
  // You can return null, an empty <div>, or any other suitable JSX.
  return null; // or <></> for a fragment
};

export default ScrollToTop;
