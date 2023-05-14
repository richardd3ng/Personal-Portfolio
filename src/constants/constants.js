export const projects = [
  {
    title: "EcoEats",
    description: (
      <>
        This is a hackathon project for HackDuke 2020. As a team of 5, we
        developed a prototype Android app to estimate carbon emissions produced
        from meals using camera snapshots and Firebase ML's image labeling API.
        Our project won the Wolfram Top30 award for the top 30 hacks created at
        HackDuke 2020
      </>
    ),
    image: "/images/1.png",
    tags: ["Android Studio", "Firebase"],
    source: "https://github.com/BenCrespoDuke/HackDuke",
    visit: "https://devpost.com/software/ecoeats-8vb6tg",
    id: 0,
  },
  {
    title: "Medic.AR",
    description: (
      <>
        This is a hackathon project for Sigmahacks 3. As a team of 4, we created
        a prototype iOS app to assist people in responding to first aid
        emergencies using echoAR's augmented reality API and 3D models
      </>
    ),
    image: "/images/MedicAR_pic.png",
    tags: ["XCode", "UIKit", "EchoAR"],
    source: "https://github.com/jjang32/FirstAid",
    visit: "https://devpost.com/software/medic-io",
    id: 1,
  },
  {
    title: "Nscribe",
    description: (
      <>
        As a member of the Global Alliance for Medical Innovation {}
        <a
          href="https://harvardgami.org"
          style={{ color: "blue" }}
          onmouseover="style=text-decoration: underline'"
          onmouseout="style='text-decoration:none'"
        >
          (GAMI)
        </a>
        , I co-led a team of students to work with doctors and professors to
        develop ML models to detect Parkinson's and Alzheimer's Disease from
        patients' handwriting data. Nscribe is an iOS app currently on
        TestFlight designed to help medical professionals collect handwriting
        data from patients for neurodegenerative disease diagnosis purposes. The
        full paper is linked below in "More Info".
      </>
    ),
    image: "/images/NScribe_logo.png",
    tags: ["XCode", "SwiftUI"],
    source: "https://github.com/jaychandra3/DrawingApp",
    visit: "https://pubmed.ncbi.nlm.nih.gov/34679363/",
    id: 2,
  },
  {
    title: "MusicMap",
    description: (
      <>
        This is a class project I worked on in a team of 6. MusicMap is a mobile
        app that documents the songs played during road trips, allowing users to
        not only revisit a catalog of all the songs played during the trip, but
        also the specific locations associated with each song.
      </>
    ),
    image: "/images/MusicMap.png",
    tags: ["MongoDB", "Express", "React Native", "Node"],
    source: "https://github.com/nyu12345/MusicMap",
    visit: "https://github.com/nyu12345/MusicMap",
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2020, text: "Started my journey at Duke University" },
  { year: 2021, text: "Worked as a SWE intern at Mi-Corporation" },
  { year: 2022, text: "Worked as a SWE intern at Meta" },
  { year: 2023, text: "Currently working as a SWE Intern at Roblox" },
];
