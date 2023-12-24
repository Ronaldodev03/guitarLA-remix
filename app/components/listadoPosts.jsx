/* eslint-disable react/prop-types */
import Post from "./post"
const ListadoPosts = ({posts}) => {
  return (
    <>
     <h2 className=" heading">Blog</h2>
     { !posts ? <p>Cargando...</p> :<div className=" blog">
            {posts?.length && posts.map((post)=>
                <Post
                key={post.id}
                post={post.attributes}
                />)}
      </div>}
    </>
  )
}

export default ListadoPosts