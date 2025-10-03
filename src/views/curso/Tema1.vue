<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. La seguridad y salud en el trabajo en el contexto escolar'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4.text-white
            p.mb-0(data-aos="fade-up") El entorno escolar, concebido principalmente como espacio de aprendizaje y socialización, encierra también complejas dinámicas de riesgo que, de no atenderse con rigor, pueden comprometer la integridad física y emocional de estudiantes, docentes y personal de apoyo. La Seguridad y Salud en el Trabajo (SST) surge, en este sentido, como una disciplina estratégica cuyo propósito no es solo cumplir con exigencias legales, sino garantizar la construcción de ambientes seguros, saludables y propicios para el crecimiento pedagógico y humano.
    
    h2(data-aos="fade-left") Naturaleza y complejidad del entorno escolar
    p.mb-5 Las escuelas y guarderías modernas trascienden los muros del aula, convirtiéndose en espacios dinámicos y multifuncionales. Laboratorios de ciencias, talleres de arte, instalaciones deportivas, comedores, bibliotecas, espacios exteriores y aulas de música son algunos de los entornos donde se desarrollan actividades variadas, cada uno con desafíos particulares en materia de gestión de riesgos:

    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/2.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="69.5%" y="79.9%" numero="+")
                h5 Laboratorios de ciencias
                p Riesgo por sustancias químicas (ácidos, bases, inflamables), equipos eléctricos y vidriería. Requieren protocolos de seguridad, capacitación y señalización adecuada.
    
              .bg-color-white.box-shadow.p-3(x="68%" y="14.5%" numero="+")
                h5 Talleres de arte/tecnología
                p Uso de herramientas cortantes y pinturas tóxicas. Se requiere protección personal (guantes, gafas), supervisión constante y mantenimiento de maquinaria.
    
              .bg-color-white.box-shadow.p-3(x="25%" y="50%" numero="+")
                h5 Instalaciones deportivas
                p Riesgos por infraestructura defectuosa, colisiones, pisos resbaladizos y falta de protección en equipamiento. Se recomiendan mantenimiento continuo, señalización y uso de protecciones.
    
              .bg-color-white.box-shadow.p-3(x="77.6%" y="44.5%" numero="+")
                h5 Comedores y cocinas
                p Riesgos por contaminación biológica, quemaduras y cortes. Se requiere higiene rigurosa, control de temperaturas y capacitación en manipulación de alimentos.
    
              .bg-color-white.box-shadow.p-3(x="51.5%" y="34.4%" numero="+")
                h5 Espacios exteriores
                p Riesgos por suelos irregulares, mobiliario deteriorado, falta de sombra y exposición solar. Se necesita mantenimiento periódico, planificación y zonas sombreadas.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Además, la diversidad de la comunidad educativa añade complejidad. Los niños pequeños requieren supervisión constante y espacios adaptados a su desarrollo psicomotor; los adolescentes necesitan entornos que favorezcan su estabilidad emocional; y el personal docente y de mantenimiento enfrenta riesgos ergonómicos y físicos que deben ser gestionados con formación y condiciones adecuadas.
    
        .bg-color-2.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En conclusión, la gestión de riesgos en el entorno escolar exige una planificación integral que considere tanto las características físicas de cada espacio como las necesidades de quienes lo habitan. La adopción de medidas preventivas, la capacitación continua y la supervisión activa son fundamentales para asegurar ambientes seguros y propicios para el aprendizaje y el desarrollo integral.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.gestiondelriesgo.gov.co/sigpad/archivos/GPEGRColombia.pdf " target="_blank" rel="noopener noreferrer") PREDECAN, Encuentro de experiencias escolares en gestión del riesgo - Colombia, 2008. 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://edocentes.com/riesgos-laborales-en-centros-educativos/ " target="_blank" rel="noopener noreferrer") eDocentes. (2024, 27 junio). Riesgos laborales en centros educativos - Blog Edocentes. eDocentes. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=D07Qfc9IVJc " target="_blank" rel="noopener noreferrer") ILCEtv. (2021, 23 de junio). Educación en Situaciones de Emergencias [Vídeo]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
