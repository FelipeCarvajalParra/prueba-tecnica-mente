import { useEffect, useState } from 'react'
import Table from "./components/Table";
import Form from "./components/Form";
import Documentation from "./components/Documentation";

export default function App() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Nuevo: producto que se está editando
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const res = await fetch("http://localhost:8080/productos");
        const data = await res.json();
        setProductos(data);
      } catch (error) {
        console.error("Error al cargar productos", error);
      } finally {
        setLoading(false);
      }
    };

    cargarProductos();
  }, []);

  // POST para crear producto (se mantiene exacto)
  const addItem = async (item) => {

    // Si estoy editando → hago PUT
    if (editingProduct) {
      updateItem(item);
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/productos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });

      if (!res.ok) {
        const errortext = await res.text();
        alert(errortext)
      }

      const nuevo = await res.json();
      setProductos([...productos, nuevo]);
      alert("Producto Registrado Correctamente!")

    } catch (error) {
      alert("Error al crear el producto, intentelo más tarde")
    }
  };

  // Nuevo: PUT (actualizar)
  const updateItem = async (item) => {
    try {
      const res = await fetch(`http://localhost:8080/productos/${item.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });

      if (!res.ok) {
        const errortext = await res.text();
        alert(errortext);
        return;
      }

      const actualizado = await res.json();

      setProductos(
        productos.map((p) =>
          p.id === actualizado.id ? actualizado : p
        )
      );

      alert("Producto actualizado correctamente");
      setEditingProduct(null);

    } catch (error) {
      alert("Error al actualizar el producto");
    }
  };

  // Nuevo: activar edición
  const handleEdit = (producto) => {
    setEditingProduct(producto);
  };

  // Nuevo: cancelar edición
  const cancelEdit = () => {
    setEditingProduct(null);
  };

  // Eliminar producto
const deleteItem = async (id) => {
  const confirmacion = confirm("¿Seguro que deseas eliminar este producto?");

  if (!confirmacion) {
    return;
  }

  try {
    const res = await fetch(`http://localhost:8080/productos/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      alert("No se pudo eliminar el producto");
      return;
    }

    setProductos(productos.filter(p => p.id !== id));
    alert("Producto eliminado correctamente");

  } catch (error) {
    alert("Error al eliminar el producto");
  }
};

  return (
    <div className="min-h-screen w-full bg-[#F2F4F8] p-10">

      <div className="max-w-7xl mx-auto mb-10 text-center">
        <h1 className="text-3xl font-bold text-[#0046CC]">
          Prueba técnica Mente — Desarrollador Jr FullStack
        </h1>

        <p className="text-gray-700 mt-2">
          Puedes ver el código de esta prueba en{" "}
          <a href="https://github.com/FelipeCarvajalParra/prueba-tecnica-mente"
            target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
            GitHub
          </a>.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[30%_65%] items-start gap-10">

        <div className="flex justify-center md:justify-start">
          <Form
            onSubmit={addItem}
            editingProduct={editingProduct}
            onCancel={cancelEdit}
          />
        </div>

        <div className="flex justify-center md:justify-start">
          <Table
            productos={productos}
            loading={loading}
            onEdit={handleEdit}
            onDelete={deleteItem}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex justify-center mt-10">
        <Documentation />
      </div>

    </div>
  );
}
