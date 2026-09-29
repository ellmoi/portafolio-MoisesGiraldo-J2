# Reglas del repositorio

- Sitio estático HTML, CSS y JavaScript sin dependencias de producción ni build.
- Trabajar en ramas por tarea desde `main`: `feature/`, `fix/`, `refactor/`, `docs/`, `test/` o `chore/`, con nombres en minúsculas y kebab-case. No usar `develop`.
- Flujo: rama → cambios → verificación → commits lógicos → push → Pull Request → merge con verificaciones correctas. Nunca modificar directamente `main`.
- Usar Conventional Commits con descripciones en español; preparar archivos explícitos y revisar el diff antes de cada commit.
- Preservar cambios del usuario. No reescribir historial publicado ni eliminar ramas con trabajo sin integrar.
- Mantener el diseño y comportamiento salvo solicitud expresa. Los estilos particulares de una página pertenecen a su CSS específico.
- Ejecutar `node --check` para cada archivo de `js/` y `git diff --check`. Servir por HTTP y revisar las páginas afectadas en escritorio y móvil. Verificar fichas de proyecto, navegación y formulario cuando se modifiquen.
- No presentar comprobaciones manuales como una suite automatizada. No hay build ni lint de terceros configurados.
- No versionar credenciales, archivos `.env`, dependencias ni capturas temporales. Usar `.local/` para artefactos locales.
- El formulario prepara un enlace `mailto:`: nunca afirmar que envía mensajes desde un servidor.
