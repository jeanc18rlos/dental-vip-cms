import React, { useState, useEffect } from 'react'
import Modal from '../Modal'
const Financing = props => {
  const { classname } = props
  const [total, setTotal] = useState()
  const [percent, setPercent] = useState()
  const [result, setResult] = useState()
  const [modal, setModal] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setModal(true)
    }, 10000000)
  }, [])
  const closemodal = val => {
    setModal(val)
    setTimeout(() => {
      setModal(true)
    }, 10000000)
  }
  const onChangeLabel = e => {
    const { value } = e.target
    setTotal(value)
  }

  const onChangeSelect = e => {
    const { value } = e.target
    setPercent(value)
  }

  const getValue = e => {
    e.preventDefault()
    const val1 = parseInt(total, 2)
    const val2 = parseInt(percent, 2)
    const val3 = 100
    const totalval = (val1 / val3) * val2
    if (totalval <= 0) {
      setResult('Debe llenar todos los campos')
    } else {
      setResult(`Cuota Mensual: ${totalval + val1} Bs.S`)
    }
  }

  return (
    <div id="Financing" className={classname}>
      <Modal
        active={modal}
        title="¡Ofrecemos disculpas!"
        paragraph1="A causa del acelerado fenómeno de hiperinflación actual, este producto ha sido temporalmente suspendido."
        paragraph2="Por los momentos, todos nuestros tratamientos deben ser cancelados al contado."
        close={closemodal}
      />
      <p>* Introduzca el monto sin puntos, comas o decimales.</p>
      <div className="dv-content-financing">
        <div className="dv-border-financing">
          <div className="dv-row-financ">
            <div className="dv-rowSub-financ">
              <p>Monto a financiar *</p>
            </div>
            <div className="dv-rowSub-financ">
              <input
                type="text"
                className="dv-label-financing"
                name="total"
                onChange={onChangeLabel}
                value={total}
              />
              <span>Bs.S</span>
            </div>
          </div>
          <div className="dv-row-financ">
            <div className="dv-rowSub-financ">
              <p>Plazo</p>
            </div>
            <div className="dv-rowSub-financ">
              <select
                name="percent"
                className="dv-select-financing"
                onChange={onChangeSelect}
                value={percent}
              >
                <option value="">-</option>
                <option value="24">24 meses</option>
                <option value="36">36 meses</option>
                <option value="48">48 meses</option>
              </select>
            </div>
          </div>
          <div className="dv-row-financ">
            <div className="dv-rowSub-financ">
              <p>Tasa</p>
            </div>
            <div className="dv-rowSub-financ">
              <input type="text" value={percent} readOnly />
              <span>%</span>
            </div>
          </div>
          <div className="dv-row-financ dv-row-financnot">
            <button
              type="submit"
              className="dv-btn-financing"
              onClick={getValue}
            >
              Calcular
            </button>
          </div>
        </div>
        <h1>{result}</h1>
        <p>
          El resultado obtenido es referencial y de carácter informativo, y en
          consecuencia, no podrá asumirse que el Banco esté obligado a otorgar
          los créditos que se le soliciten bajo las mismas condiciones arriba
          indicadas. Aunque la información que se utiliza en este simulador se
          actualiza de forma continua, la tasa de interés empleada para el
          cálculo podría sufrir algún tipo de variación.
        </p>
      </div>
    </div>
  )
}

export default Financing
