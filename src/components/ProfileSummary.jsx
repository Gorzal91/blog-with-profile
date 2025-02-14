/* eslint-disable react/prop-types */

const ProfileSummary = ({ data }) => {
    console.log('data from ProfileSummary:', data)
  return (
    <div className="profile-summary">
      { data?.imageData ?
        <div className="profile-picture">
        <img src={data?.imageData?.imgSrc} alt={data?.imageData?.alt} />
      </div> :
      <p style={{border: '3px solid pink'}}>Imagedata is missing</p>
      }
      <div className="profile-description">
        <h4>{data.userData.name}</h4>
        <p>{data.userData.bio}</p>
      </div>
    </div>
  );
};

export default ProfileSummary;
