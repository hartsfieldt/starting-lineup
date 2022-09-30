const createTeam = (team) => {
  // Generate Manager Card
  const generateManager = (manager) => {
    return `
<div class="card mt-5">
    <div class="card-body border border-info  bg-success p-2" style="--bs-bg-opacity: .5">
        <h5 class="card-title font-weight-bold text-center bg-success p-2 text-white">${manager.getName()}</h5>
        <h6 class="card-subtitle text-center mb-2">Title: ${manager.getRole()} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-compass" viewBox="0 0 16 16">
        <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
        <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
      </svg></h6>
        <p class="card-text text-center mb-2">Employee Id: ${manager.getId()}</p>
        <a href="mailto:${manager.getEmail()}" target="_blank" class="card-link text-start mb-2">${manager.getEmail()}</a>
        <p class="card-text text-start mb-2">Office Phone Number: ${manager.getOfficeNumber()}</p>
    </div>
</div>
    `;
  };
  // Generate Engineer Card
  const generateEngineer = (engineer) => {
    return `
<div class="card mt-5">
    <div class="card-body">
        <h5 class="card-title font-weight-bold text-center">${engineer.getName()}</h5>
        <h6 class="card-subtitle text-center mb-2 text-muted">Title: ${engineer.getRole()} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-heart-eyes-fill" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.559 5.448a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zm-.07-5.448c1.397-.864 3.543 1.838-.953 3.434-3.067-3.554.19-4.858.952-3.434z"/>
      </svg></h6>
        <p class="card-text text-center">Employee Id: ${engineer.getId()}</p>
        <a href="mailto:${engineer.getEmail()}" target="_blank" class="card-link">${engineer.getEmail()}</a>
        <a href="https://github.com/${engineer.github}">github Profile: ${engineer.github}</a>
    </div>
</div>
    `;
  };

    // Generate Intern Card
    const generateIntern = (intern) => {
      return `
  <div class="card mt-5">
      <div class="card-body">
          <h5 class="card-title font-weight-bold text-center">${intern.getName()}</h5>
          <h6 class="card-subtitle text-center mb-2 text-muted">Title: ${intern.getRole()} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-heart-eyes-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.559 5.448a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zm-.07-5.448c1.397-.864 3.543 1.838-.953 3.434-3.067-3.554.19-4.858.952-3.434z"/>
        </svg></h6>
          <p class="card-text text-center">Employee Id: ${intern.getId()}</p>
          <a href="mailto:${intern.getEmail()}" target="_blank" class="card-link">${intern.getEmail()}</a>
          <p class="card-text text-center">School: ${intern.getSchool()}</p>
      </div>
  </div>
      `;
    };
  // Create individual cards
  const employeeCards = [];
  employeeCards.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
      .join("")
  );
  employeeCards.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  employeeCards.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );
  return employeeCards.join("");
};

// Return HTML
module.exports = (team) => {
  return `
  <!doctype html>
  <html lang="en">

  <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <!-- Bootstrap CSS -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

      <title>My Team Profile</title>
  </head>

  <body>
      <div class="navbar navbar-dark bg-danger mb-5">
          <h1 class="navbar-brand mb-0 h1 w-100 text-center">My Team Profile!</h1>
      </div>
        <div class="container">
            <div class="col-12">
                ${createTeam(team)}
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossorigin="anonymous"></script>

    </body>

    </html>
    `;
};
