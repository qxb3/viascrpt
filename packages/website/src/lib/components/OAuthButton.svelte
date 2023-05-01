<script>
  export let title
  export let icon
  export let background
</script>

<div class="flex items-center gap-3 rounded-sm p-4 border-[0.1px] border-surface-400 {background}">
  <span>
    <i class="{icon} fa-lg"></i>
  </span>

  <div>
    <p class="!text-lg">{title}</p>
  </div>
</div>
