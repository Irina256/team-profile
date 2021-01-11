const logo = (picture) => {
  if (picture.officenumber) {
    return ` <p><i class="fas fa-mug-hot"></i>`;
  }
  if (picture.school) {
    return ` <p><i class="fas fa-user-graduate"></i>`;
  }
  if (picture.github) {
    return `<p><i class="fas fa-glasses"></i> `;
  }
};
const user = (empData) => {
  if (empData.officenumber) {
    return `<li class="list-group-item"> Office Number: ${empData.officenumber}</li>`;
  }
  if (empData.school) {
    return `<li class="list-group-item"> School: ${empData.school}</li>`;
  }
  if (empData.github) {
    return `<li class="list-group-item"> Github: <a href="https://github.com/${empData.github}">${empData.github}</a></li>`;
  }
};
const generateMembers = (membersArr) => {
  return `
             ${membersArr
               .map((newData) => {
                 return `
               
                 <div class="col-sm-4">
                 <div class="card" style="width: 22rem;">
            <h2 class="card-header">
            ${newData.getname()}
           ${logo(newData)} ${newData.getRole()}</p>
              </h2>
                    <div class="card-body">
                      <div class="card" style="width: 18rem;">
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item"> ${newData.getID()}</li>
                          <li class="list-group-item"> <a href= "mailto:${newData.getemail()}">${newData.getemail()}</a></li>
${user(newData)}  
                      </ul>
                      </div>
            </div>
          </div>
          </div>
          `;
               })

               .join("")}
  
        
    `;
};

module.exports = (templateData) => {
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
 
       ${generateMembers(templateData)}
      
    </main>
    
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; ${new Date().getFullYear()} </h3>
    </footer>
  </body>
  </html>
  `;
};
