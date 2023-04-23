const phrase = "@yourName";
const textBubble = document.getElementById("text-bubble");

phrase.split("").map((char, idx) => {
  const el = document.createElement("span");
  el.innerText = char;
  el.setAttribute("data-index", idx.toString());
  el.classList.add("hover-char");
  textBubble.appendChild(el);
});

const hoverChars = [...document.getElementsByClassName("hover-char")];

const removeClasses = () => {
  hoverChars.map((char) => {
    char.classList.remove("hovered");
    char.classList.remove("hovered-adjacent");
  });
};

hoverChars.map((char) => {
  char.addEventListener("mouseover", (e) => {
    removeClasses();
    const currentElem = e.target;
    const index = parseInt(currentElem.getAttribute("data-index"), 10);
    const prevIndex = index === 0 ? null : index - 1;
    const nextIndex = index === phrase.length - 1 ? null : index + 1;
    const prevElem =
      prevIndex !== null &&
      document.querySelector(`[data-index="${prevIndex}"]`);

    const nextElem =
      nextIndex !== null &&
      document.querySelector(`[data-index="${nextIndex}"]`);
    e.target.classList.add("hovered");
    prevElem && prevElem.classList.add("hovered-adjacent");
    nextElem && nextElem.classList.add("hovered-adjacent");
  });
});

document
        .getElementById("text-bubble")
        .addEventListener("mouseleave", () => {
            removeClasses();
        })
