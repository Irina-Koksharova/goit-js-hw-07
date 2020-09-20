const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesGalleryEl = document.querySelector('#gallery');

const makeImagesGallery = images => {
  return images.map(image => {
    const itemElement = document.createElement('li');
    itemElement.classList = 'item-gallery';
    const imageElement = document.createElement('img');
    imageElement.classList = 'image-gallery';
    imageElement.src = image.url;
    imageElement.alt = image.alt;

    itemElement.appendChild(imageElement);
    return itemElement;
  });
};
const itemsGallery = makeImagesGallery(images);
imagesGalleryEl.append(...itemsGallery);
