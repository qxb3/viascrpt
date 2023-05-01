<script>
  import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css'
  import '@skeletonlabs/skeleton/styles/all.css'
  import '../app.css'

  import { AppShell, AppBar, Modal, modalStore } from '@skeletonlabs/skeleton'
  import { links } from '$lib/vars.js'
  import MenuModal from '../lib/modals/Menu.svelte'

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

<Modal components={modalComponentRegistry}/>

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
        <span class="text-blue-200">Via</span>
        <span class="text-lime-300">Scrpt</span>
      </a>

      <svelte:fragment slot="trail">
        <button on:click={openMenu} class="md:hidden btn">
          <i class="fa fa-bars fa-lg"></i>
        </button>

        <div class="hidden md:block">
          <ul class="flex gap-x-6">
            {#each links as link}
              <li>
                <a href={link.path}>{link.title}</a>
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
