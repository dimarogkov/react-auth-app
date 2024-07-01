import { useForm } from 'react-hook-form';
import { formOptions } from '../../../helpers/formOptions';
import { FormNames } from '../../../types/enums/FormNames';
import { Btn, ErrorMessage, Input, Label } from '../../ui';

export const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(formOptions);

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div className='w-full mb-10 last:mb-0'>
            <form className='w-full max-w-xl' onSubmit={handleSubmit(onSubmit)}>
                <Label className='w-full mb-5 last:mb-0'>
                    <Input
                        placeholder='Label'
                        register={register}
                        registerName={FormNames.userLabel}
                        className='mb-2 last:mb-0'
                    />

                    {errors.userLabel && <ErrorMessage>{errors.userLabel.message}</ErrorMessage>}
                </Label>

                <Label className='w-full mb-5 last:mb-0'>
                    <Input
                        placeholder='Value'
                        register={register}
                        registerName={FormNames.userValue}
                        className='mb-2 last:mb-0'
                    />

                    {errors.userValue && <ErrorMessage>{errors.userValue.message}</ErrorMessage>}
                </Label>

                <Btn type='submit'>Send</Btn>
            </form>
        </div>
    );
};
