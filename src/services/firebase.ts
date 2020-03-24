import fire from "../fire";
import "firebase/firestore";

const db = fire.firestore();

const createOrganizer = (organizerData: any): void => {
  db.collection("organizers").add({
    about: organizerData.about,
    events: organizerData.events,
    imageUrl: organizerData.imageUrl,
    name: organizerData.name
  });
};

const createEvent = (eventData: any): void => {
  db.collection("events").add({
    title: eventData.title,
    date: eventData.date,
    location: eventData.location,
    organizer: eventData.organizer,
    organizerId: eventData.organizerId,
    topics: eventData.topics,
    eventDescription: eventData.eventDescription,
    speakerDescription: eventData.speakerDescription,
    budgetDescription: eventData.budgetDescription,
    imageUrl: eventData.imageUrl
  });
};

const createSpeaker = (speakerData: any): void => {
  db.collection("speakers").add({
    about: speakerData.about,
    experience: speakerData.experience,
    imageUrl: speakerData.imageUrl,
    invitations: speakerData.invitations,
    name: speakerData.name,
    topics: speakerData.topic
  });
};

const getOrganizer = async (organizerId: any): any => {
  try {
    const organizerRef = db.doc("organizers/" + organizerId);
    const organizer = await organizerRef.get();
    return organizer.data();
  } catch (error) {
    console.log("Error getting organizer: ", error);
  }
};

const getSpeaker = async (speakerId: any): Promise<any> => {
  try {
    const speakerRef = db.doc("speakers/" + speakerId);
    const speaker = await speakerRef.get();
    return speaker.data();
  } catch (error) {
    console.log("Error getting speaker: ", error);
  }
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
  createOrganizer,
  createSpeaker,
  getSpeaker,
  getOrganizer,
  getEvents
};
