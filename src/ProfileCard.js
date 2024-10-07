function ProfileCard({firstName, handle, image ,description}){
   
    return(
    <div className="card">
        <div className="card-image">
        <figure className="image is-4by3">
            <img src={image} alt="profile"/>
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
            <p className="title is-4">{firstName}</p>
            <p className="subtitle is-6">{handle}</p>
        </div>
        <div className="content mt-3">
          {description}
        </div>
      </div>      
    </div>
    )
}

export default ProfileCard;