const MiniProfile = () => {
	return (
		<div className='flex items-center justify-between mt-14 ml-10'>
			<img
				src='https://scontent-lcy1-1.xx.fbcdn.net/v/t1.6435-9/219293650_10222342746855066_6349034356492396654_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=atRkv8z_Dd8AX-9BJSu&_nc_ht=scontent-lcy1-1.xx&oh=ec04a76b0f91b4fd87887053ea46064d&oe=618DEDB5'
				alt=''
				className='rounded-full border p-[2px] w-16 h-16'
			/>

			<div className='flex-1 mx-4'>
				<h2 className='font-bold'>Jake Lambert</h2>
				<h3 className='text-sm text-gray-400'>This is a Next.js application</h3>
			</div>

			<button className='text-blue-400 text-sm font-semibold'>Sign Out</button>
		</div>
	);
};

export default MiniProfile;
