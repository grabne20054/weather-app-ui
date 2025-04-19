import React from "react";
import { Video } from "../ui/video";

const liveStreamUrl = process.env.NEXT_PUBLIC_LIVE_STREAM_URL;
const liveStreamToken = process.env.NEXT_PUBLIC_LIVE_STREAM_TOKEN;

const cams = [
    <Video src={liveStreamUrl + (liveStreamToken ?? "")}/>,

    <Video src={liveStreamUrl + (liveStreamToken ?? "")}/>,
    
    <Video src={liveStreamUrl + (liveStreamToken ?? "")}/>,
]

const Cams = () => {
    return (
      <div className="container-fluid d-none d-md-block">
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {cams.map((cam, index) => (
            <div key={index}>
              {cam}
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default Cams;