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
const getOrganizerData: (organizerId: string) => any = organizerId => {
  return {
    name: "Android Meetup",
    id: organizerId,
    tags: [
      { value: "Topic1", color: "red" },
      { value: "Topic2", color: "blue" }
    ],
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageUrl:
      "https://www.mch-group.com/-/media/mch-group/Images/Content/News/Blog/2017/2017-04/mch-group-live-marketing-aktivierung.jpg",
    events: [
      {
        name: "Android Meetup"
      }
    ]
  };
};

// TODO: Connect to firebase
const setOrganizerData: (speakerData: any) => any = speakerId => {
  return;
};

const Organizer: React.FunctionComponent<{}> = () => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState();
  const [about, setAbout] = useState();
  const [invitations, setInvitations] = useState();
  const [tags, setTags]: [{ value: string; color: string }[], any] = useState(
    []
  );
  const [imageUrl, setImageUrl] = useState();

  const { organizerId } = useParams();

  // Run once once component did mount
  useEffect(() => {
    const {
      name = undefined,
      about = undefined,
      tags = undefined,
      imageUrl = undefined,
      invitations = undefined
    } = organizerId ? getOrganizerData(organizerId) : {};

    setName(name);
    setAbout(about);
    setTags(tags);
    setImageUrl(imageUrl);
    setInvitations(invitations);
  }, []);

  return (
    <Layout headerImage={imageUrl}>
      <Space height={30} />
      <H1 edit={edit} setHeadline={setName}>
        {name}
      </H1>
      <Space height={10} />
      <EditableTags tags={tags} edit={edit} setTags={setTags} />
      <EditableInfo
        headline={"Description"}
        description={about}
        edit={edit}
        setDescription={setAbout}
        minHeight={150}
      />
      <H2>Our events</H2>

      <Space height={30} />
      <Button
        title={edit ? "Save" : "Edit"}
        backgroundColor={colors.green}
        color={colors.white}
        onClick={() => setEdit(!edit)}
      />
    </Layout>
  );
};

export default Organizer;
