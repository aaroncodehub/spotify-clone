import React from "react";
import { useStateValue } from "../contextAPI/StateProvider";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./Body.scss";
import Header from "./Header";
import SongRow from "./SongRow";

const Body = ({ spotify }) => {
  const [{ discover_weekly }] = useStateValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {
          discover_weekly?.tracks.items.map((item,index) => (
            <SongRow track={item.track} key={index}/>
          ))
        }
      </div>
    </div>
  );
};

export default Body;
