import React from "react";
import "./Services.css";
import photo1 from '../../images/photo-1556020685-ae41abfc9365.jfif';

function Services() {
  return(
    <div className="block block_services" id="service">
      <div className="block__background block__background_services"></div>
      <div className="block__container">
        <p className="block__header">Our Services</p>
        <div className="block__line"></div>
        <h2 className="block__title">We provide five types of world-class service.</h2>
        <p className="block__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

        <p className="block__text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          Neque porro quisquam est,</p>  

        <p className="block__text">qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
          numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
          quaerat voluptatem.</p>
      </div>
      <img className="block__img block__img_services" alt="фото дома" src={photo1}></img>
    </div>
  )
}

export default Services;