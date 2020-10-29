import React, { useEffect} from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import { useStateValue } from "./contextAPI/StateProvider";

const spotify = new SpotifyWebApi();

function App() {
  const [{token}, dispatch] = useStateValue();
  
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    //_token used it as a tempory variable avoiding naming conflicting
    const _token = hash.access_token;

    if (_token) {
      dispatch({type:'SET_TOKEN', payload:_token})
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({type:'SET_USER', payload:user})
      });
      spotify.getUserPlaylists('aaronzcg').then((playlists) => {

        dispatch({
          type: "SET_PLAYLISTS",
          payload:playlists,
        });
      })
    }
  }, [dispatch]);

  return <div className="app">{token ? <Player spotify={spotify}/> : <Login />}</div>;
}

export default App;
