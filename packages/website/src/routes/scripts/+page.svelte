<script>
  let scripts = [
    {
      id: 0,
      name: 'eiv',
      description: 'DevTools in via powered by eruda',
      author: {
        name: 'qxb3'
      },
      meta: {
        stars: 1000,
        comments: 356
      }
    },
    {
      id: 1,
      name: 'logger',
      description: 'Node.js logger',
      author: {
        name: 'qxb3'
      },
      meta: {
        stars: 534,
        comments: 86
      }
    }
  ]

  function star(id) {
    scripts = scripts.map(v => {
      if (id === v.id)
        v.starred = !v.starred

      return v
    })
  }
</script>

<svelte:head>
  <title>ViaScrpts | Scripts</title>
</svelte:head>

<div class="container p-4">
  <h2 class="font-bold">Scripts</h2>

  <div class="mt-4 space-y-4">
    {#each scripts as script}
      {@const scriptPath = "/scripts/" + script.name.toLowerCase()}

      <a href={scriptPath} class="block relative card link p-4">
        <div class="absolute top-0 right-0 p-4">
          <button on:click={() => star(script.id)} class="btn border border-surface-400 rounded-md p-2">
            <i class="{script.starred ? 'fa' : 'fa-regular'} fa-star"></i>
          </button>
        </div>

        <div class="pb-4">
          <div class="flex items-center gap-4">
            <h3 class="font-extrabold">
              <span class="text-primary-500">{script.name}</span>
            </h3>
            <span class="badge variant-filled-secondary">author: {script.author.name}</span>
          </div>
          <p>{script.description}</p>
        </div>

        <div class="h-[0.1px] bg-surface-400"></div>

        <div class="flex items-center gap-4 pt-4">
          <p>
            <i class="fa fa-star"></i>
            {script.meta.stars}
          </p>

          <a href="{scriptPath}/#comments" class="link">
            <i class="fa fa-comment"></i>
            {script.meta.comments}
          </a>
        </div>
      </a>
    {/each}
  </div>
</div>
