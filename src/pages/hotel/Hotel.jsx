import './hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocation } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Hotel = () => {
  const photos= [
    {
      src: "https://cf.bstatic.com/xdata/images/city/600x600/724981.jpg?k=d2a74ca55c128d783c4a6836713abe2ef7874ba2cc276b9f671df017ff24da19&o="
    },
    {
      src: "https://cf.bstatic.com/xdata/images/city/600x600/619932.jpg?k=81c20cf1191a1d05472b45413bed3cee67dc92b8c1387c60a960beb5629f109d&o="
    },
    {
      src: "https://cf.bstatic.com/xdata/images/city/600x600/685535.jpg?k=e2be6eed1575001863411089bf79fd4be8a1d6fc4fb68ee5c865083994a6fe96&o="
    },
    {
      src: "https://cf.bstatic.com/xdata/images/city/600x600/724981.jpg?k=d2a74ca55c128d783c4a6836713abe2ef7874ba2cc276b9f671df017ff24da19&o="
    },
    {
      src: "https://cf.bstatic.com/xdata/images/city/600x600/685535.jpg?k=e2be6eed1575001863411089bf79fd4be8a1d6fc4fb68ee5c865083994a6fe96&o="
    },
    {
      src: "https://cf.bstatic.com/xdata/images/city/600x600/724981.jpg?k=d2a74ca55c128d783c4a6836713abe2ef7874ba2cc276b9f671df017ff24da19&o="
    },
  ]
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] =useState(false);

  const handleOpen = (i) =>{
    setSlideNumber(i);
    setOpen(true);
  }
  const handleMove =(direction) =>{
    let newSliderNumber;

    if(direction ==="l"){
      newSliderNumber = slideNumber === 0 ? 5 : slideNumber-1; 
    }else{
      newSliderNumber = slideNumber === 5 ? 0 : slideNumber+1; 
    }
    setSlideNumber(newSliderNumber);
  }
  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
       {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove("l")}/>
          <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleMove("r")}/>
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocation} />
            <span>Elton street 155 new york</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $100 at this property and get a free airpot taxi
          </span>
          <div className="hotelIamges">
            {photos.map((photo, i)=>(
              <div className="hotelImgWrapper">
                <img src={photo.src} alt="" className="hotelImg" onClick={()=>handleOpen(i)}/>
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailTexts">
              <h1 className='hotelTitl'>Stay in the heart of Krakow</h1>
              <p className='hotelDesc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptates expedita id a repudiandae accusamus facilis quod, suscipit quibusdam commodi nobis dicta quaerat nam perferendis fugiat. In aspernatur perferendis at?</p>
              </div>
            <div className="hotelDetailPrice">
              <h1>Perfect for 9-night stays!</h1>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime odit magnam in ipsa pariatur sapiente!</span>
              <h2>
                <b>$200</b> (9 night)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
          <Footer />
      </div>
    </>
  )
}

export default Hotel