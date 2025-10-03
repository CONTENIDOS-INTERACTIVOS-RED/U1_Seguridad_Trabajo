export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'La seguridad y salud en el trabajo en el contexto escolar',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'La seguridad y salud en el trabajo en el contexto escolar',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Marco legal y normativo en Colombia aplicado a centros educativos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Accidentes en la primera infancia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Gestión de riesgo de accidentes en la primera infancia',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Peligros y riesgos para cuidadores y profesores',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ministerio de Educación Nacional de Colombia. (2012). Resolución 1562 de 2012. Diario Oficial No. 48.123, 15 de junio de 2012.  ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=48365#:~:text=Tiene%20por%20objeto%20mejorar%20las,trabajadores%20en%20todas%20las%20ocupaciones',
    },
    {
      referencia:
        'Decreto 1072 de 2015 (julio 26 de 2015). Por medio del cual se expide el Decreto Único Reglamentario del Sector Administrativo de la Función Pública. Diario Oficial No. 49.982 de 26 de julio de 2015.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=72173#:~:text=El%20objeto%20de%20este%20decreto,cumplida%20ejecuci%C3%B3n%20de%20las%20leyes',
    },
    {
      referencia:
        'EIRD, UNICEF. Escuela Segura en Territorio Seguro. Reflexiones sobre la Comunidad Educativa en la Gestión de Riesgo. 2007.',
      link: '',
    },
    {
      referencia:
        'PREDECAN, Sistematización de Definiciones Referidas / Referenciadas por Entidades CAPRADE en la Subregión Andina sobre Gestión del Riesgo, Prevención y Atención de Desastres / Defensa / Protección Civil en la Subregión Andina, 2007.',
      link:
        'https://www.comunidadandina.org/StaticFiles/20116616249Memoria_predecan.pdf ',
    },
    {
      referencia:
        'Prevención de riesgos laborales en los centros escolares: contribución de la seguridad y la salud en el aprendizaje - DYLE. (s. f.). ',
      link:
        'https://dyle.es/prevencion-de-riesgos-laborales-en-los-centros-escolares-contribucion-de-la-seguridad-y-la-salud-en-el-aprendizaje/',
    },
    {
      referencia:
        'GTC Colombiana 45. (2010). Guía técnica: Guía para la identificación de los peligros y la valoración de los riesgos en seguridad y salud ocupacional. Colombia: Autor.',
      link:
        'https://posipedia.com.co/wp-content/uploads/2021/04/15-MARZO-.-MATERIAL-DE-APOYO-PREVENCIÓN-DE-PELIGROS-EN-EL-ADMINISTRACIÓN-PUBLICA-GENERALIDADES.pdf ',
    },
    {
      referencia:
        'La prevención de riesgos en una escuela infantil - Quirónprevención. (s. f.). Quirónprevención.  ',
      link:
        'https://www.quironprevencion.com/blogs/es/prevenidos/prevencion-riesgos-escuela-infantil',
    },
    {
      referencia:
        'Ministerio de Educación Nacional de Colombia. (2022). Circular Ministerial No. 19 de 2022: ORIENTACIONES PARA LA GESTIÓN INTEGRAL DEL RIESGO ESCOLAR.',
      link: 'www.mineducacion.gov.co/1780/articles-423963_recurso_95.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'Accidente laboral',
      significado:
        'evento no deseado que resulta en daño o lesión durante la jornada de trabajo.',
    },
    {
      termino: 'Aislamiento',
      significado:
        'separación de individuos para prevenir la propagación de enfermedades.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'conjunto de medidas destinadas a prevenir riesgos biológicos.',
    },
    {
      termino: '<em>Burnout</em>',
      significado: 'síndrome de agotamiento emocional y físico en el trabajo.',
    },
    {
      termino: 'Desinfección',
      significado: 'proceso de eliminación de microorganismos patógenos.',
    },
    {
      termino: 'Ergonomía',
      significado:
        'adaptación del entorno laboral para proteger la salud del trabajador.',
    },
    {
      termino: 'Evaluación de riesgos',
      significado:
        'proceso para identificar y analizar peligros en el entorno laboral.',
    },
    {
      termino: 'Gestión del riesgo',
      significado:
        'acciones dirigidas a minimizar peligros y proteger la salud.',
    },
    {
      termino: 'Higiene ocupacional',
      significado:
        'prácticas para mantener la limpieza en el lugar de trabajo.',
    },
    {
      termino: 'Iluminación adecuada',
      significado: 'condición de luz suficiente para evitar fatiga visual.',
    },
    {
      termino: 'Manipulación de alimentos',
      significado:
        'práctica que requiere medidas higiénicas para prevenir enfermedades.',
    },
    {
      termino: 'Normas de seguridad',
      significado:
        'reglas establecidas para garantizar la protección de las personas.',
    },
    {
      termino: 'Prevención',
      significado:
        'conjunto de acciones anticipadas para evitar accidentes o enfermedades.',
    },
    {
      termino: 'Protección personal',
      significado:
        'uso de elementos como guantes o mascarillas en ambientes laborales.',
    },
    {
      termino: 'Riesgo biológico',
      significado: 'peligro asociado al contacto con organismos patógenos.',
    },
    {
      termino: 'Riesgo ergonómico',
      significado: 'peligro derivado de posturas o movimientos repetitivos.',
    },
    {
      termino: 'Riesgo físico',
      significado:
        'peligro generado por factores como ruido, iluminación o temperatura.',
    },
    {
      termino: 'Salud ocupacional',
      significado:
        'disciplina que promueve el bienestar físico y mental en el trabajo.',
    },
    {
      termino: 'Señalización',
      significado:
        'uso de señales visuales para advertir de peligros en el entorno.',
    },
    {
      termino: 'Sistema de gestión',
      significado:
        'estructura organizada para controlar la seguridad y salud en el trabajo.',
    },
  ],
}
