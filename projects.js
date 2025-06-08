const username = "antoniofos88";
const projectList = document.getElementById("project-list");

fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
  .then((res) => res.json())
  .then((repos) => {
    projectList.innerHTML = "";
    repos.forEach((repo) => {
      if (!repo.fork) {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>: ${repo.description || "No description"}`;
        projectList.appendChild(li);
      }
    });
  })
  .catch((err) => {
    projectList.innerHTML = "<li>Error loading projects.</li>";
    console.error(err);
  });
