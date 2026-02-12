import { initializeApp } from "firebase/app";
import { collection, doc, getFirestore, writeBatch } from "firebase/firestore";
import { events, fakeStudents } from "../lib/mockData";

const app = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
});

async function seed() {
  const db = getFirestore(app);
  const batch = writeBatch(db);

  fakeStudents.forEach((student) => {
    batch.set(doc(collection(db, "users"), student.id), student);
  });

  events.forEach((event) => {
    batch.set(doc(collection(db, "events"), event.id), event);
  });

  await batch.commit();
  console.log(`Seeded ${fakeStudents.length} users and ${events.length} events.`);
}

seed();
