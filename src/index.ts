import app from "./app";
import db from "./database";

const PORT = process.env.PORT || 8082;
db();

app.listen(PORT, async () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
