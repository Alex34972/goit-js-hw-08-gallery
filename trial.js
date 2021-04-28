import gallery from "./gallery-items.js";

const galleryEl = document.querySelector(".js-gallery");
const lightboxEl = document.querySelector(".js-lightbox");
const ButtonEl = document.querySelector("[ data-action=close-lightbox]");
const imageModalEl = document.querySelector(".lightbox__image");
const createGalleryElements = ({ preview, original, description }) => {
  return `<li class="gallery__item">
  <a
    class="gallery__link"
    href=""
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
};
const makeMarcup = gallery.map((img) => createGalleryElements(img)).join(``);
galleryEl.insertAdjacentHTML("beforeend", makeMarcup);
console.log(galleryEl);
const imageGalleryEl = document.querySelectorAll(".gallery__image");
console.log(imageGalleryEl);

galleryEl.addEventListener(`click`, onOpenModal);

function onOpenModal(e) {
  if (!e.target.classList.contains(`gallery__image`)) {
    return;
  }

  lightboxEl.classList.add(`is-open`);

  imageModalEl.src = e.target.dataset.source;
}

ButtonEl.addEventListener("click", onCloseModal);
function onCloseModal() {
  lightboxEl.classList.remove(`is-open`);
}
