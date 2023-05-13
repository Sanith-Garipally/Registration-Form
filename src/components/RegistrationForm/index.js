import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    showFirstNameError: false,
    showLastNameError: false,
    isFormSubmitted: false,
  }

  handleInput = e => {
    if (e.target.id === 'firstname') {
      this.setState({
        firstname: e.target.value,
      })
    } else {
      this.setState({
        lastname: e.target.value,
      })
    }
  }

  handleForm = e => {
    e.preventDefault()

    const {firstname, lastname} = this.state
    let firstNameError
    let lastNameError
    if (!firstname && !lastname) {
      firstNameError = true
      lastNameError = true
    } else if (!lastname) {
      lastNameError = true
    } else if (!firstname) {
      firstNameError = true
    }

    if (!firstNameError && !lastNameError) {
      this.setState({
        firstname: '',
        lastname: '',
        showFirstNameError: false,
        showLastNameError: false,
        isFormSubmitted: true,
      })
    } else {
      this.setState({
        showFirstNameError: firstNameError,
        showLastNameError: lastNameError,
      })
    }
  }

  handleInputFocus = e => {
    const {firstname, lastname} = this.state
    if (e.target.id === 'firstname' && !firstname) {
      this.setState({
        showFirstNameError: true,
      })
    } else if (e.target.id === 'firstname' && firstname) {
      this.setState({
        showFirstNameError: false,
      })
    }
    if (e.target.id === 'lastname' && !lastname) {
      this.setState({
        showLastNameError: true,
      })
    } else if (e.target.id === 'lastname' && lastname) {
      this.setState({
        showLastNameError: false,
      })
    }
  }

  handleNewFormResponse = () => {
    this.setState({
      isFormSubmitted: false,
    })
  }

  render() {
    const {
      firstname,
      lastname,
      showFirstNameError,
      showLastNameError,
      isFormSubmitted,
    } = this.state

    return (
      <div className="bg-container">
        <h1 className="head">Registration</h1>
        {isFormSubmitted ? (
          <div className="success-container">
            <img
              alt="success"
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
            />
            <p className="success-para">Submitted Successfully</p>
            <button
              className="form-button"
              onClick={this.handleNewFormResponse}
              type="button"
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <>
            <form className="form" onSubmit={this.handleForm}>
              <div className="form-item">
                <label className="label" htmlFor="firstname">
                  FIRST NAME
                </label>
                <input
                  className={`input ${showFirstNameError && 'focus-input'}`}
                  onChange={this.handleInput}
                  onBlur={this.handleInputFocus}
                  value={firstname}
                  id="firstname"
                  type="text"
                  placeholder="First name"
                />
                {showFirstNameError && <p className="error">Required</p>}
              </div>
              <div className="form-item">
                <label className="label" htmlFor="lastname">
                  LAST NAME
                </label>
                <input
                  className={`input ${showLastNameError && 'focus-input'}`}
                  onChange={this.handleInput}
                  onBlur={this.handleInputFocus}
                  value={lastname}
                  id="lastname"
                  type="text"
                  placeholder="Last name"
                />
                {showLastNameError && <p className="error">Required</p>}
              </div>
              <div className="form-item">
                <button className="form-button" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    )
  }
}

export default RegistrationForm
