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

// TODO: Connect to firebase
const getSpeakerData: (speakerId: string) => any = speakerId => {
  return {
    name: "Saskia Speaker",
    id: speakerId,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    experience:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    imageUrl:
      "https://imgix.bustle.com/uploads/image/2018/5/9/fa2d3d8d-9b6c-4df4-af95-f4fa760e3c5c-2t4a9501.JPG?w=970&h=546&fit=crop&crop=faces&auto=format&q=70",
    topics: [
      { name: "Topic1", color: "red" },
      { name: "Topic2", color: "blue" }
    ]
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
  const [topics, setTopics] = useState([]);
  const [imageUrl, setImageUrl] = useState();

  const { speakerId } = useParams();

  // Run once once component did mount
  useEffect(() => {
    const {
      name = undefined,
      about = undefined,
      experience = undefined,
      topics = undefined,
      imageUrl = undefined
    } = speakerId ? getSpeakerData(speakerId) : {};

    setName(name);
    setAbout(about);
    setExperience(experience);
    setTopics(topics);
    setImageUrl(imageUrl);
  }, []);

  return (
    <Layout headerImage={imageUrl}>
      <H1>{name}</H1>
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

      <H2>I&apos;m condifent to speak about these topics:</H2>
      <TagBar>
        {topics &&
          topics.map(
            (t: { color: string | undefined; name: React.ReactNode }) => (
              <Tag key={Math.random()} color={t.color}>
                {t.name}
              </Tag>
            )
          )}
      </TagBar>

      <Button
        title={edit ? "Save" : "Edit"}
        backgroundColor={colors.green}
        color={colors.white}
        onClick={() => setEdit(!edit)}
      />
    </Layout>
  );
};

const TagBar = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  grid-gap: 5px;
  padding: 5px 0;
`;

export default App;
