# Data Model: MVP de Gestión de Fútbol Barrial

## 1. Objetivo

Definir el modelo de datos mínimo y escalable para soportar las funcionalidades principales del MVP: registro digital, ligas, partidos, estadísticas, incentivos y pagos.

## 2. Entidades principales

### User
Representa a cualquier usuario del sistema.

- id: String (PK)
- createdAt: DateTime
- updatedAt: DateTime
- email: String (unique)
- username: String (unique)
- role: String (player | director | admin)
- isActive: Boolean
- profile: PlayerProfile? (1:1)
- memberships: LeagueMember[]
- createdMatches: Match[]
- payments: Payment[]
- rewards: Reward[]

### PlayerProfile
Información deportiva y de identidad digital del jugador.

- id: String (PK)
- userId: String (FK -> User.id)
- fullName: String
- phone: String?
- birthDate: DateTime?
- position: String?
- heightCm: Int?
- weightKg: Int?
- emergencyContact: String?
- documentUrl: String?
- avatarUrl: String?
- status: String (active | inactive | suspended)
- createdAt: DateTime

### League
Representa una liga o torneo barrial.

- id: String (PK)
- name: String
- description: String?
- organizerId: String (FK -> User.id)
- status: String (draft | active | finished)
- createdAt: DateTime
- teams: Team[]
- matches: Match[]
- members: LeagueMember[]

### Team
Equipo dentro de una liga.

- id: String (PK)
- leagueId: String (FK -> League.id)
- name: String
- captainId: String? (FK -> User.id)
- createdAt: DateTime
- players: TeamPlayer[]
- homeMatches: Match[]
- awayMatches: Match[]

### LeagueMember
Asociación entre usuario y liga.

- id: String (PK)
- leagueId: String (FK -> League.id)
- userId: String (FK -> User.id)
- role: String (player | director | admin)
- joinedAt: DateTime

### TeamPlayer
Relación entre jugador y equipo.

- id: String (PK)
- teamId: String (FK -> Team.id)
- userId: String (FK -> User.id)
- joinedAt: DateTime
- isActive: Boolean

### Match
Partido programado entre dos equipos.

- id: String (PK)
- leagueId: String (FK -> League.id)
- homeTeamId: String (FK -> Team.id)
- awayTeamId: String (FK -> Team.id)
- scheduledAt: DateTime
- venue: String?
- fieldNumber: String?
- refereeName: String?
- status: String (scheduled | in_progress | finished | cancelled)
- createdAt: DateTime
- events: MatchEvent[]

### MatchEvent
Evento registrado durante el partido.

- id: String (PK)
- matchId: String (FK -> Match.id)
- userId: String (FK -> User.id)
- eventType: String (goal | assist | yellow_card | red_card | substitution)
- minute: Int?
- notes: String?
- createdAt: DateTime

### RewardPoint
Registro de puntos por comportamiento o cumplimiento.

- id: String (PK)
- userId: String (FK -> User.id)
- leagueId: String? (FK -> League.id)
- reason: String
- points: Int
- createdAt: DateTime

### RewardRedemption
Canje de recompensas por puntos.

- id: String (PK)
- userId: String (FK -> User.id)
- pointsUsed: Int
- description: String
- status: String (pending | completed | cancelled)
- createdAt: DateTime

### Payment
Registro de pagos del MVP.

- id: String (PK)
- userId: String (FK -> User.id)
- leagueId: String? (FK -> League.id)
- amount: Float
- currency: String
- type: String (subscription | registration | fine | token_purchase)
- status: String (pending | completed | failed)
- processorRef: String?
- createdAt: DateTime

## 3. Relaciones clave

- User 1:1 PlayerProfile
- League 1:N Team
- League 1:N Match
- League 1:N LeagueMember
- Team 1:N TeamPlayer
- Match 1:N MatchEvent
- User 1:N RewardPoint
- User 1:N RewardRedemption
- User 1:N Payment

## 4. Notas de implementación

- Usar enums o strings literales para estados y tipos de evento.
- Mantener el modelo lo suficientemente flexible para futuras integraciones con Fintech, DataWallet, Marketing AI y Tickets.
- Priorizar relaciones simples y consultas directas para un MVP rápido y estable.
