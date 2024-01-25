# Notification Widget

## Overview
This Notification Widget is a powerful, flexible component for displaying notifications in your application. It's built using the **Composition Pattern**, a design pattern that allows you to compose objects into tree structures to represent part-whole hierarchies.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Setup

To use the Notification Widget in your application, import the components you need from the Notification component.

```jsx
import { Notification } from "./Notification";
```

You can then use these components in your application like so:

```jsx
<Notification.Root>
    <Notification.Icon icon={Rocket} />
    <Notification.Content text="Você recebeu um convite para participar de um grupo" />
    <Notification.Actions>
        <Notification.Action icon={X} />
        <Notification.Action
        icon={Check}
        className="bg-violet-500 hover:bg-violet-600 dark:bg-violet-500 dark:hover:bg-violet-600"
        />
    </Notification.Actions>
</Notification.Root>
```

Each component can be used independently or composed together to create more complex notifications.
