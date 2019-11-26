<template>
  <div class="search-nav views-exposed-form bef-exposed-form" >
    <div class="form-row">
      <fieldset class="form-item-query form-group col-auto">
        <label for="globalSearch">{{$t('Search')}}</label>
        <input v-model="query" :placeholder="$t('Search')" id="globalSearch" class="form-autocomplete form-text form-control ui-autocomplete-input" type="text"/>

      </fieldset>
      <div @click="search()" class="input-group-prepend p-0">
          <span class="input-group-text" id="inputGroupPrepend">
            <Icon name="search"/>
          </span>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@components/Icon'

const SEARCH_URL = process.env.VUE_APP_SEARCH_URL

export default {
  name      : 'SearchNav',
  components: { Icon },
  methods   : { search },
  data
}

function data(){ return { query: '' } }

function search(){ window.location.href=`${SEARCH_URL}${this.query}` }
</script>

<style scoped>
.form-row{position: relative;}
.search-nav{ margin-left: 1em; }
.input-group-text{
  background-color: #003a2e;
  border: none;
}
.input-group-text img { width:67%; }
input.form-autocomplete{ background-image: none !important; }

@media screen and (max-width: 768px) {
  .search-nav{ margin-left: 0; }
  .form-text{ width:100% !important; display: inline-block;}
  .input-group-prepend{
    position: absolute;
    right:0;
    top:5px;
  }
}
</style>