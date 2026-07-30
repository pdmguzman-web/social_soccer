# Tasks: MVP de Gestión de Fútbol Barrial

**Input**: [spec.md](spec.md) y [plan.md](plan.md)

**Objetivo**: construir un MVP funcional con registro digital, calendario/logística, estadísticas, incentivos y las conexiones obligatorias definidas en el plan.

## Fase 0: Preparación y base técnica

**Propósito**: dejar la infraestructura lista para implementar las historias de usuario del MVP.

- [x] T001 Configurar la estructura base del proyecto en Wasp/React/Node con Prisma y variables de entorno.
- [x] T002 Definir el modelo de datos inicial para usuarios, ligas, equipos, jugadores, partidos, estadística y pagos.
- [x] T003 Crear las migraciones iniciales de base de datos y validar el flujo de seed básico.
- [x] T004 Configurar autenticación, roles y permisos para futbolistas y dirigentes.
- [ ] T005 Implementar la capa base de manejo de errores, logging y respuestas consistentes de API.
- [ ] T006 Preparar la infraestructura de pruebas unitarias/integración y la estrategia de CI básica.

## Fase 1: Registro digital y perfil deportivo (Prioridad P1)

**Meta**: permitir que el jugador cree una identidad digital y gestione su perfil sin depender de documentos físicos.

### Pruebas iniciales
- [ ] T007 [P] [US1] Crear prueba de integración para registro de usuario y creación de perfil deportivo.
- [ ] T008 [P] [US1] Crear prueba de integración para edición del perfil y gestión de identidad digital.

### Implementación
- [x] T009 [P] [US1] Implementar el flujo de registro y login con autenticación segura.
- [ ] T010 [US1] Crear el modelo y endpoints de perfil deportivo, datos personales y documentos digitales.
- [ ] T011 [US1] Implementar la gestión de pases/identidad digital y su asociación al usuario.
- [x] T012 [US1] Crear la interfaz inicial de registro y perfil en el frontend.
- [ ] T013 [US1] Añadir validaciones de formulario, manejo de errores y feedback visual al usuario.

## Fase 2: Calendario y logística de partidos (Prioridad P1)

**Meta**: mostrar información precisa de partidos y alertas operativas en tiempo real.

### Pruebas iniciales
- [ ] T014 [P] [US2] Crear prueba de integración para listar partidos y ver detalles logísticos.
- [ ] T015 [P] [US2] Crear prueba de integración para notificaciones de cambio/cancelación de partido.

### Implementación
- [x] T016 [US2] Definir modelos de ligas, partidos, canchas, árbitros y estados de encuentro.
- [x] T017 [US2] Implementar endpoints para consultar calendario, detalle de partido y actualización de información.
- [ ] T018 [US2] Crear el flujo de notificaciones push/email para cambios y cancelaciones.
- [x] T019 [US2] Diseñar y desarrollar la vista de calendario y detalle de partido en el frontend.
- [ ] T020 [US2] Añadir lógica de actualización de horarios/canchas/rivales con validación de datos.

## Fase 3: Estadísticas personales e historial (Prioridad P2)

**Meta**: dar visibilidad al rendimiento individual del jugador y su trayectoria.

### Pruebas iniciales
- [ ] T021 [P] [US3] Crear prueba de integración para registrar goles, asistencias y tarjetas.
- [ ] T022 [P] [US3] Crear prueba de integración para consultar estadísticas e historial de equipos.

### Implementación
- [x] T023 [US3] Implementar el modelo y la lógica de eventos de partido para registrar rendimiento.
- [x] T024 [US3] Crear endpoints para obtener estadísticas personales, historial de equipos y resumen del jugador.
- [x] T025 [US3] Desarrollar la vista de perfil con estadísticas básicas y trayectoria deportiva.
- [ ] T026 [US3] Añadir soporte para mostrar el rendimiento del rival básico en la vista de partido.

## Fase 4: Incentivos, pagos y feedback (Prioridad P2)

**Meta**: habilitar recompensas por comportamiento y la gestión básica de pagos.

### Pruebas iniciales
- [ ] T027 [P] [US4] Crear prueba de integración para asignar puntos por puntualidad/fair play.
- [ ] T028 [P] [US4] Crear prueba de integración para registrar una evaluación arbitral.
- [ ] T029 [P] [US4] Crear prueba de integración para procesar pagos de inscripción o multa.

### Implementación
- [x] T030 [US4] Definir la lógica de puntos, recompensas y canjes básicos.
- [x] T031 [US4] Implementar el procesamiento de pagos con Fintech para inscripciones y tokenización.
- [ ] T032 [US4] Crear el flujo de evaluación arbitral y almacenamiento del feedback.
- [x] T033 [US4] Añadir la vista de incentivos, puntos acumulados y historial de canjes, con estados pendiente, aprobado y pagado.

## Fase 5: Conexiones obligatorias del MVP

**Meta**: integrar los servicios externos requeridos por el plan sin bloquear la experiencia core.

- [ ] T034 [P] Integrar DataWallet para unificar el perfil del jugador entre ligas.
- [ ] T035 [P] Crear el adaptador de la Agencia de Marketing AI para promoción de ligas y patrocinadores.
- [ ] T036 [P] Implementar la conexión con Tickets para venta de entradas en ligas grandes.
- [ ] T037 Configurar la sincronización de datos y manejo de fallos para las integraciones externas.

## Fase 6: Pulido, seguridad y despliegue inicial

**Meta**: asegurar un MVP estable, usable y listo para demo.

- [ ] T038 Revisar seguridad, manejo de secretos y validaciones de acceso por rol.
- [ ] T039 Optimizar rendimiento de pantallas clave y tiempos de carga inicial.
- [ ] T040 Preparar datos de ejemplo, onboarding y guía rápida para usuarios y dirigentes.
- [x] T041 Validar el flujo completo de registro, calendario, estadísticas, incentivos y pagos end-to-end.
- [ ] T042 Documentar el despliegue inicial y los pasos de operación del MVP.
