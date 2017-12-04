import React from 'react';
import LogInPageNav from './login-page-nav';
import LogInForm from './login-form';
import {connect} from 'react-redux';

export function LoginPage() {
  return (
    <div>
      <LogInPageNav />
      <LogInForm />
    </div>
  );
}

export default connect()(LogInPage);