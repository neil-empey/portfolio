import React from 'react'
import Header from './Header'

export default function contact() {
    return (
        <div>
            <div class="container">


                <div class="panel panel-default">

                    <div className="contact-body">
                        <h2 className="contact-h2">Contact Me</h2>

                        <div class="panel-body">

                            <div class="container px-5 my-5">
                                <form id="contactForm" data-sb-form-api-token="5e423b3d-0a8b-49e9-8f8f-d472ea3c678a">
                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="name" type="text" placeholder="Name" data-sb-validations="required" />
                                        <label for="name">Name</label>
                                        <div class="invalid-feedback" data-sb-feedback="name:required">Name is required.</div>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                                        <label for="emailAddress">Email Address</label>
                                        <div class="invalid-feedback" data-sb-feedback="emailAddress:required">Email Address is required.</div>
                                        <div class="invalid-feedback" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <textarea class="form-control" id="message" type="text" placeholder="Message" data-sb-validations="required"></textarea>
                                        <label for="message">Message</label>
                                        <div class="invalid-feedback" data-sb-feedback="message:required">Message is required.</div>
                                    </div>
                                    <div class="d-none" id="submitSuccessMessage">
                                        <div class="text-center mb-3">
                                            <div class="fw-bolder">Form submission successful!</div>
                                            <h2 className="text-danger"><strong>SUCCESS</strong></h2>
                                        </div>
                                    </div>
                                    <div class="d-none" id="submitErrorMessage">
                                        <div class="text-center text-danger mb-3">Error sending message!</div>
                                    </div>
                                    <div class="d-grid">
                                        <button class="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >



    )

}