<script lang="ts">
    import { UI_CONFIG } from "$lib/modules/globals.svelte";

  // import { getCurrentWindow } from "@tauri-apps/api/window";
  // const appWindow = getCurrentWindow();
</script>

<div
  data-tauri-drag-region
  class="flex items-center w-full top-0 bg-zinc-950 border-b border-zinc-800 h-10 z-10000 select-none"
>
    <!-- LEFT: App title or icon -->
  <div data-tauri-drag-region class="flex items-center gap-2 px-4 flex-1">
    <span data-tauri-drag-region class="text-zinc-400 text-xs font-small tracking-widest">
      {UI_CONFIG.WINDOW_TITLE}
    </span>
  </div>

  <!-- RIGHT: Window controls -->
  <div class="flex h-full">
    <!-- Minimize -->
    <button aria-label="minimize"
      class="w-12 h-full flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors duration-150"
      onclick={() => appWindow.minimize()}
    >
      <svg width="10" height="1" viewBox="0 0 10 1" fill="currentColor">
        <rect width="10" height="1" />
      </svg>
    </button>

    <!-- Maximize -->
    <button aria-label="maximize"
      class="w-12 h-full flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors duration-150"
      onclick={() => appWindow.toggleMaximize()}
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1">
        <rect x="0.5" y="0.5" width="9" height="9" />
      </svg>
    </button>

    <!-- Close -->
    <button aria-label="close"
      class="w-12 h-full flex items-center justify-center text-zinc-500 hover:text-white hover:bg-red-600 transition-colors duration-150"
      onclick={() => appWindow.close()}
    >
      <svg width="10" height="10" viewBox="0 0 10 10" stroke="currentColor" stroke-width="1.5">
        <line x1="0" y1="0" x2="10" y2="10" />
        <line x1="10" y1="0" x2="0" y2="10" />
      </svg>
    </button>
  </div>
</div>