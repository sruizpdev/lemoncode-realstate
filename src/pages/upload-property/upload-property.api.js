import Axios from 'axios';
const url = `${process.env.BASE_API_URL}/properties`;
const urlSaleTypes = `${process.env.BASE_API_URL}/saleTypes`;
const urlEquipList = `${process.env.BASE_API_URL}/equipments`;

export const insertProperty = property =>
    Axios.post(url, property).then(({ data }) => data);

export const getSaleTypes = () =>
    Axios.get(urlSaleTypes).then(({ data }) => data);

export const getEquipList = () =>
    Axios.get(urlEquipList).then(({ data }) => data);
