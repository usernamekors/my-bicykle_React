import React, { Component } from 'react';

const myServices = {
    backgroundColor: '#1d809f',
    textAlign: 'center',
}

const myServicesH3 = {
    fontSize: '16px',
    textTransform: 'uppercase',
    color: 'rgb(236,184,7)',
    marginTop: '30px',
    padding: '30px',
}

const myServicesH2 = {
    fontSize: '48px',
    color: 'white',
    marginBottom: '48px',
    marginTop: '0',
}

const myForm = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}

const myLabel = {
    marginTop: '50px',
}

const myInput = {
    border: '1px solid #999',
    borderRadius: '20px',
    height: '30px',
    width: '200px'
}

const myButtom = {
    width: '20%',
    height: '70px',
    borderRadius: '20px',
    fontSize: '26px',
    margin: '25px 0 0 500px',
}

const mySpan = {
    color: '#FFD700',
    fontSize: '10px',
}


class Account extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        accept: false,
        messages: '',

        errors: {
            username: false,
            email: false,
            password: false,
            accept: false,
        }
    }

    messages = {
        username_incorrect: 'The name must be longer than 10 characters and can not contain spaces',
        email_incorrect: 'No @ in email',
        password_incorrect: 'The password must be 8 characters long',
        accept_incorrect: 'Not confirmed'
    }

    handelChange = (e) => {
        const type = e.target.type;
        const name = e.target.name;
        if (type === 'text' || type === 'password' || type === 'email') {
            const value = e.target.value;
            this.setState({
                [name]: value
            })
        } else if (type === 'checkbox') {
            const checked = e.target.checked;
            this.setState({
                [name]: checked
            })
        }
    }

    handelSubmit = (e) => {
        e.preventDefault();

        const validation = this.formValidation()

        if (validation.correct) {
            this.setState({
                username: '',
                email: '',
                password: '',
                accept: false,
                messages: 'Thank you !!!',

                errors: {
                    username: false,
                    email: false,
                    password: false,
                    accept: false,
                }
            })

        } else {
            this.setState({
                errors: {
                    username: !validation.username,
                    email: !validation.email,
                    password: !validation.password,
                    accept: !validation.accept,
                }
            })

        }
    }

    formValidation = () => {
        let username = false;
        let email = false;
        let password = false;
        let accept = false;
        let correct = false;

        if (this.state.username.length > 10 && this.state.username.indexOf(' ') === -1) {
            username = true;
        }

        if (this.state.email.indexOf('@') !== -1) {
            email = true;
        }

        if (this.state.password.length === 8) {
            password = true;
        }

        if (this.state.accept) {
            accept = true;
        }

        if (username && email && password && accept) {
            correct = true;
        }

        return ({
            username, email, password, accept, correct
        })

    }

    componentDidUpdate() {
        if (this.state.messages !== '') {
            setTimeout(() => this.setState({
                messages: ''
            }), 3000)
        }
    }
    render() {
        return (
            <div style={myServices}>
                <p style={myServicesH3}>My account</p>
                <p style={myServicesH2}>Account Login</p>
                <form style={myForm} onSubmit={this.handelSubmit} noValidate>
                    <label style={myLabel} htmlFor="user">
                        Name: <input style={myInput} type="text" id='user' name='username'
                            value={this.state.username} onChange={this.handelChange} />
                    </label>
                    {this.state.errors.username && <span style={mySpan}>{this.messages.username_incorrect}</span>}

                    <label style={myLabel} htmlFor="email">
                        Email: <input style={myInput} type="email" id='email' name='email'
                            value={this.state.email} onChange={this.handelChange} />
                    </label>
                    {this.state.errors.email && <span style={mySpan}>{this.messages.email_incorrect}</span>}

                    <label style={myLabel} htmlFor="password">
                        Password: <input style={myInput} type="password" id='password' name='password'
                            value={this.state.password} onChange={this.handelChange} />
                    </label>
                    {this.state.errors.password && <span style={mySpan}>{this.messages.password_incorrect}</span>}
                    <label style={myLabel} htmlFor="accept">
                        <input type="checkbox" id='accept' name='accept' checked={this.state.accept} onChange={this.handelChange} />I accept the transfer of my query to the service

                    </label>
                    {this.state.errors.accept && <span style={mySpan}>{this.messages.accept_incorrect}</span>}

                    <button style={myButtom}>Enter</button>
                </form>
                {this.state.messages && <h3>{this.state.messages}</h3>}
            </div >
        );
    }
}
export default Account;