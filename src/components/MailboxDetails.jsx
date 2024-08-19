//MailboxDetails
import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {

    const { mailboxId } = useParams();
    const selectedBox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));

    return (
        <>
            <h2>Mailbox {selectedBox._id}</h2>
            <ul>
        <div class="details">
                <li>Box Holder: {selectedBox.boxHolder}</li>
                <li>Box Size: {selectedBox.boxSize}</li>
            </div>
            </ul>
        </>
    )
}

export default MailboxDetails;