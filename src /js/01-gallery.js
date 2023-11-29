import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryElem = document.querySelector(".gallery");

galleryElem.addEventListener("click", onGalleryElemClick);

function onGalleryElemClick(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) return;

  const imageSrc = e.target.dataset.source;
  const imageAlt = e.target.alt;

  const instance = basicLightbox.create(`
    <img width="800" height="600" src="${imageSrc}" alt="${imageAlt}">
  `);

  instance.show();

  window.addEventListener("keydown", onEscapePress);

  function onEscapePress(e) {
    if (e.key === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onEscapePress);
    }
  }
}

renderGallery();

function generateGalleryItemMarkup(item) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>`;
}

function generateGalleryMarkup(items) {
  return items.map(generateGalleryItemMarkup).join("");
}

function renderGallery() {
  const galleryMarkup = generateGalleryMarkup(galleryItems);
  galleryElem.innerHTML = galleryMarkup;
}
