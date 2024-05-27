import React from "react";

const Registro = () => {
    
    return (
        <form>
            <div className="row mb-3">
                <label htmlFor="inputName" className="col-sm-2 col-form-label">Nombre</label>
                <div className="col-sm-10">
                    <input type="name" className="form-control" id="inputName"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Contraseña</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword3"/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">iniciar sesión</button>
        </form>
    )
}

export default Registro;