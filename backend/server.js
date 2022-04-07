const express = require("express");
const dotenv = require("dotenv").config();
const {errorHandler} = require("./middleware/errorMiddleware");
const PORT = process.env.PORT || 5000;

const app = express();

// Ability to send raw json
app.use(express.json());

// Ability to accept url encoded form
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Ticket System" });
});

// Routes
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
