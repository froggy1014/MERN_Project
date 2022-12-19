import './Avatar.css';

function Avatar(props: { image: string; alt: string }) {
  const { image, alt } = props;
  return (
    <div className="avatar">
      <img src={image} alt={alt} />
    </div>
  );
}

export default Avatar;
