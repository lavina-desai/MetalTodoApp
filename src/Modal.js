'use strict';

import templates from './Modal.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './todo.scss';

class Modal extends Component {
	hide() {
		// All Metal.js components already have a `visible` state which sets the
		// main element's `display` to "none" when set to false.
		this.visible = false;
	}	
    
}
Soy.register(Modal, templates);


export { Modal };
export default Modal;
