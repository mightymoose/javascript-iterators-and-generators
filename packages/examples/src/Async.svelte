<script>
  let value = 'waiting';

  (async function() {
       const firstPromise = new Promise(
         (resolve) => setTimeout(resolve, 1000)
       );
       await firstPromise; // Pass control to whatever is in charge of waiting

       value = 'just a little longer';

       const secondPromise = new Promise(
         (resolve) => setTimeout(resolve, 1000)
       );
       await secondPromise; // Pass control to whatever is in charge of waiting

       value = 'done waiting!';
  })();
</script>

{value}
