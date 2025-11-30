import React from "react";

export default function Documentation() {
  return (
    <div className="mt-10 bg-white rounded-xl shadow-md p-8 w-full">
      <h2 className="text-2xl font-bold text-[#0046CC] text-center mb-4">
        Documentación del Proyecto
      </h2>

      <p className="text-gray-700 text-center max-w-2xl mx-auto mb-6">
        Este mini–CRUD fue desarrollado como parte de una prueba técnica para Mente. 
        Permite crear, listar, actualizar y eliminar productos usando React y TailwindCSS en el front-end, 
        y una API en Spring Boot en el back-end. Aquí encontrarás una breve explicación del proyecto.
      </p>

      <div className="flex justify-center mb-8">
        <div className="w-full max-w-2xl aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow"
            src="https://www.youtube.com/embed/P4ElHrHqWe4?si=1VdLJRxdKh37SkEo"
            title="Video explicativo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </div>
  );
}
