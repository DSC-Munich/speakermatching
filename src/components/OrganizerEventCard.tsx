import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../components/Button";
import EditableTags from "../components/EditableTags";
import ExpandableText from "./Expander";
import { H3 } from "./Headlines";
import { EventStatus } from "../types/EventStatus";
import { Event } from "../types/Event";
import { Speaker } from "../types/Speaker";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { colors } from "../theme";

export interface Props {
  event: Event;
  freeSlots: number;
  applicants: Speaker[];
}

const DATE_OPTIONS = {
  weekday: "short",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
};

const OrganizerEventCard: React.FunctionComponent<Props> = props => {
  const history = useHistory();
  const [invited, setInvited]: [string[], any] = useState([]);
  console.log(invited);

  return (
    <Card>
      <CardImage src={props.event.image} />
      <CardContent>
        <Title>{props.event.title}</Title>
        <Date>
          {new Intl.DateTimeFormat("default", DATE_OPTIONS).format(
            props.event.date
          )}
        </Date>
        <Location>{props.event.location}</Location>
        <Slots>
          {props.event.totalSlots
            ? `${props.event.totalSlots - props.freeSlots} / ${
                props.event.totalSlots
              } slots filled`
            : ""}
        </Slots>
        <ButtonBar>
          <Button title="Edit info" backgroundColor="#7CD0FF" color="#FFFFFF" />
        </ButtonBar>
      </CardContent>
      <SpeakerContainer>
        {props.applicants.map(a => (
          <SpeakerCard key={a.id}>
            <ProfilePic image={a.imageUrl} />
            <div>
              <SpeakerName>{a.name}</SpeakerName>
              <ButtonBar>
                <Button
                  title={invited.includes(a.id) ? "Invited" : "Invite"}
                  backgroundColor={
                    invited.includes(a.id) ? colors.pastelGreen1 : "#08BA4F"
                  }
                  color="#FFFFFF"
                  onClick={() => setInvited([a.id, ...invited])}
                />
                <Button
                  title="About me"
                  icon="🎤"
                  backgroundColor="#7E7E7E"
                  color="#FFFFFF"
                  onClick={() => history.push("/speaker/" + a.id)}
                />
              </ButtonBar>
            </div>
          </SpeakerCard>
        ))}
      </SpeakerContainer>
    </Card>
  );
};

OrganizerEventCard.propTypes = {
  applicants: PropTypes.any,
  event: PropTypes.any,
  freeSlots: PropTypes.any
};

const Card = styled.div`
  background-color: #f4f4f4;
  border-radius: 14px;
  margin: 5px;
  margin-top: 25px;
  display: grid;
  grid-template-columns: 60px auto;
  grid-template-rows: auto auto;
  grid-template-areas: "image content" "speaker speaker";
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
`;

const CardImage = styled.div<{ src: string }>`
  grid-area: image;
  border-radius: 14px 0px 0px 14px;
  background-image: url(${p => p.src});
  background-repeat: no-repeat;
  background-size: auto 100%;
`;

const CardContent = styled.div`
  grid-aread: content;
  padding: 10px;
  position: relative;
`;

const Title = styled.div`
  font-size: 22px;
`;

const Date = styled.div`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.39);
`;

const Location = styled.div`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.39);
  margin-bottom: 12px;
`;

const Slots = styled.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
  margin: 12px 0px 12px 0px;
`;

const ButtonBar = styled.div`
  text-align: right;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
`;

const SpeakerContainer = styled.div`
  grid-area: speaker;
  max-height: 300px;
  overflow-y: auto;
`;

const SpeakerCard = styled.div`
  background-color: white;
  margin: 10px 0px;
  padding: 10px;
  display: flex;

  & > div:last-child {
    flex: 1;
  }
`;

const ProfilePic = styled.div<{ image: string }>`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background-image: url(${p => p.image});
  background-repeat: no-repeat;
  background-size: auto 100%;
  margin-right: 15px;
`;

const SpeakerName = styled.div`
  color: #888888;
  font-size: 20px;
  margin-bottom: 5px;
`;

export default OrganizerEventCard;
