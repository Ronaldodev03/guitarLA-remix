/* eslint-disable react/prop-types */
import Post from "./post";
const ListadoPosts = ({ posts }) => {
  return (
    <>
      <h2 className=" heading">Blog</h2>
      {!posts ? (
        <p>Cargando...</p>
      ) : (
        <div className=" blog">
          {posts.attributes?.length &&
            posts.attributes.map((post) => <Post key={post.id} post={post} />)}
        </div>
      )}
    </>
  );
};

export default ListadoPosts;
