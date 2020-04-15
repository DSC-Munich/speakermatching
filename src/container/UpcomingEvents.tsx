import * as React from "react";
import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import Layout from "../components/Layout";
import Button from "../components/Button";
import MenuBar from "../components/MenuBar";
import { H2 } from "../components/Headlines";
import { EventStatus } from "../types/EventStatus";
import Space from "../components/Space";
import db from "../services/firebase";

const getEventsData: () => any = async () => {
  const events = await db.getEvents();
  return events;
};

const setEventsData: (eventData: any) => any = eventData => {
  db.createEvent(eventData);
};

const UpcomingEvents: React.FunctionComponent<{}> = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async () => {
      const ev = await getEventsData();
      console.log(ev);
      ev && setEvents(ev);
    })();
  }, []);
  return (
    <Layout>
      <Space height={50} />
      <H2>Upcoming Events:</H2>
      <Button title={"Filter"} icon="☕" />
      {events.map((e: any, index: number) => {
        e.date = e.date ? new Date(e.date.seconds) : undefined;
        return (
          <div key={Math.random()}>
            <Space height={20} />
            <EventCard
              key={Math.random()}
              event={e}
              freeSlots={e.freeSlots}
              slotDuration={e.slotDuration}
              isStarred={true}
              status={
                [EventStatus.APPLIED, EventStatus.NONE][index % 2 == 0 ? 0 : 1]
              }
              onEventStatusChanged={() => {
                console.log("Change status");
              }}
            />
          </div>
        );
      })}
    </Layout>
  );
};

export default UpcomingEvents;
