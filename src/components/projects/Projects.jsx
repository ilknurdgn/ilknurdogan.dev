import React from "react";
import styles from "./projects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { FaExternalLinkAlt } from "react-icons/fa";

export const Projects = () => {
  const projects = [
    {
      title: "VANCA",
      description:
        "This application is a platform where users can filter, review and rent the caravans they want.",
      image: "/images/projects/vanca.png",
      link: "https://github.com/ilknurdgn/caravan-rental-app",
    },
    {
      title: "ServiceHive",
      description:
        "This project is an application where customers can filter and find service providers for home services and submit service requests.",
      image: "/images/projects/serviceHive.png",
      link: "https://github.com/ilknurdgn/ServiceHive",
    },
    {
      title: "Blog App",
      description:
        "This project is a full blogging application where users can create accounts and post blog posts",
      image: "/images/projects/blogApp.png",
      link: "https://github.com/ilknurdgn/blog-app",
    },
    {
      title: "Weather App",
      description:
        "This application shows the weather of the city you want. I used Vanilla JS and Fetch API while making this application.",
      image: "/images/projects/weatherApp.png",
      link: "https://github.com/ilknurdgn/weather-app-js",
    },
    {
      title: "Todo List",
      description:
        "This is a to do list website which I make using HTML, CSS and JavaScript.",
      image: "/images/projects/todolist.png",
      link: "https://github.com/ilknurdgn/javascript-todolist",
    },
  ];

  return (
    <div id="projects" className={styles["projects-section"]}>
      <h1 className={styles["projects-title"]}>Projects</h1>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          770: {
            slidesPerView: 2,
          },
        }}
        className="mySwiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className={styles["image-container"]}>
              <img src={project.image} alt={project.title} />
            </div>
            <div className={styles["project-desc"]}>
              <a
                href={project.link}
                className={styles["project-title"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>{project.title}</h2>
                <i>
                  <FaExternalLinkAlt />
                </i>
              </a>
              <p>{project.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
