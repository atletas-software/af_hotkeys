var altShiftFPressed = false;
var altShiftGPressed = false;
var altShiftHPressed = false;

var videoElement = document.getElementsByTagName('video')[0];
var panel;

function create_panel() {
  jsPanel.ziBase = 9999;
  panel = jsPanel.create({
    // theme: 'light',
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
    headerTitle: "Pushed Key",
    syncMargins: true,
    // container: "window",
    // onwindowresize: true,
    // contentSize: '300 200',
    panelSize: {
      width: () => {
        return Math.min(350, window.innerWidth * 0.9);
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
  // !html && aPanel.maximize();
}

(function ($) {

  create_panel();

  const textList = [];
  const doCopy = (text) => {
    textList.push(text);

    $(".jsPanel-content").html(textList.join('<br/>'));
    const panelContent = document.querySelector(".jsPanel-content");
    panelContent.scrollTo(0, panelContent.scrollHeight);
  }

  const fieldPlayerKeys = [
    { key: 'A', description: 'Header Attacking' },
    { key: 'B', description: 'Ball Control' },
    { key: 'C', description: 'Crossing' },
    { key: 'D', description: 'Defending' },
    { key: 'Y', description: 'Finishing' },
    { key: 'H', description: 'Header Defensive' },
    { key: 'K', description: 'Tracking' },
    { key: 'L', description: 'Long Passing' },
    { key: 'M', description: 'Dribbling' },
    { key: 'P', description: 'Short Passing' },
    { key: 'R', description: 'Receiving' },
    { key: 'S', description: 'Shooting' },
    { key: 'T', description: 'Transition' },
    { key: 'X', description: 'Set Pieces' },
  ];

  const goalKeeperKeys = [
    { key: 'S', description: 'Shot Stopping' },
    { key: 'X', description: 'Set Pieces' },
    { key: 'P', description: 'Positioning' },
    { key: 'C', description: 'Communication' },
    { key: 'K', description: 'Corner Kicks' },
    { key: 'Y', description: 'Goal Kicks' },
    { key: 'D', description: 'Distribution ' },
    { key: 'R', description: 'Cross Defending' },
    { key: 'O', description: 'One one One Defending' },
  ];

  const hightlightKeys = [
    { key: 'A', description: 'Highlight Attacking' },
    { key: 'D', description: 'Highlight Defending' },
    { key: 'G', description: 'Goal Scored' },
    { key: 'P', description: 'Pass Made' },
  ];

  document.addEventListener("keydown", function (event) {
    if (event.altKey && event.shiftKey && event.key.toLowerCase() === "f") {
      altShiftFPressed = true;
      event.preventDefault();
    } else if (event.altKey && event.shiftKey && event.key.toLowerCase() === "g") {
      altShiftGPressed = true;
      event.preventDefault();
    } else if (event.altKey && event.shiftKey && event.key.toLowerCase() === "h") {
      altShiftHPressed = true;
      event.preventDefault();
    }
    
    else if ( altShiftFPressed && fieldPlayerKeys.findIndex(key => key.key === event.key.toUpperCase()) >= 0 ) {
      altShiftFPressed = false;
      event.preventDefault();

      const key = fieldPlayerKeys.find(key => key.key === event.key.toUpperCase());
      doCopy(`${document.getElementsByTagName('video')[0].currentTime.toFixed(2)} - ${key.description}`);
    }

    else if ( altShiftGPressed && goalKeeperKeys.findIndex(key => key.key === event.key.toUpperCase()) >= 0 ) {
      altShiftGPressed = false;
      event.preventDefault();

      const key = goalKeeperKeys.find(key => key.key === event.key.toUpperCase());
      doCopy(`${document.getElementsByTagName('video')[0].currentTime.toFixed(2)} - ${key.description}`);
    }

    else if ( altShiftHPressed && hightlightKeys.findIndex(key => key.key === event.key.toUpperCase()) >= 0 ) {
      altShiftHPressed = false;
      event.preventDefault();

      const key = hightlightKeys.find(key => key.key === event.key.toUpperCase());
      doCopy(`${document.getElementsByTagName('video')[0].currentTime.toFixed(2)} - ${key.description}`);
    }
    
    else {
      altShiftFPressed = false;/*  */
      altShiftGPressed = false;
      altShiftHPressed = false;
    }
  });

  document.addEventListener("keyup", function (event) {
    if (event.key === "Alt" || event.key === "Shift") {
      altShiftFPressed = false;
      altShiftGPressed = false;
      altShiftHPressed = false;
    }
  });
})(jQuery);
