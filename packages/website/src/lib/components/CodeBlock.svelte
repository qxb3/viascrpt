<script>
  import { CodeBlock } from '@skeletonlabs/skeleton'

  export let language
  export let code
  export let hideCopyBtn = false
</script>

<CodeBlock
  {language}
  {code}
  button={hideCopyBtn ?  "hidden" : "btn btn-sm !text-white bg-surface-400"}
></CodeBlock>
