export default function lottieAnime(state) {
  console.log("state", state);
  switch (state) {
    case "ok":
      var myAnime = bodymovin.loadAnimation({
        wrapper: document.getElementById("testLottie"),
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "./lottie/lottie (mobile).json",
      });
      break;
    case "no":
      var myAnime = bodymovin.loadAnimation({
        wrapper: document.getElementById("testLottie"),
        animType: "svg",
        loop: true,
        autoplay: true,
        path: "./lottie/97304-sad-face-emoji.json",
      });
      break;

    default:
      console.log();
      break;
  }
}
