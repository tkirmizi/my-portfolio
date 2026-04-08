<template>
  <div class="min-h-screen flex flex-col bg-ink text-white">
    <div class="pointer-events-none fixed inset-0 -z-10 bg-mesh"></div>

    <header class="sticky top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur">
      <nav class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <RouterLink to="/" class="text-lg font-semibold tracking-tight">Taha Kirmizioglu</RouterLink>
        <ul class="flex items-center gap-6 text-sm text-white/80">
          <li>
            <RouterLink to="/projects" class="cursor-pointer transition hover:text-white">Projects</RouterLink>
          </li>
          <li>
            <a href="#" class="cursor-pointer transition hover:text-white">Cv</a>
          </li>
          <li>
            <a
              href="#"
              class="cursor-pointer rounded-xl bg-cyan-300 p-1 text-sm font-semibold text-slate-900 transition hover:bg-cyan-200"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>

    <main class="flex-1 max-w-6xl mx-auto w-full px-6 py-16">
    </main>

    <footer id="contact" class="border-t border-white/10">
      <div class="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <p class="text-sm text-white/60">© 2026 Taha</p>
        <div class="flex gap-5 text-sm text-white/80">
          <a href="#" class="hover:text-white">GitHub</a>
          <a href="#" class="hover:text-white">LinkedIn</a>
          <a href="#" class="hover:text-white">Mail</a>
        </div>
      </div>
    </footer>
  </div>
</template>
