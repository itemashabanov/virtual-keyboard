const keyCodes = [
  [
    {
      isLetter: ['RU'],
      code: 'Backquote',
      ENG: '`~',
      RU: 'ёЁ',
    },
    {
      code: 'Digit1',
      ENG: '1!',
      RU: '1!',
    },
    {
      code: 'Digit2',
      ENG: '2@',
      RU: '2"',
    },
    {
      code: 'Digit3',
      ENG: '3#',
      RU: '3№',
    },
    {
      code: 'Digit4',
      ENG: '4$',
      RU: '4;',
    },
    {
      code: 'Digit5',
      ENG: '5%',
      RU: '5%',
    },
    {
      code: 'Digit6',
      ENG: '6^',
      RU: '6:',
    },
    {
      code: 'Digit7',
      ENG: '7&',
      RU: '7?',
    },
    {
      code: 'Digit8',
      ENG: '8*',
      RU: '8*',
    },
    {
      code: 'Digit9',
      ENG: '9(',
      RU: '9(',
    },
    {
      code: 'Digit0',
      ENG: '0)',
      RU: '0)',
    },
    {
      code: 'Minus',
      ENG: '-_',
      RU: '-_',
    },
    {
      code: 'Equal',
      ENG: '=+',
      RU: '=+',
    },
    {
      type: 'sys',
      code: 'Backspace',
      ENG: 'Backspace',
      RU: 'Backspace',
    },
  ],
  [
    {
      type: 'sys',
      code: 'Tab',
      ENG: '&#8594;|',
      RU: '&#8594;|',
    },
    {
      isLetter: ['RU', 'ENG'],
      code: 'KeyQ',
      ENG: 'qQ',
      RU: 'йЙ',
    },
    {
      isLetter: ['RU', 'ENG'],
      code: 'KeyW',
      ENG: 'wW',
      RU: 'цЦ',
    },
    {
      isLetter: ['RU', 'ENG'],
      code: 'KeyE',
      ENG: 'eE',
      RU: 'уУ',
    },
    {
      isLetter: ['RU', 'ENG'],
      code: 'KeyR',
      ENG: 'rR',
      RU: 'кК',
    },
    {
      isLetter: ['RU', 'ENG'],
      code: 'KeyT',
      ENG: 'tT',
      RU: 'еЕ',
    },
    {
      isLetter: ['RU', 'ENG'],
      code: 'KeyY',
      ENG: 'yY',
      RU: 'нН',
    },
    {
      isLetter: ['RU', 'ENG'],
      code: 'KeyU',
      ENG: 'uU',
      RU: 'гГ',
    },
    {
      isLetter: ['RU', 'ENG'],
      code: 'KeyI',
      ENG: 'iI',
      RU: 'шШ',
    },
    {
      isLetter: ['RU', 'ENG'],
      code: 'KeyO',
      ENG: 'oO',
      RU: 'щЩ',
    },
    {
      isLetter: ['RU', 'ENG'],
      code: 'KeyP',
      ENG: 'pP',
      RU: 'зЗ',
    },
    {
      isLetter: ['RU'],
      code: 'BracketLeft',
      ENG: '[{',
      RU: 'хХ',
    },
    {
      isLetter: ['RU'],
      code: 'BracketRight',
      ENG: ']}',
      RU: 'ъЪ',
    },
  ],
  [
    {
      type: 'sys',
      code: 'CapsLock',
      ENG: '&#x21ea;',
      RU: '&#x21ea;',
    },
    {
      isLetter: ['RU', 'ENG'],
      code: 'KeyA',
      ENG: 'aA',
      RU: 'фФ',
    },
    {
      isLetter: ['RU', 'ENG'],
      code: 'KeyS',
      ENG: 'sS',
      RU: 'ыЫ',
    },
    {
      isLetter: ['RU', 'ENG'],
      code: 'KeyD',
      ENG: 'dD',
      RU: 'вВ',
    },
    {
      isLetter: ['RU', 'ENG'],
      code: 'KeyF',
      ENG: 'fF',
      RU: 'аА',
    },
    {
      isLetter: ['RU', 'ENG'],
      code: 'KeyG',
      ENG: 'gG',
      RU: 'пП',
    },
    {
      isLetter: ['RU', 'ENG'],
      code: 'KeyH',
      ENG: 'hH',
      RU: 'рР',
    },
    {
      isLetter: ['RU', 'ENG'],
      code: 'KeyJ',
      ENG: 'jJ',
      RU: 'оО',
    },
    {
      isLetter: ['RU', 'ENG'],
      code: 'KeyK',
      ENG: 'kK',
      RU: 'лЛ',
    },
    {
      isLetter: ['RU', 'ENG'],
      code: 'KeyL',
      ENG: 'lL',
      RU: 'дД',
    },
    {
      isLetter: ['RU'],
      code: 'Semicolon',
      ENG: ';:',
      RU: 'жЖ',
    },
    {
      isLetter: ['RU'],
      code: 'Quote',
      ENG: '\'"',
      RU: 'эЭ',
    },
    {
      code: 'Backslash',
      ENG: '\\|',
      RU: '\\/',
    },
    {
      type: 'sys',
      code: 'Enter',
      ENG: '&#x23CE;',
      RU: '&#x23CE;',
    },
  ],
  [
    {
      type: 'sys',
      code: 'ShiftLeft',
      ENG: '⇧',
      RU: '⇧',
    },
    {
      code: 'IntlBackslash',
      ENG: '\\|',
      RU: '\\/',
    },
    {
      isLetter: ['RU', 'ENG'],
      code: 'KeyZ',
      ENG: 'zZ',
      RU: 'яЯ',
    },
    {
      isLetter: ['RU', 'ENG'],
      code: 'KeyX',
      ENG: 'xX',
      RU: 'чЧ',
    },
    {
      isLetter: ['RU', 'ENG'],
      code: 'KeyC',
      ENG: 'cC',
      RU: 'сС',
    },
    {
      isLetter: ['RU', 'ENG'],
      code: 'KeyV',
      ENG: 'vV',
      RU: 'мМ',
    },
    {
      isLetter: ['RU', 'ENG'],
      code: 'KeyB',
      ENG: 'bB',
      RU: 'иИ',
    },
    {
      isLetter: ['RU', 'ENG'],
      code: 'KeyN',
      ENG: 'nN',
      RU: 'тТ',
    },
    {
      isLetter: ['RU', 'ENG'],
      code: 'KeyM',
      ENG: 'mM',
      RU: 'ьЬ',
    },
    {
      isLetter: ['RU'],
      code: 'Comma',
      ENG: ',<',
      RU: 'бБ',
    },
    {
      isLetter: ['RU'],
      code: 'Period',
      ENG: '.>',
      RU: 'юЮ',
    },
    {
      code: 'Slash',
      ENG: '/?',
      RU: '.,',
    },
    {
      type: 'sys',
      code: 'ArrowUp',
      ENG: '▲',
      RU: '▲',
    },
    {
      type: 'sys',
      code: 'ShiftRight',
      ENG: '⇧',
      RU: '⇧',
    },
  ],
  [
    {
      type: 'sys',
      code: 'ControlLeft',
      ENG: 'Ctrl',
      RU: 'Ctrl',
    },
    {
      type: 'sys',
      code: 'AltLeft',
      ENG: 'Alt',
      RU: 'Alt',
    },
    {
      code: 'Space',
      ENG: ' ',
      RU: ' ',
    },
    {
      type: 'sys',
      code: 'AltRight',
      ENG: 'Alt',
      RU: 'Alt',
    },
    {
      type: 'sys',
      code: 'ControlRight',
      ENG: 'Ctrl',
      RU: 'Ctrl',
    },
    {
      type: 'sys',
      code: 'ArrowLeft',
      ENG: '◄',
      RU: '◄',
    },
    {
      type: 'sys',
      code: 'ArrowDown',
      ENG: '▼',
      RU: '▼',
    },
    {
      type: 'sys',
      code: 'ArrowRight',
      ENG: '►',
      RU: '►',
    },
  ],
];

class Keyboard {
  constructor() {
    this.lang = window.localStorage.getItem('lang') || 'ENG';
    this.elements = {
      lang: null,
      main: null,
      textField: null,
      keyboard: null,
      keys: [],
      info: null,
      capsLock: 0,
    };
    this.pressed = new Set();
    this.changeLang = ['AltLeft', 'ControlLeft'];
    this.keysArray = keyCodes;
  }

  init() {
    this.elements.lang = document.createElement('p');
    this.elements.main = document.createElement('main');
    this.elements.textField = document.createElement('textarea');
    this.elements.keyboard = document.createElement('section');
    this.elements.info = document.createElement('p');

    this.elements.lang.classList.add('lang-marker');
    this.elements.textField.classList.add('text-field');
    this.elements.keyboard.classList.add('keyboard');
    this.elements.info.classList.add('description');

    this.elements.lang.innerText = this.lang;
    this.elements.info.insertAdjacentHTML('afterbegin', 'Use <i>ctrl + alt(opt)</i> for changin\' keyboard lang');

    this.rewriteKeys();

    this.elements.main.append(
      this.elements.lang,
      this.elements.textField,
      this.elements.keyboard,
      this.elements.info,
    );

    document.body.appendChild(this.elements.main);
  }

  addKeys(code, state) {
    return this.keysArray.map((r) => r.map((e) => {
      const x = document.createElement('button');
      x.classList.add('key');
      x.classList.add(e.code, e.type);
      if (e.code === 'Space') {
        x.classList.add('space');
      }
      console.log(this.capsLock);
      if ((code === 'ShiftLeft' || code === 'ShiftRight') && state) {
        x.insertAdjacentHTML('afterbegin', !e.type ? e[this.lang].slice(1, 2) : e.ENG);
      } else if (this.capsLock) {
        let key;
        if (e.isLetter && e.isLetter.includes(this.lang)) {
          key = e[this.lang].slice(1, 2);
        } else if (!e.type) {
          key = e[this.lang].slice(0, 1);
        } else key = e[this.lang];
        x.insertAdjacentHTML('afterbegin', key);
      } else {
        x.insertAdjacentHTML('afterbegin', !e.type ? e[this.lang].slice(0, 1) : e.ENG);
      }
      return x;
    }));
  }

  rewriteKeys(code, state) {
    this.elements.keys = this.addKeys(code, state);
    if (document.getElementsByClassName('row').length) {
      [...document.getElementsByClassName('row')].map((r, i) => {
        [...r.getElementsByClassName('key')].map((e, j) => {
          e.innerHTML = this.elements.keys[i][j].innerHTML;
          return e;
        });
        return 0;
      });
    } else {
      this.elements.keys.map((e) => {
        const row = document.createElement('div');
        row.classList.add('row');
        e.map((r) => row.appendChild(r));
        this.elements.keyboard.appendChild(row);
        return e;
      });
    }
  }

  changingLang() {
    for (let e = 0; e < this.changeLang.length; e += 1) {
      if (!this.pressed.has(this.changeLang[e])) {
        return 0;
      }
    }
    this.pressed.clear();
    this.lang = this.lang === 'ENG' ? 'RU' : 'ENG';
    this.elements.lang.innerText = this.lang;
    window.localStorage.setItem('lang', this.lang);
    this.rewriteKeys();
    return 0;
  }

  sysKeyHandler(keyCode) {
    switch (keyCode) {
      case 'CapsLock':
        this.capsLock = this.capsLock ? 0 : 1;
        if (!this.capsLock) {
          document.querySelector('.CapsLock').classList.remove('key__active');
        }
        this.rewriteKeys();
        break;
      case 'ShiftLeft':
        this.rewriteKeys(keyCode, 1);
        break;
      case 'ShiftRight':
        this.rewriteKeys(keyCode, 1);
        break;
      case 'ArrowUp':
        this.elements.textField.value += '▲';
        break;
      case 'ArrowDown':
        this.elements.textField.value += '▼';
        break;
      case 'ArrowLeft':
        this.elements.textField.value += '◄';
        break;
      case 'ArrowRight':
        this.elements.textField.value += '►';
        break;
      case 'Enter':
        this.elements.textField.value += '\n';
        break;
      case 'Tab':
        this.elements.textField.value += '\t';
        break;
      case 'Backspace':
        this.elements.textField.value = this.elements.textField.value.toString().slice(0, -1);
        break;
      default:
    }
  }

  bindListener() {
    document.addEventListener('keydown', (event) => {
      event.preventDefault();
      this.pressed.add(event.code);

      if (this.keysArray.flat().filter((e) => e.code === event.code).length) {
        document.querySelector(`.key.${event.code}`).classList.add('key__active');
      } else return 0;

      this.changingLang();

      this.sysKeyHandler(event.code);

      const key = this.keysArray.flat().filter((e) => e.code === event.code);
      if (!key[0].type) {
        this.elements.textField.value += document.querySelector(`.${event.code}`).innerHTML;
      }

      return 0;
    });

    document.addEventListener('keyup', (event) => {
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        this.rewriteKeys(event.code, 0);
      }
      this.pressed.delete(event.code);
      if (this.keysArray.flat().filter((e) => e.code === event.code).length) {
        document.querySelector(`.key.${event.code}`).classList.remove('key__active');
      } else return 0;

      return 0;
    }, false);

    document.addEventListener('mousedown', (event) => {
      const classList = [...event.target.classList];

      if (classList.includes('CapsLock')) {
        document.querySelector('.CapsLock').classList.add('key__active');
      }

      this.sysKeyHandler(classList[1]);

      if (classList.includes('key') && !classList.includes('sys')) {
        this.elements.textField.value += event.target.innerText;
      }
    }, false);

    document.addEventListener('mouseup', (event) => {
      const classList = [...event.target.classList];

      if (classList.includes('ShiftLeft') || classList.includes('ShiftRight')) {
        this.rewriteKeys('ShiftLeft', 0);
      }
    }, false);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const keyboard = new Keyboard();
  keyboard.init();
  keyboard.bindListener();
});
