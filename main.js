const result = document.getElementsByClassName("result");
const overlay = document.getElementById("overlay");
const divide = () => {
  for (let index = 0; index < result.length; index++) {
    const element = result[index];
    element.innerHTML = "";
  }
  const day = 7;
  const chapters = document
    .getElementById("chapters")
    .value.split(",")
    .map((x) => +x);
  const endPageOfLastChapter = +document.getElementById("endPageOfLastChapter")
    .value;

  if (
    chapters !== [] &&
    endPageOfLastChapter !== 0 &&
    day < chapters.length &&
    chapters[chapters.length - 1] < endPageOfLastChapter
  ) {
    overlayOn();
    const avgPage = Math.ceil(endPageOfLastChapter / day);
    let temp = Array.from(chapters);
    for (i = 0; i < 7; i++) {
      let t = [];
      let flag = temp[0] + avgPage;
      let chap = temp.filter((x) => x <= flag);
      chap.forEach((c) => {
        t.push("Chapter " + (chapters.indexOf(c) + 1));
      });
      if (t === []) break;
      result[i].innerHTML=t.join("<br>");
      temp = temp.splice(chap.length);
    }
  }
};

const overlayOn = () => {
  overlay.style.display = "block";
};
const overlayOff = () => {
  overlay.style.display = "none";
};
