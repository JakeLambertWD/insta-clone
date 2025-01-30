import Post from "../components/Post";
import insta1 from "../public/insta1.PNG";

const DUMMY_DATA = [
  {
    id: 123,
    username: "jakelambert2",
    userImg: "https://links.papareact.com/3ke",
    img: "https://www.globeguide.ca/wp-content/uploads/2013/09/Philippines-Coron.jpg",
    caption: "This is dope",
  },
  {
    id: 123,
    username: "louisetucker",
    userImg:
      "https://previews.123rf.com/images/sheftsoff/sheftsoff1907/sheftsoff190700785/127795430-close-up-business-woman-face-portrait-isolated-on-white-background-smiling-female-model-office-suit-.jpg",
    img: "https://www.globeguide.ca/wp-content/uploads/2013/09/Myanbmar-Yangon.jpg",
    caption: "This is dope",
  },
];

const Posts = () => {
  return (
    <div>
      {DUMMY_DATA.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
