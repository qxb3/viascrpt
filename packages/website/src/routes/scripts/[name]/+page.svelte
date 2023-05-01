<script>
  import CodeBlock from '$lib/components/CodeBlock.svelte'

  export let data
</script>

<svelte:head>
  <title>ViaScrpts | {data.name}</title>
</svelte:head>

<div class="container p-4">
  <div class="card p-4">
    <div>
      <div class="flex items-center gap-4">
        <h1 class="font-extrabold">
          <span class="text-primary-500">{data.name}</span>
        </h1>
        <span class="badge variant-filled-secondary">author: {data.author.name}</span>
      </div>
      <p>{data.description}</p>
    </div>

    <div class="mt-4 py-8">
      <h2 class="font-bold mb-4">Code:</h2>
      <CodeBlock
        language='js'
        code={data.code}
        hideCopyBtn
      />
    </div>

    <div class="card h-[0.1px]"></div>

    <div class="pt-8">
      <button class="btn btn-sm variant-ghost-primary">
        Copy Script
      </button>

      <button class="btn btn-sm variant-ghost-primary">
        Copy Url
      </button>

      <button class="btn btn-sm variant-ghost-primary">
        Share Script
      </button>
    </div>
  </div>
</div>
