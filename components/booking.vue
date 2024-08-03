<template>
  <div>
    <div class="c-grid mb-6 gap-6">
      <div class="col-span-12">
        <div class="relative overflow-hidden md:min-h-[528px] md:max-h-[528px] min-h-[366px] max-h-[366px]">
          <img
              alt="Main Image"
              fetchpriority="high"
              decoding="async"
              class="rounded-[20px] block object-cover object-center absolute left-0 top-0 w-full h-full"
              src="/image/azovskoe.jpg"
              draggable="false"
              oncontextmenu="return false;"
              style="user-select: none;"
          />
          <h1 class="absolute left-0 bottom-0 block text-3xl md:text-5xl lg:text-7xl">
            <span id="network-title" class="relative block">
              <span class="relative z-[1] inline-block">
                <span id="network-text" style="font-family: 'GeologicaExtra'" class="relative z-[3] inline-block px-2 py-1 md:px-4 md:py-2 text-[#c2a404]">
                  База отдыха
                </span>
                <span class="absolute inset-0 z-[2] bg-bg rounded-tr-lg md:rounded-tr-2xl"></span>
              </span>
              <span class="absolute left-0 md:block hidden -top-5 z-[3]">
                <div class="w-[20px] h-[20px]" style="background-image: url('/svg/idk.svg');"></div>
              </span>
              <span class="absolute right-0 md:right-[42px] bottom-[-2px] md:block hidden z-[3]">
                <svg width="39" height="22" viewBox="0 0 39 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M39 22V20H20C8.95431 20 0 11.0457 0 0V22H39Z" fill="#F5F5F5"></path>
                </svg>
              </span>
            </span>

            <span id="petersburg-title" class="relative block text-3xl md:text-5xl lg:text-7xl">
              <span class="relative z-[1] inline-block">
                <span id="petersburg-text" style="font-family: 'GeologicaExtra'" class="relative z-[3] inline-block px-2 py-1 md:px-4 md:py-2 text-[#c2a404]">
                  Азовское море
                </span>
                <span class="absolute inset-0 z-[2] bg-bg rounded-tr-lg md:rounded-tr-2xl"></span>
              </span>
              <span class="absolute left-0 md:block hidden -top-5 z-[3]">
                <div class="w-[20px] h-[20px]" style="background-image: url('/svg/idk.svg');"></div>
              </span>
              <span class="absolute right-0 md:right-[-39px] bottom-[-2px] md:block hidden z-[3]">
                <svg width="39" height="22" viewBox="0 0 39 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M39 22V20H20C8.95431 20 0 11.0457 0 0V22H39Z" fill="#F5F5F5"></path>
                </svg>
              </span>
            </span>
          </h1>
          <div id="card-container" class="absolute right-2 md:right-6 bottom-6 gap-2 md:gap-4 flex flex-col card-item invisible opacity-0">
            <div class="bg-white p-2 md:p-4 rounded-[20px] flex flex-col gap-4 md:gap-10 max-w-[160px] md:max-w-[220px]">
              <img alt="Card Icon" loading="lazy" width="36" height="36" decoding="async" src="/svg/card.svg" />
              <div class="text-xs md:text-sm">Оплата картами МИР и СБП</div>
            </div>
            <div class="bg-white p-2 md:p-4 rounded-[20px] flex flex-col gap-4 md:gap-10 max-w-[160px] md:max-w-[220px]">
              <img alt="Lamp Icon" loading="lazy" width="36" height="36" decoding="async" src="/svg/lamp.svg" />
              <div class="text-xs md:text-sm">Быстрое <br> бронирование на сайте</div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-reservation mt-8">
        <div class="bg-white p-4 rounded-[16px] relative z-[60] gap-x-8 gap-y-4">
          <div id="_bn_widget_" class="bnovo-widget"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      document.getElementById('network-title').classList.add('animate-slide-in-second');
      document.getElementById('network-text').classList.add('animate-fade-in-second');
      document.getElementById('petersburg-title').classList.add('animate-slide-in');
      document.getElementById('petersburg-text').classList.add('animate-fade-in');

      setTimeout(() => {
        const cardContainer = document.getElementById('card-container');
        if (cardContainer) {
          cardContainer.classList.add('animate-fade-in-cards');
        }
      }, 500);
    }, 100);

    const script = document.createElement('script');
    script.src = '//widget.reservationsteps.ru/js/bnovo.js';
    script.onload = () => {
      Bnovo_Widget.init(() => {
        Bnovo_Widget.open('_bn_widget_', {
          type: "horizontal",
          uid: "dbbb125e-d1ee-4e83-8b20-6cb396142aac",
          lang: "ru",
          width: "100%",
          width_mobile: "300",
          background: "#ffffff",
          background_mobile: "#ffffff",
          bg_alpha: "100",
          bg_alpha_mobile: "100",
          border_color_mobile: "#C6CAD3",
          padding: "24",
          padding_mobile: "24",
          border_radius: "8",
          button_font_size: "14",
          button_height: "42",
          font_type: "inter",
          title_color: "#242742",
          title_color_mobile: "#242742",
          title_size: "22",
          title_size_mobile: "22",
          inp_color: "#242742",
          inp_bordhover: "#dedfe3",
          inp_bordcolor: "#BCBCBC",
          inp_alpha: "100",
          btn_background: "#edc423",
          btn_background_over: "#edd96b",
          btn_textcolor: "#000000",
          btn_textover: "#000000",
          btn_bordcolor: "#edc423",
          btn_bordhover: "#edd96b",
          min_age: "0",
          max_age: "17",
          adults_default: "1",
          dates_preset: "on",
          dfrom_today: "on",
          dfrom_value: "2",
          dto_nextday: "on",
          dto_value: "2",
          cancel_color: "#FFFFFF",
          switch_mobiles_width: "800",
        });
      });
    };
    document.body.appendChild(script);
  },
};
</script>

<style scoped>
.bg-bg {
  --tw-bg-opacity: 1;
}

.bg-bg {
  background-color: rgb(245 245 245 / var(--tw-bg-opacity));
}

@keyframes slideIn {
  0% {
    transform: translateX(-100%);
    opacity: 1;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeInCards {
  0% {
    opacity: 0;
    visibility: hidden;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
}

.animate-slide-in-second {
  animation: slideIn 1s ease-out forwards;
}

.animate-fade-in-second {
  animation: fadeIn 1s ease-out 1s forwards;
}

.animate-slide-in {
  animation: slideIn 0.7s ease-out forwards;
}

.animate-fade-in {
  animation: fadeIn 0.7s ease-out 1s forwards;
}

.animate-fade-in-cards {
  animation: fadeInCards 0.5s ease-out forwards;
}
</style>
