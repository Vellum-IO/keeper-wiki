---
title: Storage Units
description: How storage and memory units are handled across the system
---

# Storage Units in Keeper

Keeper uses different storage unit formats at different layers of the system to balance user experience with Kubernetes
compatibility.

## Unit Types by Layer

| Layer    | Memory Unit     | Storage Unit    | Example (Memory) | Example (Storage) |
|----------|-----------------|-----------------|------------------|-------------------|
| Frontend | Megabytes (MB)  | Gigabytes (GB)  | 2000 MB          | 10 GB             |
| Backend  | Mebibytes (MiB) | Gibibytes (GiB) | ~1907Mi          | ~9Gi              |
| Operator | Mebibytes (MiB) | Gibibytes (GiB) | ~1907Mi          | ~9Gi              |

## Why Different Units?

**Frontend (Decimal Units)**

- Uses MB and GB for user-friendly input
- Familiar units that users understand without Kubernetes knowledge

**Backend & Operator (Binary Units)**

- Uses MiB/Mi and GiB/Gi via Kubernetes `resource.Quantity`
- Required for Kubernetes resource specifications
- Ensures accurate resource allocation and scheduling

## Conversion Reference

| Decimal        | Binary           | Difference |
|----------------|------------------|------------|
| 1 GB (1000 MB) | 1 GiB (1024 MiB) | ~7%        |
| 1 MB (1000 KB) | 1 MiB (1024 KiB) | ~5%        |

