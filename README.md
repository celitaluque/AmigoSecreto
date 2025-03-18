
# 🎉 Amigo Secreto - Aplicación Web

Una aplicación web sencilla para gestionar y sortear un "Amigo Secreto". Permite a los usuarios ingresar nombres de amigos y realizar un sorteo aleatorio para elegir quién será el amigo secreto.

## 🚀 Características

- Agregar nombres de amigos a una lista.
- Validación para que no se agreguen campos vacíos.
- Lista visual de amigos ingresados.
- Función de sorteo aleatorio para seleccionar un amigo secreto.
- Interfaz intuitiva y diseño responsivo.

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)

## 📸 Vista previa

![Vista previa](assets/amigo-secreto.png)

## 📂 Estructura del proyecto

```
📁 proyecto-amigo-secreto
├── 📁 assets
│   ├── amigo-secreto.png
│   └── play_circle_outline.png
├── 📄 index.html
├── 📄 style.css
├── 📄 app.js
└── 📄 README.md
```

## 📝 Instrucciones de uso

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/celitaluque/amigo-secreto.git
   ```

2. **Abrir el archivo `index.html` en tu navegador**
   - Puedes hacerlo directamente desde el explorador de archivos o arrastrándolo a tu navegador preferido.

3. **Agregar amigos**
   - Escribe el nombre en el campo de entrada y haz clic en "Añadir".
   - Verás que el nombre se añade a la lista.

4. **Sortear un amigo secreto**
   - Una vez que tengas todos los nombres añadidos, haz clic en el botón "Sortear amigo".
   - El sistema elegirá un amigo al azar de la lista.

## ✨ Funcionalidades en detalle

### Agregar amigos
- Valida que el campo de nombre no esté vacío.
- Agrega el nombre al arreglo `amigos` y actualiza la lista en pantalla.
  
### Sorteo aleatorio
- Comprueba que haya al menos un nombre antes de realizar el sorteo.
- Utiliza `Math.random()` y `Math.floor()` para seleccionar un índice al azar.

## 📋 Próximas mejoras (Opcional)
- Eliminar un amigo de la lista.
- Evitar nombres duplicados.
- Exportar resultados del sorteo.
- Implementar sorteos múltiples sin repetir resultados.

## 👩‍💻 Autor

- **Celinda Luque**
- [Tu enlace de GitHub o portafolio](https://github.com/celitaluque)


