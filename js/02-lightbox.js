import { galleryItems } from "./gallery-items.js";

const ul = document.querySelector(".gallery");

function createGallery(items) {
  return items
    .map(
      (item) => `<a class="gallery__item" href="${item.original}">
                    <img
                      class="gallery__image"
                      src=${item.preview}
                      alt=${item.description}
                    />
                  </a>`
    )
    .join("");
}

const galleryMarkup = createGallery(galleryItems);
ul.innerHTML = galleryMarkup;

ul.addEventListener("click", onClick);

let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: 'alt',
    captionDelay: 250,
});

function onClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
}
