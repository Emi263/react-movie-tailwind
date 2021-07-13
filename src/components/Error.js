import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
function Error() {
  const history = useHistory();

  useEffect(() => {
    {
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  }, []);
  return (
    <div>
      <h1 className="mt-5 block text-center text-3xl text-red-600">
        Error page
      </h1>
      <h3 className="mt-3 block text-center text-2xl text-red-500">
        Redirecting you to home page in 2 seconds
      </h3>
      <h1 className="text-red-900 text-9xl text-center">404</h1>
    </div>
  );
}

export default Error;
