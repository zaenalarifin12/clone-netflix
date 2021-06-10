import React, { useContext, useEffect, useState } from 'react'
import { Col, Row, Form } from 'react-bootstrap'
import InformationA from '../components/InformationA'
import InformationB from '../components/InformationB'
import InformationC from '../components/informationC'
import { RegisterContext } from '../context/RegisterContext'
import { black, light_black } from '../utils/color'

export default function Register() {

    const [stateCard, dispatch] = useContext(RegisterContext)

    const checkData = () => {
        let cardFromLocal = localStorage.getItem("card")
        if (cardFromLocal == 1 || cardFromLocal == 2 || cardFromLocal == 3) {
            dispatch({
                type: "RESET",
                payload: {
                    card: cardFromLocal
                }
            })
        }
        // localStorage.getItem("register")
    }

    useEffect(() => {
        checkData()
    }, [])

    return (

        <div
            style={{
                backgroundImage: `url(${"assets/primary.jpg"})`,
                position: "relative",
                height: "100vh",
                width: "100%"
            }} >
            <div

                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)", position: 'absolute', zIndex: 2, width: "100%", height: "100%"
                }}>


                <div class="card" style={{
                    width: "40%", left: "30%", top: "20%", zIndex: 4, position: "absolute"
                }}>
                    {stateCard.card == 0 ? <InformationA /> : stateCard.card == 1 ? <InformationB /> : <InformationC />}
                </div>
            </div>
        </div >
    )
}
