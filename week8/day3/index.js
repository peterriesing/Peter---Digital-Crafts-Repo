const express = require("express")
const app = express()
const PORT = 3003

// MIDDLEWARE
app.use(express.static(__dirname + "/public"))
app.set("view engine", "ejs")
// MIDDLEWARE

app.get("/", (req, res) => {
    const mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ]
    res.render("pages/index",{
        mascots: mascots,
    })
});

app.get("/about", (req, res) => {
    res.render("pages/about")
});

app.get("/aboutme", (req, res) => {
    const me = {
        name: "Peter",
        occupation: "Web Developer",
        city: "Knoxville",
        pets: "Penny",
        pic: "https://media.licdn.com/dms/image/D4E03AQGPSbg8cEFCzw/profile-displayphoto-shrink_800_800/0/1669672581961?e=1678924800&v=beta&t=a0wqMcdAtPoshBjQ2SvPYbt-8ZntVkee8Qfhp2F34ME",
        lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus rutrum urna, ut feugiat est. Cras in ipsum sapien. Nullam mollis a quam venenatis sodales. Sed in tempus nibh, non elementum nisl. Nunc sit amet tortor accumsan, tincidunt mi ut, hendrerit est. Morbi elit tellus, imperdiet vel augue eget, elementum congue ipsum. Etiam dignissim ex augue, vitae commodo ipsum condimentum sed."
    }
    res.render("pages/aboutme", {
        me:me,
    })
});

app.listen(PORT, console.log(`listening on port ${PORT}`))