import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/equipments`;

export const getEquipmentsList = () =>
    Axios.get(url).then(response => {
        return response.data;
    }); 