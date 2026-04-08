<script setup>
import { projects } from '../data/projects'

function projectInitials(title) {
  return title
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 3)
    .toUpperCase()
}
</script>

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
      <h1 class="mb-8 text-3xl font-bold tracking-tight text-cyan-300 md:text-4xl">
        Projects
      </h1>
      <section class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <a
          v-for="project in projects"
          :key="project.id"
          :href="project.repoUrl"
          target="_blank"
          rel="noreferrer"
          class="project-tile group overflow-hidden rounded-3xl border border-white/12 bg-white/[0.03]"
        >
          <div class="relative h-44 overflow-hidden border-b border-white/10">
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.title"
              class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />
            <div
              v-else
              class="project-placeholder flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_20%_20%,rgba(103,232,249,0.3),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.24),transparent_45%),radial-gradient(circle_at_50%_100%,rgba(34,211,238,0.26),transparent_60%),#0c1424]"
            >
              <span class="text-4xl font-bold tracking-wider text-white/70">
                {{ projectInitials(project.title) }}
              </span>
            </div>

          </div>

          <div class="p-5">
            <div class="flex items-start justify-between gap-3">
              <h2 class="text-xl font-semibold tracking-tight text-white">
                {{ project.title }}
              </h2>
              <span class="rounded-lg border border-white/15 px-2 py-1 text-xs text-white/60">
                {{ project.year }}
              </span>
            </div>

            <p class="mt-3 text-sm leading-7 text-white/75">
              {{ project.description }}
            </p>

            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="`${project.id}-${tag}`"
                class="rounded-full border border-white/15 bg-white/[0.03] px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/70"
              >
                {{ tag }}
              </span>
            </div>

            <div class="mt-5 flex items-center justify-between">
              <span class="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200/80">
                View repository
              </span>
              <span class="text-cyan-200 transition group-hover:translate-x-1">↗</span>
            </div>
          </div>
        </a>
      </section>
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

<style scoped>
.project-tile {
  transform: translateY(0);
  transition: transform 220ms ease, border-color 220ms ease, background-color 220ms ease;
}

.project-tile:hover {
  transform: translateY(-4px);
  border-color: rgba(103, 232, 249, 0.35);
  background-color: rgba(255, 255, 255, 0.05);
}
</style>
