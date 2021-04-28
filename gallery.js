import gallery from "./gallery-items.js";

const galleryEl = document.querySelector(".js-gallery");
const lightboxEl = document.querySelector(".js-lightbox");
const ButtonEl = document.querySelector("[ data-action=close-lightbox]");
const imageEl = document.querySelector(".lightbox__image");

const createGalleryElements = (arrGallery) => {
  return arrGallery.map(({ preview, original, description }) => {
    galleryEl.insertAdjacentHTML(
      "beforeend",
      `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    );

    return galleryEl;
  });
};
createGalleryElements(gallery);

galleryEl.addEventListener(`click`, onOpenModal);
function onOpenModal() {
  lightboxEl.classList.add(`is-open`);
  imageEl.setAttribute("src", "gallery.original");
}
console.log(lightboxEl);
