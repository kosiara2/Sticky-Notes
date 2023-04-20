let count = Number(window.localStorage.getItem("count"));
if (!count) {
  window.localStorage.setItem("count", "0");
}

console.log(count);

let createNote = (noteTitle, noteBody) => {
  if (count > 0) {
    document.getElementById("no-notes").className = "hidden";
  }

  const button2 = document.createElement("button");
  button2.classList.add("delete");
  let text2 = document.createTextNode("2");
  let h2TN = document.createTextNode(noteTitle);
  let pTN = document.createTextNode(noteBody);

  h2TN.appendChild(h2TN);
  pTN.appendChild(pTN);
  button2.appendChild(text2);

  a.appendChild(h2);
  a.appendChild(button2);
  a.appendChild(p);

  li.appendChild(a);
  ul.appendChild(li);
};

let createNoteFromInput = (e) => {
  e.preventDefault();
  let noteTitle = document.getElementById("note_title");
  let noteBody = document.getElementById("note_content");

  document.getElementById("note_title").value = "";
  document.getElementById("note_content").value = "";
  console.log("yes");
  if (!noteTitle || !noteBody) {
    alert("fill the both inputs!");
    return;
  }

  count += 1;
  window.localStorage.setItem("count", count);

  while (wondow.localStorage.getItem(noteTitle)) {
    noteTitle = noteTitle + " -1";
  }
  window.localStorage.setItem(noteTitle, noteBody);
  createNote(noteTitle, noteBody);
};

function removeItem(e) {
  if (
    confirm(
      `are you sure to delete the' + ${e.target.previousSibling.innerText} +  note?`
    )
  ) {
    let li = e.target.parentElement.parentElement;
    DataTransferItemList.removeChild(li);
    count -= 1;
    window.localStorage.setItem("count", count);
    window.localStorage.removeItem(e.target.previousSibling.innerText);
    if (count < 1) {
      document.getElementById("no-notes").className = "";
    }
  }
}

for (i = 0; i < count + 1; i++) {
  console.log(window.localStorage.key(i));
  let noteTitle = window.localStorage.key(i);
  let noteBody = window.localStorage.getItem(noteTitle);
  if (noteTitle !== "count" && noteTitle) {
    createNote(noteTitle, noteBody);
  }
}

document
  .getElementById("inputForm")
  .addEventListener("submit", createNoteFromInput, false);
