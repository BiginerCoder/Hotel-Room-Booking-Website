const mongoose = require("mongoose");

main()
    .then(() => {
        console.log("Connection is successful");

        

        chat1.save().then((res) => {
            console.log("Chat saved:", res);
        }).catch((err) => console.log("Error saving chat:", err));
    })

    .catch((err) => console.log("Database connection error:", err));

    async function main() {
        await mongoose.connect("mongodb://127.0.0.1:27017/whatapp");
    }

    let allchats = [
        {
            from: "rahul",
            to: "Priya",
            msg: "hi dear priya.",
            created_at: new Date(),
        },
        {
            from: "Neha",
            to: "hari",
            msg: "hi dear priya.",
            created_at: new Date(),
        },
        {
            from: "bittu",
            to: "abhisek",
            msg: "hi dear priya.",
            created_at: new Date(),
        },
        {
            from: "siya",
            to: "om",
            msg: "hi dear priya.",
            created_at: new Date(),
        },
    ];