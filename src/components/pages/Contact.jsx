import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      {" "}
      {/* Breadcrumb Start */}
      <nav className="breadcrumb-nav m-3" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link className="navbar-brands " to="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item " aria-current="page">
            Contact Us
          </li>
        </ol>
      </nav>
      <div className="container">
        <section class="mb-4">
          {/* <!--Section heading--> */}
          <h3 class="h1-responsive font-weight-bold text-center my-4">
            Contact us
          </h3>
          {/* <!--Section description--> */}
          <p class="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </p>

          <div class="row">
            {/* <!--Grid column--> */}
            <div class="col-md-9 mb-md-0 mb-5">
              <form
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
              >
                {/* <!--Grid row--> */}
                <div class="row">
                  {/* <!--Grid column--> */}
                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        class="form-control"
                      />
                      <label for="name" class="">
                        Your name
                      </label>
                    </div>
                  </div>
                  {/* <!--Grid column--> */}

                  {/* <!--Grid column--> */}
                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        class="form-control"
                      />
                      <label for="email" class="">
                        Your email
                      </label>
                    </div>
                  </div>
                  {/* <!--Grid column--> */}
                </div>
                {/* <!--Grid row--> */}

                {/* <!--Grid row--> */}
                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        class="form-control"
                      />
                      <label for="subject" class="">
                        Subject
                      </label>
                    </div>
                  </div>
                </div>
                {/* <!--Grid row--> */}

                {/* <!--Grid row--> */}
                <div class="row">
                  {/* <!--Grid column--> */}
                  <div class="col-md-12">
                    <div class="md-form">
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="2"
                        class="form-control md-textarea"
                      ></textarea>
                      <label for="message">Your message</label>
                    </div>
                  </div>
                </div>
                {/* <!--Grid row--> */}
              </form>

              <div class="text-center text-md-left">
                <a
                  class="btn btn-primary"
                  onclick="document.getElementById('contact-form').submit();"
                >
                  Send
                </a>
              </div>
              <div class="status"></div>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div class="col-md-3 text-center">
              <ul class="list-unstyled mb-0">
                <li>
                  <i class="fas fa-map-marker-alt fa-2x"></i>
                  <p>
                    1090/K, 18th Cross Rd, Sector 3, HSR Layout, Bengaluru,
                    Karnataka 560102
                  </p>
                </li>

                {/* <li>
                <i class="fas fa-phone mt-4 fa-2x"></i>
                <p>+ 01 234 567 89</p>
              </li> */}

                <li>
                  <i class="fas fa-envelope mt-4 fa-2x"></i>
                  <p>https://www.crowdanalytix.com/contact/</p>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
