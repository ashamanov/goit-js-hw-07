import { galleryItems } from "./gallery-items.js";

const div = document.querySelector(".gallery");

function createGallery(items) {
  return items.map(
    (item) => `<div class="gallery__item">
                  <a class="gallery__link" href="${item.original}">
                    <img
                      class="gallery__image"
                      src=${item.preview}
                      data-source=${item.original}
                      alt=${item.description}
                    />
                  </a>
                </div>`
  ).join("")
}

const galleryMarkup = createGallery(galleryItems)
div.innerHTML = galleryMarkup;

div.addEventListener("click", onClick)

function onClick(event) {
  event.preventDefault()
  
  if (event.target.nodeName !== "IMG") {
   return
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
  `)
  instance.show()

  div.addEventListener("keydown", event => {
    if (event.code === "Escape") {
      instance.close()
    }
  })
}