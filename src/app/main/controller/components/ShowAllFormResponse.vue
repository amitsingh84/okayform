<template>
    <div class="totalFormCounterRow">
                    <div class="totalFormCount">
                      <p class="totalFormCountName">Total Forms</p>
                      <p class="totalFormCountNumber">02</p>
                    </div>
                    <div class="totalInvitationSent">
                      <p class="totalInvitationSentName">Invitaion Sent</p>
                      <p class="totalInvitationSentNumber">03</p>
                    </div>
                    <div class="totalGetResponse">
                      <p class="totalGetResponseName">Get Response</p>
                      <p class="totalGetResponseNumber">02</p>
                    </div>
                    <div class="totalSubmission">
                      <p class="totalSubmissionName">Total Submission</p>
                      <p class="totalSubmissionNumber">02</p>
                    </div>
                  </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
.totalFormCounterRow {
    display: flex;
    gap: 40px;
}

.totalFormCounterRow > div {
    flex: 1;
    text-align: center;
   height: 130px;
    padding: 14px 0;
    border-radius: 15px;
}

.totalFormCounterRow > div:nth-child(odd) {
    background: var(--tertiary-color);
}

.totalFormCounterRow > div:nth-child(even) {
    background: var(--secondary-color);
}

.totalFormCounterRow p {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--secondary-color);
    font-family: var( --font-family-roboto-slab);
    margin-bottom: 34px;
}

.totalFormCounterRow > div:nth-child(even) p {
    color: #fff;
}
.totalFormCounterRow > div >p:nth-child(2) {
    background: #fff;
    display: inline;
    padding: 17px;
    border-radius: 50%;
    color: var(--secondary-color) !important;
}
</style>