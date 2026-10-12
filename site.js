(() => {
  const projectGrid = document.querySelector('#project-grid');
  const mapList = document.querySelector('#map-list');
  const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

  const renderProjects = (projects) => {
    projectGrid.innerHTML = projects.map((project) => `
      <article class="project-card" id="${esc(project.id)}">
        <div class="project-top">
          <span class="project-type">${esc(project.type)}</span>
          <span class="project-status"><i class="status-dot ${esc(project.statusTone)}"></i>${esc(project.status)}</span>
        </div>
        <h3>${esc(project.title)}</h3>
        <p class="project-period">${esc(project.period)}</p>
        <div class="project-label">Question</div>
        <p>${esc(project.question)}</p>
        <div class="project-label">My contribution</div>
        <p class="project-contribution">${esc(project.contribution)}</p>
        <div class="project-evidence">
          <div class="project-label">Evidence &amp; boundary</div>
          <p><strong>${esc(project.evidenceLabel)}</strong> ${esc(project.evidence)}</p>
        </div>
        <div class="project-foot"><span>${esc(project.relation)}</span><span>${esc(project.visibility)}</span></div>
      </article>
    `).join('');
  };

  const renderMapList = (nodes) => {
    mapList.innerHTML = nodes.map((node) => `
      <a class="map-list-item" href="#${esc(node.anchor)}"><i class="legend-dot ${esc(node.tone)}"></i><span><strong>${esc(node.title)}</strong><br>${esc(node.description)}</span></a>
    `).join('');
  };

  Promise.all([fetch('data/projects.json?v=2', {cache: 'no-store'}).then((response) => response.json()), fetch('data/research-map.json?v=2', {cache: 'no-store'}).then((response) => response.json())])
    .then(([projects, map]) => { renderProjects(projects); renderMapList(map.nodes); })
    .catch(() => {
      // Keep the semantic HTML fallback already present in index.html.
    });
})();
