# SPECKIT PLAN

## 1. Visión del Plan
Definir la arquitectura, el stack técnico y la secuencia de trabajo para construir el MVP del producto de gestión de fútbol barrial.

## 2. Stack Principal
- Framework base: Open SaaS (Wasp Framework)
- Frontend: React + Tailwind CSS
- Backend: Node.js
- Base de datos: SQLite / PostgreSQL con Prisma ORM

## 3. Conexiones Obligatorias
- Uso de Fintech para el procesamiento de pagos de inscripciones y tokenización.
- Uso de DataWallet para manejar un perfil único del jugador entre distintas ligas.
- Uso de la Agencia de Marketing AI para promover las ligas y conseguir patrocinadores.
- Conexión con Tickets para la venta de entradas en ligas grandes.

## 4. Módulos Clave
- Autenticación y gestión de usuarios para futbolistas y dirigentes.
- Gestión de pases y registro digital de identidad deportiva.
- Módulo de horarios de partidos, resultados y estadísticas.

## 4. Arquitectura Recomendada
1. Capa de presentación (Frontend): React con Tailwind CSS para una interfaz móvil ligera y rápida.
2. Capa de aplicación (Backend): Node.js con endpoints para autenticación, partidos, estadísticas e incentivos.
3. Persistencia de datos: Prisma ORM sobre SQLite en desarrollo y PostgreSQL en producción.
4. Plataforma: aprovechar Open SaaS / Wasp para acelerar el scaffolding de la app y gestionar la integración entre frontend y backend.

## 5. Fases de Implementación

### Fase 1: Base del MVP
- Configuración del proyecto Wasp.
- Implementación de la autenticación de usuarios.
- Modelo de datos inicial para jugadores, pases y partidos.
- Interfaz básica de registro y perfil.

### Fase 2: Logística de partidos
- Desarrollo del calendario de partidos.
- Detalle de partidos con hora, cancha, rival y árbitro.
- Implementación de notificaciones para cambios y cancelaciones.

### Fase 3: Estadísticas y rendimiento
- Registro de goles, asistencias y tarjetas.
- Visualización de estadísticas personales y historial de equipos.
- Primeros indicadores de rendimiento individuales.

### Fase 4: Incentivos y gamificación
- Sistema de puntos por puntualidad y fair play.
- Canje básico de beneficios.
- Evaluación del árbitro por parte del jugador.

## 6. Prioridades Técnicas
- Mantener la app ligera y con tiempos de carga bajos.
- Evitar errores de datos en la información de partidos.
- Asegurar una experiencia móvil clara y coherente con el diseño establecido.

## 7. Recomendaciones de Desarrollo
- Comenzar con SQLite para prototipos y pruebas locales.
- Migrar a PostgreSQL para entornos de staging/producción.
- Usar componentes reutilizables de UI y un sistema de estilos centralizado.
- Testear los flujos clave: registro, consulta de partidos, notificaciones y estadísticas.

## 8. Métricas de Progreso
- Completar el modelo de datos y autenticación.
- Tener una vista de calendario funcional.
- Entregar notificaciones de cambios en partidos.
- Mostrar estadísticas personales en el perfil.
- Implementar el sistema inicial de incentivos.
