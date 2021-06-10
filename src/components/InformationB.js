import React, { useContext, useState, useEffect } from 'react'
import { Col, Row, Form } from 'react-bootstrap'
import { RegisterContext } from '../context/RegisterContext'
import { black, orange } from '../utils/color'

export default function InformationB() {

    const [state, dispatch] = useContext(RegisterContext)

    const [formData, setFormData] = useState({
        laptop: "",
        address: "",
        mobile_number: 0

    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log(formData);
    }

    const handleBack = (e) => {
        e.preventDefault()
        dispatch({
            type: "RESET",
            payload: {
                card: 0
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: "CARD_2",
            payload: {
                user: formData,
                card: 2
            }
        })
    }


    const checkData = () => {
        const data = localStorage.getItem("register")
        if (data != null) {
            const dataFromLocal = JSON.parse(data);
            setFormData(dataFromLocal)
        }
    }
    useEffect(() => {
        checkData()
    }, [])

    return (
        <div class="card-body">
            <h5 class="card-title">Information B</h5>

            <form onSubmit={handleSubmit}>

                <div class="form-group">
                    <label>Have a Laptop / PC</label>
                    <br />
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" required id="customRadioInline1" name="laptop" class="custom-control-input" value="yes" onChange={handleChange}
                            checked={formData.laptop == "yes" ? "checked" : ""}
                        />
                        <label class="custom-control-label" for="customRadioInline1">Yes</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" required id="customRadioInline2" name="laptop" class="custom-control-input" value="no" onChange={handleChange}
                            checked={formData.laptop == "no" ? "checked" : ""}
                        />
                        <label class="custom-control-label" for="customRadioInline2">No</label>
                    </div>
                </div>

                <div class="form-group">
                    <label>Address</label>
                    <textarea class="form-control" required rows="3" name="address" onChange={handleChange} value={formData.address} />
                </div>

                <div class="form-group">
                    <label>Mobile Number</label>
                    <input type="number" class="form-control" required name="mobile_number" onChange={handleChange} placeholder="Mobile Number"
                        value={formData.mobile_number}
                    />
                </div>

                <div className="d-flex justify-content-end">
                    <button type="button" onClick={handleBack} class="btn mr-3"
                        style={{ backgroundColor: black, color: "white" }}
                    >Back</button>
                    <button type="submit" class="btn"
                        style={{ backgroundColor: orange, color: "white" }}
                    >Next</button>
                </div>
            </form>
        </div>
    )
}
