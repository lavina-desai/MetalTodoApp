'use strict';

import templates from './FormDetails.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

class FormDetails extends Component {

    handleChange(event) {
        // console.log(event);
        this.state.sname = event.target.value;
        if (this.value) {
            this.emit('addFormDetail', {
                title: this.value
            });

            this.value = '';
        }
    }

    handleSubmit(event) {
        console.log("name=" + this.state.sname);
        event.preventDefault();
    }
}
Soy.register(FormDetails, templates);

FormDetails.STATE = {
    sname: {
        value: ''
    },
}

export { FormDetails };
export default FormDetails;