<script setup>
import ContactCard from '../Contact.vue'

defineProps({
  isContactOpen: {
    type: Boolean,
    default: false,
  },
  isResumeOpen: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['close-contact', 'close-resume'])
</script>

<template>
  <Transition name="contact-modal" appear>
    <div
      v-if="isContactOpen"
      class="contact-modal-overlay fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-[2px]"
      @click="emit('close-contact')"
    >
      <div class="contact-modal-panel relative w-full max-w-md" @click.stop>
        <button
          type="button"
          class="absolute -right-2 -top-2 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-red-300/40 bg-red-500/90 text-white shadow-lg transition"
          aria-label="Close"
          @click="emit('close-contact')"
        >
          ×
        </button>
        <ContactCard />
      </div>
    </div>
  </Transition>

  <Transition name="resume-modal" appear>
    <div
      v-if="isResumeOpen"
      class="fixed inset-0 z-[110] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-[2px]"
      @click="emit('close-resume')"
    >
      <div
        class="relative w-full max-w-5xl rounded-2xl border border-white/15 bg-[#0b1220]/95 p-4 shadow-2xl shadow-cyan-900/20"
        @click.stop
      >
        <button
          type="button"
          class="absolute cursor-pointer right-3 top-3 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-red-300/40 bg-red-500/90 text-white shadow-lg transition"
          aria-label="Close resume"
          @click="emit('close-resume')"
        >
          ×
        </button>

        <iframe src="/taha_cv_tr.pdf" title="Taha CV" class="h-[72vh] w-full rounded-xl bg-white"></iframe>

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

.contact-modal-enter-from,
.contact-modal-leave-to {
  opacity: 0;
}

.contact-modal-enter-from .contact-modal-panel,
.contact-modal-leave-to .contact-modal-panel {
  opacity: 0;
  transform: translateY(18px) scale(0.94);
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
