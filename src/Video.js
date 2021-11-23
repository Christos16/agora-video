import { AgoraVideoPlayer } from "agora-rtc-react";
import { Grid } from "@material-ui/core";
import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";

export default function Video(props) {
  const { users, tracks } = props;
  const [gridSpacing, setGridSpacing] = useState(12);

  useEffect(() => {
    setGridSpacing(Math.max(Math.floor(12 / (users.length + 1)), 4));
  }, [users, tracks]);

  return (
    <div className="s-call">
      <div className="w-full mx-auto rounded-3xl shadow-xl s-call__minifiedScreen ">
        <AgoraVideoPlayer
          videoTrack={tracks[1]}
          style={{ height: "100%", width: "100%", position: "unset" }}
        />
      </div>
      {users.length > 0 &&
        users.map((user) => {
          if (user.videoTrack) {
            return (
         
              <div class="w-full mx-auto rounded-3xl shadow-xl bg-white s-call__mainScreen" >
             
                <AgoraVideoPlayer
                  videoTrack={user.videoTrack}
                  key={user.uid}
                  style={{ height: "100%", width: "100%",borderRadius: "70px" }}
                />
             
                </div>
              
            );
          } else return null;
        })}
    </div>
  );
}
