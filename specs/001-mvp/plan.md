# Implementation Plan: MVP de Gestión de Fútbol Barrial

**Branch**: `001-mvp` | **Date**: 2026-07-29 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from /specs/001-mvp/spec.md

## Summary

Construir la base técnica y de datos del MVP para soportar registro digital de jugadores, gestión de ligas/partidos, estadísticas básicas, incentivos y pagos seguros. La primera entrega prioriza un modelo de datos sólido, migraciones reproducibles y una infraestructura de backend/frontend preparada para las historias de usuario siguientes.

## Technical Context

**Language/Version**: TypeScript 6.0.3 / Node.js (Wasp + Prisma)

**Primary Dependencies**: Wasp Framework, React, Tailwind CSS, Prisma ORM, PostgreSQL, Vitest

**Storage**: PostgreSQL en desarrollo/producción, con soporte para SQLite en prototipos locales

**Testing**: Vitest + pruebas de integración para API y flujos de negocio principales

**Target Platform**: Web app móvil-first para futbolistas y dirigentes

**Project Type**: Web application

**Performance Goals**: respuestas rápidas en pantallas de calendario y perfil; carga ligera en dispositivos móviles

**Constraints**: experiencia móvil simple, datos confiables para partidos y pagos, integraciones externas con fallbacks claros

**Scale/Scope**: MVP orientado a una o varias ligas barriales, usuarios jugadores y dirigentes, y flujos básicos de registro, partidos, estadística y pagos

## Constitution Check

- Cumple con el principio de autonomía del jugador al definir un perfil digital independiente del dirigente.
- Soporta logística en tiempo real mediante modelos para ligas, partidos, canchas y árbitros.
- Permite rendimiento personalizable con entidades para eventos de partido y estadísticas.
- Prepara la base para incentivos y pagos con registros de recompensas y transacciones.

## Project Structure

### Documentation (this feature)

```text
specs/001-mvp/
├── spec.md
├── plan.md
├── data-model.md
└── tasks.md
```

### Source Code (repository root)

```text
template/app/
├── schema.prisma
├── src/
│   ├── auth/
│   ├── client/
│   ├── server/
│   ├── user/
│   └── payment/
└── tests/
```

**Structure Decision**: Implementar la base del MVP sobre la aplicación Wasp incluida en la carpeta template/app, extendiendo schema.prisma y las capas server/client para los módulos iniciales.

## Implementation Approach

### Fase 0: Definición de dominio
- Mantener un modelo de datos mínimo pero extensible para el MVP.
- Definir entidades clave para usuarios, perfiles, ligas, equipos, partidos, estadísticas, recompensas y pagos.
- Evitar sobre-diseñar funcionalidades no requeridas en esta primera iteración.

### Fase 1: Infraestructura
- Crear y validar migraciones de Prisma.
- Preparar seed básico de datos de ejemplo para desarrollo.
- Configurar variables de entorno para PostgreSQL/SQLite y servicios externos.

### Fase 2: Base funcional
- Implementar entidades y relaciones en Prisma.
- Exponer servicios y endpoints básicos para CRUD de datos maestros.
- Garantizar validaciones de negocio esenciales y manejo de errores coherente.

## Data Model Scope for Phase 1

Este artefacto cubre la base técnica y el modelo de datos inicial para soportar:
- usuarios y perfiles deportivos,
- ligas, equipos y membresías,
- partidos y logística básica,
- eventos de rendimiento y estadísticas,
- incentivos/puntos y pagos.

## Deliverables

- Migraciones Prisma iniciales para el modelo base.
- Schema actualizado en template/app/schema.prisma.
- Seed de ejemplo para desarrollo.
- Servicios/queries base para el siguiente paso de implementación funcional.

## Acceptance Criteria for this artifact

- El modelo de datos permite registrar jugadores, ligas, partidos y estadísticas sin ambigüedades.
- Las relaciones entre entidades son consistentes y compatibles con Prisma.
- La base técnica queda lista para que las historias de usuario puedan implementarse de forma incremental.
