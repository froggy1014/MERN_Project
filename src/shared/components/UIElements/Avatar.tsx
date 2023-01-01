// import './Avatar.css';

function Avatar(props: { image: string; alt: string }) {
  const { image, alt } = props;
  return (
    <div className="w-full h-full flex justify-center items-center">
      <img
        className="black rounded-full w-full h-full object-cover"
        src={image}
        alt={alt}
      />
    </div>
  );
}

export default Avatar;
