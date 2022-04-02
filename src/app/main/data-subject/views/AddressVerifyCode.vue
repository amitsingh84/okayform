<template>
    <div class="addressVerifyCode">
        <header-slot/>
        <div class="addressVerifyBlock">
            <div class="addressVerifyBox">
                <h4>Address Verification</h4>
                <p>Please Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi maxime nihil ipsum aut obcaecati tempora atque labore, sapiente, blanditiis porro laborum est dicta, dignissimos alias nesciunt saepe quia animi magni!</p>

                <div class="addressVerifyRow">
                    <div>

                    <input type="text" name="AdderssVerificationCode" id="AdderssVerificationCode" placeholder="Enter Letter Verification Code">
                    </div>
                    <div>
                        <a href="#" class="solidBtn">Resend</a>
                    </div>

                </div>
                <div class="buttonStyle">

                <a href="#" class="solidBtn">Verify</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderSlot from '../../../slots/HeaderSlot.vue'
export default {
    components:{HeaderSlot}
}
</script>

<style scoped>
.addressVerifyBlock {
    height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 480px;
    margin: auto;
}

.addressVerifyBox {
    padding: 60px 30px;
    border: 1px solid;
    border-radius: 7px;
}

.addressVerifyRow {
    display: flex;
    gap: 19px;
    width: 80%;
    margin: auto;
}

.addressVerifyRow > div:nth-child(2) {
    flex: .2;
}
 
.addressVerifyRow > div {
    flex: 1;
}

.addressVerifyRow input {
   width: 100%;
    height: 40px;
    border-radius: 7px;
    margin-top: 10px;
    border: 1px solid;
    font-size: 1.3rem;
    padding-left: 10px;
}
.addressVerifyBox h4 {
    text-align: center;
    font-weight: 700;
}
.addressVerifyBox p {
    font-size: 1.4rem;
    color: var(--primary-color);
    margin-top: 26px;
    border-bottom: 1px solid gray;
    padding-bottom: 14px;
    margin-bottom: 48px;
}
.buttonStyle{
    width: 80%;
    margin: auto;
    margin-top: 60px;
    text-align: center;
}
</style>