import { getPropertiesList, getSalesTypeList, getProvincesList } from './property-list.api';
import { addPropertyRows, setOptions, clearPropertyRows } from './property-list.helpers';
import { mapPropertyListFromApiToVM, mapFilterToQueryParams } from './property-list.mappers';
import { roomOptions, bathroomOptions, minPriceOptions, maxPriceOptions } from './property-list.constants';
import { onUpdateField, onSubmitForm } from '../../common/helpers';

getPropertiesList().then((propertiesList) => {
    const viewModelPropertyList = mapPropertyListFromApiToVM(propertiesList);
    addPropertyRows(viewModelPropertyList);
    console.log(propertiesList);
});

getSalesTypeList().then((salesTypeList) => {
    setOptions(salesTypeList, 'select-sale-type', '¿Que venta?');
});

getProvincesList().then((provincesList) => {
    setOptions(provincesList, 'select-province', '¿Dónde?');
});
setOptions(roomOptions, 'select-room', '¿Habitaciones?');
setOptions(bathroomOptions, 'select-bathroom', '¿Baños?');
setOptions(minPriceOptions, 'select-min-price', '¿Precio mim?');
setOptions(maxPriceOptions, 'select-max-price', '¿Precio max?');

let filter = {
    saleTypeId: '',
    provinceId: '',
    minRooms: '',
    minBathRooms: '',
    minPrice: '',
    maxPrice: ''
};
onUpdateField('select-sale-type', (event) => {
    const value = event.target.value;
    filter = {
        ...filter,
        saleTypeId: value
    };
});
onUpdateField('select-province', (event) => {
    const value = event.target.value;
    filter = {
        ...filter,
        provinceId: value
    };
});
onUpdateField('select-room', (event) => {
    const value = event.target.value;
    filter = {
        ...filter,
        minRooms: value
    };
});
onUpdateField('select-bathroom', (event) => {
    const value = event.target.value;
    filter = {
        ...filter,
        minBathRooms: value
    };
});
onUpdateField('select-min-price', (event) => {
    const value = event.target.value;
    filter = {
        ...filter,
        minPrice: value
    };
});
onUpdateField('select-max-price', (event) => {
    const value = event.target.value;
    filter = {
        ...filter,
        maxPrice: value
    };
});
onSubmitForm('search-button', () => {
    const queryParams = mapFilterToQueryParams(filter);
    clearPropertyRows();
    getPropertiesList(queryParams).then(propertiesList => {
        const viewModelPropertyList = mapPropertyListFromApiToVM(propertiesList);
        addPropertyRows(viewModelPropertyList);

    });

})