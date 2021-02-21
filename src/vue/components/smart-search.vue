<template>
  <div class="smart-search__wrapper">
    <button class="smart-search__show-snap">
      <svg class="smart-search__show-snap-svg">
        <use href="#search" />
      </svg>
    </button>
    <div class="smart-search">
      <label class="smart-search__label">
        <input type="text" placeholder="Поиск" class="smart-search__input"/>
        <button class="smart-search__submit">
          <svg class="smart-search__submit-svg">
            <use href="#search" />
          </svg>
        </button>
        <ul class="smart-search__result-list">
          <li class="result-list__item">
            <a href="#" class="result-list__link">
              Дорожные знаки
            </a>
          </li>
        </ul>
      </label>
      <button class="smart-search__close-snap">
        <svg class="smart-search__close-snap-svg">
          <use href="#close" />
        </svg>
      </button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'SmartSearch'
}
</script>

<style lang="less" scoped>
  .smart-search__wrapper {
    position: absolute;
    top: 10px;
    left: 0px;

    width: 100%;
    height: 40px;


    background: #2B2831;
  }

  .smart-search__show-snap {
    widows: 24px;
    height: 24px;

    display: none;
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
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .smart-search__label {
    position: relative;
    width: 244px;
    height: 100%;
    margin-right: 24px;

    display: flex;
  }

  .smart-search__input {
    width: 100%;
    padding: 8px 48px 8px 16px;
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
    display: none;
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
</style>