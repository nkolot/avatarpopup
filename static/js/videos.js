// The code was adapted from dreamfusion3d.github.io
if (document.location.search.match(/type=embed/gi)) {
  window.parent.postMessage("resize", "*");
}

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

var text23dVideos = ['a_person_wearing_a_beige_dress_and_white_sneakers_hr.mp4',
'a_person_wearing_a_beige_jacket_and_a_red_shirt_hr.mp4',
'a_person_wearing_a_black_dress_and_brown_shoes_hr.mp4',
'a_person_wearing_a_black_dress_and_white_sneakers_hr.mp4',
'a_person_wearing_a_black_jacket_and_a_blue_shirt_hr.mp4',
'a_person_wearing_a_black_jacket_and_a_yellow_shirt_hr.mp4',
'a_person_wearing_a_black_jumpsuit_and_white_shoes_hr.mp4',
'a_person_wearing_a_black_jumpsuit_with_a_plunging_neckline_hr.mp4',
'a_person_wearing_a_black_jumpsuit_with_a_v-neck_and_long_sleeves_hr.mp4',
'a_person_wearing_a_black_polo_shirt_and_white_jeans_hr.mp4',
'a_person_wearing_a_black_shirt_and_brown_pants_hr.mp4',
'a_person_wearing_a_black_shirt_and_khaki_pants_hr.mp4',
'a_person_wearing_a_black_shirt_and_pink_pants_hr.mp4',
'a_person_wearing_a_black_shirt_and_white_jeans_hr.mp4',
'a_person_wearing_a_black_shirt_and_white_pants_hr.mp4',
'a_person_wearing_a_black_sweater_and_khaki_pants_hr.mp4',
'a_person_wearing_a_blouse_and_wide_leg_pants_hr.mp4',
'a_person_wearing_a_blouse_with_a_plunging_neckline_and_wide_leg_pants_hr.mp4',
'a_person_wearing_a_blue_dress_and_brown_shoes_hr.mp4',
'a_person_wearing_a_blue_jacket_and_a_white_dress_hr.mp4',
'a_person_wearing_a_blue_shirt_and_blue_pants_hr.mp4',
'a_person_wearing_a_blue_shirt_and_brown_pants_hr.mp4',
'a_person_wearing_a_blue_shirt_and_green_pants_hr.mp4',
'a_person_wearing_a_blue_shirt_and_grey_pants_hr.mp4',
'a_person_wearing_a_blue_suit_and_a_blue_shirt_hr.mp4',
'a_person_wearing_a_brown_dress_and_black_heels_hr.mp4',
'a_person_wearing_a_brown_dress_and_black_shoes_hr.mp4',
'a_person_wearing_a_brown_dress_and_heels_hr.mp4',
'a_person_wearing_a_brown_dress_and_sneakers_hr.mp4',
'a_person_wearing_a_brown_dress_and_white_sneakers_hr.mp4',
'a_person_wearing_a_brown_jacket_and_jeans_hr.mp4',
'a_person_wearing_a_brown_shirt_and_black_pants_hr.mp4',
'a_person_wearing_a_brown_shirt_and_blue_jeans_hr.mp4',
'a_person_wearing_a_brown_shirt_and_jeans_hr.mp4',
'a_person_wearing_a_brown_shirt_and_khaki_pants_hr.mp4',
'a_person_wearing_a_brown_sweater_and_khaki_pants_hr.mp4',
'a_person_wearing_a_brown_t-shirt_and_jeans_hr.mp4',
'a_person_wearing_a_camouflage_shirt_and_jeans_hr.mp4',
'a_person_wearing_a_crop_top_and_a_denim_skirt_hr.mp4',
'a_person_wearing_a_crop_top_and_black_pants_hr.mp4',
'a_person_wearing_a_crop_top_and_khaki_pants_hr.mp4',
'a_person_wearing_a_crop_top_and_shorts_hr.mp4',
'a_person_wearing_a_denim_jumpsuit_and_black_sneakers_hr.mp4',
'a_person_wearing_a_dress_and_white_sneakers_hr.mp4',
'a_person_wearing_a_floral_dress_and_sandals_hr.mp4',
'a_person_wearing_a_floral_dress_and_shoes_hr.mp4',
'a_person_wearing_a_floral_dress_and_white_shoes_hr.mp4',
'a_person_wearing_a_floral_shirt_and_blue_jeans_hr.mp4',
'a_person_wearing_a_floral_shirt_and_blue_pants_hr.mp4',
'a_person_wearing_a_floral_shirt_and_brown_pants_hr.mp4',
'a_person_wearing_a_floral_shirt_and_jeans_hr.mp4',
'a_person_wearing_a_green_dress_and_black_shoes_hr.mp4',
'a_person_wearing_a_green_dress_and_brown_shoes_hr.mp4',
'a_person_wearing_a_green_dress_and_sneakers_hr.mp4',
'a_person_wearing_a_green_jacket_and_a_blue_shirt_hr.mp4',
'a_person_wearing_a_green_polo_shirt_and_blue_jeans_hr.mp4',
'a_person_wearing_a_green_polo_shirt_and_jeans_hr.mp4',
'a_person_wearing_a_green_polo_shirt_and_white_pants_hr.mp4',
'a_person_wearing_a_green_shirt_and_blue_jeans_hr.mp4',
'a_person_wearing_a_green_shirt_and_khaki_pants_hr.mp4',
'a_person_wearing_a_green_top_and_a_red_skirt_hr.mp4',
'a_person_wearing_a_green_top_and_blue_jeans_hr.mp4',
'a_person_wearing_a_grey_jacket_and_a_blue_shirt_hr.mp4',
'a_person_wearing_a_grey_jacket_and_a_green_shirt_hr.mp4',
'a_person_wearing_a_grey_jacket_and_a_yellow_striped_shirt_hr.mp4',
'a_person_wearing_a_grey_jacket_and_pants_hr.mp4',
'a_person_wearing_a_grey_shirt_and_jeans_hr.mp4',
'a_person_wearing_a_grey_shirt_and_khaki_pants_hr.mp4',
'a_person_wearing_a_maroon_dress_and_black_sandals_hr.mp4',
'a_person_wearing_a_maroon_dress_and_white_shoes_hr.mp4',
'a_person_wearing_a_maroon_polo_shirt_and_blue_jeans_hr.mp4',
'a_person_wearing_a_pink_dress_and_black_sneakers_hr.mp4',
'a_person_wearing_a_pink_dress_and_brown_shoes_hr.mp4',
'a_person_wearing_a_pink_dress_and_pink_heels_hr.mp4',
'a_person_wearing_a_pink_dress_and_sneakers_hr.mp4',
'a_person_wearing_a_pink_dress_and_white_shoes_hr.mp4',
'a_person_wearing_a_pink_shirt_and_blue_jeans_hr.mp4',
'a_person_wearing_a_pink_sweater_and_blue_jeans_hr.mp4',
'a_person_wearing_a_pink_sweater_and_jeans_hr.mp4',
'a_person_wearing_a_pink_tank_top_and_grey_pants_hr.mp4',
'a_person_wearing_a_pink_top_and_brown_pants_hr.mp4',
'a_person_wearing_a_pink_top_and_tan_pants_hr.mp4',
'a_person_wearing_a_polo_shirt_and_jeans_hr.mp4',
'a_person_wearing_a_polo_shirt_and_khaki_pants_hr.mp4',
'a_person_wearing_a_purple_coat_and_an_orange_sweater_hr.mp4',
'a_person_wearing_a_purple_dress_and_black_heels_hr.mp4',
'a_person_wearing_a_purple_shirt_and_blue_jeans_hr.mp4',
'a_person_wearing_a_purple_shirt_and_white_pants_hr.mp4',
'a_person_wearing_a_red_dress_and_black_heels_hr.mp4',
'a_person_wearing_a_red_polo_shirt_and_blue_jeans_hr.mp4',
'a_person_wearing_a_red_polo_shirt_and_jeans_hr.mp4',
'a_person_wearing_a_red_shirt_and_blue_jeans_hr.mp4',
'a_person_wearing_a_red_sweater_and_blue_jeans_hr.mp4',
'a_person_wearing_a_red_top_and_black_pants_hr.mp4',
'a_person_wearing_a_red_turtleneck_and_jeans_hr.mp4',
'a_person_wearing_a_strapless_denim_top_and_jeans_hr.mp4',
'a_person_wearing_a_strapless_top_and_jeans_hr.mp4',
'a_person_wearing_a_suit_and_a_blue_shirt_hr.mp4',
'a_person_wearing_a_suit_and_a_red_shirt_hr.mp4',
'a_person_wearing_a_suit_and_tie_and_white_shoes_hr.mp4',
'a_person_wearing_a_suit_and_tie_hr.mp4',
'a_person_wearing_a_suit_and_tie_with_his_arms_outstretched_hr.mp4',
'a_person_wearing_a_suit_jacket_and_jeans_hr.mp4',
'a_person_wearing_a_sweater_and_jeans_hr.mp4',
'a_person_wearing_a_t-shirt_and_jeans_hr.mp4',
'a_person_wearing_a_tan_crop_top_and_blue_jeans_hr.mp4',
'a_person_wearing_a_tan_dress_and_white_sneakers_hr.mp4',
'a_person_wearing_a_tan_jacket_and_a_blue_shirt_hr.mp4',
'a_person_wearing_a_tan_jacket_and_a_red_shirt_hr.mp4',
'a_person_wearing_a_tan_jacket_and_a_yellow_shirt_hr.mp4',
'a_person_wearing_a_tan_jacket_and_an_orange_shirt_hr.mp4',
'a_person_wearing_a_tan_shirt_and_black_pants_hr.mp4',
'a_person_wearing_a_tan_shirt_and_blue_jeans_hr.mp4',
'a_person_wearing_a_tan_suit_and_a_black_tie_hr.mp4',
'a_person_wearing_a_tan_suit_and_khaki_pants_hr.mp4',
'a_person_wearing_a_tan_sweater_and_blue_jeans_hr.mp4',
'a_person_wearing_a_tan_t-shirt_and_black_jeans_hr.mp4',
'a_person_wearing_a_tan_t-shirt_and_blue_jeans_hr.mp4',
'a_person_wearing_a_tie_dye_shirt_and_jeans_hr.mp4',
'a_person_wearing_a_white_dress_and_black_shoes_hr.mp4',
'a_person_wearing_a_white_dress_and_high_heels_hr.mp4',
'a_person_wearing_a_white_dress_and_white_shoes_hr.mp4',
'a_person_wearing_a_white_dress_and_white_sneakers_hr.mp4',
'a_person_wearing_a_white_jacket_and_a_blue_shirt_hr.mp4',
'a_person_wearing_a_white_jacket_and_a_brown_shirt_hr.mp4',
'a_person_wearing_a_white_jacket_and_blue_jeans_hr.mp4',
'a_person_wearing_a_white_jacket_and_blue_pants_hr.mp4',
'a_person_wearing_a_white_jacket_and_green_pants_hr.mp4',
'a_person_wearing_a_white_jacket_and_khaki_pants_hr.mp4',
'a_person_wearing_a_white_jacket_and_tan_pants_hr.mp4',
'a_person_wearing_a_white_shirt_and_a_blue_skirt_hr.mp4',
'a_person_wearing_a_white_shirt_and_a_gray_skirt_hr.mp4',
'a_person_wearing_a_white_shirt_and_a_grey_skirt_hr.mp4',
'a_person_wearing_a_white_shirt_and_a_skirt_hr.mp4',
'a_person_wearing_a_white_shirt_and_black_pants_hr.mp4',
'a_person_wearing_a_white_shirt_and_blue_jeans_hr.mp4',
'a_person_wearing_a_white_shirt_and_brown_pants_hr.mp4',
'a_person_wearing_a_white_shirt_and_pink_pants_hr.mp4',
'a_person_wearing_a_white_t-shirt_and_blue_jeans_hr.mp4',
'a_person_wearing_a_white_t-shirt_and_jeans_hr.mp4',
'a_person_wearing_a_white_top_and_a_grey_skirt_hr.mp4',
'a_person_wearing_a_yellow_striped_shirt_and_blue_jeans_hr.mp4',
'a_person_wearing_an_orange_dress_and_sandals_hr.mp4',
'a_person_wearing_an_orange_dress_and_white_shoes_hr.mp4',
'a_person_wearing_an_orange_jacket_and_white_pants_hr.mp4',
'a_person_wearing_an_orange_jumpsuit_and_orange_shoes_hr.mp4',
'a_person_wearing_an_orange_polo_shirt_and_jeans_hr.mp4',
'a_person_wearing_an_orange_shirt_and_jeans_hr.mp4',
'a_person_wearing_an_orange_sweater_and_blue_jeans_hr.mp4',
'a_person_wearing_an_orange_turtleneck_and_blue_jeans_hr.mp4',
'a_person_wearing_jeans_a_sweater_and_sneakers_hr.mp4',
'a_person_wearing_shorts_and_a_crop_top_hr.mp4'
];

var image23dImages = 
['0000.png',
 '0002.png',
 '0004.png',
 '0005.png',
 '0007.png',
 '0011.png',
 '0012.png',
 '0014.png',
 '0016.png',
 '0022.png',
 '0024.png',
 '0026.png',
 '0027.png',
 '0032.png',
 '0033.png',
 '0035.png',
 '0037.png',
 '0040.png',
 '0042.png',
 '0045.png',
 'AdobeStock_113680808.jpg',
 'AdobeStock_200328364.jpg',
 'AdobeStock_287223280.jpg',
 'AdobeStock_295913128.jpg'];

animations = [
  'A_person_wearing_a_gray_suit_and_a_white_shirt_60_01_dancermale.CharacterMotion.mp4',
  'A_person_wearing_a_gray_suit_and_a_white_shirt_60_02_dancermale.CharacterMotion.mp4',
  'A_person_wearing_a_gray_suit_and_a_white_shirt_60_03_dancermale.CharacterMotion.mp4',
  'A_person_wearing_a_gray_suit_and_a_white_shirt_60_04_dancermale.CharacterMotion.mp4',
  'A_person_wearing_a_gray_suit_and_a_white_shirt_60_05_dancermale.CharacterMotion.mp4',
  'A_person_wearing_a_red_dress_and_black_shoes_60_01_dancermale.CharacterMotion.mp4',
  'A_person_wearing_a_red_dress_and_black_shoes_60_02_dancermale.CharacterMotion.mp4',
  'A_person_wearing_a_red_dress_and_black_shoes_60_03_dancermale.CharacterMotion.mp4',
  'A_person_wearing_a_red_dress_and_black_shoes_60_04_dancermale.CharacterMotion.mp4',
  'A_person_wearing_a_red_dress_and_black_shoes_60_05_dancermale.CharacterMotion.mp4',
  'A_person_wearing_shorts_and_a_black_top_60_01_dancermale.CharacterMotion.mp4',
  'A_person_wearing_shorts_and_a_black_top_60_02_dancermale.CharacterMotion.mp4',
  'A_person_wearing_shorts_and_a_black_top_60_03_dancermale.CharacterMotion.mp4',
  'A_person_wearing_shorts_and_a_black_top_60_04_dancermale.CharacterMotion.mp4',
  'A_person_wearing_shorts_and_a_black_top_60_05_dancermale.CharacterMotion.mp4',
]




function make_video_carousel(videoPaths, path, element_id, maxVideos, show_captions = true) {
  shuffleArray(videoPaths);

  
// document.addEventListener("DOMContentLoaded", function() {
  var thumbnails = document.getElementById(element_id);
  var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  var outer = document.createElement("DIV");
  outer.classList = "carousel results-carousel";


  for (var i = 0; i < Math.min(videoPaths.length, maxVideos); i++) {
    
    var inner = document.createElement("DIV");
    //inner.classList = "inner card-body";

    let videoPath = videoPaths[i].replace('.png', '.mp4').replace('.jpg', '.mp4');
    let caption = videoPath.replace('_hr.mp4', '').replace('a_person_wearing_', "").replaceAll(
      "_", " ");

    var componentVideo = document.createElement("VIDEO");
    componentVideo.loop = true;
    //componentVideo.playsinline = true;
    // componentVideo.preload = "metadata";
    componentVideo.muted = true;
    //componentVideo.width = 10000;
    componentVideo.autoplay = true;
    if (isIOS) {
      // Autoplay doesn't seem to work.
      componentVideo.classList = "video";
      componentVideo.src = path + videoPath;
      componentVideo.controls = true;
    } else {
      componentVideo.controls = false;
      componentVideo.classList = "video";
      componentVideo.onmouseout = componentVideo.play;
      componentVideo.onmouseover = componentVideo.pause;
      componentSource = document.createElement("SOURCE")
      componentSource.type = "video/mp4"
      componentSource.setAttribute('src',
        path + videoPath);
      componentVideo.appendChild(componentSource);
    }

    if (show_captions){
    var fullCaption = document.createElement("DIV");
    var bold = document.createElement("STRONG");
    fullCaption.classList = "overlaytext";

    bold.appendChild(document.createTextNode(caption))
    fullCaption.appendChild(bold);
    inner.appendChild(fullCaption);
   }

    inner.appendChild(componentVideo);

    

    //var componentCaption = document.createElement("h6");
    //componentCaption.classList = "caption";
    //componentCaption.title = caption;
    //componentCaption.appendChild(document.createTextNode(captionShort));
    //inner.appendChild(componentCaption);

    outer.appendChild(inner);
    thumbnails.appendChild(outer);
  }
}



function make_image_video_carousel(imagePaths, path, element_id, maxVideos) {
  shuffleArray(imagePaths);

  
  // document.addEventListener("DOMContentLoaded", function() {
  var thumbnails = document.getElementById(element_id);
  var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  var outer = document.createElement("DIV");
  outer.classList = "carousel results-carousel";


  for (var i = 0; i < Math.min(imagePaths.length, maxVideos); i++) {
    
    var inner = document.createElement("DIV");
    //inner.classList = "inner card-body";

    let imagePath = imagePaths[i];

    let img = document.createElement("img");
    img.src = path + imagePath;
    img.width = 256;
    img.height = 256;

    inner.appendChild(img);
    
    let videoPath = imagePath.replace('.png', '.mp4').replace('.jpg', '.mp4')
    console.log(path+videoPath)

    var componentVideo = document.createElement("VIDEO");
    componentVideo.loop = true;
    //componentVideo.playsinline = true;
    // componentVideo.preload = "metadata";
    componentVideo.muted = true;
    componentVideo.width= 512;
    componentVideo.autoplay = true;
    if (isIOS) {
      // Autoplay doesn't seem to work.
      componentVideo.classList = "video";
      componentVideo.src = path + videoPath;
      componentVideo.controls = true;
    } else {
      componentVideo.controls = false;
      componentVideo.classList = "video";
      componentVideo.onmouseout = componentVideo.play;
      componentVideo.onmouseover = componentVideo.pause;
      componentSource = document.createElement("SOURCE")
      componentSource.type = "video/mp4"
      componentSource.setAttribute('src',
        path + videoPath);
      componentVideo.appendChild(componentSource);
    }
    inner.appendChild(componentVideo);

    //var componentCaption = document.createElement("h6");
    //componentCaption.classList = "caption";
    //componentCaption.title = caption;
    //componentCaption.appendChild(document.createTextNode(captionShort));
    //inner.appendChild(componentCaption);

    outer.appendChild(inner);
    thumbnails.appendChild(outer);
  }
}
// }
