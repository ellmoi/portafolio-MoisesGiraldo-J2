# Portafolio de Moisés Giraldo

Portafolio personal de una sola página, creado con HTML, CSS y JavaScript vanilla. No necesita compilación, backend ni dependencias; las rutas relativas permiten publicarlo directamente en GitHub Pages.

## Probar localmente

Abre `index.html` en el navegador. También puedes usar la extensión Live Server de VS Code.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub. Para que la URL sea `https://TU-USUARIO.github.io/`, llámalo `TU-USUARIO.github.io`. Si usas otro nombre, la URL será `https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/`.
2. Desde esta carpeta, inicializa y sube la rama principal:

   ```sh
   git init
   git add index.html css/styles.css js/app.js README.md .gitignore
   git commit -m "feat: create responsive portfolio"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/NOMBRE-DEL-REPOSITORIO.git
   git push -u origin main
   ```

   Sustituye los valores de ejemplo por tu usuario y el nombre real del repositorio. Si Git ya está inicializado, omite `git init`; si el remoto ya existe, no repitas `git remote add origin`.
3. En GitHub, abre **Settings → Pages**. En **Build and deployment**, elige **Deploy from a branch**, selecciona `main` y la carpeta `/(root)`, y guarda.
4. Espera a que termine la publicación. GitHub mostrará la URL en **Settings → Pages**.

## Personalizar

- Sustituye el espacio del retrato por una fotografía optimizada en WebP y mantenla en una ruta relativa dentro del repositorio.
- Agrega proyectos reales con su imagen, descripción, tecnologías y enlaces cuando estén disponibles.
- Completa los enlaces de GitHub y LinkedIn y la dirección de correo antes de publicar esos canales.

No se incluyen datos de contacto, enlaces, proyectos ni experiencia que no hayan sido proporcionados.