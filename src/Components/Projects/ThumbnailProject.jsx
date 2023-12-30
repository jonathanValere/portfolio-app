export default function ThumbnailProject({ ...props }) {
  return (
    <img className="thumbnail" src={props.imageThumbnail} alt="Image projet" />
  );
}
