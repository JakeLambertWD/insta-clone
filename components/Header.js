import Image from 'next/image';
import { SearchIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, MenuIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';

const Header = () => {
	const router = useRouter();
	const [open, setOpen] = useRecoilState(modalState);

	return (
		<div className='shadow-sm border-b sticky top-0 bg-white z-50'>
			<div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
				{/* Logo switch */}
				<div onClick={() => router.push('/')} className='relative hidden cursor-pointer lg:inline-grid w-24'>
					<Image src='https://links.papareact.com/ocw' layout='fill' objectFit='contain' /> {/* objectFit='contain' will keep aspect ratio */}
				</div>

				<div onClick={() => router.push('/')} className='relative lg:hidden cursor-pointer flex-shrink-0 w-10'>
					<Image src='https://links.papareact.com/jjm' layout='fill' objectFit='contain' />
				</div>

				{/* Search input field */}
				<div className='max-w-sm'>
					<div className='relative mt-1 p-3 rounded-md'>
						<div className='absolute flex pl-3 inset-y-0 items-center pointer-events-none'>
							<SearchIcon className='h-5 w-5 text-gray-500' />
						</div>
						<input
							className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md'
							type='text'
							placeholder='Search'
						/>
					</div>
				</div>

				{/* right */}
				<div className='flex items-center justify-end space-x-4'>
					<HomeIcon onClick={() => router.push('/')} className='navBtn' />
					<MenuIcon className='h-6 w-6 md:hidden cursor-pointer' />

					<div className='navBtn relative'>
						<PaperAirplaneIcon className='navBtn rotate-45' />
						<div className='bg-red-500 absolute w-5 h-5 rounded-full -top-1 -right-2 text-white flex justify-center items-center text-xs animate-pulse'>
							5
						</div>
					</div>

					<PlusCircleIcon onClick={() => setOpen(true)} className='navBtn' />
					<UserGroupIcon className='navBtn' />
					<HeartIcon className='navBtn' />
					<img
						src='https://scontent-lcy1-1.xx.fbcdn.net/v/t1.6435-9/219293650_10222342746855066_6349034356492396654_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=atRkv8z_Dd8AX-9BJSu&_nc_ht=scontent-lcy1-1.xx&oh=ec04a76b0f91b4fd87887053ea46064d&oe=618DEDB5'
						alt='Profile Pic'
						className='h-10 w-10 rounded-full cursor-pointer'
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
