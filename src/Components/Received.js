import React from 'react';
import { useSelector } from 'react-redux';

import classes from './Received.module.css'
import MailData from './MailData';

const Received = () => {
  const mails = useSelector((state) => state.mail.mailData);

  const email = JSON.parse(localStorage.getItem('idToken')).email;
  const receivedMails = mails.filter((mail) => mail.to === email);

  const mailData = receivedMails.map((mail) => (
    <MailData key={mail.id} mail={mail} mailId={mail.from} toOrFrom='From : '/>
  ));

  return (
    <div className={classes.main}>
      {mailData}
    </div>
  );
};

export default Received;