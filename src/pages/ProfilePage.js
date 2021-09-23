import "../estyles/Profile.css";
import { Image, Layout } from "antd";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { Upload, message, Button } from "antd";

import {
  ClockCircleOutlined,
  HeartOutlined,
  MessageOutlined,
  PhoneOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Descriptions } from "antd";
import React from "react";

const { Content } = Layout;

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
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

function ProfilePage() {
  return (
    <Router>
      <Link to="/Profile"/>
      <Layout>
        <Content className="separ" style={{ padding: "0 50px" }}>
          <div className="ant-row">
            <div className="ant-col-10">
              <div>
                <Image
                  width={400}
                  src="https://wipy.tv/wp-content/uploads/2020/05/cicatriz-de-peter-parker-en-spider-man-3-1.jpg"
                />
              </div>
              <div>
                <Upload {...props}>
                  <Button className="ant-btn-auto" icon={<UploadOutlined />}>
                    Click to Upload
                  </Button>
                </Upload>
              </div>
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
      </Layout>
    </Router>
  );
}

export default ProfilePage;
