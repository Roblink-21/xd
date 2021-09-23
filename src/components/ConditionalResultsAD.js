import React, { Component } from "react";
import { Card } from "antd";

export class ConditionalResultsAD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGood: true,
    };
  }
  render() {
    if (this.state.isGood) {
      return (
        <div class="col">
          <div class="col">
            <Card title="Recomendaciones" bordered={false}>
              <p style={{ fontSize: 20 }}>
                Parece que no presenta ningun problema, si tiene dudas le
                sugerimos que contacte con un especialista.
              </p>
            </Card>
          </div>
          <div class="col">
            <Card title="Observaciones" bordered={false}>
              <p style={{ fontSize: 20 }}>
                El test indica que actualmente no tiene pérdida auditiva
              </p>
            </Card>
          </div>
        </div>
      );
    } else {
      return (
        <div class="col">
          <div class="col">
            <Card title="Recomendaciones" bordered={false}>
              <p style={{ fontSize: 20 }}>
                Le recomendamos que consulte a un especialista para un estudio
                exhaustivo que identifique exactamente sus necesidades.
              </p>
            </Card>
          </div>
          <div class="col">
            <Card title="Observaciones" bordered={false}>
              <p style={{ fontSize: 20 }}>
                Basándonos en sus respuestas durante el test, es probable que
                sufra una pérdida auditiva leve o moderada.
              </p>
            </Card>
          </div>
        </div>
      );
    }
  }
}

export default ConditionalResultsAD;
