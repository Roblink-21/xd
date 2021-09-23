import React from "react";
import { Button, Form, Input, message } from "antd";
import { LockOutlined, UserOutlined,ArrowRightOutlined  } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import translateMessage from "../utils/translateMessage";
import { formItemLayout } from "../utils/formLayout";



const login = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let history = useHistory();

    const onFinish = async ({ email, password }) => {
        try {
            const userCredential = await auth.signInWithEmailAndPassword(
                email,
                password
            );
            // Signed in
            const user = userCredential.user;
            console.log("user", user);
            history.push("/Servicios");
        } catch (error) {
            const errorCode = error.code;
            console.log("errorCode", errorCode);
            message.error(translateMessage(errorCode));
        }
    };

    return (
         <div className="Hola ho container d-flex justify-content-center">
             <div className=" d-flex container-fluid align-items-center h-90 ">
                 <div className="container  w-75 mt-5 row rounded col-md-3 ">
                     <div className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">
                         <p> 1</p>
                     </div>



                        <div  className="card col  col-md-6  text-center">
                            <Form
                            {...formItemLayout}
                            name="login"
                            className="login-form"
                            onFinish={onFinish}
                                >
                                <Form.Item
                                label="Correo electrónico"
                                name="email"
                                rules={[
                                { required: true, message: "Ingresa tu correo electrónico" },
                                {
                                    type: "email",
                                    message: "Ingresa un correo válido",
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined />} />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            label="Contraseña"
                            rules={[{ required: true, message: "Ingresa tu contraseña" }]}
                        >

                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="">Olvidé mi contraseña</a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" size = "small" icon={<ArrowRightOutlined />}>
                                Iniciar sesión
                            </Button>
                        </Form.Item>

                        <Form.Item>
                            ¿Aún no tienes una cuenta?{" "}
                            <Link to="/Registr">Regístrate ahora!</Link>
                        </Form.Item>
                    </Form>

                    </div>




                 </div>
             </div>

         </div>
    );
};

export default login;
