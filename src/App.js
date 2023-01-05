import React, { useState } from "react";
import Icons from "./components/Icons"
import { toast, ToastContainer } from 'react-toastify'
import { Card, CardBody, Button, Row, Col, Container } from "reactstrap"
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css"
import "./App.css"

let ItemArray = new Array(9).fill("empty")

function App() {
    const [isCross, SetisCross] = useState(false)
    const [WinMessage, SetWinMessage] = useState("")

    function Reload() {
        ItemArray.fill("empty", 0, 9)
        SetisCross(false)
        SetWinMessage("")
    }

    function Winner() {
        if ((ItemArray[0] !== 'empty' && ItemArray[1] !== 'empty' && ItemArray[2] !== 'empty') &&
            (ItemArray[0] === ItemArray[1] && ItemArray[0] === ItemArray[2] && ItemArray[1] === ItemArray[2])) {
            SetWinMessage(`Player ${ItemArray[0]} Won`)
        } else if ((ItemArray[3] !== 'empty' && ItemArray[4] !== 'empty' && ItemArray[5] !== 'empty') &&
            (ItemArray[3] === ItemArray[4] && ItemArray[3] === ItemArray[5] && ItemArray[4] === ItemArray[5])) {
            SetWinMessage(`Player ${ItemArray[3]} Won`)
        } else if ((ItemArray[6] !== 'empty' && ItemArray[7] !== 'empty' && ItemArray[8] !== 'empty') &&
            (ItemArray[6] === ItemArray[7] && ItemArray[6] === ItemArray[8] && ItemArray[7] === ItemArray[8])) {
            SetWinMessage(`Player ${ItemArray[6]} Won`)
        } else if ((ItemArray[0] !== 'empty' && ItemArray[3] !== 'empty' && ItemArray[6] !== 'empty') &&
            (ItemArray[0] === ItemArray[3] && ItemArray[0] === ItemArray[6] && ItemArray[3] === ItemArray[6])) {
            SetWinMessage(`Player ${ItemArray[0]} Won`)
        } else if ((ItemArray[1] !== 'empty' && ItemArray[4] !== 'empty' && ItemArray[7] !== 'empty') &&
            (ItemArray[1] === ItemArray[4] && ItemArray[1] === ItemArray[7] && ItemArray[4] === ItemArray[7])) {
            SetWinMessage(`Player ${ItemArray[1]} Won`)
        } else if ((ItemArray[2] !== 'empty' && ItemArray[5] !== 'empty' && ItemArray[8] !== 'empty') &&
            (ItemArray[2] === ItemArray[5] && ItemArray[2] === ItemArray[8] && ItemArray[5] === ItemArray[8])) {
            SetWinMessage(`Player ${ItemArray[2]} Won`)
        } else if ((ItemArray[0] !== 'empty' && ItemArray[4] !== 'empty' && ItemArray[8] !== 'empty') &&
            (ItemArray[0] === ItemArray[4] && ItemArray[0] === ItemArray[8] && ItemArray[4] === ItemArray[8])) {
            SetWinMessage(`Player ${ItemArray[0]} Won`)
        } else if ((ItemArray[2] !== 'empty' && ItemArray[4] !== 'empty' && ItemArray[6] !== 'empty') &&
            (ItemArray[2] === ItemArray[4] && ItemArray[2] === ItemArray[6] && ItemArray[4] === ItemArray[6])) {
            SetWinMessage(`Player ${ItemArray[2]} Won`)
        }
    }

    function ChangeItem(index) {
        if (WinMessage) {
            return toast(WinMessage, { type: "success", theme: "dark" })
        }
        if (ItemArray[index] === 'empty') {
            ItemArray[index] = isCross ? 'cross' : 'circle'
            SetisCross(!isCross)
        } else {
            return toast('Already Filled', { type: 'error', theme: 'dark' })
        }

        Winner()
    }

    return (
        <Container className="p-5">
            <ToastContainer position="bottom-center" />
            <Row>
                <Col md={6} className="offset-md-3">
                    {WinMessage ? (
                        <div className="mb-2 mt-2">
                            <h1 className="text-success text-uppercase text-center">
                                {WinMessage}
                            </h1>
                            <Button color="success" block onClick={Reload}>
                                Reload my game
                            </Button>
                        </div>
                    ) : (
                        <h1 className="text-center text-success">
                            {isCross ? 'cross' : 'circle'} turn
                        </h1>
                    )}
                    <div className="grid">
                        {ItemArray.map((item, index) => (
                            <Card color="danger" onClick={()=>ChangeItem(index)}>
                                <CardBody className="box">
                                    <Icons name={item} />
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default App
