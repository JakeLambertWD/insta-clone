import Post from '../components/Post';
import insta1 from '../public/insta1.PNG';

const DUMMY_DATA = [
	{
		id: 123,
		username: 'jakelambert2',
		userImg:
			'https://scontent-lcy1-1.xx.fbcdn.net/v/t1.6435-9/219293650_10222342746855066_6349034356492396654_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=atRkv8z_Dd8AX-9BJSu&_nc_ht=scontent-lcy1-1.xx&oh=ec04a76b0f91b4fd87887053ea46064d&oe=618DEDB5',
		img: 'https://www.globeguide.ca/wp-content/uploads/2013/09/Philippines-Coron.jpg',
		caption: 'This is dope'
	},
	{
		id: 123,
		username: 'louisetucker',
		userImg:
			'https://previews.123rf.com/images/sheftsoff/sheftsoff1907/sheftsoff190700785/127795430-close-up-business-woman-face-portrait-isolated-on-white-background-smiling-female-model-office-suit-.jpg',
		img: 'https://www.globeguide.ca/wp-content/uploads/2013/09/Myanbmar-Yangon.jpg',
		caption: 'This is dope'
	}
];

const Posts = () => {
	return (
		<div>
			{DUMMY_DATA.map(post => (
				<Post key={post.id} id={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption} />
			))}
		</div>
	);
};

export default Posts;
