'use client';
import Avatar from '../Avatar';
import { AiOutlineMenu } from 'react-icons/ai';
import MenuItem from './MenuItem';
import { useCallback, useState } from 'react';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { User } from '@prisma/client';
import { signOut } from 'next-auth/react';

interface UserMenuProps {
    currentUser?: User | null;
}

const UserMenu:React.FC<UserMenuProps> = ({ currentUser }) => {
	console.log(currentUser) 
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                    onClick={() => {}}
                    className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer capitalize"
                >
                    airbnb you home
                </div>
                <div
                    onClick={toggleOpen}
                    className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-100 flex flex-row items-center gap-3 rounded-full hover:shadow-md transition-all cursor-pointer"
                >
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <Avatar />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
                    <div className="flex flex-col cursor-pointer">
                        {currentUser ? (
                            <>
                                <MenuItem
                                    onClick={()=>{}}
                                    label="my trips"
                                />
                                <MenuItem
                                    onClick={()=>{}}
                                    label="my favorites"
                                />
								 <MenuItem
                                    onClick={()=>{}}
                                    label="my reservations"
                                />
								 <MenuItem
                                    onClick={()=>{}}
                                    label="my properties"
                                />
								 <MenuItem
                                    onClick={()=>{}}
                                    label="airbnb my home"
                                />
								<hr/>
								<MenuItem
                                    onClick={()=>signOut()}
                                    label="logout"
                                />
                            </>
                        ) : (
                            <>
                                <MenuItem
                                    onClick={loginModal.onOpen}
                                    label="Login"
                                />
                                <MenuItem
                                    onClick={registerModal.onOpen}
                                    label="Sign Up"
                                />
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
