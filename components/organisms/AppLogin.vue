<template>
  <div class="page">
    <AtomsLoginLogoBadge class="top-logo" />

    <div class="card">
      <div class="title">
        <span class="check">✓</span>
        <h1>HızlıGiriş</h1>
      </div>
      <AtomsDividerLine />
      <MoleculesLoginMethodTabs v-model="method" />

      <div class="form">
        <!-- Phone Flow -->
        <template v-if="method === 'phone'">
           <MoleculesLoginPhoneField v-model="phone" />
        </template>

        <!-- Email Flow -->
        <div v-else class="email-login-group">
          <AtomsBaseInput
            v-model="email"
            placeholder="E-posta Adresi"
          />
          <MoleculesPasswordInput 
            v-model="password"
            placeholder="Şifre"
          />
        </div>

        <label class="option-row">
          <AtomsBaseCheckbox v-model="useFastPass" />
          <span>HızlıGiriş Şifresi ile Gir</span>
          <span class="info" title="Bilgi">i</span>
        </label>


        <label class="remember">
          <AtomsBaseCheckbox v-model="remember" />
          <span>Beni Hatırla</span>
        </label>

        <AtomsBaseButton class="primary" @click="onLogin">
          <span v-if="userStore.loading">İşlem Yapılıyor...</span>
          <span v-else>Giriş Yap</span>
        </AtomsBaseButton>

        <AtomsBaseButton class="secondary" @click="onSignup">
          Yeni Hesap Oluştur
        </AtomsBaseButton>

        <MoleculesUpdateFastLoginLink v-if="method === 'phone'" />

        <div v-if="error" class="error-msg">
          {{ error }}
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from '~/stores/user';

const userStore = useUserStore();
const router = useRouter();

const method = ref("email"); 
const phone = ref("");
const email = ref("");
const password = ref("");

const remember = ref(true);
const useFastPass = ref(true);
const error = ref("");

// Reset error when method changes
watch(method, () => {
  error.value = '';
});

async function onLogin() {
  error.value = "";
  
  if (method.value === 'phone') {
     if (!phone.value || phone.value.length < 10) {
        error.value = "Geçerli bir telefon numarası giriniz.";
        return;
     }
     // Add +90 if missing
     let rawPhone = phone.value.replace(/\s/g, '');
     if (!rawPhone.startsWith('+')) {
        rawPhone = '+90' + rawPhone;
     }
     
     try {
        await userStore.loginWithPhoneDirectly(rawPhone);
        router.push('/');
     } catch (e) {
        error.value = "Giriş hatası: " + e.message;
     }
     return;
  }

  // Email Flow
  if (!email.value || !password.value) {
    error.value = "Lütfen e-posta ve şifrenizi girin.";
    return;
  }

  try {
    await userStore.login(email.value, password.value);
    router.push('/');
  } catch (e) {
    error.value = "Giriş başarısız: " + e.message;
  }
}

function onSignup() {
  router.push('/register');
}
</script>

<style scoped>
.page{
  min-height: 100vh;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:flex-start;
  background: linear-gradient(180deg, #f2f2f2 0%, #f2f2f2 55%, #e9f0ff 100%);
  padding: 28px 14px 60px;
}

.top-logo{
  position: static;
  margin: 10px 0 22px;
}

.card{
  width: 520px;
  max-width: 92vw;
  background:#fff;
  border-radius: 22px;
  padding: 26px 30px;
  box-shadow: 0 18px 45px rgba(0,0,0,.10);
}

.title{
  display:flex;
  align-items:center;
  justify-content:center;
  gap: 8px;
  margin: 6px 0 14px;
  color:#22408f;
}
.title h1{
  font-size: 18px;
  margin:0;
  font-weight: 800;
}
.check{
  width: 22px; height: 22px;
  display:inline-flex;
  align-items:center; justify-content:center;
  border-radius: 7px;
  background:#eaf2ff;
  color:#2f57d8;
  font-weight: 900;
}
.form{
  margin-top: 14px;
  display:flex;
  flex-direction:column;
  gap: 12px;
}

.remember{
  display:flex;
  align-items:center;
  gap: 10px;
  font-size: 13px;
  color:#2c3f6b;
}
.primary{
  width:100%;
  height: 54px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 800;
  background: #ffc900; 
  color: #000;
  border: none;
}

.secondary{
  width:100%;
  height: 54px;
  border-radius: 999px;
  background: #fff !important;
  border: 1.5px solid #2f57d8 !important;
  color:#2f57d8 !important;
  font-weight: 800;
}

.divider{
  height: 1px;
  background: #edf1fb;
  margin: 14px 0 18px;
}
.option-row{
  display:flex;
  align-items:center;
  gap: 10px;
  font-size: 14px;
  color:#253a66;
}
.info{
  margin-left: 6px;
  width: 18px; height: 18px;
  border-radius: 50%;
  border: 1px solid #2f57d8;
  color:#2f57d8;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  font-size: 12px;
  font-weight: 800;
}

.error-msg {
  color: red;
  font-size: 14px;
  text-align: center;
}

.otp-info {
  text-align: center;
  font-size: 14px;
  color: #555;
  margin-bottom: 15px;
}

.resend-link {
  text-align: center;
  margin-top: 10px;
  font-size: 13px;
}

.resend-link a {
  color: #2f57d8;
  text-decoration: underline;
  cursor: pointer;
}
</style>
