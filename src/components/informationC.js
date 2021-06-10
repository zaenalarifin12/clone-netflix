import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import { Col, Row, Form } from 'react-bootstrap'
import { RegisterContext } from '../context/RegisterContext'
import { black, orange } from '../utils/color';

export default function InformationC() {
    let history = useHistory();

    const [state, dispatch] = useContext(RegisterContext)

    const handleBack = (e) => {
        e.preventDefault()
        dispatch({
            type: "RESET",
            payload: {
                card: 1
            }
        })
    }

    const handleRegister = () => {
        history.push("/")
    }

    return (
        <div class="card-body">
            <h5 class="card-title">Confirmation Data Entry</h5>

            <div class="form-group row">
                <label class="col-sm-4">FullName</label>
                <div class="col-sm-8">
                    <p>{state.user.first_name + " " + state.user.last_name}</p>
                </div>
            </div>

            <div class="form-group row">
                <label class="col-sm-4">JobDesc</label>
                <div class="col-sm-8">
                    <p>{state.user.jobDec.map((el) => {
                        return el.text
                    }).join(", ")}</p>
                </div>
            </div>

            <div class="form-group row">
                <label class="col-sm-4">Gender</label>
                <div class="col-sm-8">
                    <p>{state.user.gender}</p>
                </div>
            </div>

            <div class="form-group row">
                <label class="col-sm-4">E-mail</label>
                <div class="col-sm-8">
                    <p>{state.user.email}</p>
                </div>
            </div>

            <div class="form-group row">
                <label class="col-sm-4">Have a laptop / PC</label>
                <div class="col-sm-8">
                    <p>{state.user.laptop}</p>
                </div>
            </div>

            <div class="form-group row">
                <label class="col-sm-4">Mobile Number</label>
                <div class="col-sm-8">
                    <p>{state.user.mobile_number}</p>
                </div>
            </div>

            <div class="form-group row">
                <label class="col-sm-4">Address</label>
                <div class="col-sm-8">
                    <p>{state.user.address}</p>
                </div>
            </div>


            <div className="d-flex justify-content-end">
                <button type="submit" onClick={handleBack} class="btn mr-3"
                    style={{ backgroundColor: black, color: "white" }}
                >Back</button>
                <button type="submit" onClick={handleRegister} class="btn"
                    style={{ backgroundColor: orange, color: "white" }}
                >Submit</button>
            </div>

        </div>
    )
}
