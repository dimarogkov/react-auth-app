import { User } from '@auth0/auth0-react';
import { create } from 'zustand';

export interface UserInfo {
    userInfo: User | null;
    setUserInfo: (data: any) => void;
}

export const useUserInfo = create<UserInfo>((set) => ({
    userInfo: null,
    setUserInfo: (data) => set(() => data),
}));
