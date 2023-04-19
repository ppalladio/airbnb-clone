'use client';
import Avatar from '../Avatar';
import { AiOutlineMenu } from 'react-icons/ai';

import { useCallback, useState } from 'react';
const UserMenu = () => {
    const [open, setOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setOpen((value) => !value);
    }, []);
    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                    className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
                    onClick={() => {}}
                >
                    Airbnb your home
                </div>
                <div
                    className="p-4 md:py-1 md:px-2 border-neutral-200 border-[1px] flex flex-row items-center gap-3 rounded-ful cursor-pointer hover:shadow-md transition"
                    onClick={() => {}}
                >
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <Avatar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserMenu;
