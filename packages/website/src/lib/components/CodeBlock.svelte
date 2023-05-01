<script>
  import { CodeBlock } from '@skeletonlabs/skeleton'

  export let language
  export let code
</script>

<CodeBlock
  {language}
  {code}
  button="btn btn-sm !text-white bg-surface-400"
></CodeBlock>
