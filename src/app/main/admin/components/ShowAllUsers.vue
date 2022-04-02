<template>
     <div class="allUserData">
                  <div class="allDataSubjectCounter">
                    <p>230</p>
                    <p class="allDataSubjectName">Users</p>
                  </div>
                  <div class="dataSubjectImg">
                    <img
                      src="../../../../assets/imgs/user1.png"
                      alt="user1"
                      class="allDataSubjectCounterImg"
                    />
                  </div>

                  <div class="d-flex align-items-end mb-4">
                    <div class="DataSubjectCounter">
                      <p>02</p>
                      <p class="DataSubjectCounterDesc">Data Subjects</p>
                    </div>

                    <div class="allUserImg">
                      <img
                        src="../../../../assets/imgs/user2.png"
                        alt="user2"
                      />
                    </div>
                  </div>
                  <div class="d-flex align-items-end mb-4">
                    <div class="DataSubjectCounter">
                      <p>02</p>
                      <p class="DataSubjectCounterDesc">Data Subjects</p>
                    </div>

                    <div class="allUserImg">
                      <img
                        src="../../../../assets/imgs/user2.png"
                        alt="user2"
                      />
                    </div>
                  </div>
                  <div class="d-flex align-items-end mb-4">
                    <div class="DataSubjectCounter">
                      <p>02</p>
                      <p class="DataSubjectCounterDesc">Data Subjects</p>
                    </div>

                    <div class="allUserImg">
                      <img
                        src="../../../../assets/imgs/user2.png"
                        alt="user2"
                      />
                    </div>
                  </div>
                </div>
</template>

<script>
export default {
    
}
</script>
<style scoped>

.allUserData {
  background: #fff;
  margin-top: 11px;
  border-radius: 15px;
  padding-top: 30px;
  height: calc(100vh - 155px);
  margin-left: 1rem;
  /* margin-right: 2.4rem;  */
}
.allDataSubjectCounter {
  text-align: center;
}

.allDataSubjectCounter p {
  font-size: 3rem;
  font-weight: 800;
  color: var(--primary-color);
  margin-bottom: 0;
  line-height: 30px;
  font-family: var( --font-family-roboto-slab);
}
p.allDataSubjectName {
  font-size: 1.7rem;
}
.dataSubjectImg {
  text-align: center;
  margin: 39px 0;
}
.dataSubjectImg img {
  width: 84px;
}
.DataSubjectCounter p {
  font-size: 2.5rem;
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 0;
  text-align: center;
  font-family: var( --font-family-roboto-slab);
}

p.DataSubjectCounterDesc {
  font-size: 1.5rem;
  line-height: 15px;
}
.DataSubjectCounter {
  flex: 1;
}
.allUserImg img {
  width: 48px;
}
.allUserImg {
  display: flex;
  /* justify-content: right; */
  flex: 0.5;
}
</style>