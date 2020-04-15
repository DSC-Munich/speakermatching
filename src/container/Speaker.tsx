import * as React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import { H1, H2 } from "../components/Headlines";
import Description from "../components/Description";
import Tag from "../components/Tag";
import EditableInfo from "../components/EditableInfo";
import Button from "../components/Button";
import styled from "styled-components";
import { colors } from "../theme";
import EditableTags from "../components/EditableTags";
import Space from "../components/Space";
import db from "../services/firebase";

// TODO: Connect to firebase
const getSpeakerData: (speakerId: string) => Promise<any> = async speakerId => {
  const speakerData = await db.getSpeaker(speakerId);
  console.log("Speaker data", speakerData);
  return speakerData;
};

const setSpeakerData: (speakerData: any) => any = speakerData => {
  db.createSpeaker(speakerData);
};

const App: React.FunctionComponent<{}> = () => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [experience, setExperience] = useState("");
  const [invitations, setInvitations] = useState();
  const [topics, setTopics]: [
    { value: string; color: string }[],
    any
  ] = useState([]);
  const [imageUrl, setImageUrl] = useState();

  const { speakerId } = useParams();

  // Run once once component did mount
  useEffect(() => {
    (async () => {
      const speakerData = speakerId ? await getSpeakerData(speakerId) : {};
      const {
        name = undefined,
        about = undefined,
        experience = undefined,
        topics = undefined,
        imageUrl = undefined,
        invitations = undefined
      } = speakerData || ({} as any);

      setName(name);
      setAbout(about);
      setExperience(experience);
      setTopics(topics);
      setImageUrl(imageUrl);
      setInvitations(invitations);
    })();
  }, []);

  return (
    <Layout headerImage={imageUrl}>
      <Space height={30} />
      <H1 edit={edit} setHeadline={setName}>
        {name}
      </H1>
      <EditableInfo
        headline={"About me"}
        description={about}
        edit={edit}
        setDescription={setAbout}
      />
      <EditableInfo
        headline={"Speaker experience"}
        description={experience}
        edit={edit}
        setDescription={setExperience}
      />

      <H2>I&apos;m confident to speak about these topics:</H2>
      <EditableTags tags={topics} edit={edit} setTags={setTopics} />

      <Space height={30} />
      <ButtonRow>
        <Button
          title={edit ? "Save" : "Edit"}
          backgroundColor={colors.green}
          color={colors.white}
          onClick={() => setEdit(!edit)}
        />
        <Link to="/upcomingevents">
          <Button
            title={"Explore Events"}
            backgroundColor={colors.red}
            color={colors.white}
            buttonWidth={"100%"}
          />
        </Link>
      </ButtonRow>
    </Layout>
  );
};

const ButtonRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: stretch;
  align-items: stretch;
  grid-gap: 20px;
`;

export default App;
