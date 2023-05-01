<script>
  import CodeBlock from '$lib/components/CodeBlock.svelte'
  import { clipboard, toastStore } from '@skeletonlabs/skeleton'

  export let data

  function copy(message) {
    toastStore.clear()
    toastStore.trigger({
      message,
      background: 'variant-filled-success'
    })
  }
</script>

<svelte:head>
  <title>ViaScrpts | {data.name}</title>
</svelte:head>

<div class="container p-4">
  <div class="card p-4">
    <div class="pb-4">
      <div class="flex items-center gap-4">
        <h1 class="font-extrabold">
          <span class="text-primary-500">{data.name}</span>
        </h1>
        <span class="badge variant-filled-secondary">author: {data.author.name}</span>
      </div>
      <p>{data.description}</p>
    </div>

    <div class="card h-[0.1px]"></div>

    <div class="py-4 pb-8">
      <h2 class="font-bold mb-4">Code:</h2>
      <CodeBlock
        language='js'
        code={data.code}
        hideCopyBtn
      />
    </div>

    <div class="card h-[0.1px]"></div>

    <div class="flex flex-wrap items-center gap-3 pt-8">
      <button on:click={() => copy('Copied Script!')} use:clipboard={data.code} class="btn btn-sm variant-filled-tertiary">
        <span>
          <li class="fa fa-code"></li>
        </span>
        <span>Copy Script</span>
      </button>

      <button on:click={() => copy('Copied URL!')} class="btn btn-sm variant-filled-tertiary">
        <span>
          <li class="fa fa-link"></li>
        </span>
        <span>Copy URL</span>
      </button>

      <button class="btn btn-sm variant-filled-tertiary">
        <span>
          <li class="fa fa-share"></li>
        </span>
        <span>Share</span>
      </button>
    </div>
  </div>
</div>
