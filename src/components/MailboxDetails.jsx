//MailboxDetails
import { useParams } from 'react';

const MailboxDetails = () => {

    const { mailboxId } = useParams();
    const selectedBox = props.mailbox.find(
        (mailbox) => mailbox._id === Number(mailboxId)
    )

    return (
        <>
            <h2>`${selectedBox.boxholder}'s Mailbox`</h2>
            <ul>
                <li>Box Sixe:, {selectedBox.boxSize}</li>
            </ul>
        </>
    )
}

export default MailboxDetails;