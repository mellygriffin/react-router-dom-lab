//MailboxForm
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialState = {
    boxHolder: '',
    boxSize: 'Small',
};

const MailboxForm = (props) => {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addMailbox(formData);
        setFormData(initialState);
        navigate('/mailboxes');
    };

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value })
    }

    return (
        <>
            <h2>New Mailbox</h2>
            <p></p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxHolder">Box Holder</label>
                <input
                    id="boxHolder"
                    name="boxHolder"
                    type="text"
                    value={formData.boxHolder}
                    onChange={handleChange}
                ></input>

                <p></p>

                <label htmlFor="boxSize">Box Size</label>
                <select 
                name="boxSize" 
                id="boxSize" 
                value={formData.boxSize}
                onChange={handleChange}>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
                <p></p>
                <button onClick={handleSubmit}>Submit Mailbox</button>
            </form>
        </>
    )
}

export default MailboxForm;