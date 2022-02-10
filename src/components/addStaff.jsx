import React from "react";
import { useForm } from "react-hook-form";

const AddStaffForm = (props, closeModal) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    props.addData(data);
    reset();
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <h2>Agregar nuevo personal</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              name="name"
              {...register("name", {
                required: true,
              })}
            />
          </div>
          <span>{errors.name?.type === "required" && "Campo requerido"}</span>
          <div>
            <label>Teléfono:</label>
            <input
              type="tel"
              name="telephone"
              {...register("telephone", {
                required: true,
              })}
            />
          </div>
          <span>
            {errors.telephone?.type === "required" && "Campo requerido"}
          </span>
          <div>
            <label>NSS:</label>
            <input
              type="number"
              name="nss"
              {...register("nss", {
                required: true,
              })}
            />
          </div>{" "}
          <span>{errors.nss?.type === "required" && "Campo requerido"}</span>
          <div>
            {" "}
            <label>RFC:</label>
            <input
              type="tel"
              name="rfc"
              {...register("rfc", {
                required: true,
              })}
            />
          </div>{" "}
          <span>{errors.rfc?.type === "required" && "Campo requerido"}</span>
          <div className="footer">
            {" "}
            <button className="btn btn-success">Agregar</button>
            <button
              className="btn btn-danger"
              onClick={() => {
                props.closeAddData(false);
              }}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStaffForm;
