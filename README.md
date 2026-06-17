# marineTraffic

<div align="center">

![React Native](https://img.shields.io/badge/React_Native-0.81.5-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Expo](https://img.shields.io/badge/Expo-54.0.34-000020?style=for-the-badge&logo=expo&logoColor=white)
![React Navigation](https://img.shields.io/badge/React_Navigation-7.3.3-8B3EBF?style=for-the-badge&logo=reactnavigation&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

### Mobile App Replica

A React Native mobile application replicating the user interface of the official **MarineTraffic** (Kpler) application, developed as an academic project to demonstrate custom styling, reusable components, and native navigation.

</div>

---

## Table of Contents

- [Overview](#overview)
- [Core Features](#core-features)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Notes](#notes)
- [Developer](#developer)

---

## Overview

**marineTraffic** is a native mobile clone project built using React Native and Expo. It recreates two primary screens of the popular maritime tracking app MarineTraffic (by Kpler):

- **Login Screen**: A visual copy of the `auth.kpler.com` portal, including logo design, third-party social auth options (LinkedIn, Google, Apple), and email address authentication form fields.
- **Home Screen**: A clean replica of the live tracking map dashboard, utilizing map backgrounds, floating controls for weather, wind, active filters, and GPS alignment, along with a custom bottom action search bar.

The application focus is on using native layout systems (`StyleSheet`), handling routing, managing internal input states, and using reusable React components.

---

## Core Features

### Login Screen (Kpler Auth)

- Secure lock header with real-time web URL description matching the authentic authentication interface
- Recreated brand logo wrapper
- Social login CTAs for LinkedIn, Google, and Apple
- State-managed email address text field using custom native states
- Navigation actions connected through form submission buttons

### Home Screen (Interactive Map View)

- Full-screen custom map background replica
- Left/Right overlay buttons group containing actions for wind layers, favorites, custom filters, and gps positioning
- Bottom panel overlay with custom search input and navigation shortcuts to return to authorization screens

### Custom Component Structure

- Modular `Button` component built with customizable style overrides
- Reusable `InputField` structure managing text attributes, labels, and placeholders

---

## Technologies Used

- React Native
- Expo SDK 54
- React Navigation (Native Stack)
- Expo Vector Icons (Feather, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons)
- TypeScript

---

## Folder Structure

```text
src/
├── components/
│   ├── Button/
│   │   ├── index.tsx
│   │   └── style.ts
│   └── InputField/
│       ├── index.tsx
│       └── style.ts
├── pages/
│   ├── Home/
│   │   ├── index.tsx
│   │   └── style.ts
│   └── Login/
│       ├── index.tsx
│       └── style.ts
├── routers/
│   └── AppRoutes.tsx
├── types/
│   └── index.ts
├── App.tsx
└── index.ts
```

---

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run the Project

```bash
npx expo start
```

---

## Notes

- All components are styled natively via `StyleSheet` without using external CSS frameworks.
- Screen transitions are smoothly handled through navigation actions.
- Code is structured cleanly and comments-free for high readibility.

---

## Developer

This project was developed individually by:
- [Yuri Vieira](https://github.com/DevYuriVieira)

---

# Versão em Português

## Índice

- [Visão Geral](#visão-geral-1)
- [Funcionalidades Principais](#funcionalidades-principais-1)
- [Tecnologias Usadas](#tecnologias-usadas-1)
- [Estrutura de Pastas](#estrutura-de-pastas-1)
- [Como Executar](#como-executar-1)
- [Observações](#observações-1)
- [Desenvolvedor](#desenvolvedor-1)

---

## Visão Geral

**marineTraffic** é um clone mobile nativo desenvolvido em React Native com Expo. O projeto recria fielmente duas telas principais do aplicativo de monitoramento marítimo MarineTraffic (por Kpler):

- **Tela de Login**: Uma réplica visual do portal `auth.kpler.com`, incluindo o logotipo, opções de autenticação social (LinkedIn, Google, Apple) e formulário para e-mail.
- **Tela Home**: Uma cópia do painel de monitoramento sobre mapa real, contendo botões flutuantes de controle para camadas de vento/clima, favoritos, filtros personalizados, centralização de GPS e barra inferior de pesquisa.

O projeto foca no uso correto de folhas de estilo nativas (`StyleSheet`), fluxo de rotas stack, gerenciamento de estado interno e criação de componentes modulares.

---

## Funcionalidades Principais

### Tela de Login (Kpler Auth)

- Cabeçalho seguro com link descritivo e ícone de cadeado igual ao portal oficial
- Logotipo estilizado rotacionado da marca Kpler
- Botões de acesso rápido integrando identidades visuais do LinkedIn, Google e Apple
- Entrada de e-mail gerenciada por estado do React (`useState`)
- Fluxo de continuação conectando a tela de Login diretamente à tela Home

### Tela Home (Visualização do Mapa)

- Imagem de fundo simulando o mapa real de monitoramento de navios
- Painel de controles flutuantes contendo botões para camadas de clima, favoritos, filtros e GPS
- Barra de navegação inferior com campo de busca customizado e atalho para retorno à tela de login

### Componentes Customizados

- Componente de botão reutilizável (`Button`) com suporte a customizações de estilo
- Componente de entrada reutilizável (`InputField`) gerenciando estilos de campo e rótulo

---

## Tecnologias Usadas

- React Native
- Expo SDK 54
- React Navigation (Native Stack)
- Expo Vector Icons (Feather, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons)
- TypeScript

---

## Estrutura de Pastas

```text
src/
├── components/
│   ├── Button/
│   │   ├── index.tsx
│   │   └── style.ts
│   └── InputField/
│       ├── index.tsx
│       └── style.ts
├── pages/
│   ├── Home/
│   │   ├── index.tsx
│   │   └── style.ts
│   └── Login/
│       ├── index.tsx
│       └── style.ts
├── routers/
│   └── AppRoutes.tsx
├── types/
│   └── index.ts
├── App.tsx
└── index.ts
```

---

## Como Executar

### Instalar Dependências

```bash
npm install
```

### Rodar o Projeto

```bash
npx expo start
```

---

## Observações

- Estilização feita de forma 100% nativa via `StyleSheet` para melhor performance.
- As transições de tela utilizam efeitos suaves e fluxo stack nativo.
- Código limpo, componentizado e livre de comentários.

---

## Desenvolvedor

Projeto desenvolvido individualmente por:
- [Yuri Vieira](https://github.com/DevYuriVieira)
