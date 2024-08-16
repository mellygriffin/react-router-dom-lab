// src/App.jsx

import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import MailboxList from './components/MailboxList';
import MailboxForm from './components/MailboxForm';
import MailboxDetails from './components/MailboxDetails';

const App = () => {
  return (
    <>
  <NavBar />
  <Routes>
    <Route path="/" element={<h2>Post Office</h2>} />
    <Route path='/mailboxes' element={<MailboxList />} />
    <Route path='/new-mailbox' element={<MailboxForm />} />
    <Route path='/mailboxes/:mailboxId' element={<MailboxDetails />} />
  </Routes>
  </>
  );
};

export default App;
