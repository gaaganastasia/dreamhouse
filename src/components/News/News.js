import React from "react";
import "./News.css";
import photo1 from '../../images/photo-1564320382348-c06ae02a3897.jfif';
import photo2 from "../../images/photo-1523755231516-e43fd2e8dca5.jfif";
import photo3 from "../../images/photo-1618377385397-8eb9aba7d6ad.jfif";

function News() {
  return(
    <div className="news" id="blog">
      <h2 className="news__header">Latest News</h2>
      <h3 className="news__subtitle">From Our Blog</h3>
      <div className="news__container">
        <div className="news__block">
          <img className="news__img" alt="обложка статьи" src={photo1}></img>
          <div className="news__info">
            <h3 className="news__title">Capturing the essencc of Home in Ultra-Modern</h3>
            <p className="news__date">Dec 20, 2020</p>
          </div>
        </div>
        <div className="news__block">
          <img className="news__img" alt="обложка статьи" src={photo2}></img>
          <div className="news__info">
            <h3 className="news__title">Renovation Architecture and Design</h3>
            <p className="news__date">Dec 15, 2020</p>
          </div>
        </div>
        <div className="news__block">
          <img className="news__img" alt="обложка статьи" src={photo3}></img>
          <div className="news__info">
            <h3 className="news__title">Architecture Reclaimed Wolid for the Modern</h3>
            <p className="news__date">Dec 25, 2020</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News;