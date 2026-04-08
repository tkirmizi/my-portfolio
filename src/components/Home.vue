<script setup>
import ProjectCard from './ProjectCard.vue';
import irc from "../assets/irc.jpg"
import minishell from "../assets/minishell.png"
import trans from "../assets/trans.png"
import About from './Contact.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isAboutOpen = ref(false)
const isResumeOpen = ref(false)

function openAbout() {
  isAboutOpen.value = true
}

function closeAbout() {
  isAboutOpen.value = false
}

function openResume(){
  isResumeOpen.value = true
}

function closeResume(){
  isResumeOpen.value = false
}

function onKeyDown(event) {
  if (event.key === 'Escape'){
    closeAbout()
    closeResume()
  }
}

onMounted(() => window.addEventListener('keydown', onKeyDown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeyDown))

const projects = [
  {
    title: 'Transcendence',
    description: 'A fullstack web applicaton like twitter or facebook vica versa. Features are excatly same like. We built with modern web technologies, including frontend UI, backend APIs, authentiction, database integration with providing also real time communication with web sockets.',
    image: trans,
    href: 'https://github.com/agdemirayhan/ft_transcendence'
  },
  {
    title: 'Irc',
    description: 'A custom IRC server built in C++ implementing real-time communication over TCP sockets. Supports multiple clients, channels, authentication, and core IRC commands such as messaging and nickname management. Focused on low-level networking concepts like non-blocking I/O and all architecture.',
    image: irc,
    href: 'https://github.com/tkirmizi/ft_irc'
  },
  {
    title: 'Minishell',
    description: 'A fully functional Unix-like shell written in C, inspired by bash behavior. Implements command parsing, piping, redirections, environment variables, and process management, system calls, process control, and terminal interactions.',

    image: minishell,
    href: 'https://github.com/tkirmizi/Unix-shell'
  }
]

function handleTechCardMove(event) {
  const element = event.currentTarget

  if (!element) return

  const rect = element.getBoundingClientRect()
  const offsetX = event.clientX - rect.left
  const offsetY = event.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateY = ((offsetX - centerX) / centerX) * 8
  const rotateX = ((centerY - offsetY) / centerY) * 8
  const translateX = ((offsetX - centerX) / centerX) * 4
  const translateY = ((offsetY - centerY) / centerY) * 4

  element.style.setProperty('--tech-rotate-x', `${rotateX.toFixed(2)}deg`)
  element.style.setProperty('--tech-rotate-y', `${rotateY.toFixed(2)}deg`)
  element.style.setProperty('--tech-shift-x', `${translateX.toFixed(2)}px`)
  element.style.setProperty('--tech-shift-y', `${translateY.toFixed(2)}px`)
}

function resetTechCard(event) {
  const element = event.currentTarget

  if (!element) return

  element.style.setProperty('--tech-rotate-x', '0deg')
  element.style.setProperty('--tech-rotate-y', '0deg')
  element.style.setProperty('--tech-shift-x', '0px')
  element.style.setProperty('--tech-shift-y', '0px')
}

function handleContactCardMove(event) {
  const element = event.currentTarget

  if (!element) return

  const rect = element.getBoundingClientRect()
  const offsetX = event.clientX - rect.left
  const offsetY = event.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateY = ((offsetX - centerX) / centerX) * 6
  const rotateX = ((centerY - offsetY) / centerY) * 6

  element.style.setProperty('--contact-rotate-x', `${rotateX.toFixed(2)}deg`)
  element.style.setProperty('--contact-rotate-y', `${rotateY.toFixed(2)}deg`)
}

function resetContactCard(event) {
  const element = event.currentTarget

  if (!element) return

  element.style.setProperty('--contact-rotate-x', '0deg')
  element.style.setProperty('--contact-rotate-y', '0deg')
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-ink text-white">
    <div class="pointer-events-none fixed inset-0 -z-10 bg-mesh"></div>

    <header class="sticky top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur">
      <nav class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" class="text-lg font-semibold tracking-tight">Taha Kirmizioglu</a>
        <ul class="flex items-center gap-6 text-sm text-white/80">
          <li><a href="#projects" class="cursor-pointer transition hover:text-white">Projects</a></li>
          <li>
            <button type="button" class="cursor-pointer transition hover:text-white" @click="openResume">
              Cv
            </button>
          </li>
          <li>
            <button type="button" class="cursor-pointer rounded-xl bg-cyan-300 p-1 text-sm font-semibold text-slate-900 transition hover:bg-cyan-200" @click="openAbout">
              Contact
            </button>
          </li>

        </ul>
      </nav>
    </header>

    <main class="flex-1">
      <section class="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
        <div class="card p-6 md:p-8">
          <h1 class="text-4xl md:text-6xl font-bold leading-tight">
            Hi, it’s Taha.
            <span class="block text-cyan-300">I’m a fullstack software developer.</span>
          </h1>
          <div class="mt-6 flex gap-3">
            <a href="mailto:t.kirmizioglu@outlook.com"
              class="rounded-xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-cyan-200">
              Email me
            </a>
            <a href="https://github.com/tkirmizi"
            target="_blank"
              class="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold hover:bg-white/10">
              My Github
            </a>
          </div>
        </div>

        <div class="card p-6">
          <p class="text-xs uppercase tracking-[0.2em] text-white/50">About</p>

          <p class="mt-3 max-w-md text-sm leading-7 text-white/80">
            Junior Software Developer trained at 42 Heilbronn with professional experience at Schwarz IT.
          </p>

          <div class="my-6 h-px bg-white/10"></div>

          <div>
            <h3 class="text-sm font-semibold text-white/90">Tech Stack</h3>

            <div class="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-6">
              <div class="tech-card rounded-xl border border-white/10 bg-white/5 p-3 flex flex-col items-center gap-2"
                @pointermove="handleTechCardMove" @pointerleave="resetTechCard">
                <img src="https://cdn.simpleicons.org/go/00ADD8" alt="Go" class="tech-card-icon h-7 w-7" />
                <span class="text-xs text-white/80">Go</span>
              </div>

              <div class="tech-card rounded-xl border border-white/10 bg-white/5 p-3 flex flex-col items-center gap-2"
                @pointermove="handleTechCardMove" @pointerleave="resetTechCard">
                <img src="https://cdn.simpleicons.org/vuedotjs/42b883" alt="Vue.js" class="tech-card-icon h-7 w-7" />
                <span class="text-xs text-white/80">Vue</span>
              </div>

              <div class="tech-card rounded-xl border border-white/10 bg-white/5 p-3 flex flex-col items-center gap-2"
                @pointermove="handleTechCardMove" @pointerleave="resetTechCard">
                <img src="https://cdn.simpleicons.org/docker/2496ED" alt="Docker" class="tech-card-icon h-7 w-7" />
                <span class="text-xs text-white/80">Docker</span>
              </div>

              <div class="tech-card rounded-xl border border-white/10 bg-white/5 p-3 flex flex-col items-center gap-2"
                @pointermove="handleTechCardMove" @pointerleave="resetTechCard">
                <img src="https://cdn.simpleicons.org/postgresql/4169E1" alt="PostgreSQL"
                  class="tech-card-icon h-7 w-7" />
                <span class="text-xs text-white/80">SQL</span>
              </div>

              <div class="tech-card rounded-xl border border-white/10 bg-white/5 p-3 flex flex-col items-center gap-2"
                @pointermove="handleTechCardMove" @pointerleave="resetTechCard">
                <img src="https://cdn.simpleicons.org/git/F05032" alt="Git" class="tech-card-icon h-7 w-7" />
                <span class="text-xs text-white/80">Git</span>
              </div>

              <div class="tech-card rounded-xl border border-white/10 bg-white/5 p-3 flex flex-col items-center gap-2"
                @pointermove="handleTechCardMove" @pointerleave="resetTechCard">
                <img src="https://cdn.simpleicons.org/githubactions/2088FF" alt="CI/CD"
                  class="tech-card-icon h-7 w-7" />
                <span class="text-xs text-white/80">CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects -->
      <section id="projects" class="max-w-6xl mx-auto px-6 py-16">
        <h2 class="text-2xl md:text-3xl font-semibold">Projects that I am proud of</h2>
        <div class="mt-8 grid md:grid-cols-3 gap-5">
          <ProjectCard v-for="project in projects" :key="project.title" v-bind="project" />
        </div>
      </section>

      <Transition name="contact-modal" appear>
        <div
          v-if="isAboutOpen"
          class="contact-modal-overlay fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-[2px]"
          @click="closeAbout"
        >
          <div
            class="contact-modal-panel relative w-full max-w-md"
            @click.stop
            @pointermove="handleContactCardMove"
            @pointerleave="resetContactCard"
          >
            <button
              type="button"
              class="absolute -right-2 -top-2 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-red-300/40 bg-red-500/90 text-white shadow-lg transition"
              aria-label="Close"
              @click="closeAbout"
            >
              ×
            </button>
            <About />
          </div>
        </div>
      </Transition>

      <Transition name="resume-modal" appear>
        <div
          v-if="isResumeOpen"
          class="fixed inset-0 z-[110] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-[2px]"
          @click="closeResume"
        >
          <div
            class="relative w-full max-w-5xl rounded-2xl border border-white/15 bg-[#0b1220]/95 p-4 shadow-2xl shadow-cyan-900/20"
            @click.stop
          >
            <button
              type="button"
              class="absolute cursor-pointer right-3 top-3 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-red-300/40 bg-red-500/90 text-white shadow-lg transition"
              aria-label="Close resume"
              @click="closeResume"
            >
              ×
            </button>

            <iframe
              src="/taha_cv_tr.pdf"
              title="Taha CV"
              class="h-[72vh] w-full rounded-xl bg-white"
            ></iframe>

            <div class="mt-4 flex justify-end gap-3">
              <a
                href="/taha_cv_tr.pdf"
                target="_blank"
                rel="noreferrer"
                class="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-white"
              >
                New Tab
              </a>
              <a
                href="/taha_cv_tr.pdf"
                download
                class="rounded-xl bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-900"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </Transition>

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

<style scoped>
.contact-modal-enter-active,
.contact-modal-leave-active {
  transition: opacity 260ms ease;
}

.contact-modal-enter-active .contact-modal-panel,
.contact-modal-leave-active .contact-modal-panel {
  transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1), opacity 220ms ease;
}

.contact-modal-panel {
  transform:
    perspective(1100px)
    rotateX(var(--contact-rotate-x, 0deg))
    rotateY(var(--contact-rotate-y, 0deg));
  transform-style: preserve-3d;
  will-change: transform;
}

.contact-modal-enter-from,
.contact-modal-leave-to {
  opacity: 0;
}

.contact-modal-enter-from .contact-modal-panel,
.contact-modal-leave-to .contact-modal-panel {
  opacity: 0;
  transform: translateY(18px) scale(0.94);
}

.contact-modal-enter-to .contact-modal-panel,
.contact-modal-leave-from .contact-modal-panel {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.resume-modal-enter-active,
.resume-modal-leave-active {
  transition: opacity 260ms ease;
}

.resume-modal-enter-active > div,
.resume-modal-leave-active > div {
  transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1), opacity 220ms ease;
}

.resume-modal-enter-from,
.resume-modal-leave-to {
  opacity: 0;
}

.resume-modal-enter-from > div,
.resume-modal-leave-to > div {
  opacity: 0;
  transform: translateY(18px) scale(0.97);
}
</style>
