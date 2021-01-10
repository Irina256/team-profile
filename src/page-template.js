const generateIcon = (positions) => {
  if (positions === "Engineer") {
    return `<p><i class="fas fa-glasses"></i> ${positions.positions}</p>`;
  } else if (positions === "Intern") {
    return `<p><i class="fas fa-user-graduate"></i> ${positions.positions}</p>`;
  }
};
const generateMembers = (membersArr) => {
  return `
             ${membersArr.map(({ name2, id, email, github }) => {
               return `
               
                 <div class="col-sm-4">
                 <div class="card" style="width: 22rem;">
            <h2 class="card-header">
            ${name2}
           ${generateIcon(positions)}
              </h2>
                    <div class="card-body">
                      <div class="card" style="width: 18rem;">
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">ID: ${id}</li>
                          <li class="list-group-item">Email: <a href= "mailto:${email}">${email}</a></li>
                          <li class="list-group-item">GitHub: <a href= "https://github.com/${github}">${github}</a></li>
                        </ul>
                      </div>
            </div>
          </div>
          </div>
          `;
             })}
  
        
    `;
};
const generateInterns = (internsArr) => {
  return `
             ${internsArr.map(({ name3, id, email, school, positions }) => {
               return `
               
                 <div class="col-sm-4">
                 <div class="card" style="width: 22rem;">
            <h2 class="card-header">
            ${name3}
           ${generateIcon(positions)}
              </h2>
                    <div class="card-body">
                      <div class="card" style="width: 18rem;">
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">ID: ${id}</li>
                          <li class="list-group-item">Email: <a href= "mailto:${email}">${email}</a></li>
                          <li class="list-group-item">School: ${school}</li>
                        </ul>
                      </div>
            </div>
          </div>
          </div>
          `;
             })}
  
        
    `;
};

module.exports = (templateData) => {
  const { members, interns, ...manager } = templateData;

  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile</title>
    <link rel="stylesheet" href ="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
  <header>
  <div class="container flex-row justify-space-between align-center py-3">
    <h1 class="page-title">My Team</h1>
   
  </div>
</header>
<main class="container my-5">
<div class="row">
  <div class="col-sm-4">
  <div class="card" style="width: 22rem;">
    <h2 class="card-header">
    ${manager.name1}
    <p><i class="fas fa-mug-hot"></i> Manager</p>
      </h2>
            <div class="card-body">
              <div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${manager.id}</li>
                  <li class="list-group-item">Email: <a href="mailto:${
                    manager.email
                  }">${manager.email}</a></li>
                  <li class="list-group-item">Office Number: ${
                    manager.office
                  }</li>
                </ul>
              </div>
    </div>
  </div>
  </div>
       ${generateMembers(members)}
       ${generateInterns(interns)}
    </main>
    
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${
    manager.name1
  }</h3>
    </footer>
  </body>
  </html>
  `;
};
