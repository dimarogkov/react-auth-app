import { useForm } from 'react-hook-form';
import { formOptions } from '../../../helpers/formOptions';
import { FormNames } from '../../../types/enums/FormNames';
import { UserInfo } from '../../../types/interfaces/UserInfo';
import { Btn, ErrorMessage, Input, Label } from '../../ui';
import { useEffect } from 'react';

type Props = {
    currentInfo?: UserInfo;
    onSubmit: (data: any) => void;
    onReset: () => void;
};

export const UserInfoForm: React.FC<Props> = ({ currentInfo, onReset = () => {}, onSubmit = () => {} }) => {
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm(formOptions);

    useEffect(() => {
        if (currentInfo) {
            setValue(FormNames.userLabel, currentInfo.key);
            setValue(FormNames.userValue, currentInfo.value);
        }
    }, [currentInfo, setValue]);

    const submitForm = (data: any) => {
        const info = {
            id: !currentInfo ? crypto.randomUUID() : currentInfo.id,
            key: data.userLabel,
            value: data.userValue,
        };

        onSubmit(info);
    };

    const resetForm = () => {
        onReset();
        reset();
    };

    return (
        <div className='w-full mb-10 last:mb-0'>
            <form className='w-full' onSubmit={handleSubmit(submitForm)}>
                <Label className='w-full mb-4 last:mb-0'>
                    <Input
                        placeholder='Label'
                        register={register}
                        registerName={FormNames.userLabel}
                        className='mb-2 last:mb-0'
                    />

                    {errors.userLabel && <ErrorMessage>{errors.userLabel.message}</ErrorMessage>}
                </Label>

                <Label className='w-full mb-4 last:mb-0'>
                    <Input
                        placeholder='Value'
                        register={register}
                        registerName={FormNames.userValue}
                        className='mb-2 last:mb-0'
                    />

                    {errors.userValue && <ErrorMessage>{errors.userValue.message}</ErrorMessage>}
                </Label>

                <div className='flex flex-col gap-2 w-full'>
                    <Btn type='submit' className='sm:w-full lg:min-w-0'>
                        {currentInfo ? 'Change Info' : 'Add Info'}
                    </Btn>

                    <Btn className='sm:w-full lg:min-w-0 bg-red' onClick={resetForm}>
                        Cancel
                    </Btn>
                </div>
            </form>
        </div>
    );
};
