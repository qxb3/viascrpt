<script>
  import OAuthButton from '$lib/components/OAuthButton.svelte'

  const oAuthButtons = [
    {
      title: 'Login with Google',
      icon: 'fab fa-google',
      background: 'bg-google'
    },
    {
      title: 'Login with Github',
      icon: 'fab fa-github',
      background: 'bg-github'
    }
  ]
</script>

<div class="container p-4">
  <div class="mt-8 text-center">
    <h1>Sign In</h1>
  </div>

  <div class="mt-12 max-w-lg mx-auto space-y-4">
    {#each oAuthButtons as oAuthButton}
      <OAuthButton {...oAuthButton} />
    {/each}
  </div>

  <div class="text-center mt-8">
    <p>
      Dont have an account?
      <a href="/signup">Sign Up!</a>
    </p>
  </div>
</div>
