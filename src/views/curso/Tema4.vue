<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Identificación de peligros y riesgos en el entorno escolar'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-5 A continuación, se presenta un video que aborda la prevención de accidentes en la primera infancia, destacando la importancia de entornos seguros, la responsabilidad compartida de los adultos y el enfoque preventivo como pilares fundamentales para proteger los derechos y el bienestar de niñas y niños en esta etapa crucial del desarrollo.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.1] Proceso de los diferentes factores de peligro y sus posibles patologías
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Para comprender cómo evitar accidentes en entornos infantiles, es fundamental entender primero el concepto de riesgo. Este se refiere a la probabilidad de que una condición o conjunto de condiciones provoque daño físico o psicológico a un niño o niña. Dichas condiciones no son inevitables; dependen de múltiples factores que interactúan y desencadenan una cadena de eventos que puede culminar en un accidente. Identificar tempranamente estos riesgos y comprender sus causas permite diseñar estrategias de intervención adecuadas.
    
        .bg-color-6.p-4(data-aos="fade-left").mb-3
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Un entorno con objetos peligrosos, estructuras deficientes o supervisión insuficiente incrementa la posibilidad de que ocurran accidentes. Por ello, es clave evaluar continuamente los espacios y actividades en los que participan los niños, al tiempo que se sensibiliza a cuidadores y educadores sobre la naturaleza de dichos riesgos.
        p Como se explicó en la unidad anterior, los factores que contribuyen a los accidentes pueden agruparse en dos categorías principales: factores ambientales y factores humanos, cada uno con características propias que requieren enfoques diferenciados.
    
    h2(data-aos="fade-left") Factores generales
    p.mb-5 Estos incluyen aspectos físicos, locativos, de seguridad, químicos, fenómenos naturales, entre otros, y se relacionan con el entorno donde se desarrollan las actividades infantiles. Representan un componente esencial en el análisis del bienestar, seguridad y desarrollo integral infantil.

    .bg-full-width.bg-color-10
      .px-4.px-md-5.pb-md-3
        div.row.justify-content-center.align-items-stretch
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema4/3.svg" alt="" style="width: 90px")
              h5.text-center Ubicación geográfica
              p.mb-0.text-center Residir en zonas con fenómenos naturales como inundaciones, terremotos, deslizamientos o climas extremos incrementa la vulnerabilidad infantil.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema4/4.svg" alt="" style="width: 90px")
              h5.text-center Riesgos locativos
              p.mb-0.text-center Fallas en el diseño arquitectónico, materiales deteriorados, ausencia de seguridad estructural, ventilación o iluminación insuficiente.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema4/5.svg" alt="" style="width: 90px")
              h5.text-center Distribución del espacio
              p.mb-0.text-center Ambientes reducidos, desorganizados o sobrecargados dificultan la movilidad y complican la evacuación; la falta de zonas de juego también es un riesgo.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema4/6.svg" alt="" style="width: 90px")
              h5.text-center Materiales y objetos peligrosos
              p.mb-0.text-center Juguetes dañados, materiales tóxicos o no certificados, enchufes sin protección, cables expuestos y productos químicos mal almacenados.

        .bg-full-width.bg-color-8.mb-5
          .px-4.px-md-5.py-4.text-white
            p.mb-0 Un entorno infantil debe ser diseñado y gestionado con criterios de prevención, accesibilidad y cuidado, favoreciendo espacios seguros, estimulantes y acordes con las necesidades del desarrollo infantil.
    
    h2(data-aos="fade-left") Factores humanos
    p.mb-5 Involucran a las personas que interactúan directa o indirectamente con los niños, como cuidadores, docentes, personal de apoyo, familiares y los propios niños. Durante la primera infancia, los niños no cuentan con las habilidades necesarias para identificar peligros o prever las consecuencias de sus acciones. Esta situación convierte a los adultos en garantes de su protección. Sin embargo, la capacidad de los adultos para prevenir accidentes está mediada por varios factores:

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/7.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.p-4(data-aos="fade-left").mb-3
          ul.lista-ul--color
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Falta de formación en seguridad infantil y prevención de riesgos.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Desconocimiento de las etapas del desarrollo infantil.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Negligencia, agotamiento o estrés, especialmente en contextos de sobrecarga y escaso apoyo.
        p(data-aos="fade-left") Además, los niños con condiciones particulares —discapacidades, enfermedades crónicas o necesidades emocionales específicas— requieren medidas adicionales de acompañamiento. La omisión de estas consideraciones incrementa el riesgo y profundiza desigualdades. Las creencias, actitudes y experiencias personales también afectan la manera en que un adulto interpreta y responde ante una amenaza. Una respuesta mecánica o basada en la costumbre, sin reflexión crítica, puede generar condiciones inseguras. Ante esto, es crucial:
    
    .row.justify-content-center.align-items-center.bg-color-1.bg-full-width.px-4.px-md-5
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left")
            ul.lista-ul--color
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Ofrecer formación continua en contenidos técnicos y habilidades emocionales.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Fomentar la comunicación y el trabajo colaborativo.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Sensibilizar sobre la importancia del rol protector.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Establecer protocolos claros, accesibles y bien difundidos.
          .col-lg-5(data-aos="zoom-in").mb-3.mb-lg-0
            img.img-fluid(src='@/assets/curso/tema4/8.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-color-11.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 La supervisión activa y consciente —y no solo física— es uno de los elementos más importantes para la protección infantil. Requiere atención plena, acompañamiento respetuoso y disponibilidad emocional.

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/9.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-4.p-4(data-aos="fade-left").mb-3
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Del mismo modo, es necesario acompañar de forma permanente a madres, padres, cuidadores y mujeres gestantes, especialmente en momentos clave como la lactancia, el descanso, el juego y la exploración. Estas rutinas, aparentemente sencillas, son frecuentes escenarios de riesgo si no se gestionan con atención.
        p(data-aos="fade-left") La creación de entornos protectores y seguros en hogares, instituciones educativas y espacios comunitarios requiere:
    
    .bg-full-width.bg-color-10
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/11.png" alt="")
              .custom-image-card__text.p-4.text-center
                p.mb-0 Infraestructuras adaptadas y materiales adecuados.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/12.png" alt="")
              .custom-image-card__text.p-4.text-center
                p.mb-0 Participación de todos los actores sociales.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/13.png" alt="")
              .custom-image-card__text.p-4.text-center
                p.mb-0 Una cultura de prevención y respeto a los derechos de la infancia.

    .row.justify-content-center.align-items-center.bg-color-6.mb-5.bor-2
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-9(data-aos="fade-left").mb-3.mb-lg-0
            p Asumir la seguridad infantil como un derecho humano y no como una opción es vital para transformar la manera en que se entiende el cuidado en la infancia. Este cambio demanda acciones constantes, compromiso institucional y la participación activa de quienes conviven con los niños.
            p.mb-0 La protección ante riesgos físicos en la infancia no debe improvisarse ni abordarse de forma aislada. Es un proceso complejo, que requiere conocimiento, sensibilidad, responsabilidad colectiva y decisiones basadas en principios de dignidad, bienestar y protección integral. Cada acción preventiva es, al mismo tiempo, una apuesta por el presente y el futuro de la infancia.
          .col-lg-3(data-aos="zoom-in").mb-3.mb-lg-0
            img.img-fluid(src='@/assets/curso/tema4/14.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    #t_4_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.2] Plan de emergencias en trabajo con infantes
    
    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema4/15.png', alt='')
        .col-lg
          .p-4.text-white
            p.mb-0(data-aos="fade-up") Los seres humanos no viven aislados; forman parte de un territorio que los define y transforma. En los entornos escolares, esta conexión adquiere un significado especial, pues las instituciones educativas y sus comunidades expresan y fortalecen la identidad del lugar en el que se encuentran. Cada estudiante, docente y miembro del entorno educativo participa de esta construcción a través de su lenguaje, costumbres, expresiones culturales, recuerdos y vínculos con el paisaje. En palabras de Gustavo Wilches-Chaux, la relación con el territorio es un “matrimonio indisoluble”, donde ambos se afectan y se transforman mutuamente.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/16.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") En este contexto, la escuela trasciende su función de espacio de aprendizaje: se convierte en un agente activo en el cuidado del entorno, promoviendo valores de respeto, sostenibilidad y corresponsabilidad. El territorio escolar, conformado por las acciones colectivas de la comunidad educativa y por procesos naturales, permanece en constante transformación. Los ecosistemas, las estaciones del año y otros elementos de la naturaleza evolucionan de forma dinámica, mientras que ciertas actividades humanas, cuando resultan poco sostenibles, pueden alterar negativamente ese equilibrio.
    
        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/17.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Comprender estos procesos resulta clave, ya que los cambios pueden dar lugar a riesgos y condiciones de vulnerabilidad que, si no se gestionan de forma adecuada, derivan en afectaciones al bienestar y la seguridad. Es necesario partir del principio de que los desastres no son estrictamente “naturales”. Fenómenos como sismos, tormentas o inundaciones forman parte de la dinámica planetaria, pero los daños asociados a ellos se relacionan directamente con el nivel de preparación, organización y resiliencia de las comunidades. Un sismo, por ejemplo, no puede evitarse, pero una escuela con un plan de emergencias estructurado y capacidades fortalecidas puede reducir considerablemente su impacto y proteger a niños, niñas y docentes.
    
    p.mb-5 Por este motivo, la gestión del riesgo en instituciones educativas no debe limitarse a la reacción frente a emergencias. Requiere anticipación, acciones preventivas y estrategias para facilitar la recuperación. El enfoque debe centrarse en:

    .row.justify-content-center.align-items-center.bg-color-12.bg-full-width.px-4.px-md-5
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left").order-2
            ul.lista-ul--color
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Reconocer los riesgos específicos del territorio donde se ubica la institución.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Fortalecer las habilidades y conocimientos de todos los miembros de la comunidad escolar.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Adoptar medidas que reduzcan la exposición y la vulnerabilidad.
          .col-lg-5(data-aos="zoom-in").order-1.mb-3.mb-lg-0
            img.img-fluid(src='@/assets/curso/tema4/18.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-color-2.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Asumir esta tarea desde una perspectiva integral significa construir una cultura institucional comprometida con la seguridad, la participación y el cuidado mutuo, en coherencia con el derecho de la infancia a crecer y aprender en entornos protegidos y atentos a los riesgos del entorno.
    
    h2(data-aos="fade-left") Conceptos clave en la gestión de riesgos en entornos educativos
    p.mb-5 En el ámbito escolar, la gestión de riesgos implica identificar, evaluar y actuar frente a eventos que puedan poner en peligro la seguridad, la continuidad del proceso educativo y el bienestar de la comunidad educativa. Comprender los componentes esenciales del riesgo permite desarrollar estrategias efectivas de prevención y respuesta ante posibles emergencias. A continuación, se presentan los conceptos fundamentales que orientan este enfoque:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/19.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Amenaza
              p Probabilidad de que ocurra un evento peligroso que afecte a estudiantes, docentes, infraestructura y comunidad. Puede ser natural (terremotos, lluvias intensas) o humana (accidentes, incendios). También existen amenazas concatenadas (p. ej., una inundación que provoca deslizamientos).
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/20.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Vulnerabilidad
              p Capacidad disminuida de anticiparse, resistir y recuperarse de un evento peligroso. Factores influyentes: localización del colegio, estado de las instalaciones, preparación de la comunidad y recursos disponibles.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/21.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Riesgo
              p Probabilidad de que una amenaza, combinada con la vulnerabilidad escolar, genere daños o pérdidas significativas. Implica identificar eventos posibles y tomar medidas preventivas.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/22.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Desastre
              p Evento en el que una amenaza se materializa en un territorio vulnerable, causando daños humanos, materiales o ambientales. Requiere contar con planes de emergencia y sistemas de respuesta eficientes.
    
    h2(data-aos="fade-left") Fundamentos del Plan de Emergencias en entornos infantiles
    p.mb-5 Sabemos que un plan de emergencias es un instrumento técnico y organizativo que permite establecer protocolos claros ante situaciones imprevistas. El propósito principal es proteger la vida de los niños, niñas, educadores y demás actores del entorno, actuando con rapidez y eficacia.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/23.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Características del plan en contextos infantiles:
    
        .bg-color-13.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Adaptado a las necesidades de la primera infancia.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Claramente comprendido por todo el personal.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Enfocado en la acción colectiva, organizada y empática.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Basado en el conocimiento del entorno y los riesgos locales.
        .bg-color-6.bor-2.p-4(data-aos="fade-left")
          p.mb-0 El desarrollo de un Plan de Emergencias para el trabajo con infantes debe contemplar aspectos específicos de esta etapa vital, combinando la gestión del riesgo con una mirada pedagógica, emocional y ética. A continuación, se presentan los elementos clave que deben integrarse en un plan eficaz.
    
    h2(data-aos="fade-left").mb-5 Escuelas de ética filosófica
    
    .row.justify-content-center.align-items-center.bg-color-4.mb-5.bor-1
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-10(data-aos="fade-left").mb-3.mb-lg-0
            p.mb-0 El diagnóstico de riesgos en entornos infantiles requiere un enfoque diferenciado que tenga en cuenta la realidad particular de los niños y niñas. Factores como la edad, movilidad, estado de salud, necesidades especiales y nivel de autonomía deben considerarse al evaluar amenazas y vulnerabilidades. Esta evaluación permite diseñar acciones más realistas y eficaces.
          .col-lg-2(data-aos="zoom-in").mb-3.mb-lg-0
            img.img-fluid(src='@/assets/curso/tema4/24.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    h2(data-aos="fade-left") Protocolos de acción
    p.mb-5 El plan debe establecer procedimientos específicos para cada fase de la emergencia:

    .bg-full-width.bg-fondo-2.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema4/25.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="15%" y="15.5%" numero="+")
                h5 Antes
                p Prevención, capacitación del personal, señalización clara, realización de simulacros, preparación de kits de emergencia.
    
              .bg-color-white.box-shadow.p-3(x="47%" y="97%" numero="+")
                h5 Durante
                p Actuación organizada según roles, evacuación segura, resguardo de los infantes, asistencia médica inmediata si es necesario.
    
              .bg-color-white.box-shadow.p-3(x="84%" y="15%" numero="+")
                h5 Después
                p Evaluación de daños, atención emocional, reconexión con las familias, registro de los hechos, mejora del plan.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/26.png", data-aos="zoom-in")
      .col-lg-8
        h2(data-aos="fade-left") Responsabilidades del personal y formación continua
        p Cada adulto en el entorno infantil debe conocer con claridad su función durante una emergencia. Los roles incluyen:
    
        .bg-color-2.p-4(data-aos="fade-left").mb-3
          ul.lista-ul--color
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Coordinador del plan de emergencia.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Líderes de evacuación por grupo.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Encargados de primeros auxilios.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Responsable de documentación y contacto con familias.
        p La formación debe ser constante y especializada, incluyendo:
    
    .bg-full-width.bg-color-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/27.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.text-center Primeros auxilios pediátricos
                p.mb-0 Técnicas adaptadas a la edad infantil.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/28.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.text-center Seguridad en evacuaciones
                p.mb-0 Procedimientos seguros para movilizar infantes.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/29.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.text-center Acompañamiento emocional
                p.mb-0 Estrategias para contener y consolar a los niños.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/30.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.text-center Manejo de planes de contingencia
                p.mb-0 Adaptación del plan al desarrollo infantil.
    
    h2(data-aos="fade-left") Rutas de evacuación y espacios seguros
    p.mb-5 Las rutas de evacuación deben ser:

    .row.justify-content-center.align-items-center.bg-color-1.bg-full-width.px-4.px-md-5
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left")
            ul.lista-ul--color
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Visiblemente señalizadas y accesibles.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Amplias y seguras, considerando la necesidad de cargar o guiar a los niños.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Adaptadas con recursos como cunas móviles, carritos o mochilas porta-infantes.
          .col-lg-5(data-aos="zoom-in").mb-3.mb-lg-0
            img.img-fluid(src='@/assets/curso/tema4/31.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-color-11.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Los puntos de encuentro deben ser seguros, protegidos y permitir un conteo rápido. Además, se requieren espacios de contención emocional post-emergencia donde los infantes puedan ser consolados mediante estrategias adecuadas a su desarrollo.

   
    h2(data-aos="fade-left") Consideraciones específicas para la primera infancia
    p.mb-5 Las siguientes características hacen indispensable una pedagogía de la emergencia:

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/32.svg", style="max-width: 90px").mx-auto
            .col-lg.text-white
              h5.mb-2 01
              p.mb-0 Dependencia total de los adultos.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/33.svg", style="max-width: 90px").mx-auto
            .col-lg.text-white
              h5.mb-2 02
              p.mb-0 Alta sensibilidad emocional y física.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/34.svg", style="max-width: 90px").mx-auto
            .col-lg.text-white
              h5.mb-2 03
              p.mb-0 Dificultad para comprender instrucciones complejas. 
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/35.svg", style="max-width: 90px").mx-auto
            .col-lg.text-white
              h5.mb-2 04
              p.mb-0 Necesidad intensa de consuelo ante el estrés.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/36.svg", style="max-width: 90px").mx-auto
            .col-lg.text-white
              h5.mb-2 05
              p.mb-0 Vulnerabilidad frente a cambios abruptos. 
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3(data-aos="fade-left").h-100
          img(src="@/assets/curso/tema4/37.svg", style="max-width: 130px").mx-auto
    
    p.mb-5 El uso del juego, la narración y objetos transicionales es clave para ofrecer contención y restablecer la seguridad emocional del niño o niña.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/38.png", data-aos="zoom-in")
      .col-lg-8
        h2(data-aos="fade-left") Relación con las familias y comunidad
        p Un plan efectivo debe contemplar:
    
        .bg-color-13.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Canales rápidos y seguros de comunicación.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Registro actualizado de contactos de emergencia, alergias y condiciones médicas.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Protocolos de entrega segura post-emergencia.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Formación a madres, padres y cuidadores sobre prevención de riesgos en el hogar y comunidad.
        .bg-color-6.bor-2.p-4(data-aos="fade-left")
          p.mb-0 La participación activa de todos los actores —educadores, familias, personal de apoyo— fortalece una cultura preventiva y solidaria.
    
    h2(data-aos="fade-left").mb-5 Equipamiento y recursos básicos

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/39.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Todo espacio infantil debe contar con:
    
        .bg-color-4.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Kit de primeros auxilios pediátricos.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Listados actualizados de niños y personal.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Mochilas o cunas de evacuación.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Linternas, silbatos, agua potable y alimentos no perecederos.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Mantas, ropa de cambio, elementos de higiene.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Carpeta con protocolos impresos.
            
    .bg-full-width.bg-color-5
      .px-4.px-md-5.pb-md-3
        h2(data-aos="fade-left") Simulacros, evaluación y mejora continua
        p.mb-5 Los simulacros deben realizarse periódicamente, adaptados al nivel de comprensión infantil, evitando el miedo y favoreciendo aprendizajes significativos. Después de cada simulacro o emergencia real, es fundamental:
        .row.justify-content-center.align-items-stretch
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/40.png" alt="")
              .custom-image-card__text.p-4.text-center
                p.mb-0 Evaluar lo ocurrido.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/41.png" alt="")
              .custom-image-card__text.p-4.text-center
                p.mb-0 Identificar aciertos y debilidades.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/42.png" alt="")
              .custom-image-card__text.p-4.text-center
                p.mb-0 Actualizar el plan.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/43.png" alt="")
              .custom-image-card__text.p-4.text-center
                p.mb-0 Compartir las lecciones aprendidas con todo el equipo.

    .bg-full-width.bg-color-8.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/44.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Un <b>Plan de Emergencias eficaz en entornos infantiles</b> no solo protege vidas, sino que educa, fortalece vínculos, promueve la cooperación y consolida valores de cuidado mutuo y solidaridad. Invertir en prevención y respuesta no es un lujo, sino un compromiso ético y legal con los derechos y el desarrollo pleno de la infancia.

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
              a(href="https://edocentes.com/riesgos-laborales-en-centros-educativos " target="_blank" rel="noopener noreferrer") eDocentes. (2024b, junio 27). Riesgos laborales en centros educativos - Blog Edocentes. eDocentes. 

 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://grctools.software/2021/05/13/riesgos-mas-comunes-en-centros-educativos/ " target="_blank" rel="noopener noreferrer") Suscriptor. (2025, 5 febrero). Riesgos más comunes en centros educativos - Software GRC. GRCTools.  



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
  name: 'Tema4',
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
