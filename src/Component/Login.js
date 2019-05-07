import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {login} from '../Redux/action'
import { withRouter } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";

class FilledTextFields extends React.Component {
  state = {
    username: '',
    password: '',
  };


  handleSubmit = (e) => {
    e.preventDefault();
    // var author = this.state.author.trim();
    // var text = this.state.text.trim();
    if (!this.state.username || !this.state.password) {
        return;
    }
    let payload = {
      username : this.state.username,
      password : this.state.password
    }
    this.props.login(payload)
    
  }

  componentWillReceiveProps (nextProps){
    if(nextProps.logon===true){
      this.props.history.push('/translate');
    }else{
      alert(nextProps.logon)
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <MDBCardHeader className="form-header deep-blue-gradient rounded">
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Login:
                </h3>
              </MDBCardHeader>
              <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                <div className="grey-text">
                  <MDBInput
                    label="Type your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    value={this.state.username}
                    onChange={e => this.setState({username:e.target.value})}
                  />
                  <MDBInput
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    value={this.state.password}
                    onChange={e => this.setState({password:e.target.value})}
                  />
                </div>

              <div className="text-center mt-4">
                <MDBBtn
                  color="light-blue"
                  className="mb-3"
                  type="submit"
                >
                  Login
                </MDBBtn>
              </div>
              </form>
              <MDBModalFooter>
                <div className="font-weight-light">
                  <p>Not a member? Sign Up</p>
                  <p>Forgot Password?</p>
                </div>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  logon : state.logon
})

const mapDispatchToProps = {
  login
}

FilledTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilledTextFields));
