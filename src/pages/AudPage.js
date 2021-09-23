// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import { Steps, Button, message } from 'antd';
import img1 from "../imagenes/AudPage/A1.jpg";
import test1_1 from "../imagenes/AudPage/test1.png"
import test1_2 from "../imagenes/AudPage/test2.png"
import test1_3 from "../imagenes/AudPage/test3.png"
import test1_4 from "../imagenes/AudPage/test4.png"
import test1_5 from "../imagenes/AudPage/test5.png"
import test1_6 from "../imagenes/AudPage/test6.png"
import test1_7 from "../imagenes/AudPage/test7.png"
import test1_8 from "../imagenes/AudPage/test8.png"
import test1_9 from "../imagenes/AudPage/test9.png"

import btPlay from  "../imagenes/AudPage/bt1.png"
import btMin from  "../imagenes/AudPage/bt2.png"
import btPlus from  "../imagenes/AudPage/bt3.png"

import useSound from 'use-sound';

import testAud1 from '../Audio/Audio Arbol Libro Perro.mp3';
import testAud2 from '../Audio/Concierto .mp3';
import testAud3 from '../Audio/8000Hz Derecho.mp3';
import testAud4 from '../Audio/8000Hz Izquierdo.mp3';

import "../estyles/AudPage.css";
import {NavLink} from "react-router-dom";

const AudPage = () => {

    const {Step} = Steps;

    const [volumen, setVolumen] = useState(0.5)
    const [nextsCamb, setnextsCamb] = useState("false")

    const [play] = useSound(testAud1);
    const [play2] = useSound(testAud2, {
        volume: volumen
    });

    const [play3] = useSound(testAud3, {
        volume: volumen
    });

    const [play4] = useSound(testAud4, {
        volume: volumen
    });


    const handleBeforeVol = () => {
        if (volumen > 0) {
            setVolumen((prevState) => prevState - 0.4);
        }
    };

    const handleNextsCamb = () => {
        setnextsCamb("true")
    };

    const handleNextVol = () => {
        if (volumen < 10) {
            setVolumen((prevState) => prevState + 0.4);
        }
    };

    console.log("xd", nextsCamb)
    function checkResponse()
    {
        if(nextsCamb === "false")
        {
            return(
                <div>
                    <p>Oido izquierdo 1kHZ</p>,

                    <img src={btPlay} onClick={play4} className="App-logo iconPlay" alt="play"/>

                    <Button type="primary" style={{ background: "#3D44E4", borderColor: "black" }} className="butPosit" onClick={handleNextsCamb}>
                         Siguiente
                    </Button>

                </div>
            );
        } if (nextsCamb === "true"){
            return(
            <div>
                <p>Oido derecho 1kHZ</p>

                <img src={btPlay} onClick={play3} className="App-logo iconPlay" alt="play2"/>

            </div>
            )
        }
    }

    function preparation() {
        return (
            <div>
                <h2>Recomendaciones antes de Empezar</h2>
                <p>No se recopilan datos personales mientras se realiza la audiometria online de HearVision. No obstante, cuando finalice el test debera facilitar sus detalles de contacto para obtener los resultados de la audiometria online y recibir mas informacion sobre los productos y servicios de HearVision.
                </p>
                <div className="row ">
                    <div className="col contCol">
                        <div className="contBack">
                                <h3>Observacion</h3>
                                <p>Este test es una revisión auditiva
                                    y solo debe emplearse como
                                    indicador del estado de su
                                    audición.

                                    Para una medición más precisa
                                    de su capacidad auditiva,
                                    por favor, contacte con su
                                    audioprotesista más cercano.</p>
                        </div>
                    </div>

                    <div align="center" className="col">
                        <div className="bordImg">
                            <img src={img1} className="App-logo ImgRadius" alt="testI"/>
                        </div>

                    </div>

                    <div align="center" className="col bordBd">

                        <h2>Use audifonos para
                            mejor comprensión de
                            los sonidos</h2>

                    </div>
                </div>

            </div>
        );
    }





    function test1(){
        return (
            <div className="row backg">
                <div className="col contentSpac2">
                    <h2>PRUEBA 1: Distincion de Objetos.</h2>
                    <h3>Seleccione los iconos que coinciden con las palabras que escucha</h3>
                    <button onClick={play}>Play!</button>

                </div>
                <div align="center" className="col contentSpac">

                    <div>

                        <div className="row contentSect">
                                <div className="col">
                                    <img src={test1_1} className="App-logo iconT" alt="test1"/>
                                </div>
                                <div className="col">
                                <img src={test1_2} className="App-logo iconT" alt="test2"/>
                                 </div>
                                 <div className="col">
                                <img src={test1_3} className="App-logo iconT" alt="test3"/>
                            </div>
                        </div>

                        <div className="row contentSect">
                            <div className="col">
                                <img src={test1_4} className="App-logo iconT" alt="test4"/>
                            </div>
                            <div className="col">
                                <img src={test1_5} className="App-logo iconT" alt="test5"/>
                            </div>
                            <div className="col">
                                <img src={test1_6} className="App-logo iconT" alt="test6"/>
                            </div>
                        </div>


                        <div className="row contentSect">
                            <div className="col">
                                <img src={test1_7} className="App-logo iconT" alt="test7"/>
                            </div>
                            <div className="col">
                                <img src={test1_8} className="App-logo iconT" alt="test8"/>
                            </div>
                            <div className="col">
                                <img src={test1_9} className="App-logo iconT" alt="test9"/>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }


    function test2(){
        return (
            <div className="row backg">
                <div className="col contentSpac2">
                    <h2>PRUEBA 2: Test de Ruido Ambiental.</h2>
                    <h3>Usando los botones + y -, ajuste el volumen hasta que comience a escuchar correctamente la conversacion</h3>
                </div>

                <div align="center" className="col contentSpac">

                    <div className="row">
                        <div className="col">
                            <img src={btMin} onClick={handleBeforeVol} className="App-logo iconT2" alt="min"/>
                        </div>
                        <div className="col">
                                <img src={btPlay} onClick={play2} className="App-logo iconPlay" alt="play"/>

                        </div>
                        <div className="col">
                            <img src={btPlus} onClick={handleNextVol} className="App-logo iconT2" alt="plus"/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }


    function test3(){
        return (
            <div className="row backg">
                <div className="col contentSpac2">
                    <h2>PRUEBA 3: Test de Frecuencia.</h2>
                    <h3>Usando los botones + y -, ajuste el volumen hasta que comience a escuchar el tono</h3>
                </div>

                <div align="center" className="col contentSpac">

                    <div className="row">
                        <div className="col">
                            <img src={btMin} onClick={handleBeforeVol} className="App-logo iconT2" alt="min"/>
                        </div>
                        <div className="col">

                            {checkResponse()}

                        </div>
                        <div className="col">
                            <img src={btPlus} onClick={handleNextVol} className="App-logo iconT2" alt="plus"/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }


    const steps = [
        {
            title: 'Preparacion',
            content: preparation(),
        },
        {
            title: 'Distincion de Objetos',
            content: test1(),
        },
        {
            title: 'Ruido Ambiental',
            content: test2(),
        },
        {
            title: 'Frecuencia',
            content: test3(),
        }
    ];

    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    return (
        <div>
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
                {current === 0 && (
                    <Button type="primary" style={{ background: "#3D44E4", borderColor: "black" }} className="butPosit" onClick={() => next()}>
                        Hecho y Continuar
                    </Button>
                )}
                {current > 0 && current < 3 && (
                    <Button type="primary" style={{ background: "#3D44E4", borderColor: "black" }} onClick={() => next()}>
                        Continuar
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        <NavLink to="/ResultA"> Terminar </NavLink>
                    </Button>
                )}
            </div>
        </div>
    );
};

export default AudPage;