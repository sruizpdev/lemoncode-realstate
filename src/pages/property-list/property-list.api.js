import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

export const getPropertiesList = (queryParams) =>
    Axios.get(`${url}?${queryParams}`).then(response => {
        return response.data;
    });

const salesTypeListUrl = `${process.env.BASE_API_URL}/saleTypes`;

export const getSalesTypeList = () =>
    Axios.get(salesTypeListUrl).then(response => {
        return response.data;
    });

const provincesListUrl = `${process.env.BASE_API_URL}/provinces`;

export const getProvincesList = () =>
    Axios.get(provincesListUrl).then(response => {
        return response.data;
    });