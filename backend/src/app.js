import "dotenv/config.js";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import FinancialReport from "./FinancialReportSchema.js";
import { calculate } from "./calculation.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.post("/api/financial_report", async (req, res) => {
  try {
    const data = req.body;
    const updatedData = calculate(data);

    const newReport = new FinancialReport(updatedData);
    await newReport.save();
    res.status(201).json({ message: "Звіт збережено", data: newReport });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/financial_reports", async (req, res) => {
  try {
    const reports = await FinancialReport.find().sort({ createdAt: -1 });
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
