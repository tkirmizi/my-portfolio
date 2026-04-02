<template>
  <a
    :href="href"
    target="_blank"
    rel="noreferrer"
    class="project-card group block overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045]"
    @pointermove="handleMove"
    @pointerleave="resetCard"
  >
    <div class="project-card-media relative overflow-hidden border-b border-white/10">
      <img :src="image" :alt="title" class="project-card-image h-56 w-full object-cover" />
      <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#070b14] via-[#070b14]/35 to-transparent"></div>
    </div>

    <div class="relative p-6">
      <div class="mb-4 flex items-center justify-between gap-3">
        <h3 class="project-card-content text-xl font-semibold tracking-tight text-white">
          {{ title }}
        </h3>
        <span
          class="project-card-chip rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-cyan-200"
        >
          GitHub
        </span>
      </div>

      <p class="project-card-content text-sm leading-7 text-white/82">
        {{ description }}
      </p>
    </div>
  </a>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  image: String,
  href: {
    type: String,
    default: '#',
  },
})

function handleMove(event) {
  const element = event.currentTarget

  if (!element) return

  const rect = element.getBoundingClientRect()
  const offsetX = event.clientX - rect.left
  const offsetY = event.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateY = ((offsetX - centerX) / centerX) * 5
  const rotateX = ((centerY - offsetY) / centerY) * 5

  element.style.setProperty('--project-rotate-x', `${rotateX.toFixed(2)}deg`)
  element.style.setProperty('--project-rotate-y', `${rotateY.toFixed(2)}deg`)
}

function resetCard(event) {
  const element = event.currentTarget

  if (!element) return

  element.style.setProperty('--project-rotate-x', '0deg')
  element.style.setProperty('--project-rotate-y', '0deg')
}
</script>
