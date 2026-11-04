# UNIVERSIDAD NACIONAL DE PILAR
## Materia: Fundamentos del Desarrollo del Software y Metodologías Ágiles

**Segundo Parcial Práctico Integrador**

**Docente:** Prof. Ariel Bulacio  
**Fecha de Entrega y Defensa:** 4 de Noviembre de 2026  
**Modalidad:** Trabajo Grupal (Equipo de 3 Integrantes)

### Integrantes del Equipo
- **Juan Jose Ignacio Flores**
- **Xiomara Guadalupe Monge**
- **Samira Zozaya**

---

### Enlaces Públicos del Proyecto
- **Repositorio GitHub:** https://github.com/zozayaboii/Fundamentos-Del-Desarrollo-de-Software-y-Metodologias-Agiles-
- **Prototipo Desplegado Caso 1 (GitHub Pages):** https://zozayaboii.github.io/Fundamentos-Del-Desarrollo-de-Software-y-Metodologias-Agiles-/
- **Tablero Kanban en Trello:** https://trello.com/b/4LVbKjrh
- **Diagrama de Gantt Caso 2:** https://app.ganttpro.com/shared/gantt/29fde807e2f2c1671fe3bd60f920e441ef95dfdd803ad9f13e873114f5a7833f/3349104 

---

# Justificaciones metodológicas y estimaciones

## Caso de estudio 1: PilarBus — Enfoque ágil

### 1. Justificación de la metodología Scrum (metodologia agil)

El desarrollo de PilarBus requiere un enfoque ágil debido a que sus funcionalidades pueden evolucionar a partir de las necesidades de los pasajeros y de los comentarios recibidos durante las pruebas beta.

Se propone utilizar Scrum porque permite organizar el trabajo en iteraciones cortas llamadas Sprints, revisar periódicamente los avances y adaptar el Product Backlog cuando aparecen nuevos requisitos o cambios en las prioridades.
En PilarBus, esta metodología resulta adecuada porque el sistema contempla funcionalidades como:

- Visualización de colectivos en tiempo real.
- Alertas sobre demoras y desvíos.
- Integración de información relacionada con SUBE.
- Registro de sugerencias y reclamos.
- Actualización de recorridos y datos del servicio.

Estas funcionalidades pueden desarrollarse progresivamente. Al finalizar cada Sprint, el equipo puede revisar el incremento obtenido y recibir comentarios para decidir qué aspectos mejorar en la siguiente iteración.
Además, las historias de usuario permiten describir las necesidades desde el punto de vista de los pasajeros y mantener el desarrollo enfocado en el valor que aporta cada funcionalidad.
Por estos motivos, Scrum permite responder a los cambios, mejorar la colaboración del equipo y entregar incrementos de producto de manera progresiva.

### 2. Estimación del esfuerzo mediante Story Points

Para estimar el esfuerzo de los elementos del Product Backlog se utilizarán Story Points.
Los Story Points son unidades de estimación relativa que permiten evaluar el esfuerzo necesario para completar un elemento. Según el material de clase, la estimación considera cuatro aspectos:

- Esfuerzo.
- Dificultad.
- Riesgo.
- Incertidumbre.

La estimación no debe basarse únicamente en horas de trabajo, sino en la comparación entre las distintas actividades.

#### Técnica de estimación: Planning Poker

El equipo utilizará Planning Poker para estimar colaborativamente las historias de usuario.
Cada integrante que participa directamente en la realización del trabajo propone una estimación. Luego se comparan los valores, se conversan las diferencias y se acuerda una estimación final.

Se utilizará una secuencia basada en Fibonacci:

**1, 2, 3, 5, 8 y 13.**

Cuando una historia supera la complejidad que el equipo puede estimar razonablemente, se recomienda dividirla en tareas o historias más pequeñas.

#### Estimaciones propuestas para PilarBus

| Funcionalidad / Tarea | Story Points |
| :--- | :---: |
| Maquetación de la vista de mapa en tiempo real (Mobile First) | 5 |
| Configuración del pipeline CI/CD (Zero Downtime Deploy) | 5 |
| Desarrollo de microservicio de recepción GPS | 8 |
| Consumo de WebSockets y actualización del mapa | 5 |
| Sistema de reclamos y reportes de pasajeros | 3 |
| Pruebas de estrés y latencia de la geolocalización | 3 |
| Módulo dinámico de alertas y desvíos | 5 |
| Análisis e integración con entorno de pruebas SUBE | 8 |
| **Total Estimado del Backlog Inicial** | **42** |

Los valores representan estimaciones iniciales del equipo. Podrán revisarse durante el refinamiento del Product Backlog cuando se conozcan mejor los requisitos y las dificultades técnicas.

La utilización de Story Points permite comparar la complejidad de las funcionalidades, organizar el trabajo y mejorar las estimaciones a medida que el equipo obtiene experiencia.

---

## Caso de estudio 2: Centro de Cómputos UNP — Enfoque predictivo

### 3. Justificación del modelo en cascada

Para el proyecto del Centro de Cómputos de la UNP se propone utilizar un modelo predictivo, específicamente el modelo en cascada.

Esta elección se justifica por la naturaleza del proyecto, que presenta requisitos definidos, restricciones presupuestarias y dependencias físicas entre sus actividades.

La construcción de la infraestructura requiere que determinadas tareas se completen antes de comenzar otras. Por ejemplo, la instalación del hardware depende de que la obra civil y las canalizaciones estén terminadas, y también de que los equipos hayan sido adquiridos y recibidos.

Además, al tratarse de un proyecto que contempla licitaciones y adquisición de equipamiento, resulta necesario planificar previamente los recursos, los costos y los tiempos de ejecución.

El modelo en cascada organiza el proyecto en etapas secuenciales. Cada fase debe alcanzar sus objetivos antes de avanzar hacia la siguiente, permitiendo controlar el cumplimiento de los requisitos y las dependencias establecidas.

Por lo tanto, este enfoque resulta apropiado porque facilita la planificación anticipada, el seguimiento del cronograma y el control del presupuesto.

### 4. Estimación de esfuerzo y costos

Para estimar los recursos del Centro de Cómputos se propone combinar la descomposición del proyecto en actividades con una estimación algorítmica del esfuerzo de software.

Los costos de infraestructura, equipamiento y obra civil se consideran por separado de los costos de desarrollo y configuración del software.
Para el componente de software se plantea utilizar COCOMO II, un modelo de estimación de esfuerzo que requiere información sobre el tamaño del software y otros factores del proyecto.
La estimación debe permitir calcular el esfuerzo de desarrollo y, a partir de este, obtener una previsión de costos de personal.

**Datos necesarios para completar el cálculo COCOMO II:**

- Tamaño estimado del software.
- Modelo o modalidad de estimación seleccionada.
- Factores de escala y multiplicadores de esfuerzo correspondientes.
- Costo por persona-mes del equipo técnico.

La información disponible para el caso no especifica todos estos valores. Por lo tanto, no corresponde presentar un resultado numérico de COCOMO II como si fuera un cálculo real sin establecer previamente sus supuestos.

#### Presupuesto preliminar del proyecto

Como planificación inicial, se consideran los siguientes costos estimados para infraestructura, adquisición de equipamiento y ejecución:

| Fase | Costo estimado |
|---|---:|
| Diseño de arquitectura y planos de red | USD 3.500 |
| Licitación y adquisición de servidores | USD 85.000 |
| Obra civil y canalización | USD 15.000 |
| Tendido de fibra e instalación de hardware | USD 6.500 |
| Configuración de red y pruebas de estrés | USD 4.000 |
| **Total preliminar** | **USD 114.000** |

Estos importes son valores de planificación propuestos para el caso y no cotizaciones comerciales verificadas.

El presupuesto deberá actualizarse cuando se disponga de cotizaciones definitivas y del cálculo de esfuerzo de software mediante COCOMO II.

---

## 5. Control de versiones e integración y entrega continua (CI/CD)

El desarrollo de PilarBus utilizará Git y GitHub como herramientas de control de versiones y colaboración.

Git permite registrar los cambios realizados en el proyecto, conservar un historial de versiones y crear ramas para que los integrantes puedan trabajar en paralelo sin modificar directamente la rama principal.

### Flujo de trabajo

1. **Repositorio:** contiene el código fuente y los archivos del proyecto.
2. **Ramas (Branches):** cada integrante trabaja en una rama independiente para desarrollar sus cambios.
3. **Pull Request (PR):** al finalizar una modificación, se solicita su revisión antes de integrarla al proyecto principal.
4. **Build (Construcción):** se prepara el proyecto y se verifica que los archivos y dependencias sean correctos.
5. **Test (Pruebas):** se ejecutan verificaciones automáticas para detectar errores.
6. **Merge (Fusión):** cuando los cambios son aprobados y las validaciones son exitosas, se integran a la rama principal.
7. **Deploy (Despliegue):** se publica la nueva versión para que esté disponible para los usuarios.

### Integración Continua (CI)

La Integración Continua consiste en incorporar cambios al repositorio compartido de manera frecuente.

Cada modificación propuesta mediante un Pull Request puede activar un pipeline que ejecuta automáticamente las etapas de construcción y pruebas.

Esto permite detectar errores de manera temprana y mantener la calidad del código.

### Entrega y despliegue continuo (CD)

La Entrega Continua prepara los cambios validados para su publicación. Dependiendo de la configuración, el despliegue puede requerir una aprobación manual.

En cambio, el Despliegue Continuo publica automáticamente los cambios que superan las validaciones.

Para PilarBus, este proceso permite mantener una versión actualizada del servicio y facilitar la incorporación progresiva de nuevas funcionalidades.

### Beneficios de CI/CD

- Reduce errores durante la integración del código.
- Facilita el trabajo colaborativo.
- Permite detectar fallos antes de publicar cambios.
- Automatiza tareas repetitivas de construcción y pruebas.
- Agiliza la publicación de nuevas versiones.
- Mejora la calidad y el mantenimiento del software.