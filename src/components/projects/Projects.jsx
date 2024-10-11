import React, { useState } from "react";
import styles from "./projects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { FreeMode, Pagination, Navigation } from "swiper/modules";

export const Projects = () => {
  return (
    <div id="projects" className={styles["projects-section"]}>
      <h1 className={styles["projects-title"]}>Projects</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        <div>
          <SwiperSlide>
            <div className="image-container">
              <img src="/images/todolist.png" alt="" />
            </div>
            <p>
              <h2>VANCA</h2>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
              voluptatibus beatae quos quibusdam ea quia laudantium ducimus
              facilis.
            </p>
          </SwiperSlide>
        </div>

        <div>
          <SwiperSlide>
            <div className="image-container">
              <img src="/images/quizApp.png" alt="" />
            </div>
            <p>
              <h2>VANCA</h2>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
              voluptatibus beatae quos quibusdam ea quia laudantium ducimus
              facilis.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Neque voluptatibus beatae quos quibusdam ea quia laudantium
              ducimus facilis.
            </p>
          </SwiperSlide>
        </div>

        <div>
          <SwiperSlide>
            <div className="image-container">
              <img src="/images/weatherApp.png" alt="" />
            </div>
            <p>
              <h2>VANCA</h2>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
              voluptatibus beatae quos quibusdam ea quia laudantium ducimus
              facilis.
            </p>
          </SwiperSlide>
        </div>

        <div>
          <SwiperSlide>
            <div className="image-container">
              <img src="/images/chatApp.png" alt="" />
            </div>
            <p>
              <h2>VANCA</h2>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
              voluptatibus beatae quos quibusdam ea quia laudantium ducimus
              facilis.
            </p>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};
