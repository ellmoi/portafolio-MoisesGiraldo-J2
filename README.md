# Portafolio de Moisés Giraldo

Portafolio personal multipágina, creado con HTML, CSS y JavaScript vanilla. No necesita compilación, backend ni dependencias; las rutas relativas permiten publicarlo directamente en GitHub Pages.

## Páginas

- `index.html`: Inicio
- `sobre-mi.html`: perfil y enfoque
- `tecnologias.html`: tecnologías y herramientas
- `proyectos.html`: selección de proyectos y enlaces por agregar
- `como-trabajo.html`: proceso de trabajo
- `contacto.html`: canales de contacto

## Probar localmente

Abre `index.html` en el navegador. También puedes usar la extensión Live Server de VS Code.

## Publicar en GitHub Pages

1. Sube los cambios a la rama `inicio` de este repositorio:

   ```sh
   git add .
   git commit -m "feat: separar secciones en páginas"
   git push -u origin inicio
   ```

2. En GitHub, abre **Settings → Pages**. En **Build and deployment**, elige **Deploy from a branch**, selecciona `inicio` y la carpeta `/(root)`, y guarda.
3. Como el repositorio ya usaba la rama `incio`, conserva esa rama hasta cambiar la rama predeterminada y Pages a `inicio` y confirmar que el sitio nuevo publique correctamente.
4. Espera a que termine la publicación. GitHub mostrará la URL en **Settings → Pages**.

## Personalizar

- La foto del perfil está en `assets/moises-portafolio.webp`; reemplaza ese archivo para actualizarla.
- Añade el enlace real de cada proyecto cuando esté disponible.
- Completa los enlaces de GitHub y LinkedIn y la dirección de correo antes de publicar esos canales.

No se incluyen datos de contacto, enlaces, proyectos ni experiencia que no hayan sido proporcionados.