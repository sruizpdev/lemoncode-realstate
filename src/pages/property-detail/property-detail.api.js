import Axios from 'axios';

const url = `${process.env.BASE_API_URL}`;


getPropertiesList().then((propertiesList) => {
    const viewModelPropertyList = mapPropertyListFromApiToVM(propertiesList);
    addPropertyRows(viewModelPropertyList);
    console.log(propertiesList);
});