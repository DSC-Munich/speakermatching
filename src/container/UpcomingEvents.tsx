import * as React from "react";
import EventCard from "../components/EventCard";

const UpcomingEvents: React.FunctionComponent<{}> = () => {
  return (
    <div>
      <EventCard eventTitle={"Android Meetup"}
        eventDate={"Di, 31.03.2020 - 19 Uhr"}
        freeSlots={3}
        slotDuration={45}
        topics={["Android", "Kotlin"]}
        eventImageSource={"https://www.ihsig.com/media-intestinal-health-ihsig/ihsig767-1200x1200mm-1024x505.png"}
      />
    </div>
  );
};

export default UpcomingEvents;
