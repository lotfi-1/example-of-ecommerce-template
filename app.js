const express = require("express");
const app = express();
app.use(express.static("./front-end"));

app.get("/product/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (!id) {
    return res.status(404).send("Product Does Not Exist");
  }
  return res.json();
});
app.listen(5000);
