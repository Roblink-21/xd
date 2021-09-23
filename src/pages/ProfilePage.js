import React, { useState } from "react";
import PropTypes from "prop-types";
import { db, storage } from "../firebase";
import {Button, Descriptions, Form,message, Image, Progress, Upload} from "antd";
import {MessageOutlined, PhoneOutlined, UploadOutlined} from "@ant-design/icons";
import firebase from "firebase";




import {
  ClockCircleOutlined,
  HeartOutlined,

  UserOutlined,
} from "@ant-design/icons";
import {Content} from "antd/es/layout/layout";


// eslint-disable-next-line no-unused-vars
const props = {
  name: "file",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};



const ProfilePage = ({ userId }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleAddTask = async (values) => {
    setLoading(true);
    console.log("values", values);
    try {
      const todoTitle = values.title;
      const todoImage = values.image[0].originFileObj;

      const uploadTask = storage
          .ref()
          .child(`todos/${userId}/${todoImage.name}_${new Date().getTime()}`)
          .put(todoImage);

      uploadTask.on(
          "state_changed",
          function (snapshot) {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            setUploadProgress(progress.toFixed(0));
            // eslint-disable-next-line default-case
            switch (snapshot.state) {
              case firebase.storage.TaskState.PAUSED: // or 'paused'
                console.log("Upload is paused");
                break;
              case firebase.storage.TaskState.RUNNING: // or 'running'
                console.log("Upload is running");
                break;
            }
          },
          function (error) {
            // Handle unsuccessful uploads
            console.log("error", error);
          },
          async function () {
            // Upload completed successfully, now we can get the download URL
            const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
            console.log("downloadURL", downloadURL);

            await createTodo({todoTitle, downloadURL});
          }
      );
    } catch (e) {
      console.log("e", e);
    }
  };

  const createTodo = async ({  downloadURL }) => {
    // guardar en firebase
    const todosListRef = db.ref(`todos/${userId}`);
    const newTodoRef = todosListRef.push();
    console.log("newTodoRef", newTodoRef.key);
    await newTodoRef.set({
      id: newTodoRef.key,
      imageURL: downloadURL,
    });
    form.resetFields();
    setLoading(false);
  };

  const onFinishFailed = () => {
    console.log("Form submit failed");
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (

      <div>

        <Form
            name="todo-form"
            labelCol={{ span: 12 }}
            wrapperCol={{ span: 12 }}
            form={form}
            initialValues={{ remember: true }}
            onFinish={handleAddTask}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >



          {loading && (
              <div>
                Subiendo imagen...
                <Progress percent={uploadProgress} size="small" />
              </div>
          )}


          <Content className="separ" style={{ padding: "0 50px" }}>
            <div className="ant-row">
              <div className="ant-col-10">
                <div>
                  <Image
                      width={400}
                      src="https://wipy.tv/wp-content/uploads/2020/05/cicatriz-de-peter-parker-en-spider-man-3-1.jpg"
                  />
                </div>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit" loading={loading}>
                    Subir Imagen
                  </Button>
                </Form.Item>

                <Form.Item
                    name="image"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                >
                  <Upload
                      name="logo"
                      beforeUpload={() => false}
                      listType="picture"
                      maxCount={1}
                  >
                    <Button icon={<UploadOutlined />}>Seleccionar imagen...</Button>
                  </Upload>
                </Form.Item>

              </div>
              <div className="ant-col-12">
                <Descriptions>
                  <Descriptions.Item>
                    <UserOutlined />
                    Peter Parker
                  </Descriptions.Item>
                </Descriptions>
                <Descriptions>
                  <Descriptions.Item>
                    <ClockCircleOutlined />
                    28 años
                  </Descriptions.Item>
                  <Descriptions.Item>
                    <HeartOutlined />
                    Masculino
                  </Descriptions.Item>
                </Descriptions>
                <Descriptions>
                  <Descriptions.Item>
                    <PhoneOutlined />
                    0987650742
                  </Descriptions.Item>
                  <Descriptions.Item>
                    <MessageOutlined />
                    peterPark@gamil.com
                  </Descriptions.Item>
                </Descriptions>
              </div>
            </div>
            <div>
              <h1 className="tamH1">Exámenes recientes</h1>
            </div>
          </Content>
        </Form>
      </div>
  );
};

ProfilePage.propTypes = {
  onAddTask: PropTypes.func,
};

ProfilePage.propTypes = {
  userId: PropTypes.string,
};

export default ProfilePage;
// /*import "../estyles/Profile.css";
// import { Image, Layout } from "antd";
// import { BrowserRouter as Router, Link } from "react-router-dom";
//
// import { Upload, message, Button } from "antd";
//
// import {
//   ClockCircleOutlined,
//   HeartOutlined,
//   MessageOutlined,
//   PhoneOutlined,
//   UploadOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
// import { Descriptions } from "antd";
// import React from "react";
// import { db, storage } from "../firebase";
//
//
// const { Content } = Layout;
//
// const props = {
//   name: "file",
//   action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
//   headers: {
//     authorization: "authorization-text",
//   },
//   onChange(info) {
//     if (info.file.status !== "uploading") {
//       console.log(info.file, info.fileList);
//     }
//     if (info.file.status === "done") {
//       message.success(`${info.file.name} file uploaded successfully`);
//     } else if (info.file.status === "error") {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },
// };
//
// const createTodo = async ({ todoTitle, downloadURL }) => {
//   // guardar en firebase
//   const todosListRef = db.ref(`todos/${userId}`);
//   const newTodoRef = todosListRef.push();
//   console.log("newTodoRef", newTodoRef.key);
//   await newTodoRef.set({
//     id: newTodoRef.key,
//     title: todoTitle,
//     imageURL: downloadURL,
//   });
//   form.resetFields();
//   setLoading(false);
// };
//
//
// function ProfilePage() {
//   return (
//     <Router>
//       <Link to="/Profile"></Link>
//       <Layout>
//         <Content className="separ" style={{ padding: "0 50px" }}>
//           <div className="ant-row">
//             <div className="ant-col-10">
//               <div>
//                 <Image
//                   width={400}
//                   src="https://wipy.tv/wp-content/uploads/2020/05/cicatriz-de-peter-parker-en-spider-man-3-1.jpg"
//                 />
//               </div>
//
//               <div>
//                 <Upload {...props}>
//                   <Button className="ant-btn-auto" icon={<UploadOutlined />}>
//                     Click to Upload
//                   </Button>
//                 </Upload>
//               </div>
//
//             </div>
//             <div className="ant-col-12">
//               <Descriptions>
//                 <Descriptions.Item>
//                   <UserOutlined />
//                   Peter Parker
//                 </Descriptions.Item>
//               </Descriptions>
//               <Descriptions>
//                 <Descriptions.Item>
//                   <ClockCircleOutlined />
//                   28 años
//                 </Descriptions.Item>
//                 <Descriptions.Item>
//                   <HeartOutlined />
//                   Masculino
//                 </Descriptions.Item>
//               </Descriptions>
//               <Descriptions>
//                 <Descriptions.Item>
//                   <PhoneOutlined />
//                   0987650742
//                 </Descriptions.Item>
//                 <Descriptions.Item>
//                   <MessageOutlined />
//                   peterPark@gamil.com
//                 </Descriptions.Item>
//               </Descriptions>
//             </div>
//           </div>
//           <div>
//             <h1 className="tamH1">Exámenes recientes</h1>
//           </div>
//         </Content>
//       </Layout>
//     </Router>
//   );
// }
//
// export default ProfilePage;*/
