import React, {useState} from "react";
import { Steps, Button, message } from 'antd';
import img1 from "../imagenes/VisionPage/v1.png";
import img2 from "../imagenes/VisionPage/v2.png";
import imgTest1 from "../imagenes/VisionPage/test1.JPG";
import imgTest2 from "../imagenes/VisionPage/test2.JPG";
import imgTest3 from "../imagenes/VisionPage/test3.JPG";
import imgTest4 from "../imagenes/VisionPage/test4.png";
import "../estyles/VisionPage.css";
import { EyeOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd';
import InputNumber from 'react-input-number';

const VisionPage = () => {

    const {Step} = Steps;
    const [num, setNum] = useState(2.2);

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }


    function preparation() {
        return (
            <div>
                <h2>Recomendaciones antes de Empezar</h2>
                <p>Puesto que todos los ajustes del color y la pantalla de los monitores están calibrados de forma un
                    poco distinta, se deben llevar a cabo algunos preparativos para visualizar de forma precisa la
                    revisión de la vista y obtener un resultado exacto. Realice los 3 pasos siguientes y observe las
                    indicaciones. En cuanto haya terminado, calcularemos automáticamente los ajustes de visualización
                    correctos para la revisión de la vista.
                </p>
                <p>Si ya utiliza un dispositivo auxiliar de visión (ANTEOJOS o lentes de contacto), tiene que llevarlo
                    durante la revisión de la vista. Si tiene más de un dispositivo auxiliar de visión, póngase el que
                    utiliza normalmente para trabajar con el ordenador.</p>
                <div className="row containInst">
                    <div className="col containPass">
                        <h3>Paso #1</h3>
                        <p>Coloca una tarjeta de crédito
                            encima de la imagen y ajústala
                            con los botones +/-
                            hasta que los tamaños coincidan</p>
                    </div>
                    <div align="center" className="col">
                        <img src={img1} className="App-logo, scale" alt="card"/>
                    </div>
                </div>

                <div className="row containInst">
                    <div className="col containPass">
                        <h3>Paso #2</h3>
                        <p className="tamLet">Colóquese a una distancia de
                            unos 70 - 100 cm de la pantalla.
                            Obtendrá indicaciones exactas
                            con cada prueba individual.</p>

                    </div>
                    <div align="center" className="col">
                        <img src={img2} className="App-logo, scale" alt="distance"/>
                    </div>
                </div>

            </div>
        );
    }





    function test1(){
        return (
            <div className="row backg">
                <div className="col contentSpac2">
                    <h2>PRUEBA 1: Control de la agudeza visual.</h2>
                    <h3>Distinguir detalles de forma nítida a una distancia y condiciones determinadas</h3>

                    <ul>
                        <li> Cubre tu ojo derecho con la mano e indica en qué fila empiezas a tener dificultades para visualizar las letras. Repite la operación con el ojo izquierdo.</li>
                    </ul>

                </div>
                <div align="center" className="col contentSpac">

                    <div>

                        <div className="row contentSect">
                            <div className="col">
                                <div className="boxSect">
                                    <EyeOutlined/> <l>OJO IZQUIERDO</l>
                                </div>
                            </div>
                            <div className="col"></div>
                            <div className="col">
                                <div className="boxSect">
                                    <l>OJO DERECHO</l> <EyeOutlined/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">

                                <ul className="styleUl">
                                    <li><Checkbox onChange={onChange}></Checkbox></li>
                                    <li><Checkbox onChange={onChange}></Checkbox></li>
                                    <li><Checkbox onChange={onChange}></Checkbox></li>
                                    <li><Checkbox onChange={onChange}></Checkbox></li>
                                    <li><Checkbox onChange={onChange}></Checkbox></li>
                                    <li><Checkbox onChange={onChange}></Checkbox></li>
                                    <li><Checkbox onChange={onChange}></Checkbox></li>
                                    <li><Checkbox onChange={onChange}></Checkbox></li>
                                </ul>
                            </div>
                            <div className="col">
                                <img src={imgTest1} className="App-logo, test1" alt="test1"/>
                            </div>
                            <div className="col">
                                <ul className="styleUl">
                                    <li><Checkbox onChange={onChange}></Checkbox></li>
                                    <li><Checkbox onChange={onChange}></Checkbox></li>
                                    <li><Checkbox onChange={onChange}></Checkbox></li>
                                    <li><Checkbox onChange={onChange}></Checkbox></li>
                                    <li><Checkbox onChange={onChange}></Checkbox></li>
                                    <li><Checkbox onChange={onChange}></Checkbox></li>
                                    <li><Checkbox onChange={onChange}></Checkbox></li>
                                    <li><Checkbox onChange={onChange}></Checkbox></li>
                                </ul>
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
                    <h2>PRUEBA 2: Test bicromático.</h2>
                    <h3>Detección de miopía e hipermetropía</h3>

                    <ul>
                        <li>La prueba se realizará monocularmente. Primero la realizaremos para un ojo y después para el otro,
                            tapando siempre el ojo no examinado.</li>
                        <li>Si utilizas gafas o lentillas para visión lejana, debes utilizarlas.</li>
                        <li>Deberás seleccionar en qué fondo de color (verde o rojo) ves más nítidas las letras.</li>
                    </ul>

                </div>

                <div align="center" className="col contentSpac">

                    <div>

                        <div className="row contentSect">
                            <img src={imgTest2} className="App-logo, test1" alt="test2"/>
                        </div>

                        <div className="row">
                            <div className="row contentSect2">
                                <div className="col-3">
                                    <div className="boxSect">
                                        <EyeOutlined/> <l>OJO IZQUIERDO</l>
                                    </div>
                                    <div><Checkbox onChange={onChange}></Checkbox> Veo más nítido sobre fondo verde</div>
                                    <div><Checkbox onChange={onChange}></Checkbox> Veo más nítido sobre fondo rojo</div>
                                </div>
                                <div className="col-2"></div>
                                <div className="col-3">
                                    <div className="boxSect">
                                        <l>OJO DERECHO</l> <EyeOutlined/>
                                    </div>
                                    <div><Checkbox onChange={onChange}></Checkbox> Veo más nítido sobre fondo verde</div>
                                    <div><Checkbox onChange={onChange}></Checkbox> Veo más nítido sobre fondo rojo</div>
                                </div>
                            </div>

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
                    <h2>PRUEBA 3: Test Circulo Horario.</h2>
                    <h3>Detección del astigmatismo</h3>

                    <ul>
                        <li>Si llevas gafas o lentillas deberás llevarlas puestas antes de iniciar el test.</li>
                        <li>Ahora, observa la figura e indica si ves alguna línea más nítida o definida que las demás.</li>
                    </ul>

                </div>

                <div align="center" className="col contentSpac">

                    <div>

                        <div className="row contentSect">
                            <img src={imgTest3} className="App-logo, test1" alt="test3"/>
                        </div>

                        <div className="row">
                            <div className="row contentSect2">
                                <div className="col-3">
                                    <div className="boxSect">
                                        <EyeOutlined/> <l>OJO IZQUIERDO</l>
                                    </div>
                                    <div><Checkbox onChange={onChange}></Checkbox> Sí, visualizo algunas líneas más nítidas.</div>
                                    <div><Checkbox onChange={onChange}></Checkbox> No, visualizo todas las líneas con la misma nitidez.</div>
                                </div>
                                <div className="col-2"></div>
                                <div className="col-3">
                                    <div className="boxSect">
                                        <l>OJO DERECHO</l> <EyeOutlined/>
                                    </div>
                                    <div><Checkbox onChange={onChange}></Checkbox> Sí, visualizo algunas líneas más nítidas.</div>
                                    <div><Checkbox onChange={onChange}></Checkbox> No, visualizo todas las líneas con la misma nitidez</div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        );
    }

    function test4(){
        return (
            <div className="row backg">
                <div className="col contentSpac2">
                    <h2>PRUEBA 4: Test de Ishihara</h2>
                    <h3>Diagnóstico del daltonismo</h3>

                    <ul>
                        <li>En primer lugar, intenta que la iluminación sea lo más parecida a una luz natural y evita los máximos reflejos posibles.</li>
                        <li>Sitúate a una distancia entre 70 cm/1 m de la pantalla.</li>
                        <li>Deberás introducir los números que ves en cada círculo en menos de 3 segundos.</li>
                    </ul>

                </div>

                <div align="center" className="col contentSpac">

                    <div>

                        <div className="row contentSect">
                            <img src={imgTest4} className="App-logo, test1" alt="test4"/>
                        </div>

                        <div align="left" className="row">
                            <div>
                                <InputNumber min={10} max={100} step={0.03} value={num} onChange={setNum} /> <l>¿Qué número es?</l>
                            </div>
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
            title: 'Control de la agudeza visual',
            content: test1(),
        },
        {
            title: 'Bicromatico',
            content: test2(),
        },
        {
            title: 'Circulo Horario',
            content: test3(),
        },
        {
            title: 'Daltonismo',
            content: test4(),
        }
    ];

    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    return (
        <div>
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action, sectionBut">
                {current < steps.length - 1 && (
                    <Button classname="designBut" type="primary" onClick={() => next()}>
                        Hecho y Continuar
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Terminar
                    </Button>
                )}
            </div>
        </div>
    );
};

export default VisionPage;