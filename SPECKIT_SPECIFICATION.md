# SPECKIT SPECIFICATION

## 1. Resumen del Producto
Una plataforma móvil para futbolistas amateurs que unifica la gestión de identidad deportiva, la logística de partidos, el seguimiento de rendimiento y los incentivos por buen comportamiento.

## 2. Objetivos
- Eliminar la gestión manual de pases y credenciales físicas.
- Proveer información de partidos clara y actualizada.
- Registrar estadísticas individuales de los jugadores.
- Mejorar la confianza en pagos y recompensas.

## 3. Usuarios Principales
- Jugador amateur comprometido.
- Dirigente barrial (administrador de equipos y pases).

## 4. Funcionalidades del MVP

### 4.1 Registro y Perfil
- Registro de usuario con datos básicos.
- Perfil deportivo con equipo, números de partidos y estadísticas personales.
- Gestión de identidad deportiva digital que reemplaza el carnet físico.

### 4.2 Gestión de Pases y Autonomía
- Visualización de pases y estado de habilitación de jugador.
- Capacidad para actualizar perfil sin dependencia directa del dirigente.

### 4.3 Calendario y Logística
- Calendario de partidos con hora, cancha, rival y árbitro.
- Detalle preciso de ubicación y estado del encuentro.
- Notificaciones push para cambios, cancelaciones o actualizaciones de última hora.

### 4.4 Estadísticas y Rendimiento
- Registro de goles, asistencias y tarjetas.
- Historial de equipos anteriores.
- Vista de análisis del rival con su goleador destacado.

### 4.5 Incentivos y Gamificación
- Puntos por puntualidad, fair play y cumplimiento de pagos.
- Canje de beneficios por descuentos, servicios de salud o entradas.
- Evaluación del desempeño arbitral por parte de los jugadores.

## 5. Requisitos No Funcionales
- Interfaz ligera y rápida en dispositivos móviles.
- Experiencia intuitiva con diseño claro y visual minimalista.
- Uso de colores definidos: verde cancha (#10B981), azul oscuro (#0F172A), gris claro (#F8FAFC).
- Tipografía: Inter o sans-serif.
- Infraestructura confiable, sin errores de datos ni lentitud.

## 6. Stack Técnico
- Frontend: React + Tailwind CSS.
- Backend: Node.js.
- Base de datos: SQLite / PostgreSQL mediante Prisma.
- Plataforma: Open SaaS con Wasp Framework.

## 7. Criterios de Aceptación
- Un usuario puede registrarse y crear su perfil deportivo.
- El jugador puede ver un calendario de partidos con detalles completos.
- Las notificaciones llegan cuando un partido cambia de horario o sede.
- Las estadísticas del jugador se almacenan y se visualizan correctamente.
- El sistema asigna puntos por acciones de fair play y permite canjear beneficios.
- La interfaz es usable en móviles con navegación clara y tiempos de carga bajos.

## 8. Alcance del MVP
Incluye:
- registro y perfil digital,
- calendario/logística,
- estadísticas individuales,
- programa de incentivos,
- notificaciones de partido.

No incluye en esta fase:
- marketplace avanzado de canjes,
- análisis profundo de equipos rivales más allá de datos básicos,
- integración compleja de múltiples pasarelas de pago.

## 9. Flujo de Usuario Clave
1. El jugador se registra y completa su perfil.
2. El jugador revisa el calendario y confirma sus partidos.
3. El sistema notifica cambios en tiempo real.
4. Al finalizar un partido, se actualizan goles, asistencias y tarjetas.
5. El jugador recibe puntos por buen comportamiento y puede canjearlos.

## 10. Métricas de Éxito
- reducción de la gestión física de pases,
- tasa de adopción de notificaciones del 80%+,
- aumento en la precisión de información de partidos,
- satisfacción del jugador con la experiencia móvil,
- número de canjes de incentivos realizados.
