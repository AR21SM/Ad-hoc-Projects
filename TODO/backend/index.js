const express = require("express");
const { todoschema, updatetodo } = require("./types");
const { todo } = require("./db");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5174"
}));

app.post("/todo", async function (req, res) {
    const bodyinput = req.body;
    const safeparse = todoschema.safeParse(bodyinput);
    
    if (!safeparse.success) {
        res.json({
            msg: "Wrong input was sent" 
        });
        return;
    }

    await todo.create({
        title: bodyinput.title,
        description: bodyinput.description,
        completed: false,
    });

    res.json({
        msg: "TODO created"
    });
});

app.get("/todo", async function (req, res) {
    const respo = await todo.find({});
    res.json(respo); 
});

app.put("/completed", async function (req, res) {
    const updated = req.body;
    const safeparse = updatetodo.safeParse(updated);

    if (!safeparse.success) {
        res.status(411).json({
            msg: "Wrong inputs were sent"
        });
        return; 
    }

    await todo.findByIdAndUpdate(updated.id, { completed: true });

    res.json({
        msg: "Todo marked as completed"
    });
});

app.listen(3004);
