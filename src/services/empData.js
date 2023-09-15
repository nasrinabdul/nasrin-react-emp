export function getAllEmployees()  {
    return fetch('http://localhost:8081/emp/all')
    .then(data => data.json())
}

export async function addNewEmployee(data) {
//let data1 = data;
console.log("emp data: " + JSON.stringify(data));
return await fetch('http://localhost:8081/employee', {
    method : 'POST',
    headers : {
        'Content-Type' : 'application/json'
    },
    body : JSON.stringify({data})
    }).then(data => {
     console.log("output data :" + data);
      data.json()
      }
      ,(response => {
      console.log("response : " + response);
       console.log('Success: ', JSON.stringify(response)); })
      , (error) => {
      console.log(error);
      });
}