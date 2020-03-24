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
import OrganizerEventCard, {
  Props as EventCardProps
} from "../components/OrganizerEventCard";
import db from "../services/firebase";

const getOrganizerData: (
  organizerId: string
) => Promise<{
  [key: string]: any;
  events: EventCardProps[];
}> = async organizerId => {
  return await db.getOrganizer(organizerId);
};

const setOrganizerData: (organizerData: any) => any = organizerData => {
  db.createOrganizer(organizerData);
};

const Organizer: React.FunctionComponent<{}> = () => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [events, setEvents]: [EventCardProps[], any] = useState([]);
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
      events = []
    } = organizerId ? getOrganizerData(organizerId) : {};

    setName(name);
    setAbout(about);
    setTags(tags);
    setImageUrl(imageUrl);
    setEvents(events);
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
      <Space height={20} />
      <Button
        title={edit ? "Save" : "Edit"}
        backgroundColor={colors.green}
        color={colors.white}
        onClick={() => setEdit(!edit)}
      />
      <Space height={30} />
      <H2>Our events</H2>
      <Space height={20} />
      {events.map((e: EventCardProps) => (
        <>
          <OrganizerEventCard key={Math.random()} {...e} />
          <Space height={10} key={Math.random()} />
        </>
      ))}
      <Space height={20} />
      <Button
        title={"Add event"}
        backgroundColor={colors.green}
        color={colors.white}
        onClick={() => {
          console.log("Adding event");
        }}
      />
      <Space height={50} />
    </Layout>
  );
};

export default Organizer;
