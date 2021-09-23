import React, { Component } from "react";
import { Card } from "antd";



export class ConditionalResults extends Component {
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
                Probablemente no tiene un problema de percepción de los colores,
                su agudeza visual parece ser óptima. Puede leer con facilidad
                incluso letras pequeñas y parece tener una visión de los
                contrastes óptima.
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
                Le recomendamos encarecidamente que consulte con un oftalmólogo
                para que le realice un examen.
              </p>
            </Card>
          </div>
          <div class="col">
            <Card title="Observaciones" bordered={false}>
              <p style={{ fontSize: 20 }}>
                Su capacidad visual parece ser pobre debido a que su agudeza
                visual parece ser pobre, su sensibilidad a los contrastes parece
                ser deficiente y probablemente tiene un problema de percepción
                de los colores.
              </p>
            </Card>
          </div>
        </div>
      );
    }
  }
}

export default ConditionalResults;
