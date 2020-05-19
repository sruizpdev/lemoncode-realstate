import { history } from '../../core/router';
import { getPropertiesList } from '../property-list/property-list.api';
import { setPropertyValues } from './property-detail.helpers';

const params = history.getParams();

getPropertiesList().then((propertiesList) => {
    const property = propertiesList[params.id - 1];
    console.log(property);
    property.rooms = `${property.rooms} habitaciones`;
    property.squareMeter = `${property.squareMeter} m2`;
    property.bathrooms = `${property.bathrooms} baños`;
    property.price = `${property.price} €`;

    // propertiesList[params.id - 1] = {
    //     ...propertiesList[params.id - 1],
    //     propertiesList[params.id - 1].rooms: `${ propertiesList[params.id - 1].rooms } habitaciones`,
    // };
    setPropertyValues(property);

});

