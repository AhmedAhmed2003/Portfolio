import { IoMdContact } from "react-icons/io";


export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact"  },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a Next.js real-estat Project",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 opacity-50 rounded-lg",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.png",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Ai Summarizer",
      des: "Summarize your page or article using my website that uses artificial intelligence to summarize content.",
      img: "/p3.jpg",
      iconLists: ["/re.svg", "/tail.svg", "/toolkit.svg"],
      link: "https://github.com/AhmedAhmed2003/Ai-summarizer",
    },
    {
      id: 2,
      title: "YC Directory",
      des: "A Next.js 15 platform where entrepreneurs can submit their startup ideas for virtual pitch competitions, browse other pitches, and gain exposure through a clean minimalistic design for a smooth user experience.",
      img: "/p2.jpg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/sanity.png", "/shadcn.png"],
      link: "https://github.com/AhmedAhmed2003/YC-Directory",
    },
    {
      id: 3,
      title: "Movie Application - Movieo",
      des: "A site that shows you the latest movies, series, and anime, the most trending, and contains information about the show, budget, and revenues.",
      img: "/p4.jpg",
      iconLists: ["/re.svg", "/tail.svg", "/toolkit.svg", "/query.svg"],
      link: "https://github.com/AhmedAhmed2003/movio",
    },
    {
      id: 4,
      title: "Animated Apple Iphone 3D Website",
      des: "A Portfolio I made by modern design show my experience and my work with great animations",
      img: "/p5.jpg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/shadcn.png", "/framer.svg"],
      link: "https://github.com/AhmedAhmed2003/Portfolio",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Ahmed was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
      img:'/profile.svg'
    },
    {
      quote:
        "I thought it was impossible to make a website as beautiful as our product, but Ahmed proved me wrong.",
      name: "Sara Lee",
      title: "CFO of Acme Co",
      img:'/people1.jpg'

    },
    {
      quote:
        "I've never met a web developer who truly cares about their clients' success like Ahmed does.",
      name: "Chris Brown",
      title: "COO of DEF Corp",
      img:'/people3.jpg'

    },
    {
      quote:
        "After Ahmed optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: " Lisa Wang",
      title: "CTO of 456 Enterprises",
      img:'/people2.jpg'

    },
   
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "I Always Strive To Improve.",
      desc: "I always strive to develop and keep up with the latest updates in order to provide the best user experience.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      href:"https://github.com/AhmedAhmed2003/"
    },
    {
      id: 2,
      img: "/fa2.svg",
       href:"https://web.facebook.com/noou.majed/"
    },
    {
      id: 3,
      img: "/ins.svg",
      href:'https://www.instagram.com/ahmid.d2003?igsh=MXRuaGc2dmFwYjE1eg%3D%3D&utm_source=qr'
    },
  ];