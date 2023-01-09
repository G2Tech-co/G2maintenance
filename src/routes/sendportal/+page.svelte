<script>
  let submitValue = "Send";

  function handleSubmit(event) {
    submitValue = "Thank you!";

    setTimeout(() => {
      submitValue = "Send";
    }, 1000);
  }
</script>

<h2>Email subscription</h2>

<form action="" method="post" on:submit|trusted={handleSubmit}>
  <input type="text" name="first_name" placeholder="First name" required><br>
  <input type="text" name="last_name" placeholder="Last name" required><br>
  <input type="email" name="email" placeholder="Email" required><br>
  <input type="submit" bind:value={submitValue}>
</form>

<style>
  input {
    margin: 10px;
    padding: 10px;
    border: 1px solid #34495E;
    border-radius: 5px;
  }
</style>
