    /* En gigantes gaseosos, la gravedad se expresa cerca del nivel de las nubes. Los parámetros de exoplanetas son estimaciones basadas en observaciones. */
    const planets=[
      {id:"MERC",name:"Mercurio",kind:"rocoso",category:"Planeta interior",gravity:"3,7 m/s²",temperature:"167 °C",
        description:"El planeta más cercano al <span class=\"hl-cyan\">Sol</span> y el más pequeño del Sistema Solar, con una superficie cubierta de cráteres.",
        fact:"Un día solar mercuriano dura 176 días terrestres.",
        keyFacts:[{label:"Distancia al Sol",value:"57,9 millones km"},{label:"Lunas",value:"0"},{label:"Periodo orbital",value:"88 días"},{label:"Descubrimiento",value:"Conocido desde la Antigüedad"}],
        sections:[
          {title:"Composición",html:"Un núcleo de hierro descomunal ocupa cerca del <mark>85%</mark> de su radio, envuelto por un manto y una corteza de silicatos muy delgada: la proporción de metal más alta de todos los planetas rocosos."},
          {title:"Atmósfera",html:"Prácticamente no tiene atmósfera: solo una <span class=\"hl-purple\">exosfera</span> extremadamente tenue formada por átomos arrancados por el viento solar y los impactos de micrometeoritos."},
          {title:"Exploración Humana",html:"Visitado solo por las sondas <strong>Mariner 10</strong> (1974-75) y <strong>MESSENGER</strong>, que en 2011 se convirtió en la primera nave en orbitarlo, cartografiando el <mark>100%</mark> de su superficie."}
        ],
        gallery:[
          {src:"img/Mercury_in_true_color.jpg",caption:"Vista global en color real"},
          {src:"img/Mercury_in_color_-_Prockter07_centered.jpg",caption:"Mosaico de color mejorado (MESSENGER)"}
        ],
        layers:[
          {name:"Exosfera",type:"Envoltura exterior ultratenue",composition:"Oxígeno, sodio, hidrógeno, helio y potasio en estado gaseoso extremadamente disperso",thickness:"≈200 km de densidad apreciable",temperature:"De 430 °C de día a −180 °C de noche",pressure:"≈10⁻¹⁵ bar (prácticamente vacío)",description:"No es una atmósfera real: los átomos son arrancados de la superficie por el viento solar y los micrometeoritos, y escapan al espacio sin llegar a chocar entre sí.",size:100,color:"#8fa8c8"},
          {name:"Corteza",type:"Capa rocosa sólida externa",composition:"Silicatos pobres en hierro y ricos en azufre, en estado sólido",thickness:"≈35 km (estimado entre 26 y 50 km)",temperature:"167 °C de media superficial",pressure:"Cercana a cero en superficie",description:"Está cubierta de cráteres y de enormes escarpes llamados rupes, formados cuando el planeta se contrajo al enfriarse y su corteza se arrugó como la piel de una manzana seca.",size:92,color:"#c7b8a5"},
          {name:"Manto",type:"Capa de silicatos sólida",composition:"Silicatos de magnesio y hierro en estado sólido",thickness:"≈385 km",temperature:"Entre 700 y 1.200 °C",pressure:"Hasta ≈70 kbar en su base",description:"Es sorprendentemente delgado para un planeta: casi todo el volumen de Mercurio lo ocupa el núcleo, lo que lo convierte en el planeta más metálico del Sistema Solar.",size:84,color:"#8a7360"},
          {name:"Núcleo externo",type:"Metal fundido conductor",composition:"Hierro y níquel líquidos con azufre disuelto",thickness:"≈700 km de espesor",temperature:"Entre 1.700 y 2.000 °C",pressure:"≈200 kbar",description:"Su movimiento genera un campo magnético global, débil pero real: Mercurio es el único planeta rocoso además de la Tierra que conserva una magnetosfera activa.",size:72,color:"#e08a3c"},
          {name:"Núcleo interno",type:"Esfera metálica sólida",composition:"Hierro y níquel sólidos cristalizados",thickness:"Radio ≈1.260 km",temperature:"Más de 2.000 °C",pressure:"≈350 kbar",description:"Junto al núcleo externo ocupa cerca del 85% del radio del planeta, una proporción que ningún otro mundo iguala y que todavía no tiene explicación definitiva.",size:44,color:"#ffd27a"}
        ],
        gradient:"linear-gradient(135deg,#c7b8a5 5%,#66584e 48%,#292b35 100%)",glow:"rgba(218,200,172,.36)",moons:[]},
      {id:"VENU",name:"Venus",kind:"rocoso",category:"Planeta interior",gravity:"8,87 m/s²",temperature:"464 °C",
        description:"Un mundo rocoso envuelto por una atmósfera densa de <mark>dióxido de carbono</mark> que provoca el efecto invernadero más extremo del Sistema Solar.",
        fact:"Su rotación es tan lenta que un día venusiano supera a un año venusiano.",
        keyFacts:[{label:"Distancia al Sol",value:"108,2 millones km"},{label:"Lunas",value:"0"},{label:"Periodo orbital",value:"225 días"},{label:"Descubrimiento",value:"Conocido desde la Antigüedad"}],
        sections:[
          {title:"Composición",html:"Su estructura interna —núcleo, manto y corteza de silicatos— es muy parecida a la de la Tierra, por lo que suele llamarse el <span class=\"hl-purple\">planeta gemelo</span>."},
          {title:"Atmósfera",html:"Una capa de <mark>96% CO₂</mark> genera una presión superficial 92 veces mayor que la terrestre y nubes de ácido sulfúrico que lo convierten en el objeto más brillante del cielo nocturno tras la Luna."},
          {title:"Exploración Humana",html:"La sonda soviética <strong>Venera 7</strong> logró en 1970 el primer aterrizaje suave en otro planeta, y el radar de la misión <strong>Magallanes</strong> (1990-94) cartografió el <mark>98%</mark> de su superficie oculta bajo las nubes."}
        ],
        gallery:[
          {src:"img/Venus-real_color.jpg",caption:"Vista global en color real"},
          {src:"img/Venus_globe.jpg",caption:"Superficie revelada por radar (misión Magallanes)"}
        ],
        layers:[
          {name:"Atmósfera",type:"Envoltura gaseosa densa y opaca",composition:"Dióxido de carbono (96,5%) y nitrógeno (3,5%), con nubes de ácido sulfúrico",thickness:"≈250 km",temperature:"464 °C en superficie, −45 °C en la cima de las nubes",pressure:"92 bar en superficie (como 900 m bajo el mar)",description:"Provoca el efecto invernadero más extremo del Sistema Solar. Sus vientos superiores rodean el planeta en solo 4 días, sesenta veces más rápido de lo que Venus tarda en girar.",size:100,color:"#ffdd9b"},
          {name:"Corteza",type:"Capa basáltica sólida",composition:"Basalto y silicatos en estado sólido",thickness:"Entre 20 y 50 km",temperature:"464 °C, casi uniforme en todo el planeta",pressure:"92 bar sobre su superficie",description:"No tiene tectónica de placas: parece haberse renovado por completo en un episodio volcánico global hace unos 500 millones de años que borró casi todos sus cráteres antiguos.",size:90,color:"#d58b36"},
          {name:"Manto",type:"Manto rocoso caliente",composition:"Silicatos de magnesio y hierro, sólidos con zonas parcialmente fundidas",thickness:"≈2.800 km",temperature:"De 1.200 a 4.000 °C",pressure:"Hasta ≈1,2 Mbar en su base",description:"Sin placas que liberen el calor interno, la energía se acumula y escapa mediante penachos volcánicos gigantescos: se han catalogado más de 1.600 volcanes en la superficie.",size:80,color:"#a8552a"},
          {name:"Núcleo",type:"Núcleo metálico probablemente fundido",composition:"Hierro y níquel, muy probablemente en estado líquido",thickness:"Radio ≈3.200 km",temperature:"Entre 4.000 y 5.000 °C",pressure:"≈2,8 Mbar",description:"Venus casi no tiene campo magnético. La hipótesis más aceptada es que su núcleo no convecta: sin tectónica que enfríe el manto, el calor no fluye y la dinamo nunca llega a encenderse.",size:52,color:"#ffc04d"}
        ],
        gradient:"linear-gradient(135deg,#ffdd9b 4%,#d58b36 45%,#713e25 100%)",glow:"rgba(255,171,78,.44)",moons:[]},
      {id:"TERR",name:"Tierra",kind:"rocoso",category:"Planeta interior",gravity:"9,81 m/s²",temperature:"15 °C",
        description:"Nuestro hogar: un <span class=\"hl-cyan\">planeta oceánico</span> con una atmósfera que permite la existencia de agua líquida en superficie.",
        fact:"Es el único mundo conocido que alberga vida confirmada.",
        keyFacts:[{label:"Distancia al Sol",value:"149,6 millones km"},{label:"Lunas",value:"1 (la Luna)"},{label:"Periodo orbital",value:"365,25 días"},{label:"Descubrimiento",value:"Nuestro planeta de origen"}],
        sections:[
          {title:"Composición",html:"Un núcleo interno sólido de hierro-níquel y uno externo líquido generan un <span class=\"hl-purple\">campo magnético</span> que nos protege del viento solar."},
          {title:"Atmósfera",html:"Compuesta por <mark>78% nitrógeno</mark> y <mark>21% oxígeno</mark>, es la única atmósfera conocida moldeada activamente por la vida."},
          {title:"Exploración Humana",html:"Habitada de forma permanente desde hace miles de años, y observada sin interrupción desde el año 2000 por tripulaciones a bordo de la <strong>Estación Espacial Internacional</strong>."}
        ],
        gallery:[
          {src:"img/The_Earth_seen_from_Apollo_17.jpg",caption:"La Canica Azul, vista desde el Apolo 17"},
          {src:"img/Blue_Marble_Western_Hemisphere.jpg",caption:"Hemisferio occidental (NASA Blue Marble)"},
          {src:"img/Top_of_Atmosphere.jpg",caption:"Nubes y capas atmosféricas vistas desde el espacio"}
        ],
        layers:[
          {name:"Atmósfera",type:"Envoltura gaseosa estratificada",composition:"Nitrógeno (78%), oxígeno (21%) y argón, con vapor de agua y CO₂ en estado gaseoso",thickness:"≈100 km hasta la línea de Kármán",temperature:"De 15 °C de media a −90 °C en la mesopausa",pressure:"1 atmósfera (1.013 hPa) al nivel del mar",description:"La capa de ozono de la estratosfera absorbe la radiación ultravioleta letal. Sin ella la vida compleja jamás habría podido colonizar la superficie de los continentes.",size:100,color:"#83e4ef"},
          {name:"Corteza",type:"Capa sólida fragmentada en placas",composition:"Silicatos de aluminio y sodio en los continentes y basalto en los océanos, sólidos",thickness:"De 5 km bajo los océanos a 70 km bajo las cordilleras",temperature:"De 15 °C en superficie a 400 °C en su base",pressure:"De 1 bar a ≈10 kbar",description:"Es la única corteza planetaria conocida dividida en placas móviles. Su reciclaje continuo regula el CO₂ atmosférico y ha sostenido un clima habitable durante miles de millones de años.",size:92,color:"#5c8f4a"},
          {name:"Manto",type:"Roca sólida en flujo plástico",composition:"Silicatos de magnesio y hierro (peridotita y bridgmanita), sólidos pero deformables",thickness:"≈2.890 km",temperature:"De 500 °C a 4.000 °C",pressure:"Hasta 1,4 Mbar en el límite con el núcleo",description:"Aunque es roca sólida, fluye unos pocos centímetros al año. Esa lentísima convección es el motor que arrastra los continentes y abre los océanos.",size:83,color:"#b5552e"},
          {name:"Núcleo externo",type:"Metal líquido en convección",composition:"Hierro y níquel líquidos con azufre y oxígeno disueltos",thickness:"≈2.260 km de espesor",temperature:"De 4.000 a 5.000 °C",pressure:"De 1,4 a 3,3 Mbar",description:"Sus corrientes de metal fundido generan la geodinamo: el campo magnético que desvía el viento solar e impide que la atmósfera sea arrancada, como sí le ocurrió a Marte.",size:55,color:"#ff8a3c"},
          {name:"Núcleo interno",type:"Esfera de hierro sólido",composition:"Hierro y níquel cristalizados en estado sólido",thickness:"Radio ≈1.220 km",temperature:"≈5.200 °C, casi la temperatura de la superficie del Sol",pressure:"3,6 Mbar (3,6 millones de veces la presión atmosférica)",description:"Está más caliente que el punto de fusión del hierro, pero la presión colosal lo mantiene sólido. Crece alrededor de un milímetro al año conforme el planeta se enfría.",size:22,color:"#ffe07a"}
        ],
        gradient:"linear-gradient(135deg,#83e4ef 4%,#1468b4 47%,#0c2c6e 100%)",glow:"rgba(82,200,255,.48)",
        moons:[{id:"luna",name:"La Luna",category:"oceanico",diameter:"3.474 km",distance:"384.400 km",period:"27,3 días",bio:5,fact:"Se formó hace 4.500 millones de años tras el impacto de un objeto del tamaño de Marte contra la Tierra primitiva.",image:"img/FullMoon2010.jpg"}]},
      {id:"MART",name:"Marte",kind:"rocoso",category:"Planeta interior",gravity:"3,71 m/s²",temperature:"−63 °C",
        description:"El planeta rojo es un desierto frío con <span class=\"hl-cyan\">volcanes gigantes</span> y casquetes polares de hielo.",
        fact:"Olympus Mons es el volcán más grande conocido del Sistema Solar.",
        keyFacts:[{label:"Distancia al Sol",value:"227,9 millones km"},{label:"Lunas",value:"2 (Fobos y Deimos)"},{label:"Periodo orbital",value:"687 días"},{label:"Descubrimiento",value:"Observado desde la Antigüedad"}],
        sections:[
          {title:"Composición",html:"El óxido de hierro —herrumbre— que cubre su polvo y sus rocas le da su característico color rojizo."},
          {title:"Atmósfera",html:"Una atmósfera muy tenue, de solo <mark>~1%</mark> la densidad de la terrestre y compuesta casi en su totalidad por CO₂, incapaz de sostener agua líquida estable en superficie."},
          {title:"Exploración Humana",html:"El cuerpo más explorado del Sistema Solar tras la Tierra: rovers como <strong>Curiosity</strong> y <strong>Perseverance</strong> analizan su suelo en busca de rastros de vida pasada."}
        ],
        gallery:[
          {src:"img/OSIRIS_Mars_true_color.jpg",caption:"Vista global en color real"},
          {src:"img/Mars_Valles_Marineris.jpeg",caption:"Valles Marineris, un cañón de 4.000 km de longitud"},
          {src:"img/Olympus_Mons_alt.jpg",caption:"Olympus Mons, el volcán más alto del Sistema Solar"}
        ],
        layers:[
          {name:"Atmósfera",type:"Envoltura gaseosa muy tenue",composition:"Dióxido de carbono (95%), nitrógeno y argón, en estado gaseoso",thickness:"≈110 km",temperature:"De −63 °C de media a −143 °C en los polos",pressure:"0,006 bar (menos del 1% de la terrestre)",description:"Es tan fina que el agua líquida hierve y se congela casi a la vez. Aun así basta para levantar tormentas de polvo capaces de cubrir el planeta entero durante meses.",size:100,color:"#e8a97f"},
          {name:"Corteza",type:"Capa basáltica sólida y gruesa",composition:"Basalto rico en hierro oxidado, en estado sólido",thickness:"Entre 24 y 72 km (media ≈50 km)",temperature:"De −63 °C en superficie a ≈500 °C en su base",pressure:"Hasta ≈5 kbar",description:"El óxido de hierro le da su color rojo característico. La misión InSight midió su grosor por primera vez analizando las ondas sísmicas de los martemotos.",size:90,color:"#c0552f"},
          {name:"Manto",type:"Manto rocoso silicatado",composition:"Silicatos de magnesio y hierro en estado sólido",thickness:"≈1.500 km",temperature:"De 500 a 1.900 °C",pressure:"Hasta ≈240 kbar",description:"Alimentó al Monte Olimpo, el mayor volcán del Sistema Solar con 22 km de altura: sin placas tectónicas que lo desplazaran, creció siempre sobre el mismo punto caliente.",size:80,color:"#8a3a28"},
          {name:"Núcleo",type:"Núcleo metálico líquido",composition:"Hierro, níquel y azufre en estado líquido",thickness:"Radio ≈1.830 km",temperature:"Entre 1.900 y 2.400 °C",pressure:"≈400 kbar",description:"Sigue siendo líquido pero ya no genera campo magnético: la dinamo se apagó hace unos 4.000 millones de años y desde entonces el viento solar arrancó casi toda su atmósfera.",size:54,color:"#ffb454"}
        ],
        gradient:"linear-gradient(135deg,#f19a67 3%,#a3442f 48%,#502128 100%)",glow:"rgba(238,92,52,.46)",
        moons:[
          {id:"fobos",name:"Fobos",category:"capturado",diameter:"22,4 km (eje mayor ≈27 km)",distance:"9.377 km",period:"0,32 días (7 h 39 min)",bio:2,fact:"Orbita tan cerca de Marte que se acerca en espiral 1,8 cm por año; en unos 50 millones de años se desintegrará o impactará el planeta.",image:"img/Phobos_moon_-large.jpg"},
          {id:"deimos",name:"Deimos",category:"capturado",diameter:"12,4 km",distance:"23.460 km",period:"1,26 días",bio:2,fact:"Es tan pequeña que un astronauta podría alcanzar fácilmente la velocidad de escape saltando desde su superficie.",image:"img/NASA-Deimos-MarsMoon-20090221.jpg"}
        ]},
      {id:"JUPI",name:"Júpiter",kind:"gaseoso",category:"Gigante gaseoso",gravity:"24,79 m/s²",temperature:"−110 °C",
        description:"El gigante del Sistema Solar, compuesto principalmente de <span class=\"hl-cyan\">hidrógeno y helio</span>.",
        fact:"Su Gran Mancha Roja es una tormenta mayor que la Tierra y observada durante siglos.",
        keyFacts:[{label:"Distancia al Sol",value:"778,5 millones km"},{label:"Lunas",value:"95 confirmadas"},{label:"Periodo orbital",value:"11,9 años"},{label:"Descubrimiento",value:"Lunas mayores halladas por Galileo en 1610"}],
        sections:[
          {title:"Composición",html:"Carece de superficie sólida: bajo sus nubes, la presión transforma el hidrógeno en un fluido metálico que genera el campo magnético más potente de todos los planetas."},
          {title:"Atmósfera",html:"Bandas de nubes de amoníaco en rotación forman la <mark>Gran Mancha Roja</mark>, una tormenta anticiclónica más ancha que la Tierra y activa desde hace al menos 190 años."},
          {title:"Exploración Humana",html:"Visitado por nueve misiones, incluida la sonda <strong>Galileo</strong> (1995-2003) y la actual <strong>Juno</strong>, que estudia su interior desde 2016."}
        ],
        gallery:[
          {src:"img/Jupiter_and_its_shrunken_Great_Red_Spot.jpg",caption:"Vista global en color real"},
          {src:"img/Jupiters_iconic_Great_Red_Spot.jpg",caption:"Primer plano de la Gran Mancha Roja (sonda Juno)"}
        ],
        layers:[
          {name:"Capa de nubes",type:"Atmósfera superior visible",composition:"Hidrógeno (90%) y helio (10%) con amoniaco, hidrosulfuro de amonio y agua",thickness:"≈5.000 km de bandas nubosas",temperature:"De −145 °C en la cima de las nubes a 20 °C más abajo",pressure:"De 0,1 a 10 bar",description:"Aquí gira la Gran Mancha Roja, un anticiclón más grande que la Tierra que se observa desde hace al menos 190 años y cuyos vientos superan los 400 km/h.",size:100,color:"#e8d0ae"},
          {name:"Hidrógeno molecular",type:"Océano de hidrógeno supercrítico",composition:"Hidrógeno molecular (H₂) en estado fluido supercrítico",thickness:"≈14.000 km",temperature:"De 20 a 5.000 °C",pressure:"De 10 bar a 1 Mbar",description:"No existe una superficie: el gas se vuelve progresivamente más denso hasta comportarse como un líquido, sin ninguna frontera nítida que se pueda pisar ni sobrevolar.",size:90,color:"#ca7e50"},
          {name:"Hidrógeno metálico",type:"Fluido metálico conductor",composition:"Hidrógeno metálico líquido con helio disuelto",thickness:"≈40.000 km",temperature:"De 5.000 a 20.000 °C",pressure:"De 1 a 40 Mbar",description:"La presión arranca los electrones a los átomos y el hidrógeno conduce electricidad como un metal. Esta capa genera el campo magnético más potente de todos los planetas: 20.000 veces el terrestre.",size:76,color:"#9e4931"},
          {name:"Núcleo diluido",type:"Núcleo difuso rocoso y metálico",composition:"Roca, hielos y metales mezclados con hidrógeno, sin frontera definida",thickness:"Radio ≈20.000 km (difuso)",temperature:"≈24.000 °C, más caliente que la superficie del Sol",pressure:"≈45 Mbar",description:"La sonda Juno reveló que no es un núcleo compacto sino una región difusa donde los elementos pesados se mezclan de forma gradual con el hidrógeno, quizá tras un impacto primordial gigantesco.",size:34,color:"#ffd9a0"}
        ],
        gradient:"linear-gradient(135deg,#e8d0ae 3%,#ca7e50 43%,#9e4931 68%,#e5bb82 100%)",glow:"rgba(236,151,93,.4)",
        moons:[
          {id:"io",name:"Ío",category:"volcanico",diameter:"3.643 km",distance:"421.700 km",period:"1,77 días",bio:3,fact:"Tiene más de 400 volcanes activos, más que cualquier otro cuerpo del sistema solar, impulsados por la fricción de marea de Júpiter.",image:"img/Io_highest_resolution_true_color.jpg"},
          {id:"europa",name:"Europa",category:"oceanico",diameter:"3.122 km",distance:"671.100 km",period:"3,55 días",bio:95,fact:"Su océano subsuperficial contiene el doble de agua líquida que todos los océanos de la Tierra juntos.",image:"img/PIA19048_realistic_color_Europa_mosaic.jpg"},
          {id:"ganimedes",name:"Ganímedes",category:"oceanico",diameter:"5.268 km",distance:"1.070.400 km",period:"7,15 días",bio:70,fact:"Es la luna más grande del sistema solar, más grande que Mercurio, y la única con campo magnético propio.",image:"img/Ganymede-_moon_of_Jupiter-_NASA.jpg"},
          {id:"calisto",name:"Calisto",category:"oceanico",diameter:"4.821 km",distance:"1.882.700 km",period:"16,69 días",bio:60,fact:"Es el cuerpo más craterizado del sistema solar, con una superficie casi sin cambios desde hace 4.000 millones de años.",image:"img/Callisto.jpg"}
        ]},
      {id:"SATR",name:"Saturno",kind:"gaseoso",category:"Gigante gaseoso",gravity:"10,44 m/s²",temperature:"−140 °C",
        description:"Un gigante gaseoso famoso por el brillante sistema de <span class=\"hl-cyan\">anillos</span> de hielo y roca que lo rodea.",
        fact:"Su densidad media es menor que la del agua.",
        keyFacts:[{label:"Distancia al Sol",value:"1.434 millones km"},{label:"Lunas",value:"146 confirmadas"},{label:"Periodo orbital",value:"29,5 años"},{label:"Descubrimiento",value:"Anillos identificados por Huygens en 1655"}],
        sections:[
          {title:"Composición",html:"Es el planeta menos denso del Sistema Solar: su densidad media es menor que la del agua, por lo que flotaría en un océano lo bastante grande."},
          {title:"Atmósfera",html:"Vientos que superan los <mark>1.800 km/h</mark> agitan su atmósfera de hidrógeno y helio, y un patrón hexagonal persistente rodea su polo norte."},
          {title:"Exploración Humana",html:"La misión <strong>Cassini-Huygens</strong> orbitó el planeta durante 13 años (2004-2017) y posó una sonda sobre la superficie de su luna <span class=\"hl-purple\">Titán</span>."}
        ],
        gallery:[
          {src:"img/Saturn_during_Equinox.jpg",caption:"Vista global en el equinoccio (Cassini)"},
          {src:"img/Top_view_of_the_rings_of_Saturn_by_Cassini_-_October_10-_2013.jpg",caption:"Vista cenital de sus anillos (Cassini)"}
        ],
        layers:[
          {name:"Capa de nubes",type:"Atmósfera superior estratificada",composition:"Hidrógeno (96%) y helio (3%) con cristales de amoniaco",thickness:"≈8.000 km",temperature:"−178 °C en la cima de las nubes",pressure:"De 0,1 a 10 bar",description:"Una neblina de amoniaco difumina sus bandas. En el polo norte persiste un hexágono de 30.000 km de lado: una corriente en chorro con forma geométrica única en el Sistema Solar.",size:100,color:"#f5e0b0"},
          {name:"Hidrógeno molecular",type:"Fluido supercrítico de hidrógeno",composition:"Hidrógeno molecular líquido con helio",thickness:"≈20.000 km",temperature:"De −178 a 5.000 °C",pressure:"De 10 bar a 1 Mbar",description:"En sus zonas profundas el helio se condensa y precipita hacia el interior. Esa lluvia libera calor, y por eso Saturno irradia más energía de la que recibe del Sol.",size:90,color:"#d9b171"},
          {name:"Hidrógeno metálico",type:"Capa metálica conductora",composition:"Hidrógeno metálico líquido",thickness:"≈14.500 km",temperature:"De 5.000 a 10.000 °C",pressure:"De 1 a 10 Mbar",description:"Genera un campo magnético casi perfectamente alineado con el eje de rotación, algo que no ocurre en ningún otro planeta y que todavía desconcierta a los modelos de dinamo.",size:74,color:"#a8763c"},
          {name:"Núcleo difuso",type:"Núcleo rocoso y helado difuso",composition:"Roca, hielo y metales mezclados con hidrógeno",thickness:"Radio ≈35.000 km (difuso, ≈60% del planeta)",temperature:"≈11.700 °C",pressure:"≈10 Mbar",description:"Las vibraciones internas del planeta dejan ondas en sus anillos: gracias a ellas Cassini pudo sondear el interior y descubrir un núcleo enorme y difuso de unas 55 masas terrestres.",size:40,color:"#ffe4a8"}
        ],
        gradient:"linear-gradient(135deg,#f3dfaa 4%,#c7a260 43%,#8e704b 100%)",glow:"rgba(236,203,128,.42)",ring:"rgba(238,215,170,.95)",
        moons:[
          {id:"titan",name:"Titán",category:"atmosfera",diameter:"5.150 km",distance:"1.221.870 km",period:"15,95 días",bio:80,fact:"Tiene ríos, lagos y mares de metano y etano líquidos: el único otro mundo del sistema solar con líquido estable en su superficie.",image:"img/Titan_in_true_color.jpg"},
          {id:"encelado",name:"Encélado",category:"oceanico",diameter:"504 km",distance:"238.020 km",period:"1,37 días",bio:90,fact:"Expulsa géiseres de agua salada al espacio que alimentan el anillo E de Saturno.",image:"img/Enceladus_geysers.jpg"},
          {id:"mimas",name:"Mimas",category:"oceanico",diameter:"396 km",distance:"185.540 km",period:"0,94 días",bio:15,fact:"Su enorme cráter Herschel le da un parecido asombroso con la Estrella de la Muerte de Star Wars.",image:"img/Mimas_moon.jpg"}
        ]},
      {id:"URAN",name:"Urano",kind:"gaseoso",category:"Gigante helado",gravity:"8,69 m/s²",temperature:"−195 °C",
        description:"Un gigante helado de tonalidad azul verdosa que gira prácticamente de <span class=\"hl-cyan\">lado</span>.",
        fact:"Su eje de rotación está inclinado unos 98°, como si rodara por su órbita.",
        keyFacts:[{label:"Distancia al Sol",value:"2.871 millones km"},{label:"Lunas",value:"28 confirmadas"},{label:"Periodo orbital",value:"84 años"},{label:"Descubrimiento",value:"William Herschel, 1781"}],
        sections:[
          {title:"Composición",html:"Bajo su atmósfera, un manto de agua, amoníaco y metano helados a alta presión le vale la categoría de <span class=\"hl-purple\">gigante helado</span>, distinta de los gigantes gaseosos."},
          {title:"Atmósfera",html:"El metano de sus capas altas absorbe la luz roja y refleja el azul verdoso característico del planeta; sus temperaturas rondan los <mark>−195 °C</mark>."},
          {title:"Exploración Humana",html:"Visitado una sola vez, por la sonda <strong>Voyager 2</strong> en enero de 1986, en su único sobrevuelo hasta la fecha."}
        ],
        gallery:[
          {src:"img/Uranus2.jpg",caption:"Vista global en color real (Voyager 2)"},
          {src:"img/STScI-Uranus-NIRCam.png",caption:"Anillos y tormentas en infrarrojo (telescopio James Webb)"},
          {src:"img/Uranus_-_Nasa-s_Voyager_2_-_1986_-52523609952.png",caption:"Última imagen de la Voyager 2 al alejarse (1986)"}
        ],
        layers:[
          {name:"Atmósfera",type:"Envoltura de hidrógeno, helio y metano",composition:"Hidrógeno (83%), helio (15%) y metano (2,3%) en estado gaseoso",thickness:"≈5.000 km",temperature:"−224 °C, la temperatura más fría medida en un planeta",pressure:"De 0,1 a 100 bar",description:"El metano absorbe la luz roja y refleja la azul: de ahí su color. Urano gira tumbado 98°, así que cada polo pasa 42 años seguidos bajo el Sol y otros 42 en oscuridad total.",size:100,color:"#a8e4f0"},
          {name:"Manto de hielos",type:"Océano de hielos supercríticos",composition:"Agua, amoniaco y metano en estado fluido supercrítico, no sólido",thickness:"≈7.000 km",temperature:"De 300 a 3.000 °C",pressure:"De 100 bar a 2 Mbar",description:"Los astrónomos lo llaman hielo por su composición, pero es un fluido denso y caliente. La presión rompe las moléculas de metano y el carbono cristaliza: en su interior llueven diamantes.",size:88,color:"#4d9dc8"},
          {name:"Manto profundo",type:"Capa superiónica conductora",composition:"Agua superiónica y amoniaco ionizado",thickness:"≈6.000 km",temperature:"De 3.000 a 5.000 °C",pressure:"De 2 a 6 Mbar",description:"Aquí el agua adopta una fase superiónica: los núcleos de oxígeno forman una red cristalina mientras los protones fluyen libres. Esta capa genera su campo magnético, inclinado 59° respecto al eje.",size:62,color:"#2a5f8f"},
          {name:"Núcleo rocoso",type:"Núcleo de silicatos y hierro",composition:"Roca silicatada y hierro, probablemente sólidos",thickness:"Radio ≈5.000 km",temperature:"≈5.000 °C",pressure:"≈8 Mbar",description:"Es pequeño: apenas media masa terrestre. Urano irradia muy poco calor interno, una anomalía que quizá se explique por el impacto gigantesco que lo dejó girando de lado.",size:26,color:"#ffd9a0"}
        ],
        gradient:"linear-gradient(135deg,#c0f8f4 2%,#65c5d0 46%,#267a98 100%)",glow:"rgba(107,228,237,.45)",
        moons:[{id:"miranda",name:"Miranda",category:"oceanico",diameter:"471 km",distance:"129.900 km",period:"1,41 días",bio:10,fact:"Tiene los acantilados más altos conocidos del sistema solar, de hasta 20 km, posiblemente por una fragmentación y reensamblaje pasados.",image:"img/Miranda_as_seen_by_Voyager_2_-_GPN-2003-000005.jpg"}]},
      {id:"NEPT",name:"Neptuno",kind:"gaseoso",category:"Gigante helado",gravity:"11,15 m/s²",temperature:"−200 °C",
        description:"El planeta conocido más distante del Sol, azotado por <span class=\"hl-cyan\">vientos extremos</span>.",
        fact:"Presenta los vientos más rápidos registrados en el Sistema Solar, por encima de 2.000 km/h.",
        keyFacts:[{label:"Distancia al Sol",value:"4.495 millones km"},{label:"Lunas",value:"16 confirmadas"},{label:"Periodo orbital",value:"165 años"},{label:"Descubrimiento",value:"Predicho matemáticamente, 1846"}],
        sections:[
          {title:"Composición",html:"Como Urano, es un gigante helado con un manto denso de agua, amoníaco y metano bajo una atmósfera de hidrógeno y helio."},
          {title:"Atmósfera",html:"Registra los vientos más veloces del Sistema Solar, por encima de <mark>2.000 km/h</mark>, y mostró en 1989 una gran tormenta oscura similar a la de Júpiter."},
          {title:"Exploración Humana",html:"Al igual que Urano, solo ha sido visitado por la <strong>Voyager 2</strong>, que lo sobrevoló en 1989 y reveló en detalle su luna <span class=\"hl-purple\">Tritón</span>."}
        ],
        gallery:[
          {src:"img/Neptune_Full.jpg",caption:"Vista global en color real (Voyager 2)"},
          {src:"img/PIA00049_Neptune_-_Great_Dark_Spot-_Scooter-_Dark_Spot_2.jpg",caption:"La Gran Mancha Oscura observada por la Voyager 2"}
        ],
        layers:[
          {name:"Atmósfera",type:"Envoltura de hidrógeno, helio y metano",composition:"Hidrógeno (80%), helio (19%) y metano (1,5%) en estado gaseoso",thickness:"≈5.000 km",temperature:"−214 °C en la cima de las nubes",pressure:"De 0,1 a 100 bar",description:"Alberga los vientos más rápidos del Sistema Solar, de hasta 2.100 km/h, pese a recibir mil veces menos luz solar que la Tierra: superan la velocidad del sonido terrestre.",size:100,color:"#8ca8c2"},
          {name:"Manto de hielos",type:"Océano de agua, amoniaco y metano",composition:"Agua, amoniaco y metano en fluido supercrítico denso",thickness:"≈7.000 km",temperature:"De 1.700 a 3.000 °C",pressure:"De 100 bar a 2 Mbar",description:"Equivale a entre 10 y 15 masas terrestres de fluido caliente. Los experimentos de laboratorio confirman que a estas presiones el metano se descompone y el carbono precipita como diamante.",size:88,color:"#3f7fb5"},
          {name:"Manto profundo",type:"Capa superiónica conductora",composition:"Agua superiónica y amoniaco ionizado",thickness:"≈6.000 km",temperature:"De 3.000 a 5.000 °C",pressure:"De 2 a 7 Mbar",description:"Neptuno emite 2,6 veces más energía de la que recibe del Sol. El calor residual de su formación, atrapado bajo estas capas, es lo que alimenta sus tormentas supersónicas.",size:62,color:"#1f4a7a"},
          {name:"Núcleo rocoso",type:"Núcleo de roca y hierro",composition:"Silicatos, hierro y níquel",thickness:"Radio ≈5.000 km",temperature:"≈5.400 °C",pressure:"≈7 Mbar",description:"Concentra alrededor de 1,2 masas terrestres en una esfera del tamaño de la Tierra, lo que lo convierte en el más masivo de los núcleos de los gigantes helados.",size:26,color:"#ffd9a0"}
        ],
        gradient:"linear-gradient(135deg,#668cff 3%,#214fb7 45%,#101e75 100%)",glow:"rgba(72,115,255,.48)",
        moons:[{id:"triton",name:"Tritón",category:"oceanico",diameter:"2.707 km",distance:"354.760 km",period:"5,88 días (retrógrado)",bio:40,fact:"Orbita Neptuno en dirección retrógrada, la única luna grande que lo hace: prueba de que fue capturada del Cinturón de Kuiper.",image:"img/Triton_moon_mosaic_Voyager_2_-large.jpg"}]},
      {id:"51PB",name:"51 Pegasi b",kind:"exoplaneta",category:"Exoplaneta // Júpiter caliente",gravity:"≈ 23 m/s²",temperature:"≈ 1.000 °C",
        description:"Un gigante gaseoso que orbita una estrella parecida al Sol a unos <span class=\"hl-cyan\">50 años luz</span> de distancia.",
        fact:"Fue el primer exoplaneta descubierto alrededor de una estrella similar al Sol, en 1995.",
        keyFacts:[{label:"Distancia a su estrella",value:"≈0,05 UA"},{label:"Lunas",value:"Ninguna conocida"},{label:"Periodo orbital",value:"≈4,2 días"},{label:"Descubrimiento",value:"1995 (Mayor y Queloz)"}],
        sections:[
          {title:"Composición",html:"Es un <span class=\"hl-purple\">Júpiter caliente</span>: similar en masa a Júpiter, pero abrasado por la cercanía extrema a su estrella."},
          {title:"Atmósfera",html:"Su cercanía a la estrella eleva su temperatura hasta cerca de <mark>1.000 °C</mark>, y probablemente mantiene siempre la misma cara orientada hacia ella."},
          {title:"Descubrimiento y Estudio",html:"Michel Mayor y Didier Queloz lo anunciaron en 1995: fue el primer exoplaneta confirmado alrededor de una estrella similar al Sol, hallazgo que les valió el <strong>Premio Nobel de Física 2019</strong>."}
        ],
        visual:"css",gallery:[],
        layers:[
          {name:"Exosfera en evaporación",type:"Envoltura exterior escapando al espacio",composition:"Hidrógeno y helio atómicos arrastrados por la radiación de su estrella",thickness:"Miles de km, sin límite definido (estimado)",temperature:"Más de 1.000 °C",pressure:"Prácticamente nula",description:"Orbita a solo 0,05 UA de su estrella, ocho veces más cerca de lo que Mercurio está del Sol. La radiación arranca de forma continua su capa exterior y forma una cola de gas.",size:100,color:"#ffd9a0"},
          {name:"Atmósfera inflada",type:"Capa de nubes metálicas",composition:"Hidrógeno y helio con nubes de silicatos y hierro vaporizado (estimado)",thickness:"≈10.000 km (estimado)",temperature:"≈1.000 °C",pressure:"De 0,1 a 10 bar",description:"El calor extremo hincha la atmósfera muy por encima de lo habitual. En otros júpiteres calientes se han detectado nubes metálicas de las que puede llover hierro fundido.",size:90,color:"#ffb066"},
          {name:"Hidrógeno metálico",type:"Fluido metálico conductor",composition:"Hidrógeno metálico líquido (estimado)",thickness:"≈50.000 km (estimado)",temperature:"De 5.000 a 20.000 °C",pressure:"De 1 a 40 Mbar",description:"Se le supone una estructura similar a la de Júpiter porque su masa es comparable, pero ningún instrumento actual puede sondear directamente el interior de un exoplaneta.",size:72,color:"#e0703a"},
          {name:"Núcleo",type:"Núcleo denso hipotético",composition:"Roca y metales comprimidos (hipotético)",thickness:"Radio estimado ≈20.000 km",temperature:"Más de 20.000 °C",pressure:"Decenas de Mbar",description:"Su existencia se deduce de los modelos de formación planetaria. Una de las grandes incógnitas es si se formó donde está hoy o si migró desde una órbita mucho más lejana.",size:30,color:"#fff0c0"}
        ],
        gradient:"linear-gradient(135deg,#f5bd76 2%,#be5a3f 45%,#63334f 100%)",glow:"rgba(249,119,83,.46)",moons:[]},
      {id:"K186",name:"Kepler-186f",kind:"exoplaneta",category:"Exoplaneta // Posible rocoso",gravity:"No confirmada",temperature:"≈ −85 °C",
        description:"Un exoplaneta de tamaño cercano al terrestre que orbita una <span class=\"hl-cyan\">estrella enana roja</span>, a unos 500 años luz.",
        fact:"Fue el primer planeta de tamaño terrestre hallado en la zona habitable de su estrella.",
        keyFacts:[{label:"Distancia a su estrella",value:"≈0,36 UA"},{label:"Lunas",value:"Desconocidas"},{label:"Periodo orbital",value:"≈130 días"},{label:"Descubrimiento",value:"2014 (misión Kepler)"}],
        sections:[
          {title:"Composición",html:"Con un radio de apenas <mark>~1,1 veces</mark> el de la Tierra, es uno de los candidatos más sólidos a planeta rocoso fuera del Sistema Solar."},
          {title:"Atmósfera",html:"Su composición atmosférica es aún desconocida: orbita dentro de la <span class=\"hl-purple\">zona habitable</span> de su estrella, donde el agua líquida podría existir en superficie."},
          {title:"Descubrimiento y Estudio",html:"Anunciado en 2014 por la misión <strong>Kepler</strong> de la NASA, fue el primer planeta de tamaño terrestre hallado en la zona habitable de otra estrella."}
        ],
        visual:"css",gallery:[],
        layers:[
          {name:"Atmósfera hipotética",type:"Envoltura gaseosa sin confirmar",composition:"Desconocida: los modelos proponen nitrógeno y dióxido de carbono (hipotético)",thickness:"Sin medir; se estima entre 50 y 200 km",temperature:"Entre −85 y 10 °C según el efecto invernadero que tenga",pressure:"Desconocida; harían falta más de 0,5 bar para retener agua líquida",description:"Ningún telescopio actual ha logrado analizarla: el planeta está a 500 años luz y su estrella es demasiado tenue para la espectroscopía de tránsito.",size:100,color:"#a8d8e8"},
          {name:"Corteza rocosa",type:"Capa sólida estimada",composition:"Silicatos sólidos, por analogía con los planetas rocosos (estimado)",thickness:"Estimada entre 20 y 80 km",temperature:"Depende de su atmósfera; posiblemente bajo cero",pressure:"Similar a la terrestre si conserva atmósfera",description:"Su radio es solo un 11% mayor que el terrestre, lo que hace muy probable que sea rocoso y no gaseoso, aunque su masa exacta todavía no se ha podido medir.",size:91,color:"#7a9a6a"},
          {name:"Manto de silicatos",type:"Manto rocoso estimado",composition:"Silicatos de magnesio y hierro (estimado)",thickness:"Estimada en ≈3.000 km",temperature:"De 1.000 a 4.000 °C (estimado)",pressure:"Hasta ≈1,5 Mbar (estimado)",description:"Si conserva calor interno suficiente podría tener tectónica y volcanismo, dos procesos que en la Tierra resultan esenciales para reciclar el carbono y estabilizar el clima.",size:82,color:"#8a5a3a"},
          {name:"Núcleo metálico",type:"Núcleo de hierro estimado",composition:"Hierro y níquel, probablemente en parte fundidos (estimado)",thickness:"Radio estimado ≈3.500 km",temperature:"≈5.000 °C (estimado)",pressure:"≈3,5 Mbar (estimado)",description:"Un núcleo líquido en convección generaría un campo magnético protector, algo especialmente valioso aquí: las enanas rojas emiten fulguraciones mucho más violentas que el Sol.",size:50,color:"#ffb454"}
        ],
        gradient:"linear-gradient(135deg,#8ca8c2 2%,#476f87 47%,#1c2c44 100%)",glow:"rgba(126,174,208,.43)",moons:[]},
      {id:"PLUT",name:"Plutón",kind:"enano",category:"Planeta enano del Cinturón de Kuiper",gravity:"0,62 m/s²",temperature:"−229 °C",
        description:"El mundo helado más famoso del <span class=\"hl-cyan\">Cinturón de Kuiper</span>, reclasificado como planeta enano en 2006 tras 76 años como noveno planeta.",
        fact:"Su corazón helado, la llanura Sputnik Planitia, es un glaciar de nitrógeno congelado que se renueva cada pocos siglos.",
        keyFacts:[{label:"Distancia al Sol",value:"39,5 UA de media"},{label:"Lunas",value:"5 (Caronte, Nix, Hidra…)"},{label:"Periodo orbital",value:"248 años"},{label:"Descubrimiento",value:"1930 (Clyde Tombaugh)"}],
        sections:[
          {title:"Por qué es un planeta enano",html:"Cumple dos de los tres criterios de la UAI: orbita el Sol y tiene forma esférica, pero <mark>no ha despejado su órbita</mark> de otros objetos del Cinturón de Kuiper. Ese tercer requisito, aprobado en 2006, es el que lo excluyó de la lista de planetas."},
          {title:"Superficie",html:"Una mezcla de hielos de <span class=\"hl-purple\">nitrógeno, metano y monóxido de carbono</span> sobre un lecho de hielo de agua. New Horizons reveló montañas de 3.500 m, dunas de metano y glaciares en movimiento activo."},
          {title:"Atmósfera",html:"Tenue y estacional: se sublima cuando Plutón se acerca al Sol y vuelve a congelarse sobre la superficie al alejarse. Su presión es unas 100.000 veces menor que la terrestre."}
        ],
        gallery:[
          {src:"img/Pluto_in_True_Color_-_High-Res.jpg",caption:"Color real captado por New Horizons en 2015"},
          {src:"img/Global_LORRI_mosaic_of_Pluto_in_true_colour.jpg",caption:"Mosaico global LORRI en color natural"},
          {src:"img/Nh-pluto-in-true-color_2x_JPEG-edit-frame.jpg",caption:"Retrato de despedida de la sonda New Horizons"}
        ],
        layers:[
          {name:"Atmósfera estacional",type:"Envoltura sublimada intermitente",composition:"Nitrógeno con trazas de metano y monóxido de carbono, en estado gaseoso",thickness:"≈1.600 km de extensión difusa",temperature:"−230 °C",pressure:"≈1 pascal (100.000 veces menor que la terrestre)",description:"Se congela por completo sobre la superficie cuando Plutón se aleja del Sol y vuelve a sublimarse al acercarse: es una atmósfera que aparece y desaparece cada órbita.",size:100,color:"#dfe8f2"},
          {name:"Corteza de hielos",type:"Capa sólida de hielos volátiles",composition:"Hielo de nitrógeno, metano y monóxido de carbono sobre hielo de agua",thickness:"Entre 100 y 180 km",temperature:"−229 °C de media",pressure:"Muy baja, apenas unos bares en profundidad",description:"El glaciar de nitrógeno de Sputnik Planitia se renueva por convección cada pocos siglos: su superficie no tiene cráteres porque literalmente se está reciclando.",size:90,color:"#f0e0c8"},
          {name:"Manto de hielo de agua",type:"Corteza profunda rígida",composition:"Hielo de agua en estado sólido, muy rígido a esta temperatura",thickness:"≈150 km",temperature:"De −220 a −70 °C",pressure:"Hasta ≈2 kbar",description:"A −229 °C el hielo de agua se comporta como roca: forma las montañas de 3.500 m de altura que New Horizons fotografió en los bordes de Sputnik Planitia.",size:78,color:"#a8c4d8"},
          {name:"Océano subsuperficial",type:"Capa líquida probable",composition:"Agua líquida salobre, posiblemente con amoniaco como anticongelante",thickness:"Estimado entre 100 y 180 km",temperature:"≈0 °C",pressure:"≈3 kbar",description:"Las fracturas de la corteza sugieren que el planeta se expandió, algo que ocurre cuando el agua se congela: sería la prueba indirecta de un océano interno todavía activo.",size:62,color:"#3f7fb5"},
          {name:"Núcleo rocoso",type:"Núcleo de silicatos",composition:"Silicatos hidratados y roca, en estado sólido",thickness:"Radio ≈850 km (el 70% del radio total)",temperature:"≈50 °C",pressure:"≈50 kbar",description:"Ocupa la mayor parte de la masa de Plutón. Su calor radiogénico residual es lo que podría mantener líquido el océano que tiene encima.",size:44,color:"#8a6a52"}
        ],
        gradient:"linear-gradient(135deg,#f0e0c8 4%,#c9a882 45%,#6b4a3a 100%)",glow:"rgba(232,205,170,.4)",moons:[{id:"caronte",name:"Caronte",category:"oceanico",diameter:"1.212 km",distance:"19.571 km",period:"6,4 días",bio:12,fact:"Es tan grande respecto a Plutón que ambos giran alrededor de un punto situado fuera de la superficie de Plutón: forman un sistema binario real.",image:"img/Charon_in_True_Color_-_High-Res.jpg"}]},
      {id:"CERE",name:"Ceres",kind:"enano",category:"El objeto más grande del Cinturón de Asteroides",gravity:"0,28 m/s²",temperature:"−105 °C",
        description:"El único planeta enano del <span class=\"hl-cyan\">Sistema Solar interior</span>: un mundo de roca y hielo que concentra un tercio de toda la masa del Cinturón de Asteroides.",
        fact:"Los puntos brillantes del cráter Occator son depósitos de sal que emergieron desde una salmuera subterránea.",
        keyFacts:[{label:"Distancia al Sol",value:"2,77 UA de media"},{label:"Lunas",value:"Ninguna"},{label:"Periodo orbital",value:"4,6 años"},{label:"Descubrimiento",value:"1801 (Giuseppe Piazzi)"}],
        sections:[
          {title:"De planeta a asteroide y a enano",html:"Al descubrirse en 1801 fue considerado un planeta durante 50 años, luego se le degradó a asteroide y en 2006 la UAI lo reclasificó como <mark>planeta enano</mark>. Es el único cuerpo que ha ocupado las tres categorías."},
          {title:"Un mundo con agua",html:"Cerca del <span class=\"hl-purple\">25% de su masa</span> es hielo de agua, más agua dulce que toda la que existe en la Tierra. La sonda Dawn detectó incluso vapor de agua escapando de su superficie."},
          {title:"Los puntos brillantes",html:"Las manchas del cráter Occator son carbonato de sodio depositado por salmuera que ascendió desde el interior. Su brillo indica que el proceso es geológicamente reciente, o incluso actual."}
        ],
        gallery:[
          {src:"img/Ceres_-_RC3_-_Haulani_Crater_-22381131691.jpg",caption:"Ceres fotografiado por la sonda Dawn"},
          {src:"img/Ceres_in_color.png",caption:"Vista global en color realzado"}
        ],
        layers:[
          {name:"Exosfera de vapor",type:"Envoltura tenue e intermitente",composition:"Vapor de agua sublimado del hielo superficial",thickness:"Variable, sin límite definido",temperature:"−105 °C",pressure:"Prácticamente vacío",description:"El telescopio Herschel detectó chorros de vapor de agua escapando de la superficie: Ceres es el único cuerpo del Cinturón de Asteroides con actividad de este tipo.",size:100,color:"#cfd8e0"},
          {name:"Corteza",type:"Capa de roca, sal y hielo",composition:"Silicatos, carbonatos, sales y hielo de agua entremezclados, en estado sólido",thickness:"≈40 km",temperature:"De −105 a −40 °C",pressure:"Hasta ≈300 bar",description:"Es una mezcla dura de hielo y roca. Los depósitos de carbonato de sodio del cráter Occator brillan porque la salmuera que los formó se evaporó dejando la sal expuesta.",size:90,color:"#d8d2c8"},
          {name:"Manto de hielo y salmuera",type:"Capa rica en agua",composition:"Hielo de agua con bolsas de salmuera líquida y silicatos hidratados",thickness:"≈60 km",temperature:"De −40 a 0 °C",pressure:"Hasta ≈1 kbar",description:"Aquí se concentra el agua que hace de Ceres el mayor depósito de agua del Sistema Solar interior después de la Tierra: cerca del 25% de su masa total.",size:76,color:"#8fb8cf"},
          {name:"Núcleo rocoso",type:"Núcleo de silicatos hidratados",composition:"Silicatos y arcillas hidratadas, en estado sólido",thickness:"Radio ≈280 km",temperature:"≈50 °C",pressure:"≈2 kbar",description:"Que Ceres se haya diferenciado en capas demuestra que en su juventud estuvo lo bastante caliente como para que el material pesado se hundiera hacia el centro.",size:50,color:"#7a6f62"}
        ],
        gradient:"linear-gradient(135deg,#d8d2c8 4%,#8f8880 46%,#3c3833 100%)",glow:"rgba(206,200,190,.36)",moons:[]},
      {id:"ERIS",name:"Eris",kind:"enano",category:"El planeta enano más masivo conocido",gravity:"0,82 m/s²",temperature:"−231 °C",
        description:"Un mundo helado del <span class=\"hl-cyan\">disco disperso</span> cuyo descubrimiento en 2005 obligó a redefinir qué es un planeta y le costó a Plutón su categoría.",
        fact:"Es un 27% más masivo que Plutón, aunque su diámetro es prácticamente idéntico: es mucho más denso.",
        keyFacts:[{label:"Distancia al Sol",value:"67,8 UA de media"},{label:"Lunas",value:"1 (Disnomia)"},{label:"Periodo orbital",value:"559 años"},{label:"Descubrimiento",value:"2005 (Mike Brown y equipo)"}],
        sections:[
          {title:"El planeta que cambió las reglas",html:"Al ser más masivo que Plutón, la comunidad astronómica tuvo que elegir: aceptar un décimo planeta o redefinir el término. En 2006 la UAI creó la categoría de <mark>planeta enano</mark> y ambos quedaron en ella."},
          {title:"La superficie más reflectante",html:"Refleja el <span class=\"hl-purple\">96% de la luz</span> que recibe, casi tanto como la nieve recién caída. Su atmósfera de metano se congela por completo sobre el suelo y lo recubre de escarcha brillante."},
          {title:"Órbita extrema",html:"Su órbita está inclinada 44° respecto al plano del Sistema Solar y es muy excéntrica: en el afelio llega a 97 UA, más del doble de la distancia a la que está Plutón."}
        ],
        visual:"css",gallery:[],
        layers:[
          {name:"Escarcha de metano",type:"Capa superficial reflectante",composition:"Hielo de metano y nitrógeno condensados sobre la superficie",thickness:"Unos pocos metros",temperature:"−231 °C",pressure:"Casi nula",description:"Refleja el 96% de la luz solar. Cuando Eris se acerque al Sol dentro de siglos, esta escarcha se sublimará y formará una atmósfera temporal como la de Plutón.",size:100,color:"#f2f4f8"},
          {name:"Corteza de hielo",type:"Capa sólida de hielo de agua",composition:"Hielo de agua en estado sólido y muy rígido",thickness:"Estimada en ≈100 km",temperature:"De −231 a −100 °C",pressure:"Hasta ≈1 kbar",description:"A temperaturas tan bajas el hielo de agua es más duro que el granito y forma un caparazón rígido sobre el interior del planeta enano.",size:88,color:"#c4cfdd"},
          {name:"Océano interno posible",type:"Capa líquida hipotética",composition:"Agua líquida con amoniaco disuelto (hipotético)",thickness:"Sin confirmar; estimada en decenas de km",temperature:"Cercana a 0 °C",pressure:"≈2 kbar",description:"Su alta densidad implica un interior rocoso capaz de generar calor radiogénico. La rotación sincronizada con Disnomia sugiere además una disipación de marea que ayudaría a mantenerlo líquido.",size:70,color:"#3f7fb5"},
          {name:"Núcleo rocoso",type:"Núcleo de silicatos denso",composition:"Roca silicatada y metales, en estado sólido",thickness:"Radio estimado ≈900 km",temperature:"≈100 °C",pressure:"≈60 kbar",description:"Eris tiene una densidad de 2,4 g/cm³, muy superior a la de otros cuerpos del Cinturón de Kuiper: su interior es mucho más rocoso que helado.",size:50,color:"#7d7466"}
        ],
        gradient:"linear-gradient(135deg,#f2f4f8 4%,#b9c2d0 46%,#4d5568 100%)",glow:"rgba(226,232,244,.42)",moons:[{id:"disnomia",name:"Disnomia",category:"oceanico",diameter:"615 km",distance:"37.300 km",period:"15,8 días",bio:6,fact:"Su nombre viene de la hija de Eris en la mitología griega. Gracias a ella se pudo pesar Eris con precisión y confirmar que supera en masa a Plutón.",image:""}]},
      {id:"HAUM",name:"Haumea",kind:"enano",category:"Planeta enano elipsoidal de rotación ultrarrápida",gravity:"0,4 m/s²",temperature:"−241 °C",
        description:"Un cuerpo con forma de <span class=\"hl-cyan\">balón de rugby</span> que gira sobre sí mismo en menos de 4 horas, la rotación más rápida de todo objeto grande del Sistema Solar.",
        fact:"En 2017 se descubrió que tiene un anillo, el primero hallado alrededor de un objeto transneptuniano.",
        keyFacts:[{label:"Distancia al Sol",value:"43 UA de media"},{label:"Lunas",value:"2 (Hiʻiaka y Namaka)"},{label:"Periodo orbital",value:"284 años"},{label:"Descubrimiento",value:"2004-2005 (disputado)"}],
        sections:[
          {title:"Deformado por su propio giro",html:"Rota una vez cada <mark>3,9 horas</mark>. La fuerza centrífuga lo ha estirado hasta convertirlo en un elipsoide de 2.100 km de largo por apenas 1.074 km de alto: casi el doble de largo que de alto."},
          {title:"Una familia de fragmentos",html:"Un impacto colosal arrancó buena parte de su manto helado. Esos fragmentos siguen orbitando el Sol con trayectorias parecidas y forman la única <span class=\"hl-purple\">familia colisional</span> conocida del Cinturón de Kuiper, incluidas sus dos lunas."},
          {title:"Su anillo",html:"Detectado en 2017 durante una ocultación estelar, orbita a 2.287 km del centro y demostró que los anillos no son exclusivos de los planetas gigantes."}
        ],
        visual:"css",gallery:[],
        layers:[
          {name:"Superficie de hielo cristalino",type:"Capa helada reflectante",composition:"Hielo de agua cristalino casi puro, en estado sólido",thickness:"Unos pocos km",temperature:"−241 °C",pressure:"Casi nula",description:"El hielo cristalino debería volverse amorfo por la radiación en unos 10 millones de años. Que siga cristalino implica algún proceso que lo renueva, quizá calor de marea o impactos.",size:100,color:"#eceff5"},
          {name:"Manto de hielo",type:"Capa helada residual",composition:"Hielo de agua en estado sólido",thickness:"Estimada en ≈100 km (muy adelgazada)",temperature:"De −241 a −150 °C",pressure:"Hasta ≈1 kbar",description:"Es sorprendentemente fino: el impacto que originó su familia colisional arrancó la mayor parte del manto helado original y lo dispersó por el Cinturón de Kuiper.",size:88,color:"#b0b8c6"},
          {name:"Núcleo rocoso",type:"Núcleo de silicatos alargado",composition:"Roca silicatada, en estado sólido",thickness:"Semieje mayor ≈900 km",temperature:"≈0 °C",pressure:"≈30 kbar",description:"Su densidad de 1,9 g/cm³ delata un interior mayoritariamente rocoso. Es este núcleo el que la rotación de 3,9 horas ha deformado hasta darle su silueta de elipsoide.",size:62,color:"#7d7466"}
        ],
        gradient:"linear-gradient(135deg,#eceff5 4%,#b0b8c6 44%,#565f70 100%)",glow:"rgba(214,222,236,.4)",moons:[{id:"hiiaka",name:"Hiʻiaka",category:"oceanico",diameter:"320 km",distance:"49.880 km",period:"49,1 días",bio:5,fact:"Su superficie es hielo de agua casi puro, lo que confirma que se formó a partir del manto helado arrancado a Haumea en un impacto.",image:""},{id:"namaka",name:"Namaka",category:"oceanico",diameter:"170 km",distance:"25.657 km",period:"18,3 días",bio:4,fact:"Su órbita está fuertemente perturbada por Hiʻiaka, lo que convierte al sistema de Haumea en uno de los más caóticos conocidos.",image:""}]},
      {id:"MAKE",name:"Makemake",kind:"enano",category:"Planeta enano helado del Cinturón de Kuiper",gravity:"0,4 m/s²",temperature:"−239 °C",
        description:"El segundo objeto más brillante del <span class=\"hl-cyan\">Cinturón de Kuiper</span> después de Plutón, cubierto de hielo de metano del tamaño de granos de arena.",
        fact:"Su descubrimiento en la Pascua de 2005 le valió el apodo inicial de Easterbunny, el conejo de Pascua.",
        keyFacts:[{label:"Distancia al Sol",value:"45,8 UA de media"},{label:"Lunas",value:"1 (MK 2)"},{label:"Periodo orbital",value:"305 años"},{label:"Descubrimiento",value:"2005 (Mike Brown y equipo)"}],
        sections:[
          {title:"Un nombre de la isla de Pascua",html:"Debe su nombre a <mark>Makemake</mark>, el dios creador de la humanidad en la mitología rapanui, elegido porque fue descubierto pocos días después de la Pascua de 2005."},
          {title:"Superficie de metano",html:"Está recubierto de granos de <span class=\"hl-purple\">hielo de metano</span> de hasta un centímetro, mucho más grandes que los de Plutón. También hay etano y tolinas, que le dan un tono rojizo."},
          {title:"Sin atmósfera estable",html:"Una ocultación estelar en 2011 descartó una atmósfera global significativa, a diferencia de Plutón. Solo podría tener bolsas de gas sobre las zonas más iluminadas."}
        ],
        visual:"css",gallery:[],
        layers:[
          {name:"Capa de metano",type:"Superficie de hielo granulado",composition:"Granos de hielo de metano de hasta 1 cm, con etano y tolinas",thickness:"Unos pocos metros",temperature:"−239 °C",pressure:"Casi nula",description:"Las tolinas, moléculas orgánicas creadas por la radiación solar sobre el metano, son las que le dan su característico tono rojizo.",size:100,color:"#f3d9c0"},
          {name:"Corteza de hielo",type:"Capa sólida de hielo de agua",composition:"Hielo de agua con hielos volátiles atrapados",thickness:"Estimada en ≈100 km",temperature:"De −239 a −150 °C",pressure:"Hasta ≈800 bar",description:"Refleja el 77% de la luz que recibe, lo que lo convierte en el segundo objeto más brillante del Cinturón de Kuiper después de Plutón.",size:88,color:"#c08a5e"},
          {name:"Manto helado profundo",type:"Capa interna de hielo denso",composition:"Hielo de agua a alta presión y silicatos hidratados",thickness:"Estimada en ≈200 km",temperature:"De −150 a −50 °C",pressure:"Hasta ≈3 kbar",description:"A diferencia de Plutón, no hay indicios claros de un océano interno: Makemake parece un mundo frío y geológicamente inactivo desde hace mucho tiempo.",size:70,color:"#8a6a52"},
          {name:"Núcleo rocoso",type:"Núcleo de silicatos",composition:"Roca silicatada y metales, en estado sólido",thickness:"Radio estimado ≈400 km",temperature:"≈0 °C",pressure:"≈15 kbar",description:"Su densidad estimada de 1,7 g/cm³ sugiere una mezcla de roca y hielo en proporciones similares a las de otros grandes objetos transneptunianos.",size:46,color:"#6b5544"}
        ],
        gradient:"linear-gradient(135deg,#f3d9c0 4%,#c08a5e 46%,#5c3524 100%)",glow:"rgba(240,190,150,.4)",moons:[{id:"mk2",name:"MK 2",category:"capturado",diameter:"≈175 km",distance:"≈21.000 km",period:"≈12 días",bio:3,fact:"Es tan oscura que refleja apenas el 4% de la luz, mientras Makemake refleja el 77%: por eso tardó once años en ser detectada.",image:""}]},
      {id:"PROX",name:"Proxima Centauri b",kind:"exoplaneta",category:"Exoplaneta rocoso en la zona habitable",gravity:"≈8,7 m/s² (estimada)",temperature:"−39 °C (equilibrio)",
        description:"El exoplaneta <span class=\"hl-cyan\">más cercano a la Tierra</span>: orbita en la zona habitable de Próxima Centauri, la estrella vecina del Sol, a solo 4,24 años luz.",
        fact:"Está tan cerca que una nave con velas láser podría alcanzarlo en unas dos décadas, un proyecto que ya se estudia seriamente.",
        keyFacts:[{label:"Distancia a la Tierra",value:"4,24 años luz"},{label:"Masa mínima",value:"1,27 masas terrestres"},{label:"Periodo orbital",value:"11,2 días"},{label:"Descubrimiento",value:"2016 (ESO / La Silla)"}],
        sections:[
          {title:"El vecino más próximo",html:"Ningún exoplaneta conocido está más cerca. Orbita <mark>Próxima Centauri</mark>, una enana roja que forma parte del sistema triple Alfa Centauri, el más cercano al nuestro."},
          {title:"Zona habitable, pero hostil",html:"Recibe la energía adecuada para que hubiera agua líquida, pero su estrella emite <span class=\"hl-purple\">fulguraciones brutales</span> que podrían haber arrancado su atmósfera hace miles de millones de años."},
          {title:"Un hemisferio eterno",html:"Al orbitar tan cerca es muy probable que esté acoplado por marea: una cara siempre iluminada y otra en noche permanente, con una franja templada de penumbra entre ambas."}
        ],
        visual:"css",gallery:[],
        layers:[
          {name:"Atmósfera hipotética",type:"Envoltura sin confirmar",composition:"Desconocida; podría haber sido arrancada por las fulguraciones estelares (hipotético)",thickness:"Sin medir",temperature:"Entre −90 y 30 °C según su efecto invernadero",pressure:"Desconocida",description:"Próxima Centauri emite fulguraciones hasta 100 veces más energéticas que las solares. La gran incógnita es si el planeta ha logrado conservar alguna atmósfera.",size:100,color:"#ffd4b8"},
          {name:"Corteza rocosa",type:"Capa sólida estimada",composition:"Silicatos sólidos, por analogía con la Tierra (estimado)",thickness:"Estimada entre 20 y 80 km",temperature:"Depende de la atmósfera",pressure:"Desconocida",description:"Con al menos 1,27 masas terrestres se espera un mundo rocoso. Solo se conoce su masa mínima, medida por velocidad radial: nunca se le ha visto transitar su estrella.",size:90,color:"#c25f45"},
          {name:"Manto de silicatos",type:"Manto rocoso estimado",composition:"Silicatos de magnesio y hierro (estimado)",thickness:"Estimada en ≈2.900 km",temperature:"De 1.000 a 4.000 °C (estimado)",pressure:"Hasta ≈1,5 Mbar (estimado)",description:"Si su manto convecta como el terrestre podría sostener tectónica de placas, un proceso clave para reciclar el carbono y estabilizar el clima a largo plazo.",size:80,color:"#8a3a28"},
          {name:"Núcleo metálico",type:"Núcleo de hierro estimado",composition:"Hierro y níquel, probablemente en parte fundidos (estimado)",thickness:"Radio estimado ≈3.600 km",temperature:"≈5.000 °C (estimado)",pressure:"≈3,6 Mbar (estimado)",description:"Un núcleo líquido en convección generaría un campo magnético, la única defensa posible frente a las violentas erupciones de su estrella.",size:54,color:"#ffb454"}
        ],
        gradient:"linear-gradient(135deg,#ffb99a 4%,#c25f45 46%,#5a2320 100%)",glow:"rgba(255,140,105,.44)",moons:[]},
      {id:"TRP1",name:"TRAPPIST-1e",kind:"exoplaneta",category:"Exoplaneta templado del sistema TRAPPIST-1",gravity:"≈8,0 m/s² (estimada)",temperature:"−27 °C (equilibrio)",
        description:"El mundo más parecido a la Tierra de los <span class=\"hl-cyan\">siete planetas rocosos</span> que orbitan la enana ultrafría TRAPPIST-1, a 40 años luz.",
        fact:"Desde su superficie, los otros seis planetas del sistema se verían más grandes que la Luna en nuestro cielo.",
        keyFacts:[{label:"Distancia a la Tierra",value:"40,7 años luz"},{label:"Masa",value:"0,69 masas terrestres"},{label:"Periodo orbital",value:"6,1 días"},{label:"Descubrimiento",value:"2017 (TRAPPIST / Spitzer)"}],
        sections:[
          {title:"Siete mundos rocosos",html:"TRAPPIST-1 alberga el mayor número de planetas de tamaño terrestre hallados en un solo sistema: <mark>siete</mark>, y al menos tres de ellos en la zona habitable. Todos caben dentro de una órbita más pequeña que la de Mercurio."},
          {title:"El mejor candidato",html:"De los siete, TRAPPIST-1e es el que recibe una cantidad de energía más parecida a la terrestre y el que tiene mayor densidad, lo que apunta a un mundo <span class=\"hl-purple\">rocoso y compacto</span> capaz de retener agua líquida."},
          {title:"Bajo la lupa del James Webb",html:"Es uno de los objetivos prioritarios del telescopio espacial James Webb, que intenta detectar si conserva atmósfera analizando la luz de su estrella filtrada a través de ella."}
        ],
        visual:"css",gallery:[],
        layers:[
          {name:"Atmósfera en estudio",type:"Envoltura bajo observación del James Webb",composition:"Desconocida; se buscan CO₂, agua y metano (en investigación)",thickness:"Sin medir",temperature:"Entre −60 y 30 °C según su atmósfera",pressure:"Desconocida",description:"El James Webb ya ha descartado atmósferas densas en los planetas interiores del sistema. TRAPPIST-1e sigue siendo el candidato con más posibilidades de conservar una.",size:100,color:"#cfe4ea"},
          {name:"Corteza rocosa",type:"Capa sólida estimada",composition:"Silicatos sólidos (estimado a partir de su densidad)",thickness:"Estimada entre 20 y 60 km",temperature:"Depende de su atmósfera",pressure:"Desconocida",description:"Su densidad medida es un 5% mayor que la terrestre, lo que descarta que sea un mundo gaseoso y apunta a una superficie rocosa sólida.",size:91,color:"#6f93a8"},
          {name:"Manto de silicatos",type:"Manto rocoso estimado",composition:"Silicatos de magnesio y hierro (estimado)",thickness:"Estimada en ≈2.500 km",temperature:"De 1.000 a 3.500 °C (estimado)",pressure:"Hasta ≈1,1 Mbar (estimado)",description:"El calor de marea generado por los otros seis planetas podría mantener su interior más caliente y activo de lo que le correspondería por tamaño.",size:82,color:"#3f5f78"},
          {name:"Núcleo metálico",type:"Núcleo de hierro estimado",composition:"Hierro y níquel (estimado)",thickness:"Radio estimado ≈3.000 km",temperature:"≈4.500 °C (estimado)",pressure:"≈2,8 Mbar (estimado)",description:"Al estar acoplado por marea, una cara mira siempre a su estrella. Un campo magnético generado aquí sería determinante para proteger el hemisferio iluminado.",size:52,color:"#c8963c"}
        ],
        gradient:"linear-gradient(135deg,#cfe4ea 4%,#6f93a8 45%,#2b3d52 100%)",glow:"rgba(180,215,230,.42)",moons:[]},
      {id:"K452",name:"Kepler-452b",kind:"exoplaneta",category:"Súper-Tierra en la zona habitable",gravity:"≈19 m/s² (estimada)",temperature:"−8 °C (equilibrio)",
        description:"Apodado el <span class=\"hl-cyan\">primo mayor de la Tierra</span>: orbita una estrella casi idéntica al Sol en un periodo de 385 días, muy parecido a nuestro año.",
        fact:"Su estrella es 1.500 millones de años más vieja que el Sol: es una ventana al futuro que le espera a la Tierra.",
        keyFacts:[{label:"Distancia a la Tierra",value:"≈1.800 años luz"},{label:"Radio",value:"1,6 radios terrestres"},{label:"Periodo orbital",value:"385 días"},{label:"Descubrimiento",value:"2015 (misión Kepler)"}],
        sections:[
          {title:"El primo mayor de la Tierra",html:"Es el primer planeta de tamaño casi terrestre hallado en la zona habitable de una estrella de tipo <mark>G2</mark>, la misma clase que el Sol. Su año dura 385 días, apenas 20 más que el nuestro."},
          {title:"Una ventana al futuro",html:"Su sistema tiene 6.000 millones de años, 1.500 millones más que el nuestro. Si tuvo océanos, hoy estaría sufriendo un <span class=\"hl-purple\">efecto invernadero desbocado</span> conforme su estrella envejece y brilla más: el destino que aguarda a la Tierra."},
          {title:"Confirmación pendiente",html:"Su masa no se ha medido directamente y análisis posteriores han cuestionado la detección. Sigue catalogado como candidato de alta probabilidad más que como planeta plenamente confirmado."}
        ],
        visual:"css",gallery:[],
        layers:[
          {name:"Atmósfera hipotética",type:"Envoltura sin confirmar",composition:"Desconocida; con 1,6 radios terrestres podría ser densa (hipotético)",thickness:"Sin medir",temperature:"≈−8 °C de equilibrio, más si hay invernadero",pressure:"Desconocida",description:"Con este radio, el planeta está justo en el límite entre las súper-Tierras rocosas y los mini-Neptunos gaseosos: no se sabe de qué lado cae.",size:100,color:"#bfe6f5"},
          {name:"Corteza",type:"Capa sólida estimada",composition:"Silicatos sólidos, si es un mundo rocoso (hipotético)",thickness:"Estimada entre 30 y 100 km",temperature:"Desconocida",pressure:"Desconocida",description:"Los modelos le dan alrededor de un 60% de probabilidad de ser rocoso. De serlo, su gravedad casi doble haría que caminar allí resultara agotador.",size:91,color:"#4f8fb8"},
          {name:"Manto de silicatos",type:"Manto rocoso estimado",composition:"Silicatos de magnesio y hierro (estimado)",thickness:"Estimada en ≈4.500 km",temperature:"De 1.500 a 5.000 °C (estimado)",pressure:"Hasta ≈3 Mbar (estimado)",description:"En una súper-Tierra la presión del manto es tan alta que la tectónica de placas podría ser mucho más vigorosa que en la Tierra, o quedar bloqueada por completo.",size:82,color:"#2b5a7a"},
          {name:"Núcleo metálico",type:"Núcleo de hierro estimado",composition:"Hierro y níquel (estimado)",thickness:"Radio estimado ≈5.000 km",temperature:"≈6.000 °C (estimado)",pressure:"≈8 Mbar (estimado)",description:"Un núcleo de este tamaño generaría un campo magnético potente, capaz de sostener una atmósfera durante los 6.000 millones de años que tiene el sistema.",size:50,color:"#e8b45c"}
        ],
        gradient:"linear-gradient(135deg,#bfe6f5 3%,#4f8fb8 45%,#1d3a58 100%)",glow:"rgba(150,215,245,.44)",moons:[]},
      {id:"W12B",name:"WASP-12b",kind:"exoplaneta",category:"Júpiter ultracaliente devorado por su estrella",gravity:"≈9,6 m/s² (estimada)",temperature:"2.210 °C",
        description:"Un gigante gaseoso <span class=\"hl-cyan\">deformado en forma de huevo</span> por la gravedad de su estrella, que lo está devorando a razón de 6.000 millones de toneladas por segundo.",
        fact:"Refleja menos del 6% de la luz que recibe: es más oscuro que el asfalto, prácticamente negro.",
        keyFacts:[{label:"Distancia a la Tierra",value:"≈1.400 años luz"},{label:"Masa",value:"1,4 masas de Júpiter"},{label:"Periodo orbital",value:"1,09 días"},{label:"Descubrimiento",value:"2008 (consorcio WASP)"}],
        sections:[
          {title:"Devorado por su estrella",html:"Orbita tan cerca que la marea gravitatoria lo ha estirado hasta darle forma de huevo. Su estrella le arranca materia continuamente y se calcula que lo habrá <mark>consumido por completo</mark> en unos 10 millones de años."},
          {title:"El planeta más negro",html:"Su albedo es de solo 0,064: absorbe prácticamente toda la luz que recibe. A esas temperaturas las moléculas que normalmente reflejan luz se descomponen, y el hidrógeno atómico convierte la atmósfera en una <span class=\"hl-purple\">trampa de luz</span>."},
          {title:"Órbita en espiral",html:"Además de perder masa, su órbita se está encogiendo: cada año tarda 29 milisegundos menos en completarla. Es una de las pocas espirales de muerte planetaria medidas directamente."}
        ],
        visual:"css",gallery:[],
        layers:[
          {name:"Cola de materia",type:"Envoltura arrancada por la marea",composition:"Hidrógeno y helio escapando hacia la estrella",thickness:"Se extiende más allá del lóbulo de Roche",temperature:"Más de 2.500 °C",pressure:"Casi nula",description:"El planeta pierde unos 6.000 millones de toneladas de material por segundo, formando un disco de acreción alrededor de su estrella.",size:100,color:"#ffd0a0"},
          {name:"Atmósfera ultracaliente",type:"Capa gaseosa absorbente",composition:"Hidrógeno atómico, aluminio y vanadio vaporizados",thickness:"≈15.000 km (hinchada por el calor)",temperature:"2.210 °C en el lado diurno",pressure:"De 0,1 a 10 bar",description:"El hidrógeno atómico absorbe la luz en lugar de reflejarla, y a esta temperatura no pueden formarse nubes: por eso el planeta es prácticamente negro.",size:90,color:"#ff9a5c"},
          {name:"Hidrógeno metálico",type:"Fluido metálico conductor",composition:"Hidrógeno metálico líquido (estimado)",thickness:"≈40.000 km (estimado)",temperature:"De 5.000 a 20.000 °C",pressure:"De 1 a 40 Mbar",description:"Se le supone la misma estructura profunda que a Júpiter, ya que su masa es solo un 40% mayor, aunque su radio está muy inflado por el calor extremo.",size:72,color:"#a32f1e"},
          {name:"Núcleo",type:"Núcleo denso hipotético",composition:"Roca y metales comprimidos (hipotético)",thickness:"Radio estimado ≈15.000 km",temperature:"Más de 20.000 °C",pressure:"Decenas de Mbar",description:"Es lo último que quedará cuando la estrella termine de arrancarle la envoltura gaseosa dentro de unos 10 millones de años.",size:30,color:"#ffe0a8"}
        ],
        gradient:"linear-gradient(135deg,#ff9a5c 3%,#a32f1e 45%,#2a0d10 100%)",glow:"rgba(255,110,60,.5)",moons:[]},
      {id:"K9BB",name:"KELT-9b",kind:"exoplaneta",category:"El exoplaneta más caliente conocido",gravity:"≈20 m/s² (estimada)",temperature:"4.327 °C",
        description:"Su cara diurna alcanza los <span class=\"hl-cyan\">4.327 °C</span>, más caliente que la superficie de la mayoría de las estrellas: allí las moléculas no pueden ni existir.",
        fact:"Se han detectado átomos de hierro y titanio flotando libres en su atmósfera, algo que solo se ve en estrellas.",
        keyFacts:[{label:"Distancia a la Tierra",value:"≈670 años luz"},{label:"Masa",value:"2,9 masas de Júpiter"},{label:"Periodo orbital",value:"1,48 días"},{label:"Descubrimiento",value:"2017 (telescopio KELT)"}],
        sections:[
          {title:"Más caliente que una estrella",html:"Su temperatura diurna supera la de una enana roja. A 4.327 °C las moléculas de hidrógeno se <mark>disocian en átomos</mark> individuales, y solo vuelven a unirse cuando el viento las arrastra al hemisferio nocturno."},
          {title:"Vapor de metal",html:"Los espectrógrafos han detectado <span class=\"hl-purple\">hierro y titanio gaseosos</span> en su atmósfera, elementos que en cualquier otro planeta estarían sólidos en el núcleo. Es la primera detección de este tipo en un exoplaneta."},
          {title:"Órbita polar",html:"Orbita casi perpendicular al ecuador de su estrella, pasando por encima de sus polos. Su estrella, además, gira tan rápido que está achatada, y calienta al planeta de forma desigual."}
        ],
        visual:"css",gallery:[],
        layers:[
          {name:"Cola de evaporación",type:"Envoltura escapando al espacio",composition:"Hidrógeno atómico ionizado por la radiación ultravioleta",thickness:"Sin límite definido",temperature:"Más de 4.000 °C",pressure:"Casi nula",description:"Su estrella emite tanta radiación ultravioleta que evapora la atmósfera del planeta de forma continua, dejando un rastro de gas tras de sí.",size:100,color:"#dfe8ff"},
          {name:"Atmósfera atómica",type:"Capa de gas disociado",composition:"Hidrógeno atómico con hierro, titanio y magnesio vaporizados",thickness:"≈20.000 km",temperature:"4.327 °C en el día, ≈2.500 °C en la noche",pressure:"De 0,1 a 10 bar",description:"Aquí no existen moléculas: el calor las rompe en átomos sueltos. Es la única atmósfera planetaria conocida donde flotan metales en estado gaseoso.",size:90,color:"#7b93ff"},
          {name:"Hidrógeno metálico",type:"Fluido metálico conductor",composition:"Hidrógeno metálico líquido (estimado)",thickness:"≈45.000 km (estimado)",temperature:"De 10.000 a 25.000 °C",pressure:"De 1 a 50 Mbar",description:"Con 2,9 masas de Júpiter, la presión interior es aún mayor que la del gigante de nuestro sistema y la capa metálica ocupa una fracción todavía más grande.",size:70,color:"#3f4fb0"},
          {name:"Núcleo",type:"Núcleo denso hipotético",composition:"Roca y metales comprimidos (hipotético)",thickness:"Radio estimado ≈18.000 km",temperature:"Más de 25.000 °C",pressure:"Decenas de Mbar",description:"Los modelos predicen que el planeta será destruido en unos cientos de millones de años, cuando su estrella se expanda y lo absorba.",size:28,color:"#e8ecff"}
        ],
        gradient:"linear-gradient(135deg,#dfe8ff 3%,#7b93ff 40%,#2a1d6b 100%)",glow:"rgba(180,200,255,.55)",moons:[]},
      {id:"HD18",name:"HD 189733 b",kind:"exoplaneta",category:"Gigante azul cobalto con lluvia de vidrio",gravity:"≈21,9 m/s² (estimada)",temperature:"930 °C",
        description:"El primer exoplaneta cuyo <span class=\"hl-cyan\">color real</span> pudo determinarse: un azul cobalto intenso producido por nubes de silicato, no por océanos.",
        fact:"Sus vientos de 8.700 km/h arrastran lluvia de vidrio fundido que cae de lado a siete veces la velocidad del sonido.",
        keyFacts:[{label:"Distancia a la Tierra",value:"64,5 años luz"},{label:"Masa",value:"1,13 masas de Júpiter"},{label:"Periodo orbital",value:"2,22 días"},{label:"Descubrimiento",value:"2005 (velocidad radial)"}],
        sections:[
          {title:"El primer planeta con color",html:"En 2013 el Hubble midió cómo cambiaba la luz del sistema al ocultarse el planeta tras su estrella, y dedujo su color: <mark>azul cobalto</mark>. Fue la primera vez que se determinaba el color visible de un mundo fuera del Sistema Solar."},
          {title:"Lluvia de vidrio horizontal",html:"Su azul no viene del agua sino de partículas de <span class=\"hl-purple\">silicato</span> que dispersan la luz azul. Esas mismas partículas condensan y precipitan como gotas de vidrio fundido, arrastradas de lado por vientos de 8.700 km/h."},
          {title:"El exoplaneta más estudiado",html:"Por su cercanía y su tránsito profundo es uno de los mundos mejor caracterizados: se le han detectado agua, metano, dióxido de carbono y una atmósfera que se evapora lentamente."}
        ],
        visual:"css",gallery:[],
        layers:[
          {name:"Atmósfera en fuga",type:"Envoltura exterior evaporándose",composition:"Hidrógeno y helio escapando por la radiación estelar",thickness:"Se extiende más allá del radio del planeta",temperature:"Más de 1.000 °C",pressure:"Casi nula",description:"Pierde entre 100 y 600 millones de kilos de atmósfera por segundo, un caudal que se dispara cuando su estrella emite una fulguración de rayos X.",size:100,color:"#bcd8ff"},
          {name:"Nubes de silicato",type:"Capa de nubes de vidrio",composition:"Partículas de silicato de magnesio en suspensión, con vapor de agua",thickness:"≈10.000 km",temperature:"930 °C de media",pressure:"De 0,1 a 10 bar",description:"Estas partículas dispersan la luz azul y absorben la roja: son las responsables del color cobalto del planeta y de su lluvia de vidrio fundido.",size:90,color:"#4a86e0"},
          {name:"Hidrógeno metálico",type:"Fluido metálico conductor",composition:"Hidrógeno metálico líquido (estimado)",thickness:"≈40.000 km (estimado)",temperature:"De 5.000 a 18.000 °C",pressure:"De 1 a 35 Mbar",description:"Al tener casi la misma masa que Júpiter, se le atribuye una estructura profunda equivalente, con una capa metálica que genera su campo magnético.",size:72,color:"#1d5bbf"},
          {name:"Núcleo",type:"Núcleo denso hipotético",composition:"Roca y metales comprimidos (hipotético)",thickness:"Radio estimado ≈14.000 km",temperature:"Más de 18.000 °C",pressure:"Decenas de Mbar",description:"Su masa se conoce con precisión gracias a que transita su estrella, pero el tamaño del núcleo sigue siendo una estimación basada en modelos de formación.",size:30,color:"#a8c8ff"}
        ],
        gradient:"linear-gradient(135deg,#7fb8ff 4%,#1d5bbf 46%,#0a1f52 100%)",glow:"rgba(90,150,255,.48)",moons:[]}
    ];
    const grid=document.querySelector("#planet-grid"),planetCount=document.querySelector("#planet-count"),modal=document.querySelector("#scanner-modal"),scanner={classification:document.querySelector("#scanner-classification"),name:document.querySelector("#scanner-name"),description:document.querySelector("#scanner-description"),type:document.querySelector("#scanner-type"),gravity:document.querySelector("#scanner-gravity"),temperature:document.querySelector("#scanner-temperature"),fact:document.querySelector("#scanner-fact"),planet:document.querySelector("#scanner-planet"),planetImg:document.querySelector("#scanner-planet-img"),visualCaption:document.querySelector("#scanner-visual-caption"),galleryStrip:document.querySelector("#scanner-gallery"),expeditionGrid:document.querySelector("#expedition-grid"),sections:document.querySelector("#scanner-sections")};
    const moonEls={empty:document.querySelector("#moons-empty"),selector:document.querySelector("#moon-selector"),detail:document.querySelector("#moon-detail"),image:document.querySelector("#moon-image"),badge:document.querySelector("#moon-badge"),name:document.querySelector("#moon-name"),diameter:document.querySelector("#moon-diameter"),distance:document.querySelector("#moon-distance"),period:document.querySelector("#moon-period"),bioValue:document.querySelector("#moon-bio-value"),bioFill:document.querySelector("#moon-bio-fill"),fact:document.querySelector("#moon-fact")};
    const moonCategories={oceanico:{label:"MUNDO OCEÁNICO / HIELO",accent:"#52e7ff"},volcanico:{label:"MUNDO VOLCÁNICO",accent:"#ff6600"},atmosfera:{label:"ATMÓSFERA DENSA",accent:"#ae73ff"},capturado:{label:"ASTEROIDE CAPTURADO",accent:"#75f7ab"}};
    let currentSelectedMoon=null;
    function clearMoonDetail(){moonEls.detail.style.removeProperty("--moon-accent");moonEls.detail.style.removeProperty("--moon-glow");moonEls.image.removeAttribute("src");moonEls.image.alt="";moonEls.image.closest(".moon-detail-visual").classList.remove("is-fallback");moonEls.badge.textContent="";moonEls.name.textContent="";moonEls.diameter.textContent="";moonEls.distance.textContent="";moonEls.period.textContent="";moonEls.bioValue.textContent="";moonEls.bioFill.style.width="0%";moonEls.fact.textContent=""}
    function selectMoon(m){currentSelectedMoon=m;const meta=moonCategories[m.category];moonEls.detail.style.setProperty("--moon-accent",meta.accent);moonEls.detail.style.setProperty("--moon-glow",`${meta.accent}66`);const moonVisual=moonEls.image.closest(".moon-detail-visual");if(m.image){moonVisual.classList.remove("is-fallback");moonEls.image.src=m.image;moonEls.image.alt=m.name}else{moonVisual.classList.add("is-fallback");moonEls.image.removeAttribute("src");moonEls.image.alt=""}moonVisual.style.setProperty("--moon-accent",meta.accent);moonEls.badge.textContent=meta.label;moonEls.badge.style.setProperty("--moon-accent",meta.accent);moonEls.name.textContent=m.name;moonEls.diameter.textContent=m.diameter;moonEls.distance.textContent=m.distance;moonEls.period.textContent=m.period;moonEls.bioValue.textContent=`${m.bio}%`;moonEls.bioFill.style.width=`${m.bio}%`;moonEls.fact.textContent=m.fact;moonEls.selector.querySelectorAll(".moon-chip").forEach(chip=>chip.classList.toggle("is-selected",chip.dataset.id===m.id))}
    function renderMoons(p){
      currentSelectedMoon=null;
      const moons=p.moons||[];
      if(moons.length===0){
        moonEls.selector.innerHTML="";
        moonEls.selector.hidden=true;
        moonEls.detail.hidden=true;
        clearMoonDetail();
        moonEls.empty.hidden=false;
        return;
      }
      moonEls.empty.hidden=true;
      moonEls.selector.hidden=false;
      moonEls.detail.hidden=false;
      moonEls.selector.innerHTML=moons.map((m,i)=>`<button class="moon-chip${i===0?" is-selected":""}" type="button" data-id="${m.id}" style="--moon-accent:${moonCategories[m.category].accent}">${m.name}</button>`).join("");
      moonEls.selector.querySelectorAll(".moon-chip").forEach(chip=>chip.addEventListener("click",()=>selectMoon(moons.find(m=>m.id===chip.dataset.id))));
      selectMoon(moons[0]);
    }
    const layerEls={empty:document.querySelector("#layers-empty"),note:document.querySelector("#layers-note"),console:document.querySelector("#layers-console"),diagram:document.querySelector("#layers-diagram"),legend:document.querySelector("#layer-legend"),detail:document.querySelector("#layer-detail"),badge:document.querySelector("#layer-badge"),name:document.querySelector("#layer-name"),composition:document.querySelector("#layer-composition"),thickness:document.querySelector("#layer-thickness"),temperature:document.querySelector("#layer-temperature"),pressure:document.querySelector("#layer-pressure"),description:document.querySelector("#layer-description")};
    let currentSelectedLayer=null;
    function clearLayerDetail(){layerEls.detail.style.removeProperty("--layer-accent");layerEls.detail.style.removeProperty("--layer-glow");layerEls.badge.textContent="";layerEls.badge.style.removeProperty("--layer-accent");layerEls.name.textContent="";layerEls.composition.textContent="";layerEls.thickness.textContent="";layerEls.temperature.textContent="";layerEls.pressure.textContent="";layerEls.description.textContent=""}
    function selectLayer(layer){currentSelectedLayer=layer;const glow=`${layer.color}66`;layerEls.detail.style.setProperty("--layer-accent",layer.color);layerEls.detail.style.setProperty("--layer-glow",glow);layerEls.badge.style.setProperty("--layer-accent",layer.color);layerEls.badge.textContent=layer.type.toUpperCase();layerEls.name.textContent=layer.name;layerEls.composition.textContent=layer.composition;layerEls.thickness.textContent=layer.thickness;layerEls.temperature.textContent=layer.temperature;layerEls.pressure.textContent=layer.pressure;layerEls.description.textContent=layer.description;layerEls.diagram.querySelectorAll(".layer-ring").forEach(ring=>{const on=ring.dataset.layer===layer.name;ring.classList.toggle("is-selected",on);ring.setAttribute("aria-selected",String(on))});layerEls.legend.querySelectorAll(".layer-chip").forEach(chip=>chip.classList.toggle("is-selected",chip.dataset.layer===layer.name))}
    function renderLayers(p){
      currentSelectedLayer=null;
      const layers=p.layers||[];
      if(layers.length===0){
        layerEls.diagram.innerHTML="";
        layerEls.legend.innerHTML="";
        layerEls.console.hidden=true;
        layerEls.note.hidden=true;
        clearLayerDetail();
        layerEls.empty.hidden=false;
        return;
      }
      layerEls.empty.hidden=true;
      layerEls.console.hidden=false;
      layerEls.note.hidden=p.kind!=="exoplaneta";
      layerEls.diagram.innerHTML=layers.map(l=>`<button class="layer-ring" type="button" role="tab" aria-selected="false" data-layer="${l.name}" style="--layer-size:${l.size}%;--layer-color:${l.color};--layer-glow:${l.color}88" aria-label="${l.name}: ${l.type}"></button>`).join("");
      layerEls.legend.innerHTML=layers.map(l=>`<button class="layer-chip" type="button" data-layer="${l.name}" style="--layer-color:${l.color};--layer-glow:${l.color}66"><i aria-hidden="true"></i>${l.name}</button>`).join("");
      const bind=el=>el.addEventListener("click",()=>selectLayer(layers.find(l=>l.name===el.dataset.layer)));
      layerEls.diagram.querySelectorAll(".layer-ring").forEach(bind);
      layerEls.legend.querySelectorAll(".layer-chip").forEach(bind);
      selectLayer(layers[0]);
    }
    function switchScannerTab(tab){document.querySelectorAll(".scanner-tab").forEach(btn=>{const active=btn.dataset.tab===tab;btn.classList.toggle("is-selected",active);btn.setAttribute("aria-selected",String(active))});document.querySelectorAll(".scanner-tab-panel").forEach(panel=>{panel.hidden=panel.dataset.panel!==tab})}
    document.querySelectorAll(".scanner-tab").forEach(btn=>btn.addEventListener("click",()=>switchScannerTab(btn.dataset.tab)));
    let currentPlanet=null,currentGalleryIndex=0;
    const kindLabels={exoplaneta:"EXOPLANETA",enano:"PLANETA ENANO"};
    function kindLabel(kind){return kindLabels[kind]||kind.toUpperCase()}
    function hasPhoto(p){return p.visual!=="css"&&Array.isArray(p.gallery)&&p.gallery.length>0}
    function schematicNote(p){return p.kind==="exoplaneta"?"REPRESENTACIÓN ESQUEMÁTICA // NINGÚN EXOPLANETA SE HA RESUELTO COMO DISCO":"REPRESENTACIÓN ESQUEMÁTICA // SIN IMAGEN RESUELTA DEL DISCO"}
    function planetCard(p){const kind=kindLabel(p.kind),photo=hasPhoto(p);return `<button class="planet-card" type="button" data-id="${p.id}" data-kind="${p.kind}" style="--planet-gradient:${p.gradient};--planet-glow:${p.glow};--planet-ring:${p.ring||"transparent"}"><span class="card-id">${p.id}</span><span class="card-type">${kind}</span><span class="card-planet${photo?"":" is-schematic"}" aria-hidden="true">${photo?`<img src="${p.gallery[0].src}" alt="" loading="lazy" onerror="this.style.display='none'">`:""}</span><span class="card-name">${p.name}</span><span class="card-action">ANALIZAR →</span><span class="card-corner" aria-hidden="true"></span></button>`}function renderPlanets(filter="all"){grid.innerHTML=planets.map(planetCard).join("");let shown=0;grid.querySelectorAll(".planet-card").forEach(card=>{const hidden=filter!=="all"&&card.dataset.kind!==filter;card.hidden=hidden;if(!hidden)shown+=1;card.addEventListener("click",()=>openScanner(planets.find(({id})=>id===card.dataset.id)))});planetCount.textContent=shown}
    function applyPlanetImage(p,index){const item=p.gallery[index];scanner.planetImg.dataset.fallback="0";scanner.planetImg.style.display="";scanner.planetImg.alt=`${p.name} — ${item.caption}`;scanner.planetImg.src=item.src;scanner.visualCaption.textContent=item.caption.toUpperCase();scanner.galleryStrip.querySelectorAll(".gallery-thumb").forEach(btn=>btn.classList.toggle("is-active",Number(btn.dataset.index)===index))}
    function setPlanetImage(p,index,animate){currentGalleryIndex=index;if(animate&&window.gsap){gsap.to(scanner.planetImg,{autoAlpha:0,scale:.94,duration:.16,ease:"power1.in",onComplete:()=>{applyPlanetImage(p,index);gsap.fromTo(scanner.planetImg,{autoAlpha:0,scale:.94},{autoAlpha:1,scale:1,duration:.42,ease:"power2.out"})}})}else{applyPlanetImage(p,index);if(window.gsap)gsap.fromTo(scanner.planetImg,{autoAlpha:0},{autoAlpha:1,duration:.3})}}
    function renderGallery(p){if(!hasPhoto(p)){currentGalleryIndex=0;scanner.galleryStrip.innerHTML="";scanner.galleryStrip.hidden=true;scanner.planetImg.removeAttribute("src");scanner.planetImg.alt="";scanner.planetImg.style.display="none";scanner.planet.classList.add("is-schematic");scanner.visualCaption.textContent=schematicNote(p);return}scanner.galleryStrip.hidden=false;scanner.planet.classList.remove("is-schematic");scanner.planetImg.style.display="";scanner.galleryStrip.innerHTML=p.gallery.map((g,i)=>`<button class="gallery-thumb${i===0?" is-active":""}" type="button" data-index="${i}" style="background-image:url('${g.src}')" title="${g.caption}" aria-label="Vista ${i+1} de ${p.gallery.length}: ${g.caption}"><span>${String(i+1).padStart(2,"0")}</span></button>`).join("");scanner.galleryStrip.querySelectorAll(".gallery-thumb").forEach(btn=>btn.addEventListener("click",()=>{const index=Number(btn.dataset.index);if(index!==currentGalleryIndex)setPlanetImage(p,index,true)}));setPlanetImage(p,0,false)}
    scanner.planetImg.addEventListener("error",function(){if(!currentPlanet||!hasPhoto(currentPlanet))return;if(this.dataset.fallback!=="1"&&currentGalleryIndex!==0){this.dataset.fallback="1";this.src=currentPlanet.gallery[0].src}else{this.style.display="none"}});
    function openScanner(p){currentPlanet=p;scanner.classification.textContent=p.category.toUpperCase();scanner.name.textContent=p.name;scanner.description.innerHTML=p.description;scanner.type.textContent=kindLabel(p.kind);scanner.gravity.textContent=p.gravity;scanner.temperature.textContent=p.temperature;scanner.fact.textContent=p.fact;scanner.planet.style.setProperty("--scanner-gradient",p.gradient);scanner.planet.style.setProperty("--scanner-glow",p.glow);scanner.planet.style.setProperty("--scanner-ring",p.ring||"transparent");scanner.expeditionGrid.innerHTML=p.keyFacts.map(f=>`<div class="expedition-item"><dt>${f.label}</dt><dd>${f.value}</dd></div>`).join("");scanner.sections.innerHTML=p.sections.map(s=>`<div class="scanner-section"><h4>${s.title}</h4><p>${s.html}</p></div>`).join("");renderGallery(p);renderMoons(p);renderLayers(p);switchScannerTab("planet");modal.showModal()}renderPlanets();document.querySelectorAll(".map-tools .filter-button").forEach(button=>button.addEventListener("click",()=>{document.querySelector(".map-tools .filter-button.is-selected").classList.remove("is-selected");button.classList.add("is-selected");renderPlanets(button.dataset.filter)}));document.querySelector("#modal-close").addEventListener("click",()=>modal.close());document.querySelector("#modal-close-footer").addEventListener("click",()=>modal.close());modal.addEventListener("click",event=>{if(event.target===modal)modal.close()});
    /* FUTURA ACTUALIZACIÓN 3D: sustituye `.scanner-visual` por un viewport Three.js. Inicializa la escena al abrir el escáner y elimina el renderer al cerrarlo. Los objetos de `planets` ya aportan id, nombre y colores. */
    const eraDetails={bang:{index:"REGISTRO // 01",eyebrow:"ÉPOCA 01 / 04 // SINGULARIDAD PRIMORDIAL",title:"El Big Bang",period:"T = 0 → 380.000 años después del origen",image:"img/WMAP_image_of_the_CMB_anisotropy.jpg",imageAlt:"Mapa de todo el cielo con las diminutas variaciones de temperatura del fondo cósmico de microondas",imageCaption:"La primera luz del universo, 380.000 años después del origen: el mapa del fondo cósmico de microondas trazado por la sonda WMAP. Cada mancha es una variación de temperatura de una cienmilésima de grado.",text:["En una fracción de segundo, el universo pasó de un punto de densidad y temperatura inimaginables a una expansión vertiginosa conocida como <mark>inflación cósmica</mark>, que estiró el <mark>espacio-tiempo</mark> billones de veces en un instante.","A medida que el cosmos se enfriaba, la energía se transformó en las primeras partículas: <mark>quarks</mark>, electrones y fotones formaron un <mark>plasma opaco</mark>. Minutos después, la <mark>nucleosíntesis primordial</mark> creó los primeros núcleos de hidrógeno y helio.","Unos 380.000 años más tarde, el universo se enfrió lo suficiente para que los electrones se unieran a los núcleos y formaran <mark>átomos neutros</mark>. La luz quedó libre para viajar: ese resplandor todavía es visible hoy como el <mark>fondo cósmico de microondas</mark>."],milestones:["El fondo cósmico de microondas fue detectado por accidente en 1965 por Penzias y Wilson.","Durante la inflación, el universo pudo duplicar su tamaño más de 60 veces en menos de un segundo.","Las variaciones mínimas de densidad de esta época son la semilla de todas las galaxias futuras."]},galaxies:{index:"REGISTRO // 02",eyebrow:"ÉPOCA 02 / 04 // REIONIZACIÓN",title:"Primeras galaxias",period:"Hace entre 13.600 y 13.000 millones de años",image:"img/Webb-s_First_Deep_Field_-adjusted.jpg",imageAlt:"Campo profundo del telescopio Webb: cientos de galaxias de todas las formas sobre el fondo negro del espacio",imageCaption:"El Primer Campo Profundo del telescopio James Webb. Cada punto es una galaxia entera, y las más rojizas se ven tal como eran cuando el universo tenía una fracción de su edad actual.",text:["Durante cientos de millones de años el universo permaneció a oscuras: solo existía <mark>gas neutro</mark> de hidrógeno y helio. Poco a poco, la <mark>gravedad</mark> fue concentrando ese gas en las regiones más densas.","Allí se encendieron las primeras estrellas, conocidas como <mark>Población III</mark>: astros gigantes, extremadamente calientes y de vida muy breve, que fabricaron los primeros <mark>elementos pesados</mark> en sus núcleos y en sus explosiones de <mark>supernova</mark>.","Su intensa <mark>radiación ultravioleta</mark> ionizó el hidrógeno circundante en el proceso llamado <mark>reionización</mark>, despejando la niebla primordial. Los cúmulos de estrellas y gas se agruparon por gravedad dando lugar a las primeras <mark>galaxias enanas</mark>."],milestones:["El telescopio espacial James Webb ha detectado galaxias formadas apenas 300 millones de años después del Big Bang.","Las estrellas de Población III aún no han sido observadas directamente: se infieren por sus efectos.","La reionización marcó el final de la llamada 'Edad Oscura' del universo."]},milkyway:{index:"REGISTRO // 03",eyebrow:"ÉPOCA 03 / 04 // GALAXIA LOCAL",title:"La Vía Láctea",period:"Ensamblaje iniciado hace más de 13.000 millones de años",image:"img/Artist-s_impression_of_the_Milky_Way_-eso1339g.jpg",imageAlt:"Impresión artística de la Vía Láctea vista desde fuera, con su barra central y sus brazos espirales",imageCaption:"Impresión artística de la Vía Láctea vista desde fuera (ESO). Nadie ha tomado nunca esta fotografía: vivimos dentro del disco, así que su forma se deduce midiendo la posición y el movimiento de sus estrellas.",text:["Nuestra galaxia comenzó como pequeños halos de <mark>materia oscura</mark> y gas primordial que colisionaron y se fusionaron repetidamente, incluyendo una fusión masiva conocida como <mark>Gaia-Encélado</mark> hace unos 10.000 millones de años.","Con el tiempo, el gas se asentó en un <mark>disco giratorio</mark> donde nacieron generaciones sucesivas de estrellas, formando los <mark>brazos espirales</mark>. Un bulbo central denso y un halo esférico de <mark>cúmulos globulares</mark> antiguos completan su estructura.","En su núcleo reside <mark>Sagitario A*</mark>, un <mark>agujero negro supermasivo</mark> de unos 4 millones de masas solares, alrededor del cual orbita todo el disco galáctico, incluido nuestro Sol."],milestones:["La Vía Láctea alberga entre 100.000 y 400.000 millones de estrellas.","Tiene un diámetro aproximado de 100.000 años luz.","Está en curso de colisión con la galaxia de Andrómeda, un encuentro previsto dentro de unos 4.500 millones de años."]},solar:{index:"REGISTRO // 04",eyebrow:"ÉPOCA 04 / 04 // COORDENADAS ACTUALES",title:"Nace nuestro sistema",period:"Hace 4.600 millones de años",image:"img/HL_Tau_protoplanetary_disk.jpg",imageAlt:"Disco de polvo alrededor de la joven estrella HL Tauri, con surcos oscuros abiertos por planetas en formación",imageCaption:"El disco protoplanetario de HL Tauri, fotografiado por ALMA. Los surcos oscuros son huecos abiertos por planetas que se están formando ahora mismo: así debió verse nuestro sistema hace 4.600 millones de años.",text:["Una onda expansiva, posiblemente de una <mark>supernova cercana</mark>, comprimió una <mark>nube molecular</mark> en uno de los brazos espirales de la Vía Láctea, desencadenando su <mark>colapso gravitacional</mark>.","En el centro se encendió una <mark>protoestrella</mark> —el joven Sol— mientras el material restante se aplanaba por conservación del <mark>momento angular</mark> en un <mark>disco protoplanetario</mark>. Dentro de ese disco, granos de polvo colisionaron y se fueron aglutinando hasta formar <mark>planetesimales</mark>.","Estos cuerpos siguieron creciendo por <mark>acreción</mark> hasta convertirse en planetas. Los más cercanos al Sol perdieron sus gases ligeros y quedaron <mark>rocosos</mark>; más lejos, los <mark>gigantes gaseosos y helados</mark> capturaron enormes envolturas de hidrógeno y hielo."],milestones:["Se estima que la Tierra tardó entre 10 y 100 millones de años en formarse por completo.","La Luna probablemente se formó tras el impacto de un planeta del tamaño de Marte contra la Tierra primitiva.","Los restos de la formación planetaria aún orbitan hoy como el cinturón de asteroides y la nube de Oort."]}};
    const eraModal=document.querySelector("#era-modal"),eraFrame=eraModal.querySelector(".era-frame"),eraIndexLabel=document.querySelector("#era-index-label"),eraEyebrow=document.querySelector("#era-eyebrow"),eraTitle=document.querySelector("#era-title"),eraPeriod=document.querySelector("#era-period"),eraImg=document.querySelector("#era-img"),eraCaption=document.querySelector("#era-caption"),eraText=document.querySelector("#era-text"),eraMilestones=document.querySelector("#era-milestones");
    function openEra(key){const d=eraDetails[key];if(!d)return;eraIndexLabel.textContent=d.index;eraEyebrow.textContent=d.eyebrow;eraTitle.textContent=d.title;eraPeriod.textContent=d.period;eraImg.src=d.image;eraImg.alt=d.imageAlt;eraCaption.textContent=d.imageCaption;eraText.innerHTML=d.text.map(p=>`<p>${p}</p>`).join("");eraMilestones.innerHTML=d.milestones.map(m=>`<li>${m}</li>`).join("");eraModal.showModal();if(window.gsap){gsap.set(eraFrame,{autoAlpha:0,y:26,scale:.97});gsap.to(eraFrame,{autoAlpha:1,y:0,scale:1,duration:.5,ease:"power3.out"})}}
    function closeEra(){if(window.gsap){gsap.to(eraFrame,{autoAlpha:0,y:18,scale:.98,duration:.28,ease:"power2.in",onComplete:()=>eraModal.close()})}else eraModal.close()}
    document.querySelectorAll(".event-more").forEach(button=>button.addEventListener("click",()=>openEra(button.dataset.era)));
    document.querySelector("#era-close").addEventListener("click",closeEra);
    document.querySelector("#era-close-footer").addEventListener("click",closeEra);
    eraModal.addEventListener("click",event=>{if(event.target===eraModal)closeEra()});
    eraModal.addEventListener("cancel",event=>{event.preventDefault();closeEra()});
    // Crónica abierta: no hay ScrollTrigger. GSAP se activa únicamente por la intención de abrir/cerrar el archivo.
    const chronicleButton=document.querySelector("#chronicle-launch"),chronicleArchive=document.querySelector("#chronicle-archive"),chroniclePieces=chronicleArchive.querySelectorAll(".chronicle-piece");
    chronicleButton.addEventListener("click",()=>{const isOpen=chronicleButton.getAttribute("aria-expanded")==="true";if(isOpen){if(window.gsap){gsap.to(chroniclePieces,{autoAlpha:0,y:20,duration:.2,stagger:{each:.025,from:"end"}});gsap.to(chronicleArchive,{height:0,duration:.45,ease:"power2.in",delay:.12,onComplete:()=>{chronicleArchive.hidden=true}})}else chronicleArchive.hidden=true;chronicleButton.setAttribute("aria-expanded","false");chronicleButton.querySelector(".launch-label").textContent="DESPLEGAR ARCHIVOS HISTÓRICOS";chronicleButton.querySelector(".launch-symbol").textContent="↓";return}chronicleArchive.hidden=false;chronicleButton.setAttribute("aria-expanded","true");chronicleButton.querySelector(".launch-label").textContent="OCULTAR ARCHIVOS HISTÓRICOS";chronicleButton.querySelector(".launch-symbol").textContent="↑";if(window.gsap){gsap.set(chronicleArchive,{height:0,autoAlpha:1});gsap.set(chroniclePieces,{autoAlpha:0,y:34});gsap.timeline().to(chronicleArchive,{height:"auto",duration:.7,ease:"power3.out"}).to(chroniclePieces,{autoAlpha:1,y:0,duration:.62,stagger:.1,ease:"power3.out"},"<+.14").set(chronicleArchive,{clearProps:"height"})}});
    /* Atracciones del Espacio Profundo: fichas de anomalías cósmicas con filtrado y modal de diagnóstico. */
    const anomalyGrid=document.querySelector("#anomaly-grid"),anomalyModal=document.querySelector("#anomaly-modal"),anomalyPanel={code:document.querySelector("#anomaly-code"),classification:document.querySelector("#anomaly-classification"),name:document.querySelector("#anomaly-name"),risk:document.querySelector("#anomaly-risk"),distance:document.querySelector("#anomaly-distance"),impact:document.querySelector("#anomaly-impact"),description:document.querySelector("#anomaly-description"),advice:document.querySelector("#anomaly-advice"),viewerFrame:document.querySelector("#anomaly-viewer-frame"),viewerImage:document.querySelector("#anomaly-viewer-image"),viewerCaption:document.querySelector("#anomaly-viewer-caption"),thumbs:document.querySelector("#anomaly-thumbs")};
    const riskMeta={5:{label:"NIVEL 5 // CATACLÍSMICO",accent:"#ff3366",glow:"rgba(255,51,102,.4)"},4:{label:"NIVEL 4 // EXTREMO",accent:"#ff8800",glow:"rgba(255,136,0,.4)"},3:{label:"NIVEL 3 // ALTO PELIGRO",accent:"#ffee00",glow:"rgba(255,238,0,.35)"},2:{label:"NIVEL 2 // INCÓGNITA CIENTÍFICA",accent:"#ae73ff",glow:"rgba(174,115,255,.4)"},1:{label:"NIVEL 1 // RIESGO MODERADO",accent:"#75f7ab",glow:"rgba(117,247,171,.4)"}};
    const anomalies=[
      {id:"AN-01",name:"Agujeros Negros Supermasivos",subtitle:"Singularidad y Horizonte de Sucesos",level:5,classification:"SINGULARIDAD GRAVITATORIA SUPERMASIVA",distance:"100 Unidades Astronómicas (UA)",impact:"Espaguetización total por fuerzas de marea; fallo catastrófico de sistemas electrónicos cerca del horizonte.",gradient:"radial-gradient(circle at 35% 30%,#fff 0%,rgba(120,140,255,.5) 10%,#0c0a18 46%,#000 72%)",glow:"rgba(120,90,255,.55)",image:"img/Black_hole_-_Messier_87.jpg",imageCaption:"Primera fotografía real de un agujero negro: M87*, captada por el Event Horizon Telescope en 2019.",gallery:[{src:"img/Black_hole_-_Messier_87_crop_max_res.jpg",caption:"Versión de máxima resolución de la imagen del EHT, con el anillo de fotones alrededor del horizonte de sucesos."},{src:"img/M87_Black_Hole_-gemini1101a.jpg",caption:"Publicación complementaria de la colaboración del Event Horizon Telescope sobre el mismo agujero negro."}],description:"Un agujero negro supermasivo es una región del espacio-tiempo donde la gravedad es tan intensa que ni siquiera la luz puede escapar. En su centro se predice una <mark>singularidad</mark>, un punto de densidad infinita rodeado por el <mark>horizonte de sucesos</mark>, el límite de no retorno. Cualquier objeto que se aproxime experimentará <mark>espaguetización</mark>: las fuerzas de marea lo estiran en un hilo de materia antes de cruzar el horizonte. Hawking demostró que estos objetos no son completamente negros: emiten una tenue <mark>radiación de Hawking</mark>, producto de efectos cuánticos en el límite del horizonte.",advice:"Protocolo de evacuación inmediata ante cualquier curvatura espacial anómala detectada. Mantén una distancia mínima de 100 UA respecto al horizonte de sucesos aparente: ninguna nave sin blindaje gravitatorio activo debe cruzar el disco de acreción."},
      {id:"AN-02",name:"Brotes de Rayos Gamma (GRB)",subtitle:"Los Eventos Más Energéticos del Universo",level:5,classification:"EXPLOSIÓN DE RADIACIÓN GAMMA HIPERENERGÉTICA",distance:"10 Años Luz (fuera del cono de emisión)",impact:"Dosis letal de radiación gamma en segundos; ionización total del casco si la nave queda dentro del haz.",gradient:"radial-gradient(circle at 40% 30%,#fff 0%,#c9e8ff 18%,#5f78ff 46%,#0a0f2e 78%)",glow:"rgba(180,210,255,.6)",image:"img/GRB080319B_illustration_NASA.jpg",imageCaption:"Ilustración de la NASA de un brote de rayos gamma (GRB 080319B) emitiendo sus dos chorros relativistas.",gallery:[{src:"img/The_Double_Firing_Burst.jpg",caption:"Concepto artístico del doble estallido de GRB 080319B (ESO)."},{src:"img/Artist-s_impression_of_a_gamma-ray_burst.jpg",caption:"Impresión artística general de un brote de rayos gamma."}],description:"Un brote de rayos gamma es la explosión más energética conocida en el universo: libera en segundos la misma energía que el Sol emitirá en toda su vida. Se origina en el colapso de una estrella hipermasiva o la fusión de dos estrellas de neutrones, disparando dos <mark>chorros relativistas</mark> gemelos casi a la velocidad de la luz. Si la Tierra estuviera alineada con el haz de un GRB cercano, la radiación podría destruir la capa de ozono en cuestión de minutos.",advice:"Evacúa de inmediato cualquier trayectoria alineada con el eje de emisión. Los GRB solo son letales dentro de su estrecho cono de radiación: navegar fuera de esa línea reduce el riesgo a niveles manejables."},
      {id:"AN-03",name:"Cuásares y Jets Relativistas",subtitle:"Faros de Energía de los Núcleos Galácticos",level:5,classification:"NÚCLEO GALÁCTICO ACTIVO (AGN)",distance:"50 Años Luz del eje del jet",impact:"Radiación electromagnética intensa en todo el espectro; sobrecarga de escudos por partículas relativistas.",gradient:"radial-gradient(circle at 38% 32%,#fff 0%,#ffe9b0 14%,#ff9a3c 42%,#1a0a05 78%)",glow:"rgba(255,170,80,.55)",image:"img/Best_image_of_bright_quasar_3C_273_-10953173335.jpg",imageCaption:"El cuásar 3C 273, el primero identificado, fotografiado por el Telescopio Espacial Hubble.",gallery:[{src:"img/Quasar_with_jet_and_magnetic_lines.jpg",caption:"Ilustración de un cuásar con su jet relativista y líneas de campo magnético."},{src:"img/Superluminal_Motion_Relativistic_Jet_-2022-029.jpg",caption:"El Hubble capta un jet relativista con movimiento aparentemente superlumínico."}],description:"Un cuásar es el núcleo extremadamente luminoso de una galaxia joven, alimentado por un agujero negro supermasivo que devora materia a un ritmo voraz. El disco de acreción calienta el gas a millones de grados y expulsa <mark>jets relativistas</mark> de partículas casi a la velocidad de la luz, visibles a miles de millones de años luz de distancia. Un solo cuásar puede brillar cientos de veces más que toda la Vía Láctea.",advice:"Aproxímate únicamente por el plano perpendicular al jet. La radiación del disco de acreción y las partículas del chorro relativista pueden penetrar blindajes convencionales si la nave se alinea con el eje de emisión."},
      {id:"AN-04",name:"Magnetar y Campos Magnéticos Extremos",subtitle:"Los Imanes Más Poderosos del Cosmos",level:4,classification:"ESTRELLA DE NEUTRONES HIPERMAGNETIZADA",distance:"1.000 km (radio de interferencia magnética)",impact:"Falla total de sistemas electrónicos y de navegación; riesgo de deformación estructural en cascos metálicos.",gradient:"radial-gradient(circle,#fff 0%,#ffd6f0 22%,#c060e0 50%,#180a2e 82%)",glow:"rgba(200,110,255,.55)",image:"img/SGR_1806-20_108685main_SRB1806_20rev2.jpg",imageCaption:"Ilustración de la NASA del magnetar SGR 1806-20, la estrella de neutrones más magnética conocida.",gallery:[{src:"img/Artist-s_impression_of_the_magnetar_in_the_star_cluster_Westerlund_1.jpg",caption:"Impresión artística de un magnetar en el cúmulo estelar Westerlund 1 (ESO)."},{src:"img/Magnetar_magnetic_field.png",caption:"Diagrama del campo magnético extremo que envuelve a un magnetar."}],description:"Un magnetar es un tipo de estrella de neutrones con un campo magnético hasta mil veces más intenso que el de un púlsar convencional: el más fuerte conocido en el universo. Ese campo es tan intenso que podría borrar la información de cualquier tarjeta de crédito a la distancia de la Luna, y alterar la estructura atómica de la materia que se le aproxime. Emiten ocasionalmente <mark>llamaradas gigantes</mark> de rayos X y gamma que liberan más energía en una décima de segundo que el Sol en 100.000 años.",advice:"Desactiva todos los sistemas electrónicos no esenciales antes de aproximarte. Ningún casco metálico convencional resiste la distorsión estructural del campo magnético a corta distancia."},
      {id:"AN-05",name:"Agujeros Negros Errantes (Rogue)",subtitle:"Depredadores Invisibles en Tránsito",level:4,classification:"AGUJERO NEGRO ESTELAR AISLADO",distance:"5 Unidades Astronómicas (UA)",impact:"Riesgo de colisión sin previo aviso; distorsión gravitatoria detectable solo por lente gravitacional.",gradient:"radial-gradient(circle at 45% 40%,rgba(140,160,255,.35) 0%,#0a0e24 40%,#000 75%)",glow:"rgba(140,160,255,.4)",image:"img/Gravitational_lensing_by_a_black_hole.jpg",imageCaption:"Ilustración de la NASA de un agujero negro errante detectado por microlente gravitacional al pasar frente a una estrella.",gallery:[{src:"img/Swift_J1644-57_black_hole_illustration.jpg",caption:"Concepto artístico de un agujero negro aislado en tránsito por el espacio interestelar."},{src:"img/Black_hole_-NASA.jpg",caption:"Representación de la NASA de un agujero negro estelar."}],description:"A diferencia de los agujeros negros que orbitan una estrella compañera, los agujeros negros errantes vagan solos por la galaxia, invisibles a los telescopios convencionales. Solo se detectan por <mark>microlente gravitacional</mark>: el breve destello de una estrella de fondo cuya luz se curva al pasar el agujero negro frente a ella. Se estima que la Vía Láctea alberga cientos de millones de estos objetos silenciosos, vestigios de estrellas masivas que colapsaron hace eones.",advice:"Mantén los sensores gravitacionales activos en todo momento: son indetectables por radar convencional. Cualquier lectura de microlente inesperada debe tratarse como alerta de colisión inminente."},
      {id:"AN-06",name:"Hipernovas de Inestabilidad de Pares",subtitle:"La Muerte Estelar Más Violenta",level:4,classification:"SUPERNOVA DE INESTABILIDAD DE PARES",distance:"20 Años Luz",impact:"Onda expansiva de escombros a velocidades relativistas; radiación de rayos X intensa y prolongada.",gradient:"radial-gradient(circle at 42% 35%,#fff 0%,#ffe0c2 16%,#ff7a3c 44%,#1a0603 80%)",glow:"rgba(255,140,80,.55)",image:"img/SN_2006gy-_NASA_illustration.jpg",imageCaption:"Ilustración de la NASA de SN 2006gy, el principal candidato observado a supernova de inestabilidad de pares.",gallery:[{src:"img/Keplers_supernova.jpg",caption:"Remanente de la supernova de Kepler, observada en 1604, captado por el Hubble, Spitzer y Chandra."},{src:"img/Supernova.gif",caption:"Animación conceptual del colapso y la explosión de una estrella hipermasiva."}],description:"En estrellas extremadamente masivas (más de 130 masas solares), el núcleo alcanza temperaturas tan altas que los fotones gamma se convierten espontáneamente en pares de <mark>electrones y positrones</mark>, reduciendo la presión que sostiene la estrella. El colapso resultante desencadena una reacción termonuclear descontrolada que destruye la estrella por completo, sin dejar remanente: ni estrella de neutrones ni agujero negro. SN 2006gy es el candidato observado más brillante de este tipo de evento.",advice:"Aléjate de cualquier estrella hipermasiva en fase final de fusión de oxígeno: la explosión no deja advertencia previa detectable a distancia segura. No existe remanente central que rastrear tras el evento."},
      {id:"AN-07",name:"Púlsares y Radiación Periódica",subtitle:"Faros Cósmicos de Precisión Atómica",level:3,classification:"REMANENTE ESTELAR ULTRADENSO ROTANTE",distance:"0,5 Años Luz del eje polar",impact:"Exposición a radiación pulsante de alta energía; interferencia electromagnética rítmica en sistemas de a bordo.",gradient:"radial-gradient(circle,#eaf6ff 0%,#8fd6ff 28%,#1c3fae 62%,#050b23 100%)",glow:"rgba(143,214,255,.6)",image:"img/Pulsar_model.jpg",imageCaption:"Ilustración de la NASA de un púlsar emitiendo haces de radiación desde sus polos magnéticos.",gallery:[{src:"img/Crab_Nebula_NGC_1952_-composite_from_Chandra-_Hubble_and_Spitzer.jpg",caption:"La Nebulosa del Cangrejo, remanente de supernova que alberga un púlsar en su centro (Chandra/Hubble/Spitzer)."},{src:"img/Pulsar_in_the_Crab_Nebula_-eso9532a.jpg",caption:"El púlsar del Cangrejo observado por el Observatorio Europeo Austral (ESO)."}],description:"Al colapsar el núcleo de una estrella masiva en una supernova, la materia puede comprimirse hasta formar una estrella de neutrones: un objeto de apenas 20 kilómetros de diámetro que concentra más masa que el Sol. Una cucharadita de su material pesaría miles de millones de toneladas. Cuando este remanente gira a gran velocidad y emite haces de radiación desde sus polos magnéticos, lo llamamos <mark>púlsar</mark>: un faro cósmico que barre el espacio con una regularidad casi perfecta, comparable a un reloj atómico.",advice:"Evita alinear la nave con el eje de emisión polar: los haces de radiación pueden superar niveles letales en segundos. Aproxímate siempre por el plano ecuatorial del púlsar."},
      {id:"AN-08",name:"Ondas Gravitacionales de Fusión",subtitle:"Ondulaciones en el Espacio-Tiempo",level:3,classification:"EVENTO DE FUSIÓN COMPACTA (BH/NS)",distance:"Sin distancia estricta (efecto subatómico)",impact:"Deformación subatómica temporal del casco; sin daño estructural directo conocido.",gradient:"repeating-radial-gradient(circle,rgba(82,231,255,.55) 0 2px,transparent 3px 11px),radial-gradient(circle,rgba(82,231,255,.2),#050b1f 70%)",glow:"rgba(82,231,255,.55)",image:"img/Eso1733s_Artist-s_impression_of_merging_neutron_stars.jpg",imageCaption:"Concepto artístico de dos estrellas de neutrones fusionándose y generando ondas gravitacionales (ESO).",gallery:[{src:"img/GW170817_Gravitational_Wave_Chirp_Spectrogram.jpg",caption:"Espectrograma real de la señal GW170817 detectada por LIGO/Virgo en 2017."},{src:"img/GravitationalWave_CrossPolarization.gif",caption:"Animación ilustrativa de la deformación del espacio-tiempo al paso de una onda gravitacional."}],description:"Predichas por Einstein en 1916 y confirmadas por primera vez en 2015 por el observatorio LIGO, las ondas gravitacionales son ondulaciones en el tejido del espacio-tiempo generadas por eventos cósmicos extremadamente violentos, como la fusión de dos agujeros negros o dos estrellas de neutrones. A diferencia de la luz, no son radiación electromagnética: viajan a la velocidad de la luz deformando literalmente la distancia entre los objetos a su paso, aunque el efecto es tan diminuto que solo interferómetros de precisión extrema pueden detectarlo.",advice:"Riesgo estructural prácticamente nulo, pero equipa la nave con un interferómetro de precisión: el paso de la onda es indetectable a simple vista y solo se registra con instrumentos especializados."},
      {id:"AN-09",name:"El Vacío de Boötes (Desierto Cósmico)",subtitle:"330 Millones de Años Luz de Vacío Casi Total",level:3,classification:"SUPERVACÍO GALÁCTICO",distance:"N/A — riesgo de aislamiento, no de colisión",impact:"Pérdida total de referencia de navegación estelar; aislamiento de comunicaciones por ausencia de relevos galácticos.",gradient:"radial-gradient(circle,rgba(82,231,255,.12) 0%,#05070f 55%,#000 100%)",glow:"rgba(82,231,255,.25)",image:"img/Boovoid.png",imageCaption:"Mapa del Vacío de Boötes y las galaxias que rodean esta vasta región casi vacía (Atlas of the Universe).",gallery:[{src:"img/Bo-tes_Void.gif",caption:"Animación que ubica el Vacío de Boötes dentro de la estructura a gran escala del universo cercano."}],description:"El Vacío de Boötes es una de las regiones más vacías jamás descubiertas: una esfera de unos 330 millones de años luz de diámetro que contiene apenas 60 galaxias, cuando debería albergar más de 2.000 según la densidad promedio del universo. Cruzarlo significa navegar semanas sin una sola galaxia visible en el horizonte. Su origen sigue sin explicación definitiva: pudo formarse por la <mark>fusión de varios vacíos más pequeños</mark> durante miles de millones de años.",advice:"Carga las coordenadas de navegación ANTES de ingresar: no hay balizas galácticas de referencia dentro del vacío. Reserva combustible adicional para el tránsito, ya que no existen puntos de reabastecimiento en toda la región."},
      {id:"AN-10",name:"Agujeros Blancos Teóricos",subtitle:"Hipótesis del Reverso Temporal",level:2,classification:"SOLUCIÓN TEÓRICA // NO CONFIRMADA",distance:"Ruta no recomendada (existencia no confirmada)",impact:"Desconocido: no existe evidencia observacional de sus efectos sobre una nave.",gradient:"radial-gradient(circle,#fff 0%,#c7ddff 28%,#5f78ff 62%,#0a0f2e 100%)",glow:"rgba(255,255,255,.55)",image:"img/White_hole_artistic_recreation-bpk.jpg",imageCaption:"Recreación artística de un agujero blanco: el hipotético reverso temporal de un agujero negro, del que la materia y la luz solo pueden salir.",gallery:[{src:"img/Lorentzian_Wormhole.png",caption:"Diagrama de inmersión de un agujero de gusano de Lorentz: algunos modelos conectan un agujero negro y uno blanco como las dos bocas de una misma garganta."}],description:"Un agujero blanco es la solución inversa a las ecuaciones de Einstein que describen un agujero negro: en teoría, sería una región de la que la materia y la luz solo pueden salir, nunca entrar. Se le describe como el <mark>reverso temporal</mark> de un agujero negro, y algunos modelos —como los puentes de Einstein-Rosen— los conectan como las dos bocas de un mismo <mark>agujero de gusano</mark>. Ningún observatorio ha detectado jamás uno: son extremadamente inestables ante cualquier perturbación y colapsarían de inmediato.",advice:"Ruta de viaje NO recomendada: no existe evidencia observacional de su existencia. Cualquier itinerario que la incluya debe tratarse como puramente especulativo."},
      {id:"AN-11",name:"Materia y Energía Oscura",subtitle:"El Telón Invisible del Cosmos",level:2,classification:"COMPONENTE INVISIBLE DEL COSMOS",distance:"No aplica (no interactúa electromagnéticamente)",impact:"Ninguno detectado directamente; solo efectos gravitatorios indirectos sobre trayectorias de largo alcance.",gradient:"radial-gradient(circle,rgba(174,115,255,.55) 0%,#1c1236 55%,#050512 100%)",glow:"rgba(174,115,255,.5)",image:"img/Bullet_cluster.jpg",imageCaption:"El Cúmulo Bala: la primera evidencia observacional directa de materia oscura (Chandra, Hubble y Magallanes).",gallery:[{src:"img/COSMOS_3D_dark_matter_map.jpg",caption:"Mapa tridimensional de materia oscura del estudio COSMOS, construido con el Hubble."},{src:"img/Large-scale_structure_of_light_distribution_in_the_universe.jpg",caption:"La red cósmica: distribución de galaxias trazando los filamentos de materia oscura."}],description:"Cerca del 95% del universo está compuesto por materia y energía que no emiten, absorben ni reflejan luz. La <mark>materia oscura</mark> se infiere por su efecto gravitatorio sobre galaxias y cúmulos —incluyendo el fenómeno de <mark>lente gravitacional</mark>, donde su masa curva la luz de objetos distantes—, mientras que la <mark>energía oscura</mark> parece impulsar la expansión acelerada del universo. Ningún instrumento las ha detectado directamente: su existencia se deduce exclusivamente de sus efectos gravitatorios y cosmológicos.",advice:"No se detecta con sensores convencionales de a bordo. Los itinerarios turísticos que la incluyen se limitan a observar sus efectos indirectos sobre cúmulos galácticos distantes."},
      {id:"AN-12",name:"Tormentas Solares de Clase X",subtitle:"Erupciones Solares de Máxima Intensidad",level:1,classification:"ERUPCIÓN SOLAR (LLAMARADA CLASE X)",distance:"0,3 Unidades Astronómicas de la corona solar",impact:"Interferencia en comunicaciones y navegación; exposición moderada a radiación para tripulación sin blindaje.",gradient:"radial-gradient(circle at 40% 35%,#fff 0%,#ffe27a 20%,#ff9d1a 48%,#2a0d02 82%)",glow:"rgba(255,180,60,.6)",image:"img/NASA-s_SDO_Observes_an_X-class_Solar_Flare_-15562323166.jpg",imageCaption:"El Observatorio de Dinámica Solar de la NASA capta una llamarada de clase X.",gallery:[{src:"img/NASA-s_SDO_Shows_Images_of_Significant_Solar_Flare_-12771340933.jpg",caption:"Llamarada solar significativa observada por el SDO en febrero de 2014."},{src:"img/NASA-s_SDO_Observes_Largest_Sunspot_of_the_Solar_Cycle_-15430820129.jpg",caption:"La mancha solar más grande del ciclo solar, fuente frecuente de llamaradas de clase X."}],description:"Las llamaradas solares se clasifican por su intensidad de rayos X en clases A, B, C, M y X, siendo esta última la más potente: hasta diez veces más energética que una llamarada de clase M. Una <mark>eyección de masa coronal</mark> asociada a una llamarada X puede lanzar miles de millones de toneladas de plasma al espacio a millones de kilómetros por hora, generando tormentas geomagnéticas capaces de dañar satélites y redes eléctricas planetarias.",advice:"Programa las rutas de viaje evitando el máximo del ciclo solar de 11 años. Refugia a la tripulación en compartimentos blindados durante el tránsito de la eyección de masa coronal, que suele tardar de 1 a 3 días en llegar tras la llamarada."}
    ];
    function anomalyCard(a){const meta=riskMeta[a.level];return `<button class="anomaly-card" type="button" data-id="${a.id}" data-level="${a.level}" style="--card-accent:${meta.accent};--card-glow:${meta.glow}"><div class="anomaly-top"><span class="anomaly-id">${a.id}</span><span class="anomaly-distance">⚠ ${a.distance}</span></div><span class="anomaly-visual" aria-hidden="true" style="--anomaly-gradient:${a.gradient}"><img src="${a.image}" alt="" loading="lazy" onerror="this.onerror=null;this.closest('.anomaly-visual').classList.add('is-fallback');"></span><h3 class="anomaly-name">${a.name}</h3><p class="anomaly-subtitle">${a.subtitle}</p><span class="risk-badge risk-${a.level}" data-text="${meta.label}">${meta.label}</span><span class="anomaly-cta">ANALIZAR →</span></button>`}
    function renderAnomalies(){anomalyGrid.innerHTML=anomalies.map(anomalyCard).join("");anomalyGrid.querySelectorAll(".anomaly-card").forEach(card=>card.addEventListener("click",()=>openAnomalyModal(anomalies.find(({id})=>id===card.dataset.id))))}
    /* Visor del modal: `views` combina la imagen principal y la galería en una sola tira de miniaturas [01][02][03]. */
    function renderViewer(a,views,activeIndex){const view=views[activeIndex];anomalyPanel.viewerFrame.classList.remove("is-fallback");anomalyPanel.viewerImage.src=view.src;anomalyPanel.viewerImage.alt=`${a.name} — ${view.caption}`;const swapCaption=()=>{anomalyPanel.viewerCaption.textContent=view.caption};if(window.gsap){gsap.to(anomalyPanel.viewerImage,{opacity:0,duration:.16,onComplete:()=>{swapCaption();gsap.fromTo(anomalyPanel.viewerImage,{opacity:0},{opacity:1,duration:.32,ease:"power2.out"})}})}else swapCaption();anomalyPanel.thumbs.querySelectorAll(".viewer-thumb").forEach((thumb,i)=>thumb.classList.toggle("is-active",i===activeIndex))}
    function openAnomalyModal(a){const meta=riskMeta[a.level];anomalyPanel.code.textContent=`EXPEDIENTE // ${a.id}`;anomalyPanel.classification.textContent=a.classification;anomalyPanel.name.textContent=a.name;anomalyPanel.risk.textContent=meta.label;anomalyPanel.risk.className=`risk-${a.level}`;anomalyPanel.distance.textContent=a.distance;anomalyPanel.impact.textContent=a.impact;anomalyPanel.description.innerHTML=a.description;anomalyPanel.advice.textContent=a.advice;
      const views=[{src:a.image,caption:a.imageCaption},...a.gallery];
      anomalyPanel.thumbs.innerHTML=views.map((view,i)=>`<button class="viewer-thumb" type="button" data-index="${i}" aria-label="Ver imagen ${String(i+1).padStart(2,"0")}"><img src="${view.src}" alt="" loading="lazy" onerror="this.onerror=null;this.src='${a.image}';"><span>[ ${String(i+1).padStart(2,"0")} ]</span></button>`).join("");
      anomalyPanel.thumbs.querySelectorAll(".viewer-thumb").forEach(thumb=>thumb.addEventListener("click",()=>renderViewer(a,views,Number(thumb.dataset.index))));
      renderViewer(a,views,0);
      anomalyModal.showModal();if(window.gsap){gsap.fromTo(anomalyModal.querySelector(".anomaly-frame"),{y:26,opacity:0,scale:.97},{y:0,opacity:1,scale:1,duration:.45,ease:"power3.out"})}}
    renderAnomalies();
    function applyAnomalyFilter(filter){const cards=[...anomalyGrid.querySelectorAll(".anomaly-card")],matches=card=>{if(filter==="all")return true;if(filter==="theoretical")return card.dataset.level==="2";return card.dataset.level===filter};if(!window.gsap){cards.forEach(card=>{card.hidden=!matches(card)});return}gsap.to(cards,{autoAlpha:0,y:10,duration:.18,ease:"power1.in",onComplete:()=>{cards.forEach(card=>{card.hidden=!matches(card)});const visible=cards.filter(card=>!card.hidden);gsap.fromTo(visible,{autoAlpha:0,y:16},{autoAlpha:1,y:0,duration:.42,stagger:.06,ease:"power2.out"})}})}
    document.querySelectorAll(".anomaly-tools .filter-button").forEach(button=>button.addEventListener("click",()=>{document.querySelector(".anomaly-tools .filter-button.is-selected").classList.remove("is-selected");button.classList.add("is-selected");applyAnomalyFilter(button.dataset.anomalyFilter)}));
    document.querySelector("#anomaly-close").addEventListener("click",()=>anomalyModal.close());document.querySelector("#anomaly-close-footer").addEventListener("click",()=>anomalyModal.close());anomalyModal.addEventListener("click",event=>{if(event.target===anomalyModal)anomalyModal.close()});
    /* Calculadora Biométrica y Fisiología Espacial: P=m·g/g_tierra, edad planetaria=edad_dias/periodo_del_cuerpo, salto=salto_tierra·(g_tierra/g_destino). */
    const G_EARTH=9.81,AVG_JUMP_M=.4;
    const celestialBodies=[
      {id:"luna",name:"La Luna",gravity:1.62,periodDays:27.32,periodLabel:"CICLOS LUNARES",risk:"atrofia",group:"solar",suit:["Traje Presurizado EVA Serie A7L","Visera Anti-Deslumbramiento Solar","Botas Térmicas (rango ±150 °C día/noche)"]},
      {id:"venus",name:"Venus",gravity:8.87,periodDays:224.7,periodLabel:"AÑOS VENUSIANOS",risk:"optimo",group:"solar",suit:["Traje Blindado Anticorrosión (lluvia de ácido sulfúrico)","Sistema de Refrigeración Activa (462 °C en superficie)","Casco Presurizado Reforzado (92 atm)"]},
      {id:"marte",name:"Marte",gravity:3.71,periodDays:686.98,periodLabel:"AÑOS MARCIANOS",risk:"atrofia-leve",group:"solar",suit:["Traje Presurizado Rad-Shield II","Calefactor Térmico Activo","Filtro Respiratorio de CO₂"]},
      {id:"titan",name:"Titán",gravity:1.35,periodDays:15.945,periodLabel:"ÓRBITAS DE TITÁN",risk:"atrofia",group:"solar",suit:["Traje Térmico Criogénico (−179 °C)","Tanque de Oxígeno Autónomo","Botas de Anclaje (baja gravedad)"]},
      {id:"jupiter",name:"Júpiter",gravity:24.79,periodDays:4332.59,periodLabel:"AÑOS JOVIANOS",risk:"alto",group:"solar",suit:["Exo-traje Reforzado Anticompresión","Blindaje contra Radiación Extrema","Advertencia: sin superficie sólida donde posarse"]},
      {id:"proxima-b",name:"Proxima Centauri b",gravity:8.7,periodDays:11.19,periodLabel:"AÑOS DE PROXIMA B",risk:"optimo",group:"exo",estimated:true,estimateNote:"Gravedad ESTIMADA: solo se conoce su masa mínima (radial velocity); el radio real —y por tanto la gravedad exacta— no está confirmado.",fact:"Orbita en la zona habitable de Proxima Centauri, la estrella más cercana al Sol, a solo 4,24 años luz de distancia.",suit:["Traje Presurizado Rad-Shield IV (fulguraciones estelares)","Escudo UV Reforzado","Sistema de Soporte Vital Autónomo"]},
      {id:"51pegb",name:"51 Pegasi b",gravity:8,periodDays:4.23,periodLabel:"ÓRBITAS DE 51 PEGASI B",risk:"optimo",group:"exo",estimated:true,estimateNote:"Gravedad ESTIMADA a partir de su masa mínima y un radio modelado: no es una medición directa, ya que no transita frente a su estrella.",fact:"Fue el primer exoplaneta confirmado orbitando una estrella similar al Sol, descubierto en 1995 (Premio Nobel de Física 2019).",suit:["Traje Ignífugo de Alta Temperatura","Blindaje Térmico Total","Advertencia: gigante gaseoso sin superficie"]},
      {id:"wasp12b",name:"WASP-12b",gravity:9.6,periodDays:1.09,periodLabel:"ÓRBITAS DE WASP-12B",risk:"optimo",group:"exo",estimated:true,estimateNote:"Gravedad ESTIMADA a partir de la masa y el radio medidos por tránsito y velocidad radial.",fact:"Está tan cerca de su estrella que esta lo está devorando lentamente: las mareas lo deforman en un óvalo.",suit:["Traje Ignífugo Extremo","Blindaje contra Mareas Gravitacionales","Advertencia: planeta en desintegración activa"]},
      {id:"kelt9b",name:"KELT-9b",gravity:20,periodDays:1.48,periodLabel:"ÓRBITAS DE KELT-9B",risk:"alto",group:"exo",estimated:true,estimateNote:"Gravedad ESTIMADA a partir de la masa y el radio medidos por tránsito y velocidad radial.",fact:"Es el exoplaneta más caliente conocido: su lado diurno alcanza 4.300 °C, más caliente que muchas estrellas.",suit:["Traje Anti-Calor Extremo (4.300 °C)","Blindaje Térmico de Nueva Generación","Advertencia: temperatura de superficie estelar"]},
      {id:"hd189733b",name:"HD 189733 b",gravity:21.9,periodDays:2.22,periodLabel:"ÓRBITAS DE HD 189733 B",risk:"alto",group:"exo",estimated:true,estimateNote:"Gravedad ESTIMADA a partir de la masa y el radio medidos por tránsito y velocidad radial.",fact:"Sus vientos de más de 8.000 km/h arrastran lluvia de vidrio fundido, lo que le da un intenso color azul.",suit:["Traje Anti-Impacto (lluvia de vidrio fundido)","Blindaje Balístico Reforzado","Visera Anti-Abrasión"]},
      {id:"neutron",name:"Estrella de Neutrones",gravity:1.9e12,periodDays:.33/86400,periodLabel:"ROTACIONES DEL PÚLSAR",risk:"letal",group:"extreme",suit:["NINGÚN TRAJE VIABLE","Espaguetización gravitatoria inevitable","Protocolo: NO APROXIMARSE"]}
    ];
    const bioRiskMeta={
      optimo:{cls:"risk-inofensivo",label:"RIESGO: BAJO // FISIOLOGÍA COMPATIBLE",text:"Gravedad cercana a la terrestre. Aclimatación mínima requerida para el sistema musculoesquelético."},
      "atrofia-leve":{cls:"risk-extremo",label:"RIESGO: ATROFIA MUSCULAR LEVE",text:"Gravedad por debajo de 1G: se recomienda ejercicio de resistencia diario para mitigar la pérdida de densidad ósea."},
      atrofia:{cls:"risk-extremo",label:"RIESGO: ATROFIA MUSCULAR Y ÓSEA",text:"Gravedad reducida sostenida: pérdida acelerada de densidad ósea y masa muscular. Rutina de contramedidas y traje de soporte obligatorios."},
      alto:{cls:"risk-critico",label:"RIESGO: ALTO // TRAJE DE COMPRESIÓN",text:"Gravedad elevada: sobrecarga cardiovascular y articular. Traje de compresión y monitoreo cardíaco obligatorios."},
      letal:{cls:"risk-critico risk-blink",label:"RIESGO: LETAL // ESPAGUETIZACIÓN INSTANTÁNEA",text:"Gravedad miles de millones de veces superior a la terrestre. Ninguna estructura molecular conocida sobrevive al descenso: traje presurizado inútil."}
    };
    let selectedBodyId="marte";
    const bioEls={weight:document.querySelector("#bio-weight"),weightSlider:document.querySelector("#bio-weight-slider"),age:document.querySelector("#bio-age"),ageSlider:document.querySelector("#bio-age-slider"),bodyGrid:document.querySelector("#bio-body-grid"),gravityValue:document.querySelector("#bio-gravity-value"),gravityBar:document.querySelector("#bio-gravity-bar"),gravityFill:document.querySelector("#bio-gravity-fill"),metrics:document.querySelector("#bio-metrics"),riskCard:document.querySelector("#bio-risk-card"),riskLabel:document.querySelector("#bio-risk-label"),riskText:document.querySelector("#bio-risk-text"),simJumpValue:document.querySelector("#bio-sim-jump-value"),simForce:document.querySelector("#bio-sim-force"),simAgeText:document.querySelector("#bio-sim-age-text"),simSuitList:document.querySelector("#bio-sim-suit-list")};
    function bioForceSensation(effectiveWeight,ratio){
      const w=formatBioNumber(effectiveWeight);
      if(ratio<=.05)return`Prácticamente ingrávido: tu cuerpo se siente de apenas ${w} kg. Flotarías con el más mínimo impulso.`;
      if(ratio<.3)return`Tu cuerpo se siente de ${w} kg: podrías saltar sobre un módulo de aterrizaje de un solo impulso.`;
      if(ratio<.9)return`Tu cuerpo se siente de ${w} kg: cada movimiento es notablemente más ligero que en la Tierra.`;
      if(ratio<1.3)return`Tu cuerpo se siente de ${w} kg: una sensación de peso casi idéntica a la terrestre.`;
      if(ratio<3)return`Tu cuerpo se siente de ${w} kg: cada paso pesa como cargar una mochila llena todo el tiempo.`;
      if(ratio<1e6)return`Tu cuerpo se siente de ${w} kg: apenas podrías levantar un brazo sin asistencia mecánica.`;
      return`Fuerza de marea instantánea: tu cuerpo se estiraría hasta la espaguetización antes de sentir el peso.`;
    }
    function updateBiometricSimulator(planetData,earthAge){
      const ratio=planetData.gravity/G_EARTH,weight=Number(bioEls.weight.value)||0,jumpHeight=AVG_JUMP_M*(G_EARTH/planetData.gravity),planetaryAge=earthAge*365.25/planetData.periodDays;
      bioEls.simJumpValue.textContent=`${formatBioNumber(jumpHeight)} m`;
      bioEls.simForce.textContent=bioForceSensation(weight*ratio,ratio);
      bioEls.simAgeText.textContent=`Si hubieras nacido en ${planetData.name}, hoy tendrías `+`${formatBioNumber(planetaryAge)} ${planetData.periodLabel.toLowerCase()} cumplidos, en lugar de tus ${formatBioNumber(earthAge)} años terrestres.`;
      bioEls.simSuitList.innerHTML=(planetData.suit||["Traje de Vuelo Estándar"]).map(item=>`<li>${item}</li>`).join("");
    }
    function bioSuperscript(n){const map={"-":"⁻",0:"⁰",1:"¹",2:"²",3:"³",4:"⁴",5:"⁵",6:"⁶",7:"⁷",8:"⁸",9:"⁹"};return String(n).split("").map(c=>map[c]||c).join("")}
    function formatBioNumber(n){if(!isFinite(n))return"—";const abs=Math.abs(n);if(abs!==0&&(abs>=1e6||abs<.001)){const exp=Math.floor(Math.log10(abs)),mant=n/Math.pow(10,exp);return`${mant.toFixed(2)} × 10${bioSuperscript(exp)}`}const decimals=abs<10?2:abs<1000?1:0;return n.toLocaleString("es-ES",{minimumFractionDigits:decimals,maximumFractionDigits:decimals})}
    const bioGroupLabels={solar:"SISTEMA SOLAR",exo:"EXOPLANETAS // FUERA DEL SISTEMA SOLAR",extreme:"OBJETOS EXTREMOS"};
    const bioGroupTags={exo:"EXOPLANETA",extreme:"OBJETO EXTREMO"};
    function bioBodyCard(b,active){const ratio=b.gravity/G_EARTH,tagText=bioGroupTags[b.group],tag=tagText?`<span class="bio-body-tag bio-body-tag-${b.group}">${tagText}</span>`:"",est=b.estimated?"≈ ":"",title=b.estimateNote?` title="${b.estimateNote}"`:"";return`<button class="bio-body-btn${active?" is-selected":""}" type="button" data-body="${b.id}"${title}>${tag}<strong>${b.name}</strong><span>${est}${formatBioNumber(ratio)} G${b.estimated?" (est.)":""}</span></button>`}
    function renderBioBodyGrid(){const groups=["solar","exo","extreme"];bioEls.bodyGrid.innerHTML=groups.map(g=>{const bodies=celestialBodies.filter(b=>b.group===g);return bodies.length?`<span class="bio-group-label">${bioGroupLabels[g]}</span>${bodies.map(b=>bioBodyCard(b,b.id===selectedBodyId)).join("")}`:""}).join("");bioEls.bodyGrid.querySelectorAll(".bio-body-btn").forEach(btn=>btn.addEventListener("click",()=>{selectedBodyId=btn.dataset.body;bioEls.bodyGrid.querySelectorAll(".bio-body-btn").forEach(b=>b.classList.remove("is-selected"));btn.classList.add("is-selected");updateBiometrics()}))}
    function updateBiometrics(){
      const weight=Number(bioEls.weight.value)||0,age=Number(bioEls.age.value)||0,body=celestialBodies.find(b=>b.id===selectedBodyId),ratio=body.gravity/G_EARTH,equivalentWeight=weight*ratio,planetaryAge=age*365.25/body.periodDays,jumpHeight=AVG_JUMP_M*(G_EARTH/body.gravity);
      bioEls.gravityValue.textContent=`${formatBioNumber(ratio)} G`;
      bioEls.gravityFill.style.width=`${Math.min(ratio/3,1)*100}%`;
      bioEls.gravityBar.classList.toggle("is-overload",ratio>3);
      bioEls.metrics.innerHTML=`<div class="bio-metric"><span>PESO EQUIVALENTE</span><strong>${formatBioNumber(equivalentWeight)}</strong><small>kg-fuerza en ${body.name}</small></div><div class="bio-metric"><span>EDAD PLANETARIA</span><strong>${formatBioNumber(planetaryAge)}</strong><small>${body.periodLabel}</small></div><div class="bio-metric"><span>SALTO VERTICAL ESTIMADO</span><strong>${formatBioNumber(jumpHeight)}</strong><small>metros de altura</small></div>`;
      const risk=bioRiskMeta[body.risk];
      bioEls.riskCard.className=`bio-risk-card ${risk.cls}`;
      bioEls.riskLabel.textContent=risk.label;
      bioEls.riskText.textContent=risk.text;
      updateBiometricSimulator(body,age);
    }
    function bioClamp(input){return Math.min(Number(input.max),Math.max(Number(input.min),Number(input.value)||0))}
    function bioSyncPair(numberEl,sliderEl){numberEl.addEventListener("input",()=>{const v=bioClamp(numberEl);sliderEl.value=v;updateBiometrics()});numberEl.addEventListener("blur",()=>{numberEl.value=bioClamp(numberEl)});sliderEl.addEventListener("input",()=>{numberEl.value=sliderEl.value;updateBiometrics()})}
    renderBioBodyGrid();
    bioSyncPair(bioEls.weight,bioEls.weightSlider);
    bioSyncPair(bioEls.age,bioEls.ageSlider);
    document.querySelectorAll(".bio-step").forEach(btn=>btn.addEventListener("click",()=>{const targetId=btn.dataset.target==="age"?"age":"weight",input=document.querySelector(`#bio-${targetId}`),slider=document.querySelector(`#bio-${targetId}-slider`),next=Math.min(Number(input.max),Math.max(Number(input.min),Number(input.value)+Number(btn.dataset.step)));input.value=next;slider.value=next;updateBiometrics()}));
    updateBiometrics();
    /* Rastreador de Satélites: 15 naves distribuidas en 4 anillos LEO/MEO/GEO/HEO, animación orbital continua vía CSS y ficha de telemetría al hacer clic. */
    const satellites=[
      {id:"iss",name:"Estación Espacial Internacional (EEI / ISS)",orbit:"leo",angle:10,duration:16,altitude:"≈ 408 km",velocity:"≈ 27.600 km/h",agency:"NASA · Roscosmos · ESA · JAXA · CSA",mission:"Investigación científica",image:"img/International_Space_Station.jpg",summary:"Laboratorio orbital habitado de forma permanente desde el año 2000, donde tripulaciones internacionales realizan experimentos en microgravedad.",fact:"Completa una vuelta a la Tierra cada 90 minutos: su tripulación ve 16 amaneceres por día."},
      {id:"hubble",name:"Telescopio Espacial Hubble",orbit:"leo",type:"a",angle:70,duration:19,altitude:"≈ 535 km",velocity:"≈ 27.300 km/h",agency:"NASA · ESA",mission:"Investigación científica",image:"img/Hubble_telescope_2009.jpg",summary:"Observatorio óptico en órbita terrestre que desde 1990 ha capturado algunas de las imágenes más profundas del cosmos.",fact:"Ha realizado más de 1,5 millones de observaciones de más de 50.000 objetos astronómicos."},
      {id:"starlink-alpha",name:"Starlink Alpha",orbit:"leo",type:"b",angle:130,duration:15,altitude:"≈ 550 km",velocity:"≈ 27.000 km/h",agency:"SpaceX",mission:"Telecomunicaciones",image:"img/Starlink_01.webp",summary:"Nodo de la megaconstelación de internet satelital de SpaceX, la red de banda ancha más grande jamás desplegada en órbita baja.",fact:"Starlink ya suma miles de satélites activos y agrega decenas más cada semana mediante lanzamientos reutilizables Falcon 9."},
      {id:"starlink-beta",name:"Starlink Beta",orbit:"leo",type:"b",angle:190,duration:17,altitude:"≈ 550 km",velocity:"≈ 27.000 km/h",agency:"SpaceX",mission:"Telecomunicaciones",image:"img/Starlink_6_satellites.jpg",summary:"Segundo plano orbital de la constelación Starlink, desplegado en formación para maximizar la cobertura de banda ancha global.",fact:"Cada satélite se posiciona con propulsores de kriptón y se desorbita por sí solo al final de su vida útil."},
      {id:"tiangong",name:"Estación Espacial Tiangong",orbit:"leo",type:"a",angle:250,duration:18,altitude:"≈ 389 km",velocity:"≈ 27.600 km/h",agency:"CMSA (Agencia Espacial Tripulada de China)",mission:"Estación habitada",image:"img/Chinese_Tiangong_Space_Station.jpg",summary:"Estación espacial modular china operativa desde 2021, con capacidad para alojar de forma permanente a tres taikonautas.",fact:"Su módulo núcleo, Tianhe, fue el primer componente lanzado y sirve de centro de mando y acoplamiento de la estación."},
      {id:"landsat9",name:"Satélite de Observación Landsat-9",orbit:"leo",type:"c",angle:310,duration:20,altitude:"≈ 705 km",velocity:"≈ 27.000 km/h",agency:"NASA · USGS",mission:"Observación de la Tierra",image:"img/Landsat_9_spacecraft_model_1.png",summary:"Continúa el programa Landsat, el registro continuo más largo de imágenes satelitales de la superficie terrestre.",fact:"Captura imágenes de toda la superficie terrestre cada 16 días con una precisión de hasta 15 metros."},
      {id:"gps",name:"Satélite de Navegación GPS IIIF",orbit:"meo",type:"b",angle:20,duration:30,altitude:"≈ 20.200 km",velocity:"≈ 14.000 km/h",agency:"Fuerza Espacial de EE. UU.",mission:"Navegación",image:"img/GPS_Satellite_NASA_art-iif.jpg",summary:"Próxima generación del sistema GPS, con señales de posicionamiento más precisas y resistentes a interferencias.",fact:"Sus relojes atómicos de a bordo pierden menos de un segundo cada 3 millones de años."},
      {id:"glonass",name:"GLONASS-M",orbit:"meo",type:"b",angle:110,duration:32,altitude:"≈ 19.100 km",velocity:"≈ 14.000 km/h",agency:"Roscosmos",mission:"Navegación",image:"img/Glonass_K_model_at_Cebit_2011_Satellite-_sideview_1.jpg",summary:"Sistema de navegación satelital ruso equivalente al GPS, con cobertura global continua desde 2011.",fact:"Requiere una constelación de 24 satélites en tres planos orbitales para garantizar cobertura mundial permanente."},
      {id:"galileo",name:"Galileo SAT",orbit:"meo",type:"b",angle:200,duration:29,altitude:"≈ 23.222 km",velocity:"≈ 13.600 km/h",agency:"ESA · Comisión Europea",mission:"Navegación",image:"img/Galileo_spacecraft_model.png",summary:"Sistema de navegación satelital civil europeo, independiente del GPS estadounidense y el GLONASS ruso.",fact:"Ofrece una precisión de posicionamiento de hasta 1 metro para usuarios autorizados, superando a otros sistemas civiles."},
      {id:"molniya",name:"Molniya-3",orbit:"meo",type:"c",angle:290,duration:34,altitude:"≈ 600 – 39.900 km (órbita muy elíptica)",velocity:"variable según altitud",agency:"Roscosmos (herencia soviética)",mission:"Telecomunicaciones",image:"img/Molniya-1_satellite.jpg",summary:"Satélite de comunicaciones en la clásica órbita Molniya, diseñada para dar cobertura prolongada a latitudes altas rusas.",fact:"Su órbita muy elíptica hace que pase la mayor parte del tiempo sobre el hemisferio norte: ideal para cubrir Siberia y el Ártico."},
      {id:"goes16",name:"Satélite Meteorológico GOES-16",orbit:"geo",type:"c",angle:30,duration:42,altitude:"≈ 35.786 km",velocity:"≈ 11.070 km/h",agency:"NOAA · NASA",mission:"Clima",image:"img/GOES_3_artist_rendering.jpg",summary:"Satélite meteorológico geoestacionario que vigila huracanes, tormentas y el clima espacial sobre el continente americano.",fact:"Permanece fijo sobre el mismo punto del ecuador porque su periodo orbital iguala la rotación terrestre: 24 horas."},
      {id:"inmarsat6",name:"Inmarsat-6 F1",orbit:"geo",type:"b",angle:150,duration:44,altitude:"≈ 35.786 km",velocity:"≈ 11.070 km/h",agency:"Inmarsat",mission:"Telecomunicaciones",image:"img/Inmarsat-3_crop.jpg",summary:"Primer satélite de doble carga útil de Inmarsat, combinando banda L y banda Ka para telecomunicaciones marítimas y aéreas.",fact:"Fue construido sobre la plataforma Eurostar 3000EOR de Airbus y lanzado en diciembre de 2021."},
      {id:"meteosat11",name:"Meteosat-11",orbit:"geo",type:"c",angle:270,duration:40,altitude:"≈ 35.786 km",velocity:"≈ 11.070 km/h",agency:"EUMETSAT · ESA",mission:"Clima",image:"img/Meteosat_Third_Generation_ESA418057.jpg",summary:"Satélite meteorológico geoestacionario europeo que fotografía el hemisferio boreal cada 15 minutos para pronósticos del clima.",fact:"Forma parte del programa Meteosat de EUMETSAT, en operación continua desde 1977 sin interrupciones en la cobertura."},
      {id:"jwst",name:"Telescopio Espacial James Webb (JWST)",orbit:"heo",type:"a",angle:45,duration:60,altitude:"≈ 1.500.000 km (punto de Lagrange L2)",velocity:"≈ 3.700 km/h (órbita halo)",agency:"NASA · ESA · CSA",mission:"Investigación científica",image:"img/JWST_spacecraft_model_1.png",summary:"El observatorio infrarrojo más grande jamás construido, ubicado en el punto de Lagrange L2 para observar el universo primitivo.",fact:"Su espejo principal segmentado mide 6,5 metros de diámetro: el más grande jamás lanzado al espacio.",
        gallery:[
          {src:"img/JWST_spacecraft_model_1.png",caption:"El observatorio con su espejo segmentado y el parasol desplegados"},
          {src:"img/Webb-s_First_Deep_Field_-adjusted.jpg",caption:"Su primer campo profundo: miles de galaxias en un fragmento diminuto de cielo"},
          {src:"img/STScI-Uranus-NIRCam.png",caption:"Urano y sus anillos captados por su cámara infrarroja NIRCam"}
        ]},
      {id:"lro",name:"Lunar Reconnaissance Orbiter (LRO)",orbit:"heo",type:"c",angle:225,duration:56,altitude:"≈ 384.400 km (órbita lunar)",velocity:"≈ 5.760 km/h (en torno a la Luna)",agency:"NASA",mission:"Cartografía y reconocimiento lunar",image:"img/Lunar_Reconnaissance_Orbiter_spacecraft_model_1.png",summary:"Sonda en órbita lunar que ha cartografiado la Luna con más detalle que ninguna otra misión, a solo 50 km de altitud sobre su superficie.",fact:"Ha detectado evidencia de hielo de agua en cráteres permanentemente sombreados cerca de los polos lunares.",
        gallery:[
          {src:"img/Lunar_Reconnaissance_Orbiter_spacecraft_model_1.png",caption:"La sonda que cartografía la Luna sin interrupción desde 2009"},
          {src:"img/FullMoon2010.jpg",caption:"La cara visible de la Luna, el terreno que lleva más de una década midiendo"}
        ]}
    ];
    const satOrbitLabels={leo:"LEO // ÓRBITA BAJA",meo:"MEO // ÓRBITA MEDIA",geo:"GEO // ÓRBITA GEOESTACIONARIA",heo:"HEO // ESPACIO PROFUNDO"};
    const satStage=document.querySelector("#sat-stage"),satelliteModal=document.querySelector("#satellite-modal");
    const satEls={code:document.querySelector("#satellite-code"),agency:document.querySelector("#satellite-agency"),name:document.querySelector("#satellite-name"),summary:document.querySelector("#satellite-summary"),altitude:document.querySelector("#satellite-altitude"),velocity:document.querySelector("#satellite-velocity"),mission:document.querySelector("#satellite-mission"),fact:document.querySelector("#satellite-fact"),visual:document.querySelector("#satellite-visual"),visualImg:document.querySelector("#satellite-visual-img"),orbitTag:document.querySelector("#satellite-orbit-tag")};
    const SAT_NODE_ICON="img/Communications_satellite_with_TEMPO_spacecraft_model-2.png",ISS_NODE_ICON="img/ISS_spacecraft_model_1.png";
    const SAT_TYPE_ICONS={a:"img/Hubble_Space_Telescope_spacecraft_model.png",b:SAT_NODE_ICON,c:"img/Landsat_9_spacecraft_model_1-2.png"};
    function satelliteMarkup(sat){const isIss=sat.id==="iss",nodeClass=isIss?"satellite-node iss-node":`satellite-node sat-type-${sat.type}`,nodeIcon=isIss?ISS_NODE_ICON:SAT_TYPE_ICONS[sat.type];return`<div class="sat-orbit-anchor orbit-${sat.orbit}" style="--sat-duration:${sat.duration}s;transform:rotate(${sat.angle}deg)"><div class="sat-orbit-spin"><div class="satellite-pos"><button class="${nodeClass}" type="button" data-id="${sat.id}" aria-haspopup="dialog" aria-label="Ver telemetría de ${sat.name}"><img src="${nodeIcon}" alt="" loading="lazy" onerror="this.onerror=null;"></button></div></div></div>`}
    function openSatelliteModal(sat){satEls.code.textContent=`ENLACE // ${sat.id.toUpperCase()}`;satEls.agency.textContent=sat.agency.toUpperCase();satEls.name.textContent=sat.name;satEls.summary.textContent=sat.summary;satEls.altitude.textContent=sat.altitude;satEls.velocity.textContent=sat.velocity;satEls.mission.textContent=sat.mission;satEls.fact.textContent=sat.fact;satEls.visualImg.src=sat.image;satEls.visualImg.alt=sat.name;satEls.orbitTag.textContent=satOrbitLabels[sat.orbit];/* La última órbita es la que concede la medalla: se viste de oro y estrena galería. */const esHeo=sat.orbit==="heo";vestirPremium(satelliteModal.querySelector(".satellite-frame"),esHeo);pintarGaleria(document.getElementById("satellite-gallery"),document.getElementById("satellite-caption"),esHeo?sat.gallery:null,vista=>{satEls.visualImg.src=vista.src;satEls.visualImg.alt=`${sat.name} — ${vista.caption}`;});satelliteModal.showModal();if(window.gsap){gsap.fromTo(satelliteModal.querySelector(".satellite-frame"),{y:26,opacity:0,scale:.97},{y:0,opacity:1,scale:1,duration:.45,ease:"power3.out"})}}
    function renderSatellites(){satStage.insertAdjacentHTML("beforeend",satellites.map(satelliteMarkup).join(""));satStage.querySelectorAll(".satellite-node").forEach(btn=>{const sat=satellites.find(s=>s.id===btn.dataset.id),anchor=btn.closest(".sat-orbit-anchor"),ring=satStage.querySelector(`.ring-${sat.orbit}`),pause=()=>{anchor.classList.add("is-paused");ring.classList.add("is-highlighted")},resume=()=>{anchor.classList.remove("is-paused");ring.classList.remove("is-highlighted")};btn.addEventListener("mouseenter",pause);btn.addEventListener("mouseleave",resume);btn.addEventListener("focus",pause);btn.addEventListener("blur",resume);btn.addEventListener("click",()=>openSatelliteModal(sat))})}
    renderSatellites();
    document.querySelector("#satellite-close").addEventListener("click",()=>satelliteModal.close());document.querySelector("#satellite-close-footer").addEventListener("click",()=>satelliteModal.close());satelliteModal.addEventListener("click",event=>{if(event.target===satelliteModal)satelliteModal.close()});
    (()=>{
      const AU=1.496e8,LY=9.4607e12,EARTH_DIAMETER_KM=12742;
      const cosmicScales=[
        {name:"Deimos",classification:"Luna Irregular de Marte",tier:"planetario",diameterKm:12.4,diameterLabel:"≈ 12,4 km de diámetro medio",fact:"Es tan pequeña y su gravedad tan débil que un salto humano casi bastaría para escapar de su superficie.",image:"img/NASA-Deimos-MarsMoon-20090221.jpg"},
        {name:"Ceres",classification:"Planeta Enano (Cinturón de Asteroides)",tier:"planetario",diameterKm:946,diameterLabel:"≈ 946 km de diámetro",fact:"Es el objeto más grande del cinturón de asteroides: contiene cerca de un tercio de toda su masa.",image:"img/PIA19562-Ceres-DwarfPlanet-Dawn-RC3-image19-20150506.jpg"},
        {name:"Plutón",classification:"Planeta Enano (Cinturón de Kuiper)",tier:"planetario",diameterKm:2377,diameterLabel:"≈ 2.377 km de diámetro",fact:"Es más pequeño que la Luna terrestre, pero tiene cinco lunas propias, incluida Caronte.",image:"img/Pluto_in_True_Color_-_High-Res-2.jpg"},
        {name:"La Luna",classification:"Satélite Natural de la Tierra",tier:"planetario",diameterKm:3474,diameterLabel:"≈ 3.474 km de diámetro",fact:"Se aleja de la Tierra 3,8 cm cada año, casi la misma velocidad a la que crecen las uñas humanas.",image:"img/FullMoon2010.jpg"},
        {name:"Mercurio",classification:"Planeta Rocoso Interior",tier:"planetario",diameterKm:4879,diameterLabel:"≈ 4.879 km de diámetro",fact:"Pese a ser el planeta más cercano al Sol, no es el más caliente: ese récord lo tiene Venus.",image:"img/Mercury_in_true_color.jpg"},
        {name:"La Tierra",classification:"Planeta Rocoso Habitable",tier:"planetario",diameterKm:12742,diameterLabel:"≈ 12.742 km de diámetro",fact:"Es el único planeta conocido con placas tectónicas activas y agua líquida estable en su superficie.",image:"img/The_Earth_seen_from_Apollo_17.jpg"},
        {name:"Júpiter",classification:"Gigante Gaseoso",tier:"planetario",diameterKm:139820,diameterLabel:"≈ 139.820 km de diámetro",fact:"Cabrían más de 1.300 planetas Tierra dentro de su volumen total.",image:"img/Jupiter_and_its_shrunken_Great_Red_Spot.jpg"},
        {name:"El Sol",classification:"Estrella Enana Amarilla (Tipo G2V)",tier:"estelar",diameterKm:1392700,diameterLabel:"≈ 1.392.700 km de diámetro",fact:"Cabrían 1.300.000 Tierras dentro del Sol.",image:"img/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA-s_Solar_Dynamics_Observatory_-_2010081.jpg"},
        {name:"Sirio A",classification:"Estrella de Secuencia Principal (Tipo A1V)",tier:"estelar",diameterKm:2380000,diameterLabel:"≈ 2,38 millones de km de diámetro (1,7 soles)",fact:"Es la estrella más brillante del cielo nocturno, casi el doble de masiva que el Sol.",image:"img/Sirius_A_and_B_Hubble_photo.jpg"},
        {name:"Pollux",classification:"Gigante Naranja (Tipo K0III)",tier:"estelar",diameterKm:12600000,diameterLabel:"≈ 12,6 millones de km de diámetro (9 soles)",fact:"Es la estrella más brillante de la constelación de Géminis y alberga un exoplaneta confirmado.",image:"img/Pollux-Star.jpg"},
        {name:"Betelgeuse",classification:"Estrella Supergigante Roja",tier:"estelar",diameterKm:7.1*AU,diameterLabel:"≈ 7,1 UA de diámetro (~1.060 millones de km)",fact:"Si reemplazara al Sol, su superficie se extendería más allá de la órbita de Júpiter.",image:"img/Image_of_Betelgeuse-s_surface_taken_in_January_2020_-eso2109d.jpg"},
        {name:"UY Scuti",classification:"Estrella Hipergigante Amarilla",tier:"estelar",diameterKm:15.9*AU,diameterLabel:"≈ 15,9 UA de diámetro (~2.380 millones de km)",fact:"Una de las estrellas más grandes conocidas: la luz tardaría más de 8 horas en rodear su circunferencia.",image:"img/UY_Scuti_compared_to_sun.png"},
        {name:"Órbita de Neptuno",classification:"Límite Orbital del Sistema Solar Clásico",tier:"galactico",diameterKm:60.2*AU,diameterLabel:"≈ 60,2 UA de diámetro (~9.000 millones de km)",fact:"La luz del Sol tarda más de 4 horas en llegar hasta Neptuno.",image:"img/Neptune_Voyager2_color_calibrated.png"},
        {name:"Nube de Oort",classification:"Envoltura Cometaria del Sistema Solar",tier:"galactico",diameterKm:3.2*LY,diameterLabel:"≈ 3,2 años luz de diámetro (~200.000 UA)",fact:"Marca el límite gravitacional del Sol: más allá, empieza a dominar la gravedad de otras estrellas.",image:"img/Oort_cloud_lrg-es.png"},
        {name:"Nebulosa de Orión",classification:"Región de Formación Estelar (Nebulosa Difusa)",tier:"galactico",diameterKm:24*LY,diameterLabel:"≈ 24 años luz de diámetro",fact:"Es el vivero estelar más cercano a la Tierra, visible a simple vista en la espada de Orión.",image:"img/Orion_Nebula_-_Hubble_2006_mosaic_edit.jpg"},
        {name:"Gran Nube de Magallanes",classification:"Galaxia Enana Irregular (Satélite de la Vía Láctea)",tier:"galactico",diameterKm:14000*LY,diameterLabel:"≈ 14.000 años luz de diámetro",fact:"Orbita la Vía Láctea y solo es visible a simple vista desde el hemisferio sur.",image:"img/Magellanic_Clouds_-_Irregular_Dwarf_Galaxies.jpg"},
        {name:"Vía Láctea",classification:"Galaxia Espiral Barrada",tier:"galactico",diameterKm:105700*LY,diameterLabel:"≈ 105.700 años luz de diámetro",fact:"Contiene entre 100.000 y 400.000 millones de estrellas; el Sol tarda 230 millones de años en orbitar su centro.",image:"img/Artist-s_impression_of_the_Milky_Way_-eso1339g.jpg"},
        {name:"Galaxia de Andrómeda",classification:"Galaxia Espiral (Vecina Mayor)",tier:"galactico",diameterKm:220000*LY,diameterLabel:"≈ 220.000 años luz de diámetro",fact:"Se acerca a la Vía Láctea a 110 km/s: colisionarán en unos 4.500 millones de años.",image:"img/Andromeda_Galaxy_M31_-_Heic1502a_Full_resolution.jpg"},
        {name:"IC 1101",classification:"Galaxia Elíptica Supergigante",tier:"galactico",diameterKm:4000000*LY,diameterLabel:"≈ 4.000.000 de años luz de diámetro",fact:"Es una de las galaxias más grandes jamás descubiertas: unas 40 veces más ancha que la Vía Láctea.",image:"img/IC_1101.jpg"},
        {name:"Grupo Local",classification:"Agrupación de Galaxias",tier:"galactico",diameterKm:10000000*LY,diameterLabel:"≈ 10.000.000 de años luz de diámetro",fact:"Reúne más de 80 galaxias, dominado por la Vía Láctea y Andrómeda.",image:"img/Local_Group_and_nearest_galaxies.jpg"},
        {name:"Supercúmulo de Laniakea",classification:"Supercúmulo de Galaxias",tier:"cosmico",diameterKm:520000000*LY,diameterLabel:"≈ 520.000.000 de años luz de diámetro",fact:"Su nombre significa «cielo inconmensurable» en hawaiano y contiene unas 100.000 galaxias, incluida la Vía Láctea.",image:"img/07-Laniakea_-LofE07240.png",
        },
        {name:"Universo Observable",classification:"Límite Cósmico Observable",tier:"cosmico",diameterKm:93000000000*LY,diameterLabel:"≈ 93.000 millones de años luz de diámetro",fact:"Es solo la porción del universo cuya luz ha tenido tiempo de llegar hasta nosotros; el universo total podría ser muchísimo mayor.",image:"img/Observable_Universe_logarithmic_illustration_-circular_layout_english_annotations.png",
        }
      ];
      const TIER_LABELS={planetario:"PLANETARIO",estelar:"ESTELAR",galactico:"GALÁCTICO",cosmico:"CÓSMICO"};
      const SUP_DIGITS={"0":"⁰","1":"¹","2":"²","3":"³","4":"⁴","5":"⁵","6":"⁶","7":"⁷","8":"⁸","9":"⁹","-":"⁻"};
      function scaleSuperscript(n){return String(n).split("").map(c=>SUP_DIGITS[c]||c).join("")}
      function scaleMultiplierFor(diameterKm){const ratio=diameterKm/EARTH_DIAMETER_KM;return ratio>=1?Math.pow(ratio,3):ratio}
      function scaleFormatMultiplier(mult){
        if(mult>=1e12||mult<0.01){
          const exp=Math.floor(Math.log10(mult)),mant=mult/Math.pow(10,exp);
          return`${mant.toFixed(2).replace(".",",")} × 10${scaleSuperscript(exp)}`;
        }
        if(mult>=1)return Math.round(mult).toLocaleString("es-ES");
        return mult.toFixed(mult<0.1?3:2).replace(".",",");
      }
      function scaleMagnitudeLabel(mult,formatted){
        if(mult===1)return"Punto de referencia: 1 vez el tamaño de la Tierra.";
        if(mult>1)return`${formatted} veces más grande que la Tierra`;
        return`${formatted} veces el tamaño de la Tierra`;
      }
      const scaleMultipliers=cosmicScales.map(o=>scaleMultiplierFor(o.diameterKm));
      const scaleLogs=scaleMultipliers.map(m=>Math.log10(m)),scaleLogMin=Math.min(...scaleLogs),scaleLogMax=Math.max(...scaleLogs);
      let scaleIndex=0;
      const scaleEls={sphereWrap:document.querySelector("#scale-sphere-wrap"),sphere:document.querySelector("#scale-sphere"),img:document.querySelector("#scale-img"),magNumber:document.querySelector("#scale-magnitude-number"),magLabel:document.querySelector("#scale-magnitude-label"),prevBtn:document.querySelector("#scale-prev"),nextBtn:document.querySelector("#scale-next"),count:document.querySelector("#scale-count"),barFill:document.querySelector("#scale-bar-fill"),classification:document.querySelector("#scale-classification"),name:document.querySelector("#scale-name"),diameter:document.querySelector("#scale-diameter"),tier:document.querySelector("#scale-tier"),fact:document.querySelector("#scale-fact")};
      function renderScale(animate){
        const obj=cosmicScales[scaleIndex],mult=scaleMultipliers[scaleIndex],formatted=scaleFormatMultiplier(mult);
        scaleEls.img.src=obj.image;scaleEls.img.alt=obj.name;
        scaleEls.sphere.className=`scale-sphere tier-${obj.tier}`;
        scaleEls.classification.textContent=obj.classification;scaleEls.name.textContent=obj.name;scaleEls.diameter.textContent=obj.diameterLabel;scaleEls.tier.textContent=TIER_LABELS[obj.tier];scaleEls.fact.textContent=obj.fact;
        const magText=`${formatted}x`;
        scaleEls.magNumber.textContent=magText;scaleEls.magNumber.dataset.text=magText;
        scaleEls.magNumber.className=`scale-magnitude-number tier-${obj.tier}`;
        /* Los de magnitud cósmica son los que abre la medalla. */
        const esCosmico=obj.tier==="cosmico";
        vestirPremium(document.querySelector(".scale-console"),esCosmico);
        pintarGaleria(document.getElementById("scale-gallery"),
                      document.getElementById("scale-caption"),
                      esCosmico?obj.gallery:null,
                      vista=>{scaleEls.img.src=vista.src;scaleEls.img.alt=`${obj.name} — ${vista.caption}`;});
        const t=Math.max(0,Math.min(1,(Math.log10(mult)-scaleLogMin)/(scaleLogMax-scaleLogMin)));
        scaleEls.magNumber.style.setProperty("--mag-t",t.toFixed(3));
        scaleEls.sphereWrap.style.setProperty("--mag-scale",(0.8+t*1.6).toFixed(3));
        scaleEls.magLabel.textContent=scaleMagnitudeLabel(mult,formatted);
        scaleEls.count.textContent=`Objeto ${String(scaleIndex+1).padStart(2,"0")} de ${cosmicScales.length}`;
        scaleEls.barFill.style.width=`${(scaleIndex+1)/cosmicScales.length*100}%`;
        scaleEls.prevBtn.disabled=scaleIndex===0;scaleEls.nextBtn.disabled=scaleIndex===cosmicScales.length-1;
        if(window.gsap&&animate){
          gsap.fromTo(scaleEls.magNumber,{opacity:0,y:-10,scale:.9},{opacity:1,y:0,scale:1,duration:.45,ease:"back.out(1.7)"});
          gsap.fromTo(".scale-data",{opacity:.4,y:6},{opacity:1,y:0,duration:.4,ease:"power2.out"});
          gsap.fromTo(scaleEls.sphere,{opacity:.3},{opacity:1,duration:.4,ease:"power2.out"});
        }
      }
      scaleEls.prevBtn.addEventListener("click",()=>{if(scaleIndex>0){scaleIndex--;renderScale(true)}});
      scaleEls.nextBtn.addEventListener("click",()=>{if(scaleIndex<cosmicScales.length-1){scaleIndex++;renderScale(true)}});
      document.addEventListener("keydown",event=>{
        if(event.key!=="ArrowLeft"&&event.key!=="ArrowRight")return;
        if(document.querySelector("dialog[open]"))return;
        const section=document.querySelector("#escalas-universo");
        if(!section)return;
        const rect=section.getBoundingClientRect();
        if(rect.bottom<0||rect.top>window.innerHeight)return;
        event.preventDefault();
        if(event.key==="ArrowLeft")scaleEls.prevBtn.click();else scaleEls.nextBtn.click();
      });
      renderScale(false);
    })();

    /* ---------- ASPECTO PREMIUM DEL CONTENIDO DESBLOQUEADO ---------- */
    /* Solo estética: no decide qué está bloqueado ni lo abre. Se limita a
       vestir de oro lo que la medalla concede, con el mismo lenguaje en las
       tres secciones. */
    function vestirPremium(nodo, esPremium){
      if(!nodo)return;
      nodo.classList.toggle("es-premium",esPremium);
      let brillo=nodo.querySelector(":scope > .premium-brillo");
      if(esPremium&&!brillo){
        brillo=document.createElement("span");
        brillo.className="premium-brillo";
        brillo.setAttribute("aria-hidden","true");
        nodo.appendChild(brillo);
      }else if(!esPremium&&brillo){
        brillo.remove();
      }
    }

    /* Tira de miniaturas compartida por el modal de satélites y el comparador.
       Devuelve el pie de la imagen activa para que cada sitio lo coloque. */
    function pintarGaleria(tira, pie, galeria, alElegir){
      if(!tira)return;
      tira.innerHTML="";
      if(pie)pie.textContent="";
      if(!Array.isArray(galeria)||galeria.length<2)return;   /* con una sola imagen no hay galería que enseñar */
      galeria.forEach((vista,i)=>{
        const boton=document.createElement("button");
        boton.type="button";
        boton.setAttribute("role","tab");
        boton.setAttribute("aria-label",vista.caption||`Imagen ${i+1}`);
        boton.className=i===0?"is-selected":"";
        const mini=document.createElement("img");
        mini.src=vista.src;mini.alt="";mini.loading="lazy";
        boton.appendChild(mini);
        boton.addEventListener("click",()=>{
          tira.querySelectorAll("button").forEach(b=>b.classList.remove("is-selected"));
          boton.classList.add("is-selected");
          if(pie)pie.textContent=vista.caption||"";
          alElegir(vista);
        });
        tira.appendChild(boton);
      });
      if(pie)pie.textContent=(galeria[0]&&galeria[0].caption)||"";
    }

    /* ---------- CONTENIDO QUE SE DESBLOQUEA CON LA MEDALLA ---------- */
    /* La medalla se consigue completando «Práctica 47». El juego va dentro de
       un iframe del mismo origen, así que ambos comparten localStorage y el
       evento storage avisa a esta página en cuanto se gana, sin recargar. */
    (function(){
      const CLAVE="orbita-medalla";
      const COLA=" · COMPLETA «PRÁCTICA 47» PARA DESBLOQUEAR";

      function conMedalla(){
        try{return localStorage.getItem(CLAVE)==="1"}
        catch(e){return true}   /* sin acceso al almacenamiento no se bloquea nada:
                                   peor que enseñar de más es dejar contenido que
                                   nadie podría desbloquear nunca */
      }
      let cerrado=!conMedalla();

      const nivel5=anomalies.filter(a=>a.level===5).length;
      const enHeo=satellites.filter(s=>s.orbit==="heo").length;
      const exoplanetas=planets.filter(p=>p.kind==="exoplaneta").length;

      function marcar(nodos){
        nodos.forEach(n=>{
          n.classList.toggle("bloqueada",cerrado);
          n.disabled=cerrado;
          if(cerrado){
            n.setAttribute("aria-disabled","true");
            n.title="Completa «Práctica 47» para desbloquear";
          }else{
            n.removeAttribute("aria-disabled");
            n.removeAttribute("title");
          }
        });
      }

      function aviso(idSeccion,texto){
        const seccion=document.querySelector(idSeccion);
        const cabecera=seccion&&seccion.querySelector(".section-heading");
        if(!cabecera)return;
        let p=cabecera.querySelector(".aviso-medalla");
        if(!cerrado){if(p)p.remove();return}
        if(!p){p=document.createElement("p");p.className="aviso-medalla";cabecera.appendChild(p)}
        p.textContent=texto+COLA;
      }

      /* En el comparador de escalas no se pulsa nada: se navega. Se vigila la
         clase de la esfera en vez de tocar renderScale, así su lógica queda
         intacta y da igual si se llegó con los botones o con las flechas. */
      const consola=document.querySelector(".scale-console");
      const escena=document.querySelector(".scale-visual");
      let capa=null;
      if(escena){
        capa=document.createElement("div");
        capa.className="candado-escala";
        capa.hidden=true;
        capa.textContent="MAGNITUD CÓSMICA CLASIFICADA"+COLA;
        escena.appendChild(capa);
      }
      function revisarEscala(){
        const esfera=document.getElementById("scale-sphere");
        if(!consola||!esfera||!capa)return;
        const tapado=cerrado&&esfera.classList.contains("tier-cosmico");
        consola.classList.toggle("escala-bloqueada",tapado);
        capa.hidden=!tapado;
      }

      function aplicar(){
        marcar(document.querySelectorAll('#anomaly-grid .anomaly-card[data-level="5"]'));
        marcar(document.querySelectorAll('#planet-grid .planet-card[data-kind="exoplaneta"]'));
        marcar(document.querySelectorAll(".sat-orbit-anchor.orbit-heo .satellite-node"));
        revisarEscala();
        aviso("#anomalias",nivel5+" EXPEDIENTES DE NIVEL 5 BLOQUEADOS");
        aviso("#mapa",exoplanetas+" EXOPLANETAS BLOQUEADOS");
        aviso("#escalas-universo","LAS MAGNITUDES CÓSMICAS ESTÁN BLOQUEADAS");
        aviso("#radar-satelital",enHeo+" SATÉLITES DE ÓRBITA HEO BLOQUEADOS");
      }

      aplicar();

      /* los filtros de amenazas vuelven a pintar la cuadrícula: hay que
         reaplicar el bloqueo cada vez que cambia */
      const rejilla=document.getElementById("anomaly-grid");
      if(rejilla&&"MutationObserver" in window){
        new MutationObserver(()=>{
          marcar(document.querySelectorAll('#anomaly-grid .anomaly-card[data-level="5"]'));
        }).observe(rejilla,{childList:true});
      }
      /* el mapa estelar se vuelve a pintar entero cada vez que se cambia de
         filtro, así que hay que remarcar los exoplanetas después */
      const mapa=document.getElementById("planet-grid");
      if(mapa&&"MutationObserver" in window){
        new MutationObserver(()=>{
          marcar(document.querySelectorAll('#planet-grid .planet-card[data-kind="exoplaneta"]'));
        }).observe(mapa,{childList:true});
      }
      const esfera=document.getElementById("scale-sphere");
      if(esfera&&"MutationObserver" in window){
        new MutationObserver(revisarEscala).observe(esfera,{attributes:true,attributeFilter:["class"]});
      }

      /* el juego escribe la medalla desde el iframe; aquí llega como storage */
      window.addEventListener("storage",evento=>{
        if(evento.key===CLAVE&&conMedalla()&&cerrado){cerrado=false;aplicar()}
      });
      /* y por si se ganó en otra pestaña mientras esta estaba en segundo plano */
      document.addEventListener("visibilitychange",()=>{
        if(!document.hidden&&cerrado&&conMedalla()){cerrado=false;aplicar()}
      });
    })();

    /* ---------- RECOMPENSAS DE LA MEDALLA: INSIGNIA Y MODO COMANDANTE ---------- */
    /* Mismo llavero que el bloqueo de secciones («orbita-medalla»), pero
       módulo aparte: aquí no se toca nada de aquella lógica, solo se lee.
       La preferencia de tema va en su propia llave, para que apagar el modo
       Comandante nunca se confunda con perder la medalla. */
    (function(){
      const CLAVE="orbita-medalla";
      const CLAVE_TEMA="orbita-tema";
      const raiz=document.documentElement;
      const insignia=document.getElementById("insignia-medalla");
      const mando=document.getElementById("mando-tema");
      if(!insignia||!mando)return;

      function conMedalla(){
        try{return localStorage.getItem(CLAVE)==="1"}
        catch(e){return false}   /* al revés que en el bloqueo: si no se puede
                                    leer el almacenamiento, mejor no presumir
                                    de una medalla que quizá no se ganó */
      }
      function temaGuardado(){
        try{return localStorage.getItem(CLAVE_TEMA)}
        catch(e){return null}
      }

      /* Textos que el rango sustituye. Se cambia solo el primer trozo de texto
         del elemento y no su HTML: así sobreviven la flecha del botón y el
         punto que parpadea en la señal, y se conservan los espacios de
         alrededor para devolverlo todo intacto al apagar el modo. */
      const RANGO=[
        [".site-header .signal","COMANDANTE ESPACIAL"],
        [".hero .eyebrow","COMANDANTE ESPACIAL // ACCESO TOTAL"],
        [".hero .primary-button","RETOMAR EL MANDO"],
        [".scanner-foot span","DATOS PARA COMANDANTES // VALORES APROX."],
        ["footer p","COMANDA. DECIDE. REGRESA."]
      ];
      function primerTexto(el){
        for(let i=0;i<el.childNodes.length;i++){
          const n=el.childNodes[i];
          if(n.nodeType===3&&n.textContent.trim())return n;
        }
        return null;
      }
      function rango(activo){
        RANGO.forEach(function(par){
          const nodos=document.querySelectorAll(par[0]);
          if(!nodos.length)return;
          const uno=nodos[0];              /* footer p: solo el lema, no el © */
          const texto=primerTexto(uno);
          if(!texto)return;
          if(activo){
            if(uno.dataset.textoBase===undefined)uno.dataset.textoBase=texto.textContent;
            const bruto=texto.textContent;
            texto.textContent=bruto.match(/^\s*/)[0]+par[1]+bruto.match(/\s*$/)[0];
          }else if(uno.dataset.textoBase!==undefined){
            texto.textContent=uno.dataset.textoBase;
            delete uno.dataset.textoBase;
          }
        });
      }

      function pintar(activo){
        raiz.classList.toggle("modo-comandante",activo);
        mando.setAttribute("aria-pressed",activo?"true":"false");
        mando.dataset.tip=activo?"Volver al tema original":"Activar tema Comandante";
        rango(activo);
      }

      let visible=false;
      function revisar(nuevaMedalla){
        const hay=conMedalla();
        insignia.hidden=!hay;
        mando.hidden=!hay;
        raiz.classList.toggle("con-medalla",hay);
        if(!hay){pintar(false);visible=false;return}
        /* el brinco de llegada solo la primera vez que aparece en esta visita */
        if(!visible&&nuevaMedalla){
          insignia.classList.add("recien");
          setTimeout(function(){insignia.classList.remove("recien")},1000);
        }
        visible=true;
      }

      revisar(false);
      if(conMedalla())pintar(temaGuardado()==="comandante");

      mando.addEventListener("click",function(){
        const activo=!raiz.classList.contains("modo-comandante");
        pintar(activo);
        try{localStorage.setItem(CLAVE_TEMA,activo?"comandante":"estandar")}catch(e){}
      });

      /* El juego va en un iframe del mismo origen: cuando escribe la medalla,
         esta página se entera por storage y el sello aparece sin recargar.
         La misma vía sincroniza el tema entre pestañas abiertas. */
      window.addEventListener("storage",function(evento){
        if(evento.key===CLAVE)revisar(true);
        else if(evento.key===CLAVE_TEMA&&conMedalla())pintar(evento.newValue==="comandante");
      });
      document.addEventListener("visibilitychange",function(){
        if(document.hidden)return;
        const antes=insignia.hidden;
        revisar(antes);
        if(antes&&!insignia.hidden)pintar(temaGuardado()==="comandante");
      });
    })();

    /* ---------- HERO ---------- */
    (function(){
      const menosMovimiento=window.matchMedia("(prefers-reduced-motion:reduce)");

      /* Cifras tomadas de los propios datos. La etiqueta del radar dice
         "OBJETOS RASTREADOS: 10" desde que el mapa tenía 10 planetas: los
         números escritos a mano se quedan viejos, así que estos se calculan. */
      const cifras=[["stat-mundos",planets],["stat-satelites",satellites],["stat-amenazas",anomalies]];
      cifras.forEach(([id,datos])=>{
        const nodo=document.getElementById(id);
        if(nodo&&Array.isArray(datos))nodo.textContent=datos.length;
      });

      /* --- titular letra a letra --- */
      /* devuelve una función que arranca el tecleo, para poder lanzarlo
         cuando termine la secuencia de arranque y no antes */
      const escribirTitular=(function(){
        const lineas=document.querySelectorAll(".hero h1 .tw-line");
        if(!lineas.length)return function(){};
        const letras=[];
        lineas.forEach(linea=>{
          const texto=linea.textContent;
          linea.textContent="";
          for(const caracter of texto){
            const span=document.createElement("span");
            span.className="tw-ch";
            span.textContent=caracter;
            linea.appendChild(span);
            letras.push(span);
          }
        });
        return function(){
          if(menosMovimiento.matches){
            letras.forEach(l=>l.classList.add("is-on"));
            return;
          }
          let i=0,previa=null;
          (function escribir(){
            if(previa)previa.classList.remove("is-cursor");
            if(i>=letras.length){
              /* el cursor se queda parpadeando al final del titular */
              if(previa)previa.classList.add("is-cursor");
              return;
            }
            const letra=letras[i++];
            letra.classList.add("is-on","is-cursor");
            previa=letra;
            /* una pausa algo mayor tras cada espacio hace más creíble el tecleo */
            setTimeout(escribir,letra.textContent===" "?96:42);
          })();
        };
      })();

      /* --- contador del radar: 0 -> 10 --- */
      function animarRadar(){
        const nodo=document.getElementById("radar-count");
        if(!nodo)return;
        /* el total sale de los propios catálogos: mundos + satélites + amenazas.
           El número escrito en el HTML es solo el valor de reserva si no hay JS. */
        const meta=planets.length+satellites.length+anomalies.length;
        if(menosMovimiento.matches){nodo.textContent=meta;return;}
        const DURACION=900,inicio=performance.now();
        nodo.textContent="0";
        (function paso(ahora){
          const avance=Math.min((ahora-inicio)/DURACION,1);
          /* desacelera al final: sube rápido y se asienta en la cifra */
          const suave=1-Math.pow(1-avance,3);
          nodo.textContent=Math.round(meta*suave);
          if(avance<1)requestAnimationFrame(paso);else nodo.textContent=meta;
        })(inicio);
      }

      /* --- secuencia de arranque --- */
      (function(){
        const hero=document.querySelector(".hero");
        const panel=document.getElementById("hero-boot");
        if(!hero||!panel){escribirTitular();animarRadar();return;}

        const lineas=panel.querySelectorAll(".boot-line");
        const barra=panel.querySelector(".boot-bar");
        const DURACION=1500;

        function entrar(){
          panel.hidden=true;
          hero.classList.remove("is-booting");
          escribirTitular();
          animarRadar();
        }

        /* Se ve una sola vez por pestaña. La molestia real no es verla, es
           volver a verla: al navegar dentro del sitio o recargar, la carga es
           inmediata y la secuencia se omite. También se omite con
           prefers-reduced-motion, y siempre se puede cortar con un clic. */
        let yaVista=false;
        try{yaVista=sessionStorage.getItem("orbita-arranque")==="1"}catch(e){}
        if(yaVista||menosMovimiento.matches){entrar();return;}
        try{sessionStorage.setItem("orbita-arranque","1")}catch(e){}

        hero.classList.add("is-booting");
        panel.hidden=false;
        panel.style.setProperty("--boot-dur",DURACION+"ms");
        /* se fuerza el cálculo del ancho 0 antes de pedir el 100%, o el
           navegador agrupa ambos valores y la barra aparece llena de golpe */
        void barra.offsetWidth;
        barra.classList.add("is-on");

        const relojes=[];
        lineas.forEach((linea,i)=>{
          relojes.push(setTimeout(()=>linea.classList.add("is-on"),i*430));
        });

        let terminado=false;
        function terminar(){
          if(terminado)return;
          terminado=true;
          relojes.forEach(clearTimeout);
          document.removeEventListener("keydown",porTecla);
          panel.removeEventListener("click",terminar);
          entrar();
        }
        function porTecla(evento){
          if(evento.key==="Escape"||evento.key==="Enter"||evento.key===" ")terminar();
        }
        panel.addEventListener("click",terminar);
        document.addEventListener("keydown",porTecla);
        relojes.push(setTimeout(terminar,DURACION));
      })();

      /* --- parallax de la estación --- */
      /* Módulo aparte del de las estrellas y con recorridos propios: las
         capas de la estación se mueven al revés y bastante más, que es lo que
         la separa del fondo y da la sensación de profundidad. */
      (function(){
        const hero=document.querySelector(".hero");
        const capas=document.querySelectorAll(".hero-estacion .est-capa");
        if(!hero||!capas.length)return;
        const conRaton=window.matchMedia("(hover:hover) and (pointer:fine)");
        if(!conRaton.matches||menosMovimiento.matches)return;

        /* negativos: al ir contra el fondo estrellado se lee como un objeto
           por delante. De lejos a cerca, cada capa recorre más. */
        const PROFUNDIDAD=[-9,-20,-38];
        let destinoX=0,destinoY=0,x=0,y=0,animando=false,visible=true;

        function bucle(){
          x+=(destinoX-x)*.06;               /* algo más lenta que las estrellas */
          y+=(destinoY-y)*.06;
          capas.forEach((capa,i)=>{
            const p=PROFUNDIDAD[i]||PROFUNDIDAD[PROFUNDIDAD.length-1];
            capa.style.transform="translate3d("+(x*p).toFixed(2)+"px,"+(y*p).toFixed(2)+"px,0)";
          });
          if(visible&&(Math.abs(destinoX-x)>.0015||Math.abs(destinoY-y)>.0015)){
            requestAnimationFrame(bucle);
          }else{
            animando=false;
            capas.forEach(capa=>capa.classList.remove("is-live"));
          }
        }
        function arrancar(){
          if(animando||!visible)return;
          animando=true;
          capas.forEach(capa=>capa.classList.add("is-live"));
          requestAnimationFrame(bucle);
        }
        window.addEventListener("mousemove",evento=>{
          const caja=hero.getBoundingClientRect();
          if(caja.bottom<0||caja.top>window.innerHeight)return;
          destinoX=(evento.clientX-caja.left)/caja.width-.5;
          destinoY=(evento.clientY-caja.top)/caja.height-.5;
          arrancar();
        },{passive:true});

        if("IntersectionObserver" in window){
          new IntersectionObserver(e=>{
            visible=e[0].isIntersecting;
            if(visible)arrancar();
          },{threshold:0}).observe(hero);
        }
      })();

      /* --- parallax de estrellas --- */
      (function(){
        const hero=document.querySelector(".hero");
        const capas=document.querySelectorAll(".hero-parallax .hero-stars");
        if(!hero||!capas.length)return;
        /* sin ratón no hay nada que seguir, y con movimiento reducido tampoco */
        const conRaton=window.matchMedia("(hover:hover) and (pointer:fine)");
        if(!conRaton.matches||menosMovimiento.matches)return;

        const PROFUNDIDAD=[6,14,26];        /* píxeles de recorrido por capa */
        let destinoX=0,destinoY=0,x=0,y=0,animando=false,visible=true;

        function bucle(){
          /* interpolación: la capa persigue al ratón en vez de saltar */
          x+=(destinoX-x)*.075;
          y+=(destinoY-y)*.075;
          capas.forEach((capa,i)=>{
            const p=PROFUNDIDAD[i]||PROFUNDIDAD[PROFUNDIDAD.length-1];
            capa.style.transform="translate3d("+(x*p).toFixed(2)+"px,"+(y*p).toFixed(2)+"px,0)";
          });
          /* se detiene solo cuando ya casi no queda movimiento */
          if(visible&&(Math.abs(destinoX-x)>.0015||Math.abs(destinoY-y)>.0015)){
            requestAnimationFrame(bucle);
          }else{
            animando=false;
            capas.forEach(capa=>capa.classList.remove("is-live"));
          }
        }
        function arrancar(){
          if(animando||!visible)return;
          animando=true;
          capas.forEach(capa=>capa.classList.add("is-live"));
          requestAnimationFrame(bucle);
        }
        window.addEventListener("mousemove",evento=>{
          const caja=hero.getBoundingClientRect();
          if(caja.bottom<0||caja.top>window.innerHeight)return;
          /* -0,5 a 0,5 respecto al centro del hero */
          destinoX=(evento.clientX-caja.left)/caja.width-.5;
          destinoY=(evento.clientY-caja.top)/caja.height-.5;
          arrancar();
        },{passive:true});

        /* fuera de pantalla no se anima nada */
        if("IntersectionObserver" in window){
          new IntersectionObserver(entradas=>{
            visible=entradas[0].isIntersecting;
            if(visible)arrancar();
          },{threshold:0}).observe(hero);
        }
      })();
    })();
  
