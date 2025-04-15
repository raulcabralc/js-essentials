import app from "./app";

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log(`Listening in port ${port}`);
  console.log(`http://localhost:${port}`);
  console.log();
});
