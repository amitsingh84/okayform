<template>
     <div class="allRecentForm">
                      <h4>Recent Forms</h4>
                      <div class="recentFormCol">
                        <div class="recentFromColRow">
                        <p class="recentFormTitle"><a href="#">Registration Form</a> </p>
                        <p class="recentFormTime">5:10 am</p>
                      </div>
                      <div class="recentFromEdit">
                        <img src="../../../../assets/imgs/edit.png" alt="edit">
                      </div>
                        </div>
                        <div class="recentFormCol">
                        <div class="recentFromColRow">
                        <p class="recentFormTitle"><a href="#">Registration Form</a> </p>
                        <p class="recentFormTime">5:10 am</p>
                      </div>
                      <div class="recentFromEdit">
                        <img src="../../../../assets/imgs/edit.png" alt="edit">
                      </div>
                        </div>
                        <div class="recentFormCol">
                        <div class="recentFromColRow">
                        <p class="recentFormTitle"><a href="#">Registration Form</a> </p>
                        <p class="recentFormTime">5:10 am</p>
                      </div>
                      <div class="recentFromEdit">
                        <img src="../../../../assets/imgs/edit.png" alt="edit">
                      </div>
                        </div>
                        <div class="recentFormCol">
                        <div class="recentFromColRow">
                        <p class="recentFormTitle"><a href="#">Registration Form</a> </p>
                        <p class="recentFormTime">5:10 am</p>
                      </div>
                      <div class="recentFromEdit">
                        <img src="../../../../assets/imgs/edit.png" alt="edit">
                      </div>
                        </div>

                    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.allRecentForm {
    padding: 19px;
    background: #f4f4f9;
    border-radius: 15px;
    padding-top: 0;
}
.allRecentForm h4 {
    font-family: var( --font-family-roboto-slab);
    border-bottom: 2px solid var(--secondary-color);
    padding-bottom: 10px;
}
.allRecentForm h4 {
    padding-top: 19px;
    position: sticky;
    top: 0;
    background: #f4f4f9;
    z-index: 9;
}
.recentFormCol {
   display: flex;
    align-items: flex-end;
    padding: 10px 0;
    border-bottom: 1px solid var(--secondary-color-opacity);
}
.recentFormCol > div {
    margin-left: 17px;
}

::-webkit-scrollbar {
    display: none;
}
.recentFromColRow {
    flex: 1;
}
p.recentFormTitle a{
   font-size: 1.4rem;
    color: var(--secondary-color);
    font-weight: 600;
}
p.recentFormTitle {
    margin-bottom: 0;
}
p.recentFormTime {
    font-size: 1.2rem;
    font-family: var( --font-family-roboto-slab);
    margin-bottom: 0;
}
.recentFromEdit img {
    width: 20px;
    filter: opacity(0.4);
}
.recentFromEdit {
    flex: .3;
}
</style>