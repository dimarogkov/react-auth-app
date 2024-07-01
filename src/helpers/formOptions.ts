import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const validationSchema = yup
    .object({
        userLabel: yup.string().trim().required('Missing Label'),
        userValue: yup.string().trim().required('Missing Value'),
    })
    .required();

export const formOptions = {
    resolver: yupResolver(validationSchema),
    defaultValues: {
        userLabel: '',
        userValue: '',
    },
};
