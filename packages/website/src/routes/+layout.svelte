<script>
  import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css'
  import '@skeletonlabs/skeleton/styles/all.css'
  import '../app.css'

  import MenuModal from '../lib/modals/Menu.svelte'
  import { links } from '$lib/vars.js'

  import hljs from 'highlight.js'
  import 'highlight.js/styles/github-dark.css'

  import {
    AppShell,
    AppBar,
    Modal,
    Toast,
    modalStore,
    storeHighlightJs
  } from '@skeletonlabs/skeleton'

  storeHighlightJs.set(hljs)

  const modalComponentRegistry = {
    modalComponentOne: { ref: MenuModal }
  }

  function openMenu() {
    modalStore.trigger({
      type: 'component',
      component: 'modalComponentOne',
      position: 'items-start'
    })
  }
</script>

<Toast position="t" />
<Modal components={modalComponentRegistry} />

<AppShell>
  <svelte:fragment slot="header">
    <AppBar
      background="bg-surface-600"
      gridColumns="grid-cols-2"
      slotDefault="place-self-start"
      slotTrail="place-content-end"
      regionRowMain="container"
    >
      <a href="/" class="!text-xl font-bold">
        <span class="text-secondary-500">Via</span>
        <span class="text-primary-500">Scrpt</span>
      </a>

      <svelte:fragment slot="trail">
        <button on:click={openMenu} class="md:hidden btn">
          <i class="fa fa-bars fa-lg"></i>
        </button>

        <div class="hidden md:block">
          <ul class="flex gap-x-6">
            {#each links as link}
              <li>
                <a href={link.path} class="link">{link.title}</a>
              </li>
            {/each}
          </ul>
        </div>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>

	<slot />

	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>
