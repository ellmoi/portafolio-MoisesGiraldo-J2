const detailContent = document.querySelector('#project-detail-content');
const detailError = document.querySelector('#project-detail-error');
const projectSlug = new URLSearchParams(window.location.search).get('proyecto');

async function loadProjectDetail() {
  if (!projectSlug) throw new Error('Missing project slug');

  const response = await fetch('proyectos.html');
  if (!response.ok) throw new Error('Project list could not be loaded');

  const source = new DOMParser().parseFromString(await response.text(), 'text/html');
  const project = [...source.querySelectorAll('[data-project]')]
    .find((item) => item.dataset.project === projectSlug);
  if (!project) throw new Error('Project not found');

  const title = project.querySelector('h2').textContent.trim();
  const image = project.querySelector('.repository-cover-image');
  const description = project.querySelector('.repository-cover-content > p').textContent.trim();
  const index = project.querySelector('.repository-index').textContent.trim();
  const detailImage = document.querySelector('#project-detail-image');

  detailImage.src = image.getAttribute('src');
  detailImage.alt = `Portada del proyecto ${title}`;
  document.querySelector('#project-detail-title').textContent = title;
  document.querySelector('#project-detail-description').textContent = description;
  document.querySelector('#project-detail-index').textContent = index;
  document.title = `${title} | Moisés Giraldo`;

  const technologyList = document.querySelector('#project-detail-tech');
  project.querySelectorAll('.repository-tech li').forEach((technology) => {
    const item = document.createElement('li');
    item.textContent = technology.textContent;
    technologyList.append(item);
  });

  const pageLink = document.querySelector('#project-detail-page');
  const unavailablePage = document.querySelector('#project-detail-page-unavailable');
  if (project.dataset.projectPage) {
    pageLink.href = project.dataset.projectPage;
    pageLink.hidden = false;
  } else {
    unavailablePage.hidden = false;
  }

  const repositoryLink = document.querySelector('#project-detail-repository');
  repositoryLink.href = project.dataset.projectRepository;
  detailContent.hidden = false;
}

loadProjectDetail().catch(() => {
  detailError.hidden = false;
});