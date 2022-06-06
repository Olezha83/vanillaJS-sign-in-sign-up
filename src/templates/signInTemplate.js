export const signInTemplate = `
  <div class="wrapper">
    <p class="field-heading">Enter your login</p>
    <input id="login" />
    <div id="login-error">
      <p>Such user doesn't exist</p>
    </div>
    
    <p class="field-heading">Enter your password</p>
    <input id="password" type="password" />
    <div id="password-error">
      <p>Incorrect password</p>
    </div>

    <p class="field-heading" id="avatar-paragraph">Your avatar</p>
    
    <div id="button-paragraph">
      <button id="submit">Sign in</button>
    </div>
    
    <div id="congrats">
      <p>Congratulations!</p>
      <p>You are now logged in!</p>
    </div>
  </div>

  <style>
    .wrapper {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 240px;
      box-shadow: 0 0 4px #0007;
      padding: 8px;
      border-radius: 4px;
    }

    #button-paragraph {
      text-align: center;
      margin: 16px 0 4px;
    }

    #avatar-paragraph {
      display: none;
    }

    #avatar-picture {
      display: block;
      width: 130px;
      height: 130px;
      margin-bottom: 10px;
      cursor: pointer;
      border: 1px solid #767676;
      border-radius: 50%;
    }

    #login-error, #password-error, #congrats {
      display: none;
      border: 1px solid #f00;
      margin: 4px 0;
      background: #f004;
    }

    #login-error>p, #password-error>p, #congrats>p {
      text-align: center;
      margin: 0;
      font-style: italic;
    }

    #congrats {
      margin-top: 8px;
      border: 1px solid #090;
      background: #0904;
    }

    #congrats>p:first-child {
      text-transform: uppercase;
    }
    
    .field-heading {
      margin-top: 8px;
      margin-bottom: 4px;
      font-weight: 700;
    }

    field-heading:first-child {
      margin-top: 2px;
    }
    
    input {
      width: 222px;
    }
    
    input, button {
      padding: 4px 8px;
      border-width: 1px;
      border-radius: 4px;
    }
  </style>
`