// create an image
// create a header
// city
// paragraph about me

// const topDiv = document.getElementsByClassName("top")[0]
// ^^^^ you have to index the array that is created. console.log will show that element is an array in terminal

const body = document.getElementsByTagName("body")[0]
const mainDiv = document.createElement("div")
console.log(mainDiv)
const img = document.createElement("img")
console.log(img)
const header = document.createElement("h1")
const header2 = document.createElement("h2")
const aboutMe = document.createElement("p")
const picContainer = document.createElement("div")
const banner = document.createElement("div")
const text = document.createElement("div")
const pics = ["https://scontent-atl3-1.xx.fbcdn.net/v/t1.18169-9/1923975_603615662305_1461_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=8tqEnDFjxfsAX97A632&tn=GgSMvh-V6ffmJ_0n&_nc_ht=scontent-atl3-1.xx&oh=00_AfClcA9rBpRgZBXI4L35rUrsJ8Vj4rWXUBaXHW9Jpdu_cQ&oe=63B9A150", "https://scontent-atl3-1.xx.fbcdn.net/v/t1.18169-9/1923975_603619739135_7738_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=XFOjh696Zs0AX8APl6y&_nc_ht=scontent-atl3-1.xx&oh=00_AfBpmUa8WQAODgzn058Pz_mgC0aSr2SSJW56Bm3dqer4hA&oe=63B9AA79", "https://scontent-atl3-1.xx.fbcdn.net/v/t1.18169-9/1923975_603617418785_1906_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=t1KIT1DY4ggAX8yKk-y&_nc_ht=scontent-atl3-1.xx&oh=00_AfAq27DCv0YAeo6hhv5_ORIEpLmXmQqOn5q_9v_8ydhWPg&oe=63B9ACC1"]

for (pic of pics) {
    const montana = document.createElement('img')
    montana.src = pic
    montana.className = "montana"
    picContainer.append(montana)
}

banner.className = "banner"
text.className = "text"
picContainer.className = "pics"


img.src = "https://scontent-atl3-1.xx.fbcdn.net/v/t1.18169-9/1923975_603619075465_7921_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=pmMbDCf_D8QAX9Gwv0v&_nc_ht=scontent-atl3-1.xx&oh=00_AfDBGqzGtnbNl2PxftIXL0AUjLeDc-vvir2g0ME6V53Jdw&oe=63B98FB2"
header.innerText = "Peter Riesing"
// header.className = "title"
// const Peter = document.getElementsByClassName("title")
header2.innerText = "Tacotown, USA"
aboutMe.innerText = "Tacos are the bomb. I had tacos last night. Street tacos are the best tacos. Leave that shredded cheese and lettuce at the door. Give me the cilantro, onions, and salsa. Tacos."

banner.append(img)
text. append(header,header2,aboutMe)
body.append(banner,text,picContainer)