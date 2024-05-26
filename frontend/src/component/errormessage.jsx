import React, { Children } from "react";
import { Alert } from "react-bootstrap";

const Errormessage = ({variant, children}) => {
  return (
    <>
      <div className="flex justify-center">
        <Alert variant={variant}>{children}</Alert>
      </div>
    </>
  );
};

export default Errormessage;
