<template>
  <div class="smart-search__wrapper"
  :class="{'smart-search__wrapper--hide': !isOpen}">
    <button @click="smartSearchToggle" 
    v-show="!isOpen"
     class="smart-search__show-snap">
      <svg class="smart-search__show-snap-svg">
        <use href="#search" />
      </svg>
    </button>
    <div v-if="isOpen" class="smart-search">
      <div class="label-and-result-wrapper">
        <label class="smart-search__label">
        <input type="text" placeholder="Поиск" class="smart-search__input" v-model="inputValue" v-focus />
        <button class="smart-search__submit">
          <svg class="smart-search__submit-svg">
            <use href="#search" />
          </svg>
        </button>
      </label>
      <ul v-if="inputValue.trim()" class="smart-search__result-list">
          <li class="result-list__item">
            <a href="#" class="result-list__link">
              Дорожные знаки
            </a>
          </li>
          <li v-for="item in items" :key="item" class="result-list__item">
            <a href="#" class="result-list__link">
              {{item}}
            </a>
          </li>
        </ul>
      </div>
      <button @click="smartSearchToggle" class="smart-search__close-snap">
        <svg class="smart-search__close-snap-svg">
          <use href="#close" />
        </svg>
      </button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'SmartSearch',
  data() {
    return {
      inputValue: '',
      isOpen: false,
      items: []
    }
  },
  watch: {
    inputValue() {
      this.debounceGetItems()
    }
  },
  created () {
    this.debounceGetItems = this.debounce(this.getItems, 1000)
  },
  methods: {
    smartSearchToggle() {
      this.isOpen = !this.isOpen
      this.isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = ''
    },

    getItems () {
      if(!this.inputValue.trim()) {
        return
      }
      let xhr = new XMLHttpRequest()
      let url = new URL('http://socpnz.onlinebees.ru/api/search')
      url.searchParams.set('phrase', `${this.inputValue.trim()}`)
      xhr.open('GET', url)
      xhr.send()
      console.log('request', this.inputValue.trim())
      xhr.onload = function() {
        if (xhr.status != 200) {
          console.log(`${xhr.status}: ${xhr.statusText}`);
        } else {
          console.log(xhr.responseXML);
        }
      }
    },

    debounce(func, ms) {
      let isCoolDown = false,
      savedArgs,
      savedThis;

      function wrapper() {

        if (isCoolDown) { 
          savedArgs = arguments
          savedThis = this
          return
        }

        func.apply(this, arguments)

        isCoolDown = true

        setTimeout(function() {
          isCoolDown = false
          if (savedArgs) {
            wrapper.apply(savedThis, savedArgs)
            savedArgs = savedThis = null
          }
        }, ms)
      }

      return wrapper
    }
  },
  
  directives: {
  focus: {
    inserted: function (el) {
      el.focus()
    }
  }
}
}
</script>

<style lang="less" scoped>
  .smart-search__wrapper {
    position: fixed;
    top: 0px;
    left: 0px;

    width: 100%;
    height: 56px;
    padding: 0 16px;

    display: flex;
    justify-content: space-between;
    align-items: center;


    background: #2B2831;
  }

    .smart-search__wrapper--hide {
    position: static;
    width: 24px;
    height: 24px;
    padding: 0;

    overflow: hidden;
    filter: none;
  }

  .smart-search__show-snap {
    width: 24px;
    height: 24px;
    padding: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background: transparent;
    cursor: pointer;
    border: none;

    outline: none;
    &:active {
      transform: translateY(1px);
    }
  }

  .smart-search__show-snap-svg {
    width: 24px;
    height: 24px;
  }

  .smart-search {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .label-and-result-wrapper {
    width: 100%;
    margin-right: 24px;
  }

  .smart-search__label {
    position: relative;
    width: 100%;
    height: 40px;

    display: flex;
  }

  .smart-search__input {
    width: 100%;
    padding: 8px 48px 8px 16px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #fff;

    background: transparent;
    border: 1px solid #858585;
    border-radius: 20px;

    outline: none;
  }

  .smart-search__submit {
    position: absolute;
    top: 8px;
    right: 16px;
    width: 24px;
    height: 24px;
    padding: 0px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: transparent;
    border: none;
    cursor: pointer;
  }

  .smart-search__submit-svg {
    width: 24px;
    height: 24px;

    --svg-fill: #858585;
  }

  .smart-search__result-list {
    position: fixed;
    top: 56px;
    left: 0px;
    width: 100%;
    max-height: 256px;
    margin: 0;
    padding: 0;
    padding-top: 24px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    list-style: none;

    background: #2B2831;
  }

  .result-list__item {
    width: 100%;
    padding: 8px 16px;

    &:hover {
      background: #3A3A47;
    }
  }

  .result-list__link {
    width: 100%;

    display: block;
  }

  .smart-search__close-snap {
    width: 24px;
    height: 24px;
    padding: 0px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: transparent;
    border: none;
    cursor: pointer;
  }

  .smart-search__close-snap-svg {
    width: 24px;
    height: 24px;

    --svg-fill: #858585;
  }

  @media(min-width:1550px) {
    .smart-search__wrapper {
      height: 72px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    .smart-search__wrapper--hide {
      filter: none;
    }

    .smart-search {
      width: 1450px;
      padding: 0 16px;
      margin: 0 auto;
    }

    .label-and-result-wrapper {
      position: relative;
    }
    .smart-search__result-list {
      position: absolute;
      padding-top: 8px;

      box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
</style>