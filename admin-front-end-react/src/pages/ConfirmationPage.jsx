import * as React from 'react';
import { ConfirmationForm } from "../forms";

const ConfirmationPage = (props) => {
    return (
      <div className="container">
        <h1>Email Confirmation</h1>
        <ConfirmationForm/>
      </div>
    );
};

export default ConfirmationPage;
