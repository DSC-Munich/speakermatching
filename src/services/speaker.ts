import fire from "../fire";
import "firebase/firestore";

const db = fire.firestore();

const createEventOrganizer = (organization: string): void => {
  db.collection("event_organizers").add({
    events: [],
    organization
  });
};

const createEvent = (
  attendants: number,
  date: Date,
  description: string,
  durationMinutes: number,
  food: [string],
  format: string,
  location: string,
  organizer: any,
  prerequisites: [string],
  speakers: [any],
  specialNeeds: boolean,
  target: string,
  title: string,
  topic: string
): void => {
  db.collection("events").add({
    attendants,
    date,
    description,
    durationMinutes,
    food,
    format,
    location,
    organizer,
    prerequisites,
    speakers,
    specialNeeds,
    target,
    title,
    topic
  });
};

const createSpeaker = (
  experience: [string],
  topicsOffered: [string],
  topicsOpen: [string]
): void => {
  db.collection("speakers").add({
    experience,
    topicsOffered,
    topicsOpen
  });
};

const getEventOrganizer = (organizerRef: any): any => {
  organizerRef
    .get()
    .then((organizer: any) => {
      if (organizer.exists) {
        return organizer;
      } else {
        console.log("No such organizer!");
      }
    })
    .catch((error: any) => {
      console.log("Error getting organizer:", error);
    });
};

const getSpeaker = (speakerRef: any): any => {
  speakerRef
    .get()
    .then((speaker: any) => {
      if (speaker.exists) {
        return speaker;
      } else {
        console.log("No such organizer!");
      }
    })
    .catch((error: any) => {
      console.log("Error getting organizer:", error);
    });
};

const getEvents = (): any[] => {
  const events: any[] = [];

  db.collection("events")
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(event => {
        events.push(event.data());
      });
    });

  return events;
};

export default {
  createEvent,
  createEventOrganizer,
  createSpeaker,
  getSpeaker,
  getEventOrganizer,
  getEvents
};
