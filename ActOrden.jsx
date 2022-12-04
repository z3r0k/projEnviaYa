
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import React from 'react';
import '../App.css';


export function ActOrden(){
    return(
       
        <>
            
        <div className="col-md-12">
            
            
            <h1>Actualización de Orden</h1>
            <br></br> 
            <div>
                <label>No. de Orden:</label>
                <input id="numOrden"  type="text" />
                <button id="btnGuardar" type="submit"
                    className="btn btn-vlachoA"><i
                    className="far fa-envelope"></i>Buscar</button>

            </div>
            
            <div className="row">
                <div className="col-xl-12 col-md-3">
                    <div className="form-group four-fields">
                        <div>
                            <label id="labelFecha">Fecha:</label>
                            <label id="labelFecha">Hora:</label>
                        </div>
                        <div className="input-group">
                            
                            <input id="inputFecha" type="date" className="form-control" placeholder='Nombre Destinatario:'></input>
                            
                            <input id="inputHora" type="time" className="form-control" placeholder='Nombre Destinatario:'></input>
                            <Row className="g-2">
                                    <Col md>
                                        <FloatingLabel
                                        controlId="floatingSelectGrid"
                                        label="Estado:"
                                        >
                                        <Form.Select id='selectEstado' aria-label="Floating label select example">
                                            <option>Seleccione Estado.</option>
                                            <option value="GUARDADO">Guardado</option>
                                            <option value="COMPLETADO">completado</option>
                                            <option value="CANCELADO">Cancelado</option>
                                        </Form.Select>
                                        </FloatingLabel>
                                    </Col>
                                </Row>  
                        </div>
                    </div>
                </div>    
            </div>
            
                            
            <div className="container">
               <div className="row">
                    <div className="col-xl-12 col-md-3">
                        <div className="form-group four-fields">
                            <h5 >Dimensiones del Paquete:</h5>
                            <div className="input-group">
                            
                                <Row className="g-2">
                            
                                    <Col md>
                                        <FloatingLabel id='selectDimensiones'
                                        controlId="floatingSelectGrid"
                                        label="Largo"
                                        >
                                        <Form.Select id='selectLargo' aria-label="Floating label select example">
                                            <option>Cms.</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </Form.Select>
                                        </FloatingLabel>
                                    </Col>
                                </Row>  
                            
                                <Row className="g-2">
                                    <Col md>
                                        <FloatingLabel id='selectDimensiones'
                                        controlId="floatingSelectGrid"
                                        label="Ancho"
                                        >
                                        <Form.Select id='selectAncho' aria-label="Floating label select example">
                                            <option>Cms.</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </Form.Select>
                                        </FloatingLabel>
                                    </Col>
                                </Row>  
                                
                                <Row className="g-2">
                                    <Col md>
                                        <FloatingLabel id='selectDimensiones'
                                        controlId="floatingSelectGrid"
                                        label="Alto"
                                        >
                                        <Form.Select id='selectAlto' aria-label="Floating label select example">
                                            <option>Cms.</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </Form.Select>
                                        </FloatingLabel>
                                    </Col>
                                </Row>  
                                <Row className="g-2">
                                    <Col md>
                                        <FloatingLabel id='selectDimensiones' 
                                        controlId="floatingSelectGrid"
                                        label="Peso"
                                        >
                                        <Form.Select id='selectPeso' aria-label="Floating label select example">
                                            <option>Kgs.</option>
                                            <option value="0.5">0.5</option>
                                            <option value="1.0">1.0</option>
                                            <option value="1.5">1.5</option>
                                            <option value="2.0">2.0</option>
                                            <option value="2.5">2.5</option>
                                            <option value="3.0">3.0</option>
                                        </Form.Select>
                                        </FloatingLabel>
                                    </Col>
                                </Row> 
                                 
                                
                                
                            </div>
                        </div>    
                    </div>
                </div>
                <div className="mt-3 form-floating">
                        <input id="inputNomEnvia" type="text" className="form-control" placeholder='Dirección:'></input>
                        <label for="inputNomEnvia">Nombre de Quien envía:</label>
                </div>
                <div className="mt-3 form-floating">
                        <input id="inputDirOrigen" type="text" className="form-control" placeholder='Dirección:'></input>
                        <label for="inputDirOrigen">Dirección Origen:</label>
                </div>
                <div className="mt-3 form-floating">
                        <input id="inputTelefono" type="text" className="form-control" placeholder='Dirección:'></input>
                        <label for="inputTelefono">Telefono / Celular:</label>
                </div>                
                
                <br></br>
                <div className="row">
                    <div className="col-xl-12 col-md-3">
                        <div className="form-group four-fields">
                            <div className="input-group">
                                <Row className="g-2">
                                    <Col md>
                                        <FloatingLabel 
                                        controlId="floatingSelectGrid"
                                        label="Ciudad Origen"
                                        >
                                        <Form.Select id="ciudadOrigen" aria-label="Floating label select example">
                                            <option>Seleccione Ciudad.</option>
                                            <option value="BAQ">Barranquilla</option>
                                            <option value="VUP">Valledupar</option>
                                            <option value="BOG">Bogota</option>
                                        </Form.Select>
                                        </FloatingLabel>
                                    </Col>
                                </Row>  
                                <Row className="g-2">
                                    <Col md>
                                        <FloatingLabel 
                                        controlId="floatingSelectGrid"
                                        label="Ciudad Destino"
                                        >
                                        <Form.Select id="ciudadDestino" aria-label="Floating label select example">
                                            <option>Seleccione Ciudad.</option>
                                            <option value="BAQ">Barranquilla</option>
                                            <option value="VUP">Valledupar</option>
                                            <option value="BOG">Bogota</option>
                                        </Form.Select>
                                        </FloatingLabel>
                                    </Col>
                                </Row>  
                                                    
                            </div>
                        </div>    
                    </div>
                </div>
                                 
                
                <div className="mt-3 form-floating">
                    <input id="inputNomDestinatario" type="text" className="form-control" placeholder='Nombre Destinatario:'></input>
                    <label for="inputNomDestinatario">Nombre Destinatario:</label>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-xl-12 col-md-3">
                        <div className="form-group four-fields">
                            <div className="input-group">
                                
                                <Row className="g-2">
                                    <Col md>
                                        <FloatingLabel
                                        controlId="floatingSelectGrid"
                                        label="Tipo Documento Destinatario:"
                                        >
                                        <Form.Select id="inputTipoDocDestinatario" aria-label="Floating label select example">
                                            <option>Tipo de Documento.</option>
                                            <option value="CC">Cedula</option>
                                            <option value="TI">Tarj. Identidad</option>
                                            <option value="RG">Reg. Civil</option>
                                        </Form.Select>
                                        </FloatingLabel>
                                    </Col>
                                </Row>  
                
                                <div className="mt-0 form-floating">
                                    <input id ="inputDocDestinatario" type="text" className="form-control" placeholder='Documento Destinatario:'></input>
                                    <label for ="inputDocDestinatario">No. Documento Destinatario:</label>
                                </div> 

                            </div>
                        </div>    
                    </div>
                </div> 
                <div className="mt-3 form-floating">
                        <input id="inputDirDestino" type="text" className="form-control" placeholder='Dirección:'></input>
                        <label for="inputDirDestino">Dirección Destino:</label>
                </div>
                                            <br></br>
                <button id="btnGuardar" type="submit"
                    className="btn btn-vlachoA"><i
                    className="far fa-envelope"></i>Guardar</button>
                <button id="btnCancelar" type="reset"
                    className="btn btn-vlachoR">Cancelar</button>


            </div>
        </div>
             
    </>       





    )
   
   }