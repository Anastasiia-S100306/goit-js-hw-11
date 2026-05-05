import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


let lightbox;

const galleryContainer = document.querySelector('.gallery');

export function createGallery(images) {
  
  const markup = images.map(image => {
    return `
      <li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}">
        </a>
        <div class="info">
          <p><b>Likes:</b> ${image.likes}</p>
          <p><b>Views:</b> ${image.views}</p>
          <p><b>Comments:</b> ${image.comments}</p>
          <p><b>Downloads:</b> ${image.downloads}</p>
        </div>
      </li>`;
  }).join('');

  
  galleryContainer.insertAdjacentHTML('beforeend', markup);

  
  if (!lightbox) {
    
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    
    lightbox.refresh();
  }
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}


export function showLoader() {
    const loader = document.querySelector('.loader');
    if (loader) loader.style.display = 'block';
}

export function hideLoader() {
    const loader = document.querySelector('.loader');
    if (loader) loader.style.display = 'none';
}