const express=require("express");

const app=express();
const PORT=5000;

const urlRoutes=require("./routes/urlRoutes");

// Middleware
app.use(express.json());

// Home Route
app.get("/",(req,res)=>{
    res.send("🚀 Welcome to URL Shortener API");
});

// Health Check Route
app.get("/health",(req,res)=>{
    res.json({
        status:"OK",
        message:"Server is running"
    });
});
app.use("/api",urlRoutes);

// Start Server
app.listen(PORT,()=>{
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});