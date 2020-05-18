import { getPropertiesList, getSalesTypeList, getProvincesList } from './property-list.api';
import { addPropertyRows, setOptions } from './property-list.helpers';
import { mapPropertyListFromApiToVM } from './property-list.mappers';
import { roomOptions, bathroomOptions, minPriceOptions, maxPriceOptions } from './property-list.constants'

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
setOptions(minPriceOptions, 'select-min-price', '¿Precio mínimo?');
setOptions(maxPriceOptions, 'select-max-price', '¿Precio máximo?');
