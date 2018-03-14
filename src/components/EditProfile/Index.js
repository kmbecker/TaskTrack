import React, { Component } from 'react';

class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.handleEditProfileSubmit = this.handleEditProfileSubmit.bind(this);
  }
  handleEditProfileSubmit(event) {
    event.preventDefault();

    const {
      user,
      handleEditProfileSubmit
    } = this.props;
    let userID = user._id;
    let updateProfile = user;

    updateProfile.username = this.refs.username.value;
    updateProfile.firstName = this.refs.firstName.value;
    updateProfile.lastName = this.refs.lastName.value;
    updateProfile.email = this.refs.email.value;

    handleEditProfileSubmit(userID, updateProfile);
  }
  render() {
    const {
      user,
      handleEditProfileState
    } = this.props;
    const {
      handleEditProfileSubmit
    } = this;

    return(
      <article className="container box style3">
        <form>
          <section>
            <header>
              <h2>About</h2>
            </header>
            <div className="row 50%">
              <div className="12u$">
                <label htmlFor="username">Username&nbsp;
                  <span className="required">*</span>
                </label>
                <input id="username" ref="username" type="text" className="text" placeholder="Username" defaultValue={user.username} required />
              </div>
              <div className="6u 12u$(mobile)">
                <label htmlFor="firstName">First Name&nbsp;
                  <span className="required">*</span>
                </label>
                <input id="firstName" ref="firstName" type="text" className="text" placeholder="First Name" defaultValue={user.firstName} required />
              </div>
              <div className="6u$ 12u$(mobile)">
                <label htmlFor="lastName">Last Name&nbsp;
                  <span className="required">*</span>
                </label>
                <input id="lastName" ref="lastName" type="text" className="text" placeholder="Last Name" defaultValue={user.lastName} required />
              </div>
              <div className="12u$">
                <label htmlFor="email">Email:</label>
                <input id="email" ref="email" type="text" className="text" placeholder="E-mail" defaultValue={user.email} />
              </div>
            </div>
          </section>
          <section>
            <div className="row 50%">
              <div className="12u$">
                <ul className="actions">
                  <li>
                    <a className="button style1" onClick={handleEditProfileSubmit}>
                      Update
                    </a>
                  </li>
                  <li>
                    <a className="button style3" onClick={handleEditProfileState}>
                      Cancel
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </form>
      </article>
    )
  }
}

export default EditProfile;
