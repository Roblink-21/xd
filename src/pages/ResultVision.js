import { Card, Col, Row, Button } from "antd";
import { Breadcrumb } from "antd";
import React, { useState } from "react";
import { Modal } from "antd";
import ConditionalResults from "../components/ConditionalResults";
import "../estyles/Results.css";

function VisionRPage() {
  const [visibleP1, setVisibleP1] = useState(false);
  const [visibleP2, setVisibleP2] = useState(false);
  const [visibleP3, setVisibleP3] = useState(false);
  const [visibleP4, setVisibleP4] = useState(false);
  return (
    <>
      <br />
      <br />
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>
          <h1>RESULTADOS TESTS DE VISIÓN</h1>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 690 }}
      >
        <div class="container">
          <div class="row">
            <ConditionalResults />
            <div class="col">
              <div className="site-card-wrapper">
                <Row gutter={16}>
                  <Col span={12}>
                    <Card title="TEST Nº 1" bordered={false}>
                      <p style={{ fontSize: 20, paddingBottom: 10 }}>
                        Agudeza Visual
                      </p>
                      <Button type="primary" onClick={() => setVisibleP1(true)}>
                        Ver resultados
                      </Button>
                      <Modal
                        title="Agudeza Visual"
                        centered
                        visible={visibleP1}
                        onOk={() => setVisibleP1(false)}
                        onCancel={() => setVisibleP1(false)}
                        width={1000}
                      >
                        <p>resultados de test</p>
                      </Modal>
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card title="TEST Nº 2" bordered={false}>
                      <p style={{ fontSize: 20 }}>Bicromatico</p>
                      <Button type="primary" onClick={() => setVisibleP2(true)}>
                        Ver resultados
                      </Button>
                      <Modal
                        title="Bicromatico"
                        centered
                        visible={visibleP2}
                        onOk={() => setVisibleP2(false)}
                        onCancel={() => setVisibleP2(false)}
                        width={1000}
                      >
                        <p>resultados de test</p>
                      </Modal>
                    </Card>
                  </Col>
                </Row>
              </div>
              <div className="site-card-wrapper">
                <Row gutter={16}>
                  <Col span={12}>
                    <Card title="TEST Nº 3" bordered={false}>
                      <p style={{ fontSize: 20, paddingBottom: 10 }}>
                        Circulo Horario
                      </p>
                      <Button type="primary" onClick={() => setVisibleP3(true)}>
                        Ver resultados
                      </Button>
                      <Modal
                        title="Circulo Horario"
                        centered
                        visible={visibleP3}
                        onOk={() => setVisibleP3(false)}
                        onCancel={() => setVisibleP3(false)}
                        width={1000}
                      >
                        <p>resultados de test</p>
                      </Modal>
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card title="TEST Nº 4" bordered={false}>
                      <p style={{ fontSize: 20 }}>Daltonismo</p>
                      <Button type="primary" onClick={() => setVisibleP4(true)}>
                        Ver resultados
                      </Button>
                      <Modal
                        title="Daltonismo"
                        centered
                        visible={visibleP4}
                        onOk={() => setVisibleP4(false)}
                        onCancel={() => setVisibleP4(false)}
                        width={1000}
                      >
                        <p>resultados de test</p>
                      </Modal>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisionRPage;
