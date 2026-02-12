import { faker } from '@faker-js/faker';
import { adminDb } from '@/lib/firebase/admin';

async function seedUsers() {
  const batch = adminDb.batch();
  for (let i = 0; i < 1000; i++) {
    const ref = adminDb.collection('users').doc(`fake-${i}`);
    batch.set(ref, {
      name: faker.person.fullName(),
      email: `student${i}@vit.ac.in`,
      branch: faker.helpers.arrayElement(['CSE', 'ECE', 'EEE', 'MECH']),
      year: faker.number.int({ min: 1, max: 4 }),
      skills: faker.helpers.arrayElements(['React', 'ML', 'CP', 'UIUX', 'Node', 'Firebase'], 3),
      interests: faker.helpers.arrayElements(['Hackathons', 'Startups', 'AI', 'Robotics', 'Web'], 2),
      availability: faker.helpers.arrayElement(['weekday-evening', 'weekend', 'flexible']),
      bio: faker.lorem.sentence(),
      goal: faker.helpers.arrayElement(['SIH', 'IEEE Xtreme', 'Open Source'])
    });
  }
  await batch.commit();
}

async function seedEvents() {
  const seeds = Array.from({ length: 12 }).map((_, i) => ({
    title: `Campus Item ${i + 1}`,
    type: i % 2 ? 'hackathon' : 'workshop',
    date: faker.date.soon().toISOString(),
    tags: ['campus'],
    summary: faker.lorem.sentence()
  }));

  await Promise.all(seeds.map((item, i) => adminDb.collection('events').doc(`seed-${i}`).set(item)));
}

(async () => {
  await seedUsers();
  await seedEvents();
  console.log('Seed complete');
})();
