const fs = require("fs");



const requestHandler=(req,res)=>{
    const url = req.url;
  const method = req.method;

  if (url === "/") {
    // Display form
    res.setHeader("Content-Type", "text/html");
    res.end(`
      <form action="/message" method="POST">
        <label>Name:</label>
        <input type="text" name="username"></input>
        <button type="submit">Add</button>
      </form>
    `);
  } else if (url === "/message" && method === "POST") {
    // Handle form submission
    let body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
    let buffer = Buffer.concat(body);

    // console.log(buffer);

    let formData = buffer.toString();
    // console.log(formData);

    const formValues = formData.split('=')[1];

    fs.writeFile('formValues.txt', formValues, (err) => {

        res.statusCode = 302; // redirected
        res.setHeader('Location', '/');
        res.end();
    })
});

}
else {
    if (req.url == '/read') {
        // read from the file

        fs.readFile('formValues.txt', (err, data) => {
            console.log(data.toString());

            res.end(`
                <h1>${data.toString()}</h1> `)
        })
    }
}
}

const anotherFunction=()=>{
    console.log("this is another function");
}

module.experts={
handler:requestHandler,
testFunction:anotherFunction
};