import { getPropertiesList, getSalesTypeList, getProvincesList } from './property-list.api';
import { addPropertyRows, setOptions } from './property-list.helpers';
import { mapPropertyListFromApiToVM } from './property-list.mappers';

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
