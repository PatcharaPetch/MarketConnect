import NavBar from "../components/NavBar";
import "./Support.scoped.css";

const Support = () => {
    return (
        <div className="container">
            <NavBar />
            <div className="main-box">
                <img src="/saitama.png" alt="" />
                <div className="form-box">
                    <h1>Contact Us</h1>
                    <form action="" method="post">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" />
                        <label htmlFor="contact">Contact Number</label>
                        <input type="text" name="contact" />
                        <label htmlFor="message">Message</label>
                        <textarea name="textarea" id="" cols="50" rows="4"></textarea>
                        <button className="send-button">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Support;