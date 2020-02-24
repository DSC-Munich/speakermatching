import * as React from "react";
import { useParams } from "react-router-dom";

const getSpeakerData: (speakerId: string) => any = speakerId => {
  return {
    name: "Saskia Speaker",
    id: speakerId,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    experience:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
  };
};

const App: React.FunctionComponent<{}> = () => {
  const { speakerId } = useParams();
  const {
    name = undefined,
    about = undefined,
    experience = undefined,
    topics = undefined
  } = speakerId ? getSpeakerData(speakerId) : {};

  return <div>Hi Speaker {speakerId}!</div>;
};

export default App;
