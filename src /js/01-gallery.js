import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryElem = document.querySelector(".gallery");

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
