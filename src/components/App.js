import React, { Component } from "react";

class App extends Component {
  state = {
    email: "",
    isAgree: false,
  };

  handelEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handelisAgree = (e) => {
    this.setState({
      isAgree: e.target.checked,
    });
  };

  submitBtn = () => {
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const isValueEmail = regexEmail.test(this.state.email);

    const isValueisAgree = this.state.isAgree;

    if (!isValueEmail) {
      alert("Please, enter valid email");
      return;
    } else if (!isValueisAgree) {
      alert("Please, agree with terms");
      return;
    } else {
      alert("👏 Congratulations ");
    }
// Bu input va checked tozalaydi
    this.setState({
      email: "",
      isAgree: false,
    });
  };

  render() {
    const { email, isAgree } = this.state;
    return (
      <div className="contact">
        <div className="contact-card">
          <div className="contact-title">
            <h1>Contact Us</h1>
          </div>
          <div className="contact-form">
            <form action="#">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={this.handelEmail}
                />
              </div>
              <div>
                <input
                  type="checkbox"
                  name="checked"
                  id="checked"
                  checked={isAgree}
                  onChange={this.handelisAgree}
                />
                <label htmlFor="checked">Terms &amp; Conditions</label>
              </div>
              <button type="button" className="btn" onClick={this.submitBtn}>
                — Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
