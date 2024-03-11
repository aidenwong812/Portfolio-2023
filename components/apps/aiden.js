import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class AboutAiden extends Component {

  constructor() {
    super();
    this.screens = {};
    this.state = {
      screen: () => { },
      active_screen: "about", // by default 'about' screen is active
      navbar: false,
    }
  }

  componentDidMount() {
    this.screens = {
      "about": <About />,
      "education": <Education />,
      "skills": <Skills />,
      "projects": <Projects />,
      "resume": <Resume />,
    }

    let lastVisitedScreen = localStorage.getItem("about-section");
    if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
      lastVisitedScreen = "about";
    }

    // focus last visited screen
    this.changeScreen(document.getElementById(lastVisitedScreen));
  }

  changeScreen = (e) => {
    const screen = e.id || e.target.id;

    // store this state
    localStorage.setItem("about-section", screen);

    // google analytics
    ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });


    this.setState({
      screen: this.screens[screen],
      active_screen: screen
    });
  }

  showNavBar = () => {
    this.setState({ navbar: !this.state.navbar });
  }

  renderNavLinks = () => {
    return (
      <>
        <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
          <img className=" w-3 md:w-4" alt="about aiden" src="./themes/Yaru/status/about.svg" />
          <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
        </div>
        <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
          <img className=" w-3 md:w-4" alt="aiden' education" src="./themes/Yaru/status/education.svg" />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
        </div>
        <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
          <img className=" w-3 md:w-4" alt="aiden' skills" src="./themes/Yaru/status/skills.svg" />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
        </div>
        <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
          <img className=" w-3 md:w-4" alt="aiden' projects" src="./themes/Yaru/status/projects.svg" />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
        </div>
        <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
          <img className=" w-3 md:w-4" alt="aiden's resume" src="./themes/Yaru/status/download.svg" />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
        </div>
        <div className='my-0.5 w-28 md:w-full h-8 px-2 md:px-2.5' >
          {/* <iframe src="https://github.com/sponsors/vivek9patel/button" title="Sponsor aidenwong812" width={"100%"} height={"100%"} ></iframe> */}
          <main className='w-full h-full bg-white flex items-center text-black justify-center rounded'>
            <a className="flex items-center" style={{ boxShadow: "none" }} aria-label="Sponsor @aidenwong812" target="_top"
              href="https://github.com/sponsors/aidenwong812">
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                data-view-component="true" className="octicon octicon-heart icon-sponsor color-fg-sponsors mr-2">
                <path
                  d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z">
                </path>
              </svg>
              <span>Sponsor</span>
            </a>
          </main>
        </div>
      </>
    );
  }

  render() {
    return (
      <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
        <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
          {this.renderNavLinks()}
        </div>
        <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
          <div className=" w-3.5 border-t border-white"></div>
          <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
          <div className=" w-3.5 border-t border-white"></div>
          <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
            {this.renderNavLinks()}
          </div>
        </div>
        <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
          {this.state.screen}
        </div>
      </div>
    );
  }
}

export default AboutAiden;

export const displayAboutAiden = () => {
  return <AboutAiden />;
}


function About() {
  return (
    <>
      <div className="w-20 md:w-28 my-4 bg-white rounded-full">
        <img className="w-full" src="./images/logos/bitmoji.png" alt="Aiden Wong Logo" />
      </div>
      <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
        <div>My name is <span className="font-bold">Aiden Wong</span> ,</div>
        <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">Full Stack Software Engineer!</span></div>
      </div>
      <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
      </div>
      <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
        <li className=" list-pc">Software Engineer with 5+ years of experience in
          developing web applications and backend systems.</li>
        {/* <li className=" list-pc">Results-oriented Web Developer and AI Engineer with a strong background
          in front-end web development, AI algorithms and models development, and web application development using AI.</li>
        <li className=" mt-3 list-pc">
          I prioritize relationships above monetary gain.
          ( Hit me up <a className='text-underline' href='mailto:wongaiden812@gmail.com'><u>@wongaiden812@gmail.com</u></a> :) )</li> */}
        <li className=" mt-3 list-time"> When I am not coding my next project, I like to spend my time reading books, playing minecraft or watching football games.</li>
        <li className=" mt-3 list-star"> And I also have expertise in Artificial Intelligence & Computer Vision!</li>
      </ul>
    </>
  )
}
function Education() {
  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Education
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
        <li className="list-disc">
          <div className=" text-lg md:text-xl text-left font-bold leading-tight">
            Bachelor's Degree in Computer Science
          </div>
          <div className=" text-sm md:text-base">Hong Kong University of Science & Technology</div>
          <div className=" text-sm text-gray-400 mt-0.5">2014 - 2018</div>
        </li>
        {/* <li className="list-disc mt-3">
          <div className=" text-lg md:text-xl text-left font-bold leading-tight">
            Master's Degree in Software Engineering
          </div>
          <div className=" text-sm md:text-base">National University of Singapore</div>
          <div className=" text-sm text-gray-400 mt-0.5">2014 - 2018</div>
        </li> */}
      </ul>
    </>
  )
}
function Skills() {
  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Advanced Technical Proficiency
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
        {/* <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div> My areas of expertise are <strong className="text-ubt-gedit-orange">Web development & AI/ML</strong></div>
        </li> */}
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>Here are my most frequently used</div>
        </li>
      </ul>
      <div className="w-full md:w-10/12 flex mt-4">
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
      </div>
      <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <a href="https://www.cplusplus.com/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/cplusplus-original.svg" width="30" alt="aiden c++" /></a>
            {/* <a href="https://www.rust-lang.org/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/rust-plain.svg" width="30" alt="aiden Rust" /></a> */}
            <a href="https://www.ruby-lang.org/en/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/ruby-original-wordmark.svg" width="30" alt="aiden Ruby" /></a>
            <a href="https://www.javascript.com/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" width="30" alt="aiden javascript" /></a>
            <a href="https://www.typescriptlang.com/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg" width="30" alt="aiden typescript" /></a>
            {/* <a href="https://www.python.org/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/python-original.svg" width="30" alt="aiden python" /></a> */}
            <a href="https://www.php.net/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/php-original.svg" width="30" alt="aiden php" /></a>
            {/* <a href="https://dart.dev/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/dartlang-icon.svg" width="30" alt="aiden dart" /></a> */}
            <a href="https://www.google.com/search?q=is+html+a+language%3F" target="_blank" rel="noreferrer"><img title="yes it's a language!" className="m-1" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="aiden HTML" /></a>
            <a href="https://sass-lang.com/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/sass-original.svg" width="30" alt="aiden SASS" /></a>
            <a href="https://graphql.org/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/graphql.png" width="30" alt="aiden graphql" /></a>
            <a href="https://github.com/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" width="30" alt="aiden git" /></a>
            {/* <a href="https://firebase.google.com/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/firebase.png" width="30" alt="aiden firebase" /></a> */}
            <a href="https://www.nginx.com/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/nginx-original.svg" width="30" alt="aiden nginx" /></a>
            {/* <a href="https://www.tensorflow.org/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/tensorflow-icon.svg" width="30" alt="aiden tensorflow" /></a> */}
            <a href="https://www.mysql.com/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg" width="30" alt="aiden mysql" /></a>
            <a href="https://www.postgresql.org/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg" width="30" alt="aiden postgresql" /></a>
            <a href="https://www.mongodb.com/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" width="30" alt="aiden mongodb" /></a>
          </div>
        </div>
        <div className="px-2 flex flex-wrap items-start w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <a href="https://nextjs.org/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/nextjs.png" width="30" alt="aiden next" /></a>
            <a href="https://reactjs.org/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" width="30" alt="aiden react" /></a>
            <a href="https://angular.io/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/angularjs-original.svg" width="30" alt="aiden angular" /></a>
            <a href="https://svelte.dev/" target="_blank"><img className="m-1" src="/images/logos/svelte-logo.5c5d7d20.svg" width="30" alt="aiden svelte" /></a>
            <a href="https://vuejs.org/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/vuejs-original-wordmark.svg" width="30" alt="aiden vue" /></a>
            <a href="https://nuxtjs.org/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/nuxt.png" width="30" alt="aiden nuxt" /></a>
            <a href="https://remix.run/" target="_blank"><img className="m-1" src="https://cdn.discordapp.com/icons/770287896669978684/e1e3ff1c3519034de5b462ee06e3b6f9.webp?size=64" width="30" alt="aiden remix" /></a>
            <a href="https://astro.build/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/astro.svg" width="30" alt="aiden remix" /></a>
            <a href="https://turbo.build/" target="_blank"><img className="m-1" src="/images/logos/turbo-logo-dark.svg" width="30" alt="aiden turbo" /></a>
            <a href="https://rubyonrails.org/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/rails-original-wordmark.svg" width="30" alt="aiden ruby on rail" /></a>
            {/* <a href="https://flask.palletsprojects.com/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/flask.png" width="30" alt="aiden flask" style={{ backgroundColor: "white" }} /></a> */}
            {/* <a href="https://reactnative.dev/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" width="30" alt="aiden react" /></a> */}
            {/* <a href="https://www.ionicframework.com/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/ionic.svg" width="30" alt="aiden ionic" /></a> */}
            <a href="https://redux.js.org/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/redux-original.svg" width="30" alt="aiden redux" /></a>
            <a href="https://jquery.com/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/jquery.png" width="30" alt="aiden jquery" /></a>
            <a href="https://www.tailwindcss.com/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/tailwindcss.svg" width="30" alt="aiden tailwindcss" /></a>
            <a href="https://nodejs.org/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" width="30" alt="aiden node.js" /></a>
            <a href="https://expressjs.com/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" width="30" alt="aiden express" style={{ backgroundColor: "white" }} /></a>
            <a href="https://nestjs.com/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/nestjs.svg" width="30" alt="aiden nest.js" /></a>
            {/* <a href="https://www.djangoproject.com/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/django-original.svg" width="30" alt="aiden django" /></a> */}
            <a href="https://laravel.com/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/laravel-plain-wordmark.svg" width="30" alt="aiden laravel" /></a>
            {/* <a href="https://pytorch.org/" target="_blank"><img className="m-1" src="https://profilinator.rishav.dev/skills-assets/pytorch-icon.svg" width="30" alt="aiden pytorch" /></a> */}
          </div>
        </div>
      </div>
      <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list my-4">
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <span> And of course,</span>
          <a href="https://www.linux.org/" target="_blank"><img className=" inline m-1" src="https://profilinator.rishav.dev/skills-assets/linux-original.svg" width="30" alt="aiden linux" /></a>
          <a href="https://aws.amazon.com/" target="_blank"><img className=" inline m-1" src="https://profilinator.rishav.dev/skills-assets/amazonwebservices-original-wordmark.svg" width="30" alt="aiden aws" style={{ backgroundColor: "white" }} /></a>
          <a href="https://azure.microsoft.com/" target="_blank"><img className=" inline m-1" src="https://profilinator.rishav.dev/skills-assets/microsoft_azure-icon.svg" width="30" alt="aiden azure" /></a>
          <a href="https://www.docker.com/" target="_blank"><img className=" inline m-1" src="https://profilinator.rishav.dev/skills-assets/docker-original-wordmark.svg" width="30" alt="aiden docker" /></a>
        </li>
      </ul>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Problem Solving & Critical Thinking
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Leadership & Mentorship
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Project Management & Time Management
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Collaboration & Communication
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Continuous Learning & Adaptability
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
    </>
  )
}

function Projects() {
  const project_list = [
    {
      name: "coachio",
      date: "Aug 2020",
      link: "https://coach.io/",
      description: [
        "Get Real Advice Today from Skilled Experts and Mentors",
      ],
      domains: ["Laravel", "Vue", "Firebase", "Bootstrap"]
    },
    {
      name: "Delivery e-commerce web",
      date: "July 2021",
      link: "https://jjdvans.com/",
      description: [
        "On-demand Moving and Furniture Delivery Service Website",
      ],
      domains: ["React", "PWA", "Firebase", "Google Maps"]
    },
    {
      name: "Experience the future of storytelling.",
      date: "Oct 2022",
      link: "https://chroniclehq.com/",
      description: [
        "On-demand Moving and Furniture Delivery Service Website",
      ],
      domains: ["Next.js", "GraphQL", "Firebase", "TailwindCSS", "Node.js"]
    },
    {
      name: "Portfolio 2023",
      date: "Apr 2023",
      link: "https://github.com/aidenwong812/Portfolio-2023",
      description: [
        "Personal portfolio website of theme Ubuntu 20.04, made using NEXT.js & tailwind CSS",
      ],
      domains: ["javascript", "next.js", "tailwindcss"]
    },
    // {
    //   name: "React vite tailwindcss template",
    //   date: "Nov 2023",
    //   link: "https://github.com/aidenwong812/React-vite-tailwindcss-daisyui-typescript-template",
    //   description: [
    //     "This is the React Vite Tailwindcss template",
    //   ],
    //   domains: ["typescript", "react", "tailwindcss"]
    // },
    {
      name: "Character Walk",
      date: "Jan 2024",
      link: "https://github.com/aidenwong812/character-walk-three.js",
      description: [
        "This is the three.js character walk in town.",
      ],
      domains: ["typescript", "three.js"]
    },
    {
      name: "Next.js E-commerce Website",
      date: "Jan 2024",
      link: "https://github.com/kyh/williamsburg",
      description: [
        "E-commerce website built with Next.js and Astro",
      ],
      domains: ["typescript", "Next.js", "Astro", "MDX"]
    },
  ];

  const tag_colors = {
    "javascript": "yellow-300",
    "firebase": "red-600",
    "firestore": "red-500",
    "firebase auth": "red-400",
    "chrome-extension": "yellow-400",
    "flutter": "blue-400",
    "dart": "blue-500",
    "react-native": "purple-500",
    "html5": "pink-600",
    "sass": "pink-400",
    "tensorflow": "yellow-600",
    "django": "green-600",
    "python": "green-200",
    "codeforces-api": "gray-300",
    "tailwindcss": "blue-300",
    "next.js": "purple-600"
  }

  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Projects
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      {/* <iframe src="https://github.com/sponsors/vivek9patel/card" title="Sponsor vivek9patel" className='my-4 w-5/6 md:w-3/4' ></iframe> */}
      {/* <iframe src="https://github.com/sponsors/aidenwong812/card" title="Sponsor aidenwong812" className='my-4 w-5/6 md:w-3/4' ></iframe> */}

      {
        project_list.map((project, index) => {
          const projectNameFromLink = project.link.split('/')
          const projectName = projectNameFromLink[projectNameFromLink.length - 1]
          return (
            <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
              <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                <div className="flex flex-wrap justify-between items-center">
                  <div className='flex justify-center items-center'>
                    <div className=" text-base md:text-lg mr-2">{project.name.toLowerCase()}</div>
                    <iframe src={`https://ghbtns.com/github-btn.html?user=aidenwong812&repo=${projectName}&type=star&count=true`} frameBorder="0" scrolling="0" width="150" height="20" title={project.name.toLowerCase() + "-star"}></iframe>
                  </div>
                  <div className="text-gray-300 font-light text-sm">{project.date}</div>
                </div>
                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                  {
                    project.description.map((desc, index) => {
                      return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                    })
                  }
                </ul>
                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                  {
                    (project.domains ?
                      project.domains.map((domain, index) => {
                        const borderColorClass = `border-${tag_colors[domain]}`
                        const textColorClass = `text-${tag_colors[domain]}`

                        return <span key={index} className={`px-1.5 py-0.5 w-max border ${borderColorClass} ${textColorClass} m-1 rounded-full`}>{domain}</span>
                      })

                      : null)
                  }
                </div>
              </div>
            </a>
          )
        })
      }
    </>
  )
}
function Resume() {
  return (
    <iframe className="h-full w-full" src="./files/Aiden Wong-laravel.pdf" title="aiden wong resume" frameBorder="0"></iframe>
  )
}