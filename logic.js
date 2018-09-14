// $(document).ready(function() {


//     function checkSize() {
//         if ($(window).width() < 480) {
//             $(".main-container").each(function() {
//                 $(this).find(".body-banner img").prependTo($(this).find(".head-banner"));
//                 $(this).find(".body-banner .supply").prependTo($(this).find(".head-banner"));
//             });
//         } else {

//             $(".main-container").each(function() {

//                 $(this).find(".head-banner img").appendTo($(this).find(".body-banner .wrapper>.supply"));
//                 $(this).find(".head-banner").prependTo($(this).find(".body-banner .wrapper>.supply"));

//             });
//         }
//     }
//     $(window).resize(checkSize);
// })