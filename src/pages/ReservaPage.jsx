import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const ReservaPage = () => {
  const [users, setUser] = useState([]);
  const userCollectionRef = collection(db, "reserva");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState(0);
  const [formUpdate, setFormUpdate] = useState(false);
  const [item, setItem] = useState(null);

  const createUser = async () => {
    await addDoc(userCollectionRef, {
      nombre: name,
      correo: mail,
      telefono: phone,
    });
    getUsers();
  };

  const getUsers = async () => {
    const data = await getDocs(userCollectionRef);
    setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const borrarUsuario = async (id) => {
    const userDoc = doc(db, "reserva", id);
    await deleteDoc(userDoc);
    getUsers();
  };

  const formUpdateOpen = (data) => {
    setFormUpdate(true);
    setItem(data);
  };

  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const onUpdate = async (id) => {
    await updateDoc(doc(db, "reserva", id), item);
    getUsers();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <main className="row">
        <article className="col">
          <h1 className="text-center">Italian's Food</h1>
          <h4 className="text-sm-start">
            El verdadero sabor de la comida Italiana.
          </h4>
          <h2 className="text-start">Solicita tu reserva</h2>
          <p>
            Si deseas reservar con nosotros, diligencie el siguiente formulario:
          </p>
        </article>
        <section className="row">
          <input
            className="col"
            type="text"
            placeholder="Nombre y Apellido"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            className="col"
            type="text"
            placeholder="Correo Electronico"
            onChange={(e) => {
              setMail(e.target.value);
            }}
          />
          <input
            className="col"
            type="number"
            placeholder="Telefono"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <button className="col" onClick={createUser}>
            Enviar
          </button>
          <h2 className="text-start">Reservas Listas</h2>
        </section>
      </main>

      {users.map((item) => {
        return (
          <div key={item.id}>
            <h5>Nombre: {item.nombre}</h5>
            <h5>Correo: {item.correo}</h5>
            <h5>Telefono: {item.telefono}</h5>
            <button onClick={() => borrarUsuario(item.id)}>Borrar</button>
            <button onClick={() => formUpdateOpen(item)}>Editar</button>
          </div>
        );
      })}

      {formUpdate && (
        <>
          <input
            type="text"
            placeholder="Nombre"
            value={item.nombre}
            name="nombre"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Correo"
            value={item.correo}
            name="correo"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Telefono"
            value={item.telefono}
            name="telefono"
            onChange={handleChange}
          />
          <button onClick={() => onUpdate(item.id)}>Guardar</button>
        </>
      )}
    </>
  );
};

export default ReservaPage;
