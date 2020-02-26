import {css } from 'lit-element';

export const customCss = css`
:host {
  display: block;
  height: 100vh;
}

.page {
  display: none;
}

.page[active] {
  display: block;
}

#main {
  display: grid;
  height: 100%;
  grid-template-columns: 300px calc(100% - 300px);
  grid-template-rows: 100px calc(100% - 100px);
}

#header {
  grid-row: 1;
  grid-column: 1 / 3;
  border: 1px dotted red;
}

#nav-bar {
  grid-row: 2;
  grid-column: 1;
  border: 1px dotted blue;
}

#content {
  grid-row: 2;
  grid-column: 2;
  border: 1px dotted green;
}

#logInButton {
  cursor: pointer;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 5px;
  background: aliceblue;
}

#logInButton:hover {
  background: aqua;
}

.centered {
  display: flex;
  height: 100%;
}

.custom-parent {
      font-size: 12px;
      margin: auto;
      width: 30%;
      padding: 100px;
    }
    paper-input.custom:hover {
      border: 1px solid #29B6F6;
    }
    paper-input.custom {
      margin-bottom: 14px;
      --paper-input-error:{
      
      }
      --primary-text-color: #01579B;
      --paper-input-container-color: black;
      --paper-input-container-focus-color: black;
      --paper-input-container-invalid-color: black;
      border: 0.5px solid #BDBDBD;
      border-radius: 5px;

      /* Reset some defaults */
      --paper-input-container: { padding: 0;};
      --paper-input-container-underline: { display: none; height: 0;};
      --paper-input-container-underline-focus: { display: none; };

      /* New custom styles */
      --paper-input-container-input: {
        box-sizing: border-box;
        font-size: inherit;
        padding: 4px;
      };
      --paper-input-container-input-focus: {
        background: rgba(0, 0, 0, 0.1);
      };
      --paper-input-container-input-invalid: {
        background: rgba(255, 0, 0, 0.3);
      };
      --paper-input-container-label: {
        top: -8px;
        left: 4px;
        background: white;
        padding: 2px;
        font-weight: bold;
      };
      --paper-input-container-label-floating: {
        width: auto;
      };
    }
    

img{
  background-image: url('//http://www.exalumnos.usm.cl/wp-content/uploads/2015/06/MARCA-Color.jpg');
  display: block;
  margin-left: 0px;
  margin-top: 0px;
  margin-right: auto;
  padding: 0px;
  float: left;
  height: 50%;
  width: 17.2%;
  
}
app-drawer-layout:not([narrow]) [drawer-toggle] {
      display: none;
    }
    .avatar-container {
      position: relative;
      border: 2px solid #00AA8D;
      border-radius: 50%;
      height: 90px;
      padding: 2px;
      width: 90px;
      margin: 20px auto;
    }
    
    .
    .avatar-container .image {
      background-image: url('//app-layout-assets.appspot.com/assets/pesto/avatar.jpg');
      background-size: contain;
      border-radius: 50%;
      height: 100%;
      width: 100%;
    }
    .contact-info {
      margin: 0 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #CCC;
      text-align: center;
    }
    .contact-info .name {
      font-weight: bold;
    }
    .contact-info .email {
      color: #999;
    }
    paper-item {
      height: 54px;
    }
    paper-item > a {
      width: 100%;
      height: 100%;
      line-height: 54px;
      text-align: center;
      text-decoration: none;
      color: black;
    }
    paper-icon-button {
      --paper-icon-button-ink-color: white;
    }
    .dropbtn {
  background-color: #3498DB;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropbtn:hover, .dropbtn:focus {
  background-color: #2980B9;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown a:hover {background-color: #ddd;}

.show {display: block;}

.wrapper-btns {
    margin-top: 15px;
}
paper-button.link {
    color: #757575;
}



.logoutButt {
  transition-duration: 0.4s;
  margin-left: auto;
  margin-top: 25px;
  margin-right: 0px;
  padding: 0px;
  background-color: white;
  color: black;
  font-size: 14px;
  background: red;
  height: 25%;
}




`;
