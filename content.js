var altShiftFPressed = false;
var altShiftGPressed = false;
var altShiftHPressed = false;

var videoElement = document.getElementsByTagName("video")[0];
var panel;

(function ($) {
  create_panel();

  const textList = [];
  const doCopy = (text) => {
    textList.push(text);

    $(".jsPanel-content").html(textList.join("<br/>"));
    const panelContent = document.querySelector(".jsPanel-content");
    panelContent.scrollTo(0, panelContent.scrollHeight);
  };

  let selectPositions = document.getElementById("select-positions");
  let selectCategories = document.getElementById("select-categories");
  let selectCategoriesBaseOptions = `<option value="none" selected disabled hidden>Select a category</option>`;
  selectPositions.addEventListener("change", function () {
    selectCategories.toggleAttribute("disabled", false);
    let selectCategoriesOptions =
      selectCategoriesBaseOptions +
      getOptions(
        positions.filter(
          (position) => position["id"] === parseInt(selectPositions.value)
        )[0]["categories"]
      );
    selectCategories.innerHTML = selectCategoriesOptions;
  });
  selectCategories.addEventListener("change", function () {
    doCopy(
      `${document.getElementsByTagName("video")[0].currentTime.toFixed(2)} - ${
        selectCategories.value
      }`
    );
  });
})(jQuery);

function create_panel() {
  // https://jspanel.de
  jsPanel.ziBase = 9999;
  panel = jsPanel.create({
    theme: {
      bgPanel: "#0168f8",
      bgContent: "#fff",
      colorHeader: "#fff",
      border: "thin solid #0168f8",
      borderRadius: ".33rem",
    },
    headerLogo:
      '<img src="' +
      chrome.runtime.getURL("icons/icon16.png") +
      '" alt="' +
      chrome.i18n.getMessage("extName") +
      '">',
    headerToolbar: [
      `<div id="positions-wrapper">
         <select name="positions" id="select-positions">
           <option value="none" selected disabled hidden>Select a position</option>
           ${getOptions(positions)}
         </select>
       </div>`,
      `<div id="categories-wrapper">
         <select name="categories" id="select-categories" disabled>
           <option value="none" selected disabled hidden>Select a category</option>
         </select>
       </div>`,
    ],
    headerTitle: "Categories Selector",
    syncMargins: true,
    panelSize: {
      width: () => {
        return Math.min(450, window.innerWidth * 0.9);
      },
      height: () => {
        return Math.min(450, window.innerHeight * 0.8);
      },
    },
    css: {
      panel: "aextPanel",
    },
    animateOut: "jsPanelFadeOut",
    animateIn: "jsPanelFadeIn",
    content: "",
    onclosed: function () {
      bPanelVisible = false;
    },
    position: "right-top",
  });
}

function getOptions(objectsWithOptions) {
  let result = "";
  for (let obj of objectsWithOptions) {
    result += `<option value="${obj["id"]}">${obj["name"]}</option>`;
  }
  return result;
}
