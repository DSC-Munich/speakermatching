import * as React from "react";
import EventCard, { EventStatus } from "../components/EventCard";

const UpcomingEvents: React.FunctionComponent<{}> = () => {
  return (
    <div>
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
        status={EventStatus.NONE}
      />
    </div>
  );
};

export default UpcomingEvents;
