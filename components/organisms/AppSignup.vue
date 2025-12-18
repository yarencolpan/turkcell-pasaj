<template>
  <div class="page">
    <div class="topbar">
      <AtomsBackIconButton class="back" @click="goBack" />
      <div class="logoBadge">
        <img
          src="https://fastlogin.com.tr/fast_static/assets/images/101200_logo_v2.png?v=202409-last"
          alt="FastLogin"
          height="40"
        />
      </div>
      <div class="rightSpacer"></div>
    </div>


    <div class="card">
      <div class="titleRow">
        <span class="checkIcon">✓</span>
        <span class="titleText">HızlıGiriş</span>
      </div>

      <AtomsDividerLine />

      <p class="centerTitle">
        Devam edebilmek için kayıt olmanız<br />
        gerekmektedir.
      </p>

      <div class="form">
        <!-- Name Field Added -->
        <AtomsBaseInput v-model="name" placeholder="Ad Soyad" class="h56" />

        <MoleculesPhoneTwoLineField v-model="phone" />

        <AtomsBaseInput v-model="email" placeholder="E-Posta" class="h56" />

        <MoleculesPasswordInput v-model="pass" placeholder="Hızlı Giriş Şifresi" />

        <p class="help">
          Şifreniz en az 6 karakterden oluşmalıdır.
        </p>

        <MoleculesPasswordInput v-model="pass2" placeholder="Hızlı Giriş Şifresi Tekrar" />

        <p class="help">
          Şifrenizi unutmanız durumunda yeni şifre belirlemek için güvenlik sorusu gerekmektedir.
        </p>

        <AtomsBaseSelect v-model="securityQ" placeholder="Güvenlik Sorusu" class="h56">
          <option value="pet">İlk evcil hayvanınızın adı nedir?</option>
          <option value="city">Doğduğunuz şehir nedir?</option>
          <option value="teacher">İlk öğretmeninizin adı nedir?</option>
        </AtomsBaseSelect>

        <AtomsBaseInput v-model="securityA" placeholder="Güvenlik Sorusunun Cevabı" class="h56" />

        <label class="agree">
          <AtomsBaseCheckbox v-model="agree" />
          <span><b>Katılım Koşullarını</b> onaylıyorum.</span>
        </label>

        <div v-if="error" class="error-msg">{{ error }}</div>

        <AtomsBaseButton class="primary" @click="onSubmit">
           <span v-if="userStore.loading">Kayıt Yapılıyor...</span>
           <span v-else>Kayıt Ol</span>
        </AtomsBaseButton>
      </div>
    </div>

    <div class="bottomLinks">
      <a href="#" @click.prevent>Aydınlatma Metni ve Çerez</a>
      <a href="#" @click.prevent>Hakkında</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from '~/stores/user';

const userStore = useUserStore();
const router = useRouter();

const name = ref("");
const phone = ref("");
const email = ref("");
const pass = ref("");
const pass2 = ref("");
const securityQ = ref("");
const securityA = ref("");
const agree = ref(true);
const error = ref("");

function goBack() {
  router.back();
}

async function onSubmit() {
  error.value = "";
  if (!name.value || !email.value || !pass.value) {
    error.value = "Lütfen zorunlu alanları doldurun (Ad, E-posta, Şifre).";
    return;
  }

  if (pass.value !== pass2.value) {
    error.value = "Şifreler eşleşmiyor.";
    return;
  }

  if (!agree.value) {
    error.value = "Lütfen katılım koşullarını onaylayın.";
    return;
  }

  try {
    // Calling store register
    await userStore.register(email.value, pass.value, name.value);
    router.push('/');
  } catch (e) {
    error.value = "Kayıt hatası: " + e.message;
  }
}
</script>

<style scoped>
.page{
  min-height:100vh;
  background: #f0f0f0;
  padding: 16px 14px 22px;
}

.topbar{
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  align-items: center;
  max-width: 720px;
  margin: 0 auto 10px;
}

.back{
  justify-self: start;
}

.logoBadge{
  justify-self: center;
}

.rightSpacer{
  width: 40px;
  height: 40px;
}

.card{
  max-width: 720px;
  margin: 0 auto;
  background:#fff;
  border-radius: 22px;
  padding: 24px 30px;
  box-shadow: 0 18px 45px rgba(0,0,0,.10);
}
.titleRow{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 8px 0 14px;
}

.checkIcon{
  color: #2f57d8;
  font-size: 22px;
  font-weight: 900;
  line-height: 1;
}

.titleText{
  font-size: 22px;
  font-weight: 900;
  color: #111827;
}

.centerTitle{
  text-align:center;
  font-size: 18px;
  font-weight: 800;
  color:#111827;
  margin: 0 0 18px;
}

.form{
  display:flex;
  flex-direction:column;
  gap: 12px;
}

.help{
  margin: 0;
  font-size: 13px;
  color:#111827;
  line-height: 1.45;
}

.agree{
  display:flex;
  align-items:center;
  gap: 12px;
  font-size: 14px;
  color:#111827;
}

.primary{
  width:100%;
  height: 56px;
  border-radius: 999px;
  font-weight: 900;
  background: #ffc900; 
  color: #000;
  border: none;
}

.bottomLinks{
  max-width: 720px;
  margin: 18px auto 0;
  display:flex;
  justify-content:space-between;
  font-size: 12px;
}
.bottomLinks a{
  color:#111827;
  text-decoration:none;
}

/* BaseInput/BaseSelect'e class geçirip yükseklik ayarlamak için */
:deep(.h56){
  height: 56px;
}

.error-msg {
  color: red;
  font-size: 14px;
  text-align: center;
}
</style>
