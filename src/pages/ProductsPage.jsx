import { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { NavLink } from "react-router-dom";

const formInitialState = {
  name: "",
  category: "",
  image: "",
};

const ProductsPage = () => {
  const [form, setForm] = useState(formInitialState);
  const [productos, setProductos] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await crearProducto();

    setForm(formInitialState);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const obtenerProductos = async () => {
    const resp = await getDocs(collection(db, "products"));
    const productos = resp.docs.map((producto) => ({
      id: producto.id,
      ...producto.data(),
    }));
    setProductos(productos);

    const autor = import.meta.env.VITE_NAME;
    console.log(autor);
  };

  const crearProducto = async () => {
    const coleccion = collection(db, "products");
    await addDoc(coleccion, form);
    await obtenerProductos();
  };

  const handleDelete = (id) => {
    eliminarProducto(id);
  };

  const eliminarProducto = async (id) => {
    const coleccion = doc(db, "products", id);
    await deleteDoc(coleccion);
    await obtenerProductos();
  };

  useEffect(() => {
    obtenerProductos();
    console.log(import.meta.env.VITE_VAR);
  }, []);

  return (
    <>
      <main className="row pt-5">
        <article className="col">
          <h1 className="text-center">Italian's Food</h1>
          <h4 className="text-sm-start">
            El Verdadero Sabor de la Comida Italiana.
          </h4>
          <h2 className="text-center">Nuestros Productos</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                autoComplete="off"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Categoria
              </label>
              <input
                type="text"
                className="form-control"
                id="category"
                autoComplete="off"
                name="category"
                value={form.category}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Imagen
              </label>
              <input
                type="text"
                className="form-control"
                id="image"
                autoComplete="off"
                name="image"
                value={form.image}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-success">
              Guardar
            </button>
          </form>
        </article>
      </main>
      <section className="row row-cols-1 row-cols-md-3 g-4 pt-5">
        {productos.map((producto) => (
          <article key={producto.id} className="col">
            <div className="card h-100">
              <img
                src={producto.image}
                className="card-img-top"
                alt={producto.name}
              />
              <div className="card-body">
                <h5 className="card-title">{producto.name}</h5>
                <p className="card-text">{producto.category}</p>
                <div
                  className="btn-group d-flex justify-content-between"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete(producto.id)}
                  >
                    Eliminar
                  </button>
                  <NavLink
                    type="button"
                    className="btn btn-info"
                    to={`/peliculas/${producto.id}`}
                  >
                    Ver
                  </NavLink>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

export default ProductsPage;
