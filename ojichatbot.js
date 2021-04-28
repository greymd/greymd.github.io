(() => {
  var YOUR_NAME = "";
  const TALK = document.getElementById('talk');
  const MSGBOX = document.getElementById('msgbox');
  const MSGBUTTON = document.getElementById("msg_button");
  const CLOSEBUTTON = document.getElementById("ojiClose");
  const OPENBUTTON = document.getElementById("btOjichat");
  const CHATWINDOW = document.getElementById("ojiWindow");

  function spawnOjichat() {
    let state = {
      targetName: YOUR_NAME,
      emojiNum: 4,
      punctuationLevel: 0,
    }
    let res
    if (global.unkochat) {
      res = unkochat(state)
    } else {
      res = ojichat(state);
    }
    addOjisanMsg(res.result);
  }

  function addOjisanMsg(message) {
    let elem = document.createElement("div");
    let childelem = document.createElement("span");
    elem.setAttribute("class", "oji_msg");
    childelem.innerHTML = message;
    elem.appendChild(childelem);
    TALK.appendChild(elem);
    let contentPosition = elem.getBoundingClientRect();
    TALK.scrollTo(0, contentPosition.bottom);
  }

  function addYourMsg(message) {
    let elem = document.createElement("div");
    let childelem = document.createElement("span");
    elem.setAttribute("class", "your_msg");
    childelem.innerHTML = message;
    elem.appendChild(childelem);
    TALK.appendChild(elem);
    let contentPosition = elem.getBoundingClientRect();
    TALK.scrollTo(0, contentPosition.bottom);
  }

  function msgClick() {
    event.preventDefault();
    // メッセージ登録
    if (MSGBOX.value !== '') {
      addYourMsg(MSGBOX.value);
    }
    MSGBOX.value = '';
    setTimeout(spawnOjichat, 500);
  }

  // https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
  // 一番最初の名前登録
  function firstMsgClick() {
    // 13 番はエンターキー
    event.preventDefault();
    // メッセージ登録
    if (MSGBOX.value !== '') {
      addYourMsg(MSGBOX.value);
    }
    // 更に名前として登録
    YOUR_NAME = MSGBOX.value;
    // 空にする
    MSGBOX.value = '';
    setTimeout(spawnOjichat, 500);
    // MSGBOX.removeEventListener('keyup', firstMsgClick);
    MSGBUTTON.removeEventListener('click', firstMsgClick);
    // MSGBOX.addEventListener('keyup', msgClick);
    MSGBUTTON.addEventListener('click', msgClick);
  }

  function clickCloseButton() {
    CHATWINDOW.setAttribute("class", 'ojiClosed');
    OPENBUTTON.setAttribute("class", 'btOjichat ojiShown');
  }

  function clickOpenButton() {
    if (!global.ojichat) {
      loadWasm()
    }
    CHATWINDOW.setAttribute("class", 'ojiOpened');
    OPENBUTTON.setAttribute("class", 'btOjichat ojiHidden');
  }

  function loadWasm() {
    const go = new Go();
    fetch("./main.wasm").then(response =>
      response.arrayBuffer()
    ).then(bytes =>
      WebAssembly.instantiate(bytes, go.importObject)
    ).then(result =>
      go.run(result.instance)
    );
    TALK.removeChild(document.getElementById("loading"));
  }
  MSGBUTTON.addEventListener('click', firstMsgClick);
  CLOSEBUTTON.addEventListener('click', clickCloseButton);
  OPENBUTTON.addEventListener('click', clickOpenButton);
})();
