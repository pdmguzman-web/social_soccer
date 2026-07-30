# SPECKIT CONSTITUTION

## 1. Propósito
Esta constitución define el enfoque, los principios y los criterios de diseño para el producto de gestión de fútbol barrial. Su objetivo es garantizar que todas las decisiones del proyecto se alineen con las necesidades de los jugadores amateurs, la propuesta de valor MVP y las decisiones técnicas del equipo.

## 2. Problema Principal
La experiencia del jugador en el fútbol barrial está fragmentada por:
- procesos administrativos obsoletos y dependientes de documentación física,
- comunicación deficiente basada en WhatsApp y redes sociales,
- falta de seguimiento individual de rendimiento,
- inseguridad y fricción en pagos en efectivo.

## 3. Usuario Objetivo
- Perfil: futbolista amateur comprometido.
- Demografía: hombres de 18 a 30 años que participan en ligas barriales.
- Motivaciones: competir, compartir con amigos y obtener reconocimiento.
- Comportamiento tecnológico: usa WhatsApp y redes sociales, valora inmediatez, apps ligeras e intuitivas.
- Necesidades clave: información logística precisa, gestión independiente de identidad deportiva, historial de rendimiento y seguridad financiera.

## 4. Principios de la Solución
1. Autonomía del jugador
   - El usuario debe gestionar su perfil e identidad deportiva sin depender del dirigente.
   - El registro digital reemplaza carnets físicos y manuscritos.

2. Logística en tiempo real
   - Mostrar horarios, rival, árbitro y cancha exacta.
   - Notificaciones automáticas para cambios, cancelaciones y actualizaciones urgentes.

3. Rendimiento personalizable
   - Panel individual con estadísticas de goles, asistencias, tarjetas y equipos anteriores.
   - Visibilidad del rival y su goleador principal.

4. Incentivos y confianza
   - Programa de tokens por fair play, puntualidad y cumplimiento.
   - Canje de beneficios reales como descuentos, servicios de salud o entradas.
   - Evaluación del árbitro para mejorar transparencia.

## 5. MVP Propuesto
El MVP debe incluir:
- Registro único digital y gestión de pases,
- Módulo de información logística y notificaciones,
- Perfil de estadísticas personales,
- Sistema de incentivos gamificado,
- Pagos seguros con flexibilidad para efectivo en montos pequeños.

## 6. Criterios Técnicos
- Priorizar infraestructura ligera y respuesta rápida.
- Evitar datos erróneos y lentitud en la app.
- Mantener una experiencia móvil ágil.

## 7. Stack y Arquitectura
- Framework base: Open SaaS / Wasp Framework.
- Frontend: React + Tailwind CSS.
- Backend: Node.js.
- Base de datos: SQLite / PostgreSQL con Prisma ORM.

## 8. Reglas de Diseño
- Paleta:
  - Primario: #10B981 (Verde Cancha)
  - Secundario: #0F172A (Azul Oscuro)
  - Fondo: #F8FAFC (Gris Claro)
- Tipografía: Inter / Sans-serif.
- UX: interfaz móvil clara, ligera y fácil de usar.

## 9. Prioridades del Producto
1. Resolver la burocracia y gestión de pases.
2. Mejorar la comunicación logística y evitar traslados inútiles.
3. Habilitar seguimiento de rendimiento individual.
4. Generar confianza en pagos y transparencia.

## 10. Alcance Inicial
Este documento sostiene que el primer lanzamiento debe centrarse en:
- usuarios jugadores,
- registro digital y gestión de identidad,
- calendario y notificaciones,
- estadísticas personales básicas,
- tokens de comportamiento y canje de beneficios.

## 11. Medidas de Éxito
- Menor dependencia de documentos físicos y dirigentes.
- Mejora en puntualidad y asistencia.
- Mayor uso de la app frente a grupos de WhatsApp.
- Incremento en la satisfacción del jugador con información de partidos y resultados.
- Aceptación de pagos digitales cuando el flujo sea confiable y transparente.
