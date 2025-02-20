const Posts = ({ data }) => {
    console.log('data from Posts:', data)

    const postForPublishing = data.posts.filter((post) => post.status === 'published');

  return (
    <div className="posts-section">
        <h3>    
        <ul>
        {postForPublishing.map((post, index) => (
          <li key={index}>
            <h4>{post.title}</h4>
            <p>{post.article}</p>
          </li>
        ))}
        </ul>
        </h3>
      </div>
    );
}

export default Posts;