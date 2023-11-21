let contentsRef = document.querySelector(".contents")
let backBtn = document.querySelector("#back")
let nextBtn = document.querySelector("#next")
let boxes = document.querySelector(".boxes")
let pageBtns = document.querySelector(".boxes");


const limit = 3

let pointer = 0
let pageCount = Math.ceil(contents.length / limit)


const renderData = () => {
    contentsRef.innerHTML = ""
    boxes.innerHTML = ""
    for (let i = pointer; i < pointer + limit; i++) {
        let html = `
    <div class="content">
          <h2>${contents?.[i]?.title}, ${i + 1}</h2>
          <p>
            ${contents?.[i]?.body}
          </p>
    </div>
    `
        contentsRef.innerHTML += html
    }

    for (let j = 0; j < pageCount; j++) {
        let html = `<button class="box ${pointer / limit == j ? "active" : ""}">${j + 1}</button>`
        boxes.innerHTML += html
    }
}

nextBtn.addEventListener('click', () => {
    if (pointer + 3 >= contents.length)
        return
    console.log(pointer)
    pointer += limit
    renderData()
})
backBtn.addEventListener('click', () => {
    if (pointer <= 0)
        return
    pointer -= limit
    renderData()
})

renderData()


for (let i = 0; i < pageBtns.length; i++) {
    console.log(pageBtns[i])
    pageBtns[i].addEventListener('click', e => {

    })
}

if (document.addEventListener) {
    document.addEventListener("click", handleClick, false);
}
else if (document.attachEvent) {
    document.attachEvent("onclick", handleClick);
}

function handleClick(event) {
    event = event || window.event;
    event.target = event.target || event.srcElement;

    var element = event.target;

    while (element) {
        if (element.nodeName === "BUTTON" && /box/.test(element.className)) {
            pagination(element);
            break;
        }

        element = element.parentNode;
    }
}

function pagination(button) {
    let val = ~~button.innerHTML
    pointer = (val - 1) * 3
    renderData()
}