export const signInTemplate = `
  <div class="wrapper">
    <p class="field-heading">Enter your login</p>
    <input id="login" />
    <p class="field-heading">Enter your password</p>
    <input id="password" type="password" />
    <div id="button-paragraph">
      <button id="submit">Sign in</button>
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
  </style>
`