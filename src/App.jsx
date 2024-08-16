// src/App.jsx

import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar';
import MailboxList from './components/MailboxList';
import MailboxForm from './components/MailboxForm';
import MailboxDetails from './components/MailboxDetails';

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
    <Route path="/" element={<h2>Post Office</h2>} />
    <Route path='/mailboxes' element={<MailboxList />} />
    <Route path='/new-mailbox' element={<MailboxForm addMailbox={addMailbox}/>} />
    <Route path='/mailboxes/:mailboxId' element={<MailboxDetails />} />
  </Routes>
  </>
  );
};

export default App;
