//MailboxList
import { Link } from 'react-router-dom';

const MailboxList = (props) => {
    return (
        <>
        <h2>Mailboxes</h2>
        <ul>
          <div class="mailboxlist">
        {props.mailboxes.map((selectedBox) => (
          <li key={selectedBox._id}>
          <Link to={`/mailboxes/${selectedBox._id}`}>
          Mailbox {selectedBox._id}
          </Link>
          </li>
        ))}
        </div>
      </ul>
    </>
    );
};

export default MailboxList;