import * as React from "react";
import EventCard from "../components/EventCard";
import Layout from "../components/Layout";
import Button from "../components/Button";
import MenuBar from "../components/MenuBar";
import { H2 } from "../components/Headlines";
import { EventStatus } from "../types/EventStatus";

const UpcomingEvents: React.FunctionComponent<{}> = () => {
  return (
    <Layout>
      <MenuBar
        title={"Saskia Speaker"}
        image={
          "https://www.a-speakers.com/wp-content/uploads/Saskia1-Cropped-1-300x300.jpg"
        }
      />
      <H2>Upcoming Events:</H2>
      <Button title={"Filter"} icon="☕" />
      <EventCard
        event={{
          title: "Android Meetup",
          date: new Date("2020-12-17T19:30:00"),
          location: "IsarValley @ Google",
          organizer: "Android Developer Community Munich",
          organizerId: "1",
          topics: ["Android", "Kotlin"],
          eventDescription:
            "The Dev-Fest is a big community celebration where many developers come together to talk about many topics. We will have a list of speakers and workshops.",
          speakerDescription:
            "Speakers in our Machine Learning track that can show real life examples of ML and why it is such an interesting topic.",
          budgetDescription:
            "We can refund your travel cost and a small stipend for your stay in Munich.",
          image:
            "https://www.ihsig.com/media-intestinal-health-ihsig/ihsig767-1200x1200mm-1024x505.png"
        }}
        freeSlots={3}
        slotDuration={45}
        isStarred={true}
        status={EventStatus.APPLIED}
        onEventStatusChanged={() => {
          console.log("Change status");
        }}
      />
      <EventCard
        event={{
          title: "DSC Talk",
          date: new Date("2020-12-17T19:30:00"),
          location: "IsarValley @ Google",
          organizer: "Android Developer Community Munich",
          organizerId: "2",
          topics: ["Cloud", "GCP", "AI", "ML", "Data"],
          image:
            "https://www.ihsig.com/media-intestinal-health-ihsig/ihsig767-1200x1200mm-1024x505.png"
        }}
        freeSlots={3}
        slotDuration={45}
        isStarred={true}
        status={EventStatus.NONE}
        onEventStatusChanged={() => {
          console.log("Status");
        }}
      />
    </Layout>
  );
};

export default UpcomingEvents;
