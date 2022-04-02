<template>
  <div class="controllerDashSearch">
    <div class="controllerSearchRow">
      <div class="userDetails">
        <p>{{ title ? title : "Manage Form" }}</p>
      </div>

      <div class="searchOptions">
        <!-- <span
          ><img src="../../../../assets/imgs/search.png" alt="search" />
          <input
            type="search"
            name="controllerSearch"
            id="controllerSearch"
            placeholder="Search in My Froms"
        /></span> -->
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'AdminSearch',
  data() {
    return {};
  },
  props: ["title","button"],
};
</script>
<style scoped>
.controllerSearchRow {
  display: flex;
  padding: 8px 17px 8px 10px;
  align-items: center;
}
.controllerSearchRow > div {
  flex: 1;
}

.controllerSearchRow input {
  height: 33px;
  padding-left: 45px;
  border-radius: 7px;
  border: 1px solid #a0a5c5bd;
  font-size: 1.4rem;
  font-weight: 500;
  outline: none;
}

.controllerDashSearch {
  border-bottom: 2px solid #a0a5c5;
}
.controllerSearchRow img {
  position: absolute;
  width: 16px;
  top: -4px;
  left: 19px;
}
.controllerSearchRow span {
  position: relative;
}
/* .userDetails p {
  text-align: center;
} */
.searchOptions {
  margin-left: auto;
  text-align: right;
}
.userDetails p {
  margin-bottom: 0;
  font-size: 1.84rem;
  color: var(--primary-color);
  font-family: var(--font-family-roboto-slab);
  font-weight: 700;
}
</style>
