<template>
  <div class="min-h-screen flex flex-col bg-ink text-white">
    <div class="pointer-events-none fixed inset-0 -z-10 bg-mesh"></div>

    <!-- Navbar -->
    <header class="sticky top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur">
      <nav class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" class="text-lg font-semibold tracking-tight">taha kirmizioglu</a>
        <ul class="flex items-center gap-6 text-sm text-white/80">
          <li><a href="#projects" class="hover:text-white">Projects</a></li>
          <li><a href="#about" class="hover:text-white">About Me</a></li>
          <li><a href="#contact" class="hover:text-white">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main class="flex-1">
      <!-- Hero -->
      <section class="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
        <div class="card p-6 md:p-8">
          <h1 class="text-4xl md:text-6xl font-bold leading-tight">
            Hi, it’s Taha.
            <span class="block text-cyan-300">I’m a fullstack software developer.</span>
          </h1>
          <div class="mt-6 flex gap-3">
            <a href="#contact"
              class="rounded-xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-cyan-200">
              Email me
            </a>
            <a href="#projects"
              class="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold hover:bg-white/10">
              My projects
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <div class="card flex-1 p-6">
            Junior Software Developer trained at 42 Heilbronn with professional experience at Schwarz IT.
          </div>
          <div class="card flex-1 p-6">
            <h3 class="text-sm font-semibold text-white/90">Tech Stack</h3>
            <div class="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-6">
              <div class="rounded-xl border border-white/10 bg-white/5 p-3 flex flex-col items-center gap-2">
                <img src="https://cdn.simpleicons.org/go/00ADD8" alt="Go" class="h-7 w-7" />
                <span class="text-xs text-white/80">Go</span>
              </div>

              <div class="rounded-xl border border-white/10 bg-white/5 p-3 flex flex-col items-center gap-2">
                <img src="https://cdn.simpleicons.org/vuedotjs/42b883" alt="Vue.js" class="h-7 w-7" />
                <span class="text-xs text-white/80">Vue</span>
              </div>

              <div class="rounded-xl border border-white/10 bg-white/5 p-3 flex flex-col items-center gap-2">
                <img src="https://cdn.simpleicons.org/docker/2496ED" alt="Docker" class="h-7 w-7" />
                <span class="text-xs text-white/80">Docker</span>
              </div>

              <div class="rounded-xl border border-white/10 bg-white/5 p-3 flex flex-col items-center gap-2">
                <img src="https://cdn.simpleicons.org/postgresql/4169E1" alt="PostgreSQL" class="h-7 w-7" />
                <span class="text-xs text-white/80">SQL</span>
              </div>

              <div class="rounded-xl border border-white/10 bg-white/5 p-3 flex flex-col items-center gap-2">
                <img src="https://cdn.simpleicons.org/git/F05032" alt="Git" class="h-7 w-7" />
                <span class="text-xs text-white/80">Git</span>
              </div>

              <div class="rounded-xl border border-white/10 bg-white/5 p-3 flex flex-col items-center gap-2">
                <img src="https://cdn.simpleicons.org/githubactions/2088FF" alt="CI/CD" class="h-7 w-7" />
                <span class="text-xs text-white/80">CI/CD</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- Projects -->
      <section id="projects" class="max-w-6xl mx-auto px-6 py-16">
        <h2 class="text-2xl md:text-3xl font-semibold">Projects that I’m proud of</h2>
        <div class="mt-8 grid md:grid-cols-3 gap-5">
          <article class="card p-5">ft_transcendence (clickable later)</article>
          <article class="card p-5">ft_irc</article>
          <article class="card p-5">minishell</article>
        </div>
      </section>

      <section class="max-w-6xl mx-auto px-16 py-16">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src="../assets/card-top.jpg" alt="Sunset in the mountains">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur elit. Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </div>
      </section>

    </main>

    <!-- Footer -->
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
