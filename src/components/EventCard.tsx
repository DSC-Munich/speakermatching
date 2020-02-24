import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Chip from "../components/Chip";

interface Props {
  eventTitle: string;
  eventDate: string;
  eventImageSource: string;
  topics: string[];
  freeSlots: number;
  slotDuration: number;
}

const EventCard: React.FunctionComponent<Props> = (props) => {
  return <Card>
        <CardImage src={props.eventImageSource} />
        <CardContent>
          <Title>{props.eventTitle}</Title>
          <Star>🌟</Star>
          <Date>{props.eventDate}</Date>
          {
              props.topics.map((t) => <Chip title={t} />)
          }
          <Slots>
              {props.freeSlots} free slots, {props.slotDuration} min/slot
          </Slots>
          <ButtonBar>
              <button>more information</button>
              <button>Apply 🎤</button>
          </ButtonBar>
        </CardContent>
      </Card>;
};

const Card = styled.div`
  background-color: #F4F4F4;
  border-radius: 14px;
  margin: 5px;
  display: grid;
  grid-template-columns: 60px auto;
  grid-template-rows: auto;
  grid-template-areas: "image content";
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const CardImage = styled.div<{src: string}>`
  grid-area: image;
  border-radius: 14px 0px 0px 14px;
  background-image: url(${p => p.src});
  background-repeat: no-repeat;
  background-size: auto 100%;
`;

const CardContent = styled.div`
  grid-aread: content;
  padding: 10px;
`;

const Title = styled.div`
  font-size: 22px;
`;

const Date = styled.div`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.39);
  margin: 3px 0px 12px 0px;
`;

const Slots = styled.div`
  font-size: 18px;
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


/*
Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func
};*/

export default EventCard;
