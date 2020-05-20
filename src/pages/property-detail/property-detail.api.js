import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/equipments`;

export const getEquipmentsList = () =>
    Axios.get(url).then(response => {
        return response.data;
    });

const urlContact = `${process.env.BASE_API_URL}/contact`;

export const insertContact = contact =>
    Axios.post(urlContact, contact).then(({ data }) => data);