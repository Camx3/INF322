/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import {html, property, customElement, LitElement} from 'lit-element';
import {setPassiveTouchGestures} from "@polymer/polymer/lib/utils/settings";

// This element is connected to the Redux store.
import {RootState, store} from '../store.js';
import { customCss } from './style';
import '@polymer/paper-input/paper-input.js';
import '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/iron-localstorage/iron-localstorage.js';
import '@polymer/iron-input/iron-input.js';
import '@polymer/paper-button/paper-button.js';


// These are the actions needed by this element.
import {
  navigate
} from '../actions/app.js';

import{login} from "../actions/userlogin";
import {connect} from "pwa-helpers/connect-mixin";


@customElement('login-page')
export class LoginComponent extends connect(store)(LitElement) {

  @property({type: Boolean})
  private _user: Boolean | undefined ;

  @property({type: String})
  public userName: string = "";

  @property({type: String})
  public password: string = "";

  @property({type: String})
  private _page: string = '';


  constructor() {
    super();
    // To force all event listeners for gestures to be passive.
    // See https://www.polymer-project.org/3.0/docs/devguide/settings#setting-passive-touch-gestures
    setPassiveTouchGestures(true);
  }

  static get styles() {
    return [customCss];
  }



  _logIn () {
    if(this.userName!= "" ){
      if(this.password!= ""){
        store.dispatch(login(this.userName, this.password));
        store.dispatch(navigate('/home'));
      } else{
      }
    } else{

    }
  }

  setUsername(e:any) {
    this.userName = e.target.value;
  }

  setPassword(e:any) {
    this.password = e.target.value;
  }

  protected render() {
    /* (3) Implementar aca su componente con sus inputs, la logica de usuario debe pasar por redux para que se pueda
     * hacer la actualizacion en la pagina inicial. En este caso usamod 'login' definido en actions/app */
    return html`
${this._user ? html`
        <home-page class="page" ?active="${this._page === 'home'}"  username="${this.userName}"></home-page>
        <view404-page class="page" ?active="${this._page === 'view404'}"></view404-page>
`: html` 
<div class="custom-parent">
    <div id="unauthenticated">
        <h1>Log In</h1>
      <paper-input  @change=${(event:any) => this.setUsername(event)} id="username" type="text" value="${this.userName}" label="Usuario" auto-validate error-message="Necesita escribir el usuario" required>
     </paper-input>
        <paper-input @change=${(event:any) => this.setPassword(event)} label="Contraseña" type="password" value="${this.password}" id="password" auto-validate error-message="Necesita escribir una contraseña"required>
  </paper-input>
    <div class="wrapper-btns">
      <paper-button raised id="loginbutt" class="primary" on-tap="_login" @click="${this._logIn}">Log In</paper-button>
    </div>
    </div>
</div>
    `}`;
  }

  stateChanged(state: RootState) {
    this._page = state.app!.page;
    this._user = state.user.isLoggedIn;
    }
}

