<template>
     <div class="footerStyleWithLogo">
          <div class="passwordProtectFooterImg">
            <img src="../../../../assets/imgs/admin/lock.png" alt="" />
          </div>
          <div class="passwordProtectFooterText">
            This form is powerd by the <b>GDPR</b> compliant form editor
            <b>OkForm</b>
          </div>
        </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
.footerStyleWithLogo {
  display: flex; 
    width: 300px;
    margin: auto;
} 
.footerStyleWithLogo img {
  width: 24px;
  margin-right: 10px;
}

.passwordProtectFooterText,
.passwordProtectFooterText b {
  font-size: 1.4rem;
  font-family: var(--font-family-roboto-slab);
}
.passwordProtectFooterText {
    text-align: left;
}
</style>