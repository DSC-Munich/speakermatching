import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../components/Button";
import EditableTags from "../components/EditableTags";

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

  onEventStatusChanged: (status: EventStatus) => void;
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

const EventCard: React.FunctionComponent<EventCardProps> = (props) => {
  return (
    <Card hasFlap={[EventStatus.APPLIED, EventStatus.INVITED].includes(props.status)}>
      <CardImage src={props.event.image} />
      <CardContent>
        <Title>{props.event.title}</Title>
        <Star>{props.isStarred? "🌟" : "⭐"}</Star>
        <Date>{new Intl.DateTimeFormat('default', DATE_OPTIONS).format(props.event.date)}</Date>
        <Location>{props.event.location}</Location>
        <Organizer>{props.event.organizer}</Organizer>
        <EditableTags edit={false} tags={props.event.topics.map((t) => ({ value: t, color: '' }))} setTags={() => {}} />
        <Slots>
            {props.freeSlots} free slots, {props.slotDuration}min / slot
        </Slots>
        <ButtonBar>
            <Button title="About us" backgroundColor="#7CD0FF" color="#FFFFFF" />
            {
              (() => {
                switch(props.status) {
                  case EventStatus.NONE: 
                    return <Button title="Apply 🎤"
                                    backgroundColor="#33B4FD"
                                    color="#FFFFFF"
                                    onClick={() => props.onEventStatusChanged(EventStatus.APPLIED)} />
                  case EventStatus.APPLIED:
                    return <Button title="Cancel Application 🎤"
                                    backgroundColor="#A6A6A6"
                                    color="#FFFFFF"
                                    onClick={() => props.onEventStatusChanged(EventStatus.NONE)} />
                  case EventStatus.INVITED:
                    return <Button title="Decline Invitation"
                                    backgroundColor="#A6A6A6"
                                    color="#FFFFFF"
                                    onClick={() => props.onEventStatusChanged(EventStatus.NONE)} />
                }
              })()
            }
        </ButtonBar>
      </CardContent>
      {
        (() => {
          switch(props.status) {
            case EventStatus.APPLIED: return <Flap color={"#FFA24D"}>Applied!</Flap>;
            case EventStatus.INVITED: return <Flap color={"#08BA4F"}>Invited!</Flap>;
          }
        })()
      }
    </Card>);
};

const Card = styled.div<{ hasFlap: boolean }>`
  background-color: #F4F4F4;
  border-radius: ${p => p.hasFlap? '14px 0px 14px 14px' : '14px'};
  margin: 5px;
  margin-top: 25px;
  display: grid;
  grid-template-columns: 60px auto;
  grid-template-rows: auto;
  grid-template-areas: "image content";
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
  display: flex;
  justify-content: space-between;
`;

const Star = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  font-size: 30px;
`;

const Flap = styled.div<{color: string}>`
  position: absolute;
  height: 25px;
  width: 90px;
  top: -25px;
  right: 0px;
  background-color: ${p => p.color};
  color: white;
  border-radius: 14px 14px 0px 0px;
  text-align: center;
  line-height: 25px;
`;

export default EventCard;
