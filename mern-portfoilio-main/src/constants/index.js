import {
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  sass,
  nodejs,
  mongodb,
  github,
  TypeScript,
  bookstore,
  memoryProject,
  cube,
  movie,
  jobit,
  tripguide,
  express,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Internship",
    icon: web,
    date:'Aug 2021 - Jan 2022'
  },
  {
    title: "Ass. Software Developer",
    icon: web,
    date:'Jan 2022 - Oct 2023'
  },
  {
    title: "MERN Stack Trainer",
    icon: web,
    date:'Dec 2022 - May 2023'
  },
  {
    title: "MERN Stack Developer",
    icon: web,
    date:'Nov 2023 - Present'
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "SCSS",
    icon: sass,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git-Hub",
    icon: github,
  },
  {
    name: "TypeScript",
    icon: TypeScript,
  },
  {
    name: "Express Js",
    icon: express,
  },
];

const experiences = [
  {
    title: "MERN Stack Developer.",
    company_name: "Cuneiform Consulting Private Limited, Ahmedabad - GJ",
    icon: cube,
    iconBg: "#383E56",
    date: "Nov 2023 - Present",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Building RESTFull API services and Intigrating it to front-end side",
      // "Collaborating with cross-functional teams including Senior Developers and project Managers to create high-quality code.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
      // "Integrate data from various back-end services and databases",
      // "Following coding standards and best practices.",
    ],
  },
  {
    title: "Full-Stack Trainer.",
    company_name: "Clean Code Accademy, Belagavi - KA",
    icon: cube,
    iconBg: "#383E56",
    date: "Dec 2022 - May 2023",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Building RESTFull API services and Intigrating it to front-end side",
      // "Collaborating with cross-functional teams including Senior Developers and project Managers to create high-quality code.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
      // "Integrate data from various back-end services and databases",
      // "Following coding standards and best practices.",
    ],
  },
  {
    title: "Associate Software Developer.",
    company_name: "Infynow Software Solutions LLP, Belagavi - KA",
    icon: cube,
    iconBg: "#383E56",
    date: "Jan 2022 - Nov 2023",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Building RESTFull API services and Intigrating it to front-end side",
      // "Collaborating with cross-functional teams including Senior Developers and project Managers to create high-quality code.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
      // "Integrate data from various back-end services and databases",
      // "Following coding standards and best practices.",
    ],
  },
  {
    title: "Internship.",
    company_name: "Cubiccode Digital Media LLP, Belagavi - KA",
    icon: cube,
    iconBg: "#383E56",
    date: "Aug 2021 - Jan 2022",
    points: [
      // "Implement responsive design principles to ensure websites are optimized for various screen sizes and devices.",
      // "Integrate and configure third-party plugins as needed to achieve desired website capabilities.",
      // "Write clean and well-structured HTML, CSS, JavaScript, and React JS to implement design elements and interactivity.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Ensure cross-browser compatibility and consistent rendering across different web browsers. Monitor website performance, troubleshoot issues, and apply fixes as necessary.",
    ],
  },
  
];

const projects = [
  {
    name: "Movie",
    description:
      "The application built using React and OMDB API, where users can search for top rated movies using this website, also they can see the Synopsis, Cast, Release date, Production Company, Run time, Sponsor, Likes and IMDB Rating. API updates latest movies too.",
    tags: [
      {
        name: "React.Js,",
        color: "blue-text-gradient",
      },
      {
        name: "IMDB API,",
        color: "green-text-gradient",
      },
      {
        name: "CSS,",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "/",
    demo_link: "https://muviz-app.netlify.app/",
  },
  {
    name: "Book store",
    description:
      "The application built using MERN, where you can see the existing books aslo you can add new books, delete the books, and update the books, these all features this website has, this website also gives everyone on do CURD functions ",
    tags: [
      {
        name: "M-E-R-N,",
        color: "blue-text-gradient",
      },
      {
        name: "CSS,",
        color: "green-text-gradient",
      },
    ],
    image: bookstore,
    source_code_link: "https://github.com/Aneepatil/mern_bookstore_client",
    demo_link: "https://bookz-store.netlify.app/",
  },
  {
    name: "Reminiscence App",
    description:
      "This Memory app is built on MERN Stack, and has features like google Sign in, Custom registraion, if you are a sign in user can add, Delete and Update a post those posts created by you and you only can like others post and rest all functionalities are restricted.JWT is used for user authentication and token is set for one hour expire set for one Hour",
    tags: [
      {
        name: "M-E-R-N,",
        color: "blue-text-gradient",
      },
      {
        name: "MUI,",
        color: "green-text-gradient",
      },
      {
        name: "JWT,",
        color: "pink-text-gradient",
      },
    ],
    image: memoryProject,
    source_code_link: "https://github.com/Aneepatil/mern_bookstore_client",
    demo_link: "https://mern-momories-app.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
