console.log("Roee's Portfolio");

/* Change color of the lines when hovering link */
$("a")
  .on("mouseenter", function () {
    $("[line]").css("background-color", "var(--light--cursor--line--hover)");
    $(".cursor-position-wrap").css("opacity", "0");
    $(".cursor-inner").addClass("is--link");
  })
  .on("mouseleave", function () {
    $("[line]").css("background-color", "var(--light--cursor--line--default)");
    $(".cursor-position-wrap").css("opacity", "1");
    $(".cursor-inner").removeClass("is--link");
  });

console.log("playground connected");

/* check if mobile / tablet */
function isMobileTablet() {
  var isMobileTablet = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      isMobileTablet = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return isMobileTablet;
}

if (isMobileTablet === true) {
  $(".cursor").css("display", "none");
}

/* ROCO GPT */
// remove auto-complete
$(document).ready(function () {
  var input = $("#input");
  input.prop("type", "text");
  input.removeAttr("autocomplete");
});

// Focus on load
$("textarea").filter(":first").focus();

// auto-height for textarea
$("#input").on("keyup change", function () {
  var taLineHeight = 22; // This should match the line-height in the CSS
  var taHeight = this.scrollHeight; // Get the scroll height of the textarea
  var numberOfLines = Math.floor(taHeight / taLineHeight);
  var textAreaHeight = numberOfLines * taLineHeight + "px";
  $(this).css("height", textAreaHeight);
});

// submit on "enter" key
var input = document.getElementById("input");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submit").click();
    this.value = "";
  }
});

// Typed.js function
function typed() {
  var el = "#answer";
  var answerEl = document.getElementById("hidden-answer");
  var answerValue = answerEl.textContent;
  var options = {
    strings: [answerValue],
    typeSpeed: 20,
    showCursor: false,
    onComplete: (self) => {
      $("#input").focus();
      $(".caret-wrap").css("visibility", "visible");
    },
  };
  var typed = new Typed(el, options);
  typed.current = typed;
  typed.current.reset();
}

// observe p changes
let p = document.querySelector("#hidden-text-answer");

function changeText() {
  p.textContent = "red";
}

var config = { attributes: true, childList: true, subtree: true };

var observer = new MutationObserver((list) => {
  typed();
  $("#input").blur();
  $(".caret-wrap").css("visibility", "hidden");
});

observer.observe(p, config);

// spinner loader

const spinners = {
  simpleDotsScrolling: {
    interval: 200,
    frames: [".  ", ".. ", "...", " ..", "  .", "   "],
  },
};

const $grid = document.getElementById("loader-wrap");

Object.entries(spinners).forEach(([name, spinner]) => {
  const $cell = document.createElement("div");
  const $spin = document.createElement("div");
  // const $name = document.createElement("div");
  // $name.className = "name";
  $spin.innerText = spinner.frames[0];
  // $name.innerText = name;

  // $cell.appendChild($name);
  $cell.appendChild($spin);
  $grid.appendChild($cell);
  let i = 0;
  setInterval(() => {
    requestAnimationFrame(() => {
      $spin.innerText = spinner.frames[++i % spinner.frames.length];
    });
  }, spinner.interval);
});


