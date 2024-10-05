import express from "express";

const app = express();

app.get("/", (req,res) => {
    const today = new Date();
    const day = today.getDay();

    let type = "a weekday";
    let adv = "It's time to work hard";

    if(day === 0 || day === 6){
        type = "a weekend";
        adv = "It's time to have fun";
    }

    res.render("index2.ejs",{
        dayType: type,
        advice: adv,
    });
});

app.listen(3000, () => {
    console.log("Server is running at the port 3000");
});