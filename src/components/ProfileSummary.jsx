/* eslint-disable react/prop-types */

const ProfileSummary = ({ data }) => {
    console.log('data from ProfileSummary:', data)
  return (
    <div className="profile-summary">
       <div className="header-section">
         <p>{data.header}</p>
      </div>
      <div className="profile-header">
      { data?.imageData ?
        <div className="profile-picture">
        <a href={data?.imageData?.link} target="_blank" rel="noopener noreferrer">
        <img src={data?.imageData?.imgSrc} alt={data?.imageData?.alt} />
        </a>
      </div> :
      <p style={{border: '3px solid pink'}}>Imagedata is missing</p>
      }
      <div className="profile-description">
        <h4>{data.userData.name}</h4>
        <p>{data.userData.bio}</p>
      </div>
      </div>
      
      <div className="posts-section">
        <h3>
        <ul>
        {data.posts.map((post, index) => (
          <li key={index}>
            <h4>{post.title}</h4>
            <p>{post.article}</p>
          </li>
        ))}
        </ul>
        </h3>
      </div>
      
      <div className="text-section">
        <h3>
        <p>{data.text}</p>
        </h3>
      </div>
      
      <div className="footer-section">
        <h6>
          <p>{data.footer}</p>  
        </h6>
      </div>  
    </div>
      
    );
};

export default ProfileSummary;
