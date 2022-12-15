export default function logo(type) {
  switch (type) {
    case 'climate-forward': {
      return `
        <svg aria-hidden="true" role="presentation" viewBox="0 0 467 32" width="467" height="32">
          <path fill="currentColor" d="M17.97 3.97c0-2.42-2.44-3.17-4.26-3.1v.22c1.16 0 2.07.56 2.07 1.33 0 .78-.4 1.24-1.56 1.24a16.94 16.94 0 0 1-3.9-1.02 14.96 14.96 0 0 0-4.3-1.04A4.16 4.16 0 0 0 1.7 5.65 2.8 2.8 0 0 0 3.67 8.3c-.31-.31-.56-.58-.56-1.35a1.55 1.55 0 0 1 1.73-1.53c1.57.18 3.12.54 4.6 1.07 1.49.44 3 .79 4.53 1.04v3.95l-1.9 1.58 1.9 1.64v5.41c-.95.5-2.01.77-3.09.75a6.16 6.16 0 0 1-4.87-2.04l5.16-2.42V7.78l-6.3 2.79a7.7 7.7 0 0 1 3.21-3.71 9.5 9.5 0 0 0-7.16 8.56 8.7 8.7 0 0 0 5.38 8.12 8.8 8.8 0 0 0 6.5.11 7.82 7.82 0 0 0 4.88-7.58A8.84 8.84 0 0 1 14.22 20V14.7l2-1.6-2-1.62V7.54a3.57 3.57 0 0 0 3.75-3.57ZM7.35 17.91l-1.56.76a7.83 7.83 0 0 1-1.5-4.85c0-1 .17-1.99.48-2.94l2.6-1.2-.02 8.23Zm23.6-6.95-1 .77-2.97-2.64-3.48 2.67V1.46l-4.7 3.22a1.58 1.58 0 0 1 1.19 1.74v14.23l-1.63 1.14.17.15.8-.58 2.8 2.66 3.78-2.42v-.2l-.98.64-1.31-1.31V12.1l.9-.66 2.07 1.77v7.44c0 4.85-1.05 5.72-3.2 6.5 3.56.15 6.75-1.04 6.75-7.13V12.1l1.07-.85-.26-.3ZM37.28 24l5.45-4.39-.14-.24-2.85 2.42-3.3-2.71v-1.6l5.68-3.98-2.87-4.43-6.3 3.44v8.22l-1.22.94.14.17 1.17-.92L37.28 24Zm-.83-6.84v-6.23l2.73 4.3-2.73 1.93Zm28.9-14.35c-.01-.4-.1-.8-.24-1.16-.39 1.04-.8 1.62-2.02 1.62a3.32 3.32 0 0 1-2.44-1.14l-3.6 4.15.17.14 1.02-1.16c.85.83 2 1.3 3.2 1.3v10.38L54.12 4.3a3.98 3.98 0 0 0-3.22-2.43c-1.97 0-3.48 1.7-3.23 4.56h.12c.14-.7.56-1.6 1.43-1.6.88 0 1.25.66 1.59 1.24v4.12c-2.27 0-3.56 1.04-3.56 2.84a2.7 2.7 0 0 0 2.1 2.61.97.97 0 0 1-.42-.8c0-.67.51-1.06 1.44-1.06h.44v5.26c-2.66 0-4.73 1.48-4.73 3.97a3.55 3.55 0 0 0 2.7 3.32c.5.13 1.01.15 1.51.05-1.33-.14-2.02-.82-2.02-1.81a1.57 1.57 0 0 1 1.76-1.63 3.2 3.2 0 0 1 2.43 1.34l3.58-4.03-.14-.14-.93 1.04a6.7 6.7 0 0 0-3.85-2.01V6.5l10.13 17.57h.54V6.57a3.8 3.8 0 0 0 3.68-3.76h-.13ZM68.86 24l5.36-4.39-.25-.24-2.77 2.42-3.29-2.71v-1.6l5.67-3.98-2.87-4.43-6.28 3.44v8.22l-1.24 1.06.14.17 1.17-.92L68.86 24Zm-.83-6.84v-6.23l2.75 4.3-2.75 1.93Zm25.6-6.66-.83.6-2.44-2.01-2.77 2.42 1.12 1.07v9.38l-2.83-1.94v-7.54l.98-.68-2.93-2.71-2.65 2.5 1.14 1.06v9.14h-.2l-2.65-1.94v-7.27c0-1.72-.87-2.23-1.97-2.93-1.1-.7-1.41-1.1-1.41-1.97a1.7 1.7 0 0 1 1.1-1.48 3.83 3.83 0 0 0-3.68 3.23 2.87 2.87 0 0 0 1.22 2.42 2.94 2.94 0 0 1 1.21 2.18v7.28l-1.29 1 .15.16 1.22-.97 3.21 2.55 3.04-2.11 3.34 2.1 6.58-3.85V11.8l1.46-1.13-.13-.17Zm21.91-7.06-1.27 1.14-2.8-2.42-3.7 3V2.4h-.22v20.34c-.44 0-1.29-.3-2.24-.44V5.2a2.96 2.96 0 0 0-3.14-2.96 3.6 3.6 0 0 0-3.65 3.49 1.5 1.5 0 0 1 1.36-1.38c.78 0 1.44.46 1.44 2.13v4.85a3.18 3.18 0 0 0-3.41 2.84 2.27 2.27 0 0 0 2.12 2.42c-.54-.24-.66-.5-.66-.8 0-.73.7-.95 1.66-.95h.24v7.71a3.46 3.46 0 0 0-2.68 3.35 3.77 3.77 0 0 0 4.14 3.68 18.4 18.4 0 0 0 4.53-.65 22.9 22.9 0 0 1 3.43-.56c.98 0 1.4.41 1.4 1.1 0 .67-.35 1.3-.86 1.45v.12a3.46 3.46 0 0 0 3.26-3.42 3.45 3.45 0 0 0-3.84-3.05c-1.53.08-3.03.3-4.5.68-1.25.29-2.51.48-3.78.55-.88 0-1.95-.36-1.95-1.52 0-1.17.88-1.9 3.02-1.9 1.26.04 2.52.2 3.75.51 1.25.4 2.55.67 3.87.78 1.83 0 3.29-.66 3.29-3.3V4.82l1.34-1.23-.15-.15Zm-5.04 8.17a1.68 1.68 0 0 1-2.1.47 1.9 1.9 0 0 1-.63-.47V5.45l.9-.63 1.83 1.55v5.24Zm0 2.91a1.7 1.7 0 0 0-1.34-.58c-.52 0-1.02.22-1.39.58v-2.6c.38.36.87.56 1.39.59a1.78 1.78 0 0 0 1.34-.58v2.59Zm0 6.13a1.91 1.91 0 0 1-1.83 2.16c-.3.02-.6.02-.9 0v-7.98c.36-.38.86-.6 1.39-.63a1.81 1.81 0 0 1 1.34.63v5.82Zm10.64 3.32 6.09-3.78v-8.24l-3.95-2.88-6.08 3.46v8.2l-1.2 1.06.12.17.98-.8 4.04 2.81Zm-.46-4.29v-8.77l3.04 2.25v8.8l-3.04-2.28Zm18.19-10.45a2.2 2.2 0 0 1-1.34.44 1.9 1.9 0 0 1-1.37-.68l-2.26 2.43-2.29-2.43-3.7 2.67.12.2 1-.66 1.34 1.45v8l-1.6 1.14.14.15.8-.58 3.02 2.57 3.82-2.43-.12-.2-1 .61-1.53-1.4v-8.78a3.15 3.15 0 0 0 2.2 1.29c1.55 0 2.6-1.85 2.77-3.76v-.03Zm14.41 11.88-1.14.68-6.3-9.33.33-.36c.75.6 1.67.96 2.63.99a3.8 3.8 0 0 0 3.1-4 2.43 2.43 0 0 1-2.08 1 3.17 3.17 0 0 1-2.04-1l-4.29 6.3 5.7 8.66 4.22-2.74-.13-.2Zm-7.64.22-.98.63-1.31-1.3V1.45l-4.7 3.22a1.58 1.58 0 0 1 1.2 1.74v14.23l-1.64 1.14.17.15.8-.58 2.8 2.57 3.78-2.43-.12-.17Zm27.73-17.36c0-2.42-2.43-3.17-4.28-3.1v.22c1.16 0 2.07.56 2.07 1.33 0 .78-.4 1.24-1.56 1.24a16.77 16.77 0 0 1-3.87-1.02 15.08 15.08 0 0 0-4.34-1.04 4.16 4.16 0 0 0-4.3 4.05 2.8 2.8 0 0 0 1.96 2.66c-.36-.21-.6-.48-.6-1.26a1.57 1.57 0 0 1 1.09-1.45c.2-.07.42-.1.63-.07 1.58.17 3.12.53 4.6 1.06 1.5.45 3.02.8 4.56 1.04v3.86l-1.92 1.58 1.92 1.64v5.41c-.96.5-2.03.77-3.12.75a6.16 6.16 0 0 1-4.87-2.04l5.16-2.42V7.78l-6.25 2.79a7.75 7.75 0 0 1 3.24-3.71 9.5 9.5 0 0 0-7.16 8.65 8.7 8.7 0 0 0 8.74 8.7 7.87 7.87 0 0 0 7.5-5c.38-1 .56-2.07.51-3.14a8.84 8.84 0 0 1-3.39 3.93V14.7l2-1.6-2-1.62V7.54a3.6 3.6 0 0 0 3.78-3.57h-.1Zm-10.64 13.94-1.46.76a7.83 7.83 0 0 1-1.49-4.85c-.03-1 .1-1.99.4-2.94l2.57-1.2-.02 8.23ZM177.2 3.05l-2.63 2.2 2.24 2.43 2.63-2.2-2.25-2.43Zm3.92 18.28-.95.63-1.32-1.3V12.1l1.1-.85-.15-.2-.93.73-2.16-2.6-3.58 2.43v.22l.9-.6 1.2 1.47v7.95l-1.42 1.14.15.15.8-.58 2.83 2.57 3.75-2.43-.22-.17Zm20.16 0-.83.46-1.39-1.33V12.1l1.12-.85-.14-.2-1 .78-3-2.74-3.38 2.62-2.95-2.62-3.31 2.6-2.24-2.6-3.6 2.42v.22l.9-.6 1.29 1.45v8.05l-1 1 2.87 2.42 2.78-2.43-1.12-1.06v-8.61l.73-.53 2.07 1.77v7.44l-.95 1 2.9 2.42 2.7-2.43-1.12-1.06v-8.61l.7-.56 2.1 1.8v7.27l-.83.87 2.92 2.64 3.85-2.61-.07-.03Zm10.5-1.96-2.86 2.42-3.28-2.71v-1.6l5.67-3.98-2.87-4.43-6.31 3.44v8.36l4.33 3.13 5.48-4.39-.17-.24Zm-6.14-2.26v-6.18l2.75 4.3-2.75 1.88Zm17.04-1.18-2.43-1.85a6 6 0 0 0 2.26-5.2 1.89 1.89 0 0 1-1.85 1.2 2.74 2.74 0 0 1-2.12-1.18l-5.77 3.2v4.36l2.12 1.67c-2.12 1.87-2.43 3.03-2.43 4.1a2.58 2.58 0 0 0 1.7 2.42v-.17a1.05 1.05 0 0 1-.51-.94 1.23 1.23 0 0 1 1.36-1.07 3.08 3.08 0 0 1 2.44 1.29l5.3-3.23-.07-4.6Zm-1.26-3.69c-1.01 1.5-2.3 2.8-3.78 3.83l-1.36-1.14v-4.36a3.5 3.5 0 0 0 3.09 2.2c.7.03 1.4-.14 2.02-.48l.03-.05Zm-2.32 9.87a3.9 3.9 0 0 0-3.48-2.43c-.85-.05-1.7.14-2.44.56a14.1 14.1 0 0 1 4.46-3.93l1.46 1.22v4.58ZM238.36 12.06c0-3.38 1.04-4.85 2.6-4.85 1.38 0 2.02 1.15 2.22 3.5h5.43V2.93h-5.29v.83a5.86 5.86 0 0 0-3.92-1.21c-4.86 0-8.7 3.75-8.7 10.05 0 3.3 1.1 6.04 3.04 7.94 1.96 1.9 4.73 3 8.11 3 2.4 0 4.4-.4 6.62-1.61v-5.55c-2.06 1.42-3.38 1.8-4.86 1.8-1.24 0-2.54-.5-3.52-1.48a6.34 6.34 0 0 1-1.73-4.65ZM249.66 19.43v3.75h8.87v-3.75h-1.19V2.93h-7.68V6.7h1.16v12.74h-1.16ZM260.7 2.94v4.93h6.52V2.94h-6.53Zm-1.16 16.49v3.75h8.9v-3.75h-1.22V9.32h-7.68v3.75h1.15v6.36h-1.15ZM269.4 19.43v3.75h8.7v-3.75h-1.01v-4.71c0-1.01.43-1.65 1.16-1.65.66 0 1.12.67 1.12 1.65v8.46h7.51v-3.75h-.98v-4.65c0-1.16.37-1.7 1.1-1.7.75 0 1.18.6 1.18 1.7v8.4h7.68v-3.75h-1.15v-5.95c0-2.52-1.94-4.45-4.8-4.45-1.53 0-2.77.52-4.53 1.9-1.36-1.41-2.4-1.9-4.13-1.9-1.42 0-2.37.43-4.16 1.79v-1.5h-7.68v3.75h1.15v6.36h-1.15ZM305.95 21.8v1.38h7.77v-3.75h-1.22v-5.46c0-2.31-2.05-4.94-8.06-4.94-2.8 0-4.7.4-6.55.9v3.63c1.47-.69 2.86-1.1 4.56-1.1 2.2 0 3.38 1.02 3.44 2.58a7.72 7.72 0 0 0-3.73-.93c-3.43 0-5.6 1.8-5.6 4.74 0 2.89 1.85 4.59 5 4.59 1.67 0 3.29-.43 4.39-1.65Zm-1.42-1.83c-1.04 0-1.61-.43-1.61-1.41 0-1.01.66-1.5 1.64-1.5.95 0 1.47.49 1.47 1.47 0 1.01-.52 1.44-1.5 1.44ZM315.07 13.07v10.11h8.47v-3.75h-1.94v-6.36h1.94V9.32h-1.94V4.99h-6.53v4.33h-1.3v3.75h1.3ZM339.96 18.8h-4.53c-.58.74-1.19 1.2-2.17 1.2-1.33 0-2.2-.72-2.37-2.34h9.07c.03-.46.06-.9.06-1.35 0-3.99-3.09-7.28-7.77-7.28-4.3 0-7.91 2.63-7.91 7.16 0 2.11.8 3.99 2.4 5.4 1.61 1.45 3.92 1.88 6 1.88 3.35 0 6.27-1.5 7.22-4.68Zm-8.95-4.92c.26-.7.8-1.1 1.56-1.1 1.41 0 1.7 1.22 1.7 2.4v.35h-3.4c0-.72-.03-1.24.14-1.65ZM358.82 18.73h-2.43v-4.07h3.07v-3.2h-3.06V7.37h3.49v2.49h4.68V2.94h-17.59v4.44h1.94v11.35h-1.94v4.45h11.84v-4.45Z" />
          <path fill="currentColor" d="M362.4 16.28c0 4.68 4.1 7.19 8.41 7.19 4.3 0 8.32-2.48 8.32-7.16 0-4.77-3.93-7.28-8.35-7.28-4.36 0-8.37 2.54-8.37 7.25Zm10.2.08c0 1.25-.23 3.18-1.88 3.18-1.64 0-1.79-2.42-1.79-3.58 0-1.15.23-3.18 1.8-3.18 1.78 0 1.87 2.29 1.87 3.58ZM380.18 19.43v3.75h9.24v-3.75h-1.56v-1.39c0-1.59.09-2.17.35-2.66a3 3 0 0 1 1.93-1.33c.81-.2 1.47-.23 3.1-.23v-4.8c-.27-.02-.56-.02-.82-.02-1.93 0-3.32 1.13-4.56 2.45V9.32h-7.68v3.75h1.15v6.36h-1.15ZM405.68 16.65l2.25 6.53h5.43l3.18-10.1h.55V9.31h-5.26v3.75h.8l-1.2 4.19h-.06L409 9.32h-4.01l-3.07 7.94h-.05l-.67-4.19h1.01V9.32h-7.85v3.75h.9l2.53 10.11h5.23l2.66-6.53ZM426 21.8v1.38h7.76v-3.75h-1.2v-5.46c0-2.31-2.06-4.94-8.07-4.94-2.8 0-4.7.4-6.55.9v3.63c1.47-.69 2.86-1.1 4.56-1.1 2.2 0 3.38 1.02 3.44 2.58a7.72 7.72 0 0 0-3.73-.93c-3.43 0-5.6 1.8-5.6 4.74 0 2.89 1.85 4.59 5 4.59 1.67 0 3.29-.43 4.39-1.65Zm-1.42-1.83c-1.04 0-1.62-.43-1.62-1.41 0-1.01.67-1.5 1.65-1.5.95 0 1.47.49 1.47 1.47 0 1.01-.52 1.44-1.5 1.44ZM434.7 19.43v3.75h9.24v-3.75h-1.56v-1.39c0-1.59.08-2.17.34-2.66a3 3 0 0 1 1.94-1.33c.8-.2 1.47-.23 3.09-.23v-4.8c-.26-.02-.55-.02-.8-.02-1.94 0-3.33 1.13-4.57 2.45V9.32h-7.69v3.75h1.16v6.36h-1.16ZM448.23 16.16c0 3.64 1.97 7.3 6 7.3 1.77 0 2.87-.6 4.31-1.55v1.27h7.74v-3.75h-1.21V2.93h-8.09V6.7h1.56v3.78a6.32 6.32 0 0 0-4.07-1.44c-4.04 0-6.24 3.38-6.24 7.13Zm10.43-.17c0 1.33-.3 3.55-2.02 3.55-1.74 0-1.88-2.14-1.88-3.4 0-1.25.35-3.36 2-3.36 1.52 0 1.9 2.05 1.9 3.2Z" />
        </svg>
      `
    }
    case 'climate-hub': {
      return `
        <div aria-hidden="true">
          <picture role="presentation">
            <source srcset="https://res.cloudinary.com/dykmd8idd/video/upload/s--0jukw-BP--/c_crop,h_1000,w_1000,ac_none,so_0,q_95,f_auto/v1623349413/white_ehgn1x.mp4" type="video/mp4">
            <img role="presentation" src="https://res.cloudinary.com/dykmd8idd/video/upload/s--0jukw-BP--/c_crop,h_1000,w_1000,ac_none,so_0,q_95,f_auto/v1623349413/white_ehgn1x.jpg" alt="The New York Times Climate Hub">
          </picture>
          <svg role="presentation" viewBox="0 0 313 75" width="313" height="75">
            <path fill="currentColor" d="M83.513 54.913c0-1.85-1.757-2.311-3.144-2.311v.277c.832 0 1.48.277 1.48.925 0 .37-.278.924-1.11.924-.647 0-2.034-.37-3.05-.74-1.203-.462-2.312-.832-3.237-.832-1.849 0-3.143 1.387-3.143 2.959 0 1.387 1.017 1.85 1.386 2.034l.093-.185c-.185-.185-.462-.37-.462-.925 0-.37.37-1.017 1.294-1.017.832 0 1.942.37 3.421.833 1.294.37 2.681.647 3.42.74v2.865l-1.386 1.202v.093l1.387 1.202v3.975c-.74.463-1.572.555-2.312.555-1.386 0-2.588-.37-3.605-1.48l3.79-1.848v-6.38l-4.622 2.034c.37-1.202 1.386-2.034 2.403-2.589l-.092-.277c-2.774.74-5.27 3.328-5.27 6.472 0 3.698 3.051 6.472 6.472 6.472 3.698 0 6.102-2.959 6.102-6.01h-.185c-.555 1.202-1.387 2.312-2.404 2.866v-3.79l1.48-1.202v-.093l-1.48-1.202v-2.866c1.387 0 2.774-.924 2.774-2.681zm-8.044 10.17l-1.11.555c-.646-.832-1.016-1.942-1.016-3.513 0-.648 0-1.387.185-1.942l1.941-.832v5.732zm9.8 2.127l-1.201.924.185.185.554-.462 2.034 1.849 2.774-1.85-.092-.184-.74.462-.925-.924v-6.287l.74-.555 1.572 1.294v5.64c0 3.513-.74 4.068-2.312 4.623v.277c2.59.093 4.993-.74 4.993-5.27V60.83l.832-.647-.185-.185-.74.555-2.31-1.942-2.59 1.942V52.97h-.184l-3.237 2.22v.184c.37.185.925.37.925 1.387L85.27 67.21zm16.92-1.017l-2.311 1.756-2.312-1.849v-1.11l4.346-2.958v-.092l-2.22-3.329-4.807 2.589v6.102l-.925.74.185.185.833-.648 3.143 2.312 4.161-3.329-.093-.37zm-4.623-1.572v-4.53l.185-.093 2.034 3.236-2.219 1.387zm22.282-10.54c0-.278-.092-.555-.185-.832h-.184c-.278.74-.648 1.11-1.572 1.11-.832 0-1.387-.463-1.757-.833l-2.681 3.051.185.185.924-.832c.555.462 1.017.832 2.312.925v7.673l-5.455-9.338c-.462-.74-1.11-1.756-2.404-1.756-1.479 0-2.774 1.294-2.589 3.328h.278c.092-.555.369-1.202 1.017-1.202.462 0 .924.462 1.202.925v3.05c-1.665 0-2.774.74-2.774 2.127 0 .74.37 1.85 1.479 2.127v-.185a.839.839 0 01-.277-.647c0-.463.37-.832 1.017-.832h.462v3.883c-1.942 0-3.513 1.11-3.513 2.958 0 1.757 1.479 2.59 3.143 2.497v-.185c-1.017-.093-1.479-.555-1.479-1.202 0-.832.555-1.202 1.294-1.202.74 0 1.387.462 1.849 1.017l2.682-2.959-.185-.185-.647.74c-1.017-.924-1.572-1.202-2.774-1.387v-9.245l7.396 12.944h.555V56.855c1.387-.093 2.681-1.202 2.681-2.774zm6.75 12.112l-2.312 1.756-2.311-1.849v-1.11l4.345-2.958v-.092l-2.219-3.329-4.807 2.589v6.102l-.925.74.185.185.832-.648 3.144 2.312 4.16-3.329-.092-.37zm-4.623-1.572v-4.53l.185-.093 2.034 3.236-2.219 1.387zm19.693-4.993l-.647.463-1.757-1.48-2.034 1.85.832.831v6.935l-2.219-1.387v-5.732l.74-.463-2.126-2.034-2.034 1.85.832.831v6.657l-.278.185-1.941-1.387V61.2c0-1.294-.648-1.664-1.387-2.127-.647-.462-1.017-.74-1.017-1.386 0-.555.555-.832.832-1.017v-.185c-.74 0-2.681.74-2.681 2.496 0 .925.462 1.294.924 1.757.463.462.925.832.925 1.664v5.362l-1.017.74.185.185.924-.74 2.127 1.85 2.311-1.572 2.589 1.572 4.9-2.867v-6.194l1.202-.925-.185-.185zm17.197-5.085l-.924.832-2.034-1.849-3.052 2.22V53.71h-.277l.093 14.978c-.278 0-1.11-.185-1.757-.37l-.185-12.482c0-.924-.647-2.218-2.311-2.218-1.665 0-2.774 1.294-2.774 2.588h.277c.093-.554.37-1.017.925-1.017s1.017.37 1.017 1.572v3.606c-1.664.092-2.681 1.017-2.681 2.219 0 .74.369 1.849 1.479 1.849v-.185c-.37-.185-.462-.462-.462-.647 0-.555.462-.74 1.201-.74h.37v5.733c-1.387.462-1.941 1.479-1.941 2.588 0 1.572 1.202 2.682 3.051 2.682 1.294 0 2.404-.185 3.513-.463.925-.185 2.127-.462 2.681-.462.74 0 1.017.37 1.017.832 0 .647-.277.925-.647 1.017v.185c1.48-.277 2.404-1.202 2.404-2.589s-1.387-2.219-2.866-2.219c-.74 0-2.311.278-3.421.463-1.294.277-2.589.462-2.959.462-.647 0-1.386-.278-1.386-1.202 0-.74.647-1.387 2.219-1.387.832 0 1.849.093 2.866.37 1.109.277 2.126.555 3.051.555 1.387 0 2.589-.463 2.589-2.404V55.653l1.109-.925-.185-.185zm-3.791 5.64c-.277.277-.647.555-1.109.555-.462 0-.925-.278-1.11-.555v-4.068l.925-.647 1.294 1.202v3.513zm0 2.774c-.185-.185-.647-.463-1.109-.463-.462 0-.925.278-1.11.463v-2.404c.185.185.648.462 1.11.462.462 0 .924-.277 1.109-.462v2.404zm0 4.345c0 .74-.462 1.48-1.479 1.48h-.74v-5.455c.185-.185.648-.463 1.11-.463.462 0 .832.278 1.109.463v3.975zm12.667-6.564l-2.959-2.127-4.53 2.589v6.01l-.925.74.093.184.74-.555 2.958 2.22 4.623-2.774v-6.287zm-4.993 5.825v-6.657l2.312 1.664v6.564l-2.312-1.572zm13.776-7.767h-.185c-.277.185-.554.37-.832.37-.369 0-.832-.185-1.017-.462h-.185l-1.571 1.756-1.572-1.756-2.774 1.849.093.185.739-.462.925 1.016v5.825l-1.202.925.185.185.555-.463 2.219 1.85 2.866-1.942-.093-.185-.832.462-1.109-.924v-6.472c.462.462 1.017.924 1.664.924 1.294.093 2.034-1.201 2.126-2.68zm11.095 8.876l-3.143 2.127-4.253-6.473 3.051-4.715h.185c.369.37.924.74 1.571.74.648 0 1.11-.37 1.387-.74h.185c-.092 1.85-1.387 2.959-2.311 2.959-.925 0-1.387-.462-1.942-.74l-.277.462 4.623 6.842.924-.555v.093zm-10.17-.462l-1.202.924.185.185.555-.462 2.034 1.849 2.773-1.85-.185-.184-.739.462-.925-.924V52.97h-.092l-3.329 2.22v.184c.37.185.925.278.925 1.387V67.21zm25.518-12.297c0-1.85-1.757-2.311-3.144-2.311v.277c.833 0 1.48.277 1.48.925 0 .37-.278.924-1.11.924-.647 0-2.034-.37-3.051-.74-1.202-.37-2.311-.74-3.236-.74-1.849 0-3.143 1.388-3.143 2.96 0 1.386 1.017 1.849 1.387 2.033l.092-.184c-.277-.185-.555-.37-.555-.925 0-.37.37-1.017 1.295-1.017.832 0 1.941.37 3.421.832 1.294.37 2.681.647 3.42.74v2.866l-1.386 1.202v.092l1.386 1.202v3.976c-.739.462-1.571.554-2.311.554-1.387 0-2.589-.37-3.606-1.479l3.791-1.849V57.78l-4.623 2.034c.462-1.202 1.479-2.034 2.404-2.681l-.092-.185c-2.774.74-5.271 3.236-5.271 6.38 0 3.698 3.052 6.472 6.472 6.472 3.699 0 6.103-2.96 6.103-6.01h-.185c-.555 1.202-1.387 2.311-2.404 2.866v-3.79l1.479-1.203v-.092l-1.387-1.202v-2.774c1.387 0 2.774-.924 2.774-2.681zm-8.044 10.17l-1.109.555c-.647-.832-1.017-1.942-1.017-3.513 0-.648.092-1.387.277-1.942l1.942-.832-.093 5.732zm11.28-11.095h-.093l-1.849 1.572v.093l1.572 1.756h.185l1.849-1.572v-.092l-1.664-1.757zm2.774 13.684l-.74.462-.925-.924v-6.38l.925-.647-.185-.185-.647.555-1.664-1.942-2.682 1.85.185.277.648-.462.832 1.016v6.01l-1.202.925.092.185.647-.463 2.034 1.85 2.774-1.85-.092-.277zm15.44-.093l-.647.463-1.017-.925V60.83l.924-.74-.185-.184-.739.647-2.127-1.942-2.774 1.942-2.126-1.942-2.589 1.942-1.664-1.942-2.681 1.85.092.277.647-.462.925 1.016v6.01l-.74.74 2.127 1.757 2.034-1.85-.832-.832V60.83l.832-.554 1.387 1.294v5.547l-.74.74 2.127 1.757 2.034-1.85-.833-.832V60.83l.74-.462 1.479 1.294v5.548l-.647.647 2.127 1.942 2.866-1.942v-.278zm8.044-1.386l-2.312 1.756-2.311-1.849v-1.11l4.345-2.958v-.092l-2.219-3.329-4.807 2.589v6.287l3.236 2.312 4.16-3.329-.092-.277zm-4.623-1.572v-4.53l.185-.093 2.034 3.236-2.219 1.387zm13.036-.832l-1.756-1.387c1.201-1.017 1.664-2.404 1.664-3.328v-.555h-.185c-.185.462-.555.924-1.295.924-.739 0-1.201-.37-1.664-.924l-4.16 2.311v3.329l1.571 1.202c-1.571 1.386-1.849 2.311-1.849 3.05 0 .925.463 1.572 1.202 1.85l.093-.185c-.185-.185-.37-.277-.37-.74 0-.277.37-.74 1.109-.74.925 0 1.48.648 1.757.925l3.976-2.404V63.79h-.093zm-1.017-2.774c-.647 1.11-2.034 2.22-2.866 2.774l-1.017-.832V59.72c.37.924 1.387 1.664 2.404 1.664.647 0 1.017-.093 1.479-.37zm-1.572 7.397c-.462-1.017-1.571-1.757-2.681-1.757-.277 0-1.017 0-1.757.462.463-.74 1.665-2.034 3.236-2.958l1.11.924.092 3.329zM35.105 28.082C32.692 37.964 26.2 41.814 17.87 41.814 5.975 41.814 0 32.39 0 21.072S6.263.101 18.788.101a15.322 15.322 0 0116.03 14.076l-11.261 1.494c-.172-3.562-1.494-6.492-4.999-6.492-5.458 0-5.918 8.944-5.918 11.778 0 3.563.287 11.664 6.206 11.664 2.585 0 4.71-1.781 5.745-6.378l10.514 1.839zM49.354 41.104H38.035V.884h11.319v40.22zM65.276 9.12H53.957V.885h11.319V9.12zm0 32.003H53.957V12.625h11.319v28.498zM116.241 41.105h-11.376v-17.85c0-2.527-.919-3.389-2.298-3.389-.919 0-1.915.46-3.562 1.781v19.458H87.629v-17.85c0-2.527-.92-3.389-2.299-3.389-.977 0-1.915.402-3.562 1.781v19.458H70.449V11.822h11.147v4.712c3.62-4.195 6.894-5.229 9.48-5.229a7.316 7.316 0 017.469 5.343c3.562-4.136 7.182-5.343 9.768-5.343 4.941 0 7.928 3.562 7.928 9.308v20.492zM149.156 41.105H137.55l-.459-2.872a15.497 15.497 0 01-9.308 3.332c-5.229 0-8.791-2.873-8.791-8.446 0-8.733 11.376-9.997 17.869-10.342v-1.015c0-2.298-.977-3.83-3.333-3.83-2.355 0-3.102 1.666-3.504 3.677l-10.285-1.38c2.241-6.492 7.412-8.905 13.732-8.905 7.182 0 14.824.805 14.824 9.576v14.46c-.065 1.67.229 3.336.861 4.884v.861zm-12.238-13.157a10.254 10.254 0 00-1.321-.115 4.062 4.062 0 00-4.539 4.137 2.665 2.665 0 002.643 2.988 5.094 5.094 0 003.217-.92v-6.09zM171.969 19.52h-6.32V29c0 2.873.288 4.482 4.022 4.482.77-.037 1.537-.114 2.298-.23v7.66a36.76 36.76 0 01-7.009.747c-5.746 0-10.572-2.183-10.572-7.469V19.52h-4.079v-7.66h4.366l.805-9.481h10.112v9.48h6.377v7.66zM202.709 28.597h-17.984v.632c.115 3.16 1.494 5.573 4.022 5.573 2.528 0 3.964-.632 4.884-4.194l8.733 2.068a13.75 13.75 0 01-13.732 9.02c-9.576 0-15.685-6.262-15.685-15.57a14.623 14.623 0 014.384-10.644 14.625 14.625 0 0110.727-4.18c8.56 0 14.593 5.746 14.593 13.905l.058 3.39zm-10.974-5.114c0-3.39-1.322-5.63-3.39-5.63-2.816 0-3.831 2.355-3.831 5.63h7.221zM244.496 41.104H232.43V25.552h-9.021v15.552h-12.065V.884h12.065v14.997h9.021V.885h12.066v40.219zM277.703 41.105h-11.147v-4.692c-3.62 4.195-6.952 5.229-9.576 5.229-4.941 0-8.101-3.563-8.101-9.308V11.822h11.491v17.792c0 2.528.977 3.39 2.356 3.39a5.743 5.743 0 003.619-1.78V11.821h11.358v29.284zM301.311 41.468a9.575 9.575 0 01-9.193-6.263l-1.551 5.899h-8.274V.884h11.319v14.882c3.236-3.39 5.152-4.463 8.216-4.463 6.205 0 10.572 4.424 10.572 14.307 0 9.882-3.505 15.858-11.089 15.858zm-4.309-22.063a4.137 4.137 0 00-3.39 1.608v8.389c0 4.194 2.355 4.194 3.332 4.194 2.126 0 3.333-2.873 3.333-7.182s-1.15-7.01-3.275-7.01z" />
          </svg>
        </div>
      `
    }
    case 'a-new-climate': {
      return `
        <svg aria-hidden="true" fill="none" height="40" viewBox="0 0 582 40" width="582">
          <g fill="currentColor">
            <path clip-rule="evenodd" d="m292.141 27.5322c-.806-1.8048-2.688-3.1115-4.606-3.1115-.462 0-1.807 0-3.034.7687.728-1.2287 2.879-3.5328 5.643-5.1828l1.997 1.5355zm2.84-12.8251c-1.073 1.9194-3.57 3.8022-4.952 4.8776l-1.766-1.3828v-5.7208c.69 1.5359 2.381 2.8422 4.224 2.8422 1.076 0 1.652-.1943 2.494-.6162zm1.728 4.838-3.109-2.3405c2.073-1.8048 2.879-4.2256 2.879-5.8756 0-.2307-.038-.652-.076-1.0375h-.384c-.307.8448-.922 1.5755-2.188 1.5755-1.228 0-2.114-.6905-2.88-1.5375l-7.256 3.9563v5.8735l2.688 2.112c-2.727 2.4186-3.227 4.1082-3.227 5.3369 0 1.612.729 2.7656 2.112 3.3037l.193-.3469c-.345-.3073-.653-.4995-.653-1.2287 0-.5375.653-1.3062 1.881-1.3062 1.574 0 2.534 1.0755 3.034 1.6515l6.986-4.1849zm-22.806 1.5043v-7.9089l.269-.1922 3.532 5.5678zm8.064 2.6479-3.955 3.0744-4.109-3.2271v-1.9192l7.641-5.1063v-.2308l-3.801-5.8374-8.332 4.4562v10.9418l5.568 4.0307 7.294-5.7589zm-14.015 2.4588-1.151.7688-1.728-1.5755v-10.9423l1.65-1.2286-.27-.3468-1.418 1.076-3.686-3.4167-4.761 3.3787-3.647-3.3787-4.685 3.3401-2.879-3.3401-4.609 3.2255.232.4218 1.152-.7686 1.573 1.7281v10.4437l-1.266 1.2667 3.685 3.1094 3.571-3.2255-1.459-1.3798v-10.9052l1.383-.9213 2.494 2.3025v9.7532l-1.228 1.2667 3.724 3.1094 3.495-3.2255-1.46-1.3798v-10.9833l1.229-.8068 2.65 2.2661v9.5991l-1.076 1.114 3.764 3.4162 4.952-3.3782zm-26.876.1906-1.229.8068-1.574-1.5734v-11.135l1.536-1.152-.308-.3833-1.189.9213-2.803-3.3401-4.606 3.2255.266.4218 1.152-.7686 1.422 1.7666v10.4438l-2.074 1.5734.23.3073 1.076-.7687 3.532 3.2255 4.838-3.2255zm-4.915-23.84262-.23-.038-3.226 2.7276v.22907l2.726 3.07133h.272l3.222-2.688-.037-.19053zm-19.542 19.35202-1.959.96c-1.112-1.4595-1.843-3.4167-1.843-6.1444 0-1.1124.115-2.4952.462-3.4547l3.378-1.4973zm14.013-17.85468c0-3.185334-2.993-4.108804-5.491-3.99213503v.49946603c1.499.037998 2.651.537999 2.651 1.533869 0 .69213-.5 1.57546-1.997 1.57546-1.191 0-3.494-.69066-5.336-1.30626-2.035-.69054-3.955-1.343204-5.568-1.343204-3.148 0-5.528 2.342134-5.528 5.220794 0 2.34281 1.764 3.18761 2.494 3.49481l.231-.38334c-.461-.3088-.921-.65253-.921-1.57386 0-.69227.614-1.80627 2.226-1.80627 1.459 0 3.38.65253 5.914 1.3828 2.188.61453 4.606 1.19053 5.912 1.3448v4.98995l-2.458 2.0355v.1927l2.458 2.15v6.8729c-1.267.7287-2.727.9213-3.994.9213-2.342 0-4.568-.6145-6.334-2.5733l6.604-3.1876v-11.01812l-8.102 3.60932c.846-2.15 2.534-3.57078 4.262-4.60878l-.115-.38334c-4.799 1.30667-9.177 5.72082-9.177 11.17282 0 6.5277 5.3 11.3652 11.328 11.3652 6.526 0 10.672-5.1068 10.596-10.5204l-.384-.038c-.959 2.0734-2.342 4.0308-4.147 5.0682v-6.6802l2.612-2.0734-.039-.2292-2.573-2.0756v-4.98995c2.381 0 4.876-1.6136 4.876-4.64693zm-44.497 21.42398-2.151 1.6135.269.3073 1.038-.7301 3.608 3.3015 4.838-3.2255-.269-.3454-1.228.8068-1.576-1.5734v-24.918815h-.345l-5.835 3.878135v.34533c.576.34533 1.651.498 1.651 2.4568zm17.737.9213-5.489 3.6094-7.45-11.249 5.262-8.1781.345-.038c.615.614 1.689 1.2667 2.688 1.2667 1.112 0 1.88-.614 2.34-1.2667h.309c-.193 3.264-2.381 5.1068-4.033 5.1068-1.688 0-2.495-.7688-3.377-1.3068l-.5.7307 8.062 11.939 1.615-.9973zm-19.388-15.4724h-.307c-.422.3839-.96.6527-1.421.6527-.615 0-1.421-.3833-1.805-.8813h-.307l-2.725 2.9926-2.803-2.9926-4.761 3.3.23.3833 1.267-.8432 1.651 1.7645v10.1751l-2.151 1.6135.269.3073 1.038-.7301 3.876 3.3015 5.03-3.3402-.23-.3452-1.419.8452-1.883-1.69v-11.3271c.807.8848 1.766 1.6536 2.88 1.6536 2.15 0 3.34-2.3822 3.571-4.8396zm-23.959 13.4771v-11.5197l4.071 2.9186v11.5199zm8.563-10.1749-5.223-3.7256-7.832 4.4942v10.5204l-1.612 1.3062.231.3438 1.267-1.036 5.182 3.8001 7.987-4.8755zm-22.037 11.4416c0 1.3068-.886 2.5714-2.574 2.5714-.269 0-1.038-.0381-1.306-.0745v-9.4464c.385-.3469 1.076-.8828 1.958-.8828.807 0 1.459.4615 1.922.8828zm0-7.5255c-.386-.3833-1.076-.8068-1.922-.8068-.845 0-1.612.5-1.958.8068v-4.2229c.346.3068 1.113.8426 1.958.8426.846 0 1.536-.4577 1.922-.8426zm0-4.7995c-.424.4619-1.115.9219-1.922.9219-.882 0-1.536-.538-1.958-.9219v-7.17809l1.652-1.11413 2.228 2.03387zm6.602-9.94369-1.613 1.45934-3.609-3.14947-5.26 3.91773v-3.68706h-.536l.113 26.14695c-.537-.0766-1.88-.3855-3.109-.5761l-.114-21.84525c0-1.61413-1.154-3.84013-4.033-3.84013-2.956 0-4.875 2.26453-4.875 4.53066h.459c.155-.95986.654-1.80466 1.613-1.80466.999 0 1.844.61413 1.844 2.76413v6.29675c-2.957.1147-4.646 1.7662-4.646 3.8 0 1.2683.575 3.2256 2.649 3.3038l.076-.3855c-.691-.3052-.843-.7287-.843-1.1141 0-.9192.883-1.3026 2.11-1.3026h.577v9.9818c-2.343.8073-3.418 2.5333-3.418 4.4927 0 2.6859 2.15 4.7214 5.299 4.7214 2.227 0 4.146-.3839 6.183-.8453 1.649-.3454 3.645-.7287 4.607-.7287 1.228 0 1.766.5761 1.766 1.4594 0 1.112-.5 1.5354-1.153 1.7281l.077.3833c2.65-.4994 4.186-2.075 4.186-4.4541 0-2.4568-2.343-3.9162-4.952-3.9162-1.346 0-3.995.4219-5.991.8834-2.228.4994-4.492.7286-5.184.7286-1.112 0-2.496-.538-2.496-2.0333 0-1.3448 1.115-2.4193 3.879-2.4193 1.497 0 3.185.2292 5.03.651 1.958.4235 3.686.9615 5.374.9615 2.342 0 4.453-.8453 4.453-4.262v-19.88798l1.881-1.6136zm-29.909 8.86809-1.191.8834-3.071-2.6099-3.571 3.2255 1.459 1.3813v12.1724l-3.916-2.4953v-9.9079l1.267-.8812-3.762-3.4948-3.495 3.2255 1.459 1.3813v11.5577l-.499.3052-3.417-2.4166v-9.7151c0-2.226-1.075-2.8787-2.497-3.762-1.188-.7301-1.728-1.34265-1.728-2.45665 0-.92347.923-1.45947 1.383-1.72813l-.038-.38547c-1.229-.038-4.6468 1.3068-4.7228 4.41775-.0386 1.612.7302 2.3025 1.5354 3.0713.8067.7667 1.5374 1.4953 1.5374 2.8401v9.3302l-1.728 1.3427.2688.3469 1.5742-1.2296 4.261 3.34 4.031-2.726 4.454 2.726 8.563-4.9906v-10.8272l2.112-1.5353zm-34.4778 8.8319v-7.9089l.2688-.1922 3.5328 5.5678zm8.063 2.6479-3.9542 3.0744-4.1088-3.2271v-1.9192l7.6416-5.1063v-.2308l-3.8015-5.8374-8.3324 4.4562v10.5948l-1.65 1.2698.2688.3438 1.4959-1.1901 5.453 3.9542 7.2948-5.7589zm-11.6338-21.15468c0-.5-.1147-.92134-.3052-1.49587h-.3855c-.4995 1.34267-1.1141 2.07187-2.688 2.07187-1.3808 0-2.4568-.8432-3.0328-1.45934l-4.6068 5.33533.3833.34694 1.3052-1.49534c.999.76667 1.7282 1.49534 3.9542 1.53387v13.43852l-9.4443-16.35732c-.7292-1.22813-1.9588-3.0708-4.2235-3.0708-2.5348 0-4.876 2.1896-4.5686 5.87507h.4598c.1162-.998.614-2.07187 1.7282-2.07187.8833 0 1.6901.8432 2.112 1.61187v5.25945c-2.9172 0-4.838 1.3448-4.838 3.7233 0 1.2287.6145 3.3022 2.65 3.6876l.038-.3474c-.2694-.2687-.538-.5739-.538-1.112 0-.8834.6525-1.4594 1.8426-1.4594.1927 0 .7307.0366.8454.0766v6.8344c-3.4167.038-6.0662 1.9193-6.0662 5.1448 0 3.0713 2.6495 4.5307 5.4135 4.376l.038-.3833c-1.7281-.1911-2.6495-.9979-2.6495-2.112 0-1.3828.998-2.1099 2.2662-2.1099 1.3048 0 2.4568.8052 3.2636 1.7282l4.6453-5.1845-.3833-.3468-1.1907 1.3448c-1.7661-1.574-2.7656-2.15-4.7995-2.4573v-16.16455l13.0156 22.69215h.9214v-22.61562c2.4948-.15266 4.8376-2.03386 4.8376-4.83746zm-38.9298 18.50678v-7.9089l.2688-.1922 3.5328 5.5678zm8.0615 2.6479-3.9527 3.0744-4.1088-3.2271v-1.9192l7.6396-5.1063v-.2308l-3.8-5.8374-8.3317 4.4562v10.5948l-1.6521 1.2698.2688.3438 1.4978-1.1901 5.4516 3.9542 7.2963-5.7589zm-29.4855 1.7281-2.1514 1.6135.2686.3073 1.038-.7301 3.609 3.3015 4.8374-3.2255-.2306-.3454-1.2667.8068-1.5735-1.5734v-11.0568l1.3047-.961 2.764 2.226v9.7918c0 6.1041-1.3432 7.1036-4.1088 8.101v.4235c4.5703.1911 8.6776-1.3448 8.6776-9.1772v-10.5203l1.4588-1.1536-.2687-.3437-1.2666.9979-3.9542-3.4167-4.6068 3.4547v-13.284415h-.3474l-5.7187 3.840135v.34533c.5739.34693 1.5353.576 1.5353 2.4948zm-17.08587-3.5693-1.95886.96c-1.1125-1.4595-1.84271-3.4167-1.84271-6.1444 0-1.1124.11459-2.4952.46147-3.4547l3.37812-1.4973zm14.01297-17.85468c0-3.185334-2.9948-4.108804-5.49-3.99213503v.49946603c1.4973.037998 2.6495.537999 2.6495 1.533869 0 .69213-.4995 1.57546-1.997 1.57546-1.1906 0-3.4926-.69066-5.3374-1.30626-2.0334-.69054-3.95265-1.343204-5.5662-1.343204-3.1474 0-5.5302 2.342134-5.5302 5.220794 0 2.34281 1.76667 3.18761 2.49687 3.49481l.23125-.38334c-.46199-.3088-.92344-.65253-.92344-1.57386 0-.69227.61615-1.80627 2.22812-1.80627 1.45939 0 3.37813.65253 5.913 1.3828 2.188.61453 4.6074 1.19053 5.912 1.3448v4.98995l-2.4573 2.0355v.1927l2.4573 2.15v6.8729c-1.2666.7287-2.726.9213-3.9926.9213-2.3423 0-4.56885-.6145-6.335-2.5733l6.6036-3.1876v-11.01812l-8.101 3.60932c.8448-2.15 2.53333-3.57078 4.26147-4.60878l-.11459-.38334c-4.79948 1.30667-9.17708 5.72082-9.17708 11.17282 0 6.5277 5.29896 11.3652 11.3271 11.3652 6.5276 0 10.6745-5.1068 10.5964-10.5204l-.3833-.038c-.96 2.0734-2.3428 4.0308-4.1475 5.0682v-6.6802l2.612-2.0734-.0401-.2292-2.5719-2.0756v-4.98995c2.3808 0 4.876-1.6136 4.876-4.64693z" fill-rule="evenodd"/>
            <path d="m373.446 29.2266h-11.874l-8.164-19.1016h-.079v13.0859h2.383v6.0157h-10.86v-6.0157h2.5v-15.35148h-2.5v-6.01573h15.196l7.305 17.61721h.077v-11.60148h-2.265v-6.01573h10.859v6.01573h-2.578z"/>
            <path d="m386.571 29.6172c-2.813 0-5.939-.5859-8.125-2.5391-2.15-1.914-3.243-4.4525-3.243-7.3047 0-6.1322 4.883-9.6874 10.704-9.6874 6.327 0 10.507 4.453 10.507 9.8442 0 .6244-.039 1.211-.078 1.8355h-12.265c.233 2.1875 1.405 3.164 3.203 3.164 1.328 0 2.148-.6251 2.929-1.6407h6.133c-1.289 4.2969-5.234 6.3282-9.765 6.3282zm-.235-14.4531c-1.016 0-1.758.5468-2.109 1.4844-.235.5468-.196 1.25-.196 2.2265h4.609v-.4688c0-1.6016-.39-3.2421-2.304-3.2421z"/>
            <path d="m422.164 29.2266h-7.344l-3.047-8.8281-3.593 8.8281h-7.071l-3.437-13.672h-1.211v-5.078h10.624v5.078h-1.367l.899 5.6641h.077l4.142-10.7421h5.429l3.204 10.7421h.077l1.64-5.6641h-1.093v-5.078h7.109v5.078h-.742z"/>
            <path d="m449.547 29.7344c-4.57 0-8.32-1.4844-10.976-4.0626-2.617-2.5781-4.102-6.2891-4.102-10.7416 0-8.51558 5.196-13.59425 11.758-13.59425 2.187 0 3.867.46867 5.312 1.64067v-1.13293h7.148v10.50781h-7.342c-.275-3.16395-1.134-4.72648-3.008-4.72648-2.11 0-3.516 1.99213-3.516 6.56248 0 2.8124.937 4.8828 2.344 6.2891 1.328 1.328 3.085 1.9921 4.765 1.9921 1.992 0 3.789-.5078 6.563-2.4218v7.5c-3.008 1.6406-5.703 2.1875-8.946 2.1875z"/>
            <path d="m472.125 29.2266h-11.992v-5.0781h1.562v-17.22668h-1.562v-5.07813h10.39v22.30481h1.602z"/>
            <path d="m485.454 29.2266h-12.032v-5.0781h1.563v-8.5939h-1.563v-5.078h10.391v13.6719h1.641zm-1.641-20.70318h-8.828v-6.67973h8.828z"/>
            <path d="m522.758 29.2266h-10.391v-11.3672c0-1.4844-.585-2.3048-1.601-2.3048-.976 0-1.484.7423-1.484 2.3048v6.2891h1.328v5.0781h-10.156v-11.4453c0-1.3282-.625-2.2267-1.524-2.2267-.976 0-1.563.86-1.563 2.2267v6.3672h1.368v5.0781h-11.758v-5.0781h1.562v-8.5939h-1.562v-5.078h10.39v2.0312c2.423-1.836 3.711-2.4218 5.626-2.4218 2.344 0 3.749.664 5.585 2.5781 2.384-1.8751 4.063-2.5781 6.133-2.5781 3.867 0 6.484 2.6171 6.484 6.0156v8.0469h1.563z"/>
            <path d="m530.375 29.5781c-4.258 0-6.758-2.3047-6.758-6.2109 0-3.9844 2.93-6.4063 7.578-6.4063 2.032 0 3.633.5079 5.04 1.25-.079-2.1093-1.68-3.4765-4.65-3.4765-2.304 0-4.178.5469-6.172 1.4844v-4.9219c2.5-.6641 5.079-1.2109 8.868-1.2109 8.126 0 10.899 3.5552 10.899 6.6797v7.3828h1.64v5.0781h-10.508v-1.875c-1.484 1.6406-3.672 2.2265-5.937 2.2265zm4.062-8.6328c-1.328 0-2.226.6647-2.226 2.0313 0 1.328.781 1.914 2.188 1.914 1.328 0 2.03-.586 2.03-1.953 0-1.3276-.702-1.9923-1.992-1.9923z"/>
            <path d="m559.992 29.2266h-11.446v-13.672h-1.757v-5.078h1.757v-5.85945h8.828v5.85945h2.618v5.078h-2.618v8.5939h2.618z"/>
            <path d="m571.945 29.6172c-2.812 0-5.938-.5859-8.126-2.5391-2.148-1.914-3.241-4.4525-3.241-7.3047 0-6.1322 4.883-9.6874 10.703-9.6874 6.328 0 10.508 4.453 10.508 9.8442 0 .6244-.04 1.211-.079 1.8355h-12.265c.234 2.1875 1.406 3.164 3.202 3.164 1.328 0 2.148-.6251 2.93-1.6407h6.133c-1.289 4.2969-5.235 6.3282-9.765 6.3282zm-.235-14.4531c-1.016 0-1.757.5468-2.109 1.4844-.235.5468-.195 1.25-.195 2.2265h4.609v-.4688c0-1.6016-.39-3.2421-2.305-3.2421z"/>
            <path d="m318.537 15.4341 2.696-8.91042h.078l2.15 8.91042zm16.571 7.7776-3.908-15.35935h1.133v-6.0188h-18.514v6.0188h1.63l-5.276 15.35935h-1.485v6.0188h10.082v-6.0188h-2.578l1.094-3.5958h7.191l.86 3.5958h-2.423v6.0188h13.561v-6.0188z"/>
          </g>
        </svg>
      `
    }
    default:
      return `
        <svg aria-hidden="true" role="presentation" viewBox="0 0 433 31" width="433" height="31">
          <path fill="currentColor" d="M17.54 3.23c0-2.49-2.5-3.26-4.37-3.18v.22c1.2 0 2.12.57 2.12 1.37 0 .8-.4 1.27-1.6 1.27a17.37 17.37 0 0 1-4-1.05C8.3 1.3 6.8.93 5.29.8A4.26 4.26 0 0 0 .85 4.95a2.88 2.88 0 0 0 2.03 2.73c-.33-.32-.58-.6-.58-1.4a1.59 1.59 0 0 1 1.78-1.56c1.6.19 3.2.55 4.72 1.1 1.52.45 3.07.81 4.64 1.07v4.05l-1.94 1.62 1.94 1.69v5.54a6.5 6.5 0 0 1-3.17.77 6.32 6.32 0 0 1-5-2.08l5.3-2.5V7.14L4.1 10a7.9 7.9 0 0 1 3.3-3.8 9.75 9.75 0 0 0-7.34 8.78 8.92 8.92 0 0 0 5.51 8.33 9.03 9.03 0 0 0 6.67.12 8.02 8.02 0 0 0 5-7.78 9.07 9.07 0 0 1-3.55 4.03v-5.42l2.05-1.64-2.05-1.67V6.89a3.66 3.66 0 0 0 3.85-3.66ZM6.65 17.53l-1.6.77a8.03 8.03 0 0 1-1.55-4.97 9.9 9.9 0 0 1 .5-3.01l2.67-1.25-.02 8.46Zm24.2-7.14-1.02.8-3.05-2.71-3.57 2.73V.64L18.4 3.95a1.62 1.62 0 0 1 1.22 1.8v14.6l-1.67 1.16.18.15.82-.6 2.87 2.74 3.87-2.49v-.2l-1 .65-1.34-1.34v-8.86l.92-.67 2.12 1.82v7.63c0 4.98-1.07 5.87-3.27 6.67 3.65.15 6.92-1.07 6.92-7.32v-8.13l1.1-.87-.27-.3Zm6.5 13.38 5.6-4.5-.15-.25-2.93 2.49-3.37-2.79v-1.64L42.32 13l-2.95-4.55-6.47 3.53v8.44l-1.24.97.14.17 1.2-.95 4.35 3.16Zm-.85-7.01v-6.4l2.8 4.41-2.8 1.99ZM66.15 2.04c-.02-.41-.1-.82-.25-1.2-.4 1.07-.82 1.67-2.07 1.67a3.4 3.4 0 0 1-2.5-1.17l-3.7 4.25.18.15 1.05-1.2a4.7 4.7 0 0 0 3.27 1.35v10.65l-7.5-12.99a4.08 4.08 0 0 0-3.3-2.48c-2.01 0-3.56 1.74-3.31 4.67h.12c.15-.72.58-1.64 1.48-1.64s1.27.67 1.62 1.27V9.6c-2.32 0-3.65 1.07-3.65 2.9a2.78 2.78 0 0 0 2.15 2.7 1 1 0 0 1-.42-.83c0-.7.52-1.1 1.47-1.1h.45v5.4c-2.72 0-4.85 1.52-4.85 4.08a3.64 3.64 0 0 0 2.77 3.4c.5.13 1.04.15 1.55.06-1.37-.15-2.07-.85-2.07-1.86a1.61 1.61 0 0 1 1.8-1.67 3.28 3.28 0 0 1 2.5 1.37l3.67-4.13-.15-.15-.95 1.07a6.88 6.88 0 0 0-3.95-2.07V5.82l10.4 18.03h.55V5.89a3.9 3.9 0 0 0 3.77-3.85h-.13Zm3.6 21.73 5.5-4.5-.25-.25-2.85 2.49-3.37-2.79v-1.64L74.6 13l-2.95-4.55-6.45 3.53v8.44l-1.27 1.09.15.17 1.2-.94 4.47 3.03Zm-.85-7.01v-6.4l2.82 4.41-2.82 1.99Zm26.25-6.84-.84.62-2.5-2.06-2.85 2.48 1.15 1.1v9.62l-2.9-1.99v-7.73l1-.7-3-2.78-2.72 2.56 1.17 1.1v9.37h-.2l-2.72-1.99v-7.46c0-1.77-.9-2.29-2.02-3.01-1.13-.72-1.45-1.12-1.45-2.01a1.74 1.74 0 0 1 1.12-1.52 3.93 3.93 0 0 0-3.77 3.3 2.95 2.95 0 0 0 1.25 2.5 3.01 3.01 0 0 1 1.25 2.23v7.46l-1.33 1.02.15.18 1.25-1 3.3 2.61 3.12-2.16 3.43 2.16 6.74-3.95v-8.6l1.5-1.18-.13-.17Zm22.49-7.24-1.3 1.17-2.88-2.49-3.8 3.09V1.6h-.22v20.87c-.45 0-1.32-.3-2.3-.45V4.47a3.02 3.02 0 0 0-2-2.85c-.39-.14-.8-.2-1.22-.18a3.68 3.68 0 0 0-3.74 3.58 1.54 1.54 0 0 1 1.4-1.42c.8 0 1.47.48 1.47 2.2v4.97a3.25 3.25 0 0 0-3.5 2.9 2.33 2.33 0 0 0 2.17 2.5c-.55-.26-.67-.53-.67-.83 0-.74.72-.97 1.7-.97h.25v7.91a3.55 3.55 0 0 0-2.75 3.43 3.85 3.85 0 0 0 2.67 3.6c.5.17 1.05.23 1.58.18 1.57-.03 3.13-.25 4.64-.67a23.5 23.5 0 0 1 3.53-.57c1 0 1.42.42 1.42 1.12 0 .7-.35 1.34-.88 1.5v.12a3.55 3.55 0 0 0 3.35-3.51 3.53 3.53 0 0 0-3.94-3.13c-1.56.08-3.11.31-4.63.7-1.27.3-2.56.48-3.87.56-.9 0-2-.37-2-1.56 0-1.2.9-1.94 3.1-1.94 1.3.03 2.59.2 3.85.52 1.29.41 2.62.68 3.97.8 1.87 0 3.37-.68 3.37-3.39V4.1l1.38-1.27-.15-.15Zm-5.17 8.38a1.73 1.73 0 0 1-2.16.49 1.95 1.95 0 0 1-.64-.49V4.75l.92-.65 1.88 1.6v5.36Zm0 2.99a1.74 1.74 0 0 0-1.38-.6 2.1 2.1 0 0 0-1.42.6v-2.66c.39.36.9.57 1.42.6a1.83 1.83 0 0 0 1.38-.6v2.66Zm0 6.3a1.96 1.96 0 0 1-1.88 2.2c-.3.03-.61.03-.92 0v-8.18c.37-.39.88-.62 1.42-.64a1.86 1.86 0 0 1 1.38.64v5.97Zm10.91 3.4 6.25-3.88V11.4l-4.05-2.96-6.25 3.56v8.4l-1.22 1.1.13.17 1-.82 4.14 2.89Zm-.47-4.4v-9l3.12 2.3v9.03l-3.12-2.33Zm18.66-10.72c-.4.3-.88.45-1.38.44a1.96 1.96 0 0 1-1.4-.7l-2.32 2.5-2.35-2.5-3.8 2.74.13.2 1.03-.67 1.37 1.5v8.2l-1.65 1.17.15.15.83-.6 3.1 2.64 3.91-2.49-.12-.2-1.02.62-1.58-1.44v-9a3.24 3.24 0 0 0 2.25 1.32c1.6 0 2.67-1.9 2.85-3.86v-.02Zm14.79 12.18-1.18.7-6.47-9.58.35-.37c.76.63 1.71.99 2.7 1.02a3.9 3.9 0 0 0 3.17-4.1 2.5 2.5 0 0 1-2.12 1.02 3.25 3.25 0 0 1-2.1-1.02l-4.4 6.46 5.85 8.88 4.32-2.8-.12-.2Zm-7.85.23-1 .64-1.35-1.34V.64l-4.82 3.31a1.63 1.63 0 0 1 1.23 1.8v14.6l-1.68 1.16.18.15.82-.6 2.88 2.64 3.87-2.49-.13-.17Zm28.46-17.81c0-2.49-2.5-3.26-4.4-3.18v.22c1.2 0 2.12.57 2.12 1.37 0 .8-.4 1.27-1.6 1.27a17.2 17.2 0 0 1-3.97-1.05A15.46 15.46 0 0 0 164.68.8a4.27 4.27 0 0 0-4.43 4.16 2.88 2.88 0 0 0 2.03 2.73c-.38-.22-.63-.5-.63-1.3a1.61 1.61 0 0 1 1.78-1.56c1.6.18 3.2.55 4.72 1.1 1.53.45 3.09.81 4.67 1.07v3.95l-1.97 1.62 1.97 1.69v5.54c-.99.52-2.08.79-3.2.77a6.32 6.32 0 0 1-5-2.08l5.3-2.5V7.14L163.5 10a7.95 7.95 0 0 1 3.32-3.8 9.75 9.75 0 0 0-7.34 8.88c0 2.36.95 4.63 2.63 6.3a9.01 9.01 0 0 0 9.55 2.04 8.04 8.04 0 0 0 5-7.77 9.06 9.06 0 0 1-3.47 4.03v-5.42l2.05-1.64-2.05-1.67V6.89a3.69 3.69 0 0 0 3.88-3.66h-.1Zm-10.92 14.3-1.5.77a8.04 8.04 0 0 1-1.52-4.97 9.1 9.1 0 0 1 .4-3.01l2.64-1.25-.02 8.46ZM180.89 2.3l-2.7 2.26 2.3 2.49 2.7-2.27-2.3-2.48Zm4.02 18.75-.98.64-1.34-1.34v-8.78l1.12-.87-.15-.2-.95.75-2.22-2.66-3.67 2.48v.23l.92-.62 1.22 1.51v8.16l-1.45 1.17.15.15.83-.6 2.9 2.64 3.84-2.49-.22-.17Zm20.68 0-.85.47-1.42-1.37v-8.58l1.15-.87-.15-.2-1.03.8-3.07-2.81-3.47 2.68-3.02-2.68-3.4 2.66-2.3-2.66-3.7 2.48v.23l.93-.62 1.32 1.49v8.26l-1.02 1.02 2.95 2.48 2.84-2.48-1.15-1.1v-8.83l.75-.54 2.13 1.81v7.64l-.98 1.02 2.97 2.48 2.78-2.48-1.15-1.1v-8.83l.72-.57 2.15 1.84v7.46l-.85.9 3 2.7 3.95-2.68-.08-.02Zm10.77-2.02-2.92 2.49-3.38-2.79v-1.64l5.82-4.08-2.94-4.55-6.47 3.53v8.58l4.44 3.21 5.62-4.5-.17-.25Zm-6.3-2.31v-6.34l2.83 4.4-2.83 1.94Zm17.49-1.22-2.5-1.89a6.16 6.16 0 0 0 2.32-5.35 1.94 1.94 0 0 1-1.9 1.25 2.8 2.8 0 0 1-2.17-1.22l-5.92 3.28v4.48l2.18 1.71c-2.18 1.92-2.5 3.11-2.5 4.2a2.66 2.66 0 0 0 1.75 2.5v-.18a1.07 1.07 0 0 1-.53-.97 1.27 1.27 0 0 1 1.4-1.1 3.16 3.16 0 0 1 2.5 1.32l5.44-3.3-.07-4.73Zm-1.3-3.78a14.96 14.96 0 0 1-3.87 3.93l-1.4-1.17V10a3.58 3.58 0 0 0 3.17 2.27c.73.02 1.44-.15 2.08-.5l.02-.05Zm-2.37 10.12a4.01 4.01 0 0 0-3.57-2.48 4.49 4.49 0 0 0-2.5.57 14.48 14.48 0 0 1 4.57-4.03l1.5 1.24v4.7ZM359.68 18.58h-9.57v-3.93h5.82v-4.38h-5.82v-4h9.15V1.94h-14.52v21h14.94v-4.35Z" />
          <path fill="currentColor" d="m370.59 7.63-3.12 9.03-2.82-9.03h-5.49l5.79 15.3h3.81l5.79-15.3h-3.96ZM388.64 15.19c0-4.77-3.06-7.83-7.23-7.83-4.3 0-7.5 3.39-7.5 8 0 4.66 2.97 7.84 7.77 7.84 3 0 5.25-1.32 6.9-4l-3.12-1.37c-1 1.62-2.04 2.22-3.54 2.22-1.65 0-2.88-1.38-2.88-3.4v-.38h9.6v-1.08Zm-9.7-1.62c0-1.44.7-3.1 2.56-3.1 1.65 0 2.22 1.27 2.22 3.1h-4.77ZM404.6 12.22c0-3-1.6-4.86-4.18-4.86-1.35 0-3.12.54-4.98 2.73V7.63h-5.04v15.3h5.14V12.28c1.13-.9 1.73-1.14 2.36-1.14.9 0 1.54.54 1.54 2.19v9.6h5.16V12.22ZM417.08 19.3c-.33.03-.93.12-1.35.12-1.77 0-2.2-.42-2.2-2.34V11.1h3.55V7.63h-3.54V2.56H409l-.45 5.07h-2.61v3.48h2.46v8.3c0 2.7 2.3 3.79 5.07 3.79 1.1 0 1.92-.1 3.6-.4v-3.5ZM432.17 17.98c0-2.7-2.3-4.11-4.2-4.5a46.2 46.2 0 0 0-3.45-.63c-1.14-.15-1.62-.54-1.62-1.14 0-.42.51-1.2 2.16-1.2 1.68 0 2.67.63 3.33 1.74l3.06-1.8c-1.62-2.22-3.24-3.1-6.39-3.1-3.2 0-6.72 1.63-6.72 5.2 0 2.43 1.62 3.54 3.42 4.2 1.11.39 2.85.54 4.32.78 1.14.2 1.47.6 1.47 1.1 0 .67-.84 1.36-2.55 1.36-2.04 0-3.3-.9-3.96-2.07l-3.06 1.92c1.53 2.64 3.93 3.36 7.05 3.36 4.3 0 7.14-2.04 7.14-5.22ZM250.1 15.25c-.6 2.4-2.03 3.8-4.01 3.8-1.68 0-2.97-.86-3.54-2.84-.21-.7-.36-2.2-.36-3.75 0-1.47.12-2.82.39-3.78.48-1.8 1.56-2.94 3.24-2.94 2.34 0 3.06 1.77 3.18 3.63l5-.48c-.5-4.05-3.23-7.35-8.1-7.35-2.7 0-4.94.99-6.6 2.76-1.91 2.1-2.78 4.68-2.78 8.22 0 3.18.69 5.43 2.19 7.4a8.25 8.25 0 0 0 6.75 3.4c4.17 0 7.47-2.01 8.73-7.17l-4.08-.9ZM260.9 1.93h-5.16v21h5.16v-21ZM268.91 1.54h-5.19v3.93h5.2V1.54Zm-.03 6.3h-5.16v15.09h5.16V7.83ZM294.77 12.22c0-3-1.56-4.86-4.13-4.86-1.32 0-3.13.5-5.1 2.97a3.8 3.8 0 0 0-3.9-2.97c-1.35 0-3.1.54-4.95 2.73V7.63h-5.05v15.3h5.13V12.28c1.15-.9 1.72-1.14 2.35-1.14.9 0 1.52.54 1.52 2.19v9.6h5.13V12.28c1.06-.87 1.75-1.14 2.35-1.14.9 0 1.52.54 1.52 2.19v9.6h5.13V12.22ZM311.18 22.66a8.51 8.51 0 0 1-.45-2.88v-7.41c0-1.65-.42-2.7-1.44-3.6-1.14-.96-2.88-1.41-5.49-1.41-3.78 0-5.88 1.5-6.8 4.29l4.52.93c.3-1.47 1.14-2.07 2.28-2.07 1.11 0 1.83.69 1.83 2v.9c-6.93.22-9.2 2.59-9.2 5.47 0 2.49 1.8 4.32 4.34 4.32 1.47 0 3.06-.45 4.98-1.83l.24 1.56h5.2v-.27Zm-5.52-3.42c-1.05.6-1.44.8-2.34.8-.87 0-1.56-.65-1.56-1.64 0-1.77 1.6-2.5 3.9-2.5v3.34ZM323.12 19.3c-.33.03-.93.12-1.35.12-1.77 0-2.2-.42-2.2-2.34V11.1h3.55V7.63h-3.54V2.56h-4.53l-.45 5.07h-2.61v3.48h2.46v8.3c0 2.7 2.3 3.79 5.07 3.79 1.1 0 1.92-.1 3.6-.4v-3.5ZM338.87 15.19c0-4.77-3.06-7.83-7.23-7.83-4.29 0-7.5 3.39-7.5 8 0 4.66 2.97 7.84 7.77 7.84 3 0 5.25-1.32 6.9-4l-3.12-1.37c-.99 1.62-2.04 2.22-3.54 2.22-1.65 0-2.88-1.38-2.88-3.4v-.38h9.6v-1.08Zm-9.69-1.62c0-1.44.7-3.1 2.55-3.1 1.65 0 2.22 1.27 2.22 3.1h-4.77Z" />
        </svg>
      `
  }
}
