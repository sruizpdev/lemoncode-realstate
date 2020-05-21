import { Validators, createFormValidation } from '@lemoncode/fonk';
import { arrayRequired } from '@lemoncode/fonk-array-required-validator';
import { isUrl } from '@lemoncode/fonk-is-url-validator';

const validationShema = {
    field: {
        title: [Validators.required],
        notes: [Validators.required],
        email: [Validators.required, Validators.email],
        phone: [Validators.required],
        price: [Validators.required],
        address: [Validators.required],
        city: [Validators.required],
        provinceId: [Validators.required],
        squareMeter: [Validators.required],
        rooms: [Validators.required],
        bathrooms: [Validators.required],
        locationUrl: [Validators.required, isUrl.validator],
        saleTypeIds: [arrayRequired.validator],
        equipmentIds: [arrayRequired.validator],
    }
};


export const formValidation = createFormValidation(validationShema);