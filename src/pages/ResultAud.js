import { Card, Col, Row, Button } from "antd";
import { Breadcrumb } from "antd";
import React, { useState } from "react";
import { Modal } from "antd";
import ConditionalResultsAD from "../components/ConditionalResultsAD";
import "../estyles/Results.css";

function AudioPage() {
  const [visibleP1, setVisibleP1] = useState(false);
  const [visibleP2, setVisibleP2] = useState(false);
  const [visibleP3, setVisibleP3] = useState(false);
  return (
    <>
      <br />
      <br />
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>
          <h1>RESULTADOS TESTS DE AUDICIÓN</h1>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 690 }}
      >
        <div class="container">
          <div class="row">
            <ConditionalResultsAD />
            <div class="col">
              <div className="site-card-wrapper">
                <Row gutter={16}>
                  <Col span={12}>
                    <Card title="TEST Nº 1" bordered={false}>
                      <p>Distribucion de objetos y numeros</p>
                      <br />
                      <br />
                      <Button type="primary" onClick={() => setVisibleP1(true)}>
                        Ver resultados
                      </Button>
                      <Modal
                        title="Distribucion de objetos y números"
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
                      <p>Ruido Ambiental</p>
                      <br />
                      <br />
                      <Button type="primary" onClick={() => setVisibleP2(true)}>
                        Ver resultados
                      </Button>
                      <Modal
                        title="Ruido Ambiental"
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
                      <p>Frecuencia</p>
                      <br />
                      <br />
                      <Button type="primary" onClick={() => setVisibleP3(true)}>
                        Ver resultados
                      </Button>
                      <Modal
                        title="Frecuencia"
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
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AudioPage;
