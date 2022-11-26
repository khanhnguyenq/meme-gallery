var imageUrls = [];

var $gallery = document.querySelector('main');
var $imageUrlInput = document.querySelector('input');
var $addImageButton = document.querySelector('button');

$addImageButton.addEventListener('click', function () {
  if ($imageUrlInput.value !== '') {
    imageUrls.push($imageUrlInput.value);
    $imageUrlInput.value = '';
    updateGallery();
  }
});

function updateGallery() {
  $gallery.innerHTML = '';
  for (let i = 0; i < imageUrls.length; i++) {
    var $imageElement = document.createElement('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = imageUrls[i];
    $gallery.appendChild($imageElement);
  }
}

updateGallery();

// 'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
//   'https://c.tenor.com/uYP_Nkq8VPsAAAAd/coding-hello-world.gif',
//   'https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg',
//   'https://media.npr.org/assets/img/2016/03/29/ap_090911089838_sq-3271237f28995f6530d9634ff27228cae88e3440-s1100-c50.jpg',
//   'https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?crop=4:3',
//   'https://cdn.shopify.com/s/files/1/0210/2968/3222/files/image17.jpg?v=1646429188',
//   'https://ichef.bbci.co.uk/news/976/cpsprodpb/F1F2/production/_118283916_b19c5a1f-162b-410b-8169-f58f0d153752.jpg'
