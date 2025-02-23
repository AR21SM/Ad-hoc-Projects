import { useState } from "react";

export function CreateTodo() {
    const [title,settitle]=useState("");
    const [description,setdescription]=useState("");

    return (
        <div>
            <input style={{
                padding: 5, margin: 5
            }} type="text" placeholder="title" onChange={function(e){
                settitle(e.target.value);
            }} />

            <br /><br />

            <input style={{
                padding: 5, margin: 5
            }} type="text" placeholder="description" onChange={function(e){
                setdescription(e.target.value)
            }} />
            <br /><br />
            <button style={{
                padding: 5, margin: 5
            }} onClick={() => {
                fetch("http://localhost:3004/todo",{
                    method:"POST",
                    body: JSON.stringify({  // ✅ Fix: Convert body to JSON string
                        title: title,
                        description: description
                    }),
                    headers: {
                        "Content-Type": "application/json" // ✅ Fix: Correct header name
                    }
                })
                    .then(async function (res) {
                        const json = await res.json();
                        
                    })
            }}>Add a todo</button>
            <br />
        </div>
    )
}