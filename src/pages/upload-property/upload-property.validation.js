import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationShema = {
    field: {
        title: [Validators.required],
        notes: [Validators.required],
        email: [Validators.required, Validators.email],
        phone: [Validators.required],
        price: [Validators.required],

    }
};

export const formValidation = createFormValidation(validationShema);