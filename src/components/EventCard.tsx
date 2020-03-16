import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../components/Button";
import EditableTags from "../components/EditableTags";
import { colors } from "../theme";

export interface Event {
  title: string;
  date: Date;
  location: string;
  organizer: string;
  image: string;
  topics: string[];
  totalSlots?: number;
}

export enum EventStatus {
  NONE,
  APPLIED,
  INVITED,
  ACCEPTED,
  DECLINED
}

export interface EventCardProps {
  event: Event;
  freeSlots: number;
  slotDuration: number;
  isStarred: boolean;
  status: EventStatus;
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

const EventCard: React.FunctionComponent<EventCardProps> = props => {
  return (
    <Card>
      <CardImage src={props.event.image} />
      <CardContent>
        <Title>{props.event.title}</Title>
        <Star>{props.isStarred ? "🌟" : "⭐"}</Star>
        <Date>
          {new Intl.DateTimeFormat("default", DATE_OPTIONS).format(
            props.event.date
          )}
        </Date>
        <Location>{props.event.location}</Location>
        <Organizer>{props.event.organizer}</Organizer>
        <EditableTags
          edit={false}
          tags={props.event.topics.map(t => ({ value: t, color: "" }))}
          setTags={() => {
            console.log("Callback");
          }}
        />
        <Slots>
          {props.freeSlots} free slots, {props.slotDuration}min / slot
        </Slots>
        <ButtonBar>
          <Button
            title="About us"
            backgroundColor={colors.pastelRed1}
            color="#FFFFFF"
          />
          {(() => {
            switch (props.status) {
              case EventStatus.NONE:
                return (
                  <Button
                    title="Apply 🎤"
                    backgroundColor="#33B4FD"
                    color="#FFFFFF"
                  />
                );
            }
          })()}
        </ButtonBar>
      </CardContent>
    </Card>
  );
};

EventCard.propTypes = {
  event: PropTypes.any,
  freeSlots: PropTypes.any,
  isStarred: PropTypes.any,
  slotDuration: PropTypes.any,
  status: PropTypes.any
};

const Card = styled.div`
  background-color: #f4f4f4;
  border-radius: 14px;
  margin: 5px;
  display: grid;
  grid-template-columns: 60px auto;
  grid-template-rows: auto;
  grid-template-areas: "image content";
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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

const Organizer = styled.div`
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
`;

const Star = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  font-size: 30px;
`;

export default EventCard;
