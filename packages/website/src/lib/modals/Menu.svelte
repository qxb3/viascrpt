<script>
  import { ListBox, ListBoxItem, modalStore } from '@skeletonlabs/skeleton'
  import { links } from '$lib/vars.js'
</script>

<div class="w-[97%] bg-surface-500 p-4 rounded-md border-[0.1px] border-surface-400">
  <div class="flex place-content-between">
    <ListBox
      rounded="rouned-none"
      active="bg-surface-500"
      hover="bg-surface-500"
      class="grow"
    >
      {#each links as link}
        <ListBoxItem class="hover:underline">
          <span>
            <li class="fa {link.icon}"></li>
          </span>
          {link.title}
        </ListBoxItem>
      {/each}
    </ListBox>

    <button on:click={() => modalStore.close()} class="btn h-fit">
      <i class="fa fa-times fa-lg"></i>
    </button>
  </div>

  <div class="my-3 h-[0.1px] bg-surface-400"></div>

  <div class="mt-7">
    <a href="/login" class="btn variant-filled-primary">Sign In</a>
  </div>
</div>
