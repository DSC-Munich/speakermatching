import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

// TODO: Connect to firebase
const getSpeakerData: (speakerId: string) => any = speakerId => {
  return {
    name: "Saskia Speaker",
    id: speakerId,
    about:
      "Hey:) I’m Saskia, an ML professional working at MyCompany. I really like spreading my passion about ML. I have a dog and two cats, with whom I often practise my talks.",
    experience:
      "I’ve been invited to Google I/O, I am also often speaking at regional communities such as the DSC Munich. Recently, I have started a YouTube channel for ML.",
    imageUrl:
      "https://imgix.bustle.com/uploads/image/2018/5/9/fa2d3d8d-9b6c-4df4-af95-f4fa760e3c5c-2t4a9501.JPG?w=970&h=546&fit=crop&crop=faces&auto=format&q=70",
    topics: [{ value: "ML" }, { value: "Android" }],
    invitations: true
  };
};

// TODO: Connect to firebase
const setSpeakerData: (speakerData: any) => any = speakerId => {
  return;
};

const App: React.FunctionComponent<{}> = () => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState();
  const [about, setAbout] = useState();
  const [experience, setExperience] = useState();
  const [invitations, setInvitations] = useState();
  const [topics, setTopics]: [
    { value: string; color: string }[],
    any
  ] = useState([]);
  const [imageUrl, setImageUrl] = useState();

  const { speakerId } = useParams();

  // Run once once component did mount
  useEffect(() => {
    const {
      name = undefined,
      about = undefined,
      experience = undefined,
      topics = undefined,
      imageUrl = undefined,
      invitations = undefined
    } = speakerId ? getSpeakerData(speakerId) : {};

    setName(name);
    setAbout(about);
    setExperience(experience);
    setTopics(topics);
    setImageUrl(imageUrl);
    setInvitations(invitations);
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
      <Button
        title={edit ? "Save" : "Edit"}
        backgroundColor={colors.pastelGreen2}
        color={colors.white}
        onClick={() => setEdit(!edit)}
        buttonWidth={"50%"}
      />
    </Layout>
  );
};

export default App;
