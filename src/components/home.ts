/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import {html, customElement, property} from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { store } from '../store.js';
import {logout} from "../actions/userlogin";

// This element is connected to the Redux store.
import { customCss } from './style';

import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/paper-button/paper-button.js';

import userlogin from '../reducers/userlogin';
store.addReducers({
  userlogin
});

@customElement('home-page')
export class HomePage extends PageViewElement {
  static get styles() {
    return [customCss];
  }

  @property({type: String})
  public userName: string = "";


  _logOut(){
    store.dispatch(logout());
  }

  protected render() {
    /* Aca va el contenido, pueden poner contenido dummy */
    return html`
    <app-drawer-layout responsive-width="1280px" style="background: blue">
    <app-drawer id="drawer" opened persistent slot="drawer" style="">
        <app-header-layout has-scrolling-region style="background: orangered">
          <app-header fixed slot="header">
           
          </app-header>
          <!-- nav menu -->
          <!-- Two way binding to the selected property has been removed due to polymer/issues/4405 -->
          <paper-listbox attr-for-selected="name" style="background: orangered">
          <paper-item name="space">
             <a name="name">${this.userName}</a>    
             </paper-item><br>
             <paper-item name="foto">
                <a name="foto">Foto</a>
                </paper-item>
                 <br><br>
            <paper-item name="noticias" >
              <a name="name">Noticias</a>
            </paper-item>
            <paper-item name="ramos" >
              <a name="name">Ramos</a>
            </paper-item>
           
            <paper-item name="solicitudes" >
              <a name="name">Solicitudes Externas</a>
            </paper-item>
            <paper-item name="enlaces" >
              <a name="name">Enlaces Externos</a>
            </paper-item>
          </paper-listbox>
        </app-header-layout>
      </app-drawer>
      <div id="header"> 
      <div class="centered"> 
      <h1 style="color: white; margin-left: auto" >SIGA</h1>
      <div class="logoutButt">
      <paper-button raised class="primary" @click="${this._logOut}">Log Out</paper-button>
      </div>
      </div>
       
      </div>
  <!-- list/detail pages -->
    </app-drawer-layout>
`;
  }
}
