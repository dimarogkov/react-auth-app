import { UserInfo } from '../../../types/interfaces/UserInfo';
import { LiaPenSolid } from 'react-icons/lia';
import { IoMdClose } from 'react-icons/io';

type Props = {
    userInfo: UserInfo[];
    changeInfo: (info: UserInfo) => void;
    removeInfo: (currentId: string) => void;
};

export const UserInfoTable: React.FC<Props> = ({ userInfo, changeInfo = () => {}, removeInfo = () => {} }) => {
    return (
        <div className='w-full overflow-x-auto mb-5 md:mb-6 last:mb-0'>
            <table className='relative table-fixed w-full min-w-[800px] text-left border border-collapse break-all border-grey'>
                <thead>
                    <tr>
                        <th className='w-48 border border-grey p-2'>Label</th>
                        <th className='border border-grey p-2'>Value</th>
                        <th className='w-10 border border-grey p-2'></th>
                        <th className='w-10 border border-grey p-2'></th>
                    </tr>
                </thead>
                <tbody>
                    {userInfo.map(({ id, key, value }) => (
                        <tr key={id}>
                            <td className='min-w-48 border border-grey p-2'>{key}</td>
                            <td className='border border-grey p-2'>{value}</td>
                            <td
                                className='min-w-10 border border-grey p-2 cursor-pointer transition-opacity duration-300 hover:opacity-80'
                                onClick={() => changeInfo({ id, key, value })}
                            >
                                <LiaPenSolid className='w-full h-full text-yellow' />
                            </td>
                            <td
                                className='min-w-10 border border-grey p-2 cursor-pointer transition-opacity duration-300 hover:opacity-80'
                                onClick={() => removeInfo(id)}
                            >
                                <IoMdClose className='w-full h-full text-red' />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
