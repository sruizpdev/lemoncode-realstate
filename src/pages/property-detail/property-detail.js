import { history } from '../../core/router';
import { getPropertiesList } from '../property-list/property-list.api';
import { setPropertyValues } from './property-detail.helpers';
import { getEquipmentsList } from './property-detail.api';

const params = history.getParams();


getPropertiesList().then((propertiesList) => {

    // CREAR UN MAPPER MEJOR


    const property = propertiesList[params.id - 1];
    property.rooms = `${property.rooms} habitaciones`;
    property.squareMeter = `${property.squareMeter} m2`;
    property.bathrooms = `${property.bathrooms} baños`;
    property.price = `${property.price} €`; console.log(property);

    getEquipmentsList().then(equipmentList => {
        const equipArray = [];
        property.equipmentIds.forEach(eq => {
            equipmentList.forEach(item => {
                if (item.id === eq) {
                    equipArray.push(item.name)
                }
            })
        });
        property.equipment = equipArray;
        setPropertyValues(property);
    });
});

