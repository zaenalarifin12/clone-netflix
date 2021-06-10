import React, { useEffect, useState, useContext } from 'react'
import { Col, Row, Form } from 'react-bootstrap'
import { RegisterContext } from '../context/RegisterContext'
import { orange } from '../utils/color'

export default function InformationA() {

    const [state, dispatch] = useContext(RegisterContext)

    const [initialJob, setInitialJob] = useState({
        text: ""
    })
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        jobDec: [initialJob],
        name: "",
        gender: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    }


    const handleChangeJob = (e, index) => {
        e.preventDefault()
        const newJob = formData.jobDec.map((job, sIndex) => {
            if (index !== sIndex) {
                return formData.jobDec[sIndex];
            } else {
                let tempJob = { ...formData.jobDec[index] };
                tempJob[e.target.name] = e.target.value;

                return tempJob;
            }
        });

        setFormData({
            ...formData,
            jobDec: newJob,
        });
    };


    const listJob = []

    const addJobDesc = (e) => {
        e.preventDefault()
        setFormData({
            ...formData,
            jobDec: formData.jobDec.concat([initialJob])
        })
    }

    // submit next page
    formData.jobDec.map((jobDesc, index) => {
        if (index > 0) {
            listJob.push(
                <input name="text" value={formData.jobDec[index].text} required type="text" className="form-control mt-2" onChange={(e) => handleChangeJob(e, index)} />
            )
        } else {

            listJob.push(
                <input name="text" value={formData.jobDec[index].text} required type="text" className="form-control" onChange={(e) => handleChangeJob(e, index)} />
            )
        }
    })

    const handleSubmit = (e) => {

        e.preventDefault()
        dispatch({
            type: "CARD_1",
            payload: {
                user: formData,
                card: 1
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
            <h5 class="card-title">Information A</h5>

            <form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <div class="form-group">
                            <label>First Name</label>
                            <input
                                name="first_name"
                                type="text"
                                class="form-control"
                                required
                                placeholder="First Name"
                                value={formData.first_name}
                                onChange={handleChange}
                            />
                        </div>
                    </Col>
                    <Col>
                        <div class="form-group">
                            <label>Last Name</label>
                            <input name="last_name" required type="text" class="form-control" placeholder="Last Name"
                                value={formData.last_name}
                                onChange={handleChange}
                            />
                            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                        </div>
                    </Col>
                </Row>

                <Row className="d-flex align-items-end">
                    <Col xs={10}>
                        <div class="form-group">
                            <label>JobDesc</label>
                            {listJob}
                        </div>
                    </Col>
                    <Col xs={2} className="d-flex justify-content-end">
                        <div class="form-group">
                            <button onClick={addJobDesc} className="btn"
                                style={{ backgroundColor: orange, color: "white" }}
                            >+</button>
                        </div>
                    </Col>
                </Row>


                <Form.Group >
                    <Form.Label>Gender</Form.Label>
                    <Form.Control name="gender" as="select"
                        onChange={handleChange} required
                        value={formData.gender}
                    >
                        <option >Man</option>
                        <option >Woman</option>
                    </Form.Control>
                </Form.Group>

                <div class="form-group">
                    <label>Email</label>
                    <input name="email" required type="email" class="form-control" placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" class="btn float-right" style={{ backgroundColor: orange, color: "white" }}>Next</button>
            </form>
        </div>
    )
}
