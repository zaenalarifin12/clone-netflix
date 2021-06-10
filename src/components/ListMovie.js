import React, { useState } from 'react'
import { Row, Col } from "react-bootstrap";
import MovieAPI from '../API/Movie';
import MyVerticallyCenteredModal from "../components/MyVerticallyCenteredModal";

export default function ListMovie({ movieList, start, end }) {
    const [show, setShow] = useState(false)

    const [movie, setMovie] = useState(null)
    const [listVideo, setListVideo] = useState(null)

    const showModal = async (id) => {
        try {
            const movieFromDB = await MovieAPI.get(id)
            setMovie(movieFromDB.data)
            const videosMovie = await MovieAPI.videos(movieFromDB.data.id)
            setListVideo(videosMovie.data)
            setShow(true)
        } catch (error) {

        }
    }

    return (
        <>
            <MyVerticallyCenteredModal
                show={show}
                movie={movie}
                listVideo={listVideo}
                onHide={() => setShow(false)}
            />
            <div className="wrap-list-movie">
                {movieList.movie.slice(start, end).map((e) => {
                    return (
                        <div className="item m-1 position-relative"
                            onClick={() => showModal(e.id)}
                        >
                            <img src={`http://image.tmdb.org/t/p/w500/${e.backdrop_path}`} />
                            <Row className="d-flex justify-content-center position-absolute"

                                style={{ top: 10, left: 20 }}>
                                <p style={{ whiteSpace: "nowrap", color: "white", fontWeight: "bold" }}>{e.original_title.substring(0, 10)}</p>
                            </Row>
                        </div>
                    )
                })}
            </div>
        </>

    )
}
