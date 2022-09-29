const createTeam = (team) => {
  console.log(team);
  const generateManager = (manager) => {
    return `
<div class="card mt-5" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title font-weight-bold text-center">${manager.getName()}</h5>
        <h6 class="card-subtitle text-center mb-2 text-muted">Title: ${manager.getRole()} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-compass" viewBox="0 0 16 16">
        <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
        <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
      </svg></h6>
        <p class="card-text text-center">Employee Id: ${manager.getId()}</p>
        <a href="mailto:${manager.getEmail()}" target="_blank" class="card-link">${manager.getEmail()}</a>
        <p class="card-text text-center">Office Phone Number: ${manager.getOfficeNumber()}</p>
    </div>
</div>
    `;
  };
  const employeeCards = [];
  employeeCards.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
      .join("")
  );
  return employeeCards.join("");
};

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
