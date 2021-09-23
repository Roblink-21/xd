import React, { useState } from "react";
import {Carousel, Modal, Button} from "antd";
import img1 from "../imagenes/TestPage/1.jpg";
import img2 from "../imagenes/TestPage/1_1.jpg";
import img3 from "../imagenes/TestPage/1_2.jpg";
import img4 from "../imagenes/TestPage/1_3.jpg";
import imgVI from "../imagenes/TestPage/iconV.png";
import imgHI from "../imagenes/TestPage/iconH.png";
import "../estyles/TestPage.css";
import {NavLink} from "react-router-dom";
import iconNext from "../imagenes/HomePageIMG/bt1.png";


const contentStyle = {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    color: '#fff',
    lineHeight: '500px',
    textAlign: 'center',
    background: '#364d79',
};


const TestPage = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [isLoggedIn, setisLoggedIn] = useState(false);

    const [url, setUrl] = useState("/audio")


    const showModal = () => {
        setIsModalVisible(true);
        setisLoggedIn(true);
        setUrl("/vision")
    };

    const showModal2 = () => {
        setIsModalVisible(true);

    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setisLoggedIn(false);
        setUrl("/audio")
    };



    function checkResponse(isLoggedIn){
        if(isLoggedIn===false){
            return(
                <div>
                    <h2>A continuacion se presentaran los test que se van a tomar en cuenta para su evaluacion:</h2>
                    <div className="row">
                        <div className="col">
                            <ul>
                                <li> <a href="#"> Distribucion de objetos y numeros </a> </li>
                                <li> <a href="#"> Ruido Ambiental </a> </li>
                                <li> <a href="#"> Frecuencia </a> </li>
                            </ul>
                        </div>
                    </div>

                </div>
            );
        }
        return (
            <div>
                <h2>A continuacion se presentaran los test que se van a tomar en cuenta para su evaluacion:</h2>
                <div className="row">
                    <div className="col">
                        <ul>
                            <li> <a href="#"> Agudeza Visual </a> </li>
                            <li> <a href="#"> Bicromatico </a> </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li> <a href="#"> Circulo Horario </a> </li>
                            <li> <a href="#"> Daltonismo </a> </li>
                        </ul>
                    </div>
                </div>

            </div>
        );
    }



    return (
        <div>
            <Carousel autoplay>
                <div>
                    <img src={img1} className="App-logo, walpapperTest" alt="fond1.1" />
                </div>
                <div>
                    <img src={img2} className="App-logo, walpapperTest" alt="fond2.2" />
                </div>
                <div>
                    <img src={img3} className="App-logo, walpapperTest" alt="fond3.3" />
                </div>
                <div>
                    <img src={img4} className="App-logo, walpapperTest" alt="fond4.4" />
                </div>
            </Carousel>
            <div className="containerIcon">
                <div className="row">
                    <div align="center" className="col">
                        <div type="primary" onClick={showModal} className="iconBorder">
                            <img src={imgVI} className="App-logo, tamImg" alt="iconV" />
                            <p>Vision</p>
                        </div>

                    </div>
                    <div className="col">
                        <h2 className="textColor">Elije tu
                            tipo de
                            prueba</h2>
                    </div>
                    <div align="center" className="col">
                        <div type="primary" onClick={showModal2} className="iconBorder">
                            <img src={imgHI} className="App-logo, tamImg" alt="iconH" />
                            <p>Audicion</p>
                        </div>
                    </div>

                </div>
            </div>
            <div align="center" className="infContainer">
                <h2>Realice su Examen Visual y Auditivo Online y compruebe la capacidad de sus sentidos</h2>
                <p>Estas pruebas miden el estado de la audición del usuario  y se usan para averiguar si está presentando pérdida auditiva.</p>
                <p> Las pruebas de visión nos permiten evaluar la capacidad del sistema visual, mide cuánta visión se tiene y cuánta pérdida de visión puede tener el usuario.​</p>
            </div>

            <Modal title="Informacion:" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
                   footer={[
                       <Button key="back" onClick={handleCancel}>
                           Return
                       </Button>,

                       <NavLink  to={url} >
                           <Button >

                               Comenzar Tareas


                               <img src={iconNext} className="App-logo, iconTam" alt="iconBtt" />
                           </Button>
                       </NavLink>,


                   ]}>

                {checkResponse(isLoggedIn)}

            </Modal>

        </div>

    );
};

export default TestPage;