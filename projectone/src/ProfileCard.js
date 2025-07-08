function profileCard({ title, handel, image, description }) {
  // const title = props.title;
  // const handel = props.handel; //we will destructure it using a property in JavaScript
  //Known as destructing - when we try to pull a property from an object and create a variable with same name at same time
  //or
  // const{ title, handel} = props; or
  return (
    <div className="card">
      <figure className="image is-1byl">
        <img src={image} alt="pda logo" />
      </figure>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4"> {title}</p>
          <p className="subtitle is-6">{handel}</p>
          <p className="subtitle is-4">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default profileCard;
