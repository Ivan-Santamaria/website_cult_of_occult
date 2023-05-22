import "./AlbumTitle.css";

export default function AlbumTitle(props) {
  return (
    <div className="title-container">
      <h1 className="title">{props.title}</h1>
    </div>
  );
}
