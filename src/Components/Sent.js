import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Sent.module.css';
import MailData from './MailData';

const Sent = () => {
  const mails = useSelector((state) => state.mail.mailData);
  const email = JSON.parse(localStorage.getItem('idToken')).email;
  const sentMails = mails.filter((mail) => mail.from === email);
  const mailData = sentMails.map((mail) => (
    <MailData key={mail.id} mail={mail} mailId={mail.to} toOrFrom='To : '/>
  ));

  return <div className={classes.main}>{mailData}</div>;
};

export default Sent;