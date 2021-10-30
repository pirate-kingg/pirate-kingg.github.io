const textLinks = document.querySelectorAll(".link_list");
textLinks.forEach((textLink) => {
  const textLinkContent = textLink.textContent.split(" ").join("-");
  textLink.href = "#" + textLinkContent;
});

const titlesList = document.querySelectorAll(".title_list");
titlesList.forEach((titleList) => {
  const titleListText = titleList.textContent.split(".").pop().split(" ").slice(1).join("-");
  titleList.id = titleListText;
  titleList.classList.add("scroll_margin_top");
});

const subtitlesList = document.querySelectorAll(".subtitle_list");
subtitlesList.forEach((subtitleList) => {
  const subtitleListText = subtitleList.textContent.split(" ").join("-");
  subtitleList.id = subtitleListText;
  subtitleList.classList.add("scroll_margin_top");
});

const imagesCommand = document.querySelectorAll(".img_command");
const imagePopup = document.getElementById("img_command_popup");
const popupImage = document.getElementById("popup_gif");
imagesCommand.forEach((imageCommand) => {
  imageCommand.addEventListener("click", (e) => {
    popupImage.classList.remove("opacity-0", "scale-0");
    imagePopup.src = e.target.src;
  });
});

const closeImagePopup = document.getElementById("close");
closeImagePopup.addEventListener("click", () => {
  popupImage.classList.add("opacity-0", "scale-0");
});
