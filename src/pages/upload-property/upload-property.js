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
onUpdateField('city', (event) => {
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        city: value
    };
    formValidation.validateField('city', newProperty.city).then(result => {
        onSetError('city', result);
    });
});
onUpdateField('rooms', (event) => {
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        rooms: value
    };

    formValidation.validateField('rooms', newProperty.rooms).then(result => {
        onSetError('rooms', result);
    });
});
onUpdateField('title', (event) => {
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        title: value
    };

    formValidation.validateField('title', newProperty.title).then(result => {
        onSetError('title', result);
    });
});
onUpdateField('address', (event) => {
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        address: value
    };

    formValidation.validateField('address', newProperty.address).then(result => {
        onSetError('address', result);
    });
});
onUpdateField('bathrooms', (event) => {
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        bathrooms: value
    };

    formValidation.validateField('bathrooms', newProperty.bathrooms).then(result => {
        onSetError('bathrooms', result);
    });
});
onUpdateField('locationUrl', (event) => {
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        locationUrl: value
    };

    formValidation.validateField('locationUrl', newProperty.locationUrl).then(result => {
        onSetError('locationUrl', result);
    });
});


onUpdateField('squareMeter', (event) => {
    const value = event.target.value;
    newProperty = {
        ...newProperty,
        squareMeter: value
    };

    formValidation.validateField('squareMeter', newProperty.squareMeter).then(result => {
        onSetError('squareMeter', result);
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
        phone: value
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


    formValidation.validateForm(newProperty).then(result => {
        onSetFormErrors(result);


        insertProperty(newProperty).then(() => { history.push(routes.propertyList) });

    });


});


let newF = '';
let newArray = [];

onUpdateField('newFeature', (event) => {
    newF = event.target.value;
});
onSubmitForm('insert-feature-button', () => {
    newArray.push(newF);
    console.log(newArray);
    onAddFeature(newF);
    newProperty.mainFeatures = newArray;
    console.log(newProperty);

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


