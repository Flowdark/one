<template>
<!-- table-pricing__body-row-marketing -->
  <div class="pricing">
    <h1 class="pricing__title"> {{ $t('Planes adaptados para el crecimiento de tu negocio') }} </h1>
    <p class="pricing__description">
      {{
        $t('Elige la suscripción que mejor se adapte a tus necesidades.')
      }}
      <br />
      {{
        $t('Adquiere nuestro servicio con')
      }}

      <span class="pricing__description-bold">{{ $t('un contrato anual y paga en cuotas mensuales') }}.</span>
    </p>
    <div class="pricing__prices-container">

        <!-- Arrows -->

        <!-- Arrow izquierda -->
        <svg @click="prevSlide" id="prev" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
          <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z">
          </path>
        </svg>

        <div class="pricing__prices">
          <div class="pricing__prices__price pricing__prices__price--blue pricing__price-show">
              <div class="pricing__prices__price__details">
                <h2 class="pricing__prices__price__details__title">
                  <svg id="Grupo_32" data-name="Grupo 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="110.395" height="30.634" viewBox="0 0 110.395 30.634">
                    <defs>
                      <clipPath id="clip-path">
                        <rect id="Rectángulo_8" data-name="Rectángulo 8" width="110.395" height="30.634" fill="none"/>
                      </clipPath>
                    </defs>
                    <g id="Grupo_3" data-name="Grupo 3" clip-path="url(#clip-path)">
                      <path id="Trazado_6" data-name="Trazado 6" d="M0,2.408A2.318,2.318,0,0,1,.708.709,2.318,2.318,0,0,1,2.407,0a2.317,2.317,0,0,1,1.7.708,2.318,2.318,0,0,1,.708,1.7V9.347a11.291,11.291,0,0,1,6.962-2.266,11.35,11.35,0,0,1,8.331,3.446,11.349,11.349,0,0,1,3.446,8.331,11.349,11.349,0,0,1-3.446,8.331,11.348,11.348,0,0,1-8.331,3.446,11.347,11.347,0,0,1-8.331-3.446A11.356,11.356,0,0,1,0,18.976ZM6.821,23.814a6.754,6.754,0,0,0,4.956,2.053,6.733,6.733,0,0,0,4.944-2.042,6.734,6.734,0,0,0,2.042-4.944,6.774,6.774,0,0,0-2.042-4.956,6.714,6.714,0,0,0-4.944-2.053,6.753,6.753,0,0,0-4.956,2.053,6.7,6.7,0,0,0-2.006,4.107v.9a3.916,3.916,0,0,1-.024.425,6.581,6.581,0,0,0,2.03,4.461" transform="translate(0 -0.001)" fill="#0097a6"/>
                      <path id="Trazado_7" data-name="Trazado 7" d="M138.34,39.749a7.093,7.093,0,0,0-7.812,1.451,7.005,7.005,0,0,0,9.889,9.924l.047-.047a2.278,2.278,0,0,1,1.675-.685,2.338,2.338,0,0,1,1.7.7,2.277,2.277,0,0,1,.708,1.688,2.315,2.315,0,0,1-.708,1.7l-.047.047a11.777,11.777,0,0,1-20.085-8.355,11.782,11.782,0,0,1,20.085-8.355l-.024.023a.021.021,0,0,0,.024.024,2.281,2.281,0,0,1,.684,1.676,2.252,2.252,0,0,1-.684,1.652l-6.75,6.7a2.357,2.357,0,0,1-1.7.685,2.34,2.34,0,0,1-2.407-2.407,2.357,2.357,0,0,1,.684-1.7Z" transform="translate(-98.24 -27.312)" fill="#0097a6"/>
                      <path id="Trazado_8" data-name="Trazado 8" d="M449.634,39.749a7.093,7.093,0,0,0-7.812,1.451,7.005,7.005,0,0,0,9.889,9.924l.047-.047a2.278,2.278,0,0,1,1.675-.685,2.338,2.338,0,0,1,1.7.7,2.278,2.278,0,0,1,.708,1.688,2.316,2.316,0,0,1-.708,1.7l-.047.047A11.777,11.777,0,0,1,435,46.169a11.782,11.782,0,0,1,20.085-8.355l-.024.023a.021.021,0,0,0,.024.024,2.281,2.281,0,0,1,.684,1.676,2.252,2.252,0,0,1-.684,1.652l-6.75,6.7a2.358,2.358,0,0,1-1.7.685,2.34,2.34,0,0,1-2.408-2.407,2.357,2.357,0,0,1,.684-1.7Z" transform="translate(-345.446 -27.312)" fill="#002239"/>
                      <path id="Trazado_9" data-name="Trazado 9" d="M251.456,34.162a2.279,2.279,0,0,1,1.676.685,2.2,2.2,0,0,1,.378.5h.023l7.363,14.75,7.364-14.75.023.023a2.539,2.539,0,0,1,.4-.519,2.35,2.35,0,0,1,3.328.012,2.289,2.289,0,0,1,.685,1.664,2.2,2.2,0,0,1-.448,1.369l-9.134,18.338a2.043,2.043,0,0,1-.543.826,2.241,2.241,0,0,1-1.676.708,2.215,2.215,0,0,1-1.652-.708,2.082,2.082,0,0,1-.543-.8l-7.246-14.515-7.222,14.491a2.044,2.044,0,0,1-.543.826,2.242,2.242,0,0,1-1.676.708,2.213,2.213,0,0,1-1.652-.708,2.075,2.075,0,0,1-.543-.8L230.64,37.867a2.24,2.24,0,0,1-.425-1.345,2.37,2.37,0,0,1,4.036-1.676,2.189,2.189,0,0,1,.377.5h.024l7.363,14.75,7.364-14.75.023.023a2.54,2.54,0,0,1,.4-.519,2.25,2.25,0,0,1,1.652-.685" transform="translate(-182.82 -27.129)" fill="#002239"/>
                    </g>
                  </svg>
                </h2>
                <div class="pricing__prices__price__details__price">
                  <span class="pricing__prices__price__details__price__currency pricing__prices__price__details__price__currency-one"
                    >$</span
                  >
                  <span class="pricing__prices__price__details__price__text">
                  <p class="pricing__prices__price__details__price__text-twenty-nine">{{ $t('29') }} </p>
                  <p class="pricing__prices__price__details__price__text-essential">  {{ $t('Essential') }}. </p>
                  </span>
                  <div class="pricing__prices__price__details__month">
                    <span class="pricing__prices__price__details__month__price">
                      {{ $t('USD/mes') }} 
                    </span>
                  </div>
                </div>
                <span class="pricing__prices__price__details__year"> {{ $t('Precio insuperable de lanzamiento') }} </span>
              </div>
              <p class="pricing__prices__price__description">
                {{
                  $t('Funcionalidades esenciales para que digitalices tu negocio y empieces a conseguir resultados desde ya')
                }}.
              </p>
              <div class="pricing__prices__price__features">
                <h3 class="pricing__prices__price__features__title">
                  {{ $t('Lo que incluye tu plan') }}:
                </h3>

                <p class="pricing__prices__price__features__feature">
                  <span
                    class="pricing__prices__price__features__feature__bubble pricing__prices__price__features__feature__bubble--blue"
                  ></span>
                  {{ $t('Incluye 2 agendas') }}
                </p>
                <p class="pricing__prices__price__features__feature">
                  <span
                    class="pricing__prices__price__features__feature__bubble pricing__prices__price__features__feature__bubble--blue"
                  ></span>
                  {{ $t('Más de 30.000 envíos de correos mensuales') }}
                </p>
                <p class="pricing__prices__price__features__feature">
                  <span
                    class="pricing__prices__price__features__feature__bubble pricing__prices__price__features__feature__bubble--blue"
                  ></span>
                {{ 'Fichas de clientes' }}
                </p>
                <p class="pricing__prices__price__features__feature">
                  <span
                    class="pricing__prices__price__features__feature__bubble pricing__prices__price__features__feature__bubble--blue"
                  ></span>
                  {{ $t('Recordatorios automáticos') }}
                </p>
                <p class="pricing__prices__price__features__feature">
                  <span
                    class="pricing__prices__price__features__feature__bubble pricing__prices__price__features__feature__bubble--blue"
                  ></span>
                  {{ $t('Pagos online') }}
                </p>
                <p class="pricing__prices__price__features__feature">
                  <span
                    class="pricing__prices__price__features__feature__bubble pricing__prices__price__features__feature__bubble--blue"
                  ></span>
                  {{ $t('Control de inventario') }}
                </p>
                <p class="pricing__prices__price__features__feature">
                  <span
                    class="pricing__prices__price__features__feature__bubble pricing__prices__price__features__feature__bubble--blue"
                  ></span>
                  {{ $t('Miora (app para reservas)') }}
                </p>
                <p class="pricing__prices__price__features__feature">
                  <span
                    class="pricing__prices__price__features__feature__bubble pricing__prices__price__features__feature__bubble--blue"
                  ></span>
                  {{ $t('Sistema de reconocimiento facial') }}
                </p>
                <p class="pricing__prices__price__features__feature">
                  <span
                    class="pricing__prices__price__features__feature__bubble pricing__prices__price__features__feature__bubble--blue"
                  ></span>
                  {{ $t('Informes personalizados') }}
                </p>
              </div>
          </div>

          <!--segundo div-->
          <div
            class="pricing__prices__price pricing__prices__price--blue-aqua pricing__prices__price--middle pricing__prices__price--middle2"
          >
            <div class="pricing__prices__price__details">
              <h2 class="pricing__prices__price__details__title">
                <svg xmlns="http://www.w3.org/2000/svg" width="78.972" height="26.634" viewBox="0 0 78.972 26.634">
                  <g id="Grupo_2471" data-name="Grupo 2471" transform="translate(-895.5 -56.094)">
                    <path id="Trazado_1636" data-name="Trazado 1636" d="M1319.368,62.536a7.7,7.7,0,0,0-8.485,1.577,7.609,7.609,0,0,0,10.741,10.779l.051-.051a2.476,2.476,0,0,1,1.82-.743,2.54,2.54,0,0,1,1.846.756,2.474,2.474,0,0,1,.769,1.833,2.517,2.517,0,0,1-.769,1.846l-.051.051a12.791,12.791,0,0,1-21.815-9.075,12.8,12.8,0,0,1,21.815-9.074l-.026.026a.023.023,0,0,0,.026.026,2.476,2.476,0,0,1,.743,1.82,2.445,2.445,0,0,1-.743,1.794l-7.331,7.28a2.56,2.56,0,0,1-1.846.744,2.542,2.542,0,0,1-2.615-2.615,2.56,2.56,0,0,1,.743-1.846Z" transform="translate(-352.138 -0.106)" fill="#002239" stroke="#01dcfd" stroke-width="1"/>
                    <path id="Trazado_1637" data-name="Trazado 1637" d="M913.655,80.551v.17a3.089,3.089,0,0,0,.8,2.067,7.646,7.646,0,1,1-11.462.111,3.148,3.148,0,0,0,.75-2.065,2.5,2.5,0,0,0-4.33-1.705A12.786,12.786,0,0,0,896,87.9a13.026,13.026,0,0,0,12.65,12.775,12.833,12.833,0,0,0,9.277-21.887,2.5,2.5,0,0,0-4.273,1.764" transform="translate(0 -18.538)" fill="#002239" stroke="#01dcfd" stroke-width="1"/>
                    <path id="Trazado_1638" data-name="Trazado 1638" d="M973.716,56.838h0A2.724,2.724,0,0,0,971,59.554V69.739a2.716,2.716,0,0,0,5.432,0V59.554a2.724,2.724,0,0,0-2.716-2.716" transform="translate(-64.815 -0.211)" fill="#002239" stroke="#01dcfd" stroke-width="1"/>
                    <path id="Trazado_1639" data-name="Trazado 1639" d="M1112,56.594a13.166,13.166,0,0,1,8.9,3.794,12.336,12.336,0,0,1,3.743,8.921V79.2a3.058,3.058,0,0,1-.769,2.256,2.6,2.6,0,0,1-3.691,0,2.983,2.983,0,0,1-.769-2.2V69.36a4.119,4.119,0,0,1,.026-.461,7.15,7.15,0,0,0-2.2-4.845,7.336,7.336,0,0,0-5.383-2.23h-.1a7.335,7.335,0,0,0-5.383,2.23,7.148,7.148,0,0,0-2.2,4.845,4.238,4.238,0,0,1,.026.461v9.895a2.983,2.983,0,0,1-.769,2.2,2.6,2.6,0,0,1-3.691,0,3.057,3.057,0,0,1-.769-2.256V69.308a12.335,12.335,0,0,1,3.743-8.921,13.164,13.164,0,0,1,8.9-3.794Z" transform="translate(-175.39 0)" fill="#002239" stroke="#01dcfd" stroke-width="1"/>
                  </g>
                </svg>
              </h2>
              <div class="pricing__prices__price__details__price">
                <span class="pricing__prices__price__details__price__currency"
                  >$</span
                >
                  <span class="pricing__prices__price__details__price__text">
                    150
                  </span>
                <div class="pricing__prices__price__details__month">
                  <span class="pricing__prices__price__details__month__off">
                    300
                  </span>
                  <span class="pricing__prices__price__details__month__price">
                    {{ $t('USD/mes') }}
                  </span>
                </div>
              </div>
              <span class="pricing__prices__price__details__year"> {{ $t('Precio insuperable de lanzamiento') }} </span>
            </div>
            <p class="pricing__prices__price__description">
              {{ $t('Todas las funcionalidades de nuestro software + Acompañamiento digital en marketing') }}.
            </p>
            <div class="pricing__prices__price__features">
              <h3 class="pricing__prices__price__features__title">
                {{ $t('Lo que incluye tu plan') }}:
              </h3>

              <p class="pricing__prices__price__features__feature">
                <span
                  class="pricing__prices__price__features__feature__bubble pricing__prices__price__features__feature__bubble--orange"
                ></span>
                {{ $t('Todas las funcionalidades de Essential') }}.
              </p>
              <p class="pricing__prices__price__features__feature">
                <span
                  class="pricing__prices__price__features__feature__bubble pricing__prices__price__features__feature__bubble--orange"
                ></span>
                {{ $t('Incluye 2 agendas') }}.
              </p>
              <p class="pricing__prices__price__features__feature">
                <span
                  class="pricing__prices__price__features__feature__bubble pricing__prices__price__features__feature__bubble--orange"
                ></span>
                {{ $t('Acompañamiento personalizado de especialista en marketing') }}.
              </p>
              <p class="pricing__prices__price__features__feature">
                <span
                  class="pricing__prices__price__features__feature__bubble pricing__prices__price__features__feature__bubble--orange"
                ></span>
                {{ $t('Acceso a contenidos y cursos exclusivos de marketing') }}.
              </p>
              <p class="pricing__prices__price__features__feature">
                <span
                  class="pricing__prices__price__features__feature__bubble pricing__prices__price__features__feature__bubble--orange"
                ></span>
                {{ $t('Acceso a contenidos y cursos exclusivos de marketing') }}.
              </p>
              <p class="pricing__prices__price__features__feature">
                <span
                  class="pricing__prices__price__features__feature__bubble pricing__prices__price__features__feature__bubble--orange"
                ></span>
                {{ $t('Miora (app para reservas)') }}.
              </p>
            </div>
          </div>
          <!-- tercer div -->
          <div
            class="pricing__prices__price pricing__prices__price--blue-aqua pricing__prices__price--third"
          >
            <div class="pricing__prices__price__details">
              <h2 class="pricing__prices__price__details__title">
                <svg xmlns="http://www.w3.org/2000/svg" width="108.168" height="26.634" viewBox="0 0 108.168 26.634">
                  <g id="Grupo_35" data-name="Grupo 35" transform="translate(-65.647 -15.648)">
                    <path id="Trazado_1597" data-name="Trazado 1597" d="M968.021,131.108h-3.377a3.369,3.369,0,0,1-2.5-1.033,3.536,3.536,0,0,1,0-4.962,3.367,3.367,0,0,1,2.5-1.034h3.377V120.7a3.41,3.41,0,0,1,1.016-2.481,3.523,3.523,0,0,1,6.012,2.481v3.377h3.377a3.514,3.514,0,0,1,0,7.029H975.05v3.377a3.514,3.514,0,1,1-7.029,0Z" transform="translate(-808.626 -98.594)" fill="#002239" stroke="#03d3f3" stroke-width="1"/>
                    <g id="Grupo_2472" data-name="Grupo 2472" transform="translate(-829.853 -40.446)">
                      <path id="Trazado_1636" data-name="Trazado 1636" d="M1319.368,62.536a7.7,7.7,0,0,0-8.485,1.577,7.609,7.609,0,0,0,10.741,10.779l.051-.051a2.476,2.476,0,0,1,1.82-.743,2.54,2.54,0,0,1,1.846.756,2.474,2.474,0,0,1,.769,1.833,2.517,2.517,0,0,1-.769,1.846l-.051.051a12.791,12.791,0,0,1-21.815-9.075,12.8,12.8,0,0,1,21.815-9.074l-.026.026a.023.023,0,0,0,.026.026,2.476,2.476,0,0,1,.743,1.82,2.445,2.445,0,0,1-.743,1.794l-7.331,7.28a2.56,2.56,0,0,1-1.846.744,2.542,2.542,0,0,1-2.615-2.615,2.56,2.56,0,0,1,.743-1.846Z" transform="translate(-352.138 -0.106)" fill="#002239" stroke="#01dcfd" stroke-width="1"/>
                      <path id="Trazado_1637" data-name="Trazado 1637" d="M913.655,80.551v.17a3.089,3.089,0,0,0,.8,2.067,7.646,7.646,0,1,1-11.462.111,3.148,3.148,0,0,0,.75-2.065,2.5,2.5,0,0,0-4.33-1.705A12.786,12.786,0,0,0,896,87.9a13.026,13.026,0,0,0,12.65,12.775,12.833,12.833,0,0,0,9.277-21.887,2.5,2.5,0,0,0-4.273,1.764" transform="translate(0 -18.538)" fill="#002239" stroke="#01dcfd" stroke-width="1"/>
                      <path id="Trazado_1638" data-name="Trazado 1638" d="M973.716,56.838h0A2.724,2.724,0,0,0,971,59.554V69.739a2.716,2.716,0,0,0,5.432,0V59.554a2.724,2.724,0,0,0-2.716-2.716" transform="translate(-64.815 -0.211)" fill="#002239" stroke="#01dcfd" stroke-width="1"/>
                      <path id="Trazado_1639" data-name="Trazado 1639" d="M1112,56.594a13.166,13.166,0,0,1,8.9,3.794,12.336,12.336,0,0,1,3.743,8.921V79.2a3.058,3.058,0,0,1-.769,2.256,2.6,2.6,0,0,1-3.691,0,2.983,2.983,0,0,1-.769-2.2V69.36a4.119,4.119,0,0,1,.026-.461,7.15,7.15,0,0,0-2.2-4.845,7.336,7.336,0,0,0-5.383-2.23h-.1a7.335,7.335,0,0,0-5.383,2.23,7.148,7.148,0,0,0-2.2,4.845,4.238,4.238,0,0,1,.026.461v9.895a2.983,2.983,0,0,1-.769,2.2,2.6,2.6,0,0,1-3.691,0,3.057,3.057,0,0,1-.769-2.256V69.308a12.335,12.335,0,0,1,3.743-8.921,13.164,13.164,0,0,1,8.9-3.794Z" transform="translate(-175.39 0)" fill="#002239" stroke="#01dcfd" stroke-width="1"/>
                    </g>
                  </g>
                </svg>
              </h2>
              <div class="pricing__prices__price__details__price">
                <span class="pricing__prices__price__details__price__currency"
                  >$</span
                >
                  <span class="pricing__prices__price__details__price__text">
                    250
                  </span>

                <div class="pricing__prices__price__details__month">
                  <span class="pricing__prices__price__details__month__off">
                    500
                  </span>
                  <span class="pricing__prices__price__details__month__price">
                    {{ $t('USD/mes') }}
                  </span>
                </div>
              </div>
              <span class="pricing__prices__price__details__year"> {{ $t('Precio insuperable de lanzamiento') }}. </span>
            </div>
            <p class="pricing__prices__price__description">
              {{ $t(`Todas las funcionalidades de nuestro software + acompañamiento digital en marketing y acceso ilimitado de agendas`) }}
              <strong class="pricing__prices__price__description-strong"> {{ $t('Ideal para grandes empresas y cadenas') }} </strong>
            </p>
            <div class="pricing__prices__price__features">
              <h3 class="pricing__prices__price__features__title">
                {{ $t('Lo que incluye tu plan') }}:
              </h3>

              <p class="pricing__prices__price__features__feature">
                <span
                  class="pricing__prices__price__features__feature__bubble pricing__prices__price__features__feature__bubble--orange"
                ></span>
                {{ $t('Todas las funcionalidades de Essential') }}.
              </p>
              <p class="pricing__prices__price__features__feature">
                <span
                  class="pricing__prices__price__features__feature__bubble pricing__prices__price__features__feature__bubble--orange"
                ></span>
                {{ $t('Agendas ilimitadas') }}.
              </p>
              <p class="pricing__prices__price__features__feature">
                <span
                  class="pricing__prices__price__features__feature__bubble pricing__prices__price__features__feature__bubble--orange"
                ></span>
                {{ $t('Acompañamiento personalizado de especialista en marketing') }}.
              </p>
              <p class="pricing__prices__price__features__feature">
                <span
                  class="pricing__prices__price__features__feature__bubble pricing__prices__price__features__feature__bubble--orange"
                ></span>
              {{ $t('Acceso a contenidos y cursos exclusivos de marketing') }}.
              </p>
              <p class="pricing__prices__price__features__feature">
                <span
                  class="pricing__prices__price__features__feature__bubble pricing__prices__price__features__feature__bubble--orange"
                ></span>
                {{ $t('Tu propia App personalizada para Android') }}.
              </p>
              <p class="pricing__prices__price__features__feature">
                <span
                  class="pricing__prices__price__features__feature__bubble pricing__prices__price__features__feature__bubble--orange"
                ></span>
                {{ $t('Tu propia App personalizada para iOS') }}.
              </p>
            </div>
          </div>
        </div>

        <!-- Arrow derecha -->
        <svg @click="nextSlide" id="next" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
          <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z">
          </path>
        </svg>
        
    </div>
    <div class="pricing__plans">
      <section class="table-pricing">
        

        <div class="table-pricing__header">
          <div
            class="table-pricing__header-container table-pricing__header-container-empty "
          ></div>
          <div
            class="table-pricing__header-container table-pricing__header-container-bewe"
          >
            <svg
              id="Grupo_32"
              data-name="Grupo 32"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="110.395"
              height="30.634"
              viewBox="0 0 110.395 30.634"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect
                    id="Rectángulo_8"
                    data-name="Rectángulo 8"
                    width="110.395"
                    height="30.634"
                    fill="none"
                  />
                </clipPath>
              </defs>
              <g id="Grupo_3" data-name="Grupo 3" clip-path="url(#clip-path)">
                <path
                  id="Trazado_6"
                  data-name="Trazado 6"
                  d="M0,2.408A2.318,2.318,0,0,1,.708.709,2.318,2.318,0,0,1,2.407,0a2.317,2.317,0,0,1,1.7.708,2.318,2.318,0,0,1,.708,1.7V9.347a11.291,11.291,0,0,1,6.962-2.266,11.35,11.35,0,0,1,8.331,3.446,11.349,11.349,0,0,1,3.446,8.331,11.349,11.349,0,0,1-3.446,8.331,11.348,11.348,0,0,1-8.331,3.446,11.347,11.347,0,0,1-8.331-3.446A11.356,11.356,0,0,1,0,18.976ZM6.821,23.814a6.754,6.754,0,0,0,4.956,2.053,6.733,6.733,0,0,0,4.944-2.042,6.734,6.734,0,0,0,2.042-4.944,6.774,6.774,0,0,0-2.042-4.956,6.714,6.714,0,0,0-4.944-2.053,6.753,6.753,0,0,0-4.956,2.053,6.7,6.7,0,0,0-2.006,4.107v.9a3.916,3.916,0,0,1-.024.425,6.581,6.581,0,0,0,2.03,4.461"
                  transform="translate(0 -0.001)"
                  fill="#0097a6"
                />
                <path
                  id="Trazado_7"
                  data-name="Trazado 7"
                  d="M138.34,39.749a7.093,7.093,0,0,0-7.812,1.451,7.005,7.005,0,0,0,9.889,9.924l.047-.047a2.278,2.278,0,0,1,1.675-.685,2.338,2.338,0,0,1,1.7.7,2.277,2.277,0,0,1,.708,1.688,2.315,2.315,0,0,1-.708,1.7l-.047.047a11.777,11.777,0,0,1-20.085-8.355,11.782,11.782,0,0,1,20.085-8.355l-.024.023a.021.021,0,0,0,.024.024,2.281,2.281,0,0,1,.684,1.676,2.252,2.252,0,0,1-.684,1.652l-6.75,6.7a2.357,2.357,0,0,1-1.7.685,2.34,2.34,0,0,1-2.407-2.407,2.357,2.357,0,0,1,.684-1.7Z"
                  transform="translate(-98.24 -27.312)"
                  fill="#0097a6"
                />
                <path
                  id="Trazado_8"
                  data-name="Trazado 8"
                  d="M449.634,39.749a7.093,7.093,0,0,0-7.812,1.451,7.005,7.005,0,0,0,9.889,9.924l.047-.047a2.278,2.278,0,0,1,1.675-.685,2.338,2.338,0,0,1,1.7.7,2.278,2.278,0,0,1,.708,1.688,2.316,2.316,0,0,1-.708,1.7l-.047.047A11.777,11.777,0,0,1,435,46.169a11.782,11.782,0,0,1,20.085-8.355l-.024.023a.021.021,0,0,0,.024.024,2.281,2.281,0,0,1,.684,1.676,2.252,2.252,0,0,1-.684,1.652l-6.75,6.7a2.358,2.358,0,0,1-1.7.685,2.34,2.34,0,0,1-2.408-2.407,2.357,2.357,0,0,1,.684-1.7Z"
                  transform="translate(-345.446 -27.312)"
                  fill="#002239"
                />
                <path
                  id="Trazado_9"
                  data-name="Trazado 9"
                  d="M251.456,34.162a2.279,2.279,0,0,1,1.676.685,2.2,2.2,0,0,1,.378.5h.023l7.363,14.75,7.364-14.75.023.023a2.539,2.539,0,0,1,.4-.519,2.35,2.35,0,0,1,3.328.012,2.289,2.289,0,0,1,.685,1.664,2.2,2.2,0,0,1-.448,1.369l-9.134,18.338a2.043,2.043,0,0,1-.543.826,2.241,2.241,0,0,1-1.676.708,2.215,2.215,0,0,1-1.652-.708,2.082,2.082,0,0,1-.543-.8l-7.246-14.515-7.222,14.491a2.044,2.044,0,0,1-.543.826,2.242,2.242,0,0,1-1.676.708,2.213,2.213,0,0,1-1.652-.708,2.075,2.075,0,0,1-.543-.8L230.64,37.867a2.24,2.24,0,0,1-.425-1.345,2.37,2.37,0,0,1,4.036-1.676,2.189,2.189,0,0,1,.377.5h.024l7.363,14.75,7.364-14.75.023.023a2.54,2.54,0,0,1,.4-.519,2.25,2.25,0,0,1,1.652-.685"
                  transform="translate(-182.82 -27.129)"
                  fill="#002239"
                />
              </g>
            </svg>

            <a class="table-pricing__button table-pricing__button-bewe" href="">
              {{ $t('Adquiérelo') }}
            </a>
          </div>
          <div
            class="table-pricing__header-container table-pricing__header-container-bewe-one"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="78.972" height="26.634" viewBox="0 0 78.972 26.634">
              <g id="Grupo_2471" data-name="Grupo 2471" transform="translate(-895.5 -56.094)">
                <path id="Trazado_1636" data-name="Trazado 1636" d="M1319.368,62.536a7.7,7.7,0,0,0-8.485,1.577,7.609,7.609,0,0,0,10.741,10.779l.051-.051a2.476,2.476,0,0,1,1.82-.743,2.54,2.54,0,0,1,1.846.756,2.474,2.474,0,0,1,.769,1.833,2.517,2.517,0,0,1-.769,1.846l-.051.051a12.791,12.791,0,0,1-21.815-9.075,12.8,12.8,0,0,1,21.815-9.074l-.026.026a.023.023,0,0,0,.026.026,2.476,2.476,0,0,1,.743,1.82,2.445,2.445,0,0,1-.743,1.794l-7.331,7.28a2.56,2.56,0,0,1-1.846.744,2.542,2.542,0,0,1-2.615-2.615,2.56,2.56,0,0,1,.743-1.846Z" transform="translate(-352.138 -0.106)" fill="#002239" stroke="#01dcfd" stroke-width="1"/>
                <path id="Trazado_1637" data-name="Trazado 1637" d="M913.655,80.551v.17a3.089,3.089,0,0,0,.8,2.067,7.646,7.646,0,1,1-11.462.111,3.148,3.148,0,0,0,.75-2.065,2.5,2.5,0,0,0-4.33-1.705A12.786,12.786,0,0,0,896,87.9a13.026,13.026,0,0,0,12.65,12.775,12.833,12.833,0,0,0,9.277-21.887,2.5,2.5,0,0,0-4.273,1.764" transform="translate(0 -18.538)" fill="#002239" stroke="#01dcfd" stroke-width="1"/>
                <path id="Trazado_1638" data-name="Trazado 1638" d="M973.716,56.838h0A2.724,2.724,0,0,0,971,59.554V69.739a2.716,2.716,0,0,0,5.432,0V59.554a2.724,2.724,0,0,0-2.716-2.716" transform="translate(-64.815 -0.211)" fill="#002239" stroke="#01dcfd" stroke-width="1"/>
                <path id="Trazado_1639" data-name="Trazado 1639" d="M1112,56.594a13.166,13.166,0,0,1,8.9,3.794,12.336,12.336,0,0,1,3.743,8.921V79.2a3.058,3.058,0,0,1-.769,2.256,2.6,2.6,0,0,1-3.691,0,2.983,2.983,0,0,1-.769-2.2V69.36a4.119,4.119,0,0,1,.026-.461,7.15,7.15,0,0,0-2.2-4.845,7.336,7.336,0,0,0-5.383-2.23h-.1a7.335,7.335,0,0,0-5.383,2.23,7.148,7.148,0,0,0-2.2,4.845,4.238,4.238,0,0,1,.026.461v9.895a2.983,2.983,0,0,1-.769,2.2,2.6,2.6,0,0,1-3.691,0,3.057,3.057,0,0,1-.769-2.256V69.308a12.335,12.335,0,0,1,3.743-8.921,13.164,13.164,0,0,1,8.9-3.794Z" transform="translate(-175.39 0)" fill="#002239" stroke="#01dcfd" stroke-width="1"/>
              </g>
            </svg>


            <a
              class="table-pricing__button table-pricing__button-bewe-one"
              href=""
            >
              {{ $t('Adquiérelo') }}
            </a>
          </div>

          <div
            class="table-pricing__header-container table-pricing__header-container-bewe-one-plus"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="108.168" height="26.634" viewBox="0 0 108.168 26.634">
              <g id="Grupo_35" data-name="Grupo 35" transform="translate(-65.647 -15.648)">
                <path id="Trazado_1597" data-name="Trazado 1597" d="M968.021,131.108h-3.377a3.369,3.369,0,0,1-2.5-1.033,3.536,3.536,0,0,1,0-4.962,3.367,3.367,0,0,1,2.5-1.034h3.377V120.7a3.41,3.41,0,0,1,1.016-2.481,3.523,3.523,0,0,1,6.012,2.481v3.377h3.377a3.514,3.514,0,0,1,0,7.029H975.05v3.377a3.514,3.514,0,1,1-7.029,0Z" transform="translate(-808.626 -98.594)" fill="#002239" stroke="#03d3f3" stroke-width="1"/>
                <g id="Grupo_2472" data-name="Grupo 2472" transform="translate(-829.853 -40.446)">
                  <path id="Trazado_1636" data-name="Trazado 1636" d="M1319.368,62.536a7.7,7.7,0,0,0-8.485,1.577,7.609,7.609,0,0,0,10.741,10.779l.051-.051a2.476,2.476,0,0,1,1.82-.743,2.54,2.54,0,0,1,1.846.756,2.474,2.474,0,0,1,.769,1.833,2.517,2.517,0,0,1-.769,1.846l-.051.051a12.791,12.791,0,0,1-21.815-9.075,12.8,12.8,0,0,1,21.815-9.074l-.026.026a.023.023,0,0,0,.026.026,2.476,2.476,0,0,1,.743,1.82,2.445,2.445,0,0,1-.743,1.794l-7.331,7.28a2.56,2.56,0,0,1-1.846.744,2.542,2.542,0,0,1-2.615-2.615,2.56,2.56,0,0,1,.743-1.846Z" transform="translate(-352.138 -0.106)" fill="#002239" stroke="#01dcfd" stroke-width="1"/>
                  <path id="Trazado_1637" data-name="Trazado 1637" d="M913.655,80.551v.17a3.089,3.089,0,0,0,.8,2.067,7.646,7.646,0,1,1-11.462.111,3.148,3.148,0,0,0,.75-2.065,2.5,2.5,0,0,0-4.33-1.705A12.786,12.786,0,0,0,896,87.9a13.026,13.026,0,0,0,12.65,12.775,12.833,12.833,0,0,0,9.277-21.887,2.5,2.5,0,0,0-4.273,1.764" transform="translate(0 -18.538)" fill="#002239" stroke="#01dcfd" stroke-width="1"/>
                  <path id="Trazado_1638" data-name="Trazado 1638" d="M973.716,56.838h0A2.724,2.724,0,0,0,971,59.554V69.739a2.716,2.716,0,0,0,5.432,0V59.554a2.724,2.724,0,0,0-2.716-2.716" transform="translate(-64.815 -0.211)" fill="#002239" stroke="#01dcfd" stroke-width="1"/>
                  <path id="Trazado_1639" data-name="Trazado 1639" d="M1112,56.594a13.166,13.166,0,0,1,8.9,3.794,12.336,12.336,0,0,1,3.743,8.921V79.2a3.058,3.058,0,0,1-.769,2.256,2.6,2.6,0,0,1-3.691,0,2.983,2.983,0,0,1-.769-2.2V69.36a4.119,4.119,0,0,1,.026-.461,7.15,7.15,0,0,0-2.2-4.845,7.336,7.336,0,0,0-5.383-2.23h-.1a7.335,7.335,0,0,0-5.383,2.23,7.148,7.148,0,0,0-2.2,4.845,4.238,4.238,0,0,1,.026.461v9.895a2.983,2.983,0,0,1-.769,2.2,2.6,2.6,0,0,1-3.691,0,3.057,3.057,0,0,1-.769-2.256V69.308a12.335,12.335,0,0,1,3.743-8.921,13.164,13.164,0,0,1,8.9-3.794Z" transform="translate(-175.39 0)" fill="#002239" stroke="#01dcfd" stroke-width="1"/>
                </g>
              </g>
            </svg>

            <a
              href=""
              class="table-pricing__button table-pricing__button-bewe-one-plus"
            >
              {{ $t('Adquiérelo') }}
            </a>
          </div>
        </div>

        <div class="table-pricing__body">
          <h2 class="table-pricing__body-title">
           {{ $t('Compáralos y elige el que mejor se adapte a tus necesidades') }}
          </h2>

          <div class="table-pricing__tecnology">
            <div class="table-pricing__tecnology-cicle"></div>
            <p class="table-pricing__tecnology-text">{{ $t('Tecnología') }}</p>
          </div>

          <!-- /// aqui voy a pegarlo -->

          <div 
            @click="toogleSection('table-pricing__body-row-gestiona')" 
            id="table-pricing__body-row-gestiona" 
            class="table-pricing__body-row table-pricing__body-row-green"
          >
                
                <div class="table-pricing__body-row-first">
                    <div class="table-pricing__body-row-first-arounds">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/>
                        </svg>

                        <svg class="d-none" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                            <path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/>
                            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/>
                        </svg>
            
                    </div>

                    <p class="table-pricing__body-row-first-text"> {{ $t('Gestiona mejor') }} </p>

                </div>

                <div class="table-pricing__body-row-pricing-price">
                  <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                  <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="table-pricing__body-row-pricing-price">
                  <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
          </div>

          <div id="table-pricing__body-row-gestiona-children" class=" table-pricing__body-row-show">
                    <div class="table-pricing__body-row-show-children">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Agendamiento online de citas') }}
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Gestiona tus reservas en la Nube') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

                    <div class="table-pricing__body-row-show-children table-pricing__body-row-green">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Cobros y caja') }}
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Conoce cómo va la facturación de tu negocio') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                            <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

                    <div class="table-pricing__body-row-show-children">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                               {{ $t('Tareas automáticas') }}
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Automatiza tareas repetitivas y programa acciones que se activan de forma instantánea') }}.
                            </div>


                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                            <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

                    <div class="table-pricing__body-row-show-children table-pricing__body-row-green">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                               {{ $t('Control de inventario') }}
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Mantén bajo control tu stock de productos') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>                          
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

                    <div class="table-pricing__body-row-show-children">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Sueldos y comisiones') }}
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Calcula fácilmente los sueldos y automatiza el pago de comisiones') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

                    <div class="table-pricing__body-row-show-children table-pricing__body-row-green">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Mapa de la clase') }}
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Visualiza fácilmente las reservas y espacios de tus clases') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

                    <div class="table-pricing__body-row-show-children">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Bewe Pay') }}
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Un sistema de pagos para cobrar a tus clientes a través de las pasarelas integradas') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

                    <div class="table-pricing__body-row-show-children table-pricing__body-row-green">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Bewe Pass') }}
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Sistema de reconocimiento facial que te permite registrar la entrada y salida de clientes') }}
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>
                    <div class="table-pricing__body-row-show-children ">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Bewe Checkout') }}
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Acepta pagos en línea desde Whatsapp, Facebook, Email y página web') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

          </div>

          <!-- segundoooo -->

          <div 
            @click="toogleSection('table-pricing__body-row-analiza')" 
            id="table-pricing__body-row-analiza" 
            class="table-pricing__body-row"
          >
                
                <div class="table-pricing__body-row-first">
                    <div class="table-pricing__body-row-first-arounds">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/>
                        </svg>

                        <svg class="d-none" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                            <path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/>
                            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/>
                        </svg>
            
                    </div>

                    <p class="table-pricing__body-row-first-text"> {{ $t('Analiza los datos') }} </p>

                </div>

                <div class="table-pricing__body-row-pricing-price">
                  <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                  <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="table-pricing__body-row-pricing-price">
                  <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
          </div>

          <div id="table-pricing__body-row-analiza-children" class=" table-pricing__body-row-show">
                    <div class="table-pricing__body-row-show-children table-pricing__body-row-green">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Dashboard') }}
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Simplifica el análisis de datos y visualiza los resultadosmás importantes') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

                    <div class="table-pricing__body-row-show-children ">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Informes personalizados ') }}
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Genera diferentes tipos de informes personalizados en cuestión de minutos') }}
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>
          </div>


          <!--tercero -->

          <div 
            @click="toogleSection('table-pricing__body-row-fidelizacion')" 
            id="table-pricing__body-row-fidelizacion" 
            class="table-pricing__body-row table-pricing__body-row-green"
          >
                
                <div class="table-pricing__body-row-first">
                    <div class="table-pricing__body-row-first-arounds">
                        <svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/>
                        </svg>

                        <svg class="d-none" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                            <path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/>
                            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/>
                        </svg>
            
                    </div>

                    <p class="table-pricing__body-row-first-text"> {{ $t('Fidelización de clientes') }} </p>

                </div>

                <div class="table-pricing__body-row-pricing-price">
                  <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                  <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="table-pricing__body-row-pricing-price">
                  <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
          </div>

          <div id="table-pricing__body-row-fidelizacion-children" class=" table-pricing__body-row-show">
                    <div class="table-pricing__body-row-show-children">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Fichas de clientes') }}
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('La información de tus clientes siempre actualizada') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

                    <div class="table-pricing__body-row-show-children table-pricing__body-row-green">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Suscripciones ') }}
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Ofrece una experiencia de pago confiable, inmediata y sin complicaciones') }}
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

                    <div class="table-pricing__body-row-show-children">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('SMS') }}
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Automatiza SMS con recordatorios de citas o novedades importantes') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

                    <div class="table-pricing__body-row-show-children table-pricing__body-row-green">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Notificaciones push') }}
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Configura notificaciones con mensajes relevantes para tus clientes') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

                    <div class="table-pricing__body-row-show-children">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Correos y plantillas') }}
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Envía correos más atractivos con plantillas personalizada') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

          </div>

          <!-- cuarto -->
          
          <div 
            @click="toogleSection('table-pricing__body-row-experiencias')" 
            id="table-pricing__body-row-experiencias" 
            class="table-pricing__body-row"
          >
                
                <div class="table-pricing__body-row-first">
                    <div class="table-pricing__body-row-first-arounds">
                        <svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/>
                        </svg>

                        <svg class="d-none" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                            <path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/>
                            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/>
                        </svg>
            
                    </div>

                    <p class="table-pricing__body-row-first-text"> {{ $t('Experiencias online') }} </p>

                </div>

                <div class="table-pricing__body-row-pricing-price">
                  <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                  <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="table-pricing__body-row-pricing-price">
                  <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
          </div>

          <div id="table-pricing__body-row-experiencias-children" class=" table-pricing__body-row-show">
                    <div class="table-pricing__body-row-show-children table-pricing__body-row-green">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Reservas desde Facebook') }}
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Facilita la experiencia de agendamiento por este canal') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

                    <div class="table-pricing__body-row-show-children">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Widget de reservas') }}
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Deja que tus clientes reserven sus citas desde la página web') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

                    <div class="table-pricing__body-row-show-children table-pricing__body-row-green">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Clases online') }}
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('(Mantén tu comunidad conectada y monetiza tus entrenamientos online') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

                    <div class="table-pricing__body-row-show-children">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Cursos online') }}
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Graba, almacena y sube el contenido fácilmente') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

                    <div class="table-pricing__body-row-show-children table-pricing__body-row-green">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Bewe TV') }}
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Da acceso a tus contenidos educativos a través de la compra online') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

          </div>


          <!-- second cicle -->

          <div class="table-pricing__tecnology">
            <div class="table-pricing__tecnology-cicle table-pricing__one-cicle"></div>
            <p class="table-pricing__tecnology-text"> {{ $t('ONE') }} </p>
          </div>


          <!-- oneeee first div -->

          <div 
            @click="toogleSection('table-pricing__body-row-acompañamiento')" 
            id="table-pricing__body-row-acompañamiento" 
            class="table-pricing__body-row table-pricing__body-row-aqua"
          >
                
                <div class="table-pricing__body-row-first">
                    <div class="table-pricing__body-row-first-arounds">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/>
                        </svg>

                        <svg class="d-none" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                            <path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/>
                            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/>
                        </svg>
            
                    </div>

                    <p class="table-pricing__body-row-first-text">
                      {{ $t('Acompañamiento personalizado de marketing') }}
                    </p>

                </div>

                <div class="table-pricing__body-row-pricing-price">
                  
                </div>
                <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                  <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="table-pricing__body-row-pricing-price">
                  <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
          </div>

          <div id="table-pricing__body-row-acompañamiento-children" class=" table-pricing__body-row-show">
                    <div class="table-pricing__body-row-show-children">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                              {{ $t('Asignación de tu pripio especialista en marketing') }}
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Experto que estará orientándote en tu estrategia de marketing') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

                    <div class="table-pricing__body-row-show-children table-pricing__body-row-aqua">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Consultoría') }}
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('definición de objetivos, buyer persona y próximos pasos') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

                    <div class="table-pricing__body-row-show-children">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Definición de indicadores claves') }}
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Te ayudaremos en el seguimiento de tus resultados') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

                    <div class="table-pricing__body-row-show-children table-pricing__body-row-aqua">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                              {{ $t('Configución de tu negocio en Google My Business') }}.
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Para que generes más interacciones con tus clientes locales') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

                    <div class="table-pricing__body-row-show-children">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Creación y/o optimización de tus redes sociales ') }}.
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Instagram, Facebook y una tercera red opcional, dependiendo de tu negocio') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

                    <div class="table-pricing__body-row-show-children table-pricing__body-row-aqua">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Optimizaremos tu Whatsapp Business') }}.
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Crearemos tu identidad y plantillas de respuesta automáticas personalizadas') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

                    <div class="table-pricing__body-row-show-children">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Creación del plan de contenidos y calendario de publicaciones en redes sociales') }}
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Para que tengas una estrategia potente todo el año') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

                    <div class="table-pricing__body-row-show-children table-pricing__body-row-aqua">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Instalación de Google Analytics') }}.
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Para que puedas medir todo lo que pasa en tu sitio web') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

                    <div class="table-pricing__body-row-show-children">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Instalación de Facebook pixel') }}.
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Para que hagas publicidad en Facebook y conozcas más a tu público objetivo') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

                    <div class="table-pricing__body-row-show-children table-pricing__body-row-aqua">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Creación de dashboard personalizado de rendimiento con indicadores clave') }}.
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Para que entiendas tus datos muy fácil y tomes decisiones') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

                    <div class="table-pricing__body-row-show-children ">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Email marketing') }}
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                             {{ $t('Creación de envíos automáticos para mantener conectados a tus clientes') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

                    <div class="table-pricing__body-row-show-children table-pricing__body-row-aqua">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Creación de plantillas personalizadas') }}
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Para que hagas envíos por correo con la identidad de tu marca') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>


          </div>

          <!-- oneee second div-->

          <div 
            @click="toogleSection('table-pricing__body-row-website')" 
            id="table-pricing__body-row-website" 
            class="table-pricing__body-row"
          >
                
                <div class="table-pricing__body-row-first">
                    <div class="table-pricing__body-row-first-arounds">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/>
                        </svg>

                        <svg class="d-none" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                            <path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/>
                            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/>
                        </svg>
            
                    </div>

                    <p class="table-pricing__body-row-first-text"> {{ $t('Creación de página web') }} </p>

                </div>

                <div class="table-pricing__body-row-pricing-price">
                  
                </div>
                <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                  <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="table-pricing__body-row-pricing-price">
                  <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
          </div>

          <div id="table-pricing__body-row-website-children" class=" table-pricing__body-row-show">
                    <div class="table-pricing__body-row-show-children table-pricing__body-row-aqua">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Maquetación de página web') }}
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                             {{ $t('Creación de tu web sin que tengas que saber de programación') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

                    <div class="table-pricing__body-row-show-children">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Diseño y desarrollo de tu propia página web o e-commerce') }}.
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Ajustada a tu identidad de marca') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

                    <div class="table-pricing__body-row-show-children table-pricing__body-row-aqua">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Integración con los widgets de Bewe') }}.
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Tus clientes podrán reservar desde tu website') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

          </div>

          <!-- oneee three div -->

          <div 
            @click="toogleSection('table-pricing__body-row-app')" 
            id="table-pricing__body-app" 
            class="table-pricing__body-row table-pricing__body-row-aqua"
          >
                
                <div class="table-pricing__body-row-first">
                    <div class="table-pricing__body-row-first-arounds">
                        <svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/>
                        </svg>

                        <svg class="d-none" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                            <path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/>
                            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/>
                        </svg>
            
                    </div>

                    <p class="table-pricing__body-row-first-text"> {{ $t('Desarrollo de app personalizada') }} </p>

                </div>

                <div class="table-pricing__body-row-pricing-price">
                  
                </div>
                <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                  
                </div>
                <div class="table-pricing__body-row-pricing-price">
                  <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
          </div>

          <div id="table-pricing__body-row-app-children" class=" table-pricing__body-row-show">
                    <div class="table-pricing__body-row-show-children">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Creación de tu propia app personalizada para Play Store') }}
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Con tus colores e identidad corporativa') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

                    <div class="table-pricing__body-row-show-children table-pricing__body-row-aqua">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Creación de tu propia app personalizada para iOS') }}
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{  $t('Con tus colores e identidad corporativa') }}
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>


          </div>

          <!-- oneeee four div -->

          <div 
            @click="toogleSection('table-pricing__body-row-sector')" 
            id="table-pricing__body-row-sector" 
            class="table-pricing__body-row"
          >
                
                <div class="table-pricing__body-row-first">
                    <div class="table-pricing__body-row-first-arounds">
                        <svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/>
                        </svg>

                        <svg class="d-none" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                            <path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/>
                            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/>
                        </svg>
            
                    </div>

                    <p class="table-pricing__body-row-first-text"> {{ $t('Comunidad exclusiva para tu sector') }} </p>

                </div>

                <div class="table-pricing__body-row-pricing-price">
                  
                </div>
                <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                  <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="table-pricing__body-row-pricing-price">
                  <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
          </div>

          <div id="table-pricing__body-row-sector-children" class=" table-pricing__body-row-show">
                    <div class="table-pricing__body-row-show-children table-pricing__body-row-aqua">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Cursos exclusivos de marketing digital') }}.
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Recursos actualizados para que no pares de aprender') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

                    <div class="table-pricing__body-row-show-children">
                        <div class="table-pricing__body-row-show-children-first">
                            <p class="table-pricing__body-row-show-first-text">
                                {{ $t('Espacio único de conocimiento') }}.
                            </p>

                            <svg class="svg-info" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>

                            <div class="table-pricing__body-messague">
                              {{ $t('Interactúa con colegas de tu sector en una plataforma tecnológica') }}.
                            </div>

                        </div>

                        <div class="table-pricing__body-row-pricing-price">
                          
                        </div>
                        <div class=" table-pricing__body-row-pricing-price table-pricing__body-row-medium border-x">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div class="table-pricing__body-row-pricing-price">
                          <svg class="svg-price" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                    </div>

          </div>

          <p class="table-pricing__body-text-footer">
            <span class="table-pricing__body-text-footer-simbol"> * </span> 

            <span class="table-pricing__body-text-footer-texto">
                 {{
                  $t(`No respondemos mensajes de tus redes sociales.
                    Nuestros especialistas te guiarán para que lo 
                    hagas tú mismo de forma sencilla`
                    )
                }}.
            </span>
          </p>

        </div>
      </section>
    </div>
    <div class="pricing__faq--container">
      <div class="pricing__faq">
        <h2 class="pricing__faq__title"> {{ $t('Preguntas frecuentes') }} </h2>

        <div class="pricing__faq__faqs">
          <div @click="($event) => openFAQ( 'pricing__faq__faqs__faq_one' )" id="pricing__faq__faqs__faq_one" class="pricing__faq__faqs__faq">
            <div class="pricing__faq__faqs__faq__title">

              <div class="text">
                <p class="pricing__faq__faqs__faq__title-text">
                  {{ $t('¿Por qué elegir Bewe ONE para mi negocio?') }}
                </p>

              </div>

              <span class="pricing__faq__faqs__faq__arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M9 5l7 7-7 7"
                  />
              </svg>
             </span>

            </div>
            <p class="pricing__faq__faqs__faq__text d-none">
              {{
                $t(`Porque podrás conseguir resultados desde el primer
                 mes con una solución única en el mercado que fusiona
                  lo mejor de la tecnología con la experiencia de especialistas en marketing.`
                )
              }}
            </p>
          </div>
          <div @click="($event) => openFAQ('pricing__faq__faqs__faq_two')" id="pricing__faq__faqs__faq_two" class="pricing__faq__faqs__faq">
            <div class="pricing__faq__faqs__faq__title">

              <div class="text">
                <p class="pricing__faq__faqs__faq__title-text">
                  {{ $t('¿Necesito saber algo de marketing digital?') }}
                </p>

              </div>

              <span class="pricing__faq__faqs__faq__arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M9 5l7 7-7 7"
                  />
              </svg>
             </span>

            </div>
            <p class="pricing__faq__faqs__faq__text d-none">
              {{ 
                $t(`No necesitas saber nada de marketing digital. Tenemos un equipo de especialistas
                 que están preparados para guiarte y enseñarte cada uno de los pasos en este viaje 
                 de crecimiento.`
                )
              }}
            </p>
          </div>

          <div @click="($event) => openFAQ('pricing__faq__faqs__faq_three')"  id="pricing__faq__faqs__faq_three" class="pricing__faq__faqs__faq">
            <div class="pricing__faq__faqs__faq__title">

              <div class="text">
                <p class="pricing__faq__faqs__faq__title-text">
                  {{ $t('¿Cuánto tiempo dura mi plan con Bewe ONE?') }}
                </p>

      

              </div>

              <span class="pricing__faq__faqs__faq__arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M9 5l7 7-7 7"
                  />
              </svg>
             </span>

            </div>
            <p class="pricing__faq__faqs__faq__text d-none">
              {{
                $t(`
                  Tu plan con Bewe ONE tendrá una duración de 12 meses.
                  Estarás pensando que es mucho tiempo pero lo que no
                  sabes es que te garantizamos resultados a corto,
                   mediano y largo plazo. ¡Anímate!
                `)
              }}
            </p>
          </div>

          <div @click="($event) => openFAQ('pricing__faq__faqs__faq_four')" id="pricing__faq__faqs__faq_four"  class="pricing__faq__faqs__faq">
            <div class="pricing__faq__faqs__faq__title">

              <div class="text">
                <p class="pricing__faq__faqs__faq__title-text">
                  {{ $t('¿Tengo asesoramiento personalizado en marketing?') }}
                </p>

              </div>

              <span class="pricing__faq__faqs__faq__arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M9 5l7 7-7 7"
                  />
              </svg>
             </span>

            </div>
            <p class="pricing__faq__faqs__faq__text d-none">
              {{
                $t(`Asignaremos un especialista en marketing para ti.
                Podrás preguntarle lo que necesites y estará disponible
                para orientarte en cada paso que demos.`)
              }}
            </p>
          </div>

          <div @click="($event) => openFAQ('pricing__faq__faqs__faq_five')" id="pricing__faq__faqs__faq_five" class="pricing__faq__faqs__faq">
            <div class="pricing__faq__faqs__faq__title">

              <div class="text">
                <p class="pricing__faq__faqs__faq__title-text">
                  {{ $t(`¿El equipo de Bewe ONE responderá los mensajes que lleguen a mis redes sociales?`) }}
                </p>

              </div>

              <span class="pricing__faq__faqs__faq__arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M9 5l7 7-7 7"
                  />
              </svg>
             </span>

            </div>
            <p class="pricing__faq__faqs__faq__text d-none">
              {{
                $t(`Te ayudaremos con tu estrategia de contenidos en redes sociales pero
                 **no daremos respuesta a los mensajes que lleguen a tus publicaciones y bandeja de entrada**.
                 Te asesoraremos para que centralices todo en
                 la plataforma Creator Studio y así te sea más fácil responder todos los mensajes que recibes.`
                )
              }}
            </p>
          </div>

          <div @click="($event) => openFAQ('pricing__faq__faqs__faq_seven')" id="pricing__faq__faqs__faq_seven" class="pricing__faq__faqs__faq">
            <div class="pricing__faq__faqs__faq__title">

              <div class="text">
                <p class="pricing__faq__faqs__faq__title-text">
                  {{ $t('Si ya tengo el software de Bewe, ¿puedo adquirir el plan de marketing?') }}
                </p>

              </div>

              <span class="pricing__faq__faqs__faq__arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M9 5l7 7-7 7"
                  />
              </svg>
             </span>

            </div>
            <p class="pricing__faq__faqs__faq__text d-none">
              {{ $t(`Lo puedes hacer sin ningún problema. Queremos que nuestros 
                    clientes tengan las mejores estrategias de marketing y
                    crecimiento para sus negocios así que este producto ha sido diseñado
                    específicamente para ustedes.`
                  )                            
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { t } from 'vue-i18n';


export default {
    name: 'TablePricing',
    data(){
        return{
            // visibleSectionOneChild: false,
            visibilyInfoModal: false,
            elementsSliders: NodeList,
            positionSlide: 0,
        }
    }, 
    mounted(){
      this.elementsSliders = document.querySelectorAll('.pricing__prices > div');
      console.log( { sliders: this.elementsSliders } );
    },
    methods: {
 
        toogleSection(id){
            console.log('click');
            // const elementClick = document.getElementById(id);
            const elementShow = document.getElementById(`${id}-children`);
            const elementChilds = document.querySelectorAll(`#${id}-children > .table-pricing__body-row-show-children `);
            const elementsArounds = document.querySelectorAll(`#${id} div div svg`);
 
            elementsArounds.forEach( e => e.classList?.toggle('d-none')); 
            elementShow.classList?.toggle('visible');
            elementChilds.forEach( e => e.classList.toggle('visible') );
        },
        openFAQ( id ){
          const element = document.getElementById(id);
          element.children[1].classList.toggle('d-none');
          element.firstElementChild.lastElementChild.classList.toggle('pricing__faq__faqs__faq__arrow-rotate');
        },
        prevSlide(){

          this.elementsSliders[this.positionSlide].classList.remove('pricing__price-show');
          this.positionSlide--;
          if( this.positionSlide < 0 ){
            this.positionSlide = this.elementsSliders.length - 1;
          }

          this.elementsSliders[this.positionSlide].classList.add('pricing__price-show');
        },
        nextSlide(){
          this.elementsSliders[this.positionSlide].classList.remove('pricing__price-show');
          this.positionSlide++;
          if( this.positionSlide > this.elementsSliders.length - 1 ){
            this.positionSlide = 0;
          }

          this.elementsSliders[this.positionSlide].classList.add('pricing__price-show');

        }
    },
 
}
</script>

<style scoped>


/* Mobile 320px */
.pricing {
  width: 100%;
  padding: 0px 10px;
  text-align: center;
  background-color: #ffffff;
}

.pricing__title {
  color: #141a10;
  font-weight: 700;
  font-size: 25px;
  margin: 0;
  padding: 0;
  font-family: 'VisbyCF-Bold';
  margin-bottom: 50px;
}

.pricing__description {
  color: #707070;
  font-size: 16px;
  font-family:'RNSSanz-Normal';
}

.pricing__description-bold{
  font-family: 'RNSSanz-Bold' ;
  color: #000000;
}

.pricing__prices-container{
  max-width: 95%;
  display: grid;
  grid-template-columns: 50px 1fr 50px;
  justify-content: center;
  align-items: center;
  justify-items: center;
  margin: 0 auto;
  /* align-content: center; */
}

.pricing__prices {
  

  max-width: 100%;
  overflow-x: hidden;
  margin: 0 auto;
  display: grid;
  padding: 5rem 0;
  /* grid-template-columns: repeat(3, 1fr); */
}

.pricing__prices > div {
  grid-column: 2 / 3 ;
  grid-row: 1 / 2;
  opacity: 0;
  pointer-events: none;
  transition: 1s all ease-in-out;
}

.pricing__prices > div:not(.pricing__price-show){
  transform: scale(.3);
}

.pricing__price-show{
  opacity: 1 !important;
  transform: scale(1);
  pointer-events: unset;
}

/* .pricing__prices {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  max-width: 100%;
  overflow-x: hidden;
  margin: 0 auto;
} */

.pricing__prices__price {
  border-radius: 10px;
  margin-bottom: 30px;
  padding: 10px 5px;
  position: relative;
  width: 100%;
}

/* .pricings_divs{
  width: 400%;
} */

.pricing__prices__price--blue {
  border: 2px solid #000000;
}


.pricing__prices__price--middle {
  position: relative;
}

.pricing__prices__price--middle::before {
  content: "";
  background-color: #70E0EF;
  height: 20px;
  width: 120px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  top: -20px;
  left: 10px;
  position: absolute;
}


.pricing__faq__faqs__faq__title-text-body{
  font-family: 'RNSSanz-Medium';
}

.pricing__prices__price--middle::after {
  content: "";
  background-image: url('https://i.imgur.com/ANCa3UA.png');
  background-size: 100%;
  top: -80px;
  right: -40px;
  width: 200px;
  height: 120px;
  display: block;
  background-repeat: no-repeat;
  position: absolute;
  transform: scale(.5);
}

.pricing__prices__price--third{
  padding-bottom: 50px;
}

.pricing__prices__price--third::before {
  content: "";
  background-image: url('https://i.imgur.com/4j6ZfQy.png');
  background-size: 100%;
  bottom: -55px;
  right: -70px;
  width: 200px;
  height: 200px;
  display: block;
  background-repeat: no-repeat;
  position: absolute;
  transform: scale(.5);
}

.pricing__prices__price--third::after {
  content: "";
  background-image: url('https://i.imgur.com/Ubz31aw.png');
  background-size: 100%;
  top: -120px;
  right: -30px;
  width: 160px;
  height: 180px;
  display: block;
  background-repeat: no-repeat;
  position: absolute;
  transform: scale(.5);
}

.pricing__prices__price--blue-aqua {
  border: 2px solid #70E0EF;
  margin: 0px;
}

.pricing__prices__price__details,
.pricing__prices__price__description {
  /* border-bottom: 1px solid #ccc; */
  /* padding: 15px; */
}

.pricing__prices__price__description-strong{
  margin: 10px auto;
  display: block;
  color:#000000;
}

.pricing__prices__price__details__title {
  color: #141a10;
  margin: 16px 0;
  padding: 0;
  font-weight: 400;
  font-size: 28px;
}

.pricing__prices__price__details__price {
  align-items: center;
  display: flex;
  color: #141a10;
  font-weight: 700;
  font-size: 28px;
  justify-content: center;
  margin: 16px;
  padding: 0;
}

.pricing__prices__price__details__price__currency {
  color: #141a10;
  font-weight: 700;
  font-size: 16px;
}
.pricing__prices__price__details__price__currency-one{
  margin-bottom: 20px;
}

.pricing__prices__price__details__price__text{
  font-family: 'VisbyCF-Bold' ;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.pricing__prices__price__details__price__text-twenty-nine{
  margin: 0;
}

.pricing__prices__price__details__price__text-essential{
  font-size: 16px;
  margin: 0;
}

.pricing__prices__price__details__month {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 700;
  margin-left: 10px;
  position: relative;
}

.pricing__prices__price__details__month__off::before {
  background-color: #70E0EF;
  content: "";
  display: block;
  height: 30px;
  left: 50%;
  top: -5px;
  position: absolute;
  transform: rotate(60deg) translateX(-50%);
  width: 2px;
}

.pricing__prices__price__details__year {
  color: #707070;
  font-size: 16px;
  font-family:'RNSSanz-Normal' !important;
}

.pricing__prices__price__description {
  color:#707070;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  font-size: 16px;
  margin: 0 auto !important;
  padding: 15px 0;
  width: 85%;
  font-family: 'RNSSanz-Normal' !important ;
}

.pricing__prices__price__features {
  margin: 0;
  margin-top: 15px;
  padding: 15px;
}

.pricing__prices__price__features__title {
  color:#707070;
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 15px;
  padding: 0;
  text-align: left;
  font-family:'RNSSanz-Medium';
}

.pricing__prices__price__features__feature {
  color:#707070;
  font-size: 13px;
  margin: 0;
  margin-bottom: 20px;
  padding: 0;
  text-align: left;
  font-family:'RNSSanz-Normal';
}

.pricing__prices__price__features__feature__bubble {
  display: inline-block;
  border-radius: 50%;
  background-color: black;
  height: 10px;
  margin-right: 2px;
  width: 10px;
}

.pricing__prices__price__features__feature__bubble--blue {
  /* background-color: #22a5b2; */
}

.pricing__prices__price__features__feature__bubble--orange {
  background-color: #70E0EF;
}

/* 768 */
@media (min-width: 768px) {
  .pricing {
    padding: 0px;
  }

  .pricing__prices__price--blue-aqua{
    height: 800px;
  }

  .pricing__prices {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    max-width: 100%;
    overflow-x: hidden;
    margin: 0 auto;
  }

  .pricing__prices-container{
    display: block;

  }

  .pricing__prices-container > svg{
      display: none; 
  }

  .pricing__prices > div {
    opacity: 1;
    transform: scale(1) !important;
  }


  
  .pricing__title {
    font-size: 35px;
  }

  .pricing__prices__price--blue{
    height: 850px !important;
  }

  .pricing__prices{
    max-width: 100% !important;
  }
  

  .pricing__prices__price--blue::before{
    right: -50px;
  }

  .pricing__prices__price--middle::after {
    content: "";
    background-image: url('./../assets/pajaros1.png');
    background-size: 100%;
    top: -105px;
    right: -80px;
    width: 250px;
    height: 180px;
    display: block;
    background-repeat: no-repeat;
    position: absolute;
    transform: scale(.5);
}

  .pricing__description {
    font-size: 20px;
    text-align: center;
    line-height: 1.6;
    max-width: 60%;
    margin: 20px auto 100px auto;
  }

  .pricing__prices {
    align-items: flex-end;
    display: flex;
    flex-direction: row;
    justify-content: center;

    flex-basis: calc(100% / 3 - 20px);
  }
  .pricing__prices__price--middle{
    height: 900px !important;
    margin: 0 20px !important;
  }

  .pricing__prices__price--third{
    height: 850px !important;
  }

  .pricing__prices__price {
    margin: 0px 10px;
  }

  .pricing__prices__price__details {
    margin-bottom: 15px;
  }

  .pricing__prices__price__details__title {
    font-size: 30px;
  }

  .pricing__prices__price__details__price {
    font-size: 50px;
  }

  .pricing__prices__price__details__price__currency {
    font-size: 20px;
  }


  .pricing__prices__price--blue-aqua{
    margin: 0px;
  }

}

@media screen and (min-width: 992px) {
    /* pricing__prices__price--third */

  

  .pricing__prices__price--middle::after{
    transform: scale(.6);
  }

  .pricing__prices__price--blue{
    height: 750px !important;
  }

  .pricing__prices__price--middle{
    height: 800px !important;
  }

  .pricing__prices__price--third{
    height: 750px !important;
  }
}

/* 1200px */
@media (min-width: 992px) {
  .pricing__prices {
    margin: 0 auto;
    width: 95%;
  }
}

/* Comparar Planes */
.pricing__plans {
  width: 100%;
  margin: 80px 0;
}

.pricing__plans__title {
  font-size: 30px;
  font-weight: 700;
}

.pricing__plans__table {
  width: 100%;
}

.pricing__plans__table__head {
}

.pricing__plans__table__head__title {
  text-align: left;
}

.pricing__plans__table__head__parent__children {
  display: none;
}

.pricing__plans__table__head__plans {
  display: flex;
}

.pricing__plans__table__head__plans__plan {
  display: flex;
  flex-basis: calc(100% / 3);
  justify-content: center;
}

.pricing__plans__table__head__plans__plan__image {
}

.pricing__plans__table__head__plans__plan__button {
  border-radius: 5px;
  font-size: 16px;
  padding: 5px 15px;
}

.pricing__plans__table__head__plans__plan__button--outline--blue {
  background-color: transparent;
  border: 2px solid #22a5b2;
  color: #22a5b2;
}

.pricing__plans__table__head__plans__plan__button--orange {
  background-color: #ff9a5d;
  color: #ffffff;
}

.pricing__plans__table__head__plans__plan__button--outline--orange {
  background-color: transparent;
  border: 2px solid #ff9a5d;
  color: #ff9a5d;
}



.pricing__plans__table__body {
}

.pricing__plans__table__body__row {
  display: block;
  width: 100%;
}

.pricing__plans__table__body__row__parent {
  display: block;
  text-align: left;
  width: 100%;
}

.pricing__plans__table__body__row__parent__title {
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  text-align: left;
}

.pricing__plans__table__body__row__parent__text {
  color: gray;
  font-size: 14px;
  margin: 0;
  padding: 0;
  text-align: left;
}

.pricing__plans__table__body__row__children {
  display: flex;
  margin: 15px 0;
  width: 100%;
}

.pricing__plans__table__body__row__children__child {
  width: calc(100% / 3);
}

.pricing__plans__table__body__row__menu {
  display: none;
}

@media (min-width: 768px) {

  .pricing__faq{
    width: 80%;
    margin: 0 auto;
  }

  .pricing__plans__table__head__parent {
    display: flex;
  }

  .pricing__plans__table__head__plans {
    align-self: flex-end;
    display: flex;
    width: 60%;
  }

  .pricing__plans__table__head__plans__plan {
    width: calc(100% / 3);
  }
}

/* Preguntas Frecuentes */
.pricing__faq--container {
  background-color: #CCF8FF;
  padding: 30px 15px;
}

.pricing__faq__title {
  color: #141a10;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
  font-family: 'VisbyCF-Bold';
}

.pricing__faq__faqs {
}

.pricing__faq__faqs__faq {
  background-color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 20px;
  padding: 20px;
  position: relative;
  font-weight: 500;
}

.pricing__faq__faqs__faq::before{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.pricing__faq__faqs__faq__title {
  color: #141a10;
  font-size: 18px;
  font-weight: 500;
  text-align: left;
  display: flex;
  align-items: center;

}

.pricing__faq__faqs__faq__title-text{
  font-size: 20px;
  font-family: 'RNSSanz-SemiBold';
}

.pricing__faq__faqs__faq__text {
  text-align: left;
  font-weight: 300;
}

.pricing__faq__faqs__faq__arrow {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

@media(min-width: 768px){
  .pricing__faq__faqs__faq__arrow {
    position: absolute;
    top: 40px;
    right: 30px;
    cursor: pointer;
  }
}

.pricing__faq__faqs__faq__arrow-rotate{
  transform: rotate(90deg)
}



.pricing__faq__faqs__faq__arrow svg {
  stroke: #01DCFD;
  stroke-width: 4px;
  width: 25px;
  cursor: pointer;
}


@media (min-width: 768px) {
  .pricing__faq__title{
    font-size: 34px;
  }
}

@media (min-width: 1200px) {
  .pricing__faq {
    margin: 0 auto;
    /* width: 1200px; */
  }
}
 
figure{
    margin: 0;
}

.svg-info{
  display:none;
  width: 20px;
  cursor: pointer;
  fill: #C5C1C1;
}



.svg-price{
  width: 25px;
  stroke: #7660A5;
  stroke-width: 2px;
}
 
/* .border-x{
    border-left: 1px solid #FF9A5D;
    border-right: 1px solid #FF9A5D;
}
  */
.table-pricing{
    width: 100%;
    
    font-weight: 900; 
}
 
.table-pricing__title{
    text-align: center;
    font-size: 35px;
    font-weight: 700;
    font-family: 'VisbyCF-Bold';
}
 
.table-pricing__header{
  background-color: #ffffff;
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;
    position: sticky;
    padding: 16px 0;
    top: 0;
    z-index: 10;
 
}
 
.table-pricing__header-container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 80px;
}
 
.table-pricing__header-container-empty{
    grid-area: 1 / 1;
    display: none;
}
 
.table-pricing__header-container > svg {
    max-width: 50%;
}
 
.table-pricing__button{
    background-color: var(--white);
    padding: 5px 10px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    border-radius: 5px;
    font-family: 'RNSSanz-SemiBold';
}

.table-pricing__tecnology{
  display: flex;
  margin: 0 ;
  align-items: center;
  /* 00EB73 */
}
 
.table-pricing__tecnology-cicle{
  background-color:#00EB73;
  width: 15px;
  height: 15px;
  border-radius: 50%;
}

.table-pricing__one-cicle{
  background-color: #00E9FF ;
}

.table-pricing__tecnology-text{
  font-size: 25px;
  font-weight: bold;
  color:#000000;
  margin-left: 20px;
}

.table-pricing__button-bewe{
    border: 1px solid #4DE6FE;
    color: #4DE6FE;
}
 
.table-pricing__button-bewe-one{
    background-color: #4DE6FE;
    border: 1px solid #ffffff;
    color: #000000;
}
 
.table-pricing__button-bewe-one-plus{
    border: 1px solid #4DE6FE;
    color: #4DE6FE;
}
 
.table-pricing__header-container-bewe-one{
 
}
 
.table-pricing__body{
    max-width: 100%;
    margin: 0 auto; 
}
 
.table-pricing__body-title{
    color: #000000;
    font-size: 28px;
    font-weight: 700;
    text-align: left;
    font-family: 'VisbyCF-Bold';
    max-width: 100%;
}
 
.table-pricing__body-row{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    font-weight: 700;
    cursor:pointer;
    text-align: center;
    color: #808080;
    border-radius: 5px;
}

 
.table-pricing__body-row-first{
    display: flex;
    grid-column: 1 / -1;
    color: #000000 ;
    align-items: center;
}

.table-pricing__body-row-pricing-price{
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 16px;
}
 
.table-pricing__body-row-show-children-first{
    display: flex;
    align-items: flex-start;
    grid-column: 1 / -1;
    color: #000000;
    flex-direction: column;
}
 
.table-pricing__body-row-medium{
    /* border-right: 1px solid #FF9A5D;
    border-left: 1px solid #FF9A5D; */
}
 
.table-pricing__body-row-green{
    background-color: #B2F9D5;
}

.table-pricing__body-row-aqua{
  background-color: #CCF8FF;
}
 
.table-pricing__body-row-first-arounds > svg{
    max-width: 25px;
    margin: 0 10px 0 0;
    fill: #7660A5;
    stroke-width: 2px;
}

.table-pricing__body-row-show{
  height: 0;
  opacity: 0;
}
 
.table-pricing__body-row-show-children{
    display: grid;
    grid-template-columns: repeat(3 , 1fr);
    grid-column: 1 / 3;
    text-align: center;
    transition: 1s all ease-in-out;
    cursor: pointer;
    pointer-events: none;
    height: 0 ;
    opacity:0;
    border-radius:5px;
}
 
 
 
 
 
.heightActive{
    display: grid;
}
 
.table-pricing__body-row-first-text{
    text-align: left;
    font-weight: 700; 
    margin:16px;   
    font-size: 20px;
    font-family: 'VisbyCF-Bold' !important;
}

.table-pricing__body-row-show-first-text{
  max-width: 100%;
  font-weight: 900;
  margin: 16px 10px 16px 32px;
  font-family: 'VisbyCF-Bold';
  text-align: left;
}


.table-pricing__body-messague{
  align-items: center;
  border-radius: 5px;
  color: #808080;
  font-family: 'RNSSanz-Light';
  font-weight: 500;
  justify-content: center;
  margin:0 32px;
  max-width: 100%;
  min-height: 50px;
  padding: 5px 10px;
  text-align: left;
  transition: .5 all ease-in-out;
}

.svg-info:hover + .table-pricing__body-messague {
  opacity:1;
}

.table-pricing__body-text-footer{
  font-family:'RNSSanz-Normal';
  text-align:left;
  display: flex;
  align-items: flex-start;
}

.table-pricing__body-text-footer-simbol {
  margin: 10px 16px 0 0;
  font-size: 40px;
  color: #4DE6FE;
}

.table-pricing__body-text-footer-texto{
  font-size: 20px;
  line-height: 2;
  font-family: 'RNSSanz-ExtraBold';
  color: #000;
}

@media screen and (min-width: 576px){
  .table-pricing__body{
    max-width: 90%;
  }

  .table-pricing__header{
    max-width: 90%;
  }


}


 
@media screen and (min-width: 768px){

  .svg-info{
    display: block;
  }

  .table-pricing__body-row-show-first-text{
    max-width: 40%;
  }

  .table-pricing__body-row-show-children-first{
    flex-direction: row;
    align-items: center;
  }

  .table-pricing__body-messague{
    position: absolute;
    left: 60%;
    width: 180px;
    min-height: 50px;
    background-color: #ffffff;
    border-radius: 5px;
    text-align: center;
    /* border: .1px solid #000000; */
    -webkit-box-shadow: 0px 5px 5px 0px rgb(190, 190, 190);
    -moz-box-shadow: 0px 5px 5px 0px rgba(190, 190, 190);
    box-shadow: 0px 5px 5px 0px rgba(190, 190, 190);
    font-size: 12px;
    margin: 16px;
    opacity:0 ;
    transition: .5 all ease-in-out;
    padding: 5px 10px;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    color: #808080;
    font-family: 'RNSSanz-Light';
  }
 
    .table-pricing__header{
        grid-template-columns: repeat(6, 1fr);
    }
    .table-pricing__header-container-empty{
        display: flex;
        grid-column: 1 / -4;
    }

    .table-pricing__body-title{
      max-width: 50%;
    }
 
    .table-pricing__body-row{
        grid-template-columns: repeat(6, 1fr);
    }
 
    .table-pricing__body-row-first{
        grid-column: 1 / 4;
    }
 
    .table-pricing__body-row-show-children{
        grid-template-columns: repeat(6, 1fr);
    }
    .table-pricing__body-row-show-children-first{
      position:relative;
      justify-content: flex-start;
      grid-column: 1 / 4;
      margin: 0 0 0 10%;
      display: flex;
    }
}

@media screen and (min-width: 992px) {

  .table-pricing__body-messague{
    left: 55%;
  }

  .table-pricing__body-text-footer-texto{
    font-size: 25px;
  }
}

.visible{
    height: auto !important;
    opacity: 1 !important;
    pointer-events: auto;
}


</style>
