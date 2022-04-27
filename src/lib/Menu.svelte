<script>
  import Link from '$lib/Link.svelte'
  export let slices
</script>

<header class="header" style="--scroll: 0;">
  <div class="container u-printHidden">
    <a class="logo" href="/">
      <span class="u-hiddenVisually">Name of event</span>
      <svg role="presentation" width="285" height="16" fill="none" viewBox="0 0 285 16">
        <path
          fill="currentColor"
          d="M11.52 1.03H.012v3.045h3.843V15.73h3.822V4.075h3.843V1.03Zm11.154 7.203c0-2.1-1.113-3.402-2.92-3.402-.944 0-2.1.378-3.422 1.911V1.03H12.74v14.7h3.59V8.275c.799-.63 1.219-.798 1.66-.798.63 0 1.07.378 1.07 1.533v6.72h3.613V8.233Zm11.762 2.079c0-3.339-2.142-5.48-5.061-5.48-3.003 0-5.25 2.372-5.25 5.606 0 3.255 2.079 5.481 5.439 5.481 2.1 0 3.675-.924 4.83-2.793l-2.184-.966c-.693 1.134-1.428 1.554-2.478 1.554-1.155 0-2.016-.966-2.016-2.373v-.273h6.72v-.756Zm-6.783-1.134c0-1.008.483-2.163 1.785-2.163 1.155 0 1.554.882 1.554 2.163h-3.339ZM52.75 1.03h-3.254v8.001l-4.914-8H40.99v14.7h3.297V6.804l5.48 8.925h2.983V1.03Zm11.94 9.282c0-3.339-2.141-5.48-5.06-5.48-3.003 0-5.25 2.372-5.25 5.606 0 3.255 2.079 5.481 5.439 5.481 2.1 0 3.675-.924 4.83-2.793l-2.184-.966c-.693 1.134-1.428 1.554-2.478 1.554-1.155 0-2.016-.966-2.016-2.373v-.273h6.72v-.756Zm-6.782-1.134c0-1.008.483-2.163 1.785-2.163 1.155 0 1.554.882 1.554 2.163h-3.34ZM78.172 5.02l-1.596 6.111-1.785-6.11h-2.54l-1.87 6.11-1.638-6.11h-3.59l3.464 10.71H71.2l1.953-6.175 1.785 6.174h2.436l3.423-10.71h-2.625Zm16.03-3.99-2.835 5.25-2.709-5.25h-4.242l4.956 8.505v6.195h3.822V9.031l4.662-8h-3.654Zm12.704 9.303c0-3.612-2.394-5.502-5.355-5.502-3.338 0-5.376 2.331-5.376 5.46 0 3.465 2.163 5.628 5.334 5.628 3.234 0 5.397-2.079 5.397-5.586Zm-3.78.126c0 2.205-.546 3.255-1.554 3.255-1.092 0-1.617-1.092-1.617-3.339 0-2.31.504-3.339 1.617-3.339 1.071 0 1.554 1.134 1.554 3.423Zm12.693-5.628c-1.281.084-2.457.546-3.843 2.394V5.02h-3.528v10.71h3.591V8.905c.462-.42 1.092-.63 1.89-.63.462 0 1.323.063 1.764.231h.126V4.831Zm9.003 3.633 3.087-3.444h-3.528l-3.57 4.473V1.03h-3.591v14.7h3.528v-3.003l1.491-1.806 1.932 4.81h3.927l-3.276-7.267Zm18.602-7.434h-11.508v3.045h3.843V15.73h3.822V4.075h3.843V1.03Zm4.896-.273h-3.633v2.751h3.633V.758Zm-.021 4.41h-3.612V15.73h3.612V5.167Zm18.335 3.066c0-2.1-1.092-3.402-2.898-3.402-.924 0-2.184.357-3.57 2.08-.378-1.324-1.323-2.08-2.73-2.08-.945 0-2.163.378-3.465 1.911V5.02h-3.528v10.71h3.591V8.275c.798-.63 1.197-.798 1.638-.798.63 0 1.071.378 1.071 1.533v6.72h3.591V8.275c.735-.609 1.218-.798 1.638-.798.63 0 1.071.378 1.071 1.533v6.72h3.591V8.233Zm11.759 2.079c0-3.339-2.142-5.48-5.061-5.48-3.003 0-5.25 2.372-5.25 5.606 0 3.255 2.079 5.481 5.439 5.481 2.1 0 3.675-.924 4.83-2.793l-2.184-.966c-.693 1.134-1.428 1.554-2.478 1.554-1.155 0-2.016-.966-2.016-2.373v-.273h6.72v-.756Zm-6.783-1.134c0-1.008.483-2.163 1.785-2.163 1.155 0 1.554.882 1.554 2.163h-3.339Zm17.514 3.087c0-1.89-1.617-2.877-2.94-3.15a32.347 32.347 0 0 0-2.415-.44c-.798-.106-1.134-.379-1.134-.799 0-.294.357-.84 1.512-.84 1.176 0 1.869.441 2.331 1.218l2.142-1.26c-1.134-1.554-2.268-2.163-4.473-2.163-2.247 0-4.704 1.134-4.704 3.633 0 1.701 1.134 2.478 2.394 2.94.777.273 1.995.378 3.024.546.798.147 1.029.42 1.029.777 0 .462-.588.945-1.785.945-1.428 0-2.31-.63-2.772-1.449l-2.142 1.344c1.071 1.848 2.751 2.352 4.935 2.352 3.003 0 4.998-1.428 4.998-3.654Zm16.837-.567c0-2.1-1.155-3.213-3.087-3.822-.819-.252-1.827-.462-2.814-.693-1.26-.315-2.562-.777-2.562-2.373 0-1.344 1.176-2.394 3.003-2.394 1.932 0 3.003 1.24 3.591 2.1l1.491-1.28c-.987-1.366-2.499-2.458-5.04-2.458-1.218 0-2.268.294-3.129.84-1.197.756-1.974 2.016-1.974 3.402 0 2.394 1.806 3.465 3.507 3.927.798.231 1.617.378 2.373.567 1.701.441 2.562.966 2.562 2.436 0 1.45-1.407 2.415-3.297 2.415-1.848 0-3.402-1.176-4.221-2.688l-1.533 1.281c.987 1.596 2.667 3.024 5.712 3.024 3.108 0 5.418-1.806 5.418-4.284Zm10.142-6.636h-1.785v7.896c-.546.441-1.596 1.407-2.856 1.407-1.491 0-1.995-.84-1.995-2.058V5.062h-1.785v7.287c0 .651.042 1.323.315 1.953.378.882 1.344 1.617 2.73 1.617 1.932 0 2.982-1.092 3.633-1.764v1.575h1.743V5.062Zm11.637 5.313c0-3.822-2.016-5.502-4.116-5.502-1.113 0-2.016.4-3.045 1.386V1.03h-1.806v12.957c0 .483-.063 1.26-.105 1.743h.987l.462-1.554c.714.945 1.68 1.764 3.066 1.764 2.499 0 4.557-1.89 4.557-5.565Zm-1.911 0c0 2.1-.609 4.221-2.709 4.221-.966 0-2.541-.525-2.541-2.562V7.498c.588-.525 1.554-1.134 2.625-1.134 1.785 0 2.625 1.66 2.625 4.011Zm8.798-1.05h-4.977v1.66h4.977v-1.66Zm11.293 1.05c0-3.822-2.016-5.502-4.116-5.502-1.113 0-2.016.4-3.045 1.386V1.03h-1.806v12.957c0 .483-.063 1.26-.105 1.743h.987l.462-1.554c.714.945 1.68 1.764 3.066 1.764 2.499 0 4.557-1.89 4.557-5.565Zm-1.911 0c0 2.1-.609 4.221-2.709 4.221-.966 0-2.541-.525-2.541-2.562V7.498c.588-.525 1.554-1.134 2.625-1.134 1.785 0 2.625 1.66 2.625 4.011Zm9.456-5.481c-1.806 0-3.234 1.302-3.885 2.268v-2.1h-1.701V15.73h1.806V8.317c.315-.42 1.197-1.49 2.73-1.49.315 0 .567.02.966.125h.084V4.894Zm9.513 10.731c-.147-.399-.357-.903-.357-2.12V8.38c0-.924-.21-1.659-.63-2.226-.609-.798-1.701-1.28-3.465-1.28-2.352 0-3.696 1.175-4.158 2.96l1.701.336c.147-.65.609-1.89 2.31-1.89 1.806 0 2.478.798 2.478 1.89v.693c-4.725.504-6.909 1.827-6.909 4.158 0 1.974 1.722 2.898 3.528 2.898 1.281 0 2.604-.693 3.465-1.47.021.546.189 1.03.21 1.281h1.827v-.105Zm-2.121-2.31c-.861.756-1.785 1.134-2.961 1.134-1.806 0-2.1-.924-2.1-1.68 0-1.428 1.701-2.247 5.061-2.709v3.255Zm12.846-4.872c0-.65-.084-1.323-.357-1.953-.378-.882-1.323-1.617-2.751-1.617-1.911 0-2.982 1.092-3.633 1.764V5.062h-1.764V15.73h1.806V7.834c.525-.44 1.596-1.428 2.877-1.428 1.512 0 1.995.84 1.995 2.08v7.244h1.827V8.443Zm10.818-7.413h-1.806v5.145c-.735-.86-1.701-1.302-2.877-1.302-1.89 0-4.284 1.512-4.284 5.523 0 3.024 1.365 5.523 4.032 5.523 1.365 0 2.373-.65 3.213-1.449v1.26h1.722V1.03Zm-1.785 12.264c-.714.651-1.554 1.134-2.541 1.134-1.575 0-2.73-1.134-2.73-4.074 0-2.12.756-3.969 2.772-3.969 1.071 0 1.827.483 2.499.987v5.922Z"
        />
      </svg>
    </a>

    <input id="switch" class="switch js-switch" type="checkbox" />
    <label class="toggle js-toggle" for="switch" touchstart="">
      <svg role="presentation" class="line" viewBox="0 0 24 1"
        ><path fill="currentColor" d="M0 0h24v1.75H0z" /></svg
      >
      <svg role="presentation" class="line" viewBox="0 0 24 1"
        ><path fill="currentColor" d="M0 0h24v1.75H0z" /></svg
      >
      Toggle menu
    </label>

    {#if slices.length}
      <nav class="nav js-nav">
        <a class="logo" href="/">
          <span class="u-hiddenVisually">Name of event</span>
          <svg role="presentation" width="285" height="16" fill="none" viewBox="0 0 285 16">
            <path
              fill="currentColor"
              d="M11.52 1.03H.012v3.045h3.843V15.73h3.822V4.075h3.843V1.03Zm11.154 7.203c0-2.1-1.113-3.402-2.92-3.402-.944 0-2.1.378-3.422 1.911V1.03H12.74v14.7h3.59V8.275c.799-.63 1.219-.798 1.66-.798.63 0 1.07.378 1.07 1.533v6.72h3.613V8.233Zm11.762 2.079c0-3.339-2.142-5.48-5.061-5.48-3.003 0-5.25 2.372-5.25 5.606 0 3.255 2.079 5.481 5.439 5.481 2.1 0 3.675-.924 4.83-2.793l-2.184-.966c-.693 1.134-1.428 1.554-2.478 1.554-1.155 0-2.016-.966-2.016-2.373v-.273h6.72v-.756Zm-6.783-1.134c0-1.008.483-2.163 1.785-2.163 1.155 0 1.554.882 1.554 2.163h-3.339ZM52.75 1.03h-3.254v8.001l-4.914-8H40.99v14.7h3.297V6.804l5.48 8.925h2.983V1.03Zm11.94 9.282c0-3.339-2.141-5.48-5.06-5.48-3.003 0-5.25 2.372-5.25 5.606 0 3.255 2.079 5.481 5.439 5.481 2.1 0 3.675-.924 4.83-2.793l-2.184-.966c-.693 1.134-1.428 1.554-2.478 1.554-1.155 0-2.016-.966-2.016-2.373v-.273h6.72v-.756Zm-6.782-1.134c0-1.008.483-2.163 1.785-2.163 1.155 0 1.554.882 1.554 2.163h-3.34ZM78.172 5.02l-1.596 6.111-1.785-6.11h-2.54l-1.87 6.11-1.638-6.11h-3.59l3.464 10.71H71.2l1.953-6.175 1.785 6.174h2.436l3.423-10.71h-2.625Zm16.03-3.99-2.835 5.25-2.709-5.25h-4.242l4.956 8.505v6.195h3.822V9.031l4.662-8h-3.654Zm12.704 9.303c0-3.612-2.394-5.502-5.355-5.502-3.338 0-5.376 2.331-5.376 5.46 0 3.465 2.163 5.628 5.334 5.628 3.234 0 5.397-2.079 5.397-5.586Zm-3.78.126c0 2.205-.546 3.255-1.554 3.255-1.092 0-1.617-1.092-1.617-3.339 0-2.31.504-3.339 1.617-3.339 1.071 0 1.554 1.134 1.554 3.423Zm12.693-5.628c-1.281.084-2.457.546-3.843 2.394V5.02h-3.528v10.71h3.591V8.905c.462-.42 1.092-.63 1.89-.63.462 0 1.323.063 1.764.231h.126V4.831Zm9.003 3.633 3.087-3.444h-3.528l-3.57 4.473V1.03h-3.591v14.7h3.528v-3.003l1.491-1.806 1.932 4.81h3.927l-3.276-7.267Zm18.602-7.434h-11.508v3.045h3.843V15.73h3.822V4.075h3.843V1.03Zm4.896-.273h-3.633v2.751h3.633V.758Zm-.021 4.41h-3.612V15.73h3.612V5.167Zm18.335 3.066c0-2.1-1.092-3.402-2.898-3.402-.924 0-2.184.357-3.57 2.08-.378-1.324-1.323-2.08-2.73-2.08-.945 0-2.163.378-3.465 1.911V5.02h-3.528v10.71h3.591V8.275c.798-.63 1.197-.798 1.638-.798.63 0 1.071.378 1.071 1.533v6.72h3.591V8.275c.735-.609 1.218-.798 1.638-.798.63 0 1.071.378 1.071 1.533v6.72h3.591V8.233Zm11.759 2.079c0-3.339-2.142-5.48-5.061-5.48-3.003 0-5.25 2.372-5.25 5.606 0 3.255 2.079 5.481 5.439 5.481 2.1 0 3.675-.924 4.83-2.793l-2.184-.966c-.693 1.134-1.428 1.554-2.478 1.554-1.155 0-2.016-.966-2.016-2.373v-.273h6.72v-.756Zm-6.783-1.134c0-1.008.483-2.163 1.785-2.163 1.155 0 1.554.882 1.554 2.163h-3.339Zm17.514 3.087c0-1.89-1.617-2.877-2.94-3.15a32.347 32.347 0 0 0-2.415-.44c-.798-.106-1.134-.379-1.134-.799 0-.294.357-.84 1.512-.84 1.176 0 1.869.441 2.331 1.218l2.142-1.26c-1.134-1.554-2.268-2.163-4.473-2.163-2.247 0-4.704 1.134-4.704 3.633 0 1.701 1.134 2.478 2.394 2.94.777.273 1.995.378 3.024.546.798.147 1.029.42 1.029.777 0 .462-.588.945-1.785.945-1.428 0-2.31-.63-2.772-1.449l-2.142 1.344c1.071 1.848 2.751 2.352 4.935 2.352 3.003 0 4.998-1.428 4.998-3.654Zm16.837-.567c0-2.1-1.155-3.213-3.087-3.822-.819-.252-1.827-.462-2.814-.693-1.26-.315-2.562-.777-2.562-2.373 0-1.344 1.176-2.394 3.003-2.394 1.932 0 3.003 1.24 3.591 2.1l1.491-1.28c-.987-1.366-2.499-2.458-5.04-2.458-1.218 0-2.268.294-3.129.84-1.197.756-1.974 2.016-1.974 3.402 0 2.394 1.806 3.465 3.507 3.927.798.231 1.617.378 2.373.567 1.701.441 2.562.966 2.562 2.436 0 1.45-1.407 2.415-3.297 2.415-1.848 0-3.402-1.176-4.221-2.688l-1.533 1.281c.987 1.596 2.667 3.024 5.712 3.024 3.108 0 5.418-1.806 5.418-4.284Zm10.142-6.636h-1.785v7.896c-.546.441-1.596 1.407-2.856 1.407-1.491 0-1.995-.84-1.995-2.058V5.062h-1.785v7.287c0 .651.042 1.323.315 1.953.378.882 1.344 1.617 2.73 1.617 1.932 0 2.982-1.092 3.633-1.764v1.575h1.743V5.062Zm11.637 5.313c0-3.822-2.016-5.502-4.116-5.502-1.113 0-2.016.4-3.045 1.386V1.03h-1.806v12.957c0 .483-.063 1.26-.105 1.743h.987l.462-1.554c.714.945 1.68 1.764 3.066 1.764 2.499 0 4.557-1.89 4.557-5.565Zm-1.911 0c0 2.1-.609 4.221-2.709 4.221-.966 0-2.541-.525-2.541-2.562V7.498c.588-.525 1.554-1.134 2.625-1.134 1.785 0 2.625 1.66 2.625 4.011Zm8.798-1.05h-4.977v1.66h4.977v-1.66Zm11.293 1.05c0-3.822-2.016-5.502-4.116-5.502-1.113 0-2.016.4-3.045 1.386V1.03h-1.806v12.957c0 .483-.063 1.26-.105 1.743h.987l.462-1.554c.714.945 1.68 1.764 3.066 1.764 2.499 0 4.557-1.89 4.557-5.565Zm-1.911 0c0 2.1-.609 4.221-2.709 4.221-.966 0-2.541-.525-2.541-2.562V7.498c.588-.525 1.554-1.134 2.625-1.134 1.785 0 2.625 1.66 2.625 4.011Zm9.456-5.481c-1.806 0-3.234 1.302-3.885 2.268v-2.1h-1.701V15.73h1.806V8.317c.315-.42 1.197-1.49 2.73-1.49.315 0 .567.02.966.125h.084V4.894Zm9.513 10.731c-.147-.399-.357-.903-.357-2.12V8.38c0-.924-.21-1.659-.63-2.226-.609-.798-1.701-1.28-3.465-1.28-2.352 0-3.696 1.175-4.158 2.96l1.701.336c.147-.65.609-1.89 2.31-1.89 1.806 0 2.478.798 2.478 1.89v.693c-4.725.504-6.909 1.827-6.909 4.158 0 1.974 1.722 2.898 3.528 2.898 1.281 0 2.604-.693 3.465-1.47.021.546.189 1.03.21 1.281h1.827v-.105Zm-2.121-2.31c-.861.756-1.785 1.134-2.961 1.134-1.806 0-2.1-.924-2.1-1.68 0-1.428 1.701-2.247 5.061-2.709v3.255Zm12.846-4.872c0-.65-.084-1.323-.357-1.953-.378-.882-1.323-1.617-2.751-1.617-1.911 0-2.982 1.092-3.633 1.764V5.062h-1.764V15.73h1.806V7.834c.525-.44 1.596-1.428 2.877-1.428 1.512 0 1.995.84 1.995 2.08v7.244h1.827V8.443Zm10.818-7.413h-1.806v5.145c-.735-.86-1.701-1.302-2.877-1.302-1.89 0-4.284 1.512-4.284 5.523 0 3.024 1.365 5.523 4.032 5.523 1.365 0 2.373-.65 3.213-1.449v1.26h1.722V1.03Zm-1.785 12.264c-.714.651-1.554 1.134-2.541 1.134-1.575 0-2.73-1.134-2.73-4.074 0-2.12.756-3.969 2.772-3.969 1.071 0 1.827.483 2.499.987v5.922Z"
            />
          </svg>
        </a>
        <div class="content">
          <ul class="list">
            {#each slices as slice}
              <li>
                {#if slice.slice_type === 'link'}
                  <Link class="link" document={slice.primary.link}
                    ><span data-text={slice.primary.label}>{slice.primary.label}</span></Link
                  >
                {/if}
                {#if slice.slice_type === 'scroll_link'}
                  <a class="link" href="#{slice.primary.slice_id}"
                    ><span data-text={slice.primary.label}>{slice.primary.label}</span></a
                  >
                {/if}
                {#if slice.slice_type === 'button'}
                  <a class="button" href="#{slice.primary.slice_id}">{slice.primary.label}</a>
                {/if}
              </li>
            {/each}
          </ul>
        </div>
      </nav>
    {/if}
  </div>
</header>

<div class="space" />

<style>
  :root {
    --header-height: 4.6rem;
  }

  header {
    --scroll: 0;
    --x: 2rem;
    --x-shrinked: 1.5rem;
    --y: 1.75rem;
    --y-shrinked: 0.7rem;
    --x-offset: 0rem;

    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    height: var(--header-height);
    user-select: none;
    pointer-events: none;
  }

  .space {
    margin-bottom: calc(var(--header-height) + 11vh);
  }

  @media (min-width: 700px) {
    .space {
      margin-bottom: calc(var(--header-height) + 6vh);
    }
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--y) var(--x);
  }

  .container > * {
    pointer-events: initial;
  }

  .nav {
    pointer-events: none;
  }

  .nav > * {
    pointer-events: initial;
  }

  .logo {
    display: inline-block;
    width: 13.875rem;
    height: auto;
    position: relative;
    top: 0.12rem;
    -webkit-touch-callout: none;
  }

  .logo svg {
    display: block;
    height: auto;
    width: 100%;
  }

  .content {
    display: flex;
    flex-direction: column;
  }

  .content > div:first-child {
    order: 1;
  }

  .logo,
  .link,
  .toggle {
    transition: opacity 150ms var(--ease-out);
    cursor: pointer;
  }

  .logo:active,
  .link:active,
  .toggle:active {
    transition: none;
    opacity: 0.6;
  }

  .button {
    display: inline-block;
    padding: 1rem 1.4em;
    border: 1px solid currentColor;
    font-size: 0.875rem;
    line-height: 1;
    text-align: center;
    letter-spacing: 0.065em;
    text-transform: uppercase;
    margin-top: 0.9rem;
    border-radius: 0.125rem;
    -webkit-touch-callout: none;
    user-select: none;
  }

  .button:hover {
    text-decoration: none;
    background: var(--current-color);
    color: var(--current-color-background);
    border-color: var(--current-color);
  }

  .button:active {
    opacity: 0.75;
  }

  /* shrink animation */

  :root[scripting-enabled] {
    position: fixed;
    top: 0;
    left: 0;
  }

  .header::before {
    content: '';
    background: var(--current-color-background);
    position: absolute;
    top: -8rem;
    left: 0;
    width: 100%;
    height: calc(var(--header-height) + 8rem);
    opacity: 0;
    pointer-events: initial;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  }

  .header::before {
    opacity: var(--scroll);
    transform: translateY(calc(((var(--y-shrinked) * 0.35) - 1rem) * var(--scroll)));
  }

  .header.is-sticky::before {
    opacity: 1;
    transform: translateY(calc((var(--y-shrinked) * 0.35) - 1rem));
  }

  @media (min-width: 700px) {
    .header::before {
      opacity: var(--scroll);
      transform: translateY(calc(((var(--y-shrinked) * -1) - 1.2rem) * var(--scroll)));
    }

    .header.is-sticky::before {
      opacity: 1;
      transform: translateY(calc((var(--y-shrinked) * -1) - 1.2rem));
    }
  }

  .logo {
    transform: translate(
      calc((var(--x) * -1 + var(--x-shrinked)) * var(--scroll)),
      calc(((var(--y-shrinked) / 2 * -1) - var(--x-offset)) * var(--scroll))
    );
  }

  .header.is-sticky .logo {
    transform: translate(
      calc(var(--x) * -1 + var(--x-shrinked)),
      calc(((var(--y-shrinked) / 2 * -1) - var(--x-offset)))
    );
  }

  .toggle {
    transform: translate(
      calc((var(--x) - var(--x-shrinked)) * var(--scroll)),
      calc(((var(--y-shrinked) / 2 * -1) - var(--x-offset)) * var(--scroll))
    );
  }

  .header.is-sticky .toggle {
    transform: translate(
      calc(var(--x) - var(--x-shrinked)),
      calc(((var(--y-shrinked) / 2 * -1) - var(--x-offset)))
    );
  }

  @media (min-width: 900px) {
    .content {
      transform: translate(
        calc((var(--x) - var(--x-shrinked)) * var(--scroll)),
        calc(((var(--y-shrinked) / 2 * -1) - var(--x-offset)) * var(--scroll))
      );
    }

    .header.is-sticky .content {
      transform: translate(
        calc(var(--x) - var(--x-shrinked)),
        calc(((var(--y-shrinked) / 2 * -1) - var(--x-offset)))
      );
    }
  }

  @media (min-width: 400px) {
    :root {
      --header-height: 4.8rem;
    }

    .logo {
      width: 16rem;
      top: 0.1rem;
    }
  }

  @media (min-width: 700px) {
    :root {
      --header-height: 6.35rem;
    }

    header {
      --y: 2.5rem;
      --x: 3rem;
      --x-shrinked: 2.5rem;
      --x-offset: 0.6rem;
    }

    .logo {
      width: 18.5rem;
    }
  }

  @media (min-width: 900px) {
    :root {
      --header-height: 8rem;
    }

    header {
      --y: 2.5rem;
      --y-shrinked: var(--y);
      --x-offset: 0rem;
    }
  }

  @media (min-width: 1030px) {
    header {
      --x-offset: 0rem;
    }
  }

  /**
  * Narrow viewport menu
  */

  @media (max-width: 899px) {
    .nav {
      display: none;
      position: fixed;
      z-index: 1;
      width: 100%;
      top: 0;
      left: 0;
      pointer-events: initial;
      background: var(--current-color-background);
    }

    .toggle {
      font-size: 0;
      position: relative;
      z-index: 2;
      width: 1.5rem;
      height: 0.625rem;
      padding: 1rem;
      box-sizing: content-box;
      list-style: none;
      outline: 0;
      margin: -1rem;
    }

    .toggle:active {
      opacity: 0.5;
    }

    .switch:focus-visible + .toggle {
      outline: dashed var(--focus-ring-width) !important;
      outline-color: var(--focus-ring-color) !important;
    }

    .line {
      position: absolute;
      top: 1rem;
      left: 1rem;
      width: 1.5rem;
    }

    .line:nth-child(2) {
      top: auto;
      bottom: 1rem;
    }

    .switch {
      position: fixed;
      top: 0;
      right: 0;
      width: 0;
      height: 0;
      opacity: 0;
    }

    .switch:checked ~ .toggle .line {
      top: 48%;
      transform: rotate(45deg);
      transform-origin: center;
    }

    .switch:checked ~ .toggle .line:nth-child(2) {
      transform: rotate(-45deg);
      transform-origin: center;
    }

    .switch:checked ~ .nav {
      display: block;
      overflow: hidden;
      min-height: var(--window-height, 100vh);
      padding: var(--y) var(--x);
      box-shadow: 0 0 0 1rem var(--current-color-background);
    }

    @supports (min-height: -webkit-fill-available) {
      .switch:checked ~ .nav {
        min-height: var(--window-height, -webkit-fill-available);
      }
    }

    .content {
      margin-top: calc(var(--header-height) + 6vh - 0.4rem);
      position: absolute;
      top: 0;
      left: var(--x);
    }

    .link {
      display: inline-block;
      font-family: var(--doc-display-font-family);
      font-size: 2.15rem;
      font-weight: 400;
      line-height: 1.1;
      letter-spacing: -0.025em;
      padding: 0.4rem 0;
    }

    .link:hover {
      text-decoration: underline;
      text-decoration-thickness: 1px;
      text-underline-offset: 0.11em;
    }

    a.active {
      font-weight: 900;
    }
  }

  @media (max-width: 399px) {
    .link {
      font-size: 1.9rem;
    }
  }

  @media (min-width: 700px) and (max-width: 899px) {
    .content {
      margin-top: calc(var(--header-height) + 11vh - 0.4rem);
    }
  }

  @media (min-width: 800px) and (max-width: 899px) {
    .link {
      font-size: 2.4rem;
    }
  }

  @media (max-width: 899px) and (max-height: 449px) {
    .link {
      font-size: 1.75rem;
      padding: 0.3rem 0;
    }
  }

  /**
  * Wider viewport menu
  */

  @media (min-width: 900px) {
    header {
      --x: 3.5rem;
      --y: 2.5rem;
    }

    .container {
      z-index: 1;
      position: relative;
      padding: var(--y) var(--x);
    }

    .content {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .list {
      display: flex;
    }

    .list li:last-child {
      margin-right: -0.5rem;
    }

    .link {
      display: block;
      padding: 0.5rem 0.5rem;
      font-family: var(--doc-display-font-family);
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 1.05;
      letter-spacing: 0.065em;
      text-transform: uppercase;
    }

    .link:hover {
      text-decoration: underline;
      text-decoration-color: var(--current-color);
      text-underline-offset: 0.175em;
    }

    .active {
      position: relative;
    }

    .active > .link {
      color: transparent;
    }

    .active > a > span::before {
      content: attr(data-text);
      position: absolute;
      top: 50%;
      left: 50%;
      font-weight: 900;
      color: var(--current-color);
      white-space: nowrap;
      transform: translate(-50%, -50%);
      letter-spacing: 0.03em;
    }

    .toggle,
    .switch,
    .nav .logo {
      display: none;
    }

    .button {
      padding: 0.7rem 1rem;
      font-size: 0.75rem;
      margin: 0 0 0 0.5rem;
    }
  }

  @media (min-width: 1030px) {
    .link,
    .button {
      font-size: 0.875rem;
    }

    .button {
      padding: 0.75rem 1.15rem;
      margin: 0 0 0 1rem;
    }

    .list li + li {
      margin-left: 0.25rem;
    }
  }

  @media (min-width: 1100px) {
    header {
      --x-offset: 0rem;
      --x: 4rem;
      --y: 2.5rem;
    }

    .logo {
      width: 21.625rem;
      position: relative;
      top: 0.15rem;
    }
  }
</style>
