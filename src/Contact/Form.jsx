const Form = () => {
    return (
        <>
            <div className="contacts-right">
                <form action="https://formsubmit.co/vgan3v@gmail.com" method="POST">
                    <input type="text" name="text" id="text-field" placeholder="Your name" required />
                    <input type="email" name="email" id="email-field" placeholder="Your email" required />
                    <textarea name="textarea" rows="6" id="textarea-field" placeholder="Your message"
                        required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </>
    );
};

export default Form;