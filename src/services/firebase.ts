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

const getOrganizer = async (organizerId: any): Promise<any> => {
  try {
    const organizerRef = db.doc("organizers/" + organizerId);
    const organizer = await organizerRef.get();
    const od = (await organizer.data()) as any;

    // Fetch events
    od.events = await Promise.all(
      od.events
        ? od.events.map(async (e: any) => {
            const ed = await e.get();
            return await ed.data();
          })
        : []
    );

    // Fetch speaker
    await Promise.all(
      od.events.map(async (e: any) => {
        e.applicants = await Promise.all(
          e.applicants
            ? e.applicants.map(async (a: any) => {
                const ad = await a.get();
                const doc = await ad.data();
                doc.id = ad.id;
                return doc;
              })
            : []
        );
      })
    );
    return od;
  } catch (error) {
    console.log("Error getting organizer: ", error);
  }
};

const getSpeaker = async (speakerId: any): Promise<any> => {
  try {
    const speakerRef = db.doc("speakers/" + speakerId);
    const speaker = await speakerRef.get();
    console.log("Speaker firebase", speaker);
    return speaker.data();
  } catch (error) {
    console.log("Error getting speaker: ", error);
  }
};

const getEvents = async (): Promise<any> => {
  const events: any[] = [];

  const querySnapshot = await db.collection("events").get();
  console.log("Event!");
  querySnapshot.forEach(event => {
    const ed = event.data();
    events.push(ed);
  });

  await Promise.all(events);

  await Promise.all(
    events.map(async e => {
      e.organizerId = e.organizerId && (await e.organizerId.get()).id;
    })
  );

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
