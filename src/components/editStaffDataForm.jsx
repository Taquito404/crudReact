import React from "react";
import { useForm } from "react-hook-form";

const EditStaff = (props) => {
  //   console.log(props.currentData);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: props.currentData,
  });

  setValue("name", props.currentData.name);
  setValue("username", props.currentData.username);

  const onSubmit = (data) => {
    data.id = props.currentData.id;
    props.updateData(props.currentData.id, data);
    reset();
  };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <h2>Editar</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            {" "}
            <label>Nombre</label>
            <input
              type="text"
              name="name"
              {...register("name", {
                required: true,
              })}
            />
          </div>
          <span>
            {errors.name?.type === "required" && "Nombre es requerido"}
          </span>
          <div>
            {" "}
            <label>Teléfono</label>
            <input
              type="tel"
              name="telephone"
              {...register("telephone", {
                required: true,
              })}
            />
          </div>
          <span>
            {errors.telephone?.type === "required" && "Campo es requerido"}
          </span>
          <div>
            {" "}
            <label>NSS</label>
            <input
              type="number"
              name="nss"
              {...register("nss", {
                required: true,
              })}
            />
          </div>
          <span>{errors.nss?.type === "required" && "Campo es requerido"}</span>
          <div>
            {" "}
            <label>RFC</label>
            <input
              type="tel"
              name="rfc"
              {...register("rfc", {
                required: true,
              })}
            />
          </div>
          <span>{errors.rfc?.type === "required" && "Campo es requerido"}</span>
          <div className="footer">
            <button className="btn btn-success">Editar</button>
            <button
              className="btn btn-danger"
              onClick={() => {
                props.editClose(false);
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

export default EditStaff;
