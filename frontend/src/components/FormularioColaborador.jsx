import { useState } from "react";
import useProyectos from "../../hooks/useProyectos";
import Alerta from "./Alerta";

const FormularioColaborador = () => {
  const [email, setEmail] = useState('');

  const { mostrarAlerta, alerta, submitColaborador} = useProyectos()

  const handleSubmit = e => {
    e.preventDefault();

    if (email === '') {
      mostrarAlerta({
        msg: 'El Email es Obligatorio',
        error: true
      })
      return
    }
    submitColaborador(email)
  }
  const { msg } = alerta

  return (
    // <div className="text-white">FormularioColaborador</div>
    <form 
      className="bg-white py-10 px-5 w-full md:w-1/2 rounded-lg shadow"
      onSubmit={handleSubmit}
    >
      {msg && <Alerta alerta = {alerta} />}

      <div className="mb-5">
        <label htmlFor="">
          <label
            className="text-black uppercase font-bold text-sm"
            htmlFor="email"
          >
            Email Colaborador
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email del usuario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <input
        type="submit"
        className="bg-sky-600 hover:bg-sky-700 w-full p-3
                     text-white font-bold uppercase cursor-pointer transition-colors rounded"
        //  Condicional del boton al crear una tarea o guardar cambios editados
        value='Buscar Colaborador'
      />
    </form>
  );
};

export default FormularioColaborador;
