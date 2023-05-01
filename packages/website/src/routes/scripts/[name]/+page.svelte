<script>
  export let data
</script>

<svelte:head>
  <title>ViaScrpts | {data.name}</title>
</svelte:head>

<div class="container p-4">
  <div class="card p-4">
    <div>
      <div class="flex items-center gap-4">
        <h3 class="font-extrabold">
          <span class="text-primary-500">{data.name}</span>
        </h3>
        <span class="badge variant-filled-secondary">author: {data.author.name}</span>
      </div>
      <p>{data.description}</p>
    </div>


  </div>
</div>
