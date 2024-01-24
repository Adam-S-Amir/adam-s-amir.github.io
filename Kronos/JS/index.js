let PackSelect = document.getElementById("Packs");
let startButton = document.getElementById("Start");

function updateButtonState() {
    if (PackSelect.value === "Select a game:") {
        startButton.disabled = true;
    } else {
        startButton.disabled = false;
        Start();
    }
}
updateButtonState();
PackSelect.addEventListener("change", updateButtonState);

function Start() {
    let Selected = PackSelect.options[PackSelect.selectedIndex].value;
    let core = PackSelect.options[PackSelect.selectedIndex].id;
    let x = document.getElementById("container");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    let gname = Selected;
    let total = `./Roms/${gname}.zip`;
    event.preventDefault();
    const div = document.createElement("div");
    const sub = document.createElement("div");
    const script = document.createElement("script");
    sub.id = "game";
    div.id = "display";
    div.appendChild(sub);
    document.body.appendChild(div);
    window.EJS_player = "#game";
    window.EJS_biosUrl = "";
    window.EJS_gameUrl = total;
    if (core === "GBA") {
        window.location.href = `https://magnusware-libs.vercel.app/GBA/launcher.html#${gname}`;
    } else {
        window.EJS_core = core;
    }
    window.EJS_pathtodata = "./JS/";
    window.EJS_startOnLoaded = true;
    script.src = "./JS/loader.js";
    document.body.appendChild(script);
}
input.onchange = async () => {
    const url = URL.createObjectURL(new Blob([input.files[0]]))
    const parts = input.files[0].name.split(".")
    var extension = parts[parts.length - 1].toLowerCase();
    let core;
    if (extension === 'fds' || extension === 'unif' || extension === 'unf') {
        core = 'nes';
    } else if (extension === 'smc' || extension === 'fig' || extension === 'sfc' || extension === 'gd3' || extension === 'gd7' || extension === 'dx2' || extension === 'swc') {
        core = 'snes';
    } else if (extension === 'z64') {
        core = 'n64';
    } else if (extension === 'gbc') {
        core = 'gb';
    } else if (extension === 'zip' || extension === '7z' || extension === 'rar' || extension === 'iso' || extension === 'tar') {
        alert("Please unzip the file first :)");
        return;
    } else {
        extension = core;
    }

    console.log(core);

    const div = document.createElement("div")
    const sub = document.createElement("div")
    const script = document.createElement("script")

    sub.id = "game"
    div.id = "display"

    div.appendChild(sub)
    document.body.appendChild(div)

    window.EJS_player = "#game"
    window.EJS_biosUrl = ""
    window.EJS_gameUrl = url
    window.EJS_core = core
    window.EJS_pathtodata = "./JS/"
    window.EJS_startOnLoaded = true

    script.src = "./JS/loader.js"
    document.body.appendChild(script)

    box.ondragover = () => box.setAttribute("drag", true)
    box.ondragleave = () => box.removeAttribute("drag")
    let x = document.getElementById("container");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}