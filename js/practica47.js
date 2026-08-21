(() => {
  "use strict";

  /* ============ Paleta de colores para anomalías ============ */
  const DOT_COLORS = ["#ff6389", "#ffb454", "#52e7ff", "#75f7ab", "#ae73ff"];

  function buildGradient(hex) {
    return `radial-gradient(circle at 33% 29%,#fff,${hex} 42%,#0b0c1c 100%)`;
  }

  /* ============ Datos educativos: 4 épocas × 5 subtemas ============ */
  const ERAS = [
    {
      id: "big-bang",
      name: "Época I: El Big Bang y el Universo Temprano",
      period: "HACE 13.800 MILLONES DE AÑOS",
      subtopics: [
        {
          id: "singularidad-inicial",
          title: "La Singularidad Inicial",
          description: "Toda la materia, energía, espacio y tiempo que hoy conocemos estuvieron concentrados en un punto de densidad y temperatura extremas, conocido como singularidad. En ese instante no existían ni el espacio ni el tiempo tal como los entendemos: ambos comenzaron a existir junto con la expansión del universo. Los físicos no pueden describir con las leyes actuales qué ocurrió exactamente en el instante cero, ya que las ecuaciones de la relatividad general dejan de funcionar en esas condiciones extremas.",
          questions: [
            { question: "¿Qué ocurre con las leyes físicas actuales al intentar describir la singularidad inicial?", options: ["Dejan de funcionar en esas condiciones extremas", "Explican el fenómeno con total precisión", "Solo aplican a partir de esta singularidad", "No tienen ninguna relación con el tema"], correct: 0 },
            { question: "¿Qué comenzó a existir junto con la expansión del universo?", options: ["El espacio y el tiempo", "Solo las estrellas", "Los planetas rocosos", "La vida microbiana"], correct: 0 }
          ]
        },
        {
          id: "inflacion-cosmica",
          title: "La Inflación Cósmica",
          description: "Fracciones de segundo después del Big Bang, el universo atravesó un período de expansión exponencial llamado inflación cósmica, en el que el espacio se expandió muchísimo más rápido que la velocidad de la luz. Este breve pero violento estallido de crecimiento explica por qué el universo observable es tan uniforme en todas direcciones y por qué es prácticamente plano. Las minúsculas variaciones de densidad generadas durante la inflación fueron la semilla de las futuras galaxias y estructuras cósmicas.",
          questions: [
            { question: "¿Qué característica tuvo la expansión durante la inflación cósmica?", options: ["Fue exponencial y extremadamente rápida", "Fue lenta y constante", "Se detuvo por completo", "Solo ocurrió en una dirección del espacio"], correct: 0 },
            { question: "¿Qué originaron las minúsculas variaciones de densidad producidas durante la inflación?", options: ["Las futuras galaxias y estructuras cósmicas", "Los agujeros negros actuales", "La Luna", "Los océanos terrestres"], correct: 0 }
          ]
        },
        {
          id: "nucleosintesis-primordial",
          title: "Nucleosíntesis Primordial",
          description: "Minutos después del Big Bang, cuando el universo se enfrió lo suficiente, los protones y neutrones comenzaron a combinarse para formar los primeros núcleos atómicos: principalmente hidrógeno y helio, con trazas de litio. Este proceso, llamado nucleosíntesis primordial, solo pudo producir los elementos más ligeros de la tabla periódica, porque la temperatura y la densidad cayeron demasiado rápido para fusionar núcleos más pesados. Todos los elementos más pesados que conocemos hoy se formarían mucho después, en el interior de las estrellas.",
          questions: [
            { question: "¿Qué elementos se formaron principalmente durante la nucleosíntesis primordial?", options: ["Hidrógeno y helio", "Hierro y oro", "Carbono y oxígeno", "Uranio y plomo"], correct: 0 },
            { question: "¿Por qué no se formaron elementos más pesados durante este proceso?", options: ["La temperatura y la densidad cayeron demasiado rápido", "No existían protones ni neutrones", "El universo era demasiado caliente para siempre", "No había suficiente espacio disponible"], correct: 0 }
          ]
        },
        {
          id: "radiacion-fondo",
          title: "La Radiación Cósmica de Fondo",
          description: "Unos 380.000 años después del Big Bang, el universo se enfrió lo suficiente como para que los electrones se combinaran con los núcleos atómicos y formaran los primeros átomos neutros, en un proceso llamado recombinación. Esto permitió que la luz viajara libremente por primera vez, generando una radiación que hoy conocemos como fondo cósmico de microondas. Detectada por primera vez en 1965, esta radiación es como una fotografía fósil del universo primitivo y una de las pruebas más sólidas de la teoría del Big Bang.",
          questions: [
            { question: "¿Qué proceso permitió que la luz viajara libremente por primera vez?", options: ["La recombinación de electrones y núcleos atómicos", "La formación de las galaxias", "La explosión de las primeras estrellas", "El nacimiento del Sol"], correct: 0 },
            { question: "¿Qué es el fondo cósmico de microondas?", options: ["Una radiación fósil del universo primitivo", "Una señal de radio emitida por la Vía Láctea", "Un tipo de agujero negro pequeño", "La luz emitida directamente por el Sol"], correct: 0 }
          ]
        },
        {
          id: "era-oscura",
          title: "La Era Oscura del Universo",
          description: "Después de la recombinación, el universo entró en un largo período sin fuentes de luz propia conocido como la Era Oscura. Durante cientos de millones de años, el cosmos estuvo compuesto principalmente por gas de hidrógeno y helio neutro, sin estrellas ni galaxias que lo iluminaran. Esta etapa terminó cuando la gravedad logró concentrar suficiente gas para encender las primeras estrellas, dando paso a la llamada reionización, cuando la radiación estelar volvió a ionizar el gas del universo.",
          questions: [
            { question: "¿Por qué se llama 'Era Oscura' a este período del universo?", options: ["Porque no existían estrellas ni galaxias que emitieran luz propia", "Porque el universo dejó de expandirse", "Porque toda la luz fue absorbida por agujeros negros", "Porque el Sol todavía no existía"], correct: 0 },
            { question: "¿Qué proceso puso fin a la Era Oscura?", options: ["El encendido de las primeras estrellas", "La formación de la Tierra", "El impacto de Theia", "La explosión de una supernova cercana"], correct: 0 }
          ]
        }
      ],
      finalTest: [
        { question: "¿En qué orden ocurrieron estos eventos del universo temprano?", options: ["Singularidad → Inflación → Nucleosíntesis → Radiación de fondo", "Radiación de fondo → Inflación → Singularidad → Nucleosíntesis", "Nucleosíntesis → Singularidad → Era Oscura → Inflación", "Era Oscura → Singularidad → Inflación → Nucleosíntesis"], correct: 0 },
        { question: "¿Qué tienen en común la nucleosíntesis primordial y la radiación cósmica de fondo?", options: ["Ambas ocurrieron en las primeras etapas del universo y dejaron evidencia observable hoy", "Ambas ocurrieron dentro de estrellas ya formadas", "Ambas describen la formación de planetas", "Ninguna está relacionada con el Big Bang"], correct: 0 },
        { question: "¿Qué caracteriza a la Era Oscura del universo?", options: ["La ausencia de estrellas y galaxias que emitieran luz propia", "La existencia de vida microbiana", "La formación del sistema solar", "La existencia de agujeros negros supermasivos"], correct: 0 }
      ]
    },
    {
      id: "galaxias-estrellas",
      name: "Época II: Formación de Galaxias y Estrellas",
      period: "CIENTOS DE MILLONES DE AÑOS DESPUÉS DEL BIG BANG",
      subtopics: [
        {
          id: "primeras-estrellas",
          title: "Las Primeras Estrellas (Población III)",
          description: "Las primeras estrellas del universo, conocidas como estrellas de Población III, se formaron a partir del colapso gravitacional de nubes de hidrógeno y helio primordial, sin ningún elemento pesado que hoy ayuda a enfriar el gas en las estrellas modernas. Como resultado, se cree que fueron mucho más masivas, calientes y de vida más corta que las estrellas actuales. Su intensa radiación ultravioleta contribuyó a reionizar el gas del universo, y su explosión como supernovas sembró el cosmos con los primeros elementos pesados.",
          questions: [
            { question: "¿De qué estaban formadas casi exclusivamente las primeras estrellas del universo?", options: ["Hidrógeno y helio primordial", "Hierro y carbono", "Roca y metal", "Agua congelada"], correct: 0 },
            { question: "¿Qué efecto tuvo la explosión de las primeras estrellas como supernovas?", options: ["Sembró el universo con los primeros elementos pesados", "Detuvo por completo la expansión del universo", "Creó de inmediato un agujero negro supermasivo", "Formó la Vía Láctea instantáneamente"], correct: 0 }
          ]
        },
        {
          id: "primeras-galaxias",
          title: "Formación de las Primeras Galaxias",
          description: "La gravedad fue agrupando progresivamente el gas primordial y las primeras estrellas en estructuras cada vez más grandes, dando origen a las primeras galaxias. Estas galaxias primitivas eran más pequeñas y de formas irregulares comparadas con las galaxias espirales o elípticas actuales, y crecieron a lo largo de miles de millones de años mediante fusiones sucesivas con otras galaxias vecinas. Los telescopios modernos, como el James Webb, han logrado observar algunas de estas galaxias tempranas, permitiendo estudiar cómo lucía el universo en sus primeros cientos de millones de años.",
          questions: [
            { question: "¿Cómo eran las primeras galaxias en comparación con las actuales?", options: ["Más pequeñas e irregulares", "Idénticas a la Vía Láctea actual", "Mucho más grandes que las galaxias de hoy", "Perfectamente espirales desde su origen"], correct: 0 },
            { question: "¿Qué telescopio ha permitido observar galaxias muy tempranas del universo?", options: ["El telescopio espacial James Webb", "Un telescopio de aficionados", "Un radiotelescopio lunar", "Ningún telescopio puede observarlas"], correct: 0 }
          ]
        },
        {
          id: "agujeros-negros-supermasivos",
          title: "Los Agujeros Negros Supermasivos",
          description: "En el centro de la mayoría de las galaxias, incluida la Vía Láctea, existe un agujero negro supermasivo con una masa de millones o incluso miles de millones de veces la del Sol. Se cree que estos objetos comenzaron a formarse en el universo temprano, posiblemente a partir del colapso directo de nubes de gas masivas o del crecimiento acelerado de agujeros negros más pequeños que se fusionaron entre sí. Su intensa gravedad influye en la estructura y evolución de toda la galaxia que los rodea.",
          questions: [
            { question: "¿Dónde se ubican típicamente los agujeros negros supermasivos?", options: ["En el centro de las galaxias", "En los bordes exteriores del universo observable", "Únicamente dentro del sistema solar", "Dentro de los planetas gaseosos"], correct: 0 },
            { question: "¿Qué influencia tienen los agujeros negros supermasivos sobre su galaxia?", options: ["Afectan la estructura y evolución de toda la galaxia", "No tienen ningún efecto detectable", "Impiden por completo la formación de estrellas", "Solo afectan a los planetas más cercanos"], correct: 0 }
          ]
        },
        {
          id: "supernovas-elementos",
          title: "Supernovas y Fabricación de Elementos Pesados",
          description: "Cuando una estrella masiva agota su combustible nuclear, puede colapsar violentamente y producir una supernova, una de las explosiones más energéticas del universo. Durante estos eventos se generan y dispersan al espacio elementos pesados como el oxígeno, el hierro y el oro, que luego se incorporan a nuevas nubes de gas y polvo. En un sentido muy real, gran parte de los átomos que forman nuestro cuerpo y nuestro planeta fueron fabricados en el interior de estrellas que explotaron hace miles de millones de años.",
          questions: [
            { question: "¿Qué es una supernova?", options: ["La explosión de una estrella masiva al agotar su combustible", "El nacimiento de una nueva estrella pequeña", "La colisión de dos planetas rocosos", "Un tipo de agujero negro diminuto"], correct: 0 },
            { question: "¿Qué tipo de elementos ayudan a producir y dispersar las supernovas?", options: ["Elementos pesados como oxígeno, hierro y oro", "Únicamente hidrógeno puro", "Únicamente helio puro", "Ningún elemento nuevo se produce"], correct: 0 }
          ]
        },
        {
          id: "via-lactea",
          title: "La Vía Láctea: Nuestra Galaxia",
          description: "Nuestra galaxia, la Vía Láctea, es una galaxia espiral barrada que contiene entre 100.000 y 400.000 millones de estrellas, además de gas, polvo y grandes cantidades de materia oscura. Se formó y creció durante miles de millones de años mediante la fusión con galaxias más pequeñas y la formación continua de nuevas generaciones estelares. El sistema solar se ubica en uno de los brazos espirales exteriores, a unos 27.000 años luz del centro galáctico, donde reside un agujero negro supermasivo llamado Sagitario A*.",
          questions: [
            { question: "¿Qué tipo de galaxia es la Vía Láctea?", options: ["Espiral barrada", "Elíptica gigante", "Irregular enana", "Un simple cúmulo globular"], correct: 0 },
            { question: "¿Cómo se llama el agujero negro supermasivo en el centro de la Vía Láctea?", options: ["Sagitario A*", "Theia", "Andrómeda Central", "Cygnus X-1"], correct: 0 }
          ]
        }
      ],
      finalTest: [
        { question: "¿Qué relación existe entre las primeras estrellas y los elementos pesados que existen hoy?", options: ["Las estrellas fabricaron y dispersaron esos elementos al explotar como supernovas", "No existe ninguna relación entre ambos", "Los elementos pesados existieron antes que las estrellas", "Los elementos pesados provienen solo de los agujeros negros"], correct: 0 },
        { question: "¿Qué papel juegan los agujeros negros supermasivos en las galaxias?", options: ["Se ubican en su centro e influyen en su estructura", "Se ubican siempre en los bordes de la galaxia", "Impiden que existan estrellas en la galaxia", "No tienen ninguna relación con las galaxias"], correct: 0 },
        { question: "¿Cómo se formaron las galaxias, incluida la Vía Láctea?", options: ["Mediante la agrupación gravitacional de gas y estrellas, y fusiones sucesivas", "De manera instantánea, tal como se ven hoy", "A partir de un único planeta gigante", "Por el enfriamiento repentino del Sol"], correct: 0 }
      ]
    },
    {
      id: "sistema-solar",
      name: "Época III: Nacimiento del Sistema Solar",
      period: "HACE 4.600 MILLONES DE AÑOS",
      subtopics: [
        {
          id: "nebulosa-solar",
          title: "La Nebulosa Solar",
          description: "El sistema solar se originó a partir de una enorme nube de gas y polvo interestelar llamada nebulosa solar, que probablemente comenzó a colapsar bajo su propia gravedad tras ser perturbada por la onda de choque de una supernova cercana. A medida que la nube colapsaba, comenzó a girar cada vez más rápido y a aplanarse, formando un disco protoplanetario giratorio con una concentración de material mucho más densa en su centro, donde más tarde nacería el Sol.",
          questions: [
            { question: "¿Qué es la nebulosa solar?", options: ["La nube de gas y polvo que dio origen al sistema solar", "Un antiguo planeta gaseoso", "Una galaxia vecina a la Vía Láctea", "El núcleo actual del Sol"], correct: 0 },
            { question: "¿Qué pudo haber provocado el colapso inicial de la nebulosa solar?", options: ["La onda de choque de una supernova cercana", "El impacto de un cometa solitario", "La explosión de Júpiter", "Un agujero negro cercano al Sol"], correct: 0 }
          ]
        },
        {
          id: "formacion-sol",
          title: "Formación del Sol",
          description: "En el centro del disco de la nebulosa solar, la gravedad concentró cada vez más gas e hidrógeno, aumentando la presión y la temperatura del material acumulado. Cuando la temperatura en el núcleo alcanzó varios millones de grados, se iniciaron las reacciones de fusión nuclear que convierten hidrógeno en helio, liberando enormes cantidades de energía y dando origen a una estrella estable: nuestro Sol. Desde entonces, el Sol ha estado fusionando hidrógeno de manera continua durante unos 4.600 millones de años.",
          questions: [
            { question: "¿Qué proceso hizo que el Sol comenzara a brillar como una estrella?", options: ["La fusión nuclear de hidrógeno en helio", "La combustión de oxígeno atmosférico", "La radiación proveniente de otras estrellas", "El impacto continuo de asteroides"], correct: 0 },
            { question: "¿Qué elemento fusiona principalmente el Sol para producir energía?", options: ["Hidrógeno", "Hierro", "Carbono", "Oro"], correct: 0 }
          ]
        },
        {
          id: "planetas-rocosos",
          title: "Formación de los Planetas Rocosos",
          description: "Cerca del Sol, las altas temperaturas del disco protoplanetario impidieron que sustancias volátiles como el agua o el metano se condensaran en sólidos, por lo que solo el material rocoso y metálico pudo agruparse. Pequeñas partículas de polvo chocaron y se fusionaron formando cuerpos cada vez más grandes, llamados planetesimales, que a su vez colisionaron entre sí hasta formar los planetas interiores: Mercurio, Venus, la Tierra y Marte. Este proceso de acumulación, llamado acreción, tomó varios millones de años.",
          questions: [
            { question: "¿Por qué los planetas cercanos al Sol son rocosos y no gaseosos?", options: ["Las altas temperaturas impidieron que se condensaran sustancias volátiles", "Porque el Sol los repelía activamente", "Porque no había suficiente polvo cerca del Sol", "Porque son mucho más antiguos que los gaseosos"], correct: 0 },
            { question: "¿Cómo se llama el proceso mediante el cual pequeños cuerpos se unen para formar planetas?", options: ["Acreción", "Fusión nuclear", "Reionización", "Nucleosíntesis"], correct: 0 }
          ]
        },
        {
          id: "planetas-gaseosos",
          title: "Formación de los Planetas Gaseosos",
          description: "Más allá de la llamada 'línea de hielo', donde las temperaturas eran suficientemente bajas, el agua, el amoníaco y el metano pudieron congelarse, aportando mucho más material disponible para la formación de planetas. Esto permitió que núcleos rocosos y helados crecieran rápidamente hasta ser lo bastante masivos como para atraer y retener grandes envolturas de hidrógeno y helio directamente de la nebulosa solar, dando origen a los gigantes gaseosos Júpiter y Saturno, y a los gigantes helados Urano y Neptuno.",
          questions: [
            { question: "¿Qué es la 'línea de hielo' en la formación del sistema solar?", options: ["El límite más allá del cual el agua y otros compuestos podían congelarse", "La órbita actual de la Tierra", "El borde exterior de la Vía Láctea", "La distancia entre el Sol y Mercurio"], correct: 0 },
            { question: "¿Qué gases componen principalmente a Júpiter y Saturno?", options: ["Hidrógeno y helio", "Oxígeno y nitrógeno", "Dióxido de carbono", "Roca y metal sólidos"], correct: 0 }
          ]
        },
        {
          id: "bombardeo-intenso",
          title: "El Bombardeo Intenso Tardío",
          description: "Varios cientos de millones de años después de la formación del sistema solar, se produjo un período conocido como el Bombardeo Intenso Tardío, durante el cual un número inusualmente alto de asteroides y cometas impactó contra los planetas interiores y sus lunas. Se cree que este bombardeo pudo haber sido causado por cambios en las órbitas de los planetas gigantes, que perturbaron el cinturón de asteroides y la región más allá de Neptuno. Los cráteres que aún se observan en la Luna son evidencia directa de este violento período.",
          questions: [
            { question: "¿Qué caracterizó al Bombardeo Intenso Tardío?", options: ["Un número inusualmente alto de impactos de asteroides y cometas", "La formación del primer océano terrestre", "El nacimiento del Sol", "La aparición de la vida en la Tierra"], correct: 0 },
            { question: "¿Dónde se observa evidencia directa del Bombardeo Intenso Tardío?", options: ["En los cráteres de la superficie lunar", "En los anillos de Saturno", "En la atmósfera de Júpiter", "En el núcleo del Sol"], correct: 0 }
          ]
        }
      ],
      finalTest: [
        { question: "¿Cuál fue el origen común de todos los cuerpos del sistema solar?", options: ["La nebulosa solar, una nube de gas y polvo en colapso", "Cada planeta se formó de manera totalmente independiente", "Todos los planetas fueron capturados de otra estrella", "El sistema solar siempre existió tal como es hoy"], correct: 0 },
        { question: "¿Por qué existen dos tipos de planetas tan distintos (rocosos y gaseosos) en el sistema solar?", options: ["Por la diferencia de temperatura y materiales disponibles según la distancia al Sol", "Porque se formaron en épocas completamente distintas", "Porque los gaseosos llegaron de otra galaxia", "Por pura casualidad, sin relación con la temperatura"], correct: 0 },
        { question: "¿Qué evidencia queda hoy del Bombardeo Intenso Tardío?", options: ["Los cráteres visibles en la superficie de la Luna", "Los anillos de Saturno", "La atmósfera de Venus", "El color rojizo de Marte"], correct: 0 }
      ]
    },
    {
      id: "tierra-vida",
      name: "Época IV: La Tierra y el Origen de la Vida",
      period: "DESDE HACE 4.500 MILLONES DE AÑOS",
      subtopics: [
        {
          id: "formacion-luna",
          title: "Formación de la Luna (Impacto de Theia)",
          description: "Poco después de formarse, la Tierra habría sido golpeada por un protoplaneta del tamaño de Marte, al que los científicos llaman Theia. El violento impacto habría fundido gran parte de la Tierra y expulsado al espacio una enorme cantidad de escombros incandescentes, que con el tiempo se agruparon por gravedad en órbita hasta formar la Luna. Esta hipótesis, conocida como la teoría del gran impacto, explica muy bien tanto el tamaño de la Luna como la composición similar de las rocas lunares y terrestres.",
          questions: [
            { question: "¿Cómo se llama el objeto que habría chocado contra la Tierra primitiva?", options: ["Theia", "Ceres", "Vesta", "Titán"], correct: 0 },
            { question: "¿Qué explica muy bien la teoría del gran impacto?", options: ["El tamaño de la Luna y su composición similar a la terrestre", "El color de los océanos actuales", "El origen del Sol", "La velocidad de rotación de Júpiter"], correct: 0 }
          ]
        },
        {
          id: "atmosfera-oceanos",
          title: "Formación de la Atmósfera y los Océanos",
          description: "La atmósfera y los océanos primitivos de la Tierra surgieron principalmente de la liberación de gases atrapados en el interior del planeta, a través de una intensa actividad volcánica, en un proceso llamado desgasificación. Vapor de agua, dióxido de carbono y nitrógeno fueron expulsados a la superficie; cuando la Tierra se enfrió lo suficiente, el vapor de agua se condensó y cayó en forma de lluvias torrenciales durante millones de años, llenando las cuencas y formando los primeros océanos. Es posible que impactos de cometas helados también hayan aportado parte de esa agua.",
          questions: [
            { question: "¿Qué proceso liberó los gases que formaron la atmósfera primitiva?", options: ["La desgasificación volcánica", "La fotosíntesis de las plantas", "La respiración de los primeros animales", "La fusión nuclear del Sol"], correct: 0 },
            { question: "¿Cómo se formaron los primeros océanos de la Tierra?", options: ["Por la condensación del vapor de agua al enfriarse el planeta", "Por el derretimiento instantáneo de la Luna", "Únicamente por el impacto de meteoritos de hielo", "Los océanos existieron siempre desde el Big Bang"], correct: 0 }
          ]
        },
        {
          id: "origen-vida",
          title: "Origen de la Vida (LUCA y las Primeras Células)",
          description: "Hace aproximadamente 3.800 millones de años, en un planeta joven y todavía inestable, surgieron las primeras formas de vida: organismos unicelulares extremadamente simples capaces de replicarse y realizar reacciones químicas básicas. Los científicos llaman a este posible ancestro común de toda la vida actual LUCA (Last Universal Common Ancestor). Se cree que la vida pudo haberse originado en ambientes como fuentes hidrotermales submarinas, donde existían la energía química y los compuestos necesarios para formar las primeras moléculas orgánicas complejas.",
          questions: [
            { question: "¿Qué representa la sigla LUCA en biología evolutiva?", options: ["El último ancestro común universal de toda la vida", "La última célula antigua descubierta", "Un tipo de bacteria moderna", "Ninguna de las anteriores"], correct: 0 },
            { question: "¿Dónde se cree que pudo haberse originado la vida en la Tierra?", options: ["En fuentes hidrotermales submarinas", "En la cima de las montañas más altas", "Dentro del núcleo del planeta", "En la atmósfera superior"], correct: 0 }
          ]
        },
        {
          id: "gran-oxidacion",
          title: "La Gran Oxidación",
          description: "Hace unos 2.400 millones de años, la aparición de cianobacterias capaces de realizar fotosíntesis comenzó a liberar oxígeno como subproducto en cantidades masivas, transformando radicalmente la atmósfera terrestre en un evento conocido como la Gran Oxidación. Este oxígeno, tóxico para la mayoría de los organismos anaeróbicos de la época, provocó una de las primeras grandes extinciones de la historia de la vida, pero también abrió el camino para la evolución de organismos capaces de usar el oxígeno para obtener energía de forma mucho más eficiente.",
          questions: [
            { question: "¿Qué organismos fueron responsables de liberar el oxígeno durante la Gran Oxidación?", options: ["Las cianobacterias fotosintéticas", "Los dinosaurios", "Los primeros peces", "Las plantas terrestres actuales"], correct: 0 },
            { question: "¿Qué consecuencia tuvo el aumento de oxígeno en la atmósfera?", options: ["Provocó la extinción de muchos organismos anaeróbicos", "No tuvo ningún efecto sobre la vida existente", "Hizo desaparecer el agua de los océanos", "Detuvo por completo la evolución biológica"], correct: 0 }
          ]
        },
        {
          id: "explosion-cambrica",
          title: "La Explosión Cámbrica",
          description: "Hace unos 540 millones de años ocurrió un evento evolutivo extraordinario conocido como la explosión cámbrica, durante el cual, en un lapso relativamente breve a escala geológica, surgió una diversidad enorme de formas de vida animal, incluyendo los ancestros de la mayoría de los grandes grupos de animales que existen hoy. Antes de este período, la vida era mayoritariamente microscópica y de estructura muy simple; después de él, los océanos se llenaron de una asombrosa variedad de organismos con caparazones, ojos, patas y otras estructuras complejas.",
          questions: [
            { question: "¿Qué caracterizó a la explosión cámbrica?", options: ["Una diversificación extraordinariamente rápida de formas de vida animal", "La extinción total de la vida en la Tierra", "El nacimiento del primer océano", "La formación de la capa de ozono"], correct: 0 },
            { question: "¿Cómo era la vida antes de la explosión cámbrica?", options: ["Mayoritariamente microscópica y de estructura simple", "Ya dominada por dinosaurios gigantes", "Compuesta principalmente por mamíferos", "Igual de compleja que la actual"], correct: 0 }
          ]
        }
      ],
      finalTest: [
        { question: "¿Qué relación existe entre la formación de la Luna y la historia geológica temprana de la Tierra?", options: ["El impacto que formó la Luna también influyó en la historia geológica temprana del planeta", "No existe ninguna relación entre ambos eventos", "La Luna se formó después de la aparición de la vida", "La Luna impidió que se formaran los océanos"], correct: 0 },
        { question: "¿Qué llevó a la Gran Oxidación de la atmósfera terrestre?", options: ["La fotosíntesis de las cianobacterias", "La erupción simultánea de todos los volcanes", "El impacto de un gran asteroide", "La explosión cámbrica"], correct: 0 },
        { question: "¿Qué orden cronológico siguen estos eventos en la historia de la Tierra?", options: ["Formación de la Luna → Formación de océanos → Origen de la vida → Gran Oxidación → Explosión cámbrica", "Explosión cámbrica → Origen de la vida → Formación de la Luna", "Gran Oxidación → Formación de la Luna → Océanos", "Origen de la vida → Formación de la Luna → Océanos"], correct: 0 }
      ]
    }
  ];

  /* ============ Media, datos evaluables y bitácora por subtema ============ */
  const SUBTOPIC_MEDIA = {
    "singularidad-inicial": { image: "img/Observable_Universe_logarithmic_illustration_-circular_layout_english_annotations-2.png", caption: "El universo observable representado a escala logarítmica desde su origen", keys: ["singularidad","las ecuaciones de la relatividad general dejan de funcionar","ambos comenzaron a existir junto con la expansión del universo"], journal: "No entiendo nada. Hace un minuto estaba en un simulacro y ahora floto frente al instante cero del universo. Todo lo que existe cabía en un punto. Anoto esto porque necesito creer que hay una lógica: el espacio y el tiempo no estaban aquí antes, nacieron con la expansión." },
    "inflacion-cosmica": { image: "img/photo-1462331940025-496dfbfc7564-2.jpg", caption: "Expansión primordial: el cosmos creciendo más rápido que la luz", keys: ["expansión exponencial","más rápido que la velocidad de la luz","fueron la semilla de las futuras galaxias y estructuras cósmicas"], journal: "El dispositivo registra una expansión imposible: el espacio creció más rápido que la luz sin romper ninguna ley, porque lo que se estira es el espacio mismo. Las arrugas diminutas de esa expansión son las semillas de todas las galaxias. Empiezo a sospechar que mi accidente me está enseñando algo." },
    "nucleosintesis-primordial": { image: "img/Orion_Nebula_-_Hubble_2006_mosaic_edit-2.jpg", caption: "Nubes de hidrógeno y helio, los primeros elementos que existieron", keys: ["hidrógeno y helio","la temperatura y la densidad cayeron demasiado rápido","en el interior de las estrellas"], journal: "Minutos después del origen ya había materia: hidrógeno y helio, nada más pesado. El universo se enfrió demasiado rápido para cocinar otra cosa. Todo lo demás —el hierro de mi casco, el calcio de mis huesos— tuvo que esperar a las estrellas." },
    "radiacion-fondo": { image: "img/WMAP_image_of_the_CMB_anisotropy.jpg", caption: "El fondo cósmico de microondas: la fotografía más antigua que existe", keys: ["recombinación","la luz viajara libremente por primera vez","fondo cósmico de microondas","1965"], journal: "380.000 años después del origen los electrones se unieron a los núcleos y la luz quedó libre. Esa primera luz sigue viajando: es el fondo cósmico de microondas, detectado por accidente en 1965. Un accidente reveló el origen del universo. Quizá el mío también sirva para algo." },
    "era-oscura": { image: "img/Boovoid-2.png", caption: "Una vasta región de vacío cósmico, imagen de un universo aún sin estrellas", keys: ["sin fuentes de luz propia","gas de hidrógeno y helio neutro","encender las primeras estrellas","reionización"], journal: "Atravieso cientos de millones de años de oscuridad absoluta. No hay estrellas todavía, solo gas neutro. La gravedad trabaja en silencio, juntando material hasta que algo se encienda. Nunca había entendido que el universo tuvo una noche antes de tener su primer amanecer." },
    "primeras-estrellas": { image: "img/Image_of_Betelgeuse-s_surface_taken_in_January_2020_-eso2109d-2.jpg", caption: "Superficie de una estrella supergigante, parecida a las primeras del cosmos", keys: ["hidrógeno y helio primordial","más masivas, calientes y de vida más corta","sembró el cosmos con los primeros elementos pesados"], journal: "El primer amanecer del universo. Estrellas de Población III: enormes, ardientes y de vida brevísima, hechas solo de hidrógeno y helio. Al morir sembraron los primeros elementos pesados. Cada estrella que explotó aquí es la razón de que exista algo tan complejo como yo." },
    "primeras-galaxias": { image: "img/Webb-s_First_Deep_Field_-adjusted.jpg", caption: "Campo profundo del James Webb: miles de galaxias del universo temprano", keys: ["más pequeñas y de formas irregulares","fusiones sucesivas","James Webb"], journal: "Las primeras galaxias no se parecen a las de mi época: son pequeñas, deformes, y crecen chocando unas con otras. El James Webb las observa desde mi presente; yo las estoy viendo desde aquí. Dos formas de mirar lo mismo separadas por 13.000 millones de años." },
    "agujeros-negros-supermasivos": { image: "img/Black_hole_-_Messier_87-2.jpg", caption: "Primera imagen real de un agujero negro supermasivo (M87*)", keys: ["En el centro de la mayoría de las galaxias","millones o incluso miles de millones de veces la del Sol","influye en la estructura y evolución de toda la galaxia"], journal: "En el corazón de casi toda galaxia hay un agujero negro supermasivo. No es un monstruo devorador: es un ancla que ordena la estructura entera de la galaxia a su alrededor. Mi dispositivo se estabiliza cerca de ellos. Curioso: lo que más deforma el tiempo es también lo que me da una referencia." },
    "supernovas-elementos": { image: "img/Crab_Nebula_NGC_1952_-composite_from_Chandra-_Hubble_and_Spitzer.jpg", caption: "Nebulosa del Cangrejo: los restos dispersos de una estrella que explotó", keys: ["colapsar violentamente y producir una supernova","oxígeno, el hierro y el oro","fabricados en el interior de estrellas"], journal: "Hoy vi morir una estrella masiva. En esos segundos fabricó y lanzó al espacio oxígeno, hierro y oro. Miro mis manos: los átomos que las forman salieron de una explosión así. Somos, literalmente, restos de estrellas muertas que aprendieron a preguntarse cosas." },
    "via-lactea": { image: "img/Artist-s_impression_of_the_Milky_Way_-eso1339g-2.jpg", caption: "Nuestra galaxia vista desde fuera: una espiral barrada", keys: ["espiral barrada","entre 100.000 y 400.000 millones de estrellas","27.000 años luz del centro","Sagitario A*"], journal: "Por fin algo familiar: mi galaxia. Espiral barrada, con cientos de miles de millones de estrellas y un agujero negro llamado Sagitario A* en el centro. Estamos a 27.000 años luz de él, en un brazo exterior. Nunca me había sentido tan lejos de casa y tan cerca a la vez." },
    "nebulosa-solar": { image: "img/HL_Tau_protoplanetary_disk.jpg", caption: "Disco protoplanetario real alrededor de la joven estrella HL Tauri", keys: ["nebulosa solar","girar cada vez más rápido y a aplanarse","disco protoplanetario giratorio"], journal: "Estoy dentro del disco que dará origen a mi sistema solar. Una nube colapsó, giró cada vez más rápido y se aplanó en un disco. Los surcos que veo en el polvo son planetas formándose. Nunca imaginé que mi hogar empezara siendo un remolino de escombros." },
    "formacion-sol": { image: "img/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA-s_Solar_Dynamics_Observatory_-_2010081-2.jpg", caption: "El Sol observado en ultravioleta por el Solar Dynamics Observatory", keys: ["fusión nuclear","hidrógeno en helio","4.600 millones de años"], journal: "El centro del disco se encendió: la fusión del hidrógeno en helio acaba de arrancar. El Sol se queda con el 99,8% de toda la masa disponible; el resto —los planetas, las lunas, yo— somos las sobras de su formación. Una humildad incómoda." },
    "planetas-rocosos": { image: "img/OSIRIS_Mars_true_color-2.jpg", caption: "Marte en color real, uno de los cuatro mundos rocosos interiores", keys: ["Cerca del Sol","impidieron que sustancias volátiles como el agua o el metano se condensaran","acreción"], journal: "Cerca del Sol hacía demasiado calor para que sobrevivieran los gases y los hielos, así que solo quedó roca y metal. Los granos chocaron y se pegaron durante millones de años hasta formar Mercurio, Venus, la Tierra y Marte. La paciencia como mecanismo de construcción." },
    "planetas-gaseosos": { image: "img/Jupiter_and_its_shrunken_Great_Red_Spot-2.jpg", caption: "Júpiter y su Gran Mancha Roja, la mayor tormenta del sistema solar", keys: ["línea de hielo","atraer y retener grandes envolturas de hidrógeno y helio","Júpiter y Saturno"], journal: "Más allá de la línea de hielo el frío permitió que los núcleos crecieran tanto que empezaron a capturar gas directamente. Así nacieron Júpiter y Saturno: no son mundos con superficie, son atmósferas gigantes con un corazón oculto." },
    "bombardeo-intenso": { image: "img/Callisto-2.jpg", caption: "Calisto, el cuerpo más craterizado del sistema solar: un archivo del bombardeo", keys: ["Bombardeo Intenso Tardío","asteroides y cometas","Los cráteres que aún se observan en la Luna"], journal: "Una lluvia de asteroides y cometas castiga a los planetas jóvenes. Cada cráter que veo es una cicatriz de esa época. Pero los mismos impactos que destruían pudieron traer agua y moléculas orgánicas. Destrucción y siembra con el mismo gesto." },
    "formacion-luna": { image: "img/FullMoon2010.jpg", caption: "La Luna: el resultado de la mayor colisión de la historia de la Tierra", keys: ["Theia","teoría del gran impacto","composición similar de las rocas lunares y terrestres"], journal: "Un cuerpo del tamaño de Marte llamado Theia chocó contra la Tierra primitiva y de esos escombros se formó la Luna. Esa colisión brutal terminó estabilizando el eje de la Tierra y, con él, su clima. La catástrofe que hizo posible la vida. Igual mi accidente no es solo un accidente." },
    "atmosfera-oceanos": { image: "img/Top_of_Atmosphere-2.jpg", caption: "Las capas de la atmósfera terrestre vistas desde la órbita", keys: ["desgasificación","Vapor de agua, dióxido de carbono y nitrógeno","cometas helados"], journal: "La primera atmósfera de la Tierra no tenía oxígeno: era vapor, CO₂ y nitrógeno expulsados por volcanes, más el agua que trajeron cometas y asteroides. Cuando el planeta se enfrió, ese vapor llovió durante siglos y llenó los océanos. Respiro por costumbre; aquí no podría hacerlo." },
    "origen-vida": { image: "img/Stromatolite_-Strelley_Pool_Formation-_Paleoarchean-_3.35-3.46_Ga.jpg", caption: "Estromatolitos de 3.400 millones de años: las huellas de vida más antiguas", keys: ["3.800 millones de años","organismos unicelulares extremadamente simples","fuentes hidrotermales submarinas","LUCA"], journal: "Las primeras señales de vida aparecen hace unos 3.800 millones de años, probablemente en fuentes hidrotermales del fondo marino. Nada de criaturas: solo células únicas y simples. Todo lo que vino después —los bosques, los dinosaurios, yo— es una ramificación de eso." },
    "gran-oxidacion": { image: "img/Banded_iron_formation.jpg", caption: "Formación de hierro bandeado: el registro mineral del oxígeno primitivo", keys: ["cianobacterias","fotosíntesis","Gran Oxidación","primeras grandes extinciones"], journal: "Las cianobacterias inventaron la fotosíntesis y llenaron la atmósfera de oxígeno. Para casi toda la vida de entonces ese oxígeno fue un veneno: provocaron una extinción masiva sin proponérselo. El aire que me mantiene vivo empezó siendo un residuo tóxico." },
    "explosion-cambrica": { image: "img/20191203_Anomalocaris_canadensis.png", caption: "Anomalocaris, uno de los grandes depredadores de la explosión cámbrica", keys: ["540 millones de años","explosión cámbrica","microscópica y de estructura muy simple"], journal: "Hace 541 millones de años la vida estalla en formas nuevas en un abrir y cerrar de ojos geológico. Antes era microscópica y simple; después hay ojos, caparazones, depredadores. Aquí empieza el linaje que termina en un cadete perdido en el tiempo escribiendo esto." }
  };

  /* ============ Tema visual, contexto libre y pieza del dispositivo por época ============ */
  const ERA_META = {
    "big-bang": {
      accent: "#ff6389", glowA: "rgba(255,99,137,.14)", glowB: "rgba(174,115,255,.10)",
      context: { image: "img/Large-scale_structure_of_light_distribution_in_the_universe.jpg", caption: "Estructura a gran escala del universo: la red cósmica que germinó del Big Bang", period: "El instante cero y los primeros 380.000 años", intro: "Todo lo que existe —materia, energía, espacio y tiempo— surge de un estado de densidad y temperatura extremas y se expande sin parar. En menos de un segundo el cosmos crece de forma exponencial; en minutos fabrica sus primeros núcleos; en 380.000 años libera la luz que aún hoy podemos detectar.", highlights: ["El espacio y el tiempo no existían antes: nacen con la expansión.","La inflación explica por qué el universo es tan uniforme y tan plano.","Solo se formaron los elementos ligeros: hidrógeno, helio y algo de litio.","El fondo cósmico de microondas es la prueba fósil del Big Bang."] },
      piece: { name: "NÚCLEO DE CRONOSINCRONÍA", code: "PZ-01", role: "Fija el instante cero como referencia absoluta del salto temporal." }
    },
    "galaxias-estrellas": {
      accent: "#ae73ff", glowA: "rgba(174,115,255,.15)", glowB: "rgba(82,231,255,.10)",
      context: { image: "img/Andromeda_Galaxy_M31_-_Heic1502a_Full_resolution-2.jpg", caption: "La galaxia de Andrómeda, vecina espiral de la Vía Láctea", period: "Cientos de millones de años después del Big Bang", intro: "La gravedad convierte el gas primordial en las primeras estrellas y las agrupa en galaxias. Esas estrellas viven poco y mueren violentamente, y al hacerlo fabrican los elementos pesados que harán posible todo lo demás, incluidos los planetas y la vida.", highlights: ["Las primeras estrellas eran enormes, calientes y de vida muy corta.","Las galaxias crecieron fusionándose unas con otras durante eones.","Casi toda galaxia esconde un agujero negro supermasivo en su centro.","Los átomos de tu cuerpo se fabricaron dentro de estrellas que explotaron."] },
      piece: { name: "ESTABILIZADOR DE MASA ESTELAR", code: "PZ-02", role: "Compensa la distorsión gravitatoria de los agujeros negros supermasivos." }
    },
    "sistema-solar": {
      accent: "#ffb454", glowA: "rgba(255,180,84,.15)", glowB: "rgba(255,99,137,.09)",
      context: { image: "img/photo-1446776811953-b23d57bd21aa-2.jpg", caption: "El sistema solar formándose a partir del disco de la nebulosa", period: "Hace 4.600 millones de años", intro: "Una nube de gas y polvo colapsa y se aplana en un disco giratorio. En su centro se enciende el Sol; en el disco, el polvo se aglutina hasta formar planetas. La distancia al Sol decide quién será un mundo rocoso y quién un gigante gaseoso.", highlights: ["El colapso y el giro convierten la nube en un disco por el momento angular.","El Sol concentra el 99,8% de toda la masa del sistema.","Cerca del Sol solo sobrevive la roca; más allá de la línea de hielo, el gas.","El bombardeo intenso tardío pudo traer agua y moléculas orgánicas."] },
      piece: { name: "BRÚJULA ORBITAL", code: "PZ-03", role: "Reconstruye las coordenadas del sistema solar en cualquier época." }
    },
    "tierra-vida": {
      accent: "#75f7ab", glowA: "rgba(117,247,171,.14)", glowB: "rgba(82,231,255,.10)",
      context: { image: "img/The_Earth_seen_from_Apollo_17-2.jpg", caption: "La Tierra vista desde el Apolo 17: el único mundo con vida conocida", period: "Desde hace 4.500 millones de años hasta el Cámbrico", intro: "La Tierra recibe un impacto colosal que forma la Luna, se enfría, se cubre de océanos y, en algún punto, la química se convierte en biología. La vida transforma después la atmósfera del planeta entero y termina estallando en una diversidad sin precedentes.", highlights: ["El impacto de Theia formó la Luna y estabilizó el eje terrestre.","La atmósfera primitiva no tenía oxígeno libre.","La vida surge hace ~3.800 millones de años, probablemente en fuentes hidrotermales.","La fotosíntesis oxigenó el aire y causó una extinción masiva."] },
      piece: { name: "SEMILLA BIOGÉNICA", code: "PZ-04", role: "Ancla el salto a la línea temporal donde existe la vida conocida." }
    }
  };

  const DIAGNOSTIC_LINES = [
    "> ANALIZANDO NÚCLEO DE PROPULSIÓN TEMPORAL...",
    "> ERROR 0x7F // DESINCRONIZACIÓN CRONOESPACIAL",
    "> RUMBO TEMPORAL: PERDIDO",
    "> COORDENADAS ESPACIO-TIEMPO: INESTABLES",
    "> INICIANDO PROTOCOLO DE ESCANEO DE EMERGENCIA..."
  ];

  const MAX_FAILS = 2;
  const TIMELINE_NODE_COUNT = 5;

  /* ============ Referencias DOM ============ */
  const ftRoot = document.getElementById("ft-root");
  const phaseAlert = document.getElementById("phase-alert");
  const phaseRadar = document.getElementById("phase-radar");
  const phaseGameover = document.getElementById("phase-gameover");
  const phaseFinal = document.getElementById("phase-final");
  const alertFrame = document.getElementById("alert-frame");
  const gameoverFrame = document.getElementById("gameover-frame");
  const finalFrame = document.getElementById("final-frame");
  const diagnosticLog = document.getElementById("diagnostic-log");
  const startScanBtn = document.getElementById("start-scan-btn");
  const restartBtn = document.getElementById("restart-btn");
  const replayBtn = document.getElementById("replay-btn");

  const timelineShip = document.getElementById("timeline-ship");
  const timelineFill = document.getElementById("timeline-fill");
  const timelineNodes = Array.from(document.querySelectorAll(".ft-timeline-node"));

  const eraLabel = document.getElementById("era-label");
  const hudStatus = document.getElementById("hud-status");
  const radarDisc = document.getElementById("radar-disc");
  const radarSweep = document.getElementById("radar-sweep");
  const explorationValue = document.getElementById("exploration-value");
  const progressFill = document.getElementById("progress-fill");
  const explorationHint = document.getElementById("exploration-hint");

  const dossierModal = document.getElementById("dossier-modal");
  const dossierFrame = document.getElementById("dossier-frame");
  const dossierHeadLabel = document.getElementById("dossier-head-label");
  const dossierTag = document.getElementById("dossier-tag");
  const eraPeriod = document.getElementById("era-period");
  const eraTitle = document.getElementById("era-title");
  const eraDescription = document.getElementById("era-description");
  const mainView = document.getElementById("dossier-main-view");
  const infoData = document.getElementById("dossier-data-info");
  const challengeData = document.getElementById("dossier-data-challenge");
  const continueToChallengeBtn = document.getElementById("continue-to-challenge-btn");
  const challengeEyebrow = document.getElementById("challenge-eyebrow");
  const failTracker = document.getElementById("fail-tracker");
  const failCountEl = document.getElementById("fail-count");
  const triviaQuestion = document.getElementById("trivia-question");
  const triviaAnswers = document.getElementById("trivia-answers");
  const triviaFeedback = document.getElementById("trivia-feedback");
  const triviaRetryBtn = document.getElementById("trivia-retry-btn");

  /* ============ Estado ============ */
  let currentEraIndex = 0;
  let currentEra = null;
  let collectedInEra = 0;
  let progressPercent = 0;
  let anomalyPositions = [];
  let sweepTween = null;
  let ambientTremorId = null;
  let currentSubtopic = null;
  let currentAnomalyEl = null;
  let currentFinalQuestion = null;
  let questionQueue = [];
  let answerLocked = false;
  let anomalyFailCount = 0;
  let sessionMode = null; // "anomaly" | "levelFinal"
  let finalQueueLevel = [];
  let finalTotalLevel = 0;
  let finalStepLevel = 0;

  /* ============ Guion de la intro: simulación → falla crítica ============ */
  const INTRO_BEATS = [
    {
      eyebrow: "ACADEMIA ÓRBITA // ENTRENAMIENTO RUTINARIO",
      title: 'BIENVENIDO, <span>CADETE</span>',
      text: "Soy ORBE, el sistema de a bordo de esta cabina. Voy a acompañarte en la práctica número 47: la misma que ya has hecho cuarenta y seis veces. Tú no tienes que saberte el procedimiento, para eso estoy yo. Enciende la consola cuando quieras y te guío paso a paso.",
      btn: "INICIAR SIMULACIÓN",
      tag: "SECUENCIA 1 / 4"
    },
    {
      eyebrow: "SIMULACIÓN EN CURSO // PARÁMETROS NOMINALES",
      title: 'TODO EN <span>ORDEN</span>',
      text: "Núcleo encendido. Estoy fijando las coordenadas a esta misma sala con un margen de milisegundos, así que no vas a moverte de aquí; el instructor lleva años repitiendo que el dispositivo nunca ha fallado. Coloca la mano sobre el activador y confírmame la secuencia. Yo te vigilo las constantes.",
      btn: "CONFIRMAR SECUENCIA",
      tag: "SECUENCIA 2 / 4"
    },
    {
      eyebrow: "ADVERTENCIA // LECTURA ANÓMALA",
      title: 'ALGO <span>NO ENCAJA</span>',
      text: "Cadete, detecto un pico de energía que yo no he ordenado. El indicador de anclaje me parpadea y se apaga, y acabo de perder los mandos: no responden. El dispositivo está cargando por su cuenta, sin que nadie se lo haya pedido. Abórtalo. Abórtalo ahora.",
      btn: "ABORTAR SIMULACIÓN",
      tag: "SECUENCIA 3 / 4",
      critical: true
    },
    {
      eyebrow: "FALLA CRÍTICA // ANCLAJE PERDIDO",
      title: 'SALTO <span>INVOLUNTARIO</span>',
      text: "No llego a tiempo. El dispositivo se activa solo, se fractura en pleno salto y te arranca del hangar: sin coordenadas, sin retorno programado. Estás cayendo a través del tiempo y del espacio, y sus piezas se han dispersado por las eras del universo. Voy contigo, cadete. Es lo único que puedo hacer por ti.",
      btn: "SOPORTAR EL IMPACTO",
      tag: "SECUENCIA 4 / 4",
      critical: true
    }
  ];

  /* ============ Referencias DOM de los módulos nuevos ============ */
  const phaseIntro = document.getElementById("phase-intro");
  const introFrame = document.getElementById("intro-frame");
  const introEyebrow = document.getElementById("intro-eyebrow");
  const introTitle = document.getElementById("intro-title");
  const introText = document.getElementById("intro-text");
  const introTag = document.getElementById("intro-step-tag");
  const introBtn = document.getElementById("intro-next-btn");
  const introBtnLabel = document.getElementById("intro-btn-label");
  const introDots = document.getElementById("intro-dots");
  const introCore = document.getElementById("intro-core");

  const openContextBtn = document.getElementById("open-context-btn");
  const openJournalBtn = document.getElementById("open-journal-btn");
  const journalCountEl = document.getElementById("journal-count");
  const contextModal = document.getElementById("context-modal");
  const contextClose = document.getElementById("context-close");
  const contextPeriod = document.getElementById("context-period");
  const contextTitle = document.getElementById("context-title");
  const contextIntro = document.getElementById("context-intro");
  const contextList = document.getElementById("context-list");
  const journalModal = document.getElementById("journal-modal");
  const journalClose = document.getElementById("journal-close");
  const journalList = document.getElementById("journal-list");
  const finalJournalBtn = document.getElementById("final-journal-btn");

  const deviceList = document.getElementById("device-list");
  const deviceProgress = document.getElementById("device-progress");
  const badgePieces = document.getElementById("badge-pieces");

  const introCoreImg = document.getElementById("intro-core-img");
  const contextFigure = document.getElementById("context-figure");
  const contextImage = document.getElementById("context-image");
  const contextCaption = document.getElementById("context-caption");

  const unlockOverlay = document.getElementById("unlock-overlay");
  const unlockCard = document.getElementById("unlock-card");
  const unlockEyebrow = document.getElementById("unlock-eyebrow");
  const unlockLocks = document.getElementById("unlock-locks");
  const unlockPiece = document.getElementById("unlock-piece");
  const unlockCode = document.getElementById("unlock-code");
  const unlockName = document.getElementById("unlock-name");
  const unlockRole = document.getElementById("unlock-role");
  const unlockStatus = document.getElementById("unlock-status");

  const topicFigure = document.getElementById("topic-figure");
  const topicImage = document.getElementById("topic-image");
  const topicCaption = document.getElementById("topic-caption");
  const topicKeycard = document.getElementById("topic-keycard");
  const topicKeylist = document.getElementById("topic-keylist");

  /* ============ Estado de los módulos nuevos ============ */
  let introStep = 0;
  let journalEntries = [];
  let ownedPieces = [];
  let retryUsed = false;          // el reintento se consume una sola vez por pregunta
  let pendingQuestion = null;     // la pregunta exacta que debe repetirse al reintentar

  /* ============ Utilidades de texto ============ */
  function escapeHtml(text) {
    return String(text).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  /* Resalta dentro de la teoría exactamente las frases que después se evalúan. */
  function highlightTheory(text, keys) {
    let html = escapeHtml(text);
    (keys || []).forEach((key) => {
      const safe = escapeHtml(key);
      if (!html.includes(safe)) return;
      html = html.split(safe).join('<mark class="ft-key">' + safe + "</mark>");
    });
    return html;
  }

  /* ============ Fase 0: intro narrativa ============ */
  function renderIntroDots() {
    introDots.innerHTML = INTRO_BEATS.map(() => "<i></i>").join("");
    updateIntroDots();
  }

  function updateIntroDots() {
    Array.from(introDots.children).forEach((dot, i) => {
      dot.classList.toggle("is-on", i <= introStep && !INTRO_BEATS[i].critical);
      dot.classList.toggle("is-crit", i <= introStep && !!INTRO_BEATS[i].critical);
    });
  }

  const INTRO_IMG = "img/International_Space_Station-2.jpg";
  const INTRO_IMG_CRIT = "img/U.S._Department_of_Energy_-_Science_-_114_036_002_-14281232250.jpg";  /* interior de un reactor de fusión: el núcleo de plasma desbordado */  /* interior del reactor con el núcleo de plasma desbordado */

  function renderIntroBeat() {
    const beat = INTRO_BEATS[introStep];
    introCoreImg.src = beat.critical ? INTRO_IMG_CRIT : INTRO_IMG;
    introCoreImg.alt = beat.critical ? "Distorsión del espacio-tiempo" : "Cabina de entrenamiento orbital";
    introEyebrow.textContent = beat.eyebrow;
    introTitle.innerHTML = beat.title;
    introText.textContent = beat.text;
    introTag.textContent = beat.tag;
    introBtnLabel.textContent = beat.btn;
    introFrame.classList.toggle("is-sim", !beat.critical);
    introCore.classList.toggle("is-critical", !!beat.critical);
    updateIntroDots();
    if (beat.critical) shipShake(introFrame, introStep === INTRO_BEATS.length - 1 ? 16 : 7);
    gsap.fromTo(introText, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
  }

  function advanceIntro() {
    if (introStep < INTRO_BEATS.length - 1) {
      introStep += 1;
      renderIntroBeat();
      return;
    }
    gsap.to(introFrame, {
      opacity: 0,
      y: -18,
      duration: 0.45,
      ease: "power2.in",
      onComplete: () => {
        phaseIntro.hidden = true;
        phaseAlert.hidden = false;
        ftRoot.dataset.phase = "alert";
        gsap.fromTo(alertFrame, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" });
        shipShake(alertFrame, 12);
      }
    });
  }

  /* ============ Tema visual por época ============ */
  function applyEraTheme(era) {
    const meta = ERA_META[era.id];
    if (!meta) return;
    ftRoot.dataset.era = era.id;
    ftRoot.style.setProperty("--era-accent", meta.accent);
    ftRoot.style.setProperty("--era-glow-a", meta.glowA);
    ftRoot.style.setProperty("--era-glow-b", meta.glowB);
  }

  /* ============ Contexto libre de la época ============ */
  function renderEraContext(era) {
    const meta = ERA_META[era.id];
    if (!meta) return;
    contextPeriod.textContent = meta.context.period.toUpperCase();
    contextTitle.textContent = era.name;
    contextFigure.classList.remove("is-broken");
    contextImage.src = meta.context.image;
    contextImage.alt = meta.context.caption;
    contextCaption.textContent = meta.context.caption;
    contextIntro.textContent = meta.context.intro;
    contextList.innerHTML = meta.context.highlights
      .map((h) => "<li>" + escapeHtml(h) + "</li>")
      .join("");
  }

  function openContextModal() {
    if (!contextModal.open) contextModal.showModal();
  }

  /* Evita diálogos apilados: si el expediente va a abrirse, los paneles
     laterales se cierran antes para que nunca queden atrapados detrás. */
  function closeSideModals() {
    if (contextModal.open) contextModal.close();
    if (journalModal.open) journalModal.close();
  }

  /* ============ Diario del Viajero ============ */
  function addJournalEntry(label, text, color, media) {
    journalEntries.push({
      label: label,
      text: text,
      color: color || "#52e7ff",
      image: media && media.image ? media.image : "",
      caption: media && media.caption ? media.caption : "",
      kind: media && media.kind ? media.kind : "REGISTRO"
    });
    journalCountEl.textContent = String(journalEntries.length);
    openJournalBtn.classList.add("is-new");
    window.setTimeout(() => openJournalBtn.classList.remove("is-new"), 4400);
    renderJournal();
  }

  /* Diario en acordeón: solo el título queda a la vista y el resto —texto e
     imagen— se despliega al pulsar. La última entrada se abre sola. */
  function renderJournal() {
    if (journalEntries.length === 0) {
      journalList.innerHTML = '<p class="ft-journal-empty">Todavía no he escrito nada. Escanea las anomalías del radar para ir registrando lo que voy entendiendo.</p>';
      return;
    }
    const openIndex = journalEntries.length - 1;
    journalList.innerHTML = journalEntries
      .map((entry, i) => {
        const isOpen = i === openIndex;
        const num = String(i + 1).padStart(2, "0");
        const figure = entry.image
          ? '<figure class="ft-journal-figure"><img src="' + entry.image +
            '" alt="" loading="lazy"><figcaption>' + escapeHtml(entry.caption || "") + "</figcaption></figure>"
          : "";
        return (
          '<li style="--entry-color:' + entry.color + '">' +
          '<button class="ft-journal-toggle" type="button" data-index="' + i +
          '" aria-expanded="' + isOpen + '" aria-controls="journal-panel-' + i + '">' +
          '<span class="ft-journal-index">' + num + "</span>" +
          '<span class="ft-journal-heading">' + escapeHtml(entry.label) +
          "<small>ENTRADA " + num + " · " + escapeHtml(entry.kind || "REGISTRO") + "</small></span>" +
          '<span class="ft-journal-arrow" aria-hidden="true">▼</span>' +
          "</button>" +
          '<div class="ft-journal-panel' + (isOpen ? " is-open" : "") + '" id="journal-panel-' + i +
          '"><div><div class="ft-journal-inner">' + figure + "<p>" + escapeHtml(entry.text) +
          "</p></div></div></div></li>"
        );
      })
      .join("");

    journalList.querySelectorAll(".ft-journal-toggle").forEach((btn) => {
      btn.addEventListener("click", () => toggleJournalEntry(btn));
    });
    journalList.querySelectorAll(".ft-journal-figure img").forEach((img) => {
      img.addEventListener("error", () => img.closest(".ft-journal-figure").classList.add("is-broken"));
    });
  }

  function toggleJournalEntry(btn) {
    const panel = document.getElementById(btn.getAttribute("aria-controls"));
    const open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    panel.classList.toggle("is-open", !open);
  }

  function setAllJournalEntries(open) {
    journalList.querySelectorAll(".ft-journal-toggle").forEach((btn) => {
      btn.setAttribute("aria-expanded", String(open));
      document.getElementById(btn.getAttribute("aria-controls")).classList.toggle("is-open", open);
    });
  }

  /* Posición porcentual real de una anomalía que está orbitando. */
  function anomalyPercentPosition(el) {
    const disc = radarDisc.getBoundingClientRect();
    const box = el.getBoundingClientRect();
    if (!disc.width || !disc.height) return { x: 50, y: 50 };
    return {
      x: ((box.left + box.width / 2 - disc.left) / disc.width) * 100,
      y: ((box.top + box.height / 2 - disc.top) / disc.height) * 100
    };
  }

  /* ============ Secuencia de desbloqueo: candados rompiéndose ============ */
  const LOCK_SVG =
    '<svg viewBox="0 0 24 24" focusable="false">' +
    '<path class="ft-lock-shackle" d="M7.4 11V8.6a4.6 4.6 0 0 1 9.2 0V11"/>' +
    '<rect class="ft-lock-body" x="4.6" y="11" width="14.8" height="10.4" rx="2"/>' +
    '</svg>';

  function playUnlockSequence(era) {
    return new Promise((resolve) => {
      const meta = ERA_META[era.id];
      unlockEyebrow.textContent = "ÉPOCA SUPERADA // LIBERANDO COMPONENTE";
      unlockCode.textContent = meta.piece.code;
      unlockName.textContent = meta.piece.name;
      unlockRole.textContent = meta.piece.role;
      unlockStatus.textContent = "ROMPIENDO SELLOS TEMPORALES…";
      unlockStatus.classList.remove("is-done");
      unlockPiece.classList.remove("is-free");
      unlockOverlay.style.setProperty("--era-accent", meta.accent);

      const angles = [-90, 30, 150];
      unlockLocks.innerHTML = angles
        .map((a) => '<div class="ft-lock" style="--lock-a:' + a + 'deg">' + LOCK_SVG + "</div>")
        .join("");
      const locks = Array.from(unlockLocks.querySelectorAll(".ft-lock"));

      unlockOverlay.hidden = false;
      gsap.fromTo(unlockCard, { opacity: 0, y: 22, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "power3.out" });

      /* Un candado se sacude, se abre y estalla en esquirlas; luego el siguiente. */
      locks.forEach((lock, i) => {
        const t = 650 + i * 780;
        window.setTimeout(() => {
          lock.classList.add("is-breaking");
          unlockStatus.textContent = `SELLO ${i + 1}/${locks.length} FORZADO…`;
        }, t);
        window.setTimeout(() => {
          lock.classList.remove("is-breaking");
          lock.classList.add("is-open");
          shipShake(unlockCard, 5);
        }, t + 330);
        window.setTimeout(() => {
          lock.classList.add("is-gone");
          spawnLockShards(angles[i]);
        }, t + 620);
      });

      const total = 650 + locks.length * 780 + 500;
      window.setTimeout(() => {
        unlockPiece.classList.add("is-free");
        unlockStatus.textContent = "COMPONENTE LIBERADO // ACOPLANDO AL DISPOSITIVO";
        unlockStatus.classList.add("is-done");
        shipShake(unlockCard, 9);
      }, total);
      window.setTimeout(() => {
        gsap.to(unlockCard, {
          opacity: 0, y: -16, duration: 0.4, ease: "power2.in",
          onComplete: () => { unlockOverlay.hidden = true; resolve(); }
        });
      }, total + 1500);
    });
  }

  function spawnLockShards(angle) {
    for (let i = 0; i < 5; i += 1) {
      const shard = document.createElement("i");
      shard.className = "ft-shard";
      shard.style.setProperty("--sa", angle + (i - 2) * 13 + "deg");
      shard.style.animationDelay = i * 0.04 + "s";
      unlockLocks.appendChild(shard);
      window.setTimeout(() => shard.remove(), 900);
    }
  }


  /* ============ Dispositivo de salto temporal ============ */
  function renderDeviceList() {
    deviceList.innerHTML = ERAS.map((era) => {
      const meta = ERA_META[era.id];
      const owned = ownedPieces.includes(era.id);
      return '<li data-era="' + era.id + '"' + (owned ? ' class="is-owned"' : "") +
        ' style="--piece-color:' + meta.accent + '"><i></i><span>' +
        (owned ? escapeHtml(meta.piece.name) : "PIEZA " + meta.piece.code + " — SIN RECUPERAR") +
        "</span></li>";
    }).join("");
    deviceProgress.textContent = ownedPieces.length + "/" + ERAS.length;
  }

  function grantPiece(era) {
    if (ownedPieces.includes(era.id)) return;
    ownedPieces.push(era.id);
    renderDeviceList();
    const li = deviceList.querySelector('[data-era="' + era.id + '"]');
    if (li) {
      li.classList.add("just-added");
      window.setTimeout(() => li.classList.remove("just-added"), 900);
    }
    const meta = ERA_META[era.id];
    addJournalEntry(
      "PIEZA RECUPERADA // " + meta.piece.code,
      "He recuperado el " + meta.piece.name + ". " + meta.piece.role +
      " El dispositivo va tomando forma otra vez: " + ownedPieces.length + " de " + ERAS.length + " piezas.",
      meta.accent,
      { image: meta.context.image, caption: meta.context.caption, kind: "COMPONENTE DESBLOQUEADO" }
    );
  }

  function renderBadgePieces() {
    badgePieces.innerHTML = ERAS.map((era) => {
      const meta = ERA_META[era.id];
      return "<li>" + escapeHtml(meta.piece.code) + " · " + escapeHtml(meta.piece.name) + "</li>";
    }).join("");
  }

  /* ============ Utilidades ============ */
  function shuffle(items) {
    return [...items].sort(() => Math.random() - 0.5);
  }

  function distance(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
  }

  function randomPointInDisc(minR = 15, maxR = 42) {
    const angle = Math.random() * Math.PI * 2;
    const radius = minR + Math.random() * (maxR - minR);
    return {
      x: 50 + radius * Math.cos(angle),
      y: 50 + radius * Math.sin(angle)
    };
  }

  function pickAnomalyPosition() {
    let point;
    let attempts = 0;
    let tooClose;
    do {
      point = randomPointInDisc();
      tooClose = anomalyPositions.some((p) => distance(point, p) < 24);
      attempts += 1;
    } while (tooClose && attempts < 30);
    anomalyPositions.push(point);
    return point;
  }

  /* ============ Sacudida de la nave ============ */
  function shipShake(target, power = 8) {
    const tl = gsap.timeline();
    for (let i = 0; i < 6; i += 1) {
      tl.to(target, {
        x: gsap.utils.random(-power, power),
        y: gsap.utils.random(-power / 2, power / 2),
        rotation: gsap.utils.random(-0.5, 0.5),
        duration: 0.06,
        ease: "power1.inOut"
      });
    }
    tl.to(target, { x: 0, y: 0, rotation: 0, duration: 0.18, ease: "power2.out" });
    return tl;
  }

  function startAmbientTremor() {
    ambientTremorId = window.setInterval(() => shipShake(alertFrame, 4), 3200);
  }

  function stopAmbientTremor() {
    if (ambientTremorId) {
      window.clearInterval(ambientTremorId);
      ambientTremorId = null;
    }
  }

  /* ============ Fase 1: Alerta ============ */
  function renderDiagnosticLog() {
    diagnosticLog.innerHTML = DIAGNOSTIC_LINES
      .map((line) => `<p class="ft-log-line">${line}</p>`)
      .join("");
    const lines = diagnosticLog.querySelectorAll(".ft-log-line");
    gsap.set(lines, { opacity: 0, x: -14 });
    gsap.to(lines, {
      opacity: 1,
      x: 0,
      duration: 0.4,
      stagger: 0.18,
      delay: 0.3,
      ease: "power2.out"
    });
  }

  function goToRadarPhase() {
    stopAmbientTremor();
    gsap.to(alertFrame, {
      opacity: 0,
      y: -20,
      duration: 0.45,
      ease: "power2.in",
      onComplete: () => {
        phaseAlert.hidden = true;
        ftRoot.dataset.phase = "radar";
        phaseRadar.hidden = false;
        gsap.fromTo(
          phaseRadar,
          { opacity: 0 },
          { opacity: 1, duration: 0.6, ease: "power2.out" }
        );
        moveShipToNode(0, true);
        startEra(0);
      }
    });
  }

  /* ============ Línea temporal / mapa de épocas ============ */
  function updateTimelineNodes() {
    timelineNodes.forEach((node, i) => {
      node.classList.toggle("is-done", i < currentEraIndex);
      node.classList.toggle("is-active", i === currentEraIndex);
    });
    timelineFill.style.width = `${(currentEraIndex / (TIMELINE_NODE_COUNT - 1)) * 100}%`;
  }

  function moveShipToNode(index, instant) {
    const pct = (index / (TIMELINE_NODE_COUNT - 1)) * 100;
    if (instant) {
      gsap.set(timelineShip, { left: `${pct}%` });
      timelineFill.style.width = `${pct}%`;
      return Promise.resolve();
    }
    return gsap.to(timelineShip, { left: `${pct}%`, duration: 1.4, ease: "power2.inOut" })
      .then(() => {
        timelineFill.style.width = `${pct}%`;
      });
  }

  /* ============ Fase 2: Radar por época ============ */
  function startSweep() {
    sweepTween = gsap.to(radarSweep, {
      rotation: 360,
      duration: 4,
      repeat: -1,
      ease: "none"
    });
  }

  function stopSweep() {
    if (!sweepTween) return;
    const current = gsap.getProperty(radarSweep, "rotation");
    sweepTween.kill();
    gsap.to(radarSweep, {
      rotation: current + 140,
      duration: 1.1,
      ease: "power3.out"
    });
    sweepTween = null;
  }

  /* Ritmo del barrido de detección. Se ve cuatro veces por partida, una por
     época, así que va justo de tiempo: ni tan corto que no se lea, ni tan
     largo que canse al repetirse. */
  const DURACION_BARRIDO = 1700;   /* ms buscando, con el radar vacío */
  const ESPERA_ENTRE_SENALES = 0.34;  /* s entre una anomalía y la siguiente */

  function barridoDeDeteccion(era, alTerminar) {
    const capa = document.getElementById("radar-scan");
    const texto = document.getElementById("radar-scan-texto");
    const total = era.subtopics.length;

    if (!capa) {                       /* sin la capa, todo sigue como antes */
      spawnEraAnomalies(era);
      alTerminar();
      return;
    }

    hudStatus.textContent = "BARRIDO EN CURSO";
    texto.textContent = "RASTREANDO ANOMALÍAS";
    capa.classList.add("is-on");

    window.setTimeout(() => {
      texto.textContent = `${total} SEÑALES LOCALIZADAS`;
    }, DURACION_BARRIDO * 0.62);

    window.setTimeout(() => {
      capa.classList.remove("is-on");
      /* las anomalías se crean cuando el barrido ya las ha "encontrado" */
      spawnEraAnomalies(era);
      /* el radar no queda disponible hasta que la última ha aparecido */
      const revelado = (ESPERA_ENTRE_SENALES * (total - 1) + 0.42) * 1000;
      window.setTimeout(alTerminar, revelado + 120);
    }, DURACION_BARRIDO);
  }

  function startEra(index) {
    currentEraIndex = index;
    currentEra = ERAS[index];
    collectedInEra = 0;
    progressPercent = 0;
    updateProgressUI();
    eraLabel.textContent = currentEra.name.toUpperCase();
    hudStatus.textContent = "RASTREANDO SEÑALES TEMPORALES";
    explorationHint.textContent = `Pulsa las 5 señales de "${currentEra.name}" para escanearlas. Cada anomalía correctamente resuelta suma +20%.`;
    updateTimelineNodes();
    applyEraTheme(currentEra);
    renderEraContext(currentEra);
    startSweep();
    /* Primero el radar busca, después revela las señales una a una y solo al
       final queda disponible. La ficha de contexto se abre cuando termina,
       para que el barrido no ocurra detrás de un diálogo. */
    barridoDeDeteccion(currentEra, () => {
      hudStatus.textContent = "RASTREANDO SEÑALES TEMPORALES";
      /* Vista previa de contexto: exploración libre de la época, sin evaluación,
         antes de enfrentarse a ninguna pregunta. */
      openContextModal();
    });
  }

  /* Cada anomalía recibe su propio anillo orbital: así nunca se solapan y
     el conjunto gira de forma lenta y continua alrededor del centro. */
  const ORBIT_RADII = [19, 25, 31, 37, 43];

  function spawnEraAnomalies(era) {
    anomalyPositions = [];
    radarDisc.querySelectorAll(".ft-orbit, .ft-orbit-path").forEach((node) => node.remove());
    const order = shuffle(era.subtopics.map((subtopic, index) => ({ subtopic, index })));
    const radii = shuffle(ORBIT_RADII);

    order.forEach(({ subtopic, index }, orderIndex) => {
      const radius = radii[orderIndex];
      const inset = `${50 - radius}%`;
      const color = DOT_COLORS[index % DOT_COLORS.length];
      const media = SUBTOPIC_MEDIA[subtopic.id];
      /* Órbitas lentas y de duración distinta: el movimiento nunca se sincroniza. */
      const duration = 96 + orderIndex * 17;
      const startAngle = Math.round(Math.random() * 360);

      const path = document.createElement("div");
      path.className = "ft-orbit-path";
      path.style.setProperty("--orbit-inset", inset);
      radarDisc.appendChild(path);

      const orbit = document.createElement("div");
      orbit.className = "ft-orbit";
      orbit.style.setProperty("--orbit-inset", inset);
      orbit.style.setProperty("--orbit-dur", `${duration}s`);
      orbit.style.setProperty("--orbit-start", `${startAngle}deg`);

      const pos = document.createElement("div");
      pos.className = "ft-orbit-pos";
      const counter = document.createElement("div");
      counter.className = "ft-orbit-counter";
      counter.style.setProperty("--orbit-dur", `${duration}s`);
      counter.style.setProperty("--orbit-start", `${startAngle}deg`);

      const el = document.createElement("button");
      el.type = "button";
      el.className = "ft-anomaly";
      el.style.setProperty("--dot-color", color);
      el.dataset.subtopicId = subtopic.id;
      el.setAttribute("aria-label", `Anomalía temporal: ${subtopic.title}. Pulsar para escanear.`);
      /* Miniatura real de la anomalía en lugar de la antigua esfera CSS. */
      const img = document.createElement("img");
      img.className = "ft-anomaly-img";
      img.alt = "";
      img.loading = "lazy";
      if (media) img.src = media.image;
      const num = document.createElement("span");
      num.className = "ft-anomaly-num";
      num.textContent = String(index + 1);
      el.append(img, num);
      el.addEventListener("click", () => openAnomalyDossier(subtopic, el));

      counter.appendChild(el);
      pos.appendChild(counter);
      orbit.appendChild(pos);
      radarDisc.appendChild(orbit);

      /* Aparecen de una en una, no todas de golpe: el retardo entre ellas es
         el que hace que se lean como detecciones sucesivas del radar. */
      el.classList.add("por-detectar");
      /* Se fuerza el cálculo del estado oculto antes de quitarlo: sin esto la
         primera, cuyo retardo es cero, aparecía de golpe en vez de fundirse. */
      void el.offsetWidth;
      window.setTimeout(() => {
        el.classList.remove("por-detectar");
        const ping = document.createElement("span");
        ping.className = "ft-ping";
        el.appendChild(ping);
        window.setTimeout(() => ping.remove(), 800);
        hudStatus.textContent = `SEÑAL ${orderIndex + 1} DE ${order.length} DETECTADA`;
      }, ESPERA_ENTRE_SENALES * orderIndex * 1000);
    });
  }

  function spawnRipple(pos, color) {
    const ripple = document.createElement("span");
    ripple.className = "ft-anomaly-ripple";
    ripple.style.left = `${pos.x}%`;
    ripple.style.top = `${pos.y}%`;
    ripple.style.borderColor = color;
    radarDisc.appendChild(ripple);
    gsap.fromTo(
      ripple,
      { scale: 0.2, opacity: 0.8 },
      {
        scale: 2.8,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => ripple.remove()
      }
    );
  }

  function collectCurrentAnomaly() {
    const el = currentAnomalyEl;
    if (el) {
      el.dataset.scanned = "true";
      el.style.pointerEvents = "none";
      /* La anomalía está orbitando, así que su posición se lee en vivo del
         layout y no de unos estilos fijos. */
      const pos = anomalyPercentPosition(el);
      spawnRipple(pos, getComputedStyle(el).getPropertyValue("--dot-color") || "#52e7ff");
      const orbit = el.closest(".ft-orbit");
      gsap.to(el, {
        scale: 1.8,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => { if (orbit) orbit.remove(); else el.remove(); }
      });
    }

    collectedInEra += 1;
    progressPercent = Math.min(100, Math.round(collectedInEra * 20));
    updateProgressUI();

    if (collectedInEra >= 5) {
      hudStatus.textContent = "ESCANEO COMPLETO // INICIANDO PRUEBA FINAL DE ÉPOCA";
      explorationHint.textContent = "Todas las anomalías de esta época fueron recolectadas.";
      stopSweep();
      gsap.to(radarDisc, { scale: 1.04, duration: 0.4, ease: "power2.out", yoyo: true, repeat: 1 });
    } else {
      hudStatus.textContent = `ANOMALÍA RECOLECTADA // ${5 - collectedInEra} SEÑALES RESTANTES`;
      explorationHint.textContent = "Pulsa la siguiente señal detectada por el radar.";
    }
  }

  function updateProgressUI() {
    explorationValue.textContent = `${progressPercent}%`;
    progressFill.style.width = `${progressPercent}%`;
  }

  /* ============ Fase 3: Expediente educativo + desafío por anomalía ============ */
  function openAnomalyDossier(subtopic, anomalyEl) {
    if (anomalyEl.dataset.scanned === "true") return;
    sessionMode = "anomaly";
    currentSubtopic = subtopic;
    currentAnomalyEl = anomalyEl;
    anomalyFailCount = 0;
    questionQueue = shuffle(subtopic.questions);

    dossierHeadLabel.textContent = "EXPEDIENTE TEMPORAL RECUPERADO";
    dossierTag.textContent = `ÉPOCA ${currentEraIndex + 1}/4 // ${subtopic.id.toUpperCase()}`;
    eraPeriod.textContent = currentEra.period;
    eraTitle.textContent = subtopic.title;

    /* Maquetación dinámica: imagen representativa + teoría con los datos
       evaluables resaltados + tarjeta de puntos clave. */
    const media = SUBTOPIC_MEDIA[subtopic.id];
    if (media) {
      topicFigure.hidden = false;
      topicFigure.classList.remove("is-broken");
      topicImage.src = media.image;
      topicImage.alt = media.caption;
      topicCaption.textContent = media.caption;
      eraDescription.innerHTML = highlightTheory(subtopic.description, media.keys);
      topicKeycard.hidden = media.keys.length === 0;
      topicKeylist.innerHTML = media.keys
        .map((k) => "<li>" + escapeHtml(k.charAt(0).toUpperCase() + k.slice(1)) + "</li>")
        .join("");
    } else {
      topicFigure.hidden = true;
      topicKeycard.hidden = true;
      eraDescription.textContent = subtopic.description;
    }

    showInfoPanel();
    mainView.hidden = false;
    closeSideModals();
    dossierModal.showModal();
    gsap.fromTo(
      dossierFrame,
      { opacity: 0, y: 26, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "power3.out" }
    );
  }

  function showInfoPanel() {
    infoData.hidden = false;
    challengeData.hidden = true;
  }

  function showChallengePanel() {
    infoData.hidden = true;
    challengeData.hidden = false;
  }

  function renderNextAnomalyQuestion() {
    if (questionQueue.length === 0) {
      questionQueue = shuffle(currentSubtopic.questions);
    }
    renderQuestion(questionQueue.pop());
  }

  /* Renderiza una pregunta. `isRetry` indica que es el segundo (y último) intento
     de la MISMA pregunta: en ese caso no se vuelve a conceder otro reintento. */
  function renderQuestion(q, isRetry) {
    answerLocked = false;
    pendingQuestion = q;
    if (!isRetry) retryUsed = false;
    triviaQuestion.textContent = q.question;
    triviaFeedback.textContent = "";
    triviaFeedback.className = "quiz-feedback";
    triviaRetryBtn.hidden = true;

    const correctText = q.options[q.correct];
    const shuffledOptions = shuffle(q.options);

    triviaAnswers.innerHTML = shuffledOptions
      .map(
        (opt, i) =>
          `<button class="answer-button" type="button" data-answer="${opt}"><span>${String.fromCharCode(65 + i)}.</span> ${opt}</button>`
      )
      .join("");

    triviaAnswers.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => handleAnswer(btn, correctText, q), { once: true });
    });
  }

  function handleAnswer(selected, correctText, q) {
    if (answerLocked) return;
    answerLocked = true;

    const isCorrect = selected.dataset.answer === correctText;
    triviaAnswers.querySelectorAll("button").forEach((btn) => {
      btn.disabled = true;
      if (btn.dataset.answer === correctText) btn.classList.add("correct");
    });

    if (isCorrect) {
      triviaFeedback.textContent = "✓ MEMORIA CONFIRMADA // DATOS CORRECTOS";
      triviaFeedback.classList.add("success");
      window.setTimeout(() => {
        if (sessionMode === "levelFinal") {
          advanceLevelFinalQuestion();
        } else {
          closeDossierThenCollect();
        }
      }, 1000);
      return;
    }

    selected.classList.add("incorrect");
    triviaFeedback.textContent = `✕ REGISTRO INCORRECTO // RESPUESTA CORRECTA: ${correctText.toUpperCase()}`;
    triviaFeedback.classList.add("error");

    /* Los fallos cuentan en ambos modos: la prueba final ya no es infinita. */
    anomalyFailCount += 1;
    failCountEl.textContent = String(anomalyFailCount);
    if (anomalyFailCount > MAX_FAILS) {
      window.setTimeout(triggerGameOver, 900);
      return;
    }

    /* El reintento solo puede usarse UNA vez por pregunta. Si ya se gastó,
       la respuesta correcta queda revelada y el desafío se reinicia por
       completo desde la primera pregunta, sin poder saltarse ninguna. */
    if (retryUsed) {
      triviaRetryBtn.hidden = true;
      triviaFeedback.textContent =
        `✕ REINTENTO AGOTADO // RESPUESTA CORRECTA: ${correctText.toUpperCase()}`;
      window.setTimeout(restartCurrentChallenge, 1900);
      return;
    }

    triviaRetryBtn.hidden = false;
    gsap.fromTo(
      triviaRetryBtn,
      { opacity: 0, y: 6 },
      { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
    );
  }

  /* Reintento único: repite exactamente la MISMA pregunta fallada. */
  function retryCurrentQuestion() {
    if (retryUsed || !pendingQuestion) return;
    retryUsed = true;
    triviaRetryBtn.hidden = true;
    renderQuestion(pendingQuestion, true);
    triviaFeedback.textContent = "◈ ÚLTIMO INTENTO DISPONIBLE PARA ESTA PREGUNTA";
    triviaFeedback.className = "quiz-feedback";
  }

  /* Al agotar el reintento el desafío vuelve a empezar desde su primera
     pregunta, de modo que no queda ninguna pregunta sin responder. */
  function restartCurrentChallenge() {
    if (anomalyFailCount > MAX_FAILS) return;
    if (sessionMode === "levelFinal") {
      finalQueueLevel = shuffle(currentEra.finalTest);
      finalTotalLevel = finalQueueLevel.length;
      finalStepLevel = 0;
      advanceLevelFinalQuestion();
      return;
    }
    questionQueue = shuffle(currentSubtopic.questions);
    renderNextAnomalyQuestion();
  }

  function closeDossierThenCollect() {
    gsap.to(dossierFrame, {
      opacity: 0,
      y: 16,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        dossierModal.close();
        /* La anomalía resuelta se sintetiza en el diario del Viajero. */
        if (currentSubtopic && SUBTOPIC_MEDIA[currentSubtopic.id]) {
          const meta = ERA_META[currentEra.id];
          const sm = SUBTOPIC_MEDIA[currentSubtopic.id];
          addJournalEntry(
            currentSubtopic.title.toUpperCase(),
            sm.journal,
            meta ? meta.accent : "#52e7ff",
            { image: sm.image, caption: sm.caption, kind: "ANOMALÍA ESCANEADA" }
          );
        }
        collectCurrentAnomaly();
        if (collectedInEra >= 5) {
          window.setTimeout(startLevelFinalTest, 900);
        }
      }
    });
  }

  function guardDossierClose(event) {
    event.preventDefault();
  }

  /* ============ Fase 4: Prueba final de época ============ */
  function startLevelFinalTest() {
    sessionMode = "levelFinal";
    finalQueueLevel = shuffle(currentEra.finalTest);
    finalTotalLevel = finalQueueLevel.length;
    finalStepLevel = 0;

    dossierHeadLabel.textContent = "PRUEBA FINAL DE ÉPOCA";
    eraPeriod.textContent = currentEra.period;
    eraTitle.textContent = currentEra.name;
    eraDescription.textContent = "Responde correctamente el cuestionario integrador para superar esta época y avanzar en la línea temporal.";
    failTracker.hidden = true;

    showChallengePanel();
    mainView.hidden = false;

    if (!dossierModal.open) {
      closeSideModals();
      dossierModal.showModal();
      gsap.fromTo(
        dossierFrame,
        { opacity: 0, y: 26, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "power3.out" }
      );
    } else {
      gsap.fromTo(dossierFrame, { opacity: 0.4 }, { opacity: 1, duration: 0.35, ease: "power2.out" });
    }

    advanceLevelFinalQuestion();
  }

  function advanceLevelFinalQuestion() {
    if (finalQueueLevel.length === 0) {
      completeLevel();
      return;
    }
    finalStepLevel += 1;
    currentFinalQuestion = finalQueueLevel.pop();
    challengeEyebrow.textContent = `> PRUEBA FINAL DE ÉPOCA — PREGUNTA ${finalStepLevel}/${finalTotalLevel}`;
    dossierTag.textContent = `ÉPOCA ${currentEraIndex + 1}/4 // PRUEBA FINAL`;
    renderQuestion(currentFinalQuestion);
  }

  /* ============ Transición entre épocas ============ */
  function completeLevel() {
    gsap.to(dossierFrame, {
      opacity: 0,
      y: 16,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        dossierModal.close();
        const finishedIndex = currentEraIndex;
        const nextIndex = finishedIndex + 1;
        timelineNodes[finishedIndex].classList.add("is-done");
        timelineNodes[finishedIndex].classList.remove("is-active");

        /* Secuencia de victoria: los candados de la pieza se rompen en pantalla
           y solo entonces el componente se acopla al inventario. */
        playUnlockSequence(ERAS[finishedIndex]).then(() => {
          grantPiece(ERAS[finishedIndex]);
          const gained = ERA_META[ERAS[finishedIndex].id].piece;
          hudStatus.textContent =
            nextIndex < ERAS.length
              ? `PIEZA ${gained.code} ACOPLADA // ${ownedPieces.length}/${ERAS.length} DEL DISPOSITIVO`
              : "DISPOSITIVO REPARADO // REGRESANDO AL PRESENTE";
          explorationHint.textContent = `Has recuperado el ${gained.name}. El cohete temporal avanza hacia el siguiente punto...`;

          moveShipToNode(nextIndex).then(() => {
            if (nextIndex < ERAS.length) {
              startEra(nextIndex);
            } else {
              timelineNodes[TIMELINE_NODE_COUNT - 1].classList.add("is-done");
              showFinalCongrats();
            }
          });
        });
      }
    });
  }

  /* ============ Fase Game Over ============ */
  function triggerGameOver() {
    stopSweep();
    if (dossierModal.open) dossierModal.close();
    ftRoot.dataset.phase = "gameover";
    gsap.to(phaseRadar, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        phaseRadar.hidden = true;
        phaseGameover.hidden = false;
        gsap.fromTo(
          gameoverFrame,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
        );
        shipShake(gameoverFrame, 14);
      }
    });
  }

  /* ============ Fase Final: Restauración Temporal Completa ============ */
  function showFinalCongrats() {
    /* La medalla queda guardada para el resto del sitio: index.html la lee al
       cargar, y si esta partida se juega dentro del iframe de la portada, el
       evento storage la avisa en el momento, sin recargar nada. */
    try { localStorage.setItem("orbita-medalla", "1"); } catch (e) {}
    ftRoot.classList.add("is-repaired");
    ftRoot.dataset.phase = "final";
    renderBadgePieces();
    addJournalEntry(
      "DISPOSITIVO REPARADO // REGRESO",
      "Las cuatro piezas están en su sitio y el dispositivo vuelve a responder. Salí de un simulacro de tres segundos y he acabado recorriendo 13.800 millones de años. Ya no me pregunto cómo volver: me pregunto cómo contarlo. Llevo conmigo el registro completo del universo, desde la singularidad hasta la primera criatura con ojos.",
      "#ffb454"
    );
    gsap.to(phaseRadar, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        phaseRadar.hidden = true;
        phaseFinal.hidden = false;
        gsap.fromTo(
          finalFrame,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
        );
      }
    });
  }

  function restartGame() {
    window.location.reload();
  }

  /* ============ Inicialización ============ */
  function init() {
    renderDiagnosticLog();
    renderIntroDots();
    renderIntroBeat();
    renderDeviceList();
    renderJournal();
    startAmbientTremor();

    /* Fase 0: intro narrativa de la simulación fallida */
    introBtn.addEventListener("click", advanceIntro);

    startScanBtn.addEventListener("click", goToRadarPhase);
    continueToChallengeBtn.addEventListener("click", () => {
      challengeEyebrow.textContent = "> VERIFICACIÓN DE MEMORIA";
      failTracker.hidden = false;
      failCountEl.textContent = String(anomalyFailCount);
      showChallengePanel();
      renderNextAnomalyQuestion();
    });

    /* Reintento único sobre la misma pregunta */
    triviaRetryBtn.addEventListener("click", retryCurrentQuestion);

    /* Contexto libre de la época y diario del viajero */
    openContextBtn.addEventListener("click", openContextModal);
    contextClose.addEventListener("click", () => contextModal.close());
    contextModal.addEventListener("click", (e) => { if (e.target === contextModal) contextModal.close(); });
    openJournalBtn.addEventListener("click", () => { if (!journalModal.open) journalModal.showModal(); });
    finalJournalBtn.addEventListener("click", () => { if (!journalModal.open) journalModal.showModal(); });
    journalClose.addEventListener("click", () => journalModal.close());
    journalModal.addEventListener("click", (e) => { if (e.target === journalModal) journalModal.close(); });

    document.getElementById("journal-expand-all").addEventListener("click", () => setAllJournalEntries(true));
    document.getElementById("journal-collapse-all").addEventListener("click", () => setAllJournalEntries(false));

    /* Si una imagen no carga, su ficha degrada a un fondo de color de la época */
    topicImage.addEventListener("error", () => topicFigure.classList.add("is-broken"));
    topicImage.addEventListener("load", () => topicFigure.classList.remove("is-broken"));
    contextImage.addEventListener("error", () => contextFigure.classList.add("is-broken"));
    contextImage.addEventListener("load", () => contextFigure.classList.remove("is-broken"));

    dossierModal.addEventListener("cancel", guardDossierClose);
    restartBtn.addEventListener("click", restartGame);
    replayBtn.addEventListener("click", restartGame);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
