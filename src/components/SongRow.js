import React from "react";
import "./SongRow.scss";

const SongRow = ({ track: { name, artists, album } }) => {
  return (
    <div className="songRow">
      <img className='songRow__album' src={album.images[0].url} alt="" />
      <div className="songRow__info">
        <h1>{name}</h1>
        <p>
          {artists.map((artist) => artist.name).join(", ")} -{" "}
          {album.name}
        </p>
      </div>
    </div>
  );
};

export default SongRow;
