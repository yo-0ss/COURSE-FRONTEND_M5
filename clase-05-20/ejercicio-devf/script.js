// Importamos Zod
    const { z } = window.Zod;
    const form = document.getElementById("registerForm");
    const errors = document.getElementById("errors");
 
    const registerSchema = z.object({
            name: z.string().min(1, 'El nombre es requerido'),
            email: z.string().email('El correo no es válido'),
            password: z.string().min(6, 'La contraseña es de minimo 6 caracteres')
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      
      // Capturamos los valores ingresados
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      };

      try {
        registerSchema.parse(formData);

        errors.textContent = "";
        alert("¡Registro exitoso!");
      } catch (error) {
        errors.textContent = error.errors.map(e => e.message).join(", ");
      }
    });