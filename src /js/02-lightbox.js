import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryElem = document.querySelector(".gallery");

galleryElem.addEventListener("click", onGalleryElemClick);

function onGalleryElemClick(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) return;
}

renderGallery();

function generateGalleryItemMarkup(item) {
  return `
	<li class="gallery__item">
		<a class="gallery__link" href="${item.original}">
			<img class="gallery__image" src="${item.original}" alt="${item.description}" />
		</a>
	</li>`;
}

function generateGalleryMarkup(items) {
  return items.map(generateGalleryItemMarkup).join("");
}

function renderGallery() {
  const galleryMarkup = generateGalleryMarkup(galleryItems);
  galleryElem.innerHTML = galleryMarkup;

  // SimpleLightbox
  const lightbox = new SimpleLightbox(".gallery a", {});
}
