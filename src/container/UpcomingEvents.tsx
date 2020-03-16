import * as React from "react";
import EventCard, { EventStatus } from "../components/EventCard";
import Layout from "../components/Layout";
import Button from "../components/Button";
import MenuBar from "../components/MenuBar";
import { H2 } from "../components/Headlines";

const UpcomingEvents: React.FunctionComponent<{}> = () => {
  return (
    <Layout>
      <MenuBar title={"Saskia Speaker"} image={"https://www.a-speakers.com/wp-content/uploads/Saskia1-Cropped-1-300x300.jpg"} />
      <H2>Upcoming Events:</H2>
      <Button title={"☕ Filter"} />
      <EventCard
        event={{
          title: "Android Meetup",
          date: new Date("2020-12-17T19:30:00"),
          location: "IsarValley @ Google",
          organizer: "Android Developer Community Munich",
          topics: ["Android", "Kotlin"],
          image:
            "https://www.ihsig.com/media-intestinal-health-ihsig/ihsig767-1200x1200mm-1024x505.png"
        }}
        freeSlots={3}
        slotDuration={45}
        isStarred={true}
        status={EventStatus.APPLIED}
        onEventStatusChanged={() => {}}
      />
      <EventCard
        event={{
          title: "DSC Talk",
          date: new Date("2020-12-17T19:30:00"),
          location: "IsarValley @ Google",
          organizer: "Android Developer Community Munich",
          topics: ["Cloud", "GCP", "AI", "ML", "Data"],
          image:
            "https://www.ihsig.com/media-intestinal-health-ihsig/ihsig767-1200x1200mm-1024x505.png"
        }}
        freeSlots={3}
        slotDuration={45}
        isStarred={true}
        status={EventStatus.NONE}
        onEventStatusChanged={() => {}}
      />
    </Layout>
  );
};

export default UpcomingEvents;
