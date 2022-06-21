import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useApplyConfirmation } from '../hooks';
import { FormButton, FormCard } from '../components';

const STATUS_LOADING = 0;
const STATUS_SUCCESS = 1;
const STATUS_ERROR = 2;

const ConfirmationForm = () => {
    const [status, setStatus] = React.useState(0);
    const applyConfirmation = useApplyConfirmation();
    const navigate = useNavigate();
    const location = useLocation();
    
    React.useEffect(() => {
      setStatus(STATUS_LOADING);
      const token = new URLSearchParams(location.search).get('token');
      if (token == null || token === "") {
        setStatus(STATUS_ERROR);
        return;
      }

      applyConfirmation(token)
        .then(_ => {
          setStatus(STATUS_SUCCESS);
        })
        .catch(_ => {
          setStatus(STATUS_ERROR);
        });
    }, [ location.search ]);

    const submit = (event) => {
      navigate('/login');
      event.preventDefault();
    };

    const statusText = (s) => {
      if (s === STATUS_LOADING)
        return "Confirming...";
      if (s === STATUS_SUCCESS)
        return "Email Confirmed!";
      if (s === STATUS_ERROR)
        return "Error Confirming Email";

      return "Unknown Status";
    }

    return (
        <FormCard onSubmit={submit}>
          <FormButton type="submit">{statusText(status)}</FormButton>
        </FormCard>
    );
};

export default ConfirmationForm;
