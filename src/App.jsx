// src/App.jsx

import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar';
import MailboxList from './components/MailboxList';
import MailboxForm from './components/MailboxForm';
import MailboxDetails from './components/MailboxDetails';
import './index.css';


const App = () => {

  const [mailboxes, setMailboxes] = useState([]);

  const addMailbox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    setMailboxes([... mailboxes, newMailboxData]);
  };

  return (
    <>
  <NavBar />
  <Routes>
    <Route path="/" element={<h2>Welcome to the Post Office</h2>} />
    <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes} />} />
    <Route path='/new-mailbox' element={<MailboxForm addMailbox={addMailbox}/>} />
    <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes} />} />
    <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
  </Routes>
  </>
  );
};

export default App;
