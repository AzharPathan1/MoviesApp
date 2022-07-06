const express=require("express")
const cors=require("cors")

const App=express()
App.use(cors())
App.use(express.json())

App.get("/",(req,res)=>{
    res.send("New APi Data")
})
App.get("/showMovie",(req,res)=>{
    const data=[
        {
            name:"Happy New Year",
            released:"2020",
            rating:3
        },
        {
            name:"Raees",
            released:"2019",
            rating:3.5
        },
        {
            name:"Bahubali",
            released:"2018",
            rating:4.5
        },
        {
            name:"Mahobbate",
            released:"2000",
            rating:3
        },
        {
            name:"Race2",
            released:"2021",
            rating:3.4
        },
        {
            name:"singham",
            released:"2017",
            rating:3.2
        },
        {
            name:"Don",
            released:"2020",
            rating:3.4
        },
        {
            name:"Krish",
            released:"2010",
            rating:3
        },
        {
            name:"Vivah",
            released:"2006",
            rating:4.1
        },
        {
            name:"Chak De INDIA",
            released:"2007",
            rating:4.2
        },
        {
            name:"Happy New Year",
            released:"2020",
            rating:3
        },
        {
            name:"Raees",
            released:"2019",
            rating:3.5
        },
        {
            name:"Bahubali",
            released:"2018",
            rating:4.5
        },
        {
            name:"Mahobbate",
            released:"2000",
            rating:3
        },
        {
            name:"Race2",
            released:"2021",
            rating:3.4
        },
        {
            name:"singham",
            released:"2017",
            rating:3.2
        },
        {
            name:"Don",
            released:"2020",
            rating:3.4
        },
        {
            name:"Krish",
            released:"2010",
            rating:3
        },
        {
            name:"Vivah",
            released:"2006",
            rating:4.1
        },
        {
            name:"Chak De INDIA",
            released:"2007",
            rating:4.2
        },
    ]
    res.send(data)
})

App.listen(4545,()=>{
    console.log("Server is On")
})