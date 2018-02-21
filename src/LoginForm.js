import React from 'react'
import { Icon, Button, Grid, Segment } from 'semantic-ui-react'
import openPopup from './popup';
import { getAllParams } from './parseUrl';
import axios from 'axios';

const CLIENT_ID = 'XXX';

const LoginForm = () => (
  <div className='login-form'>
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Segment stacked>
          <Button onClick={openLogin} icon labelPosition='left' color='black' fluid size='large'>
            <Icon name='github' />
            Login with Github
          </Button>
        </Segment>
      </Grid.Column>
    </Grid>
  </div>
)

export default LoginForm;

function openLogin() {
  const provider = 'github';
  var popup = openPopup(provider, 'https://github.com/login/oauth/authorize?client_id='+CLIENT_ID, provider);
  listenForCredentials(popup, provider);
}

function listenForCredentials (popup, provider, resolve, reject) {
  if (!resolve) {
    return new Promise((resolve, reject) => {
      listenForCredentials(popup, provider, resolve, reject);
    });

  } else {
    let creds;

    try {
      creds = getAllParams(popup.location);
    } catch (err) {}

    if (creds && creds.code) {
      popup.close();
      // Is authed
      // Send code to server --server will request token
    } else if (popup.closed) {
      reject({errors: "Authentication was cancelled."})
    } else {
      setTimeout(() => {
        listenForCredentials(popup, provider, resolve, reject);
      }, 1);
    }
  }
}