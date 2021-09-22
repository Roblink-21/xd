// import React from 'react';
//
// import {Form, DatePicker, TimePicker, Button, Input, Select, InputNumber, message} from 'antd';
// import {auth, db} from "../firebase";
//
//
//
//
//
// const prefixSelector = (
//     <Form.Item name="prefix" noStyle>
//
//     </Form.Item>
// );
//
//
// const Registr = () => {
//
//
//     const [form]=Form.useForm();
//
//     const onFinish = async ({email,password,name}) => {
//
//
//
//         try {
//
//             //console.log('values',values);
//             const userCredential = await auth.createUserWithEmailAndPassword(email, password);
//             // Signed in
//             const user = userCredential.user;
//             console.log("user",user);
//             await db.ref('users/${user.uid}').set({
//                 id:user.uid,
//                 name,
//                 email,
//                 password,
//             });
//
//             //message.success("usuario registardo correctamnete");
//         } catch (error)  {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log("errorcode",errorCode);
//             console.log("errorMesage",errorMessage);
//             message.error(errorCode);
//             // ..
//         }
//     };
//
//
//
//
//
//     return (
//         <div className="Ho ">
//             <div className=" d-flex container-fluid align-items-center h-90">
//
//                 <div className="container  w-75 mt-5 row rounded col-md-3 ">
//                     <div className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">
//                         <p>1 </p>
//                     </div>
//                     <div className="col  col-md-6">
//                         <div className="card text-center">
//                             <div className="card-header ">
//                                 <ul className="nav nav-pills col-md-12 card-header-pills">
//                                     <li className="col-md-6 nav-item" >
//                                         <a className="nav-link active  " href="#">Iniciar sesion</a>
//                                     </li>
//                                     <li className="col-md-6 nav-item" >
//                                         <a className="nav-link active  " href="#">REgistro</a>
//                                     </li>
//                                     <div className="card-body">
//                                         <h5>Registrate con</h5>
//                                         <div className="row">
//                                         <div className="col">
//                                             <button className="btn btn-outline-primary w-100 my-1">
//                                                 <div className="row align-items-center">
//                                                     <div className="col-2 d-none d-md-block">
//                                                         <img src="../imagenes/facebook.png"  width="32" alt=""/>
//                                                     </div>
//
//                                                     <div className="col-12 col-md-10 text-center">
//                                                         FACEBOOK
//                                                     </div>
//                                                 </div>
//                                             </button>
//                                         </div>
//                                         <div className="col">
//
//                                             <button className="btn btn-outline-danger w-100 my-1">
//                                                 <div className="row align-items-center">
//                                                     <div className="col-2 d-none d-md-block">
//                                                         <img src="../imagenes/Logo.png" width="237" alt=""/>
//                                                     </div>
//
//                                                     <div className="col-12 col-md-10 text-center">
//                                                         GOOGLE
//                                                     </div>
//                                                 </div>
//                                             </button>
//                                         </div>
//
//
//                                         <div className="container-fluid  my-5">
//                                             <form action="#">
//                                                 <div className="mb-2">
//
//                                                     <Form.Item
//                                                         name="name"
//                                                         label="Nombre Completo "
//                                                         rules={[
//                                                             {
//                                                                 required: true, message: 'Ingrese su nombre'
//                                                             }
//                                                         ]}
//                                                     >
//                                                         <Input />
//                                                     </Form.Item>
//
//
//
//                                                 </div>
//                                                 <div className="mb-2">
//                                                     <Form.Item
//                                                         name="email"
//                                                         label="Correo Electronico"
//                                                         rules={[
//                                                             {
//                                                                 type: 'email',
//                                                                 message: 'Ingresa un correo valido!',
//                                                             },
//                                                             {
//                                                                 required: true,
//                                                                 message: 'Este correo es obligatorio!',
//                                                             },
//                                                         ]}
//                                                     >
//                                                         <Input />
//                                                     </Form.Item>
//                                                 </div>
//
//                                                 {/*contrasenia*/}
//                                                 <div className="mb-2">
//                                                     <Form.Item
//                                                         name="password"
//                                                         label="Contraseña"
//                                                         rules={[
//                                                             {
//                                                                 required: true,
//                                                                 message: 'Ingrese su contraseña!',
//                                                             },
//                                                         ]}
//                                                         hasFeedback
//                                                     >
//                                                         <Input.Password />
//                                                     </Form.Item>
//
//                                                 </div>
//                                                 <div className="mb-2">
//
//
//                                                     <Form.Item label="Fecha de nacimiento " style={{ marginBottom: 0 }}>
//                                                         <Form.Item
//                                                             name="year"
//                                                             rules={[{ required: true }]}
//                                                             style={{ display: 'inline-block', width: 'calc(100% - 8px)' }}
//                                                         >
//                                                             <Input placeholder="Año AAAA" />
//                                                         </Form.Item>
//                                                         <Form.Item
//                                                             name="month"
//                                                             rules={[{ required: true }]}
//                                                             style={{ display: 'inline-block', width: 'calc(100% - 8px)' , margin: '0 0px' }}
//                                                         >
//                                                             <Input placeholder="Mes MM" />
//                                                         </Form.Item>
//                                                     </Form.Item>
//                                                 </div>
//
//
//                                                 <div className="mb-2">
//
//                                                     <Form.Item
//                                                         name="phone"
//                                                         label="Telefono "
//                                                         rules={[{ required: true, message: 'Please input your phone number!' }]}
//                                                     >
//                                                         <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
//                                                     </Form.Item>
//
//
//                                                 </div>
//
//                                                 <div className="mb-2">
//                                                     <Form.Item
//                                                         name="gender"
//                                                         label="genero "
//                                                         rules={[{ required: true, message: 'Please input your phone number!' }]}
//                                                     >
//                                                         <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
//                                                     </Form.Item>
//
//
//
//
//
//                                                 </div>
//
//
//
//                                                 <div className="d-grid">
//                                                     <button type="submit" className="btn btn-primary"> Crear cuenta</button><br/>
//                                                 </div>
//                                             </form>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//
//     );
// };
//
// export default Registr;
