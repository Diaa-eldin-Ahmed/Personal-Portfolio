import React, { useContext } from "react";
import "./Contact.css";
// import emailjs from "@emailjs/browser";
import { useForm, ValidationError } from "@formspree/react";
import { themeContext } from "../../Context";
const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const [state, handleSubmit] = useForm("mwkzparz");
    if (state.succeeded) {
        return (
            <>
                <div className="thankContact">Thanks for Contacting me</div>
            </>
        );
    }

    return (
        <div className="contact-form" id="contact">
            {/* left side copy and paste from work section */}
            <div className="w-left">
                <div className="awesome">
                    {/* darkMode */}
                    <span style={{ color: darkMode ? "white" : "" }}>
                        Get in Touch
                    </span>
                    <span>Contact me</span>
                    <div
                        className="blur s-blur1"
                        style={{ background: "#ABF1FF94" }}
                    ></div>
                </div>
            </div>
            {/* right side form */}
            <div className="c-right">
                {/* <form
                    // action="https://formsubmit.co/d15cb1256ba4f2e53cbe9361fdeace5a"
                    action="https://formspree.io/f/mwkzparz"
                    method="POST"
                    ref={form}
                    onSubmit={sendEmail}
                >
                    <input
                        type="text"
                        name="userName"
                        className="user"
                        placeholder="Name"
                        required
                    />
                    <input
                        type="email"
                        name="userEmail"
                        className="user"
                        placeholder="Email"
                        required
                    />
                    <textarea
                        name="message"
                        className="user"
                        placeholder="Message"
                        required
                    />
                    <button type="submit" className="button">
                        Send
                    </button>
                    <span>{done && "Thanks for Contacting me"}</span>
                    <div
                        className="blur c-blur1"
                        style={{ background: "var(--purple)" }}
                    ></div>
                </form> */}
                <form onSubmit={handleSubmit}>
                    {/* <label htmlFor="email">Email Address</label>
                    <input id="email" type="email" name="email" />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    /> */}
                    <input
                        id="name"
                        type="name"
                        name="name"
                        className="user"
                        placeholder="Your Name"
                        required
                    />
                    <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    />
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="user"
                        placeholder="E-mail"
                        required
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <textarea
                        id="message"
                        name="message"
                        className="user"
                        placeholder="Message"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="button"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
