export const signUpTemplate = `
  <div class="wrapper">
    <p class="field-heading">Enter your login</p>
    <input id="login" />
    <div id="login-error">
      <p>This login is not available.</p>
      <p>Choose another login</p>
    </div>

    <p class="field-heading">Enter your password</p>
    <input id="password" type="password" />
    <div id="password-info">
      <p>Password rules:</p>
      <ul>
        <li><span>From 6 to 16 characters</span></li>
        <li><span>Any English letters</span></li>
        <li><span>At least one digit</span></li>
        <li><span>At least one special symbol: !@#$%^&*</span></li>
      </ul>
    </div>
    <div id="password-error">
      <p>This password is incorrect.</p>
      <p>See password rules above</p>
    </div>

    <p class="field-heading">Choose your avatar</p>
    <label for="avatar-select">
      <img src="https://www.sibberhuuske.nl/wp-content/uploads/2016/10/default-avatar.png" id="avatar-picture" alt="user avatar">
    </label>
    <input id="avatar-select" type="file" />
    <div id="avatar-error">
      <p>Illegal file type. Choose image file</p>
    </div>

    <div id="button-paragraph">
      <button id="submit" disabled>Sign up</button>
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
    
    #avatar-picture {
      display: block;
      width: 130px;
      height: 130px;
      margin-bottom: 10px;
      cursor: pointer;
      border: 1px solid #767676;
      border-radius: 50%;
    }

    #login-error, #password-error, #avatar-error {
      display: none;
      border: 1px solid #f00;
      margin: 4px 0;
      background: #f004;
    }

    #login-error>p, #password-error>p, #avatar-error>p {
      text-align: center;
      margin: 0;
      font-style: italic;
    }
    
    #password-info {
      display: none;
      border-radius: 4px;
      border: 1px solid #ddd;
      padding: 4px;
      margin: 4px 0;
      font-size: 12px;
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
    
    .field-heading {
      margin-top: 8px;
      margin-bottom: 4px;
      font-weight: 700;
    }
    
    .field-heading:first-child {
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
    
    input[type="file"] {
      display: none;
    }
  </style>
`