import SocialMedia from "./SocialMeida";
import Form from "./Form";

const Contacts = () => {
    return (
        <div id="contacts" >
            <div className="container">
                <h1 className="sub-title">Contact <span>me</span></h1>
                <div className="row">
                    <SocialMedia />
                    <Form />
                </div>
            </div>
        </div >
    );
};

export default Contacts;