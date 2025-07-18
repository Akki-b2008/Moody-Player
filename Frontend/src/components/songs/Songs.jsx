import { useState } from "react";
import "./Songs.css"

const MoodSongs = () => {
  const [Songs, setSongs] = useState([
    {
      title: "test_title",
      singer: "test_abc",
    },
    {
      title: "test_title",
      singer: "test_abc",
    },
    {
      title: "test_title",
      singer: "test_abc",
    },
    {
      title: "test_title",
      singer: "test_abc",
    },
    {
      title: "test_title",
      singer: "test_abc",
    },
  ]);
  return (
    <div className="Songs_cont">
      {Songs.map((song, index) => (
        <div key={index} className="Single_Song">
          <div className="Song_Details">
            <h1>{song.title}</h1>
            <h3>{song.singer}</h3>
          </div>

          <div className="Play_Pause">
            <i class="ri-play-circle-fill"></i>
            <i class="ri-pause-mini-line"></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoodSongs;
