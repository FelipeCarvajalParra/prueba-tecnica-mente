import { useState, useEffect } from "react";

export default function Form({ onSubmit, editingProduct, onCancel }) {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [error, setError] = useState("");

  //cuando se envia un producto a editar, se encia al formulario
  useEffect(() => {
    if (editingProduct) {
      setNombre(editingProduct.nombre);
      setPrecio(editingProduct.precio);
    }
  }, [editingProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!nombre.trim()) {
      setError("El nombre no puede estar vacío");
      return;
    }

    if (!precio || Number(precio) <= 0) {
      setError("El valor debe ser mayor a cero");
      return;
    }

    if (editingProduct) {
      onSubmit({ id: editingProduct.id, nombre, precio: Number(precio) });
    } else {
      onSubmit({ nombre, precio: Number(precio) });
    }

    setNombre("");
    setPrecio("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow-md rounded-xl p-6 space-y-5 border border-gray-200">
      <h2 className="text-center text-xl font-semibold text-[#0046CC]">
        {editingProduct ? "Editar Producto" : "Registrar Producto"}
      </h2>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">Nombre</label>
        <input className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre del producto"/>
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">Precio</label>
        <input type="number" className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          placeholder="Precio del producto"/>
      </div>

      <button className="w-full bg-[#0046CC] text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">
        {editingProduct ? "Actualizar" : "Agregar"}
      </button>

      {editingProduct && (
        <button type="button" onClick={() => {setNombre(""); setPrecio(""); onCancel();}}
          className="w-full bg-gray-400 text-white py-2 rounded-lg font-medium hover:bg-gray-500 transition">
          Cancelar
        </button>
      )}

      {error && (
        <p className="text-center text-red-500 font-medium">{error}</p>
      )}
    </form>
  );
}
