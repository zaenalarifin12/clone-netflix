import React, { useEffect, useState } from "react";
import { Row, Col, Carousel, Button, OverlayTrigger, Popover } from "react-bootstrap";
import { BsPlus, BsBell } from "react-icons/bs"
import Slider from "react-slick";
import MovieAPI from "../API/Movie";
import ListMovie from "../components/ListMovie";
import MyVerticallyCenteredModal from "../components/MyVerticallyCenteredModal";

export default function Home() {

  const [genres, setGenres] = useState([])
  const [listMovie, setListMovie] = useState([])

  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const getAPI = async () => {
    try {
      const genre = await MovieAPI.genres()
      setGenres(genre.data.genres)

      for (let index = 0; index < genre.data.genres.length; index++) {
        const movie = await MovieAPI.byGenre(genre.data.genres[index].id)

        setListMovie((currentMovie) => [
          ...currentMovie,
          {
            genre: genre.data.genres[index].name,
            movie: movie.data.results
          }])

      }
    } catch (error) {
      console.log(error);
    }


  }

  useEffect(() => {
    getAPI()
  }, [])

  const popover = (
    <Popover id="popover-basic">
      <Popover.Content>
        <p>Manage</p>
        <p>Exit</p>
      </Popover.Content>
    </Popover>
  );

  return (
    <div>
      {/* header */}
      <div className="position-relative">
        <div className="position-absolute " style={{ width: "100%" }}>
          <div className="px-5 pt-2" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <Row className="text-white font-weight-bold">
              <Col xs="3">
                <Row className="justify-content-between">
                  <p>Netflix</p>
                  <p>Movies</p>
                  <p>TV Shows</p>
                  <p>Latest</p>
                  <p>My List</p>
                </Row>
              </Col>
              <Col></Col>
              <Col xs="1" className="">
                <Row className="d-flex justify-content-between align-items-center ">
                  <BsPlus />
                  <BsBell />
                  {/* <BsSearch /> */}
                  <div>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                      <img src="/assets/profile.png" />
                    </OverlayTrigger>
                  </div>

                </Row>
              </Col>
            </Row>
          </div>
        </div>
        <img width="100%" src="/assets/baner.jpg" />
      </div>


      {/* scroll movie */}

      {listMovie.map((item) => {

        return (
          <div className="mx-5 container-movie">
            {/* <Row> */}
            <p className="pl-5">{item.genre}</p>
            {/* </Row> */}

            <Row className="my__carousel_main " >
              <Carousel interval={null} activeIndex={index} onSelect={handleSelect} >
                <Carousel.Item className="container-movie">
                  <ListMovie
                    movieList={item}
                    start={0}
                    end={5}
                  />
                </Carousel.Item>
                <Carousel.Item className="container-movie">
                  <ListMovie
                    movieList={item}
                    start={5}
                    end={10}
                  />
                </Carousel.Item>

              </Carousel>

            </Row>

          </div>
        )
      })}


      {/* footer */}
      <div className="container">
        <Row>
          <Col>
            <p>Audio and Subtitles</p>
            <p>Media Center</p>
            <p>Privacy</p>
            <p>Contact Us</p>
          </Col>
          <Col>
            <p>Audio Description</p>
            <p>Investor Relations</p>
            <p>Legal Notice</p>
            <p>Contact Us</p>
          </Col>
          <Col>
            <p>Help Center</p>
            <p>jobs</p>
            <p>Cookie Preferences</p>
          </Col>
          <Col>
            <p>GIft Card</p>
            <p>Term of Use</p>
            <p>Coorporate Information</p>
          </Col>
        </Row>

        <p>services</p>
        <p>@netflix</p>
      </div>
    </div>
  );
}
