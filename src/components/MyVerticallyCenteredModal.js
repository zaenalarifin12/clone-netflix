import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MovieAPI from "../API/Movie";
import { orange } from "../utils/color";

export default function MyVerticallyCenteredModal(props) {


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered

    >
      <Modal.Header className="p-0 relative" closeButton style={{ backgroundColor: orange, borderBottomColor: orange }}>
        <img src={`http://image.tmdb.org/t/p/w500/${props.movie?.backdrop_path}`} width="100%" className="rounded-lg" />
        <h4 className="position-absolute text-white"
          style={{
            top: 10,
            left: 10,
            fontWeight: "bold"
          }}
        >{props.movie?.original_title}</h4>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: orange }}>

        <div className="row">

          <div className="col-8">
            <p className="text-white">{props.movie?.overview}</p>
          </div>
          <div className="col-4">
            <span className="font-weight-bold text-white">Genre : </span>
            <span className="text-white">
              {props.movie?.genres.map((e) => e.name).join(", ")}
            </span>
          </div>
        </div>



        <div className="d-flex justify-content-start">
          <h2 className="text-lg text-white font-weight-bold">Videos</h2>
        </div>

        {props.listVideo?.results?.map((e, index) => (
          <Link to={`//www.youtube.com/watch?v=${e.key}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <div className="row my-2">
              <div className="col-3">
                <img src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png" className="border rounded bg-white" style={{ width: "100%" }} />
              </div>
              <div className="col-7">
                <p className="text-white">{props.listVideo?.results[index].name}</p>
              </div>
            </div>
          </Link>



        ))}



      </Modal.Body>

      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}