<template>
  <div class="qr-box">
    <img
      class="qr-img"
      src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/PasajRedesign/footer/PasajQR_354x354.webp"
      alt="Turkcell QR"
    />
    <p class="qr-desc">
      QR kodunu taratarak uygulamayı hemen indirebilirsiniz.
      Pasaj ile ilgili tüm işlemlerinizi Turkcell uygulamasından hızlıca gerçekleştirebilirsiniz.
    </p>
  </div>
</template>

<style scoped>
.qr-box {
  display: flex;
  gap: 18px;
  align-items: center;
  justify-content: flex-start;
}

.qr-img {
  width: 110px;
  height: 110px;
  border-radius: 10px;
  background: #fff;
  padding: 10px;
  box-sizing: border-box;
}

.qr-desc {
  margin: 0;
  font-size: 13px;
  line-height: 1.35;
  color: rgba(255, 255, 255, 0.9);
  max-width: 340px;
}
</style>
