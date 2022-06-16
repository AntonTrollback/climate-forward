export default function logo(type) {
  switch (type) {
    case 'climate-forward': {
      return `
        <svg role="presentation" viewBox="0 0 467 32" width="467" height="32">
          <path fill="currentColor" d="M17.97 3.97c0-2.42-2.44-3.17-4.26-3.1v.22c1.16 0 2.07.56 2.07 1.33 0 .78-.4 1.24-1.56 1.24a16.94 16.94 0 0 1-3.9-1.02 14.96 14.96 0 0 0-4.3-1.04A4.16 4.16 0 0 0 1.7 5.65 2.8 2.8 0 0 0 3.67 8.3c-.31-.31-.56-.58-.56-1.35a1.55 1.55 0 0 1 1.73-1.53c1.57.18 3.12.54 4.6 1.07 1.49.44 3 .79 4.53 1.04v3.95l-1.9 1.58 1.9 1.64v5.41c-.95.5-2.01.77-3.09.75a6.16 6.16 0 0 1-4.87-2.04l5.16-2.42V7.78l-6.3 2.79a7.7 7.7 0 0 1 3.21-3.71 9.5 9.5 0 0 0-7.16 8.56 8.7 8.7 0 0 0 5.38 8.12 8.8 8.8 0 0 0 6.5.11 7.82 7.82 0 0 0 4.88-7.58A8.84 8.84 0 0 1 14.22 20V14.7l2-1.6-2-1.62V7.54a3.57 3.57 0 0 0 3.75-3.57ZM7.35 17.91l-1.56.76a7.83 7.83 0 0 1-1.5-4.85c0-1 .17-1.99.48-2.94l2.6-1.2-.02 8.23Zm23.6-6.95-1 .77-2.97-2.64-3.48 2.67V1.46l-4.7 3.22a1.58 1.58 0 0 1 1.19 1.74v14.23l-1.63 1.14.17.15.8-.58 2.8 2.66 3.78-2.42v-.2l-.98.64-1.31-1.31V12.1l.9-.66 2.07 1.77v7.44c0 4.85-1.05 5.72-3.2 6.5 3.56.15 6.75-1.04 6.75-7.13V12.1l1.07-.85-.26-.3ZM37.28 24l5.45-4.39-.14-.24-2.85 2.42-3.3-2.71v-1.6l5.68-3.98-2.87-4.43-6.3 3.44v8.22l-1.22.94.14.17 1.17-.92L37.28 24Zm-.83-6.84v-6.23l2.73 4.3-2.73 1.93Zm28.9-14.35c-.01-.4-.1-.8-.24-1.16-.39 1.04-.8 1.62-2.02 1.62a3.32 3.32 0 0 1-2.44-1.14l-3.6 4.15.17.14 1.02-1.16c.85.83 2 1.3 3.2 1.3v10.38L54.12 4.3a3.98 3.98 0 0 0-3.22-2.43c-1.97 0-3.48 1.7-3.23 4.56h.12c.14-.7.56-1.6 1.43-1.6.88 0 1.25.66 1.59 1.24v4.12c-2.27 0-3.56 1.04-3.56 2.84a2.7 2.7 0 0 0 2.1 2.61.97.97 0 0 1-.42-.8c0-.67.51-1.06 1.44-1.06h.44v5.26c-2.66 0-4.73 1.48-4.73 3.97a3.55 3.55 0 0 0 2.7 3.32c.5.13 1.01.15 1.51.05-1.33-.14-2.02-.82-2.02-1.81a1.57 1.57 0 0 1 1.76-1.63 3.2 3.2 0 0 1 2.43 1.34l3.58-4.03-.14-.14-.93 1.04a6.7 6.7 0 0 0-3.85-2.01V6.5l10.13 17.57h.54V6.57a3.8 3.8 0 0 0 3.68-3.76h-.13ZM68.86 24l5.36-4.39-.25-.24-2.77 2.42-3.29-2.71v-1.6l5.67-3.98-2.87-4.43-6.28 3.44v8.22l-1.24 1.06.14.17 1.17-.92L68.86 24Zm-.83-6.84v-6.23l2.75 4.3-2.75 1.93Zm25.6-6.66-.83.6-2.44-2.01-2.77 2.42 1.12 1.07v9.38l-2.83-1.94v-7.54l.98-.68-2.93-2.71-2.65 2.5 1.14 1.06v9.14h-.2l-2.65-1.94v-7.27c0-1.72-.87-2.23-1.97-2.93-1.1-.7-1.41-1.1-1.41-1.97a1.7 1.7 0 0 1 1.1-1.48 3.83 3.83 0 0 0-3.68 3.23 2.87 2.87 0 0 0 1.22 2.42 2.94 2.94 0 0 1 1.21 2.18v7.28l-1.29 1 .15.16 1.22-.97 3.21 2.55 3.04-2.11 3.34 2.1 6.58-3.85V11.8l1.46-1.13-.13-.17Zm21.91-7.06-1.27 1.14-2.8-2.42-3.7 3V2.4h-.22v20.34c-.44 0-1.29-.3-2.24-.44V5.2a2.96 2.96 0 0 0-3.14-2.96 3.6 3.6 0 0 0-3.65 3.49 1.5 1.5 0 0 1 1.36-1.38c.78 0 1.44.46 1.44 2.13v4.85a3.18 3.18 0 0 0-3.41 2.84 2.27 2.27 0 0 0 2.12 2.42c-.54-.24-.66-.5-.66-.8 0-.73.7-.95 1.66-.95h.24v7.71a3.46 3.46 0 0 0-2.68 3.35 3.77 3.77 0 0 0 4.14 3.68 18.4 18.4 0 0 0 4.53-.65 22.9 22.9 0 0 1 3.43-.56c.98 0 1.4.41 1.4 1.1 0 .67-.35 1.3-.86 1.45v.12a3.46 3.46 0 0 0 3.26-3.42 3.45 3.45 0 0 0-3.84-3.05c-1.53.08-3.03.3-4.5.68-1.25.29-2.51.48-3.78.55-.88 0-1.95-.36-1.95-1.52 0-1.17.88-1.9 3.02-1.9 1.26.04 2.52.2 3.75.51 1.25.4 2.55.67 3.87.78 1.83 0 3.29-.66 3.29-3.3V4.82l1.34-1.23-.15-.15Zm-5.04 8.17a1.68 1.68 0 0 1-2.1.47 1.9 1.9 0 0 1-.63-.47V5.45l.9-.63 1.83 1.55v5.24Zm0 2.91a1.7 1.7 0 0 0-1.34-.58c-.52 0-1.02.22-1.39.58v-2.6c.38.36.87.56 1.39.59a1.78 1.78 0 0 0 1.34-.58v2.59Zm0 6.13a1.91 1.91 0 0 1-1.83 2.16c-.3.02-.6.02-.9 0v-7.98c.36-.38.86-.6 1.39-.63a1.81 1.81 0 0 1 1.34.63v5.82Zm10.64 3.32 6.09-3.78v-8.24l-3.95-2.88-6.08 3.46v8.2l-1.2 1.06.12.17.98-.8 4.04 2.81Zm-.46-4.29v-8.77l3.04 2.25v8.8l-3.04-2.28Zm18.19-10.45a2.2 2.2 0 0 1-1.34.44 1.9 1.9 0 0 1-1.37-.68l-2.26 2.43-2.29-2.43-3.7 2.67.12.2 1-.66 1.34 1.45v8l-1.6 1.14.14.15.8-.58 3.02 2.57 3.82-2.43-.12-.2-1 .61-1.53-1.4v-8.78a3.15 3.15 0 0 0 2.2 1.29c1.55 0 2.6-1.85 2.77-3.76v-.03Zm14.41 11.88-1.14.68-6.3-9.33.33-.36c.75.6 1.67.96 2.63.99a3.8 3.8 0 0 0 3.1-4 2.43 2.43 0 0 1-2.08 1 3.17 3.17 0 0 1-2.04-1l-4.29 6.3 5.7 8.66 4.22-2.74-.13-.2Zm-7.64.22-.98.63-1.31-1.3V1.45l-4.7 3.22a1.58 1.58 0 0 1 1.2 1.74v14.23l-1.64 1.14.17.15.8-.58 2.8 2.57 3.78-2.43-.12-.17Zm27.73-17.36c0-2.42-2.43-3.17-4.28-3.1v.22c1.16 0 2.07.56 2.07 1.33 0 .78-.4 1.24-1.56 1.24a16.77 16.77 0 0 1-3.87-1.02 15.08 15.08 0 0 0-4.34-1.04 4.16 4.16 0 0 0-4.3 4.05 2.8 2.8 0 0 0 1.96 2.66c-.36-.21-.6-.48-.6-1.26a1.57 1.57 0 0 1 1.09-1.45c.2-.07.42-.1.63-.07 1.58.17 3.12.53 4.6 1.06 1.5.45 3.02.8 4.56 1.04v3.86l-1.92 1.58 1.92 1.64v5.41c-.96.5-2.03.77-3.12.75a6.16 6.16 0 0 1-4.87-2.04l5.16-2.42V7.78l-6.25 2.79a7.75 7.75 0 0 1 3.24-3.71 9.5 9.5 0 0 0-7.16 8.65 8.7 8.7 0 0 0 8.74 8.7 7.87 7.87 0 0 0 7.5-5c.38-1 .56-2.07.51-3.14a8.84 8.84 0 0 1-3.39 3.93V14.7l2-1.6-2-1.62V7.54a3.6 3.6 0 0 0 3.78-3.57h-.1Zm-10.64 13.94-1.46.76a7.83 7.83 0 0 1-1.49-4.85c-.03-1 .1-1.99.4-2.94l2.57-1.2-.02 8.23ZM177.2 3.05l-2.63 2.2 2.24 2.43 2.63-2.2-2.25-2.43Zm3.92 18.28-.95.63-1.32-1.3V12.1l1.1-.85-.15-.2-.93.73-2.16-2.6-3.58 2.43v.22l.9-.6 1.2 1.47v7.95l-1.42 1.14.15.15.8-.58 2.83 2.57 3.75-2.43-.22-.17Zm20.16 0-.83.46-1.39-1.33V12.1l1.12-.85-.14-.2-1 .78-3-2.74-3.38 2.62-2.95-2.62-3.31 2.6-2.24-2.6-3.6 2.42v.22l.9-.6 1.29 1.45v8.05l-1 1 2.87 2.42 2.78-2.43-1.12-1.06v-8.61l.73-.53 2.07 1.77v7.44l-.95 1 2.9 2.42 2.7-2.43-1.12-1.06v-8.61l.7-.56 2.1 1.8v7.27l-.83.87 2.92 2.64 3.85-2.61-.07-.03Zm10.5-1.96-2.86 2.42-3.28-2.71v-1.6l5.67-3.98-2.87-4.43-6.31 3.44v8.36l4.33 3.13 5.48-4.39-.17-.24Zm-6.14-2.26v-6.18l2.75 4.3-2.75 1.88Zm17.04-1.18-2.43-1.85a6 6 0 0 0 2.26-5.2 1.89 1.89 0 0 1-1.85 1.2 2.74 2.74 0 0 1-2.12-1.18l-5.77 3.2v4.36l2.12 1.67c-2.12 1.87-2.43 3.03-2.43 4.1a2.58 2.58 0 0 0 1.7 2.42v-.17a1.05 1.05 0 0 1-.51-.94 1.23 1.23 0 0 1 1.36-1.07 3.08 3.08 0 0 1 2.44 1.29l5.3-3.23-.07-4.6Zm-1.26-3.69c-1.01 1.5-2.3 2.8-3.78 3.83l-1.36-1.14v-4.36a3.5 3.5 0 0 0 3.09 2.2c.7.03 1.4-.14 2.02-.48l.03-.05Zm-2.32 9.87a3.9 3.9 0 0 0-3.48-2.43c-.85-.05-1.7.14-2.44.56a14.1 14.1 0 0 1 4.46-3.93l1.46 1.22v4.58ZM238.36 12.06c0-3.38 1.04-4.85 2.6-4.85 1.38 0 2.02 1.15 2.22 3.5h5.43V2.93h-5.29v.83a5.86 5.86 0 0 0-3.92-1.21c-4.86 0-8.7 3.75-8.7 10.05 0 3.3 1.1 6.04 3.04 7.94 1.96 1.9 4.73 3 8.11 3 2.4 0 4.4-.4 6.62-1.61v-5.55c-2.06 1.42-3.38 1.8-4.86 1.8-1.24 0-2.54-.5-3.52-1.48a6.34 6.34 0 0 1-1.73-4.65ZM249.66 19.43v3.75h8.87v-3.75h-1.19V2.93h-7.68V6.7h1.16v12.74h-1.16ZM260.7 2.94v4.93h6.52V2.94h-6.53Zm-1.16 16.49v3.75h8.9v-3.75h-1.22V9.32h-7.68v3.75h1.15v6.36h-1.15ZM269.4 19.43v3.75h8.7v-3.75h-1.01v-4.71c0-1.01.43-1.65 1.16-1.65.66 0 1.12.67 1.12 1.65v8.46h7.51v-3.75h-.98v-4.65c0-1.16.37-1.7 1.1-1.7.75 0 1.18.6 1.18 1.7v8.4h7.68v-3.75h-1.15v-5.95c0-2.52-1.94-4.45-4.8-4.45-1.53 0-2.77.52-4.53 1.9-1.36-1.41-2.4-1.9-4.13-1.9-1.42 0-2.37.43-4.16 1.79v-1.5h-7.68v3.75h1.15v6.36h-1.15ZM305.95 21.8v1.38h7.77v-3.75h-1.22v-5.46c0-2.31-2.05-4.94-8.06-4.94-2.8 0-4.7.4-6.55.9v3.63c1.47-.69 2.86-1.1 4.56-1.1 2.2 0 3.38 1.02 3.44 2.58a7.72 7.72 0 0 0-3.73-.93c-3.43 0-5.6 1.8-5.6 4.74 0 2.89 1.85 4.59 5 4.59 1.67 0 3.29-.43 4.39-1.65Zm-1.42-1.83c-1.04 0-1.61-.43-1.61-1.41 0-1.01.66-1.5 1.64-1.5.95 0 1.47.49 1.47 1.47 0 1.01-.52 1.44-1.5 1.44ZM315.07 13.07v10.11h8.47v-3.75h-1.94v-6.36h1.94V9.32h-1.94V4.99h-6.53v4.33h-1.3v3.75h1.3ZM339.96 18.8h-4.53c-.58.74-1.19 1.2-2.17 1.2-1.33 0-2.2-.72-2.37-2.34h9.07c.03-.46.06-.9.06-1.35 0-3.99-3.09-7.28-7.77-7.28-4.3 0-7.91 2.63-7.91 7.16 0 2.11.8 3.99 2.4 5.4 1.61 1.45 3.92 1.88 6 1.88 3.35 0 6.27-1.5 7.22-4.68Zm-8.95-4.92c.26-.7.8-1.1 1.56-1.1 1.41 0 1.7 1.22 1.7 2.4v.35h-3.4c0-.72-.03-1.24.14-1.65ZM358.82 18.73h-2.43v-4.07h3.07v-3.2h-3.06V7.37h3.49v2.49h4.68V2.94h-17.59v4.44h1.94v11.35h-1.94v4.45h11.84v-4.45Z" />
          <path fill="currentColor" d="M362.4 16.28c0 4.68 4.1 7.19 8.41 7.19 4.3 0 8.32-2.48 8.32-7.16 0-4.77-3.93-7.28-8.35-7.28-4.36 0-8.37 2.54-8.37 7.25Zm10.2.08c0 1.25-.23 3.18-1.88 3.18-1.64 0-1.79-2.42-1.79-3.58 0-1.15.23-3.18 1.8-3.18 1.78 0 1.87 2.29 1.87 3.58ZM380.18 19.43v3.75h9.24v-3.75h-1.56v-1.39c0-1.59.09-2.17.35-2.66a3 3 0 0 1 1.93-1.33c.81-.2 1.47-.23 3.1-.23v-4.8c-.27-.02-.56-.02-.82-.02-1.93 0-3.32 1.13-4.56 2.45V9.32h-7.68v3.75h1.15v6.36h-1.15ZM405.68 16.65l2.25 6.53h5.43l3.18-10.1h.55V9.31h-5.26v3.75h.8l-1.2 4.19h-.06L409 9.32h-4.01l-3.07 7.94h-.05l-.67-4.19h1.01V9.32h-7.85v3.75h.9l2.53 10.11h5.23l2.66-6.53ZM426 21.8v1.38h7.76v-3.75h-1.2v-5.46c0-2.31-2.06-4.94-8.07-4.94-2.8 0-4.7.4-6.55.9v3.63c1.47-.69 2.86-1.1 4.56-1.1 2.2 0 3.38 1.02 3.44 2.58a7.72 7.72 0 0 0-3.73-.93c-3.43 0-5.6 1.8-5.6 4.74 0 2.89 1.85 4.59 5 4.59 1.67 0 3.29-.43 4.39-1.65Zm-1.42-1.83c-1.04 0-1.62-.43-1.62-1.41 0-1.01.67-1.5 1.65-1.5.95 0 1.47.49 1.47 1.47 0 1.01-.52 1.44-1.5 1.44ZM434.7 19.43v3.75h9.24v-3.75h-1.56v-1.39c0-1.59.08-2.17.34-2.66a3 3 0 0 1 1.94-1.33c.8-.2 1.47-.23 3.09-.23v-4.8c-.26-.02-.55-.02-.8-.02-1.94 0-3.33 1.13-4.57 2.45V9.32h-7.69v3.75h1.16v6.36h-1.16ZM448.23 16.16c0 3.64 1.97 7.3 6 7.3 1.77 0 2.87-.6 4.31-1.55v1.27h7.74v-3.75h-1.21V2.93h-8.09V6.7h1.56v3.78a6.32 6.32 0 0 0-4.07-1.44c-4.04 0-6.24 3.38-6.24 7.13Zm10.43-.17c0 1.33-.3 3.55-2.02 3.55-1.74 0-1.88-2.14-1.88-3.4 0-1.25.35-3.36 2-3.36 1.52 0 1.9 2.05 1.9 3.2Z" />
        </svg>
      `
    }
    case 'a-new-climate': {
      return `
        <svg role="presentation" viewBox="0 0 313 24" width="313" height="24">
          <path fill="currentColor" d="M13.54 3.33c0-1.83-1.84-2.4-3.22-2.35v.17c.89 0 1.57.42 1.57 1 0 .59-.3.94-1.18.94-1-.14-2-.4-2.94-.77a11.3 11.3 0 0 0-3.26-.79A3.14 3.14 0 0 0 1.26 4.6 2.12 2.12 0 0 0 2.75 6.6c-.24-.24-.42-.44-.42-1.02a1.17 1.17 0 0 1 1.3-1.16c1.19.14 2.35.41 3.48.8 1.12.35 2.26.61 3.42.8V9l-1.44 1.19 1.44 1.24v4.09c-.72.38-1.52.58-2.34.56a4.65 4.65 0 0 1-3.68-1.53l3.9-1.83V6.2L3.65 8.3a5.81 5.81 0 0 1 2.43-2.8 7.17 7.17 0 0 0-5.4 6.47 6.56 6.56 0 0 0 4.05 6.13 6.65 6.65 0 0 0 4.91.08 5.9 5.9 0 0 0 3.68-5.72 6.67 6.67 0 0 1-2.6 2.97v-4l1.5-1.2L10.72 9V6.02a2.7 2.7 0 0 0 2.82-2.7ZM5.53 13.85l-1.18.57a5.91 5.91 0 0 1-1.14-3.66c0-.76.13-1.5.37-2.22l1.96-.91-.01 6.22ZM23.34 8.6l-.75.58-2.24-2-2.63 2.02V1.42l-3.55 2.44a1.2 1.2 0 0 1 .9 1.31v10.75l-1.23.86.13.11.6-.44 2.12 2.01 2.85-1.83v-.14l-.74.47-1-.99V9.46l.69-.5 1.56 1.34v5.62c0 3.66-.79 4.32-2.4 4.9 2.68.11 5.09-.78 5.09-5.38V9.46l.8-.64-.2-.22Zm4.78 9.85 4.12-3.32-.1-.18-2.16 1.83-2.48-2.05v-1.2l4.28-3.01-2.17-3.35-4.76 2.6v6.2l-.92.72.11.13.88-.7 3.2 2.33Zm-.62-5.17v-4.7l2.06 3.24-2.06 1.46ZM49.32 2.45a2.8 2.8 0 0 0-.18-.88c-.3.79-.6 1.22-1.53 1.22a2.51 2.51 0 0 1-1.84-.86l-2.72 3.13.13.11.77-.87c.65.63 1.51.98 2.41.98v7.84l-5.51-9.56a3 3 0 0 0-2.43-1.83c-1.49 0-2.63 1.28-2.45 3.44h.1c.1-.53.42-1.2 1.08-1.2.66 0 .94.5 1.2.93v3.11c-1.71 0-2.69.79-2.69 2.14a2.04 2.04 0 0 0 1.58 1.98.73.73 0 0 1-.31-.6c0-.52.39-.8 1.08-.8h.34v3.96c-2 0-3.57 1.12-3.57 3a2.68 2.68 0 0 0 2.03 2.5c.38.1.77.12 1.15.05-1.01-.11-1.53-.62-1.53-1.37a1.18 1.18 0 0 1 .82-1.18c.16-.05.34-.07.5-.05a2.42 2.42 0 0 1 1.85 1l2.7-3.03-.11-.11-.7.79a5.06 5.06 0 0 0-2.9-1.52V5.23l7.64 13.27h.4V5.28a2.87 2.87 0 0 0 2.78-2.83h-.09Zm2.65 16L56 15.13l-.18-.18-2.1 1.83-2.48-2.05v-1.2l4.29-3.01-2.17-3.35-4.75 2.6v6.2l-.93.81.1.13.89-.7 3.29 2.24Zm-.63-5.17v-4.7l2.08 3.24-2.08 1.46Zm19.33-5.03-.63.46-1.84-1.52-2.1 1.83.85.8v7.09l-2.13-1.47V9.75l.74-.51-2.21-2.05-2 1.88.86.8v6.91h-.15l-2-1.46v-5.5c0-1.3-.66-1.68-1.49-2.21s-1.07-.82-1.07-1.48A1.28 1.28 0 0 1 58.33 5a2.9 2.9 0 0 0-2.78 2.43 2.17 2.17 0 0 0 .92 1.83 2.22 2.22 0 0 1 .92 1.65v5.5l-.97.74.1.13.93-.73 2.43 1.92 2.3-1.59 2.51 1.6 4.97-2.92V9.24l1.1-.86-.1-.13Zm16.55-5.33-.96.86-2.11-1.83-2.8 2.27V2.14h-.16v15.35c-.34 0-.98-.22-1.7-.33V4.24a2.22 2.22 0 0 0-2.37-2.23 2.71 2.71 0 0 0-2.76 2.63A1.13 1.13 0 0 1 75.4 3.6c.6 0 1.09.35 1.09 1.61v3.66a2.4 2.4 0 0 0-2.58 2.14 1.72 1.72 0 0 0 1.6 1.83c-.4-.18-.5-.38-.5-.6 0-.55.54-.71 1.26-.71h.18v5.82a2.61 2.61 0 0 0-2.02 2.52 2.84 2.84 0 0 0 1.97 2.65c.37.13.76.17 1.15.14 1.16-.03 2.31-.2 3.42-.5.86-.2 1.72-.35 2.6-.42.73 0 1.04.31 1.04.82 0 .52-.25 1-.64 1.1v.1a2.62 2.62 0 0 0 2.47-2.59 2.59 2.59 0 0 0-2.91-2.3 18.1 18.1 0 0 0-3.4.5c-.94.23-1.9.37-2.85.43-.66 0-1.47-.27-1.47-1.15 0-.88.66-1.43 2.28-1.43.95.02 1.9.15 2.83.38.95.3 1.93.5 2.92.59 1.38 0 2.48-.5 2.48-2.49V3.97l1.02-.94-.11-.1ZM83.4 9.1a1.27 1.27 0 0 1-1.59.36c-.18-.09-.34-.2-.47-.36V4.44l.68-.47 1.38 1.17v3.95Zm0 2.2a1.29 1.29 0 0 0-1.01-.44c-.4 0-.77.16-1.05.44V9.33c.29.27.66.42 1.05.44a1.35 1.35 0 0 0 1.01-.44v1.96Zm0 4.63a1.44 1.44 0 0 1-1.38 1.63c-.23.02-.45.02-.68 0v-6.02c.27-.3.65-.46 1.05-.48a1.37 1.37 0 0 1 1.01.48v4.39Zm8.03 2.5 4.6-2.85V9.35l-2.98-2.18-4.6 2.62v6.18l-.9.81.1.13.73-.6 3.05 2.12Zm-.34-3.23V8.56l2.3 1.7v6.65l-2.3-1.72Zm13.73-7.9c-.3.23-.65.34-1.01.34a1.44 1.44 0 0 1-1.03-.52l-1.71 1.84-1.73-1.84-2.8 2.02.1.14.75-.49 1.01 1.1v6.04l-1.21.86.11.11.6-.44 2.29 1.94 2.88-1.83-.09-.15-.75.46-1.16-1.06V9.18a2.38 2.38 0 0 0 1.65.97c1.18 0 1.97-1.39 2.1-2.83V7.3Zm10.88 8.98-.86.51-4.76-7.05.25-.27a3.3 3.3 0 0 0 2 .75 2.87 2.87 0 0 0 2.33-3.02 1.83 1.83 0 0 1-1.57.75 2.4 2.4 0 0 1-1.54-.75l-3.24 4.76 4.3 6.53 3.19-2.07-.1-.14Zm-5.77.16-.73.48-1-1V1.43l-3.55 2.44a1.2 1.2 0 0 1 .9 1.31v10.75l-1.23.86.13.11.6-.44 2.12 1.94 2.85-1.83-.09-.13Zm20.94-13.1c0-1.83-1.84-2.4-3.23-2.35v.17c.88 0 1.56.42 1.56 1 0 .59-.3.94-1.18.94-1-.14-1.98-.4-2.92-.77a11.4 11.4 0 0 0-3.27-.79 3.14 3.14 0 0 0-3.26 3.06 2.12 2.12 0 0 0 1.5 2.01c-.28-.16-.47-.36-.47-.95a1.18 1.18 0 0 1 .83-1.1c.15-.05.31-.07.48-.05 1.18.13 2.35.4 3.47.8 1.13.34 2.28.6 3.44.79V9l-1.45 1.19 1.45 1.24v4.09a4.9 4.9 0 0 1-2.35.56 4.65 4.65 0 0 1-3.68-1.53l3.9-1.83V6.2l-4.73 2.1a5.85 5.85 0 0 1 2.45-2.8 7.18 7.18 0 0 0-5.4 6.54 6.57 6.57 0 0 0 6.6 6.57 5.94 5.94 0 0 0 5.66-3.79c.29-.75.42-1.55.38-2.36a6.67 6.67 0 0 1-2.55 2.97v-4l1.5-1.2-1.5-1.23V6.02a2.71 2.71 0 0 0 2.85-2.7h-.08Zm-8.03 10.52-1.1.57a5.92 5.92 0 0 1-1.13-3.66 6.7 6.7 0 0 1 .3-2.22l1.95-.91-.02 6.22Zm10.92-11.22-1.99 1.67 1.7 1.83 1.98-1.67-1.7-1.83Zm2.96 13.8-.72.48-.99-1V9.47l.83-.64-.11-.15-.7.55-1.64-1.96-2.7 1.83v.17l.68-.46.9 1.12v6l-1.07.86.11.11.61-.44 2.13 1.94 2.84-1.83-.17-.13Zm15.22 0-.62.35-1.05-1V9.45l.85-.64-.11-.15-.76.59L148 7.19l-2.56 1.97-2.22-1.97-2.5 1.96-1.7-1.96-2.71 1.83v.16l.68-.45.97 1.1v6.07l-.75.75 2.17 1.83 2.1-1.83-.85-.8v-6.5l.55-.4 1.56 1.33v5.62l-.72.75 2.2 1.83 2.03-1.83-.84-.8v-6.5l.53-.42 1.58 1.35v5.5l-.62.65 2.2 2 2.9-1.98-.05-.02Zm7.93-1.48-2.15 1.83-2.49-2.05v-1.2l4.29-3.01-2.17-3.35-4.76 2.6v6.31l3.27 2.37 4.14-3.32-.13-.18Zm-4.64-1.7V8.58l2.08 3.24-2.08 1.43Zm12.88-.9-1.84-1.4a4.52 4.52 0 0 0 1.7-3.93 1.42 1.42 0 0 1-1.4.92 2.07 2.07 0 0 1-1.6-.9l-4.35 2.42v3.3l1.6 1.26c-1.6 1.4-1.84 2.28-1.84 3.09a1.95 1.95 0 0 0 1.29 1.83v-.13a.79.79 0 0 1-.39-.71.93.93 0 0 1 1.03-.8 2.33 2.33 0 0 1 1.84.96l4.01-2.43-.05-3.48Zm-.96-2.78a11.01 11.01 0 0 1-2.85 2.89l-1.03-.86V8.3a2.64 2.64 0 0 0 2.33 1.67c.54.02 1.06-.11 1.53-.37l.02-.03Zm-1.75 7.45a2.95 2.95 0 0 0-2.63-1.83 3.3 3.3 0 0 0-1.84.42c.9-1.22 2.05-2.23 3.37-2.97l1.1.92v3.46ZM183.91 2.37h-4.7l-4.81 15.46h3.55l.89-3.2h4.96l.89 3.2h4.1l-4.88-15.46Zm-4.23 9.18 1.63-5.76 1.66 5.76h-3.3ZM205.04 2.37h-3.42v8.41l-5.16-8.41h-3.78v15.46h3.47V8.44l5.76 9.39h3.13V2.37ZM217.32 12.13c0-3.51-2.25-5.76-5.32-5.76-3.16 0-5.52 2.5-5.52 5.9 0 3.41 2.19 5.75 5.72 5.75 2.2 0 3.86-.97 5.08-2.93l-2.3-1.02c-.73 1.2-1.5 1.64-2.6 1.64-1.22 0-2.12-1.02-2.12-2.5v-.29h7.06v-.8Zm-7.13-1.2c0-1.05.5-2.27 1.88-2.27 1.21 0 1.63.93 1.63 2.28h-3.51ZM230.9 6.56 229.22 13l-1.87-6.43h-2.67L222.7 13l-1.72-6.43h-3.78l3.65 11.27h2.71l2.06-6.5 1.87 6.5h2.56l3.6-11.27h-2.76ZM247.06 12.08c-.44 1.77-1.5 2.8-2.95 2.8-1.24 0-2.19-.63-2.6-2.09a11.6 11.6 0 0 1-.27-2.76c0-1.08.08-2.07.28-2.78.36-1.33 1.15-2.16 2.39-2.16 1.72 0 2.25 1.3 2.34 2.67l3.69-.36c-.38-2.98-2.39-5.4-5.97-5.4-1.98 0-3.64.72-4.85 2.03-1.42 1.54-2.06 3.44-2.06 6.05 0 2.34.51 4 1.61 5.45a6.07 6.07 0 0 0 4.97 2.5c3.07 0 5.5-1.48 6.43-5.28l-3-.67ZM255 2.28h-3.79v15.46h3.8V2.28ZM260.9 2h-3.81v2.89h3.82v-2.9Zm-.02 4.63h-3.8v11.1h3.8V6.64ZM279.94 9.85c0-2.2-1.14-3.57-3.04-3.57-.98 0-2.3.37-3.76 2.18a2.8 2.8 0 0 0-2.87-2.18c-1 0-2.27.4-3.64 2v-1.8h-3.71v11.26h3.77V9.9c.84-.66 1.26-.84 1.73-.84.66 0 1.12.4 1.12 1.61v7.07h3.78V9.9c.77-.64 1.28-.84 1.72-.84.66 0 1.13.4 1.13 1.61v7.07h3.77V9.85ZM292.02 17.54a6.26 6.26 0 0 1-.33-2.12V9.97c0-1.22-.31-2-1.06-2.65-.84-.71-2.12-1.04-4.04-1.04-2.78 0-4.33 1.1-5.01 3.16l3.33.68c.22-1.08.84-1.52 1.68-1.52.81 0 1.35.5 1.35 1.48v.66c-5.1.15-6.78 1.9-6.78 4.02a3.08 3.08 0 0 0 3.2 3.18c1.08 0 2.25-.34 3.66-1.35l.18 1.15h3.82v-.2Zm-4.06-2.52c-.77.44-1.06.6-1.72.6-.64 0-1.15-.49-1.15-1.22 0-1.3 1.17-1.83 2.87-1.83v2.45ZM300.8 15.07c-.24.02-.68.08-.99.08-1.3 0-1.61-.3-1.61-1.72v-4.4h2.6V6.49h-2.6V2.74h-3.33l-.34 3.74h-1.92v2.56h1.81v6.11c0 2 1.7 2.79 3.73 2.79.82 0 1.42-.07 2.66-.3v-2.57ZM312.4 12.04c0-3.51-2.25-5.76-5.32-5.76-3.16 0-5.52 2.5-5.52 5.9 0 3.42 2.18 5.76 5.72 5.76 2.2 0 3.86-.98 5.08-2.94l-2.3-1.02c-.73 1.2-1.5 1.64-2.6 1.64-1.22 0-2.13-1.02-2.13-2.5v-.28h7.07v-.8Zm-7.13-1.2c0-1.05.5-2.27 1.88-2.27 1.2 0 1.63.93 1.63 2.28h-3.51Z" />
        </svg>
      `
    }
    default:
      return `
        <svg role="presentation" viewBox="0 0 433 31" width="433" height="31">
          <path fill="currentColor" d="M17.54 3.23c0-2.49-2.5-3.26-4.37-3.18v.22c1.2 0 2.12.57 2.12 1.37 0 .8-.4 1.27-1.6 1.27a17.37 17.37 0 0 1-4-1.05C8.3 1.3 6.8.93 5.29.8A4.26 4.26 0 0 0 .85 4.95a2.88 2.88 0 0 0 2.03 2.73c-.33-.32-.58-.6-.58-1.4a1.59 1.59 0 0 1 1.78-1.56c1.6.19 3.2.55 4.72 1.1 1.52.45 3.07.81 4.64 1.07v4.05l-1.94 1.62 1.94 1.69v5.54a6.5 6.5 0 0 1-3.17.77 6.32 6.32 0 0 1-5-2.08l5.3-2.5V7.14L4.1 10a7.9 7.9 0 0 1 3.3-3.8 9.75 9.75 0 0 0-7.34 8.78 8.92 8.92 0 0 0 5.51 8.33 9.03 9.03 0 0 0 6.67.12 8.02 8.02 0 0 0 5-7.78 9.07 9.07 0 0 1-3.55 4.03v-5.42l2.05-1.64-2.05-1.67V6.89a3.66 3.66 0 0 0 3.85-3.66ZM6.65 17.53l-1.6.77a8.03 8.03 0 0 1-1.55-4.97 9.9 9.9 0 0 1 .5-3.01l2.67-1.25-.02 8.46Zm24.2-7.14-1.02.8-3.05-2.71-3.57 2.73V.64L18.4 3.95a1.62 1.62 0 0 1 1.22 1.8v14.6l-1.67 1.16.18.15.82-.6 2.87 2.74 3.87-2.49v-.2l-1 .65-1.34-1.34v-8.86l.92-.67 2.12 1.82v7.63c0 4.98-1.07 5.87-3.27 6.67 3.65.15 6.92-1.07 6.92-7.32v-8.13l1.1-.87-.27-.3Zm6.5 13.38 5.6-4.5-.15-.25-2.93 2.49-3.37-2.79v-1.64L42.32 13l-2.95-4.55-6.47 3.53v8.44l-1.24.97.14.17 1.2-.95 4.35 3.16Zm-.85-7.01v-6.4l2.8 4.41-2.8 1.99ZM66.15 2.04c-.02-.41-.1-.82-.25-1.2-.4 1.07-.82 1.67-2.07 1.67a3.4 3.4 0 0 1-2.5-1.17l-3.7 4.25.18.15 1.05-1.2a4.7 4.7 0 0 0 3.27 1.35v10.65l-7.5-12.99a4.08 4.08 0 0 0-3.3-2.48c-2.01 0-3.56 1.74-3.31 4.67h.12c.15-.72.58-1.64 1.48-1.64s1.27.67 1.62 1.27V9.6c-2.32 0-3.65 1.07-3.65 2.9a2.78 2.78 0 0 0 2.15 2.7 1 1 0 0 1-.42-.83c0-.7.52-1.1 1.47-1.1h.45v5.4c-2.72 0-4.85 1.52-4.85 4.08a3.64 3.64 0 0 0 2.77 3.4c.5.13 1.04.15 1.55.06-1.37-.15-2.07-.85-2.07-1.86a1.61 1.61 0 0 1 1.8-1.67 3.28 3.28 0 0 1 2.5 1.37l3.67-4.13-.15-.15-.95 1.07a6.88 6.88 0 0 0-3.95-2.07V5.82l10.4 18.03h.55V5.89a3.9 3.9 0 0 0 3.77-3.85h-.13Zm3.6 21.73 5.5-4.5-.25-.25-2.85 2.49-3.37-2.79v-1.64L74.6 13l-2.95-4.55-6.45 3.53v8.44l-1.27 1.09.15.17 1.2-.94 4.47 3.03Zm-.85-7.01v-6.4l2.82 4.41-2.82 1.99Zm26.25-6.84-.84.62-2.5-2.06-2.85 2.48 1.15 1.1v9.62l-2.9-1.99v-7.73l1-.7-3-2.78-2.72 2.56 1.17 1.1v9.37h-.2l-2.72-1.99v-7.46c0-1.77-.9-2.29-2.02-3.01-1.13-.72-1.45-1.12-1.45-2.01a1.74 1.74 0 0 1 1.12-1.52 3.93 3.93 0 0 0-3.77 3.3 2.95 2.95 0 0 0 1.25 2.5 3.01 3.01 0 0 1 1.25 2.23v7.46l-1.33 1.02.15.18 1.25-1 3.3 2.61 3.12-2.16 3.43 2.16 6.74-3.95v-8.6l1.5-1.18-.13-.17Zm22.49-7.24-1.3 1.17-2.88-2.49-3.8 3.09V1.6h-.22v20.87c-.45 0-1.32-.3-2.3-.45V4.47a3.02 3.02 0 0 0-2-2.85c-.39-.14-.8-.2-1.22-.18a3.68 3.68 0 0 0-3.74 3.58 1.54 1.54 0 0 1 1.4-1.42c.8 0 1.47.48 1.47 2.2v4.97a3.25 3.25 0 0 0-3.5 2.9 2.33 2.33 0 0 0 2.17 2.5c-.55-.26-.67-.53-.67-.83 0-.74.72-.97 1.7-.97h.25v7.91a3.55 3.55 0 0 0-2.75 3.43 3.85 3.85 0 0 0 2.67 3.6c.5.17 1.05.23 1.58.18 1.57-.03 3.13-.25 4.64-.67a23.5 23.5 0 0 1 3.53-.57c1 0 1.42.42 1.42 1.12 0 .7-.35 1.34-.88 1.5v.12a3.55 3.55 0 0 0 3.35-3.51 3.53 3.53 0 0 0-3.94-3.13c-1.56.08-3.11.31-4.63.7-1.27.3-2.56.48-3.87.56-.9 0-2-.37-2-1.56 0-1.2.9-1.94 3.1-1.94 1.3.03 2.59.2 3.85.52 1.29.41 2.62.68 3.97.8 1.87 0 3.37-.68 3.37-3.39V4.1l1.38-1.27-.15-.15Zm-5.17 8.38a1.73 1.73 0 0 1-2.16.49 1.95 1.95 0 0 1-.64-.49V4.75l.92-.65 1.88 1.6v5.36Zm0 2.99a1.74 1.74 0 0 0-1.38-.6 2.1 2.1 0 0 0-1.42.6v-2.66c.39.36.9.57 1.42.6a1.83 1.83 0 0 0 1.38-.6v2.66Zm0 6.3a1.96 1.96 0 0 1-1.88 2.2c-.3.03-.61.03-.92 0v-8.18c.37-.39.88-.62 1.42-.64a1.86 1.86 0 0 1 1.38.64v5.97Zm10.91 3.4 6.25-3.88V11.4l-4.05-2.96-6.25 3.56v8.4l-1.22 1.1.13.17 1-.82 4.14 2.89Zm-.47-4.4v-9l3.12 2.3v9.03l-3.12-2.33Zm18.66-10.72c-.4.3-.88.45-1.38.44a1.96 1.96 0 0 1-1.4-.7l-2.32 2.5-2.35-2.5-3.8 2.74.13.2 1.03-.67 1.37 1.5v8.2l-1.65 1.17.15.15.83-.6 3.1 2.64 3.91-2.49-.12-.2-1.02.62-1.58-1.44v-9a3.24 3.24 0 0 0 2.25 1.32c1.6 0 2.67-1.9 2.85-3.86v-.02Zm14.79 12.18-1.18.7-6.47-9.58.35-.37c.76.63 1.71.99 2.7 1.02a3.9 3.9 0 0 0 3.17-4.1 2.5 2.5 0 0 1-2.12 1.02 3.25 3.25 0 0 1-2.1-1.02l-4.4 6.46 5.85 8.88 4.32-2.8-.12-.2Zm-7.85.23-1 .64-1.35-1.34V.64l-4.82 3.31a1.63 1.63 0 0 1 1.23 1.8v14.6l-1.68 1.16.18.15.82-.6 2.88 2.64 3.87-2.49-.13-.17Zm28.46-17.81c0-2.49-2.5-3.26-4.4-3.18v.22c1.2 0 2.12.57 2.12 1.37 0 .8-.4 1.27-1.6 1.27a17.2 17.2 0 0 1-3.97-1.05A15.46 15.46 0 0 0 164.68.8a4.27 4.27 0 0 0-4.43 4.16 2.88 2.88 0 0 0 2.03 2.73c-.38-.22-.63-.5-.63-1.3a1.61 1.61 0 0 1 1.78-1.56c1.6.18 3.2.55 4.72 1.1 1.53.45 3.09.81 4.67 1.07v3.95l-1.97 1.62 1.97 1.69v5.54c-.99.52-2.08.79-3.2.77a6.32 6.32 0 0 1-5-2.08l5.3-2.5V7.14L163.5 10a7.95 7.95 0 0 1 3.32-3.8 9.75 9.75 0 0 0-7.34 8.88c0 2.36.95 4.63 2.63 6.3a9.01 9.01 0 0 0 9.55 2.04 8.04 8.04 0 0 0 5-7.77 9.06 9.06 0 0 1-3.47 4.03v-5.42l2.05-1.64-2.05-1.67V6.89a3.69 3.69 0 0 0 3.88-3.66h-.1Zm-10.92 14.3-1.5.77a8.04 8.04 0 0 1-1.52-4.97 9.1 9.1 0 0 1 .4-3.01l2.64-1.25-.02 8.46ZM180.89 2.3l-2.7 2.26 2.3 2.49 2.7-2.27-2.3-2.48Zm4.02 18.75-.98.64-1.34-1.34v-8.78l1.12-.87-.15-.2-.95.75-2.22-2.66-3.67 2.48v.23l.92-.62 1.22 1.51v8.16l-1.45 1.17.15.15.83-.6 2.9 2.64 3.84-2.49-.22-.17Zm20.68 0-.85.47-1.42-1.37v-8.58l1.15-.87-.15-.2-1.03.8-3.07-2.81-3.47 2.68-3.02-2.68-3.4 2.66-2.3-2.66-3.7 2.48v.23l.93-.62 1.32 1.49v8.26l-1.02 1.02 2.95 2.48 2.84-2.48-1.15-1.1v-8.83l.75-.54 2.13 1.81v7.64l-.98 1.02 2.97 2.48 2.78-2.48-1.15-1.1v-8.83l.72-.57 2.15 1.84v7.46l-.85.9 3 2.7 3.95-2.68-.08-.02Zm10.77-2.02-2.92 2.49-3.38-2.79v-1.64l5.82-4.08-2.94-4.55-6.47 3.53v8.58l4.44 3.21 5.62-4.5-.17-.25Zm-6.3-2.31v-6.34l2.83 4.4-2.83 1.94Zm17.49-1.22-2.5-1.89a6.16 6.16 0 0 0 2.32-5.35 1.94 1.94 0 0 1-1.9 1.25 2.8 2.8 0 0 1-2.17-1.22l-5.92 3.28v4.48l2.18 1.71c-2.18 1.92-2.5 3.11-2.5 4.2a2.66 2.66 0 0 0 1.75 2.5v-.18a1.07 1.07 0 0 1-.53-.97 1.27 1.27 0 0 1 1.4-1.1 3.16 3.16 0 0 1 2.5 1.32l5.44-3.3-.07-4.73Zm-1.3-3.78a14.96 14.96 0 0 1-3.87 3.93l-1.4-1.17V10a3.58 3.58 0 0 0 3.17 2.27c.73.02 1.44-.15 2.08-.5l.02-.05Zm-2.37 10.12a4.01 4.01 0 0 0-3.57-2.48 4.49 4.49 0 0 0-2.5.57 14.48 14.48 0 0 1 4.57-4.03l1.5 1.24v4.7ZM359.68 18.58h-9.57v-3.93h5.82v-4.38h-5.82v-4h9.15V1.94h-14.52v21h14.94v-4.35Z" />
          <path fill="currentColor" d="m370.59 7.63-3.12 9.03-2.82-9.03h-5.49l5.79 15.3h3.81l5.79-15.3h-3.96ZM388.64 15.19c0-4.77-3.06-7.83-7.23-7.83-4.3 0-7.5 3.39-7.5 8 0 4.66 2.97 7.84 7.77 7.84 3 0 5.25-1.32 6.9-4l-3.12-1.37c-1 1.62-2.04 2.22-3.54 2.22-1.65 0-2.88-1.38-2.88-3.4v-.38h9.6v-1.08Zm-9.7-1.62c0-1.44.7-3.1 2.56-3.1 1.65 0 2.22 1.27 2.22 3.1h-4.77ZM404.6 12.22c0-3-1.6-4.86-4.18-4.86-1.35 0-3.12.54-4.98 2.73V7.63h-5.04v15.3h5.14V12.28c1.13-.9 1.73-1.14 2.36-1.14.9 0 1.54.54 1.54 2.19v9.6h5.16V12.22ZM417.08 19.3c-.33.03-.93.12-1.35.12-1.77 0-2.2-.42-2.2-2.34V11.1h3.55V7.63h-3.54V2.56H409l-.45 5.07h-2.61v3.48h2.46v8.3c0 2.7 2.3 3.79 5.07 3.79 1.1 0 1.92-.1 3.6-.4v-3.5ZM432.17 17.98c0-2.7-2.3-4.11-4.2-4.5a46.2 46.2 0 0 0-3.45-.63c-1.14-.15-1.62-.54-1.62-1.14 0-.42.51-1.2 2.16-1.2 1.68 0 2.67.63 3.33 1.74l3.06-1.8c-1.62-2.22-3.24-3.1-6.39-3.1-3.2 0-6.72 1.63-6.72 5.2 0 2.43 1.62 3.54 3.42 4.2 1.11.39 2.85.54 4.32.78 1.14.2 1.47.6 1.47 1.1 0 .67-.84 1.36-2.55 1.36-2.04 0-3.3-.9-3.96-2.07l-3.06 1.92c1.53 2.64 3.93 3.36 7.05 3.36 4.3 0 7.14-2.04 7.14-5.22ZM250.1 15.25c-.6 2.4-2.03 3.8-4.01 3.8-1.68 0-2.97-.86-3.54-2.84-.21-.7-.36-2.2-.36-3.75 0-1.47.12-2.82.39-3.78.48-1.8 1.56-2.94 3.24-2.94 2.34 0 3.06 1.77 3.18 3.63l5-.48c-.5-4.05-3.23-7.35-8.1-7.35-2.7 0-4.94.99-6.6 2.76-1.91 2.1-2.78 4.68-2.78 8.22 0 3.18.69 5.43 2.19 7.4a8.25 8.25 0 0 0 6.75 3.4c4.17 0 7.47-2.01 8.73-7.17l-4.08-.9ZM260.9 1.93h-5.16v21h5.16v-21ZM268.91 1.54h-5.19v3.93h5.2V1.54Zm-.03 6.3h-5.16v15.09h5.16V7.83ZM294.77 12.22c0-3-1.56-4.86-4.13-4.86-1.32 0-3.13.5-5.1 2.97a3.8 3.8 0 0 0-3.9-2.97c-1.35 0-3.1.54-4.95 2.73V7.63h-5.05v15.3h5.13V12.28c1.15-.9 1.72-1.14 2.35-1.14.9 0 1.52.54 1.52 2.19v9.6h5.13V12.28c1.06-.87 1.75-1.14 2.35-1.14.9 0 1.52.54 1.52 2.19v9.6h5.13V12.22ZM311.18 22.66a8.51 8.51 0 0 1-.45-2.88v-7.41c0-1.65-.42-2.7-1.44-3.6-1.14-.96-2.88-1.41-5.49-1.41-3.78 0-5.88 1.5-6.8 4.29l4.52.93c.3-1.47 1.14-2.07 2.28-2.07 1.11 0 1.83.69 1.83 2v.9c-6.93.22-9.2 2.59-9.2 5.47 0 2.49 1.8 4.32 4.34 4.32 1.47 0 3.06-.45 4.98-1.83l.24 1.56h5.2v-.27Zm-5.52-3.42c-1.05.6-1.44.8-2.34.8-.87 0-1.56-.65-1.56-1.64 0-1.77 1.6-2.5 3.9-2.5v3.34ZM323.12 19.3c-.33.03-.93.12-1.35.12-1.77 0-2.2-.42-2.2-2.34V11.1h3.55V7.63h-3.54V2.56h-4.53l-.45 5.07h-2.61v3.48h2.46v8.3c0 2.7 2.3 3.79 5.07 3.79 1.1 0 1.92-.1 3.6-.4v-3.5ZM338.87 15.19c0-4.77-3.06-7.83-7.23-7.83-4.29 0-7.5 3.39-7.5 8 0 4.66 2.97 7.84 7.77 7.84 3 0 5.25-1.32 6.9-4l-3.12-1.37c-.99 1.62-2.04 2.22-3.54 2.22-1.65 0-2.88-1.38-2.88-3.4v-.38h9.6v-1.08Zm-9.69-1.62c0-1.44.7-3.1 2.55-3.1 1.65 0 2.22 1.27 2.22 3.1h-4.77Z" />
        </svg>
      `
  }
}