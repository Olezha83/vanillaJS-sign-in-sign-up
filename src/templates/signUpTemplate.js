export const signUpTemplate = `
  <div class="wrapper">
    <p>Enter your login</p>
    <input id="login" />
    <p>Enter your password</p>
    <input id="password" type="password" />
    <p>Choose your avatar</p>
    <label>
      <p id="label-text">Click here</p>
      <input id="avatar" type="file" />
    </label>
    <p id="button-paragraph">
      <button id="submit">Sign up</button>
    </p>
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
      margin-top: 16px;
    }
    
    #label-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 20px;
      text-transform: uppercase;
      text-align: center;
      color: #aaa;
    }
    
    p {
      margin-top: 8px;
      margin-bottom: 4px;
      font-weight: 700;
    }
    
    p:first-child {
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
    
    label {
      display: block;
      position: relative;
      width: 130px;
      height: 130px;
      margin-bottom: 10px;
      border: 1px inset #767676;
      border-radius: 50%;
    }
    
    input[type="file"] {
      display: none;
    }
  </style>
`