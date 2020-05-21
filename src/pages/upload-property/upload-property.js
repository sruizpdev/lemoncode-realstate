import { formValidation } from './upload-property.validation';
import { history, routes } from '../../core/router';
import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors } from '../../common/helpers';
import { insertProperty, getSaleTypes, getEquipList } from './upload-property.api';
import { setCheckboxList, setOptionList, onAddFeature, onAddImage } from './upload-property.helpers';
import { getProvincesList } from '../property-list/property-list.api';



let newProperty = {
    id: '',
    title: '',
    notes: '',
    email: '',
    phone: '',
    price: '',
    saleTypeIds: [],
    address: '',
    city: '',
    provinceId: '',
    squareMeter: '',
    rooms: '',
    bathrooms: '',
    locationUrl: '',
    mainFeatures: [],
    equipmentIds: [],
    images: []


}


onUpdateField('title', (event) => {
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        title: value
    };
    console.log(newProperty);


    formValidation.validateField('title', newProperty.title).then(result => {
        onSetError('title', result);
    });
});
onUpdateField('notes', (event) => {
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        notes: value
    };
    console.log(newProperty);
    formValidation.validateField('notes', newProperty.notes).then(result => {
        onSetError('notes', result);
    });
});

onUpdateField('email', (event) => {
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        email: value
    };

    formValidation.validateField('email', newProperty.email).then(result => {
        onSetError('email', result);
    });
});
onUpdateField('phone', (event) => {
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        email: value
    };

    formValidation.validateField('phone', newProperty.phone).then(result => {
        onSetError('phone', result);
    });
});
onUpdateField('price', (event) => {
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        price: value
    };

    formValidation.validateField('price', newProperty.price).then(result => {
        onSetError('price', result);
    });
});
onSubmitForm('save-button', () => {
    console.log(newProperty);

    formValidation.validateForm(newProperty).then(result => {
        onSetFormErrors(result);

        if (result.succeeded) {
            insertProperty(newProperty).then(() => { history.push(routes.propertyList) });
        }
    });


});
let newFeature = '';
onUpdateField('newFeature', (event) => {
    newFeature = event.target.value;

});
onSubmitForm('insert-feature-button', () => {
    if (newFeature != '') {
        onAddFeature(newFeature);
    }
});

getProvincesList().then(provinceList => {
    setOptionList(provinceList, 'province');
});

getSaleTypes().then(saleTypesList => {
    setCheckboxList(saleTypesList, 'saleTypes');
    getEquipList().then(equipList => {
        setCheckboxList(equipList, 'equipments');
    })
});

onUpdateField('add-image', (event) => {
    onAddImage(event.target.value);
    insertProperty(newProperty);
});


