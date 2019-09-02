import React, {Component} from 'react'
import Fade from 'react-reveal/Fade'
import {createContact} from "../../store/actions/contactActions";
import {connect} from "react-redux";
import * as emailjs from 'emailjs-com';

class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }

    resetForm() {
        document.getElementById("contact-form").reset();
    }

    sendEmail () {
        const templateParams = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };
        const service_id = "default_service";
        const template_id = "test";

        emailjs.send(service_id,template_id, templateParams, 'user_KQCgLkWeb8yQAmOyeC1rA')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(err) {
                console.log('FAILED...', err);
            });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.name !== '' && this.state.email !== '' && this.state.message !== ''){
            this.props.createContact(this.state)
            this.resetForm()
            this.sendEmail()
            alert('Logan has been notified and will be getting back to you very shortly!')
        }else {
            alert('All fields are required to send message')
        }
    }

    render() {
        return (
            <div className="contact">
                <div className="pt-5">
                    <h4 className="display-4 text-center pt-2 titles contact-title">Contact</h4>
                    <hr className="hr-sections contact-hr"/>
                    <div className="contact-form mt-4">
                        <form method="POST" id="contact-form">
                            <Fade bottom>
                                <input type="text" id="name" className="form-control mx-auto" placeholder="Name" onChange={this.handleChange}/>
                            </Fade>
                            <Fade bottom delay={100}>
                                <input type="text" id="email" className="form-control mt-3 mx-auto" placeholder="Email" onChange={this.handleChange}/>
                            </Fade>
                            <Fade bottom delay={200}>
                                <textarea className="form-control mt-3 mx-auto textarea" rows="9" id="message" placeholder="Your Message" onChange={this.handleChange}/>
                            </Fade>
                            <br/>
                            <Fade bottom delay={300}>
                                <div className="text-center">
                                    <button type="button" className="btn btn-primary form-btn" onClick={e => this.handleSubmit(e)}>Send</button>
                                </div>
                            </Fade>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createContact: (playlist) => dispatch(createContact(playlist)),
    }
};


export default connect(null, mapDispatchToProps)(Contact)