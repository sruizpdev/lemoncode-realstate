import { formValidation } from './upload-property.validation';
import { history, routes } from '../../core/router';
import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors } from '../../common/helpers';
import { insertProperty } from './upload-property.api';


let formu = {
    title: '',
    notes: '',
    email: '',
    phone: ''
};

onUpdateField('title', (event) => {
    const value = event.target.value;
    formu = {
        ...formu,
        title: value
    };

    formValidation.validateField('title', formu.title).then(result => {
        onSetError('title', result);
    });
});
onUpdateField('notes', (event) => {
    const value = event.target.value;
    formu = {
        ...formu,
        notes: value
    };

    formValidation.validateField('notes', formu.notes).then(result => {
        onSetError('notes', result);
    });
});

onUpdateField('email', (event) => {
    const value = event.target.value;
    formu = {
        ...formu,
        email: value
    };

    formValidation.validateField('email', formu.email).then(result => {
        onSetError('email', result);
    });
});
onUpdateField('phone', (event) => {
    const value = event.target.value;
    formu = {
        ...formu,
        email: value
    };

    formValidation.validateField('phone', formu.phone).then(result => {
        onSetError('phone', result);
    });
});
onUpdateField('price', (event) => {
    const value = event.target.value;
    formu = {
        ...formu,
        price: value
    };

    formValidation.validateField('price', formu.price).then(result => {
        onSetError('price', result);
    });
});
onSubmitForm('save-button', () => {
    console.log(formu);

    formValidation.validateForm(formu).then(result => {
        onSetFormErrors(result);

        if (result.succeeded) {
            insertProperty(formu).then(() => { history.push(routes.propertyList) });
        }
    });


});