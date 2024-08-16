//MailboxForm
import { useState } from 'react';

const initialState = {
    boxHolder: '',
    boxSize: '',
};

const MailboxForm = (props) => {
    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addMailbox(formData);
        setFormData(initialState);
    };

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value })
    }

    return (
        <>
            <label htmlFor="boxHolder">Box Holder</label>
            <input
                id=""
                name="boxHolder"
                type="text"
                value={formData.boxHolder}
                onChange={handleChange}
            ></input>

            <p></p>

            <label htmlFor="boxSize">Box Size</label>
            <input
                id=""
                name="boxSize"
                type="text"
                value={formData.boxSize}
                onChange={handleChange}
            ></input>
            <p></p>
            <button onClick={handleSubmit}>Submit Mailbox</button>

        </>
    )
}

export default MailboxForm;