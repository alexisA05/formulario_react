import React from 'react'
import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const FormularioHook = () => {

  const [matricula, setMatricula] = useState('');
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [imagen, setImagen] = useState('');
  const [alumnos, setAlumnos] = useState([]);

  const handleMatriculaChange = (event) =>{
    setMatricula(event.target.value);
  };

  const handleNombreChange = (event) =>{
    setNombre(event.target.value);
  };

  const handleCarreraChange = (event) =>{
    setCarrera(event.target.value);
  };

  const handleImagenChange = (event) =>{
    //setImagen(event.target.files[0]);
    const file = event.target.files[0];
    const imagen = URL.createObjectURL(file)
    setImagen(imagen);
  };

  const handleAgregarAlumno = (event)=>{
    event.preventDefault();
      const nuevoAlumno={
        matricula:matricula,
        nombre:nombre,
        carrera:carrera,
        imagen:imagen,
      };
      setAlumnos([...alumnos, nuevoAlumno]);
      setMatricula('');
      setNombre('');
      setCarrera('');
      setImagen(null);
  };

  const handleEliminarAlumno = (index)=>{
    const nuevosAlumnos=[...alumnos];
    nuevosAlumnos.splice(index,1);
    setAlumnos(nuevosAlumnos);
  };

  const handleEditarAlumno=(index)=>{
    const alumnoEditado=alumnos[index];
    setMatricula(alumnoEditado.matricula);
    setNombre(alumnoEditado.nombre);
    setCarrera(alumnoEditado.carrera);
    setImagen(alumnoEditado.imagen);
    handleEliminarAlumno(index);
  };

  return (
    <>
    <body>
      <section id="pantalla-dividida">
        <div className="izquierda">

        <div className='cajas'>
        <div className="form-box register">
          <h2>REGISTRARSE</h2>
            <form action="#" onSubmit={handleAgregarAlumno}>

              <div className="input-box"> 
                <label>Matricula</label>
                <input type="number" required={true} value={matricula} onChange={handleMatriculaChange} ></input>
              </div>
              
              <div className="input-box">
                <label>Nombre</label>
                <input type="text" required={true} value={nombre} onChange={handleNombreChange}></input>
              </div>

              <div className="input-box">
                <label>Carrera</label>
                <select className="select"  required={true} value={carrera} onChange={handleCarreraChange}>
                  <option value="">Selecciona una opcion</option>
                  <option value="IngSistemas">Ingenieria en Sistamas Computacioales</option>
                  <option value="IngCivil">Ingenieria Civil</option>
                  <option value="LicAd">Licenciatura en Administracion</option>
                  <option value="IngMeca">Ingenieria en Mecatronica</option>
                  <option value="IngLog">Ingenieria en Logistica</option>
                  <option value="IngInd">Ingenieria Industrial</option>
                  <option value="Tics">Ingenieria en TIC'S</option>
                  <option value="IngQui">Ingenieria Quimica</option>
                </select>
              </div>

              <div className="input-box">
                <label>Imagen</label>
                <input type="file" required={true} onChange={handleImagenChange}></input>
                
              </div>

             <button type='submit' className="btn btn-success">Registrar</button>   

              </form>
              <br/>

              
              </div>
        </div>

        </div>
        <div className="derecha">
        <h2>Registros</h2>

<table className="table table-hover table-bordered">
  <thead >
        <tr className="enca">
          <th scope="col">Matricula</th>
          <th scope="col">Nombre</th>
          <th scope="col">Carrera</th>
          <th scope="col">Imagen</th>
          <th scope="col">Editar</th>
          <th scope="col">Eliminar</th>
        </tr>
      </thead>
      <tbody>
      {alumnos.map((alumno,index)=>(
        <tr key={index}>
          <td>{alumno.matricula}</td>
          <td>{alumno.nombre}</td>
          <td >{alumno.carrera}</td>
          <td><img src={alumno.imagen}/></td>
          <td>
          <button className="actualizar"  onClick={()=>handleEditarAlumno(index)}><i class="bi bi-pencil-square"></i></button></td>
          <td><button className="eliminar" onClick={()=>handleEliminarAlumno(index)}> <i class="bi bi-trash"></i></button></td>
        </tr>
    ))}
      </tbody>
    </table>  
    
        </div>

      </section>


    </body>
    
    </>
  );
}

<formularioHook/>

export default FormularioHook