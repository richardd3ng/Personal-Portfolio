export const ProfileDescription = (
  <>
    I'm a passionate software developer interested in Full Stack Mobile & Web
    Development and Artificial Intelligence/Machine Learning
  </>
);

export const projects = [
  {
    title: "Image Reconstruction",
    description: (
      <>
        This Image Reconstruction project explores the process of recovering
        digital images that contain corrupted pixels using statistical learning
        approaches such as regression and regularization. The general approach
        taken involved dividing the corrupted image into blocks, reconstructing
        each individual block, and concatenating all reconstructed blocks into a
        full image. The reconstruction algorithm involves fitting a
        Lasso-regularized model with Discrete Cosine Transform (DCT) basis
        vectors as features.
      </>
    ),
    image: "images/image_reconstruction.png",
    tags: ["Jupyter Notebook", "Scikit-learn"],
    source: "https://github.com/richardd3ng/Image-Reconstruction",
    visit: "https://github.com/richardd3ng/Image-Reconstruction",
    id: 2,
  },
  {
    title: "Brain Computer Interface Movement Decoding",
    description: (
      <>
        This project explores the applications of Support Vector Machines to
        distinguish between left and right-handed movement using brain surface
        electrode signals as features. Brain Computer Interfaces (BCI's) are a
        relatively new technology that presents significant potential to help
        individuals who lose the ability to perform normal motor functions. If
        neural signals can be accurately translated into true movement intents,
        BCI's can enable individuals to perform physical movements by simply
        imagining them.
      </>
    ),
    image: "images/bci.png",
    tags: ["Jupyter Notebook", "Scikit-learn"],
    source:
      "https://github.com/richardd3ng/Brain-Computer-Interface-Movement-Decoding",
    visit:
      "https://github.com/richardd3ng/Brain-Computer-Interface-Movement-Decoding",
    id: 2,
  },
  {
    title: "Nscribe",
    description: (
      <>
        As a member of the Global Alliance for Medical Innovation {}
        <a href="https://harvardgami.org" style={{ color: "blue" }}>
          (GAMI)
        </a>
        , I co-led a team of students to work with doctors and professors to
        develop ML models to detect Parkinson's and Alzheimer's Disease from
        patients' handwriting data. Nscribe is an iOS app currently on
        TestFlight designed to help medical professionals collect handwriting
        data from patients for neurodegenerative disease diagnosis purposes. The
        full paper detailing the ML analysis pipeline we developed is linked
        below in "More Info".
      </>
    ),
    image: "images/NScribe_logo.png",
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
    image: "images/MusicMap.png",
    tags: ["MongoDB", "Express", "React Native", "Node"],
    source: "https://github.com/nyu12345/MusicMap",
    visit: "https://github.com/nyu12345/MusicMap",
    id: 3,
  },
  // {
  //   title: "EcoEats",
  //   description: (
  //     <>
  //       This is a hackathon project for HackDuke 2020. As a team of 5, we
  //       developed a prototype Android app to estimate carbon emissions produced
  //       from meals using camera snapshots and Firebase ML's image labeling API.
  //       I implemented the camera, Google sign in page, and various other UI
  //       components in Android Studio. Our project won the Wolfram Top30 award
  //       for the top 30 hacks created at HackDuke 2020.
  //     </>
  //   ),
  //   image: "/images/1.png",
  //   tags: ["Android Studio", "Firebase"],
  //   source: "https://github.com/BenCrespoDuke/HackDuke",
  //   visit: "https://devpost.com/software/ecoeats-8vb6tg",
  //   id: 0,
  // },
  //   {
  //     title: "Medic.AR",
  //     description: (
  //       <>
  //         This is a hackathon project for Sigmahacks 3. As a team of 4, we created
  //         a prototype iOS app to assist people in responding to first aid
  //         emergencies using echoAR's augmented reality API and 3D models.
  //         Implemented the AR visual displays and emergency phone call
  //         functionality in Xcode. Our project won the Best Use of echoAR award of
  //         SigmaHacks 3.
  //       </>
  //     ),
  //     image: "MedicAR_pic.png",
  //     tags: ["XCode", "UIKit", "EchoAR"],
  //     source: "https://github.com/jjang32/FirstAid",
  //     visit: "https://devpost.com/software/medic-io",
  //     id: 1,
  //   },
];

export const TechnologiesDesription = (
  <>
    Through my experiences in classes, personal projects, extracurriculars, and
    internships, I've worked with a range of technologies across full stack
    development and machine learning.
  </>
);

export const AboutMeDescription = (
  <>
    Hi there! I'm a Senior at Duke University studying Computer Science and
    Electrical/Computer Engineering . Although I've spent the last few years in
    North Carolina, I originally grew up in the Bay Area, where my interest in
    technology was sparked from an early age. Through my classes and
    extracurriculars, I've had the opportunity to work on a variety of exciting
    projects, from developing mobile applications to applying novel ML solutions
    to ongoing problems. I've also gained valuable experience through
    internships at variety of tech companies, where I've had the chance to
    collaborate with talented engineers and learn about the latest industry
    trends and practices. When I'm not coding, you can usually find me working
    out, playing spikeball with friends, experimenting with healthy recipes in
    the kitchen, or traveling to explore new places!
  </>
);

export const TimeLineData = [
  { year: 2020, text: "Started my journey at Duke University" },
  {
    year: 2021,
    text: "Worked as a SWE intern at Mi-Corporation (acquired by Ideagen)",
  },
  { year: 2022, text: "Worked as a SWE intern at Meta" },
  { year: 2023, text: "Worked as a SWE Intern at Roblox" },
];
