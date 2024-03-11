import { Modal, ModalBody, ModalContent } from '@nextui-org/react';
import Link from 'next/link';
import Image from 'next/image';
import { routes } from '@/app/routes';

export const NavigationModal = ({ onClose, isOpen, onOpenChange }: any) => {
    return (
        <Modal
            onClose={onClose}
            size='full'
            isOpen={isOpen}
            isDismissable={false}
            isKeyboardDismissDisabled
            hideCloseButton
            classNames={{
                body: 'p-4',
                wrapper: '!transform-none lg:hidden',
                base: 'bg-black text-white',
            }}
            onOpenChange={onOpenChange}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalBody>
                            <div className='h-full w-full grid content-between'>
                                <div className='flex flex-row justify-between items-center'>
                                    <Link href={routes.home}>adrian</Link>
                                    <button onClick={onClose}>close</button>
                                </div>
                                <nav className='grid py-2 overflow-y-auto h-full'>
                                    <ul className='grid p-0 justify-items-center gap-16'>
                                        {/*<li className='text-3xl'>*/}
                                        {/*    <Link href={routes.aboutMe}>About</Link>*/}
                                        {/*</li>*/}
                                    </ul>
                                </nav>
                                <div className='mb-8'>
                                    <ul className='p-0 flex flex-row justify-center gap-6'>
                                        <li>
                                            <a href='https://www.linkedin.com/in/adrian-czesnowski/' target='_blank' rel='noopener noreferrer'>
                                                <div className='w-9 h-9 bg-white/20 rounded-full flex items-center justify-center'>
                                                    <Image
                                                        width={20}
                                                        height={20}
                                                        src={'./linkedin.svg'}
                                                        alt={'LinkedIn icon'}
                                                    />
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://github.com/adrianczesnowski' target='_blank' rel='noopener noreferrer'>
                                                <div className='w-9 h-9 bg-white/20 rounded-full flex items-center justify-center'>
                                                    <Image
                                                        width={20}
                                                        height={20}
                                                        src={'./github.svg'}
                                                        alt={'GitHub icon'}
                                                    />
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/' target='_blank' rel='noopener noreferrer'>
                                                <div className='w-9 h-9 bg-white/20 rounded-full flex items-center justify-center'>
                                                    <Image
                                                        width={20}
                                                        height={20}
                                                        src={'./mail.svg'}
                                                        alt={'Mail icon'}
                                                    />
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};
