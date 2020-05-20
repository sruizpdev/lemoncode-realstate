import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationShema = {
    field: {
        email: [Validators.email, Validators.required],
        message: [Validators.required]

    }
};

export const formValidation = createFormValidation(validationShema);