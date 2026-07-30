# Plan de Arquitectura y Stack Técnico

## 1. Stack Principal
- **Framework Base:** Open SaaS (Wasp Framework)
- **Frontend:** React + Tailwind CSS
- **Backend:** Node.js
- **Base de Datos:** SQLite / PostgreSQL (Prisma ORM)

## 2. Conexiones Obligatorias
- Uso de Fintech para el procesamiento de pagos de inscripciones y tokenización.
- Uso de DataWallet para manejar un perfil único del jugador entre distintas ligas.
- Uso de la Agencia de Marketing AI para promover las ligas y conseguir patrocinadores.
- Conexión con Tickets para la venta de entradas en ligas grandes.

## 3. Autenticación y Módulos
- Sistema de usuarios para futbolistas y dirigentes barriales.
- Gestión de pases y registro digital.
- Módulo de horarios, resultados y estadísticas.