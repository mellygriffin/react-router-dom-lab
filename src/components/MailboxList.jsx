//MailboxList
import { Link } from 'react-router-dom';

const MailboxList = (props) => {
    return (
        <>
        <h2>Mailbox List 📮</h2>
        <ul>
        {props.mailboxes.map((selectedBox) => (
          <li key={selectedBox._id} class="mailboxlist">
          <Link to={`/mailboxes/${selectedBox._id}`}>
          Mailbox {selectedBox._id}
          </Link>
          </li>
        ))}
      </ul>
    </>
    );
};

export default MailboxList;