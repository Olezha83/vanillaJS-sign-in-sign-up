export const signUpTemplate = `
  <div class="wrapper">
    <p class="field-heading">Your login</p>
    <div class="field-wrapper">
      <input id="login" />
      <div id="login-error">
        <p>This login is not available.</p>
        <p>Choose another login</p>
      </div>
    </div>

    <p class="field-heading">Your password</p>
    <div class="field-wrapper higher-index">
      <input id="password" type="password" />
      <div id="password-info">
        <p>Password rules:</p>
        <ul>
          <li><span>From 6 to 16 characters</span></li>
          <li><span>Only English letters</span></li>
          <li><span>One digit (min.)</span></li>
          <li><span>One of: !@#$%^&* (min.)</span></li>
        </ul>
      </div>
      <div id="password-error">
        <p>Incorrect password.</p>
        <p>See password rules</p>
      </div>
    </div>

    <p class="field-heading">Your avatar</p>
    <div class="field-wrapper">
      <label for="avatar-select">
        <img src="https://www.sibberhuuske.nl/wp-content/uploads/2016/10/default-avatar.png" id="avatar-picture" alt="user avatar">
      </label>
      <input id="avatar-select" type="file" />
      <div id="avatar-error">
        <p>Illegal file type.</p>
        <p>Choose image file</p>
      </div>
    </div>

    <div id="button-paragraph">
      <button id="submit" disabled>Sign up</button>
    </div>

    <div id="congrats">
      <p>Congratulations!</p>
      <p>You are registered now!</p>
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

    #login-error, #password-error, #avatar-error {
      position: absolute;
      display: none;
      border: 1px solid #f00;
      padding: 2px;
      background: #ffeded;
      right: -6px;
      top: -46px;
    }

    #login-error>p, #password-error>p, #avatar-error>p, #congrats>p {
      text-align: center;
      margin: 0;
      font-style: italic;
      font-size: 14px;
    }

    #login-error::after, #password-error::after, #avatar-error::after, #password-info::after {
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

    #password-info {
      position: absolute;
      display: none;
      border-radius: 4px;
      border: 1px solid #ddd;
      padding: 4px;
      font-size: 12px;
      top: 32px;
      right: -16px;
      background: #fff;
      pointer-events: none;
    }

    #password-info p {
      margin: 0;
      font-style: italic;
    }

    #password-info ul {
      padding-inline-start: 16px;
      margin: 4px 0 0;
    }

    #password-info span {
      position: relative;
      left: -3px;
    }

    #password-info::after {
      border-top: none;
      border-bottom: 6px solid #ddd;
      top: -7px;
    }

    .higher-index {
      z-index: 5;
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

    input[type="file"] {
      display: none;
    }

    #avatar-error {
      top: 50%;
      transform: translateY(-50%);
    }

    #avatar-error::after {
      left: -7px;
      top: 50%;
      transform: translateY(-50%);
      border-right: 6px solid #f00;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: none;
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
