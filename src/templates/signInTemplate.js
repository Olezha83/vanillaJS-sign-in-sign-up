export const signInTemplate = `
  <div class="wrapper">
    <p class="field-heading">Your login</p>
    <div class="field-wrapper">
      <input id="login" />
      <div id="login-error">
        <p>Such user doesn't exist</p>
      </div>
    </div>

    <p class="field-heading">Your password</p>
    <div class="field-wrapper">
      <input id="password" type="password" />
      <div id="password-error">
        <p>Incorrect password</p>
      </div>
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

    .field-heading {
      margin-top: 8px;
      margin-bottom: 4px;
      font-weight: 700;
    }

    .field-heading:first-child {
      margin-top: 2px;
    }

    .field-wrapper {
        position: relative;
    }

    input {
      width: 222px;
    }

    input, button {
      padding: 4px 8px;
      border-width: 1px;
      border-radius: 4px;
    }

    #login-error, #password-error {
      position: absolute;
      display: none;
      border: 1px solid #f00;
      padding: 2px;
      background: #ffeded;
      right: -6px;
      top: -29px;
    }

    #login-error>p, #password-error>p, #congrats>p {
      text-align: center;
      margin: 0;
      font-style: italic;
      font-size: 14px;
    }

    #login-error::after, #password-error::after {
      content: '';
      position: absolute;
      display: block;
      width: 0;
      height: 0;
      left: 50%;
      bottom: -7px;
      transform: translateX(-50%);
      border-top: 6px solid #f00;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
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

    #button-paragraph {
      text-align: center;
      margin: 16px 0 4px;
    }

    #congrats {
      position: absolute;
      display: none;
      width: 100%;
      box-sizing: border-box;
      border: 1px solid #090;
      background: #bdf4bd;
      padding: 2px;
      top: auto;
      bottom: -50px;
      left: 0;
    }

    #congrats>p {
      font-size: 16px;
    }

    #congrats>p:first-child {
      text-transform: uppercase;
    }
  </style>
`
