<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Accidentes en la primera infancia'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.justify-content-center.align-items-center.bg-color-2.mb-5.bor
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-9(data-aos="fade-left").order-2
            p.mb-0 Los accidentes en la primera infancia son eventos inesperados, no intencionales y súbitos, que pueden ocasionar daño físico o psicológico a niñas y niños. La Organización Mundial de la Salud (OMS, 2002) clasifica los accidentes como una forma de violencia no intencional, definiéndolos como “el uso deliberado de la fuerza física o del poder, ya sea en grado de amenaza o efectivo, contra uno mismo, otra persona o un grupo o comunidad, que cause o tenga muchas probabilidades de causar lesiones, muerte, daños psicológicos, trastornos del desarrollo o privaciones”. Estos sucesos surgen a partir de factores de riesgo ambientales, humanos o combinados, y su gravedad puede variar desde raspaduras y contusiones hasta fracturas, intoxicaciones o secuelas emocionales.
          .col-lg-3(data-aos="zoom-in").order-1.mb-3.mb-lg-0
            img.img-fluid(src='@/assets/curso/tema3/1.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Gestión de riesgo de accidentes en la primera infancia
    
    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-6.p-4(data-aos="fade-left").mb-3
          p.mb-0 Gestionar los riesgos de accidentes en la primera infancia implica establecer un sistema ordenado, dinámico y continuo de acciones integradas para salvaguardar la vida, la integridad y el desarrollo pleno de los niños y niñas. Este sistema debe aplicarse en todos los entornos en los que interactúan: hogar, aula, zonas de juego y espacios exteriores.
        p(data-aos="fade-left") El enfoque se estructura en cinco fases interdependientes, que se retroalimentan permanentemente dentro de un ciclo de mejora continua:
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/3.png")
            .col-lg-7
              h3 1. Identificación de peligros
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Inspección física detallada de aulas, patios, comedores y sanitarios. 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Detección de riesgos en mobiliario (esquinas filosas, estanterías inestables) y acabados (pisos resbaladizos). 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Observación de conductas de riesgo (subir, saltar, trepar, juegos improvisados). 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Análisis de actividades pedagógicas (uso de tijeras, pinturas, juguetes en mal estado).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/4.png")
            .col-lg-7
              h3 2. Evaluación de riesgos
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Cuantificación de la probabilidad de ocurrencia según uso y experiencia previa. 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Valoración de la severidad del daño potencial (desde rasguños hasta traumatismos graves). 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Priorización y planificación de la mitigación, con listas de riesgos críticos y moderados, asignando responsables y plazos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/5.png")
            .col-lg-7
              h3 3. Prevención
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Diseño y adecuación de espacios seguros (protección en enchufes, barandas, pisos acolchados).  
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Sustitución de materiales peligrosos (sustancias tóxicas, juguetes con piezas pequeñas).  
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Elaboración de protocolos operativos (uso de herramientas, normas de comportamiento, pictogramas de precaución).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/6.png")
            .col-lg-7
              h3 4. Intervención
              p (Se infiere como fase siguiente en el ciclo, aunque no está desarrollada explícitamente en el texto original). 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Aplicación de acciones inmediatas frente a situaciones de riesgo detectadas.  
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Activación de protocolos de emergencia.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/7.png")
            .col-lg-7
              h3 5. Evaluación y retroalimentación
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Revisión sistemática del sistema implementado.  
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Ajuste continuo de medidas en función de nuevas observaciones y resultados.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/8.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La protección frente a peligros físicos en la primera infancia es un derecho fundamental. Es esencial reconocer que los accidentes no son hechos fortuitos, sino situaciones evitables que deben ser abordadas como formas de violencia no intencional. Estos eventos están frecuentemente relacionados con factores ambientales y la falta de preparación de los adultos responsables.
    
        .bg-color-4.p-4(data-aos="fade-left").mb-3
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/9.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Este enfoque está alineado con la Convención de las Naciones Unidas sobre los Derechos del Niño, que establece la responsabilidad social de garantizar entornos seguros y protectores. Implementar acciones concretas de prevención es vital, ya que los accidentes son una de las principales causas de mortalidad y discapacidad en la infancia.
        p Por tanto, la prevención y la protección no son opcionales, sino obligaciones fundamentales para garantizar el bienestar, la seguridad y el desarrollo integral de los niños y niñas.
    
    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Peligros y riesgos para cuidadores y profesores
    
    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/10.png', alt='')
        .col-lg
          .p-4.text-white
            p.mb-0(data-aos="fade-up") El entorno laboral de cuidadores y profesores implica una gran responsabilidad y compromiso con el bienestar de otras personas, especialmente niños, personas mayores o individuos en situación de dependencia. Estos profesionales desempeñan un papel fundamental en el desarrollo, atención y protección de individuos vulnerables. Sin embargo, muchas veces se subestiman los riesgos ergonómicos, físicos, emocionales y ambientales que enfrentan diariamente, lo que puede repercutir negativamente en su salud, seguridad y rendimiento laboral.

    h2(data-aos="fade-left") Riesgos físicos
    p.mb-5 Los cuidadores y docentes están expuestos a una variedad de peligros que pueden provocar lesiones agudas o enfermedades crónicas. Entre los principales se encuentran:

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/11.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Movimientos repetitivos y posturas forzadas")
            p Actividades como levantar, movilizar o asistir a los usuarios, si se realizan sin técnica adecuada, pueden provocar lesiones musculoesqueléticas: lumbalgias, tendinitis o hernias discales.
    
          .div(titulo="Caídas, resbalones o tropiezos")
            p Provocados por pisos mojados, cables sueltos, juguetes o materiales fuera de lugar. Pueden causar esguinces, fracturas o contusiones.
    
          .div(titulo="Manipulación de materiales o productos químicos")
            p El uso de productos como desinfectantes, pinturas o limpiadores puede ocasionar alergias, irritaciones, quemaduras o intoxicaciones si no se emplea el equipo de protección adecuado.
    
          .div(titulo="Uso prolongado de la voz")
            p Especialmente en docentes, puede generar disfonías o problemas crónicos en las cuerdas vocales si no se aplican medidas preventivas o pausas vocales.
          .div(titulo="Espacios reducidos o mal diseñados")
            p Dificultan el movimiento seguro, la organización del entorno y la privacidad en tareas específicas, aumentando el riesgo de accidentes.
    
    .bg-full-width.bg-color-5
      .px-4.px-md-5.pb-md-3

        h2(data-aos="fade-left") Riesgos biológicos
        p.mb-5 En centros educativos y de cuidado, el contacto directo y constante con personas vulnerables implica una elevada exposición a agentes biológicos. Estos riesgos pueden afectar tanto a cuidadores como a docentes, especialmente en contextos con alta densidad de personas y limitadas condiciones de aislamiento.
        .row.justify-content-center.align-items-stretch
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/12.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2.text-center Exposición a fluidos corporales
                p.mb-0 Contacto con saliva, orina u otros fluidos durante actividades de higiene o atención directa. Aumenta el riesgo de contagio si no se siguen medidas de protección.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/13.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2.text-center Transmisión de enfermedades infecciosas
                p.mb-0 Patologías como resfriados, gripe, gastroenteritis, piojos, sarna o COVID-19 son comunes en entornos con alto nivel de contacto físico. La propagación es más probable si no existen estrategias de aislamiento eficaces.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/14.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2.text-center Falta de recursos de protección
                p.mb-0 La ausencia o insuficiencia de guantes, mascarillas o lavamanos funcionales incrementa la vulnerabilidad frente a contagios.
    
    .bg-full-width.bg-color-8.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/15.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Implementar protocolos estrictos de higiene, garantizar el acceso a vacunas actualizadas y proporcionar formación continua en bioseguridad son estrategias esenciales para reducir estos riesgos.
    
    h2(data-aos="fade-left") Riesgos psicosociales
    p.mb-5 Los factores psicosociales representan una dimensión crítica pero frecuentemente invisibilizada en el trabajo de cuidadores y docentes. Estos factores afectan profundamente la salud mental y emocional, comprometiendo tanto el bienestar personal como el desempeño profesional.

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/16.png")
            .col-lg-7
              h5 Sobrecarga de trabajo y multitarea
              p Jornadas extensas, atención a múltiples demandas simultáneas y tareas administrativas fuera del rol docente o de cuidado generan fatiga crónica y estrés.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/17.png")
            .col-lg-7
              h5 Demandas emocionales elevadas
              p El trabajo con niños con problemas de conducta, adultos mayores con demencias o personas con discapacidades conlleva un desgaste emocional constante y acumulativo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/18.png")
            .col-lg-7
              h5 Falta de reconocimiento institucional o social
              p La escasa valorización del trabajo puede provocar desmotivación, baja autoestima profesional y síndrome de burnout (agotamiento emocional, despersonalización y baja realización personal).
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/19.png")
            .col-lg-7
              h5 Riesgos de violencia
              p Posibles agresiones verbales o físicas por parte de usuarios, alumnos, familiares o colegas. Este tipo de situaciones requiere protocolos de intervención y apoyo psicológico institucional.
    
    .bg-full-width.bg-color-9.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Promover espacios de contención emocional, programas de bienestar laboral y políticas institucionales de reconocimiento y prevención del burnout son fundamentales para afrontar estos riesgos.
    
    h2(data-aos="fade-left") Riesgos físicos
    p.mb-5 El entorno físico de trabajo tiene un impacto directo en la salud y el bienestar de cuidadores y docentes. Condiciones ambientales inadecuadas pueden convertirse en factores de riesgo tanto físicos como psicológicos.

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/20.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Ruidos constantes y elevados")
            p Comunes en aulas con muchos niños, pasillos concurridos o centros de atención. Pueden dificultar la concentración, generar fatiga auditiva y aumentar los niveles de estrés.
    
          .div(titulo="Iluminación deficiente")
            p La falta de luz natural o el uso de iluminación artificial inadecuada provoca fatiga visual, cefaleas y somnolencia, afectando el rendimiento y la salud ocular.
    
          .div(titulo="Ventilación inadecuada")
            p Ambientes mal ventilados favorecen la propagación de enfermedades respiratorias y contribuyen a una sensación de pesadez, dificultando la concentración y el confort térmico.
    
    .row.justify-content-center.align-items-center.bg-color-4.mb-5.bor-1
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-10(data-aos="fade-left").order-2
            p.mb-0 Mejorar el diseño ambiental de los espacios, incorporar ventilación cruzada, optimizar la iluminación natural y controlar el nivel de ruidos son intervenciones clave para crear ambientes más saludables.
          .col-lg-2(data-aos="zoom-in").order-1.mb-3.mb-lg-0
            img.img-fluid(src='@/assets/curso/tema3/21.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
        

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://dyle.es/prevencion-de-riesgos-laborales-en-los-centros-escolares-contribucion-de-la-seguridad-y-la-salud-en-el-aprendizaje/ " target="_blank" rel="noopener noreferrer") Prevención de riesgos laborales en los centros escolares: contribución de la seguridad y la salud en el aprendizaje - DYLE. (s. f.-b). 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://osha.europa.eu/es/themes/mainstreaming-osh-education " target="_blank" rel="noopener noreferrer") Integración de la SST en la educación. (2025, 6 septiembre). Safety And Health At Work EU-OSHA. 



            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=hd352rlWJBE " target="_blank" rel="noopener noreferrer") K ND. (2013, 16 de abril). Prevención de enfermedades derivadas de la actividad profesional del personal docente. [Vídeo]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es el principal objetivo del Sistema de Gestión de Seguridad y Salud en el Trabajo (SGSST) en instituciones educativas?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Controlar la asistencia del personal',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Garantizar ambientes seguros y saludables para la comunidad educativa ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Vigilar el cumplimiento de los horarios escolares',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Administrar el presupuesto institucional',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué ley en Colombia establece la obligación de implementar el SGSST?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Ley 1098 de 2006',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Decreto 1072 de 2015',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Ley 1523 de 2012',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ley 1562 de 2012 ',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de los siguientes es un ejemplo de riesgo ergonómico para los cuidadores y docentes?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Uso de productos químicos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Exposición a enfermedades contagiosas',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Movimientos repetitivos al cargar niños ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Falta de ventilación en las aulas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué elemento es fundamental para prevenir accidentes con materiales tóxicos en laboratorios escolares?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Usar pisos antideslizantes',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Tener buena iluminación',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Capacitar al personal y señalizar adecuadamente ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Evitar el uso de materiales escolares',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál de los siguientes espacios presenta riesgos de contaminación biológica y quemaduras?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Biblioteca',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Cocina y comedor escolar ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Aula de arte',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Sala de informática',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
