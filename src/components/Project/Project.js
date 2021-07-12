import React from "react";
import "./Project.css";
import photo1 from '../../images/photo-1583329550487-0fa300a4cd1a.jfif';
import photo2 from '../../images/photo-1616627451515-cbc80e5ece35.jfif';
import photo3 from '../../images/photo-1518733057094-95b53143d2a7.jfif';
import photo4 from '../../images/photo-1583847268964-b28dc8f51f92.jfif';
import photo5 from '../../images/photo-1585128792020-803d29415281.jfif';

function Project() {
  return(
    <div className="project" id="project">
      <div className="project__info">
        <h2 className="project__header">Our Project</h2>
        <div className="project__line"></div>
        <h3 className="project__subtitle">Chake out some of </h3>
        <h3 className="project__subtitle">Our award-winning project.</h3>
        <div className="project__slider slider">
          <p className="slider__01">01</p>
          <div className="slider__line"></div>
          <p className="slider__05">05</p>
          <button type="button" className="slider__left-btn"></button>
          <button type="button" className="slider__right-btn"></button>
        </div>
      </div>
      <div className="project__container">
        <div className="project__block">
          <img alt="фото проекта" src={photo1} className="project__img"></img>
          <h3 className="project__title">Li Europan lingues members project</h3>
          <p className="project__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="project__readmore readmore">
            <p className="readmore__text">Read more</p>
            <div className="readmore__line"></div>
          </div>
        </div>
        <div className="project__block">
          <img alt="фото проекта" src={photo2} className="project__img"></img>
          <h3 className="project__title">Grammatica del resiltant project</h3>
          <p className="project__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="project__readmore readmore">
            <p className="readmore__text">Read more</p>
            <div className="readmore__line"></div>
          </div>
        </div>
        <div className="project__block">
          <img alt="фото проекта" src={photo3} className="project__img"></img>
          <h3 className="project__title">Li Europan lingues members project</h3>
          <p className="project__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="project__readmore readmore">
            <p className="readmore__text">Read more</p>
            <div className="readmore__line"></div>
          </div>
        </div>
        <div className="project__block">
          <img alt="фото проекта" src={photo4} className="project__img"></img>
          <h3 className="project__title">Li Europan lingues members project</h3>
          <p className="project__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="project__readmore readmore">
            <p className="readmore__text">Read more</p>
            <div className="readmore__line"></div>
          </div>
        </div>
        <div className="project__block">
          <img alt="фото проекта" src={photo5} className="project__img"></img>
          <h3 className="project__title">Grammatica del resiltant project</h3>
          <p className="project__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="project__readmore readmore">
            <p className="readmore__text">Read more</p>
            <div className="readmore__line"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project;