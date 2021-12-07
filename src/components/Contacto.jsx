import React from "react";
export const Contacto = () => {

  return (

    <div className="form-container">
      <form
        action="https://formsubmit.co/rafaelrodriguezcalvente@gmail.com"
        method="POST"
        target="_blank"
      >
        <legend name="contact">
          Escríbeme &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 📩
        </legend>
        <br />
        <div class="form-group">
          <label for="name">Nombre</label>
          <input
            type="text"
            class="form-control"
            id="name"
            name="name"
            placeholder="Intorduce tu nombre"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            placeholder="Intorduce tu email"
            required
          />
        </div>
        <div class="form-group">
          <label for="mensaje">Texto</label>
          <textarea
            class="form-control"
            id="mensaje"
            name="mensaje"
            placeholder="Escribe tu mensaje"
            required
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};

